import React from "react";

const Contact = () => {
  return (
    <section className="bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-4">Get in Touch</h2>
      <p className="mb-4 text-gray-600">
        We'd love to hear from you! Whether you have a question about our brews,
        delivery, pricing, or anything else — our team is ready to help.
      </p>
      <div className="space-y-2 text-gray-700">
        <p><strong>Email:</strong> support@coffeebrew.com</p>
        <p><strong>Phone:</strong> +91 98765 43210</p>
        <p><strong>Address:</strong> 123 Coffee Lane, Brew City, India</p>
        <p><strong>Working Hours:</strong> Mon - Sat, 9 AM - 7 PM</p>
      </div>
    </section>
  );
};

export default Contact;
