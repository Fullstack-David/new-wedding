"use client";

import Footer from "@/components/footer/page";
import Navbar from "@/components/navbar/page";
import HomeContent from "@/components/content/page";
import LoadingSpinner from "@/components/loadingSpinner/page";
import Image from "next/image";

import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "@/app/firebase/config";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { ToastContainer } from "react-toastify";

export default function Home() {
  const [user, loading] = useAuthState(auth);
  const [isCheckingAuth, setIsCheckingAuth] = useState(true);
  const router = useRouter();

  // ALT-1
  useEffect(() => {
    const userSession = sessionStorage.getItem("user");
    if (!loading && !user && !userSession) {
      router.push("/sign-in");
    } else {
      setIsCheckingAuth(false);
    }
  }, [user, loading, router]);

  if (loading || isCheckingAuth) {
    return <LoadingSpinner />;
  }
  if (loading) return <LoadingSpinner />;
  if (!user) return <LoadingSpinner />;

  // ALT-2
  // if (loading) return <div>Loading...</div>;
  // if (!user && !userSession) {
  //   redirect("/sign-in");
  // }

  console.log({ user });

  return (
    <>
      <ToastContainer position="bottom-right" />
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
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
          <div className="absolute inset-0 bg-black/30"></div>
          <div className="flex-grow relative z-10">
            <HomeContent />
          </div>
        </main>
        <Footer />
      </div>
    </>
  );
}

// email :testDavid@gmail.com
// password: testtest123
