import React, { useEffect } from "react";
import parcel from '../../../assets/assets/live-tracking.png'
import parcel2 from '../../../assets/assets/safe-delivery.png'
import parcel3 from '../../../assets/assets/call-center.png'
import Aos from "aos";

const KeyFeatures = () => {

useEffect(() => {
    Aos.init({
      duration: 1000,
      once: false,
      offset:100,
      easing:'ease-in-out' 
    });
  }, []);
  const features = [
    {
      title: "Live Parcel Tracking",
      description:
        "Track your order in real-time from the kitchen to your doorstep. Stay informed with live updates so you always know exactly when your food will arrive.",
      img: parcel,
      aos: "fade-right",
    },
    {
      title: "100% Safe Delivery",
      description:
        "We ensure safety at every step — from temperature-controlled packaging to contactless handover. Your food stays fresh, hygienic, and perfectly delivered.",
      img: parcel2,
      aos: "fade-left",
    },
    {
      title: "24/7 Call Center Support",
      description:
        "Our dedicated support team is available around the clock. Whether you need help tracking your order or resolving an issue, we’re always just a call away.",
      img: parcel3,
      aos: "fade-up",
    },
  ];

  return (
    <section className="max-w-6xl mx-auto py-16 px-6">
      <h2 data-aos="fade-down" className="text-3xl font-bold text-center mb-12 text-gray-800">
        Our Key Features
      </h2>
      <div className="space-y-10">
        {features.map((feature, index) => (
          <div
            key={index}
            data-aos={feature.aos}
            className="flex flex-col md:flex-row items-center bg-white rounded-2xl shadow-lg 
            overflow-hidden hover:shadow-lime-200 transition-shadow duration-300"
          >
            {/* Image Section */}
            <div className="md:w-1/3 w-full">
              <img
                src={feature.img}
                alt={feature.title}
                className="w-full p-10 h-60 "
              />
            </div>

            {/* Vertical Divider */}
            <div className="hidden md:block w-px h-48 border-l-2 border-dashed border-gray-300 mx-6"></div>

            {/* Horizontal Divider for Mobile */}
            <div className="block md:hidden w-1/2 border-t-2 border-dashed border-gray-300 my-4"></div>
            {/* Text Section */}
            <div className="md:w-2/3 w-full p-6">
              <h3 className="text-2xl font-semibold text-gray-800 mb-3">
                {feature.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {feature.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default KeyFeatures;
