import React from "react";

const Offers = () => {
  return (
    <div className="bg-yellow-100 p-6 rounded-lg shadow">
      <h2 className="text-2xl font-bold mb-4">Current Offers</h2>
      <ul className="space-y-2 text-gray-700">
        <li>☕ Buy 1 Get 1 Free – Every Monday!</li>
        <li>🎁 Free Cookie with Large Coffee – Weekdays 2-5pm</li>
        <li>💳 10% off for Students – Show your ID</li>
      </ul>
    </div>
  );
};

export default Offers;
