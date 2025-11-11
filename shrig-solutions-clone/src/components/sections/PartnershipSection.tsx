"use client";

import { Handshake, ArrowRight, Sparkles, Globe, Target } from "lucide-react";
import { useTheme } from "@/contexts/ThemeContext";

const PartnershipSection = () => {
  const { isDark } = useTheme();

  const benefits = [
    {
      icon: Globe,
      title: "Global Reach",
      description: "Access to international markets and diverse talent pools",
      gradient: "from-blue-500 to-cyan-500",
    },
    {
      icon: Target,
      title: "Strategic Focus",
      description: "Aligned goals and shared vision for success",
      gradient: "from-purple-500 to-pink-500",
    },
    {
      icon: Handshake,
      title: "Trusted Partnership",
      description: "Long-term collaboration built on mutual trust",
      gradient: "from-green-500 to-emerald-500",
    },
  ];

  return (
    <section
      id="partnership"
      className={`relative py-24 overflow-hidden transition-all duration-700 ${
        isDark
          ? "bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900"
          : "bg-gradient-to-br from-gray-50 via-white to-blue-50"
      }`}
    >
      {/* Background Elements */}
      <div className="absolute inset-0">
        {/* Floating particles */}
        <div className="absolute top-20 left-10 w-2 h-2 bg-blue-400 rounded-full animate-pulse opacity-60"></div>
        <div
          className="absolute top-40 right-20 w-1 h-1 bg-purple-400 rounded-full animate-pulse opacity-40"
          style={{ animationDelay: "1s" }}
        ></div>
        <div
          className="absolute bottom-20 left-1/4 w-3 h-3 bg-cyan-400 rounded-full animate-pulse opacity-80"
          style={{ animationDelay: "2s" }}
        ></div>

        {/* Grid pattern */}
        <div className="absolute inset-0 opacity-20">
          <div
            className="w-full h-full"
            style={{
              backgroundImage: `
                linear-gradient(${
                  isDark ? "rgba(59,130,246,0.1)" : "rgba(59,130,246,0.05)"
                } 1px, transparent 1px),
                linear-gradient(90deg, ${
                  isDark ? "rgba(59,130,246,0.1)" : "rgba(59,130,246,0.05)"
                } 1px, transparent 1px)
              `,
              backgroundSize: "60px 60px",
            }}
          ></div>
        </div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-500 to-purple-500 text-white px-4 py-2 rounded-full text-sm font-medium mb-6">
            <Handshake className="w-4 h-4" />
            Strategic Partnership
          </div>

          <h2
            className={`text-5xl md:text-6xl font-bold font-poppins mb-6 transition-all duration-500 ${
              isDark ? "text-white" : "text-gray-900"
            }`}
          >
            Our Partnership with{" "}
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Futrix LLC
            </span>
          </h2>
          <p
            className={`text-xl md:text-2xl max-w-4xl mx-auto font-inter leading-relaxed transition-all duration-500 ${
              isDark ? "text-gray-300" : "text-gray-600"
            }`}
          >
            A strategic alliance that combines expertise, innovation, and shared
            vision to deliver exceptional results
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          {/* Content */}
          <div className="space-y-8">
            <div className="space-y-6">
              <h3
                className={`text-3xl md:text-4xl font-bold font-poppins transition-all duration-500 ${
                  isDark ? "text-white" : "text-gray-900"
                }`}
              >
                Driving Innovation Together
              </h3>
              <p
                className={`text-lg md:text-xl font-inter leading-relaxed transition-all duration-500 ${
                  isDark ? "text-gray-300" : "text-gray-600"
                }`}
              >
                Our partnership with Futrix LLC represents a powerful
                combination of technical expertise, innovative thinking, and
                shared commitment to excellence. Together, we deliver
                cutting-edge solutions that transform businesses and drive
                growth.
              </p>
              <p
                className={`text-lg font-inter leading-relaxed transition-all duration-500 ${
                  isDark ? "text-gray-300" : "text-gray-600"
                }`}
              >
                This strategic alliance enables us to leverage complementary
                strengths, expand our service offerings, and provide clients
                with comprehensive solutions that address their most complex
                challenges.
              </p>
            </div>

            {/* Benefits */}
            <div className="space-y-6">
              {benefits.map((benefit) => (
                <div key={benefit.title} className="flex items-start space-x-4">
                  <div
                    className={`flex-shrink-0 w-12 h-12 bg-gradient-to-br ${benefit.gradient} rounded-xl flex items-center justify-center shadow-lg`}
                  >
                    <benefit.icon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4
                      className={`text-xl font-bold font-poppins mb-2 transition-all duration-500 ${
                        isDark ? "text-white" : "text-gray-900"
                      }`}
                    >
                      {benefit.title}
                    </h4>
                    <p
                      className={`font-inter leading-relaxed transition-all duration-500 ${
                        isDark ? "text-gray-300" : "text-gray-600"
                      }`}
                    >
                      {benefit.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <button className="group relative bg-gradient-to-r from-blue-400 to-blue-600 text-white px-10 py-4 rounded-full text-lg font-bold hover:from-blue-500 hover:to-blue-700 transition-all duration-500 transform hover:scale-105 flex items-center gap-3 shadow-2xl hover:shadow-blue-500/25">
              <span>Learn More About Our Partnership</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
            </button>
          </div>

          {/* Visual */}
          <div className="relative">
            <div
              className={`relative rounded-3xl p-12 h-[500px] flex items-center justify-center overflow-hidden ${
                isDark
                  ? "bg-gradient-to-br from-gray-800 via-gray-700 to-gray-800"
                  : "bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50"
              }`}
            >
              {/* Animated background elements */}
              <div className="absolute inset-0">
                <div className="absolute top-10 left-10 w-32 h-32 bg-blue-400 rounded-full opacity-10 animate-pulse"></div>
                <div
                  className="absolute bottom-10 right-10 w-24 h-24 bg-purple-400 rounded-full opacity-10 animate-pulse"
                  style={{ animationDelay: "1s" }}
                ></div>
                <div
                  className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-40 h-40 bg-cyan-400 rounded-full opacity-5 animate-pulse"
                  style={{ animationDelay: "2s" }}
                ></div>
              </div>

              <div className="relative z-10 text-center space-y-6">
                <div className="w-32 h-32 bg-gradient-to-br from-blue-600 to-purple-600 rounded-full mx-auto flex items-center justify-center shadow-2xl">
                  <Handshake className="w-16 h-16 text-white" />
                </div>
                <div>
                  <h3
                    className={`text-3xl font-bold font-poppins mb-4 transition-all duration-500 ${
                      isDark ? "text-white" : "text-gray-900"
                    }`}
                  >
                    Strategic Alliance
                  </h3>
                  <p
                    className={`text-xl font-inter transition-all duration-500 ${
                      isDark ? "text-gray-300" : "text-gray-600"
                    }`}
                  >
                    Powering innovation through collaboration
                  </p>
                </div>
              </div>
            </div>

            {/* Floating decorative elements */}
            <div className="absolute -top-6 -right-6 w-24 h-24 bg-gradient-to-r from-yellow-400 to-orange-400 rounded-full opacity-30 blur-sm animate-pulse"></div>
            <div
              className="absolute -bottom-6 -left-6 w-20 h-20 bg-gradient-to-r from-pink-400 to-purple-400 rounded-full opacity-30 blur-sm animate-pulse"
              style={{ animationDelay: "2s" }}
            ></div>
          </div>
        </div>

        {/* Partnership Stats */}
        <div className="grid md:grid-cols-3 gap-8 mt-20">
          {[
            {
              number: "5+",
              label: "Years of Partnership",
              gradient: "from-blue-500 to-cyan-500",
            },
            {
              number: "50+",
              label: "Projects Delivered",
              gradient: "from-purple-500 to-pink-500",
            },
            {
              number: "100%",
              label: "Client Satisfaction",
              gradient: "from-green-500 to-emerald-500",
            },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <div
                className={`relative rounded-3xl p-8 transition-all duration-500 hover:scale-105 ${
                  isDark
                    ? "bg-gradient-to-br from-gray-800 via-gray-700 to-gray-800 border border-gray-700/50"
                    : "bg-gradient-to-br from-white via-gray-50 to-white border border-gray-100"
                } shadow-xl hover:shadow-2xl backdrop-blur-sm`}
              >
                <div
                  className={`w-16 h-16 bg-gradient-to-br ${stat.gradient} rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg`}
                >
                  <Sparkles className="w-8 h-8 text-white" />
                </div>
                <div
                  className={`text-4xl font-bold font-poppins mb-2 transition-all duration-500 ${
                    isDark ? "text-white" : "text-gray-900"
                  }`}
                >
                  {stat.number}
                </div>
                <p
                  className={`font-inter text-lg transition-all duration-500 ${
                    isDark ? "text-gray-300" : "text-gray-600"
                  }`}
                >
                  {stat.label}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PartnershipSection;
