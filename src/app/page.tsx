"use client";

import Footer from "@/components/footer/page";
import Navbar from "@/components/navbar/page";

import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "@/app/firebase/config";
import { useRouter } from "next/navigation";

export default function Home() {
  const [user] = useAuthState(auth);
  const router = useRouter();
  const userSession = sessionStorage.getItem("user");

  console.log({ user });

  // if (!user && !userSession) {
  //   router.push("/sign-up");
  // }

  return (
    <main className="flex h-screen flex-col items-center justify-between">
      <Navbar />
      <div>Home Page</div>
      <Footer />
    </main>
  );
}

// email
// :
// testDavid@gmail.com
// password
// :
// testtest123
