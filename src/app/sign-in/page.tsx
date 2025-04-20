"use client";

import { signInWithEmailAndPassword } from "firebase/auth";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { auth } from "@/app/firebase/config";
import { FirebaseError } from "firebase/app";
import { ToastContainer, toast } from "react-toastify";

function showError(message: string) {
  toast.error(message, {
    position: "top-center",
    autoClose: 5000,
  });
}

const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  const handleSignIn = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    console.log("User Signed in:", { auth, email, password });

    if (!/\S+@\S+\.\S+/.test(email)) {
      showError("Ogiltig e-postadress");
      setIsLoading(false);
      return;
    }

    if (!email || !password) {
      showError("Fyll i båda fält");
      setIsLoading(false);
      return;
    }

    try {
      const res = await signInWithEmailAndPassword(auth, email, password);
      if (res) {
        sessionStorage.setItem("user", "true");
        console.log("response", { res });
        setEmail("");
        setPassword("");
        router.push("/");
      }
    } catch (error) {
      if (error instanceof FirebaseError) {
        switch (error.code) {
          case "auth/user-not-found":
          case "auth/wrong-password":
          case "auth/invalid-credential":
            showError("Felaktig e-post eller lösenord");
            break;
          default:
            showError(`Inloffningsfel: ${error.message}`);
        }
      } else {
        showError("Ett oväntat fel uppstod");
      }
    } finally {
      setIsLoading(false);
    }
  };

  const SignUp = () => {
    router.push("/sign-up");
  };

  // const ResetPassword = () => {
  //   router.push("/reset-password");
  // };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-r from-[#BFE6BA] to-[#D3959B]">
      <h1 className="mb-20 text-6xl">Välkomna till vår hemsida</h1>
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
            disabled={isLoading}
            className="w-full p-3 bg-indigo-600 rounded text-white hover:bg-indigo-500 disabled:opacity-50"
          >
            {isLoading ? "Loggar in..." : "Logga In"}
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
              href="/reset-password"
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
      <ToastContainer />
    </div>
  );
};

export default SignIn;
