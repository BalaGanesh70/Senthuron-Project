import React from "react";
import FeatureCard from "./FeatureCard";

const Features = () => {
  const features = [
    {
      image: "/assets/feature1.jpg",
      title: "Rich Aroma",
      description: "Experience the delightful and natural aroma of freshly brewed coffee."
    },
    {
      image: "/assets/feature2.jpg",
      title: "Organic Beans",
      description: "We source only the best organically grown beans for a healthier brew."
    },
    {
      image: "/assets/feature3.jpg",
      title: "Barista Crafted",
      description: "Expertly prepared by passionate baristas with years of experience."
    },
    {
      image: "/assets/feature4.jpg",
      title: "Eco Packaging",
      description: "Sustainable, recyclable packaging because we care about the planet."
    },
    {
      image: "/assets/feature5.jpg",
      title: "Fast Delivery",
      description: "Enjoy your coffee anywhere, anytime with our speedy doorstep delivery."
    },
    {
      image: "/assets/feature6.jpg",
      title: "Affordable Prices",
      description: "Great taste doesn’t have to be expensive. Quality coffee at the right price."
    },
    {
      image: "/assets/feature7.jpg",
      title: "Seasonal Specials",
      description: "Delight in seasonal blends that match the flavor of each season."
    },
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
      {features.map((f, i) => (
        <FeatureCard
          key={i}
          image={f.image}
          title={f.title}
          description={f.description}
        />
      ))}
    </div>
  );
};

export default Features;
