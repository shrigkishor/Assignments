"use client";

import { useGSAP } from "@/utils/gsapAnimations";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Users, Target, Award, ArrowRight, Sparkles } from "lucide-react";
import { useTheme } from "@/contexts/ThemeContext";

const AboutSection = () => {
  const { isDark } = useTheme();
  const gsapAnimations = useGSAP();

  // Refs for GSAP animations
  const sectionRef = useRef<HTMLElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const featuresRef = useRef<HTMLDivElement>(null);
  const statsRef = useRef<HTMLDivElement>(null);
  const ctaRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!sectionRef.current) return;

    const ctx = gsap.context(() => {
      // Register ScrollTrigger
      gsap.registerPlugin(ScrollTrigger);

      // Create timeline for section animations
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
          end: "bottom 20%",
          toggleActions: "play none none reverse",
        },
      });

      // Animate title
      tl.fromTo(
        titleRef.current,
        { opacity: 0, y: 50 },
        { opacity: 1, y: 0, duration: 0.8, ease: "power2.out" }
      );

      // Animate subtitle
      tl.fromTo(
        subtitleRef.current,
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 0.6, ease: "power2.out" },
        "-=0.4"
      );

      // Animate features with stagger
      tl.fromTo(
        featuresRef.current?.querySelectorAll(".feature-card") || [],
        { opacity: 0, y: 50, scale: 0.9 },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.6,
          stagger: 0.1,
          ease: "back.out(1.7)",
        },
        "-=0.2"
      );

      // Animate stats
      tl.fromTo(
        statsRef.current?.querySelectorAll(".stat-item") || [],
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 0.5, stagger: 0.1, ease: "power2.out" },
        "-=0.3"
      );

      // Animate CTA
      tl.fromTo(
        ctaRef.current,
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 0.6, ease: "power2.out" },
        "-=0.2"
      );

      // Hover animations for feature cards
      const featureCards =
        featuresRef.current?.querySelectorAll(".feature-card") || [];
      featureCards.forEach((card) => {
        const hoverAnimation = gsapAnimations.hoverScale(card, 1.05);
        card.addEventListener("mouseenter", hoverAnimation.onMouseEnter);
        card.addEventListener("mouseleave", hoverAnimation.onMouseLeave);
      });
    }, sectionRef);

    return () => ctx.revert();
  }, [gsapAnimations]);
  const features = [
    {
      icon: Users,
      title: "Team Building",
      description:
        "We craft and manage top-tier tech teams that transform challenges into opportunities.",
      gradient: "from-blue-500 to-cyan-500",
    },
    {
      icon: Target,
      title: "Innovation Focus",
      description:
        "Our expertise spans innovation, team building, and seamless project execution.",
      gradient: "from-purple-500 to-pink-500",
    },
    {
      icon: Award,
      title: "Excellence",
      description:
        "Ensuring solutions that drive growth and excellence in every project.",
      gradient: "from-orange-500 to-red-500",
    },
  ];

  return (
    <section
      ref={sectionRef}
      id="about"
      className="relative py-24 overflow-hidden"
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
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-500 to-purple-500 text-white px-4 py-2 rounded-full text-sm font-medium mb-4">
            <Sparkles className="w-4 h-4" />
            About Shrig Solutions
          </div>
          <h2
            ref={titleRef}
            className={`text-5xl md:text-6xl font-bold font-poppins mb-6 transition-all duration-500 ${
              isDark ? "text-white" : "text-gray-900"
            }`}
          >
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Transforming
            </span>{" "}
            <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
              Challenges
            </span>{" "}
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Into Opportunities
            </span>
          </h2>
          <p
            ref={subtitleRef}
            className={`text-xl md:text-2xl max-w-4xl mx-auto font-inter leading-relaxed transition-all duration-500 ${
              isDark ? "text-gray-300" : "text-gray-600"
            }`}
          >
            At Shrig Solutions, we craft and manage top-tier tech teams that
            transform challenges into opportunities. Our expertise spans
            innovation, team building, and seamless project execution.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div className="space-y-10">
            {/* Features */}
            <div ref={featuresRef} className="space-y-8">
              {features.map((feature) => (
                <div
                  key={feature.title}
                  className="feature-card group relative"
                >
                  <div className="flex items-start space-x-6 p-6 rounded-2xl transition-all duration-500 hover:scale-105 hover:shadow-2xl backdrop-blur-sm border border-transparent hover:border-blue-200/20">
                    <div
                      className={`flex-shrink-0 w-16 h-16 bg-gradient-to-br ${feature.gradient} rounded-2xl flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all duration-500`}
                    >
                      <feature.icon className="w-8 h-8 text-white" />
                    </div>
                    <div className="flex-1">
                      <h3
                        className={`text-2xl font-bold font-poppins mb-3 transition-all duration-500 ${
                          isDark ? "text-white" : "text-gray-900"
                        }`}
                      >
                        {feature.title}
                      </h3>
                      <p
                        className={`text-lg font-inter leading-relaxed transition-all duration-500 ${
                          isDark ? "text-gray-300" : "text-gray-600"
                        }`}
                      >
                        {feature.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <button
              ref={ctaRef}
              className="group relative bg-gradient-to-r from-blue-600 to-purple-600 text-white px-10 py-4 rounded-full text-lg font-bold hover:from-blue-700 hover:to-purple-700 transition-all duration-500 transform hover:scale-105 flex items-center gap-3 shadow-2xl hover:shadow-blue-500/25"
            >
              <span>Learn More</span>
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
                  <Users className="w-16 h-16 text-white" />
                </div>
                <div>
                  <h3
                    className={`text-3xl font-bold font-poppins mb-4 transition-all duration-500 ${
                      isDark ? "text-white" : "text-gray-900"
                    }`}
                  >
                    From Vision to Reality
                  </h3>
                  <p
                    className={`text-xl font-inter transition-all duration-500 ${
                      isDark ? "text-gray-300" : "text-gray-600"
                    }`}
                  >
                    Together we build the future
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
      </div>
    </section>
  );
};

export default AboutSection;
