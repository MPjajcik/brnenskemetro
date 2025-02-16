import React from "react";
import { Link } from "react-router-dom";

export default function App() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-900 text-white p-10">
      {/* Nadpis */}
      <h1 className="text-5xl font-bold mb-6 text-center">
        🚇 Brněnské metro je tady! 🚇
      </h1>

      {/* Fake popis */}
      <p className="text-lg max-w-2xl text-center mb-8">
        Po letech plánování se konečně otevírá první linka Brněnského metra! 🏗️
        Připojte se k historické první jízdě a objevte nové možnosti dopravy pod
        moravskou metropolí.
      </p>

      {/* Tlačítko */}
      <Link to="/jizda">
        <button className="bg-yellow-400 hover:bg-yellow-500 text-black font-bold py-3 px-6 rounded-full text-lg shadow-lg transition transform hover:scale-105">
          CHCI SE PROJET PO BRNĚ METREM 🚆
        </button>
      </Link>
    </div>
  );
}
