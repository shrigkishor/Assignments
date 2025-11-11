"use client";

import { useState, useEffect, useRef } from "react";
import { Sun, Moon } from "lucide-react";
import { useTheme } from "@/contexts/ThemeContext";
import { gsap } from "gsap";

const DraggableThemeToggle = () => {
  const { isDark, toggleTheme } = useTheme();
  const [isDragging, setIsDragging] = useState(false);
  const [position, setPosition] = useState({ x: 20, y: 20 });
  const [dragOffset, setDragOffset] = useState({ x: 0, y: 0 });
  const buttonRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (isDragging) {
        const newX = e.clientX - dragOffset.x;
        const newY = e.clientY - dragOffset.y;

        // Constrain to viewport
        const maxX = window.innerWidth - 60;
        const maxY = window.innerHeight - 60;

        setPosition({
          x: Math.max(0, Math.min(newX, maxX)),
          y: Math.max(0, Math.min(newY, maxY)),
        });
      }
    };

    const handleMouseUp = () => {
      setIsDragging(false);
    };

    if (isDragging) {
      document.addEventListener("mousemove", handleMouseMove);
      document.addEventListener("mouseup", handleMouseUp);
    }

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseup", handleMouseUp);
    };
  }, [isDragging, dragOffset]);

  useEffect(() => {
    if (buttonRef.current) {
      const ctx = gsap.context(() => {
        // Initial animation
        gsap.fromTo(
          buttonRef.current,
          { scale: 0, rotation: -180 },
          { scale: 1, rotation: 0, duration: 0.8, ease: "back.out(1.7)" }
        );

        // Continuous floating animation
        gsap.to(buttonRef.current, {
          y: -5,
          duration: 2,
          ease: "power2.inOut",
          yoyo: true,
          repeat: -1,
        });
      }, buttonRef);

      return () => ctx.revert();
    }
  }, []);

  const handleMouseDown = (e: React.MouseEvent) => {
    if (buttonRef.current) {
      const rect = buttonRef.current.getBoundingClientRect();
      setDragOffset({
        x: e.clientX - rect.left,
        y: e.clientY - rect.top,
      });
      setIsDragging(true);
    }
  };

  const handleClick = () => {
    if (!isDragging) {
      toggleTheme();

      // Click animation
      if (buttonRef.current) {
        gsap.to(buttonRef.current, {
          scale: 0.9,
          duration: 0.1,
          yoyo: true,
          repeat: 1,
          ease: "power2.inOut",
        });
      }
    }
  };

  return (
    <div
      ref={containerRef}
      className="fixed z-50 pointer-events-none"
      style={{
        left: position.x,
        top: position.y,
      }}
    >
      <div
        ref={buttonRef}
        className={`relative w-14 h-14 rounded-full cursor-move pointer-events-auto backdrop-blur-xl border transition-all duration-300 ${
          isDark
            ? "bg-black/20 border-white/20 hover:border-white/40"
            : "bg-white/20 border-gray-300/20 hover:border-gray-400/40"
        } shadow-lg hover:shadow-xl group`}
        onMouseDown={handleMouseDown}
        onClick={handleClick}
        style={{
          cursor: isDragging ? "grabbing" : "grab",
        }}
      >
        {/* Glow effect */}
        <div
          className={`absolute inset-0 rounded-full blur-xl opacity-0 group-hover:opacity-50 transition-opacity duration-300 ${
            isDark ? "bg-blue-400" : "bg-yellow-400"
          }`}
        ></div>

        {/* Icon */}
        <div className="relative z-10 w-full h-full flex items-center justify-center">
          {isDark ? (
            <Sun
              size={20}
              className="text-yellow-400 group-hover:text-yellow-300 transition-colors duration-300"
            />
          ) : (
            <Moon
              size={20}
              className="text-blue-600 group-hover:text-blue-500 transition-colors duration-300"
            />
          )}
        </div>

        {/* Ripple effect */}
        <div
          className={`absolute inset-0 rounded-full border-2 border-transparent group-hover:border-white/30 transition-all duration-300 ${
            isDark
              ? "group-hover:shadow-blue-400/50"
              : "group-hover:shadow-yellow-400/50"
          }`}
        ></div>

        {/* Drag indicator */}
        <div className="absolute -bottom-1 -right-1 w-4 h-4 rounded-full bg-gray-500/50 flex items-center justify-center">
          <div className="w-2 h-2 rounded-full bg-white/70"></div>
        </div>
      </div>
    </div>
  );
};

export default DraggableThemeToggle;
