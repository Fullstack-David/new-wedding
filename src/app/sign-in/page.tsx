"use client";

import { useState } from "react";
import { useSignInWithEmailAndPassword } from "react-firebase-hooks/auth";
import { auth } from "@/app/firebase/config";
import { useRouter } from "next/navigation";

const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [signInWithEmailAndPassword] = useSignInWithEmailAndPassword(auth);
  const router = useRouter();

  const handleSignIn = async () => {
    console.log("User Signd in:", { email, password });
    try {
      const res = await signInWithEmailAndPassword(email, password);
      console.log({ res });
      sessionStorage.setItem("user", JSON.stringify(true));
      setEmail("");
      setPassword("");
      router.push("/");
    } catch (error) {
      console.error("Error sign in", error);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-white">
      <div className="bg-blue-500 p-10 rounded-lg shadow-xl w-96">
        <h1 className="flex text-white text-2xl mb-5 justify-center">
          Logga In
        </h1>
        <input
          type="email"
          placeholder="E-post"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full p-3 mb-4 bg-gray-200 rounded outline-none text-white placeholder-gray-500"
        />
        <input
          type="passsword"
          placeholder="Lösenord"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full p-3 mb-4 bg-gray-200 rounded outline-none text-white placeholder-gray-500"
        />
        <button
          onClick={handleSignIn}
          className="w-full p-3 bg-indigo-600 rounded text-white hover:bg-indigo-500"
        >
          Logga In
        </button>
        <div className="flex justify-center gap-3">
          <p className="text-white mt-3">
            Glömt lösenordet?
            <a
              className="ml-2 pb-1 border-b-2 border-transparent 
             border-white text-white"
              href="#"
            >
              Klick här
            </a>
          </p>
        </div>
        <hr className="border-white my-4" />
        <div className="flex justify-center items-center">
          <button className="bg-emerald-600 p-3 w-full text-white hover:bg-emerald-500">
            Register
          </button>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
