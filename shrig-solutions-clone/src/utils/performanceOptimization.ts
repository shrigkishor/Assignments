import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Performance optimization utilities for GSAP animations
export class PerformanceOptimizer {
  private static instance: PerformanceOptimizer;
  private isReducedMotion: boolean = false;
  private isLowEndDevice: boolean = false;

  private constructor() {
    this.detectDeviceCapabilities();
    this.setupReducedMotion();
  }

  public static getInstance(): PerformanceOptimizer {
    if (!PerformanceOptimizer.instance) {
      PerformanceOptimizer.instance = new PerformanceOptimizer();
    }
    return PerformanceOptimizer.instance;
  }

  // Detect device capabilities
  private detectDeviceCapabilities(): void {
    // Check for low-end device indicators
    const connection = (navigator as any).connection;
    const hardwareConcurrency = navigator.hardwareConcurrency || 1;
    const memory = (performance as any).memory?.jsHeapSizeLimit || 0;

    this.isLowEndDevice =
      hardwareConcurrency <= 2 ||
      memory < 1000000000 || // Less than 1GB
      (connection &&
        (connection.effectiveType === "slow-2g" ||
          connection.effectiveType === "2g"));
  }

  // Setup reduced motion preference
  private setupReducedMotion(): void {
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    this.isReducedMotion = mediaQuery.matches;

    mediaQuery.addEventListener("change", (e) => {
      this.isReducedMotion = e.matches;
      this.updateAnimationSettings();
    });
  }

  // Get optimized animation settings
  public getOptimizedSettings(
    baseSettings: gsap.TweenVars = {}
  ): gsap.TweenVars {
    if (this.isReducedMotion) {
      return {
        ...baseSettings,
        duration: 0.1,
        ease: "none",
      };
    }

    if (this.isLowEndDevice) {
      return {
        ...baseSettings,
        duration: (baseSettings.duration as number) * 0.7 || 0.5,
        ease: "power2.out",
      };
    }

    return baseSettings;
  }

  // Optimize ScrollTrigger settings
  public getOptimizedScrollTrigger(
    baseSettings: ScrollTrigger.StaticVars = {}
  ): ScrollTrigger.StaticVars {
    if (this.isReducedMotion) {
      return {
        ...baseSettings,
        toggleActions: "play none none none",
      };
    }

    if (this.isLowEndDevice) {
      return {
        ...baseSettings,
        start: "top 90%",
        end: "bottom 10%",
      };
    }

    return baseSettings;
  }

  // Update animation settings globally
  private updateAnimationSettings(): void {
    // Update existing ScrollTriggers
    ScrollTrigger.getAll().forEach((trigger) => {
      if (this.isReducedMotion) {
        trigger.disable();
      } else {
        trigger.enable();
      }
    });

    // Refresh ScrollTrigger
    ScrollTrigger.refresh();
  }

  // Create performance-optimized timeline
  public createOptimizedTimeline(vars?: gsap.TimelineVars): gsap.core.Timeline {
    const timeline = gsap.timeline(vars);

    if (this.isReducedMotion) {
      timeline.duration(0.1);
    }

    return timeline;
  }

  // Optimize element for animations
  public optimizeElement(element: gsap.TweenTarget): void {
    if (typeof element === "object" && element !== null) {
      const el = element as HTMLElement;

      // Force hardware acceleration
      gsap.set(el, {
        willChange: "transform, opacity",
        transform: "translateZ(0)",
      });
    }
  }

  // Batch DOM updates for better performance
  public batchUpdate(updates: (() => void)[]): void {
    if (this.isLowEndDevice) {
      // Process updates in smaller batches for low-end devices
      const batchSize = 5;
      for (let i = 0; i < updates.length; i += batchSize) {
        const batch = updates.slice(i, i + batchSize);
        requestAnimationFrame(() => {
          batch.forEach((update) => update());
        });
      }
    } else {
      // Process all updates at once for capable devices
      requestAnimationFrame(() => {
        updates.forEach((update) => update());
      });
    }
  }

  // Memory management for animations
  public cleanup(): void {
    // Kill all ScrollTriggers
    ScrollTrigger.getAll().forEach((trigger) => trigger.kill());

    // Clear GSAP cache
    gsap.globalTimeline.clear();

    // Force garbage collection if available
    if ((window as any).gc) {
      (window as any).gc();
    }
  }

  // Monitor performance and adjust settings
  public monitorPerformance(): void {
    let frameCount = 0;
    let lastTime = performance.now();

    const measureFPS = () => {
      frameCount++;
      const currentTime = performance.now();

      if (currentTime - lastTime >= 1000) {
        const fps = Math.round((frameCount * 1000) / (currentTime - lastTime));

        // Adjust settings based on FPS
        if (fps < 30) {
          this.isLowEndDevice = true;
          this.updateAnimationSettings();
        }

        frameCount = 0;
        lastTime = currentTime;
      }

      requestAnimationFrame(measureFPS);
    };

    requestAnimationFrame(measureFPS);
  }

  // Get device capabilities
  public getDeviceInfo() {
    return {
      isReducedMotion: this.isReducedMotion,
      isLowEndDevice: this.isLowEndDevice,
      hardwareConcurrency: navigator.hardwareConcurrency || 1,
      memory: (performance as any).memory?.jsHeapSizeLimit || 0,
      connection: (navigator as any).connection?.effectiveType || "unknown",
    };
  }
}

// Export singleton instance
export const performanceOptimizer = PerformanceOptimizer.getInstance();

// Utility functions for common optimizations
export const optimizeAnimation = (settings: gsap.TweenVars): gsap.TweenVars => {
  return performanceOptimizer.getOptimizedSettings(settings);
};

export const optimizeScrollTrigger = (
  settings: ScrollTrigger.StaticVars
): ScrollTrigger.StaticVars => {
  return performanceOptimizer.getOptimizedScrollTrigger(settings);
};

export const createOptimizedTimeline = (
  vars?: gsap.TimelineVars
): gsap.core.Timeline => {
  return performanceOptimizer.createOptimizedTimeline(vars);
};

// Hook for React components
export const usePerformanceOptimization = () => {
  return {
    optimizeAnimation,
    optimizeScrollTrigger,
    createOptimizedTimeline,
    optimizeElement:
      performanceOptimizer.optimizeElement.bind(performanceOptimizer),
    batchUpdate: performanceOptimizer.batchUpdate.bind(performanceOptimizer),
    cleanup: performanceOptimizer.cleanup.bind(performanceOptimizer),
    getDeviceInfo:
      performanceOptimizer.getDeviceInfo.bind(performanceOptimizer),
  };
};
