export default function Footer() {
  return (
    <footer className="w-full bg-gray-800 text-white py-12 ">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">Om oss</h3>
            <p className="text-gray-400">
              Vi är dedikerade till att leverera högkvalitativa lösningar för
              våra kunder. Vår passion är att skapa värde och göra skillnad.
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
                  Tjänster
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
                <a
                  href="mailto:info@example.com"
                  className="hover:text-white transition duration-300"
                >
                  info@example.com
                </a>
              </li>
              <li>
                Telefon:{" "}
                <a
                  href="tel:+46123456789"
                  className="hover:text-white transition duration-300"
                >
                  +46 123 456 789
                </a>
              </li>
              <li>Adress: 123 Gatan, Stockholm, Sverige</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400">
          <p>
            &copy; {new Date().getFullYear()} Ditt Företag. Alla rättigheter
            förbehållna.
          </p>
        </div>
      </div>
    </footer>
  );
}
