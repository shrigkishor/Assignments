import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

export const useScrollAnimations = () => {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (!sectionRef.current) return;

    const ctx = gsap.context(() => {
      // Fade in animation for sections
      gsap.utils.toArray<HTMLElement>(".fade-in-section").forEach((section) => {
        gsap.fromTo(
          section,
          { opacity: 0, y: 50 },
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
            ease: "power2.out",
            scrollTrigger: {
              trigger: section,
              start: "top 80%",
              end: "bottom 20%",
              toggleActions: "play none none reverse",
            },
          }
        );
      });

      // Slide in from left
      gsap.utils.toArray<HTMLElement>(".slide-in-left").forEach((element) => {
        gsap.fromTo(
          element,
          { opacity: 0, x: -100 },
          {
            opacity: 1,
            x: 0,
            duration: 0.8,
            ease: "power2.out",
            scrollTrigger: {
              trigger: element,
              start: "top 80%",
              end: "bottom 20%",
              toggleActions: "play none none reverse",
            },
          }
        );
      });

      // Slide in from right
      gsap.utils.toArray<HTMLElement>(".slide-in-right").forEach((element) => {
        gsap.fromTo(
          element,
          { opacity: 0, x: 100 },
          {
            opacity: 1,
            x: 0,
            duration: 0.8,
            ease: "power2.out",
            scrollTrigger: {
              trigger: element,
              start: "top 80%",
              end: "bottom 20%",
              toggleActions: "play none none reverse",
            },
          }
        );
      });

      // Scale in animation
      gsap.utils.toArray<HTMLElement>(".scale-in").forEach((element) => {
        gsap.fromTo(
          element,
          { opacity: 0, scale: 0.8 },
          {
            opacity: 1,
            scale: 1,
            duration: 0.6,
            ease: "back.out(1.7)",
            scrollTrigger: {
              trigger: element,
              start: "top 80%",
              end: "bottom 20%",
              toggleActions: "play none none reverse",
            },
          }
        );
      });

      // Stagger animation for lists
      gsap.utils.toArray<HTMLElement>(".stagger-animation").forEach((container) => {
        const children = container.children;
        gsap.fromTo(
          children,
          { opacity: 0, y: 30 },
          {
            opacity: 1,
            y: 0,
            duration: 0.6,
            stagger: 0.1,
            ease: "power2.out",
            scrollTrigger: {
              trigger: container,
              start: "top 80%",
              end: "bottom 20%",
              toggleActions: "play none none reverse",
            },
          }
        );
      });

      // Parallax effect for background elements
      gsap.utils.toArray<HTMLElement>(".parallax-bg").forEach((element) => {
        gsap.to(element, {
          yPercent: -50,
          ease: "none",
          scrollTrigger: {
            trigger: element,
            start: "top bottom",
            end: "bottom top",
            scrub: true,
          },
        });
      });

      // Text reveal animation
      gsap.utils.toArray<HTMLElement>(".text-reveal").forEach((element) => {
        const text = element.textContent;
        element.textContent = "";

        gsap.fromTo(
          element,
          { opacity: 0 },
          {
            opacity: 1,
            duration: 0.8,
            ease: "power2.out",
            scrollTrigger: {
              trigger: element,
              start: "top 80%",
              end: "bottom 20%",
              toggleActions: "play none none reverse",
              onEnter: () => {
                gsap.to(element, {
                  text: text,
                  duration: 1.5,
                  ease: "none",
                });
              },
            },
          }
        );
      });

      // Counter animation
      gsap.utils.toArray<HTMLElement>(".counter-animation").forEach((element) => {
        const endValue = parseInt(element.getAttribute("data-count") || "0");

        gsap.fromTo(
          element,
          { opacity: 0 },
          {
            opacity: 1,
            duration: 0.8,
            ease: "power2.out",
            scrollTrigger: {
              trigger: element,
              start: "top 80%",
              end: "bottom 20%",
              toggleActions: "play none none reverse",
              onEnter: () => {
                gsap.to(element, {
                  innerHTML: endValue,
                  duration: 2,
                  ease: "power2.out",
                  snap: { innerHTML: 1 },
                  onUpdate: function () {
                    const currentValue = this.targets()[0].innerHTML;
                    element.innerHTML = String(Math.ceil(Number(currentValue)));
                  },
                });
              },
            },
          }
        );
      });

      // Progress bar animation
      gsap.utils.toArray<HTMLElement>(".progress-bar").forEach((element) => {
        const progress = element.querySelector(".progress-fill");
        const percentage = element.getAttribute("data-percentage") || "0";

        gsap.fromTo(
          progress,
          { width: "0%" },
          {
            width: `${percentage}%`,
            duration: 1.5,
            ease: "power2.out",
            scrollTrigger: {
              trigger: element,
              start: "top 80%",
              end: "bottom 20%",
              toggleActions: "play none none reverse",
            },
          }
        );
      });

      // Image reveal animation
      gsap.utils.toArray<HTMLElement>(".image-reveal").forEach((element) => {
        gsap.fromTo(
          element,
          { opacity: 0, scale: 1.1 },
          {
            opacity: 1,
            scale: 1,
            duration: 1,
            ease: "power2.out",
            scrollTrigger: {
              trigger: element,
              start: "top 80%",
              end: "bottom 20%",
              toggleActions: "play none none reverse",
            },
          }
        );
      });

      // Floating animation for decorative elements
      gsap.utils.toArray<HTMLElement>(".float-animation").forEach((element) => {
        gsap.to(element, {
          y: -20,
          duration: 2,
          ease: "power1.inOut",
          yoyo: true,
          repeat: -1,
          scrollTrigger: {
            trigger: element,
            start: "top 80%",
            end: "bottom 20%",
            toggleActions: "play none none reverse",
          },
        });
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return { sectionRef };
};

// Utility function to add animation classes
export const addAnimationClass = (
  element: HTMLElement,
  animationType: string
) => {
  element.classList.add(animationType);
};

// Utility function to remove animation classes
export const removeAnimationClass = (
  element: HTMLElement,
  animationType: string
) => {
  element.classList.remove(animationType);
};

// Predefined animation types
export const AnimationTypes = {
  FADE_IN: "fade-in-section",
  SLIDE_LEFT: "slide-in-left",
  SLIDE_RIGHT: "slide-in-right",
  SCALE_IN: "scale-in",
  STAGGER: "stagger-animation",
  PARALLAX: "parallax-bg",
  TEXT_REVEAL: "text-reveal",
  COUNTER: "counter-animation",
  PROGRESS_BAR: "progress-bar",
  IMAGE_REVEAL: "image-reveal",
  FLOAT: "float-animation",
} as const;

export type AnimationType =
  (typeof AnimationTypes)[keyof typeof AnimationTypes];
