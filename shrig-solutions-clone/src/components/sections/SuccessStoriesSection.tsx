"use client";

import Image from "next/image";
import { ArrowRight, Star } from "lucide-react";
import { useTheme } from "@/contexts/ThemeContext";

const SuccessStoriesSection = () => {
  const { isDark } = useTheme();

  const caseStudies = [
    {
      title: "Aquabuildr",
      description:
        "A revolutionary aquarium management app built from scratch with AI-driven compatibility tools and advanced monitoring systems.",
      image: "/api/placeholder/400/300",
      category: "Mobile App",
      rating: 5,
    },
    {
      title: "Fishtechy",
      description:
        "A cutting-edge fishing app utilizing AR, AI, and 3D technologies to redefine fishing experiences.",
      image: "/api/placeholder/400/300",
      category: "AR/AI App",
      rating: 5,
    },
  ];

  return (
    <section
      id="resource"
      className={`py-20 transition-all duration-700 ${
        isDark ? "bg-gray-900" : "bg-gray-50"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2
            className={`text-3xl md:text-4xl lg:text-5xl font-bold font-poppins mb-6 transition-all duration-500 ${
              isDark ? "text-white" : "text-gray-900"
            }`}
          >
            Our Success Stories
          </h2>
          <p
            className={`text-lg md:text-xl font-inter max-w-3xl mx-auto transition-all duration-500 ${
              isDark ? "text-gray-300" : "text-gray-600"
            }`}
          >
            Transforming Ideas Into Industry Leaders
          </p>
        </div>

        {/* Case Studies Grid */}
        <div className="grid lg:grid-cols-2 gap-12">
          {caseStudies.map((study) => (
            <div key={study.title} className="group">
              <div
                className={`rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-500 transform hover:-translate-y-2 ${
                  isDark
                    ? "bg-gray-800 border border-gray-700/50"
                    : "bg-white border border-gray-100"
                }`}
              >
                {/* Image */}
                <div className="h-64 relative overflow-hidden">
                  <Image
                    src={`/images/media/${study.title.toLowerCase()}-app.svg`}
                    alt={study.title}
                    fill
                    className="object-cover"
                  />
                  <div
                    className={`absolute inset-0 transition-all duration-500 ${
                      isDark
                        ? "bg-gradient-to-br from-blue-500/30 to-purple-600/30"
                        : "bg-gradient-to-br from-blue-400/20 to-purple-500/20"
                    }`}
                  ></div>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-white text-center">
                      <h3 className="text-2xl md:text-3xl font-bold font-poppins mb-2">
                        {study.title}
                      </h3>
                      <span className="inline-block bg-white/20 px-3 py-1 rounded-full text-sm">
                        {study.category}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="p-8">
                  <div className="flex items-center justify-between mb-4">
                    <span
                      className={`text-sm font-medium transition-all duration-500 ${
                        isDark ? "text-blue-400" : "text-blue-600"
                      }`}
                    >
                      {study.category}
                    </span>
                    <div className="flex items-center space-x-1">
                      {[...Array(study.rating)].map((_, i) => (
                        <Star
                          key={i}
                          size={16}
                          className="text-yellow-400 fill-current"
                        />
                      ))}
                    </div>
                  </div>

                  <h3
                    className={`text-xl md:text-2xl font-bold font-poppins mb-4 group-hover:text-blue-600 transition-all duration-500 ${
                      isDark ? "text-white" : "text-gray-900"
                    }`}
                  >
                    {study.title}
                  </h3>
                  <p
                    className={`font-inter leading-relaxed mb-6 transition-all duration-500 ${
                      isDark ? "text-gray-300" : "text-gray-600"
                    }`}
                  >
                    {study.description}
                  </p>

                  <button
                    className={`group inline-flex items-center font-semibold transition-all duration-500 ${
                      isDark
                        ? "text-blue-400 hover:text-blue-300"
                        : "text-blue-600 hover:text-blue-700"
                    }`}
                  >
                    View Case Study
                    <ArrowRight
                      size={16}
                      className="ml-2 group-hover:translate-x-1 transition-transform duration-300"
                    />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-16">
          <button className="bg-gradient-to-r from-blue-400 to-blue-600 hover:from-blue-500 hover:to-blue-700 text-white px-8 py-4 rounded-full text-lg font-semibold transition-all duration-500 transform hover:scale-105 shadow-lg hover:shadow-xl">
            Explore All Case Studies
          </button>
        </div>
      </div>
    </section>
  );
};

export default SuccessStoriesSection;
