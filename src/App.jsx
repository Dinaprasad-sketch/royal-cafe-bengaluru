import { useState } from "react";
import { Facebook, Instagram, MapPin, Phone, Star } from "lucide-react";

const sections = {
  home: (
    <div className="text-center space-y-4">
      <h1 className="text-4xl font-bold text-red-600">Royal Café Bengaluru</h1>
      <p className="text-lg text-gray-700">Welcome to the taste of RCB spirit – where every dish is a match-winner!</p>
    </div>
  ),
  menu: (
    <div className="text-center">
      <h2 className="text-2xl font-semibold mb-4">Our Menu</h2>
      <p className="text-gray-600">Coming soon: A full list of our legendary biryanis, burgers, and Bengaluru specials.</p>
    </div>
  ),
  contact: (
    <div className="text-center space-y-2">
      <p><MapPin className="inline mr-2" /> MG Road, Bengaluru</p>
      <p><Phone className="inline mr-2" /> +91 98765 43210</p>
      <div className="flex justify-center space-x-4 mt-2">
        <a href="#"><Facebook /></a>
        <a href="#"><Instagram /></a>
      </div>
    </div>
  )
};

export default function App() {
  const [active, setActive] = useState('home');

  return (
    <div className="min-h-screen bg-white text-gray-900 p-4">
      <nav className="flex justify-center gap-6 text-lg font-medium mb-6">
        {Object.keys(sections).map((key) => (
          <button key={key} onClick={() => setActive(key)} className={active === key ? 'text-red-600' : ''}>
            {key.charAt(0).toUpperCase() + key.slice(1)}
          </button>
        ))}
      </nav>
      <main className="max-w-2xl mx-auto">{sections[active]}</main>
      <footer className="text-center mt-8 text-sm text-gray-500">
        <p>© 2025 Royal Café Bengaluru</p>
      </footer>
    </div>
  );
}