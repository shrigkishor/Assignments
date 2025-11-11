import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { TextPlugin } from "gsap/TextPlugin";
import { MorphSVGPlugin } from "gsap/MorphSVGPlugin";

// Register GSAP plugins
gsap.registerPlugin(ScrollTrigger, TextPlugin, MorphSVGPlugin);

export class GSAPAnimationService {
  // Basic fade in animation
  static fadeIn(element: gsap.TweenTarget, options: gsap.TweenVars = {}) {
    return gsap.fromTo(
      element,
      { opacity: 0, y: 30 },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        ease: "power2.out",
        ...options,
      }
    );
  }

  // Slide in from different directions
  static slideIn(
    element: gsap.TweenTarget,
    direction: "left" | "right" | "up" | "down" = "up",
    options: gsap.TweenVars = {}
  ) {
    const positions = {
      left: { x: -100, y: 0 },
      right: { x: 100, y: 0 },
      up: { x: 0, y: -50 },
      down: { x: 0, y: 50 },
    };

    return gsap.fromTo(
      element,
      { ...positions[direction], opacity: 0 },
      {
        x: 0,
        y: 0,
        opacity: 1,
        duration: 0.8,
        ease: "power2.out",
        ...options,
      }
    );
  }

  // Scale animation
  static scaleIn(element: gsap.TweenTarget, options: gsap.TweenVars = {}) {
    return gsap.fromTo(
      element,
      { scale: 0.8, opacity: 0 },
      {
        scale: 1,
        opacity: 1,
        duration: 0.6,
        ease: "back.out(1.7)",
        ...options,
      }
    );
  }

  // Stagger animation for multiple elements
  static staggerIn(
    elements: gsap.TweenTarget,
    stagger: number = 0.1,
    options: gsap.TweenVars = {}
  ) {
    return gsap.fromTo(
      elements,
      { opacity: 0, y: 30 },
      {
        opacity: 1,
        y: 0,
        duration: 0.6,
        stagger: stagger,
        ease: "power2.out",
        ...options,
      }
    );
  }

  // Hover animations
  static hoverScale(element: gsap.TweenTarget, scale: number = 1.05) {
    const tl = gsap.timeline({ paused: true });

    tl.to(element, {
      scale: scale,
      duration: 0.3,
      ease: "power2.out",
    });

    return {
      onMouseEnter: () => tl.play(),
      onMouseLeave: () => tl.reverse(),
    };
  }

  // Button hover animation with glow effect
  static buttonHover(
    element: gsap.TweenTarget,
    glowElement?: gsap.TweenTarget
  ) {
    const tl = gsap.timeline({ paused: true });

    tl.to(element, {
      scale: 1.05,
      duration: 0.3,
      ease: "power2.out",
    });

    if (glowElement) {
      tl.to(
        glowElement,
        {
          opacity: 0.5,
          duration: 0.3,
          ease: "power2.out",
        },
        0
      );
    }

    return {
      onMouseEnter: () => tl.play(),
      onMouseLeave: () => tl.reverse(),
    };
  }

  // Text reveal animation
  static textReveal(
    element: gsap.TweenTarget,
    text: string,
    options: gsap.TweenVars = {}
  ) {
    return gsap.to(element, {
      text: text,
      duration: 2,
      ease: "none",
      ...options,
    });
  }

  // Typewriter effect
  static typewriter(
    element: gsap.TweenTarget,
    text: string,
    options: gsap.TweenVars = {}
  ) {
    return gsap.to(element, {
      text: text,
      duration: text.length * 0.05,
      ease: "none",
      ...options,
    });
  }

  // Floating animation
  static float(element: gsap.TweenTarget, options: gsap.TweenVars = {}) {
    return gsap.to(element, {
      y: -10,
      duration: 2,
      ease: "power1.inOut",
      yoyo: true,
      repeat: -1,
      ...options,
    });
  }

  // Pulse animation
  static pulse(element: gsap.TweenTarget, options: gsap.TweenVars = {}) {
    return gsap.to(element, {
      scale: 1.1,
      duration: 1,
      ease: "power2.inOut",
      yoyo: true,
      repeat: -1,
      ...options,
    });
  }

  // Rotate animation
  static rotate(
    element: gsap.TweenTarget,
    rotation: number = 360,
    options: gsap.TweenVars = {}
  ) {
    return gsap.to(element, {
      rotation: rotation,
      duration: 2,
      ease: "power2.inOut",
      ...options,
    });
  }

  // Morphing animation using MorphSVGPlugin
  static morph(
    element: gsap.TweenTarget,
    morphSVG: string,
    options: gsap.TweenVars = {}
  ) {
    return gsap.to(element, {
      morphSVG: morphSVG,
      duration: 1,
      ease: "power2.inOut",
      ...options,
    });
  }

  // Morph between multiple paths
  static morphSequence(
    element: gsap.TweenTarget,
    paths: string[],
    options: gsap.TweenVars = {}
  ) {
    const tl = gsap.timeline();
    paths.forEach((path) => {
      tl.to(element, {
        morphSVG: path,
        duration: 0.5,
        ease: "power2.inOut",
        ...options,
      });
    });
    return tl;
  }

  // Morph with custom easing
  static morphWithEase(
    element: gsap.TweenTarget,
    targetPath: string,
    ease: string = "power2.inOut",
    options: gsap.TweenVars = {}
  ) {
    return gsap.to(element, {
      morphSVG: targetPath,
      duration: 1,
      ease: ease,
      ...options,
    });
  }

  // Morph with scroll trigger
  static morphOnScroll(
    element: gsap.TweenTarget,
    targetPath: string,
    options: gsap.TweenVars = {}
  ) {
    return gsap.to(element, {
      morphSVG: targetPath,
      duration: 1,
      ease: "power2.inOut",
      scrollTrigger: {
        trigger: element as any,
        start: "top 80%",
        end: "bottom 20%",
        toggleActions: "play none none reverse",
      },
      ...options,
    });
  }

  // Scroll-triggered animations
  static scrollTrigger(
    element: gsap.TweenTarget,
    animation: gsap.core.Tween,
    options: ScrollTrigger.StaticVars = {}
  ) {
    return ScrollTrigger.create({
      trigger: element as any,
      start: "top 80%",
      end: "bottom 20%",
      animation: animation,
      toggleActions: "play none none reverse",
      ...options,
    });
  }

  // Parallax effect
  static parallax(
    element: gsap.TweenTarget,
    speed: number = 0.5,
    options: gsap.TweenVars = {}
  ) {
    const { scrollTrigger, ...tweenOptions } = options;
    return gsap.to(element, {
      yPercent: -50 * speed,
      ease: "none",
      scrollTrigger: {
        trigger: element as any,
        start: "top bottom",
        end: "bottom top",
        scrub: true,
        ...(scrollTrigger || {}),
      },
      ...tweenOptions,
    });
  }

  // Timeline for complex animations
  static createTimeline(options: gsap.TimelineVars = {}) {
    return gsap.timeline(options);
  }

  // Split text animation
  static splitTextReveal(
    element: gsap.TweenTarget,
    options: gsap.TweenVars = {}
  ) {
    const chars = (element as any)?.querySelectorAll(".char");

    return gsap.fromTo(
      chars,
      { opacity: 0, y: 50, rotationX: -90 },
      {
        opacity: 1,
        y: 0,
        rotationX: 0,
        duration: 0.8,
        stagger: 0.02,
        ease: "back.out(1.7)",
        ...options,
      }
    );
  }

  // Loading animation
  static loadingSpinner(
    element: gsap.TweenTarget,
    options: gsap.TweenVars = {}
  ) {
    return gsap.to(element, {
      rotation: 360,
      duration: 1,
      ease: "none",
      repeat: -1,
      ...options,
    });
  }

  // Bounce animation
  static bounce(element: gsap.TweenTarget, options: gsap.TweenVars = {}) {
    return gsap.to(element, {
      y: -20,
      duration: 0.6,
      ease: "bounce.out",
      yoyo: true,
      repeat: 1,
      ...options,
    });
  }

  // Shake animation
  static shake(element: gsap.TweenTarget, options: gsap.TweenVars = {}) {
    return gsap.to(element, {
      x: 10,
      duration: 0.1,
      ease: "power2.inOut",
      yoyo: true,
      repeat: 5,
      ...options,
    });
  }

  // Glow effect
  static glow(element: gsap.TweenTarget, options: gsap.TweenVars = {}) {
    return gsap.to(element, {
      boxShadow: "0 0 20px rgba(59, 130, 246, 0.5)",
      duration: 0.5,
      ease: "power2.out",
      ...options,
    });
  }

  // Color transition
  static colorTransition(
    element: gsap.TweenTarget,
    color: string,
    options: gsap.TweenVars = {}
  ) {
    return gsap.to(element, {
      color: color,
      duration: 0.5,
      ease: "power2.out",
      ...options,
    });
  }

  // Width/Height animation
  static sizeTransition(
    element: gsap.TweenTarget,
    width?: number,
    height?: number,
    options: gsap.TweenVars = {}
  ) {
    const props: gsap.TweenVars = { ...options };
    if (width !== undefined) props.width = width;
    if (height !== undefined) props.height = height;

    return gsap.to(element, {
      ...props,
      duration: 0.5,
      ease: "power2.out",
    });
  }

  // Cleanup function
  static cleanup() {
    ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
  }

  // Refresh ScrollTrigger
  static refresh() {
    ScrollTrigger.refresh();
  }
}

