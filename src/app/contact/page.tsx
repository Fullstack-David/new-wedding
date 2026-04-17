"use client";

import Footer from "@/components/footer/page";
import Navbar from "@/components/navbar/page";


export default function Contact() {
  return (
    <main>
      <Navbar />  
      <div>
       <main className="relative min-h-screen flex items-center justify-center">
  {/* Bakgrundsbild-struktur (samma som hem-sidan) */}
  <div className="absolute inset-0 z-0 overflow-hidden">
  </div>
  {/* <div className="absolute inset-0 bg-black/40"></div> */}

  {/* Formuläret - Centrerat med z-10 */}
  <div className="relative z-10 w-full max-w-md p-8 bg-[#1e3a8a]/80 backdrop-blur-lg rounded-3xl shadow-2xl border border-white/20 m-4">
    <h2 className="text-3xl font-bold text-white mb-8 text-center">Kontakta oss</h2>
    
    <form className="space-y-5">
      {/* Namn */}
      <div>
        <label className="block text-sm font-medium text-blue-100 mb-1.5 ml-1">Namn</label>
        <input 
          type="text" 
          className="w-full px-4 py-3 bg-white/10 border border-white/30 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-400 text-white placeholder-blue-200/50"
          placeholder="Ditt namn"
        />
      </div>

      {/* Email */}
      <div>
        <label className="block text-sm font-medium text-blue-100 mb-1.5 ml-1">Emailadress</label>
        <input 
          type="email" 
          className="w-full px-4 py-3 bg-white/10 border border-white/30 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-400 text-white placeholder-blue-200/50"
          placeholder="namn@exempel.se"
        />
      </div>

      {/* Mobilnummer */}
      <div>
        <label className="block text-sm font-medium text-blue-100 mb-1.5 ml-1">Mobilnummer</label>
        <input 
          type="tel" 
          className="w-full px-4 py-3 bg-white/10 border border-white/30 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-400 text-white placeholder-blue-200/50"
          placeholder="07x-xxx xx xx"
        />
      </div>

      {/* Meddelande */}
      <div>
        <label className="block text-sm font-medium text-blue-100 mb-1.5 ml-1">Meddelande</label>
        <textarea 
          rows={4}
          className="w-full px-4 py-3 bg-white/10 border border-white/30 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-400 text-white placeholder-blue-200/50"
          placeholder="Skriv till oss..."
        ></textarea>
      </div>

      {/* Knappen */}
      <button 
        type="submit" 
        className="w-full py-4 px-4 bg-white text-[#1e3a8a] font-extrabold rounded-xl hover:bg-blue-50 transition-all duration-300 shadow-lg transform hover:-translate-y-1 active:scale-95 mt-4 uppercase tracking-wider"
      >
        Skicka meddelande
      </button>
    </form>
  </div>
</main>
      </div>
      <Footer />
    </main>
  );
}
