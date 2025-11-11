"use client";

import Image from "next/image";
import { Car, Zap, Shield, Wifi } from "lucide-react";

const CarShowcaseSection = () => {
  const carFeatures = [
    {
      icon: Car,
      title: "Smart Mobility",
      description:
        "Next-generation automotive solutions with AI-powered navigation and autonomous driving capabilities.",
    },
    {
      icon: Zap,
      title: "Electric Innovation",
      description:
        "Sustainable electric vehicle technology with advanced battery management systems.",
    },
    {
      icon: Shield,
      title: "Safety First",
      description:
        "Advanced safety features including collision detection and emergency response systems.",
    },
    {
      icon: Wifi,
      title: "Connected Cars",
      description:
        "IoT-enabled vehicles with real-time data analytics and cloud connectivity.",
    },
  ];

  return (
    <section className="py-20 bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white font-poppins mb-6">
            Automotive Technology Excellence
          </h2>
          <p className="text-lg md:text-xl text-gray-300 font-inter max-w-3xl mx-auto">
            Driving the future of transportation with cutting-edge automotive
            solutions
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Car Image */}
          <div className="relative">
            <div className="bg-gradient-to-br from-blue-600 to-purple-600 rounded-2xl p-8">
              <Image
                src="/images/cars/tech-car.svg"
                alt="Technology Car"
                width={400}
                height={400}
                className="w-full h-auto"
              />
            </div>

            {/* Floating elements */}
            <div className="absolute -top-4 -right-4 w-20 h-20 bg-yellow-400 rounded-full opacity-20 animate-pulse"></div>
            <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-pink-400 rounded-full opacity-20 animate-pulse animation-delay-2000"></div>
          </div>

          {/* Features */}
          <div className="space-y-8">
            {carFeatures.map((feature) => (
              <div key={feature.title} className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center">
                  <feature.icon className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-base md:text-lg font-semibold text-white font-poppins mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-gray-300 font-inter">
                    {feature.description}
                  </p>
                </div>
              </div>
            ))}

            <button className="bg-gradient-to-r from-blue-400 to-blue-600 hover:from-blue-500 hover:to-blue-700 text-white px-8 py-3 rounded-full text-lg font-semibold transition-all duration-300">
              Explore Automotive Solutions
            </button>
          </div>
        </div>

        {/* Additional Cars Grid */}
        <div className="mt-16 grid md:grid-cols-3 gap-8">
          {[1, 2, 3].map((car) => (
            <div
              key={car}
              className="bg-gray-800 rounded-2xl p-6 hover:bg-gray-700 transition-colors duration-300"
            >
              <div className="w-full h-32 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg mb-4 flex items-center justify-center">
                <Car className="w-16 h-16 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-white font-poppins mb-2">
                Smart Car Model {car}
              </h3>
              <p className="text-gray-300 font-inter text-sm">
                Advanced automotive technology with cutting-edge features and
                sustainable design.
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CarShowcaseSection;
