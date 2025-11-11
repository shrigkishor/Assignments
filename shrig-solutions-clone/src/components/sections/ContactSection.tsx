"use client";

import { Mail, Phone, MapPin, Send } from "lucide-react";
import { useTheme } from "@/contexts/ThemeContext";

const ContactSection = () => {
  const { isDark } = useTheme();

  return (
    <section
      id="contact"
      className="py-20 relative"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h2
                className={`text-3xl md:text-4xl lg:text-5xl font-bold font-poppins transition-all duration-500 ${
                  isDark ? "text-white" : "text-gray-900"
                }`}
              >
                Partner with us for Innovative Solutions
              </h2>
              <p
                className={`text-lg md:text-xl font-inter leading-relaxed transition-all duration-500 ${
                  isDark ? "text-gray-300" : "text-gray-600"
                }`}
              >
                Share your vision. We&apos;ll bring it to Life.
              </p>
            </div>

            {/* Contact Info */}
            <div className="space-y-6">
              <div className="flex items-center space-x-4">
                <div
                  className={`w-12 h-12 rounded-lg flex items-center justify-center transition-all duration-500 ${
                    isDark
                      ? "bg-blue-900/50 border border-blue-700/30"
                      : "bg-blue-100"
                  }`}
                >
                  <Mail
                    className={`w-6 h-6 transition-all duration-500 ${
                      isDark ? "text-blue-400" : "text-blue-600"
                    }`}
                  />
                </div>
                <div>
                  <h3
                    className={`text-base md:text-lg font-semibold font-poppins transition-all duration-500 ${
                      isDark ? "text-white" : "text-gray-900"
                    }`}
                  >
                    Email
                  </h3>
                  <p
                    className={`text-sm md:text-base font-inter transition-all duration-500 ${
                      isDark ? "text-gray-300" : "text-gray-600"
                    }`}
                  >
                    info@shrigsolutions.com
                  </p>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <div
                  className={`w-12 h-12 rounded-lg flex items-center justify-center transition-all duration-500 ${
                    isDark
                      ? "bg-blue-900/50 border border-blue-700/30"
                      : "bg-blue-100"
                  }`}
                >
                  <Phone
                    className={`w-6 h-6 transition-all duration-500 ${
                      isDark ? "text-blue-400" : "text-blue-600"
                    }`}
                  />
                </div>
                <div>
                  <h3
                    className={`text-base md:text-lg font-semibold font-poppins transition-all duration-500 ${
                      isDark ? "text-white" : "text-gray-900"
                    }`}
                  >
                    Phone
                  </h3>
                  <p
                    className={`text-sm md:text-base font-inter transition-all duration-500 ${
                      isDark ? "text-gray-300" : "text-gray-600"
                    }`}
                  >
                    +1 (555) 123-4567
                  </p>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <div
                  className={`w-12 h-12 rounded-lg flex items-center justify-center transition-all duration-500 ${
                    isDark
                      ? "bg-blue-900/50 border border-blue-700/30"
                      : "bg-blue-100"
                  }`}
                >
                  <MapPin
                    className={`w-6 h-6 transition-all duration-500 ${
                      isDark ? "text-blue-400" : "text-blue-600"
                    }`}
                  />
                </div>
                <div>
                  <h3
                    className={`text-base md:text-lg font-semibold font-poppins transition-all duration-500 ${
                      isDark ? "text-white" : "text-gray-900"
                    }`}
                  >
                    Address
                  </h3>
                  <p
                    className={`text-sm md:text-base font-inter transition-all duration-500 ${
                      isDark ? "text-gray-300" : "text-gray-600"
                    }`}
                  >
                    123 Innovation Street, Tech City, TC 12345
                  </p>
                </div>
              </div>
            </div>

            <div
              className={`rounded-2xl p-6 transition-all duration-500 ${
                isDark
                  ? "bg-blue-900/20 border border-blue-700/30"
                  : "bg-blue-50"
              }`}
            >
              <p
                className={`font-inter transition-all duration-500 ${
                  isDark ? "text-gray-200" : "text-gray-700"
                }`}
              >
                <strong>We&apos;re committed to strict confidentiality.</strong>{" "}
                Your ideas and information are safe with us.
              </p>
            </div>
          </div>

          {/* Contact Form */}
          <div
            className={`rounded-2xl p-8 transition-all duration-500 ${
              isDark ? "bg-gray-800 border border-gray-700/50" : "bg-gray-50"
            }`}
          >
            <h3
              className={`text-xl md:text-2xl font-bold font-poppins mb-6 transition-all duration-500 ${
                isDark ? "text-white" : "text-gray-900"
              }`}
            >
              Get In Touch
            </h3>

            <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label
                    htmlFor="firstName"
                    className={`block text-sm font-medium mb-2 transition-all duration-500 ${
                      isDark ? "text-gray-200" : "text-gray-700"
                    }`}
                  >
                    First Name
                  </label>
                  <input
                    type="text"
                    id="firstName"
                    className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-500 ${
                      isDark
                        ? "bg-gray-700 border-gray-600 text-white placeholder-gray-400"
                        : "border-gray-300 text-gray-900 placeholder-gray-500"
                    }`}
                    placeholder="John"
                  />
                </div>
                <div>
                  <label
                    htmlFor="lastName"
                    className={`block text-sm font-medium mb-2 transition-all duration-500 ${
                      isDark ? "text-gray-200" : "text-gray-700"
                    }`}
                  >
                    Last Name
                  </label>
                  <input
                    type="text"
                    id="lastName"
                    className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-500 ${
                      isDark
                        ? "bg-gray-700 border-gray-600 text-white placeholder-gray-400"
                        : "border-gray-300 text-gray-900 placeholder-gray-500"
                    }`}
                    placeholder="Doe"
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="email"
                  className={`block text-sm font-medium mb-2 transition-all duration-500 ${
                    isDark ? "text-gray-200" : "text-gray-700"
                  }`}
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-500 ${
                    isDark
                      ? "bg-gray-700 border-gray-600 text-white placeholder-gray-400"
                      : "border-gray-300 text-gray-900 placeholder-gray-500"
                  }`}
                  placeholder="john@example.com"
                />
              </div>

              <div>
                <label
                  htmlFor="company"
                  className={`block text-sm font-medium mb-2 transition-all duration-500 ${
                    isDark ? "text-gray-200" : "text-gray-700"
                  }`}
                >
                  Company
                </label>
                <input
                  type="text"
                  id="company"
                  className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-500 ${
                    isDark
                      ? "bg-gray-700 border-gray-600 text-white placeholder-gray-400"
                      : "border-gray-300 text-gray-900 placeholder-gray-500"
                  }`}
                  placeholder="Your Company"
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className={`block text-sm font-medium mb-2 transition-all duration-500 ${
                    isDark ? "text-gray-200" : "text-gray-700"
                  }`}
                >
                  Message
                </label>
                <textarea
                  id="message"
                  rows={4}
                  className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-500 resize-none ${
                    isDark
                      ? "bg-gray-700 border-gray-600 text-white placeholder-gray-400"
                      : "border-gray-300 text-gray-900 placeholder-gray-500"
                  }`}
                  placeholder="Tell us about your project..."
                />
              </div>

              <button
                type="submit"
                className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white py-3 rounded-lg font-semibold transition-all duration-500 flex items-center justify-center gap-2 transform hover:scale-105 shadow-lg hover:shadow-xl"
              >
                <Send size={20} />
                Contact Now
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
