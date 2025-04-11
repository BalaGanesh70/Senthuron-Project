import React from "react";

const menuItems = [
  { name: "Espresso", price: "₹120" },
  { name: "Cappuccino", price: "₹150" },
  { name: "Latte", price: "₹160" },
  { name: "Mocha", price: "₹170" },
  { name: "Cold Brew", price: "₹180" },
];

const MenuSection = () => {
  return (
    <section id="menu" className="py-16 bg-gray-100">
      <h3 className="text-3xl font-bold text-center mb-8">Our Menu</h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
        {menuItems.map((item, i) => (
          <div key={i} className="bg-white rounded-lg p-6 shadow-md text-center">
            <h4 className="text-xl font-semibold mb-2">{item.name}</h4>
            <p className="text-gray-700 text-lg">{item.price}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default MenuSection;
