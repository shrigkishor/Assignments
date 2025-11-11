import React, { useRef, useEffect } from "react";
import { useGSAP } from "@/utils/gsapAnimations";
import { gsap } from "gsap";

export interface CardProps {
  children: React.ReactNode;
  variant?: "default" | "elevated" | "outlined" | "glass";
  padding?: "sm" | "md" | "lg";
  className?: string;
  onClick?: () => void;
  hover?: boolean;
  animation?: boolean;
}

const Card: React.FC<CardProps> = ({
  children,
  variant = "default",
  padding = "md",
  className = "",
  onClick,
  hover = false,
  animation = true,
}) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const gsapAnimations = useGSAP();

  useEffect(() => {
    if (!cardRef.current || !animation) return;

    const ctx = gsap.context(() => {
      // Initial card animation
      gsap.fromTo(
        cardRef.current,
        { opacity: 0, y: 30, scale: 0.95 },
        { opacity: 1, y: 0, scale: 1, duration: 0.6, ease: "power2.out" }
      );

      // Hover animations
      let hoverAnimation: { onMouseEnter: () => void; onMouseLeave: () => void } | null = null;
      if (hover && cardRef.current) {
        hoverAnimation = gsapAnimations.hoverScale(cardRef.current, 1.02);
        cardRef.current.addEventListener(
          "mouseenter",
          hoverAnimation.onMouseEnter
        );
        cardRef.current.addEventListener(
          "mouseleave",
          hoverAnimation.onMouseLeave
        );

        return () => {
          if (cardRef.current && hoverAnimation) {
            cardRef.current.removeEventListener(
              "mouseenter",
              hoverAnimation.onMouseEnter
            );
            cardRef.current.removeEventListener(
              "mouseleave",
              hoverAnimation.onMouseLeave
            );
          }
        };
      }
    }, cardRef);

    return () => ctx.revert();
  }, [animation, hover, gsapAnimations]);
  const baseClasses = "rounded-2xl transition-all duration-300";

  const variantClasses = {
    default: "bg-white shadow-lg",
    elevated: "bg-white shadow-xl hover:shadow-2xl",
    outlined: "bg-white border border-gray-200",
    glass: "bg-white/10 backdrop-blur-sm border border-white/20",
  };

  const paddingClasses = {
    sm: "p-4",
    md: "p-6",
    lg: "p-8",
  };

  const hoverClass = hover ? "transform hover:-translate-y-2" : "";
  const clickableClass = onClick ? "cursor-pointer" : "";

  const classes = `${baseClasses} ${variantClasses[variant]} ${paddingClasses[padding]} ${hoverClass} ${clickableClass} ${className}`;

  const handleClick = () => {
    if (onClick) {
      onClick();
    }
  };

  return (
    <div ref={cardRef} className={classes} onClick={handleClick}>
      {children}
    </div>
  );
};

export default Card;
