"use client";

import Navigation from "@/components/Navigation";
import HeroSection from "@/components/sections/HeroSection";
import AutoScrollSection from "@/components/sections/AutoScrollSection";
import AboutSection from "@/components/sections/AboutSection";
import ServicesSection from "@/components/sections/ServicesSection";
import CarShowcaseSection from "@/components/sections/CarShowcaseSection";
import TeamSection from "@/components/sections/TeamSection";
import PartnershipSection from "@/components/sections/PartnershipSection";
import CareerSection from "@/components/sections/CareerSection";
import SuccessStoriesSection from "@/components/sections/SuccessStoriesSection";
import ContactSection from "@/components/sections/ContactSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen relative overflow-x-hidden">
      {/* Advanced Futuristic Background */}
      <div className="fixed inset-0 -z-10">
        {/* Base gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-gray-900 to-black"></div>

        {/* Animated mesh gradient */}
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-blue-600/20 via-purple-600/20 to-cyan-600/20 animate-pulse"></div>
        </div>

        {/* Floating particles with trails */}
        <div className="absolute inset-0">
          {[
            {
              w: 2,
              h: 3,
              hue: 200,
              left: 10,
              top: 20,
              duration: 4,
              delay: 0,
              shadow: 5,
            },
            {
              w: 3,
              h: 2,
              hue: 220,
              left: 25,
              top: 40,
              duration: 5,
              delay: 0.5,
              shadow: 6,
            },
            {
              w: 1,
              h: 4,
              hue: 240,
              left: 40,
              top: 10,
              duration: 6,
              delay: 1,
              shadow: 7,
            },
            {
              w: 4,
              h: 1,
              hue: 260,
              left: 55,
              top: 30,
              duration: 7,
              delay: 1.5,
              shadow: 8,
            },
            {
              w: 2,
              h: 2,
              hue: 200,
              left: 70,
              top: 50,
              duration: 8,
              delay: 2,
              shadow: 9,
            },
            {
              w: 3,
              h: 3,
              hue: 220,
              left: 85,
              top: 15,
              duration: 9,
              delay: 2.5,
              shadow: 10,
            },
            {
              w: 1,
              h: 2,
              hue: 240,
              left: 15,
              top: 60,
              duration: 4,
              delay: 0.2,
              shadow: 5,
            },
            {
              w: 4,
              h: 3,
              hue: 260,
              left: 30,
              top: 80,
              duration: 5,
              delay: 0.7,
              shadow: 6,
            },
            {
              w: 2,
              h: 1,
              hue: 200,
              left: 45,
              top: 25,
              duration: 6,
              delay: 1.2,
              shadow: 7,
            },
            {
              w: 3,
              h: 4,
              hue: 220,
              left: 60,
              top: 45,
              duration: 7,
              delay: 1.7,
              shadow: 8,
            },
            {
              w: 1,
              h: 3,
              hue: 240,
              left: 75,
              top: 65,
              duration: 8,
              delay: 2.2,
              shadow: 9,
            },
            {
              w: 4,
              h: 2,
              hue: 260,
              left: 90,
              top: 35,
              duration: 9,
              delay: 2.7,
              shadow: 10,
            },
            {
              w: 2,
              h: 4,
              hue: 200,
              left: 5,
              top: 75,
              duration: 4,
              delay: 0.3,
              shadow: 5,
            },
            {
              w: 3,
              h: 1,
              hue: 220,
              left: 20,
              top: 5,
              duration: 5,
              delay: 0.8,
              shadow: 6,
            },
            {
              w: 1,
              h: 1,
              hue: 240,
              left: 35,
              top: 55,
              duration: 6,
              delay: 1.3,
              shadow: 7,
            },
            {
              w: 4,
              h: 4,
              hue: 260,
              left: 50,
              top: 85,
              duration: 7,
              delay: 1.8,
              shadow: 8,
            },
            {
              w: 2,
              h: 3,
              hue: 200,
              left: 65,
              top: 5,
              duration: 8,
              delay: 2.3,
              shadow: 9,
            },
            {
              w: 3,
              h: 2,
              hue: 220,
              left: 80,
              top: 25,
              duration: 9,
              delay: 2.8,
              shadow: 10,
            },
            {
              w: 1,
              h: 4,
              hue: 240,
              left: 95,
              top: 45,
              duration: 4,
              delay: 0.4,
              shadow: 5,
            },
            {
              w: 4,
              h: 1,
              hue: 260,
              left: 10,
              top: 65,
              duration: 5,
              delay: 0.9,
              shadow: 6,
            },
            {
              w: 2,
              h: 2,
              hue: 200,
              left: 25,
              top: 85,
              duration: 6,
              delay: 1.4,
              shadow: 7,
            },
            {
              w: 3,
              h: 3,
              hue: 220,
              left: 40,
              top: 15,
              duration: 7,
              delay: 1.9,
              shadow: 8,
            },
            {
              w: 1,
              h: 2,
              hue: 240,
              left: 55,
              top: 35,
              duration: 8,
              delay: 2.4,
              shadow: 9,
            },
            {
              w: 4,
              h: 3,
              hue: 260,
              left: 70,
              top: 55,
              duration: 9,
              delay: 2.9,
              shadow: 10,
            },
            {
              w: 2,
              h: 1,
              hue: 200,
              left: 85,
              top: 75,
              duration: 4,
              delay: 0.1,
              shadow: 5,
            },
            {
              w: 3,
              h: 4,
              hue: 220,
              left: 0,
              top: 95,
              duration: 5,
              delay: 0.6,
              shadow: 6,
            },
            {
              w: 1,
              h: 3,
              hue: 240,
              left: 15,
              top: 15,
              duration: 6,
              delay: 1.1,
              shadow: 7,
            },
            {
              w: 4,
              h: 2,
              hue: 260,
              left: 30,
              top: 35,
              duration: 7,
              delay: 1.6,
              shadow: 8,
            },
            {
              w: 2,
              h: 4,
              hue: 200,
              left: 45,
              top: 55,
              duration: 8,
              delay: 2.1,
              shadow: 9,
            },
          ].map((particle, i) => (
            <div
              key={i}
              className="absolute rounded-full opacity-70"
              style={{
                width: `${particle.w}px`,
                height: `${particle.h}px`,
                background: `hsl(${particle.hue}, 70%, 60%)`,
                left: `${particle.left}%`,
                top: `${particle.top}%`,
                animation: `float ${particle.duration}s ease-in-out infinite`,
                animationDelay: `${particle.delay}s`,
                boxShadow: `0 0 ${particle.shadow}px currentColor`,
              }}
            ></div>
          ))}
        </div>

        {/* Glowing orbs with movement */}
        <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-gradient-to-r from-blue-500/20 to-cyan-500/20 rounded-full blur-3xl animate-pulse"></div>
        <div
          className="absolute bottom-1/3 right-1/3 w-[400px] h-[400px] bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-full blur-3xl animate-pulse"
          style={{ animationDelay: "2s" }}
        ></div>
        <div
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] bg-gradient-to-r from-cyan-500/20 to-blue-500/20 rounded-full blur-3xl animate-pulse"
          style={{ animationDelay: "4s" }}
        ></div>

        {/* Scanning lines */}
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-blue-400 to-transparent opacity-60 animate-pulse"></div>
          <div
            className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-purple-400 to-transparent opacity-60 animate-pulse"
            style={{ animationDelay: "1s" }}
          ></div>
        </div>
      </div>

      <Navigation />
      <HeroSection />
      <AutoScrollSection />
      <AboutSection />
      <ServicesSection />
      <CarShowcaseSection />
      <TeamSection />
      <PartnershipSection />
      <CareerSection />
      <SuccessStoriesSection />
      <ContactSection />
      <Footer />

      <style jsx>{`
        @keyframes float {
          0%,
          100% {
            transform: translateY(0px) rotate(0deg) scale(1);
            opacity: 0.7;
          }
          50% {
            transform: translateY(-30px) rotate(180deg) scale(1.2);
            opacity: 1;
          }
        }

        @keyframes pulse {
          0%,
          100% {
            opacity: 0.3;
          }
          50% {
            opacity: 0.6;
          }
        }
      `}</style>
    </main>
  );
}
