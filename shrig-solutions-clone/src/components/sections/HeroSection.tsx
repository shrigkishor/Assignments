"use client";

import { ArrowUpRight } from "lucide-react";
import { useGSAP } from "@/utils/gsapAnimations";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";

const HeroSection = () => {
  const gsapAnimations = useGSAP();

  // Refs for GSAP animations
  const heroRef = useRef<HTMLElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const buttonsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!heroRef.current) return;

    const ctx = gsap.context(() => {
      // Main hero animation timeline
      const tl = gsap.timeline();

      // Animate title with stagger effect
      tl.fromTo(
        titleRef.current?.querySelectorAll("span") || [],
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          stagger: 0.3,
          ease: "power2.out",
        }
      );

      // Animate subtitle
      tl.fromTo(
        subtitleRef.current,
        { opacity: 0, y: 50 },
        { opacity: 1, y: 0, duration: 1, ease: "power2.out" },
        "-=0.5"
      );

      // Animate buttons with scale effect
      tl.fromTo(
        buttonsRef.current?.querySelectorAll("button") || [],
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
          stagger: 0.2,
          ease: "power2.out",
        },
        "-=0.3"
      );

      // Button hover animations
      const buttons = buttonsRef.current?.querySelectorAll("button") || [];
      buttons.forEach((button) => {
        const hoverAnimation = gsapAnimations.buttonHover(button);
        button.addEventListener("mouseenter", hoverAnimation.onMouseEnter);
        button.addEventListener("mouseleave", hoverAnimation.onMouseLeave);
      });
    }, heroRef);

    return () => ctx.revert();
  }, [gsapAnimations]);

  return (
    <section
      ref={heroRef}
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Subtle Background Effects */}
      <div className="absolute inset-0">
        {/* Minimal gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900/50 via-transparent to-slate-800/30"></div>

        {/* Subtle floating elements */}
        <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-cyan-400/40 rounded-full animate-pulse"></div>
        <div
          className="absolute bottom-1/3 right-1/4 w-1 h-1 bg-blue-400/60 rounded-full animate-pulse"
          style={{ animationDelay: "1s" }}
        ></div>
        <div
          className="absolute top-1/2 right-1/3 w-1.5 h-1.5 bg-purple-400/50 rounded-full animate-pulse"
          style={{ animationDelay: "2s" }}
        ></div>
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="space-y-16">
          {/* Main Headline */}
          <div className="space-y-6">
            <h1
              ref={titleRef}
              className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight tracking-tight text-white"
              style={{ fontFamily: "system-ui, -apple-system, sans-serif" }}
            >
              <span className="block text-white">BRIDGING GLOBAL</span>
              <span className="block text-cyan-400">TALENT AND INNOVATION</span>
            </h1>
          </div>

          {/* Descriptive Paragraph */}
          <p
            ref={subtitleRef}
            className="text-xl md:text-2xl lg:text-3xl max-w-5xl mx-auto font-light leading-relaxed text-gray-300"
            style={{ fontFamily: "system-ui, -apple-system, sans-serif" }}
          >
            Driving success through seamless partnerships, unmatched expertise,
            and a passion for delivering innovative solutions.
          </p>

          {/* CTA Buttons */}
          <div
            ref={buttonsRef}
            className="flex flex-col sm:flex-row gap-6 justify-center items-center pt-12"
          >
            {/* Explore Our Services Button */}
            <button
              onClick={() => {
                const servicesSection = document.getElementById("services");
                if (servicesSection) {
                  servicesSection.scrollIntoView({
                    behavior: "smooth",
                    block: "start",
                  });
                }
              }}
              className="group relative bg-gradient-to-r from-blue-400 to-blue-600 text-white px-10 py-4 rounded-full text-lg font-medium flex items-center gap-3 transition-all duration-300"
            >
              <span>Explore Our Services</span>
              <ArrowUpRight
                size={20}
                className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300"
              />
            </button>

            {/* Join Our Team Button */}
            <button
              onClick={() => {
                const careerSection = document.getElementById("career");
                if (careerSection) {
                  careerSection.scrollIntoView({
                    behavior: "smooth",
                    block: "start",
                  });
                }
              }}
              className="group relative bg-black border border-blue-300 text-white px-10 py-4 rounded-full text-lg font-medium flex items-center gap-3 transition-all duration-300"
            >
              <span>Join Our Team</span>
              <ArrowUpRight
                size={20}
                className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300"
              />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
