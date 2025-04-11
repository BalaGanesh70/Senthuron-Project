// src/components/Card.jsx
import React from "react";

const Card = ({ title, description }) => (
  <div className="bg-white rounded-lg p-6 shadow hover:shadow-lg transition duration-300">
    <h3 className="text-xl font-semibold mb-2">{title}</h3>
    <p className="text-gray-600">{description}</p>
  </div>
);

export default Card;
