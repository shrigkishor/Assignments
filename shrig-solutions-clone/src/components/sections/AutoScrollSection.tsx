"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";

const AutoScrollSection = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current || !textRef.current) return;

    const ctx = gsap.context(() => {
      // Create infinite horizontal scroll animation
      const tl = gsap.timeline({ repeat: -1, ease: "none" });

      // Animate the text to move right to left continuously
      tl.to(textRef.current, {
        x: "-100%",
        duration: 10,
        ease: "none",
      });

      // Reset position and continue
      tl.set(textRef.current, { x: "100%" });
      tl.to(textRef.current, {
        x: "-100%",
        duration: 10,
        ease: "none",
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section className="relative h-32 overflow-hidden">
      <div
        ref={containerRef}
        className="relative h-full flex items-center justify-center"
      >
        <div
          ref={textRef}
          className="absolute whitespace-nowrap text-2xl md:text-3xl lg:text-4xl font-bold"
          style={{ fontFamily: "system-ui, -apple-system, sans-serif" }}
        >
          <span className="mx-6 text-blue-500">Together.</span>
          <span className="mx-6 text-white">From Vision to Reality.</span>
          <span className="mx-6 text-blue-500">Together.</span>
          <span className="mx-6 text-white">From Vision to Reality.</span>
          <span className="mx-6 text-blue-500">Together.</span>
          <span className="mx-6 text-white">From Vision to Reality.</span>
          <span className="mx-6 text-blue-500">Together.</span>
          <span className="mx-6 text-white">From Vision to Reality.</span>
          <span className="mx-6 text-blue-500">Together.</span>
          <span className="mx-6 text-white">From Vision to Reality.</span>
        </div>
      </div>
    </section>
  );
};

export default AutoScrollSection;
