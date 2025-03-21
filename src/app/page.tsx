"use client";

import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "@/app/firebase/config";
import { useRouter } from "next/navigation";
import { signOut } from "firebase/auth";

export default function Home() {
  const [user] = useAuthState(auth);
  const router = useRouter();

  console.log({ user });

  if (!user) {
    router.push("/sign-up");
  }

  return (
    <div>
      <div>Home Page</div>
      <button
        onClick={() => signOut(auth)}
        className="ml-5 p-3 bg-indigo-600 rounded text-white hover:bg-indigo-500"
      >
        Log out
      </button>
    </div>
  );
}

// email
// :
// "testDavid@gmail.com"
// password
// :
// "testtest123"
