import React, { useRef, useEffect } from "react";
import { useGSAP } from "@/utils/gsapAnimations";
import { gsap } from "gsap";

export interface ButtonProps {
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "outline" | "ghost";
  size?: "sm" | "md" | "lg";
  onClick?: () => void;
  disabled?: boolean;
  loading?: boolean;
  className?: string;
  type?: "button" | "submit" | "reset";
  icon?: React.ReactNode;
  iconPosition?: "left" | "right";
  fullWidth?: boolean;
}

const Button: React.FC<ButtonProps> = ({
  children,
  variant = "primary",
  size = "md",
  onClick,
  disabled = false,
  loading = false,
  className = "",
  type = "button",
  icon,
  iconPosition = "left",
  fullWidth = false,
}) => {
  const buttonRef = useRef<HTMLButtonElement>(null);
  const gsapAnimations = useGSAP();

  useEffect(() => {
    if (!buttonRef.current) return;

    const ctx = gsap.context(() => {
      // Initial button animation
      gsap.fromTo(
        buttonRef.current,
        { opacity: 0, scale: 0.9, y: 10 },
        { opacity: 1, scale: 1, y: 0, duration: 0.4, ease: "back.out(1.7)" }
      );

      // Hover animations
      let hoverAnimation: { onMouseEnter: () => void; onMouseLeave: () => void } | null = null;
      if (buttonRef.current) {
        hoverAnimation = gsapAnimations.buttonHover(buttonRef.current);
        buttonRef.current.addEventListener(
          "mouseenter",
          hoverAnimation.onMouseEnter
        );
        buttonRef.current.addEventListener(
          "mouseleave",
          hoverAnimation.onMouseLeave
        );
      }

      // Click animation
      const clickAnimation = () => {
        if (buttonRef.current) {
          gsap.to(buttonRef.current, {
            scale: 0.95,
            duration: 0.1,
            yoyo: true,
            repeat: 1,
            ease: "power2.inOut",
          });
        }
      };

      if (buttonRef.current) {
        buttonRef.current.addEventListener("click", clickAnimation);
      }

      return () => {
        if (buttonRef.current && hoverAnimation) {
          buttonRef.current.removeEventListener(
            "mouseenter",
            hoverAnimation.onMouseEnter
          );
          buttonRef.current.removeEventListener(
            "mouseleave",
            hoverAnimation.onMouseLeave
          );
          buttonRef.current.removeEventListener("click", clickAnimation);
        }
      };
    }, buttonRef);

    return () => ctx.revert();
  }, [gsapAnimations]);
  const baseClasses =
    "inline-flex items-center justify-center font-semibold rounded-full transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2";

  const variantClasses = {
    primary: "bg-blue-600 text-white hover:bg-blue-700 focus:ring-blue-500",
    secondary: "bg-gray-600 text-white hover:bg-gray-700 focus:ring-gray-500",
    outline:
      "border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white focus:ring-blue-500",
    ghost: "text-blue-600 hover:bg-blue-50 focus:ring-blue-500",
  };

  const sizeClasses = {
    sm: "px-4 py-2 text-sm",
    md: "px-6 py-3 text-base",
    lg: "px-8 py-4 text-lg",
  };

  const widthClass = fullWidth ? "w-full" : "";
  const disabledClass =
    disabled || loading ? "opacity-50 cursor-not-allowed" : "cursor-pointer";

  const classes = `${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${widthClass} ${disabledClass} ${className}`;

  const handleClick = () => {
    if (!disabled && !loading && onClick) {
      onClick();
    }
  };

  return (
    <button
      ref={buttonRef}
      type={type}
      className={classes}
      onClick={handleClick}
      disabled={disabled || loading}
    >
      {loading && (
        <div className="mr-2">
          <svg className="w-4 h-4 animate-spin" fill="none" viewBox="0 0 24 24">
            <circle
              className="opacity-25"
              cx="12"
              cy="12"
              r="10"
              stroke="currentColor"
              strokeWidth="4"
            />
            <path
              className="opacity-75"
              fill="currentColor"
              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
            />
          </svg>
        </div>
      )}

      {!loading && icon && iconPosition === "left" && (
        <span className="mr-2">{icon}</span>
      )}

      <span>{children}</span>

      {!loading && icon && iconPosition === "right" && (
        <span className="ml-2">{icon}</span>
      )}
    </button>
  );
};

export default Button;
