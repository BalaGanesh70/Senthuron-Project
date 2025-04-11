import React from "react";

const Header = () => {
  return (
    <header
      className="relative bg-cover bg-center h-[60vh] flex items-center justify-center text-white"
      style={{ backgroundImage: `url('/assets/coffee-bg.jpg')` }} // 🖼️ Put your coffee image in /public/assets
    >
      <div className="bg-black bg-opacity-50 p-6 rounded-lg text-center">
        <h1 className="text-5xl font-bold tracking-wide mb-2">Bean & Bloom</h1>
        <p className="text-lg italic">"Where every sip tells a story."</p>
      </div>
    </header>
  );
};

export default Header;
