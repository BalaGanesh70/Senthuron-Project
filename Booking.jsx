import React, { useState } from "react";

const Booking = () => {
  const [formData, setFormData] = useState({
    name: "",
    date: "",
    time: "",
    guests: 1,
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Table booked for ${formData.name} on ${formData.date} at ${formData.time} for ${formData.guests} guest(s)!`);
    // You can replace alert with API submission logic.
  };

  return (
    <section className="bg-white p-6 rounded-lg shadow-md max-w-xl mx-auto">
      <h2 className="text-2xl font-bold mb-4 text-center">Book a Table</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input type="text" name="name" placeholder="Your Name" value={formData.name} onChange={handleChange} required className="w-full border px-3 py-2 rounded" />
        <input type="date" name="date" value={formData.date} onChange={handleChange} required className="w-full border px-3 py-2 rounded" />
        <input type="time" name="time" value={formData.time} onChange={handleChange} required className="w-full border px-3 py-2 rounded" />
        <input type="number" name="guests" value={formData.guests} onChange={handleChange} min="1" max="20" className="w-full border px-3 py-2 rounded" />
        <button type="submit" className="bg-orange-600 text-white px-4 py-2 rounded w-full hover:bg-orange-700">Reserve Now</button>
      </form>
    </section>
  );
};

export default Booking;
