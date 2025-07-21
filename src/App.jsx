import { useState } from "react";
import { Facebook, Instagram, MapPin, Phone, Star } from "lucide-react";

const sections = {
  home: (
    <div className="text-center space-y-6">
      <h1 className="text-5xl font-extrabold text-red-700 flex justify-center items-center gap-3">
        <span role="img" aria-label="cricket">🏏</span>
        Royal Café Bengaluru
        <span role="img" aria-label="trophy">🏆</span>
      </h1>
      <p className="text-xl text-gray-700">
        Experience the thrill of cricket and the taste of victory with every bite!
      </p>
      <div className="flex flex-wrap justify-center gap-8 mt-8">
        <div className="bg-yellow-50 rounded-lg shadow-md p-4 w-60">
          <h3 className="text-lg font-bold text-green-700 flex items-center gap-2">
            <span role="img" aria-label="biryani">🍛</span> Royal Biryani
          </h3>
          <p className="text-gray-600">A crowd-favorite, spicy and flavorful, just like a winning six!</p>
        </div>
        <div className="bg-blue-50 rounded-lg shadow-md p-4 w-60">
          <h3 className="text-lg font-bold text-blue-700 flex items-center gap-2">
            <span role="img" aria-label="burger">🍔</span> Bengaluru Burger
          </h3>
          <p className="text-gray-600">Stacked high with taste, perfect for match days.</p>
        </div>
        <div className="bg-red-50 rounded-lg shadow-md p-4 w-60">
          <h3 className="text-lg font-bold text-red-700 flex items-center gap-2">
            <span role="img" aria-label="fries">🍟</span> Stadium Fries
          </h3>
          <p className="text-gray-600">Crispy, golden, and always a hit with fans!</p>
        </div>
        <div className="bg-green-50 rounded-lg shadow-md p-4 w-60">
          <h3 className="text-lg font-bold text-green-700 flex items-center gap-2">
            <span role="img" aria-label="icecream">🍦</span> Victory Sundae
          </h3>
          <p className="text-gray-600">Celebrate every win with a sweet treat.</p>
        </div>
      </div>
      {/* <div className="mt-8 flex justify-center gap-4">
        <span className="text-2xl" role="img" aria-label="cricket">🏏</span>
        <span className="text-2xl" role="img" aria-label="stadium">🏟️</span>
        <span className="text-2xl" role="img" aria-label="food">🍽️</span>
      </div> */}
      <div className="mt-6 flex justify-center">
        <a
          href="https://wa.me/917996799901?text=Hey%20I%20need%20to%20Enquiry%20about%20the%20catering%20Prices"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-green-600 hover:bg-green-700 text-white font-bold py-2 px-6 rounded-lg shadow transition"
        >
          Book Catering
        </a>
      </div>
      <div className="mt-8 flex justify-center gap-4">
        <span className="text-2xl" role="img" aria-label="cricket">🏏</span>
        <span className="text-2xl" role="img" aria-label="stadium">🏟️</span>
        <span className="text-2xl" role="img" aria-label="food">🍽️</span>
      </div>
    </div>
  ),
menu: (
  <div className="text-center">
    <h2 className="text-2xl font-semibold mb-6">Our Menu</h2>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
      {/* Veg Starters */}
      <div className="relative rounded-xl shadow-lg p-6 bg-yellow-50 overflow-hidden
        bg-[url('/images/IMG-20250522-WA0002.jpg')] bg-cover bg-center">
        <div className="absolute inset-0 bg-yellow-50 bg-opacity-40"></div>
        <div className="relative">
          <h3 className="text-xl font-bold text-yellow-700 mb-4">Veg Starters</h3>
          <ul className="space-y-2 text-left">
            <li>Crispy Corn - 119/-</li>
            <li>Babycorn Manchurian - 99/-</li>
            <li>Gobi Manchurian - 99/-</li>
            <li>Gobi Chilli - 99/-</li>
            <li>Gobi 65 - 99/-</li>
            <li>Mushroom Manchurian - 89/-</li>
            <li>Mushroom Chilli - 89/-</li>
            <li>Mushroom Pepper - 89/-</li>
            <li>Panner Manchurian - 99/-</li>
            <li>Panner Chilli - 99/-</li>
            <li>Panner 65 - 99/-</li>
          </ul>
        </div>
      </div>
      {/* Non Veg Starters */}
      <div className="relative rounded-xl shadow-lg p-6 bg-red-50 overflow-hidden
        bg-[url('/images/IMG-20250522-WA0002.jpg')] bg-cover bg-center">
        <div className="absolute inset-0 bg-red-50 bg-opacity-40"></div>
        <div className="relative">
          <h3 className="text-xl font-bold text-red-700 mb-4">Non Veg Starters</h3>
          <ul className="space-y-2 text-left">
            <li>Chilli Chicken - 99/-</li>
            <li>Chicken 65 - 149/-</li>
            <li>Chicken Manchurian - 140/-</li>
            <li>Pepper Chicken - 140/-</li>
            <li>Double Omlette - 50/-</li>
            <li>Chicken Kabab 1/2 - 150/-</li>
            <li>Chicken Kabab FULL - 300/-</li>
            <li>Chicken Kabab 1KG - 400/-</li>
          </ul>
        </div>
      </div>
      {/* Chinese */}
      <div className="relative rounded-xl shadow-lg p-6 bg-green-50 overflow-hidden
        bg-[url('/images/IMG-20250522-WA0002.jpg')] bg-cover bg-center">
        <div className="absolute inset-0 bg-green-50 bg-opacity-40"></div>
        <div className="relative">
          <h3 className="text-xl font-bold text-green-700 mb-4">Chinese</h3>
          <ul className="space-y-2 text-left">
            <li>Veg Fried Rice - 69/-</li>
            <li>Veg Noodles - 79/-</li>
            <li>Gobi Fried Rice - 79/-</li>
            <li>Gobi Noodles - 79/-</li>
            <li>Egg Fried Rice (2egg) - 79/-</li>
            <li>Egg Noodles (2egg) - 79/-</li>
            <li>Chicken Fried Rice - 89/-</li>
            <li>Chicken Noodles - 89/-</li>
            <li>Mushroom Fried Rice - 89/-</li>
            <li>Mushroom Noodles - 89/-</li>
            <li>Babycorn Fried Rice - 89/-</li>
            <li>Babycorn Noodles - 89/-</li>
            <li>Panner Fried Rice - 99/-</li>
            <li>Panner Noodles - 99/-</li>
          </ul>
        </div>
      </div>
      {/* Biryani's */}
      <div className="relative rounded-xl shadow-lg p-6 bg-orange-50 overflow-hidden
        bg-[url('/images/IMG-20250522-WA0001.jpg')] bg-cover bg-center">
        <div className="absolute inset-0 bg-orange-50 bg-opacity-40"></div>
        <div className="relative">
          <h3 className="text-xl font-bold text-orange-700 mb-4">Biryani's</h3>
          <ul className="space-y-2 text-left">
            <li>Boneless Chicken Biryani - 199/-</li>
            <li>Fry Piece Biryani - 119/-</li>
            <li>Guntur Biryani - 119/-</li>
            <li>Egg Biryani - 79/-</li>
            <li>Biryani Rice - 59/-</li>
            <li>Panner, Mushroom Biryani's - 139/-</li>
            <li>Hyderabadi Chicken Dum Biryani (half/full/1kg) - 99/179/249/-</li>
          </ul>
        </div>
      </div>
      {/* Fruit Milkshakes */}
      <div className="relative rounded-xl shadow-lg p-6 bg-pink-50 overflow-hidden
        bg-[url('https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=400&q=80')] bg-cover bg-center">
        <div className="absolute inset-0 bg-pink-50 bg-opacity-80"></div>
        <div className="relative">
          <h3 className="text-xl font-bold text-pink-700 mb-4">Fruit Milkshakes</h3>
          <ul className="space-y-2 text-left">
            <li>Annar - 80/-</li>
            <li>Apple - 80/-</li>
            <li>Avagado - 80/-</li>
            <li>Chikku - 80/-</li>
            <li>Banana - 60/-</li>
            <li>Mango - 80/-</li>
            <li>Litchi - 70/-</li>
            <li>Dates - 70/-</li>
            <li>Anjeer - 70/-</li>
            <li>Dryfruit - 80/-</li>
            <li>Oreo - 80/-</li>
            <li>KitKat - 80/-</li>
            <li>Dragon - 80/-</li>
            <li>Kiwi - 80/-</li>
            <li>Cold Coffee Milkshake - 60/-</li>
          </ul>
        </div>
      </div>
      {/* Lassi's */}
      <div className="relative rounded-xl shadow-lg p-6 bg-yellow-100 overflow-hidden
        bg-[url('https://images.unsplash.com/photo-1519864600265-abb23847ef2c?auto=format&fit=crop&w=400&q=80')] bg-cover bg-center">
        <div className="absolute inset-0 bg-yellow-100 bg-opacity-80"></div>
        <div className="relative">
          <h3 className="text-xl font-bold text-yellow-700 mb-4">Lassi's</h3>
          <ul className="space-y-2 text-left">
            <li>Sweet - 50/-</li>
            <li>Salt - 50/-</li>
            <li>Mango - 60/-</li>
            <li>Nannari - 60/-</li>
            <li>Fruit - 60/-</li>
            <li>Vanilla - 60/-</li>
            <li>Strawberry - 60/-</li>
            <li>Avagado - 70/-</li>
            <li>Banana - 60/-</li>
          </ul>
        </div>
      </div>
      {/* Ice Cream's */}
      <div className="relative rounded-xl shadow-lg p-6 bg-blue-50 overflow-hidden
        bg-[url('/images/IMG-20250522-WA0013.jpg')] bg-cover bg-center">
        <div className="absolute inset-0 bg-blue-50 bg-opacity-80"></div>
        <div className="relative">
          <h3 className="text-xl font-bold text-blue-700 mb-4">Ice Cream's</h3>
          <ul className="space-y-2 text-left">
            <li>Vanilla - 50/-</li>
            <li>Chocolate - 50/-</li>
            <li>Mango - 50/-</li>
            <li>Pista - 50/-</li>
            <li>Blackcurrent - 50/-</li>
            <li>Strawberry - 50/-</li>
            <li>Butterscotch - 50/-</li>
            <li>Kulfi - 50/-</li>
            <li>Dry Fruit - 50/-</li>
            <li>Tuti Fruity - 50/-</li>
            <li>Tender Coconut - 50/-</li>
          </ul>
        </div>
      </div>
      {/* Special Ice Cream's */}
      <div className="relative rounded-xl shadow-lg p-6 bg-purple-50 overflow-hidden
        bg-[url('https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=400&q=80')] bg-cover bg-center">
        <div className="absolute inset-0 bg-purple-50 bg-opacity-80"></div>
        <div className="relative">
          <h3 className="text-xl font-bold text-purple-700 mb-4">Special Ice Cream's</h3>
          <ul className="space-y-2 text-left">
            <li>Watermelon Boat with Ice cream - 149/-</li>
            <li>Watermelon Sunday with Ice cream - 149/-</li>
            <li>Mad Mango - 99/-</li>
            <li>Mango Mastani - 99/-</li>
            <li>Fruit salad with Ice cream - 99/-</li>
            <li>Pink win - 109/-</li>
            <li>Banana Split - 109/-</li>
            <li>Strawberry Malbus - 109/-</li>
            <li>Jelly with Ice cream - 89/-</li>
            <li>Death By Chocolate - 160/-</li>
            <li>Hot Chocolate Fudge - 140/-</li>
            <li>Single Brown with Ice cream - 140/-</li>
            <li>Brownie with Ice cream - 140/-</li>
          </ul>
        </div>
      </div>
    </div>
  </div>
),
  contact: (
    <div className="text-center space-y-2">
      <p><MapPin className="inline mr-2" /> 12, Vivekananda Road, CKB Layout, Chandra Layout, Marathahalli, Bengaluru, Karnataka 560037</p>
      <p><Phone className="inline mr-2" /> +91 7996799901</p>
      <div className="flex justify-center space-x-4 mt-2">
        <a href="https://wa.me/917996799901?text=Hey%20I%20need%20to%20Enquiry%20about%20the%20catering%20Prices" target="_blank" rel="noopener noreferrer">
          <Phone />
        </a>
        <a href="https://www.instagram.com/royal_cafe_bengaluru_rcb_cafe?igsh=MWFvMHczdnEwbnBreQ=="><Instagram /></a>
      </div>
    </div>
  )
};

export default function App() {
  const [active, setActive] = useState('home');

    return (
    <div className="min-h-screen bg-gradient-to-br from-red-400 via-yellow-300 to-blue-400 text-gray-900 p-4">
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