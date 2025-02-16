import React from "react";
import { Link } from "react-router-dom";

export default function Jizda() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-900 text-white p-10">
      {/* Velký nadpis BRNO s větším prostorem */}
      <div
        className="p-20" // Zvýšíme prostor kolem textu
        style={{
          cursor:
            "url('https://cdn-icons-png.flaticon.com/64/5813/5813984.png') 8 8, auto", // Menší kurzor
        }}
      >
        <h1 className="text-9xl font-bold transition-all duration-300">BRNO</h1>
      </div>

      {/* Odkaz zpět */}
      <Link to="/">
        <button className="mt-10 bg-yellow-400 hover:bg-yellow-500 text-black font-bold py-3 px-6 rounded-full text-lg shadow-lg transition transform hover:scale-105">
          Zpět na hlavní stránku
        </button>
      </Link>
    </div>
  );
}
