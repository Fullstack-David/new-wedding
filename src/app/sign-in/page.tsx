"use client";

import { useState } from "react";
import { useSignInWithEmailAndPassword } from "react-firebase-hooks/auth";
import { auth } from "@/app/firebase/config";
import { useRouter } from "next/navigation";
import { FaEye, FaEyeSlash } from "react-icons/fa";

const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [signInWithEmailAndPassword, loading, error] =
    useSignInWithEmailAndPassword(auth);
  const router = useRouter();

  const handleSignIn = async (e: React.FormEvent) => {
    e.preventDefault();
    console.log("User Signed in:", { email, password });
    try {
      const res = await signInWithEmailAndPassword(email, password);
      if (res) {
        sessionStorage.setItem("user", "true");
        console.log("response", { res });
        setEmail("");
        setPassword("");
        router.push("/");
      }
    } catch (error) {
      console.error("Error sign in", error);
    }
  };

  const SignUp = () => {
    router.push("/sign-up");
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-r from-[#BFE6BA] to-[#D3959B]">
      <h1 className="mb-20 text-6xl">
        Välkomna till vår hemsida{email.slice(5)}
      </h1>
      <div className="bg-blue-500 p-10 rounded-lg shadow-xl w-96">
        <h1 className="flex text-white text-2xl mb-5 justify-center">
          Logga In
        </h1>
        <form onSubmit={handleSignIn}>
          <input
            type="email"
            placeholder="Ange E-post"
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
              className="w-full p-3 pr-10 mb-4 bg-gray-200 rounded outline-none text-black placeholder-gray-500"
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
                <FaEye className="w-5 h-5 text-gray-500" />
              ) : (
                <FaEyeSlash className="w-5 h-5 text-gray-500" />
              )}
            </button>
          </div>
          <button
            type="submit"
            className="w-full p-3 bg-indigo-600 rounded text-white hover:bg-indigo-500 disabled:opacity-50"
          >
            {loading ? "Loggar in..." : "Logga In"}
          </button>
        </form>
        <div className="flex justify-end mt-2">
          <button className="text-white pb-1 border-b-2 border-transparent hover:border-white transition-all duration-200">
            Spara lösenord
          </button>
        </div>
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
          <button
            onClick={SignUp}
            className="bg-emerald-600 p-3 w-full text-white hover:bg-emerald-500"
          >
            Register
          </button>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
