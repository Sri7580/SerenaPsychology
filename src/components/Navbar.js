import { useState } from 'react';
import Image from 'next/image';
import Contact from './Contact'; // Make sure this file exists

const Navbar = () => {
  const [showContact, setShowContact] = useState(false);

  return (
    <nav className="px-4 py-2 w-full bg-white shadow-sm">
      <div className="flex justify-between items-center max-w-screen-lg mx-auto gap-3">
        <div className="flex items-center gap-3">
          <Image
            src="/brain.png"
            alt="Logo"
            width={40}
            height={40}
            className="w-10 h-10 object-contain"
          />
          <div className="flex flex-col leading-tight">
            <h1 className="text-green-900 text-base sm:text-lg md:text-xl tracking-wide">
              <span className="font-lora italic">Dr. </span>
              <span className="font-extrabold font-sans">Serena Blake</span>
              <span className="font-light font-serif">, PsyD.</span>
            </h1>
            <p className="text-xs sm:text-sm text-gray-600">Psychological Services</p>
          </div>
        </div>

        <button
          onClick={() => setShowContact(true)}
          className="bg-green-700 text-white px-4 py-2 rounded-full text-sm sm:text-base hover:bg-green-800 transition"
        >
          Contact
        </button>
      </div>

      {/* Contact Modal */}
      {showContact && <Contact onClose={() => setShowContact(false)} />}
    </nav>
  );
};

export default Navbar;
