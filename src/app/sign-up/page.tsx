"use client";

import { useState } from "react";
import { useCreateUserWithEmailAndPassword } from "react-firebase-hooks/auth";
import { auth } from "@/app/firebase/config";
import { useRouter } from "next/navigation";

const SignUp = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [createUserWithEmailAndPassword] =
    useCreateUserWithEmailAndPassword(auth);
  const router = useRouter();

  const handleSignUp = async () => {
    console.log("User Signed Up:", { email, password });
    try {
      const res = await createUserWithEmailAndPassword(email, password);
      console.log({ res });
      sessionStorage.setItem("user", JSON.stringify(true));
      setEmail("");
      setPassword("");
    } catch (error) {
      console.error("Error fetching the user", error);
    }
  };

  const SignIn = () => {
    router.push("/sign-in");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-white">
      <div className="bg-blue-500 p-10 rounded-lg shadow-xl w-96">
        <h1 className="flex justify-center text-white text-2xl mb-5">
          Register
        </h1>
        <input
          type="email"
          placeholder="E-post"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full p-3 mb-4 bg-gray-200 rounded outline-none text-black placeholder-gray-500"
        />
        <input
          type="password"
          placeholder="Lösenord"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full p-3 mb-4 bg-gray-200 rounded outline-none text-black placeholder-gray-500"
        />
        <button
          onClick={handleSignUp}
          className="w-full p-3 bg-indigo-600 rounded text-white hover:bg-indigo-500"
        >
          Register
        </button>
        <hr className="my-5 border-white" />
        <button
          onClick={SignIn}
          className="w-full p-3 bg-emerald-600 rounded text-white hover:bg-emerald-500 mt-2"
        >
          Logga In
        </button>
      </div>
    </div>
  );
};

export default SignUp;
