import React from "react";

const Reviews = () => {
  const reviewList = [
    { name: "Aarav", comment: "Absolutely love the cozy vibe and rich flavor!" },
    { name: "Sneha", comment: "Affordable and delicious. Highly recommend the hazelnut latte!" },
    { name: "Karan", comment: "Fast delivery and eco packaging – top notch!" },
  ];

  return (
    <div className="bg-white p-6 rounded-lg shadow">
      <h2 className="text-2xl font-bold mb-4">Customer Reviews</h2>
      <ul className="space-y-4">
        {reviewList.map((r, i) => (
          <li key={i} className="border-b pb-2">
            <p className="font-semibold">{r.name}</p>
            <p className="text-gray-600">{r.comment}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Reviews;