// Hook for using GSAP animations in React components
export const useGSAP = () => {
  return {
    fadeIn: GSAPAnimationService.fadeIn,
    slideIn: GSAPAnimationService.slideIn,
    scaleIn: GSAPAnimationService.scaleIn,
    staggerIn: GSAPAnimationService.staggerIn,
    hoverScale: GSAPAnimationService.hoverScale,
    buttonHover: GSAPAnimationService.buttonHover,
    textReveal: GSAPAnimationService.textReveal,
    typewriter: GSAPAnimationService.typewriter,
    float: GSAPAnimationService.float,
    pulse: GSAPAnimationService.pulse,
    rotate: GSAPAnimationService.rotate,
    morph: GSAPAnimationService.morph,
    morphSequence: GSAPAnimationService.morphSequence,
    morphWithEase: GSAPAnimationService.morphWithEase,
    morphOnScroll: GSAPAnimationService.morphOnScroll,
    scrollTrigger: GSAPAnimationService.scrollTrigger,
    parallax: GSAPAnimationService.parallax,
    createTimeline: GSAPAnimationService.createTimeline,
    splitTextReveal: GSAPAnimationService.splitTextReveal,
    loadingSpinner: GSAPAnimationService.loadingSpinner,
    bounce: GSAPAnimationService.bounce,
    shake: GSAPAnimationService.shake,
    glow: GSAPAnimationService.glow,
    colorTransition: GSAPAnimationService.colorTransition,
    sizeTransition: GSAPAnimationService.sizeTransition,
    cleanup: GSAPAnimationService.cleanup,
    refresh: GSAPAnimationService.refresh,
  };
};
