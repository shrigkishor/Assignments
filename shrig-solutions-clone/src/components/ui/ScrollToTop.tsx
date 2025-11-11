"use client";

import { useState, useEffect, useRef } from "react";
import { ChevronUp } from "lucide-react";
import { gsap } from "gsap";
import { useTheme } from "@/contexts/ThemeContext";

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const iconRef = useRef<SVGSVGElement>(null);
  const { isDark } = useTheme();

  // Show/hide button based on scroll position
  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  // GSAP animations for the button
  useEffect(() => {
    if (!buttonRef.current) return;

    const ctx = gsap.context(() => {
      if (isVisible) {
        // Show animation
        gsap.fromTo(
          buttonRef.current,
          {
            opacity: 0,
            scale: 0.5,
            y: 20,
            rotation: -180,
          },
          {
            opacity: 1,
            scale: 1,
            y: 0,
            rotation: 0,
            duration: 0.5,
            ease: "back.out(1.7)",
          }
        );

        // Continuous floating animation
        gsap.to(buttonRef.current, {
          y: -5,
          duration: 2,
          ease: "power2.inOut",
          yoyo: true,
          repeat: -1,
        });

        // Icon morphing animation
        if (iconRef.current) {
          gsap.to(iconRef.current, {
            rotation: 360,
            duration: 2,
            ease: "power2.inOut",
            repeat: -1,
            yoyo: true,
          });
        }
      } else {
        // Hide animation
        gsap.to(buttonRef.current, {
          opacity: 0,
          scale: 0.5,
          y: 20,
          rotation: 180,
          duration: 0.3,
          ease: "power2.in",
        });
      }
    }, buttonRef);

    return () => ctx.revert();
  }, [isVisible]);

  // Scroll to top function
  const scrollToTop = () => {
    // Add click animation
    if (buttonRef.current) {
      gsap.to(buttonRef.current, {
        scale: 0.9,
        duration: 0.1,
        yoyo: true,
        repeat: 1,
        ease: "power2.inOut",
      });
    }

    // Smooth scroll to top
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <button
      ref={buttonRef}
      onClick={scrollToTop}
      className={`fixed bottom-8 right-4 z-50 p-3 rounded-full shadow-lg transition-all duration-300 group ${
        isDark
          ? "bg-gradient-to-r from-blue-600 to-blue-800 hover:from-blue-500 hover:to-blue-700 text-white border border-blue-500/30"
          : "bg-gradient-to-r from-blue-500 to-blue-700 hover:from-blue-400 hover:to-blue-600 text-white border border-blue-300/30"
      }`}
      aria-label="Scroll to top"
      style={{ opacity: 0 }} // Initially hidden, GSAP will control visibility
    >
      {/* Glow effect */}
      <div
        className={`absolute inset-0 rounded-full blur-xl opacity-0 group-hover:opacity-50 transition-opacity duration-300 ${
          isDark ? "bg-blue-400" : "bg-blue-500"
        }`}
      ></div>

      {/* Icon */}
      <ChevronUp
        ref={iconRef}
        size={24}
        className="relative z-10 transition-transform duration-300 group-hover:scale-110"
      />

      {/* Ripple effect on hover */}
      <div
        className={`absolute inset-0 rounded-full border-2 border-transparent group-hover:border-white/30 transition-all duration-300 ${
          isDark
            ? "group-hover:shadow-blue-400/50"
            : "group-hover:shadow-blue-500/50"
        }`}
        style={{
          boxShadow: isDark
            ? "0 0 0 0 rgba(59, 130, 246, 0.4)"
            : "0 0 0 0 rgba(59, 130, 246, 0.4)",
        }}
      ></div>
    </button>
  );
};

export default ScrollToTop;
