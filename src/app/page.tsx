"use client";

import Footer from "@/components/footer/page";
import Navbar from "@/components/navbar/page";
import HomeContent from "@/components/content/page";

import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "@/app/firebase/config";
import { useRouter } from "next/navigation";
import Image from "next/image";

export default function Home() {
  const [user] = useAuthState(auth);
  const router = useRouter();
  const userSession = sessionStorage.getItem("user");
  console.log("sessionStorage: ", sessionStorage);

  console.log({ user });

  if (!user && !userSession) {
    router.push("/sign-up");
  }

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-1 relative">
        <div className="absolute inset-0 z-0 overflow-hidden">
          <Image
            src="/assets/nbg.jpg"
            fill
            className="object-cover "
            alt="par"
            quality={80}
          />
        </div>
        <div className="absolute inset-0 bg-black/30"></div>
        <div className="flex-grow relative z-10">
          <HomeContent />
        </div>
      </main>
      <Footer />
    </div>
  );
}

// email
// :
// testDavid@gmail.com
// password
// :
// testtest123
