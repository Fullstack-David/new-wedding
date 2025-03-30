import Link from "next/link";
import { signOut } from "firebase/auth";
import { auth } from "@/app/firebase/config";
import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  const closeMenu = () => {
    setIsOpen(!isOpen);
  };

  // Stäng menyn vid ESC-tangent
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeMenu();
    };
    document.addEventListener("keydown", handleEscape);
    return () => document.removeEventListener("keydown", handleEscape);
  }, []);

  // förhindra att scrolla vid öppen meny
  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "auto";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isOpen]);

  useEffect(() => {
    const handleClickOutside = (event: globalThis.MouseEvent) => {
      const target = event.target as HTMLElement;
      if (menuRef.current && !menuRef.current.contains(target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <nav className="w-full bg-gray-800 text-white shadow-lg p-absolute b-0">
      <div className="container mx-auto">
        <div className="flex justify-between items-center h-20">
          <div className="flex-shrink-0">
            <Link
              href="/"
              className="text-xl font-bold text-white hover:text-gray-300 transition duration-300 pl-5"
            >
              Bröllop
            </Link>
          </div>
          {/* Desktop Navbar */}
          <div className="hidden md:flex justify-between items-center p-4">
            <Link
              href="/"
              className="px-3 py-2 text-sm font-medium text-white hover:bg-gray-700 rounded-md transition duration-300"
              onClick={() => setIsOpen(false)}
            >
              Hem
            </Link>
            <Link
              href="/pictures"
              className="px-3 py-2 text-sm font-medium text-white hover:bg-gray-700 rounded-md transition duration-300"
            >
              Bilder
            </Link>
            <Link
              href="/contact"
              className="px-3 py-2 text-sm font-medium text-white hover:bg-gray-700 rounded-md transition duration-300"
            >
              Kontakt
            </Link>
            <button
              onClick={() => {
                signOut(auth);
                sessionStorage.removeItem("user");
              }}
              className="px-3 py-2 text-sm font-medium text-white hover:bg-red-600 rounded-md transition duration-300"
            >
              Logga ut
            </button>
          </div>
          {/* Mobil läge */}

          <div
            ref={menuRef}
            className="md:hidden justify-between items-center gap-8 p-4"
          >
            <button
              onClick={closeMenu}
              className="p-2 focus:outline-none text-3xl"
              aria-label="Meny"
              aria-expanded={isOpen}
            >
              ☰
            </button>
            <AnimatePresence>
              {isOpen && (
                <motion.div
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                >
                  <div className="fixed inset-10 bg-white z-40 mt-20 rounded-md bg-gray-900">
                    <div className="container mx-auto mt-20 px-4 flex flex-col h-full border-gray-200">
                      <button
                        onClick={closeMenu}
                        className="absolute top-4 right-4 px-3 py-1 text-2xl text-black"
                        aria-label="Close menu"
                      >
                        x
                      </button>
                      <div className="flex flex-col gap-6 text-xl">
                        <Link
                          href="/"
                          onClick={() => setIsOpen(false)}
                          className="px-3 py-2 text-sm font-medium hover:bg-gray-400 transition duration-300 text-black rounded-md"
                        >
                          Hem
                        </Link>
                        <Link
                          href="/pictures"
                          onClick={() => setIsOpen(false)}
                          className="px-3 py-2 text-sm font-medium hover:bg-gray-400 transition-colors duration-300 text-black rounded-md "
                        >
                          Bilder
                        </Link>
                        <Link
                          href="/contact"
                          onClick={() => setIsOpen(false)}
                          className="px-3 py-2 text-sm font-medium hover:bg-gray-400 transition duration-300 text-black rounded-md"
                        >
                          Kontakt
                        </Link>
                        <button
                          onClick={() => {
                            signOut(auth);
                            sessionStorage.removeItem("user");
                          }}
                          className="px-3 py-2 text-sm bg-red-600 font-medium hover:bg-red-700 transition duration-300 text-white rounded-md"
                        >
                          Logga ut
                        </button>
                      </div>
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </nav>
  );
}
