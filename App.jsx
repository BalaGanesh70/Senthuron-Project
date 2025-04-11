import React from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Section from "./components/Section";
import Footer from "./components/Footer";
import BottomNav from "./components/BottomNav";
import NavBar from "./components/NavBar";
import Features from "./components/Features";
import MenuSection from "./components/MenuSection";
import Offers from "./components/Offers";
import Reviews from "./components/Reviews";
import Booking from "./components/Booking"; // ✅ Import Booking

const App = () => {
  return (
    <div className="flex flex-col min-h-screen justify-between bg-gray-50 scroll-smooth">
      <NavBar />
      <Header />
      <main className="flex-1 p-4">
        <div id="home">
          <Hero />
        </div>

        <div id="menu" className="my-6">
          <MenuSection />
        </div>

        <div id="features" className="my-6">
          <Features />
        </div>

        <div id="offers" className="my-6">
          <Offers />
        </div>

        <div id="reviews" className="my-6">
          <Reviews />
        </div>

        <div id="booking" className="my-6">
          <Booking />
        </div>

        <div id="contact" className="my-6">
          <Section
            title="Contact Us"
            description="We’d love to hear from you! Reach out to us through any of the methods below."
          >
            <div className="text-gray-700 mt-4 space-y-2">
              <p><strong>📍 Address:</strong> 123 Coffee Street, Bean City, CA 90210</p>
              <p><strong>📞 Phone:</strong> (123) 456-7890</p>
              <p><strong>✉️ Email:</strong> contact@coffeetime.com</p>
              <p><strong>🕒 Hours:</strong> Mon - Fri: 9am - 6pm</p>
            </div>
          </Section>
        </div>
      </main>
      <Footer />
      <BottomNav />
    </div>
  );
};

export default App;
