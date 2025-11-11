"use client";

import { Facebook, Instagram, Linkedin } from "lucide-react";
import { useTheme } from "@/contexts/ThemeContext";
import ShrigLogo from "@/components/ui/ShrigLogo";

const Footer = () => {
  const { isDark } = useTheme();
  const footerLinks = {
    company: [
      { name: "About Us", href: "#about" },
      { name: "Services", href: "#services" },
      { name: "Team", href: "#team" },
      { name: "Careers", href: "#career" },
    ],
    technology: [
      { name: "Tech Stack", href: "#" },
      { name: "Scrum Process", href: "#" },
    ],
    resources: [
      { name: "Blogs", href: "#" },
      { name: "Case Studies", href: "#resource" },
    ],
    legal: [
      { name: "Privacy Policy", href: "#" },
      { name: "Terms of Services", href: "#" },
    ],
    social: [
      { name: "Facebook", href: "#", icon: Facebook },
      { name: "Instagram", href: "#", icon: Instagram },
      { name: "Linkedin", href: "#", icon: Linkedin },
    ],
  };

  return (
    <footer className="relative text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-6 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <div className="mb-4">
              <div
                className={`h-10 w-auto transition-all duration-300 ${
                  isDark ? "text-white" : "text-gray-900"
                }`}
              >
                <ShrigLogo
                  className="h-10 w-auto"
                  alt="Shrig Solutions"
                  isDark={isDark}
                />
              </div>
            </div>
            <p
              className={`font-inter mb-6 transition-colors duration-300 ${
                isDark ? "text-gray-300" : "text-gray-600"
              }`}
            >
              Bridging Global Talent and Innovation. Driving success through
              seamless partnerships, unmatched expertise, and a passion for
              delivering innovative solutions.
            </p>
            <div className="flex space-x-4">
              {footerLinks.social.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  className={`w-10 h-10 rounded-full flex items-center justify-center transition-colors duration-300 ${
                    isDark
                      ? "bg-gray-800 hover:bg-blue-600"
                      : "bg-gray-200 hover:bg-blue-600 hover:text-white"
                  }`}
                >
                  <social.icon size={20} />
                </a>
              ))}
            </div>
          </div>

          {/* Company Links */}
          <div>
            <h4
              className={`text-base md:text-lg font-semibold font-poppins mb-4 transition-colors duration-300 ${
                isDark ? "text-white" : "text-gray-900"
              }`}
            >
              Company
            </h4>
            <ul className="space-y-2">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className={`transition-colors duration-200 font-inter ${
                      isDark
                        ? "text-gray-300 hover:text-white"
                        : "text-gray-600 hover:text-gray-900"
                    }`}
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Technology Links */}
          <div>
            <h4
              className={`text-base md:text-lg font-semibold font-poppins mb-4 transition-colors duration-300 ${
                isDark ? "text-white" : "text-gray-900"
              }`}
            >
              Technology
            </h4>
            <ul className="space-y-2">
              {footerLinks.technology.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className={`transition-colors duration-200 font-inter ${
                      isDark
                        ? "text-gray-300 hover:text-white"
                        : "text-gray-600 hover:text-gray-900"
                    }`}
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources Links */}
          <div>
            <h4
              className={`text-base md:text-lg font-semibold font-poppins mb-4 transition-colors duration-300 ${
                isDark ? "text-white" : "text-gray-900"
              }`}
            >
              Resources
            </h4>
            <ul className="space-y-2">
              {footerLinks.resources.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className={`transition-colors duration-200 font-inter ${
                      isDark
                        ? "text-gray-300 hover:text-white"
                        : "text-gray-600 hover:text-gray-900"
                    }`}
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal Links */}
          <div>
            <h4
              className={`text-base md:text-lg font-semibold font-poppins mb-4 transition-colors duration-300 ${
                isDark ? "text-white" : "text-gray-900"
              }`}
            >
              Legal
            </h4>
            <ul className="space-y-2">
              {footerLinks.legal.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className={`transition-colors duration-200 font-inter ${
                      isDark
                        ? "text-gray-300 hover:text-white"
                        : "text-gray-600 hover:text-gray-900"
                    }`}
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div
          className={`border-t mt-12 pt-8 transition-colors duration-300 ${
            isDark ? "border-gray-800" : "border-gray-300"
          }`}
        >
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p
              className={`font-inter text-sm transition-colors duration-300 ${
                isDark ? "text-gray-400" : "text-gray-600"
              }`}
            >
              Copyright 2024 – Shrig Solutions Pvt Ltd
            </p>
            <p
              className={`font-inter text-sm mt-4 md:mt-0 transition-colors duration-300 ${
                isDark ? "text-gray-400" : "text-gray-600"
              }`}
            >
              Made with ❤️ for innovation
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
