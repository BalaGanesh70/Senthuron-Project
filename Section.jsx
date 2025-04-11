// src/components/Section.jsx
import React from "react";

const Section = ({ title, description, children }) => {
  return (
    <section className="bg-white rounded-lg shadow p-6 mb-6">
      <h2 className="text-2xl font-bold mb-2">{title}</h2>
      {description && <p className="text-gray-600 mb-4">{description}</p>}
      {children && <div>{children}</div>}
    </section>
  );
};

export default Section;
