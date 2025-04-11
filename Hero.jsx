import React from "react";

const Hero = () => {
  const scrollToMenu = () => {
    const menuSection = document.getElementById("menu");
    if (menuSection) {
      menuSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="text-center py-20 bg-white">
      <h2 className="text-4xl font-bold mb-4 text-brown-800">Welcome to Bean & Bloom</h2>
      <p className="text-lg text-gray-600 mb-6">Where every sip tells a story.</p>
      <button
        onClick={scrollToMenu}
        className="px-6 py-3 bg-yellow-800 text-white rounded-lg hover:bg-yellow-700 transition"
      >
        Get Started
      </button>
    </section>
  );
};

export default Hero;
