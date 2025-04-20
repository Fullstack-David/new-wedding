"use client";

import { useState } from "react";
import { useCreateUserWithEmailAndPassword } from "react-firebase-hooks/auth";
import { auth } from "@/app/firebase/config";
import { useRouter } from "next/navigation";
import { ToastContainer, toast } from "react-toastify";
import { FaEye, FaEyeSlash } from "react-icons/fa";

function showSuccess(message: string) {
  toast.success(message, {
    position: "top-center",
    autoClose: 5000,
  });
}

const SignUp = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [createUserWithEmailAndPassword] =
    useCreateUserWithEmailAndPassword(auth);
  const router = useRouter();

  const handleSignUp = async () => {
    console.log("User Signed Up:", { email, password });
    try {
      const res = await createUserWithEmailAndPassword(email, password);
      console.log({ res });
      sessionStorage.setItem("user", "true");
      setEmail("");
      setPassword("");
      if (res) {
        showSuccess("Kontot har skapats");
      }
    } catch (error) {
      console.error("Error fetching the user", error);
    }
  };

  const SignIn = () => {
    router.push("/sign-in");
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-r from-[#BFE6BA] to-[#D3959B] ">
      <h1 className="mb-20 text-6xl">Välkomna till vår hemsida</h1>
      <div className="bg-blue-500 p-10 rounded-lg shadow-xl w-96">
        <h1 className="flex justify-center text-white text-2xl mb-5">
          Register
        </h1>
        <input
          type="email"
          placeholder="Ange e-postadress"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full p-3 mb-4 bg-gray-200 rounded outline-none text-black placeholder-gray-500"
        />
        <div className="relative">
          <input
            type={showPassword ? "text" : "password"}
            placeholder="Ange lösenord"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full p-3 mb-4 bg-gray-200 rounded outline-none text-black placeholder-gray-500"
          />
          <button
            type="button"
            aria-label={
              showPassword ? "Password Visible" : "Password Invisible"
            }
            className="absolute right-3 top-1/2 -translate-y-1/2 transform pb-3"
            onClick={() => {
              setShowPassword(!showPassword);
            }}
          >
            {showPassword ? (
              <FaEye className="w-5 h-5 text-grey-500" />
            ) : (
              <FaEyeSlash className="w-5 h-5 text-grey-500" />
            )}
          </button>
        </div>
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
      <ToastContainer />
    </div>
  );
};

export default SignUp;
