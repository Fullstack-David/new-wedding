import Link from "next/link";
import { signOut } from "firebase/auth";
import { auth } from "@/app/firebase/config";

export default function Navbar() {
  return (
    <nav className="w-full bg-gray-800 text-white shadow-lg p-absolute b-0">
      <div className="container mx-auto">
        <div className="flex justify-between items-center h-20">
          <div className="flex-shrink-0">
            <Link
              href="/"
              className="text-xl font-bold text-white hover:text-gray-300 transition duration-300"
            >
              Bröllop
            </Link>
          </div>

          <div className="flex space-x-4">
            <Link
              href="/"
              className="px-3 py-2 text-sm font-medium text-white hover:bg-gray-700 rounded-md transition duration-300"
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
              onClick={() => signOut(auth)}
              className="px-3 py-2 text-sm font-medium text-white hover:bg-red-600 rounded-md transition duration-300"
            >
              Logga ut
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}
