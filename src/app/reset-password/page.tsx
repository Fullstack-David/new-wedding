"use client";

import { useRouter } from "next/navigation";

export default function ResetPassword() {
  const router = useRouter();

  const SignIn = () => {
    router.push("/sign-in");
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-r from-[#BFE6BA] to-[#D3959B]">
      <div className="bg-blue-500 p-10 rounded-lg shadow-xl w-96 ">
        <h1 className="flex text-white text-2xl mb-8 justify-center">
          Reset Password
        </h1>
        <form>
          <div className="flex flex-col">
            <label className="text-gray-800">New Password</label>
            <input
              type="password"
              placeholder="password"
              className="w-full p-3 mt-1 mb-4 bg-gray-200 rounded outline-none text-black placeholder-gray-500"
            />
          </div>
          <div className="flex flex-col m">
            <label className="text-gray-800">Confirm Password</label>
            <input
              type="password"
              placeholder="password"
              className="w-full p-3 mt-1 mb-4 bg-gray-200 rounded outline-none text-black placeholder-gray-500"
            />
          </div>
        </form>
        <div>
          <button className="bg-emerald-600 p-3 w-full text-white hover:bg-emerald-500 rounded">
            Reset Password
          </button>
        </div>
        <div className="flex justify-end mt-2">
          <a
            onClick={SignIn}
            className="ml-2 pb-1 border-b-2 border-transparent 
             border-white text-white"
          >
            Logga in
          </a>
        </div>
      </div>
    </div>
  );
}
