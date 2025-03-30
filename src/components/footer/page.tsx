export default function Footer() {
  return (
    <footer className="w-full bg-gray-800 text-white py-12 ">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">Om oss</h3>
            <p className="text-gray-400">
              Vi är så tacksamma att få dela denna dag med er. Er närvaro gör
              vårt bröllop ännu mer speciellt. Låt oss fira kärleken
              tillsammans!
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Snabblänkar</h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="/om-oss"
                  className="text-gray-400 hover:text-white transition duration-300"
                >
                  Om oss
                </a>
              </li>
              <li>
                <a
                  href="/tjanster"
                  className="text-gray-400 hover:text-white transition duration-300"
                >
                  Bilder
                </a>
              </li>
              <li>
                <a
                  href="/kontakt"
                  className="text-gray-400 hover:text-white transition duration-300"
                >
                  Kontakt
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Kontakt</h3>
            <ul className="text-gray-400 space-y-2">
              <li>
                Email:{" "}
                <a href="" className="hover:text-white transition duration-300">
                  Davidheidari2@gmail.com
                </a>
              </li>
              <li>
                Telefon:{" "}
                <a
                  href="tel:+46123456789"
                  className="hover:text-white transition duration-300"
                >
                  076 555 69 83
                </a>
              </li>
              <li>Adress: Kabelgatan 14, 41457 Göteborg</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} Alla rättigheter förbehållna.</p>
        </div>
      </div>
    </footer>
  );
}
