"use client";

import { Menu, X, ChevronDown } from "lucide-react";
import { useNavigation } from "@/hooks/useNavigation";
import { useState, useEffect, useRef } from "react";
import { useRouter, usePathname } from "next/navigation";
import { gsap } from "gsap";
import ShrigLogo from "./ui/ShrigLogo";
import { useTheme } from "@/contexts/ThemeContext";

const Navigation = () => {
  const { isOpen, activeItem, toggleMenu, closeMenu, navigationItems } =
    useNavigation();
  const [aboutDropdownOpen, setAboutDropdownOpen] = useState(false);
  const [resourceDropdownOpen, setResourceDropdownOpen] = useState(false);
  const router = useRouter();
  const pathname = usePathname();
  const { isDark } = useTheme();

  // Refs for GSAP animations
  const navRef = useRef<HTMLElement>(null);
  const logoRef = useRef<HTMLDivElement>(null);
  const logoContainerRef = useRef<HTMLDivElement>(null);
  const logoGlowRef = useRef<HTMLDivElement>(null);
  const menuItemsRef = useRef<HTMLDivElement>(null);
  const ctaButtonRef = useRef<HTMLDivElement>(null);
  const themeToggleRef = useRef<HTMLDivElement>(null);
  const mobileMenuRef = useRef<HTMLDivElement>(null);

  // Function to handle navigation with proper routing
  const handleNavigation = (href: string) => {
    if (href.startsWith("#")) {
      // If we're not on the home page, navigate to home first, then to the section
      if (pathname !== "/") {
        router.push(`/${href}`);
      } else {
        // If we're on home page, just scroll to the section
        const element = document.getElementById(href.substring(1));
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
      }
    } else {
      // For external links, use router.push
      router.push(href);
    }
  };

  const aboutDropdownItems = [
    { name: "Our Company", href: "#company" },
    { name: "Our Team", href: "#team" },
    { name: "Our Partnership", href: "/#partnership" },
  ];

  const resourceDropdownItems = [
    { name: "Case studies", href: "/case-studies" },
    { name: "Blog", href: "/blog" },
  ];

  const dropdownRef = useRef<HTMLDivElement>(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setAboutDropdownOpen(false);
        setResourceDropdownOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  // GSAP animations for navigation - only on initial page load
  useEffect(() => {
    if (!navRef.current) return;

    const ctx = gsap.context(() => {
      // Initial navigation animation - only runs once on page load
      const tl = gsap.timeline();

      // Animate logo with enhanced effects
      tl.fromTo(
        logoRef.current,
        { opacity: 0, x: -50, scale: 0.8 },
        { opacity: 1, x: 0, scale: 1, duration: 0.8, ease: "back.out(1.7)" }
      );

      // Logo continuous floating animation
      gsap.to(logoRef.current, {
        y: -2,
        duration: 3,
        ease: "power2.inOut",
        yoyo: true,
        repeat: -1,
      });

      // Logo glow pulse animation
      if (logoGlowRef.current) {
        gsap.to(logoGlowRef.current, {
          opacity: 0.1,
          duration: 2,
          ease: "power2.inOut",
          yoyo: true,
          repeat: -1,
        });
      }

      // Animate menu items with stagger
      tl.fromTo(
        menuItemsRef.current?.querySelectorAll("div") || [],
        { opacity: 0, y: -20 },
        { opacity: 1, y: 0, duration: 0.5, stagger: 0.1, ease: "power2.out" },
        "-=0.3"
      );

      // Animate CTA button and theme toggle
      tl.fromTo(
        [ctaButtonRef.current, themeToggleRef.current],
        { opacity: 0, scale: 0.8 },
        {
          opacity: 1,
          scale: 1,
          duration: 0.4,
          stagger: 0.1,
          ease: "back.out(1.7)",
        },
        "-=0.2"
      );
    }, navRef);

    return () => ctx.revert();
  }, []); // Empty dependency array - only runs once on mount

  // Logo hover animations
  useEffect(() => {
    if (!logoContainerRef.current) return;

    const logoContainer = logoContainerRef.current;
    const logoGlow = logoGlowRef.current;

    const handleMouseEnter = () => {
      gsap.to(logoContainer, {
        scale: 1.1,
        rotation: 5,
        duration: 0.3,
        ease: "power2.out",
      });

      if (logoGlow) {
        gsap.to(logoGlow, {
          opacity: 0.4,
          scale: 1.2,
          duration: 0.3,
          ease: "power2.out",
        });
      }
    };

    const handleMouseLeave = () => {
      gsap.to(logoContainer, {
        scale: 1,
        rotation: 0,
        duration: 0.3,
        ease: "power2.out",
      });

      if (logoGlow) {
        gsap.to(logoGlow, {
          opacity: 0,
          scale: 1,
          duration: 0.3,
          ease: "power2.out",
        });
      }
    };

    const handleClick = () => {
      gsap.to(logoContainer, {
        scale: 0.95,
        duration: 0.1,
        yoyo: true,
        repeat: 1,
        ease: "power2.inOut",
      });
    };

    logoContainer.addEventListener("mouseenter", handleMouseEnter);
    logoContainer.addEventListener("mouseleave", handleMouseLeave);
    logoContainer.addEventListener("click", handleClick);

    return () => {
      logoContainer.removeEventListener("mouseenter", handleMouseEnter);
      logoContainer.removeEventListener("mouseleave", handleMouseLeave);
      logoContainer.removeEventListener("click", handleClick);
    };
  }, []);

  // Separate effect for mobile menu and dropdown animations
  useEffect(() => {
    if (!navRef.current) return;

    const ctx = gsap.context(() => {
      // Mobile menu animation
      if (isOpen && mobileMenuRef.current) {
        gsap.fromTo(
          mobileMenuRef.current,
          { opacity: 0, height: 0 },
          { opacity: 1, height: "auto", duration: 0.3, ease: "power2.out" }
        );

        gsap.fromTo(
          mobileMenuRef.current.querySelectorAll("div"),
          { opacity: 0, x: 20 },
          {
            opacity: 1,
            x: 0,
            duration: 0.4,
            stagger: 0.1,
            ease: "power2.out",
            delay: 0.1,
          }
        );
      }

      // Dropdown animations
      if (aboutDropdownOpen || resourceDropdownOpen) {
        const dropdown = document.querySelector(".dropdown-menu");
        if (dropdown) {
          gsap.fromTo(
            dropdown,
            { opacity: 0, y: -10, scale: 0.95 },
            { opacity: 1, y: 0, scale: 1, duration: 0.2, ease: "power2.out" }
          );
        }
      }
    }, navRef);

    return () => ctx.revert();
  }, [isOpen, aboutDropdownOpen, resourceDropdownOpen]);

  return (
    <nav
      ref={navRef}
      className="fixed top-0 left-0 right-0 z-50 bg-transparent backdrop-blur-sm"
    >
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <div ref={logoRef} className="flex-shrink-0 flex items-center">
            <div
              ref={logoContainerRef}
              className="h-10 w-auto group relative cursor-pointer text-white"
            >
              <div className="relative">
                <ShrigLogo
                  className="h-10 w-auto"
                  alt="Shrig Solutions"
                  isDark={isDark}
                />
              </div>
            </div>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:block">
            <div ref={menuItemsRef} className="flex items-center space-x-8">
              {navigationItems.map((item) => (
                <div key={item.name} className="relative">
                  {item.name === "About" ? (
                    <div className="relative" ref={dropdownRef}>
                      <button
                        onClick={() => setAboutDropdownOpen(!aboutDropdownOpen)}
                        className="px-3 py-2 text-sm font-medium text-white hover:text-cyan-400 transition-colors duration-200 flex items-center"
                        style={{
                          fontFamily: "system-ui, -apple-system, sans-serif",
                        }}
                      >
                        {item.name}
                        <ChevronDown
                          size={12}
                          className={`ml-1 transition-transform duration-200 ${
                            aboutDropdownOpen ? "rotate-180" : ""
                          }`}
                        />
                      </button>
                      {/* Active indicator line - only show when dropdown is open AND item is active */}
                      {aboutDropdownOpen && activeItem === "about" && (
                        <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#00BFFF]"></div>
                      )}

                      {/* About Dropdown */}
                      {aboutDropdownOpen && (
                        <div className="dropdown-menu absolute top-full left-0 mt-2 w-48 border rounded-md shadow-lg z-50 transition-colors duration-300 bg-black border-gray-800">
                          <div className="py-2">
                            {aboutDropdownItems.map(
                              (dropdownItem) => (
                                <a
                                  key={dropdownItem.name}
                                  href={dropdownItem.href}
                                  className="block px-4 py-2 text-sm transition-colors duration-200 text-white hover:bg-gray-900"
                                  onClick={() => setAboutDropdownOpen(false)}
                                >
                                  {dropdownItem.name}
                                </a>
                              )
                            )}
                          </div>
                        </div>
                      )}
                    </div>
                  ) : item.name === "Resource" ? (
                    <div className="relative" ref={dropdownRef}>
                      <button
                        onClick={() =>
                          setResourceDropdownOpen(!resourceDropdownOpen)
                        }
                        className="px-3 py-2 text-sm font-medium text-white hover:text-cyan-400 transition-colors duration-200 flex items-center"
                        style={{
                          fontFamily: "system-ui, -apple-system, sans-serif",
                        }}
                      >
                        {item.name}
                        <ChevronDown
                          size={12}
                          className={`ml-1 transition-transform duration-200 ${
                            resourceDropdownOpen ? "rotate-180" : ""
                          }`}
                        />
                      </button>
                      {/* Active indicator line - only show when dropdown is open AND item is active */}
                      {resourceDropdownOpen && activeItem === "resource" && (
                        <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#00BFFF]"></div>
                      )}

                      {/* Resource Dropdown */}
                      {resourceDropdownOpen && (
                        <div className="dropdown-menu absolute top-full left-0 mt-2 w-48 border rounded-md shadow-lg z-50 transition-colors duration-300 bg-black border-gray-800">
                          <div className="py-2">
                            {resourceDropdownItems.map(
                              (dropdownItem) => (
                                <a
                                  key={dropdownItem.name}
                                  href={dropdownItem.href}
                                  className="block px-4 py-2 text-sm transition-colors duration-200 text-white hover:bg-gray-900"
                                  onClick={() => setResourceDropdownOpen(false)}
                                >
                                  {dropdownItem.name}
                                </a>
                              )
                            )}
                          </div>
                        </div>
                      )}
                    </div>
                  ) : (
                    <>
                      <button
                        onClick={() => handleNavigation(item.href)}
                        className={`px-4 py-2 text-sm font-medium transition-colors duration-200 relative group ${
                          activeItem === item.href.replace("#", "")
                            ? "text-cyan-400"
                            : "text-white hover:text-cyan-400"
                        }`}
                        style={{
                          fontFamily: "system-ui, -apple-system, sans-serif",
                        }}
                      >
                        {item.name}
                        {/* Active indicator */}
                        {activeItem === item.href.replace("#", "") && (
                          <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-cyan-400 to-blue-400 rounded-full"></div>
                        )}
                        {/* Hover effect */}
                        <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-cyan-400/0 to-blue-400/0 group-hover:from-cyan-400/50 group-hover:to-blue-400/50 rounded-full transition-all duration-300"></div>
                      </button>
                    </>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* CTA Button */}
          <div ref={ctaButtonRef} className="hidden md:block">
            <button
              onClick={() => {
                const contactSection = document.getElementById("contact");
                if (contactSection) {
                  contactSection.scrollIntoView({
                    behavior: "smooth",
                    block: "start",
                  });
                }
              }}
              className="relative bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white px-6 py-2 rounded-lg text-sm font-semibold transition-all duration-300 uppercase tracking-wide shadow-lg hover:shadow-cyan-500/25 group overflow-hidden"
              style={{ fontFamily: "system-ui, -apple-system, sans-serif" }}
            >
              <span className="relative z-10">CONTACT US</span>
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-400/20 to-blue-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="focus:outline-none text-white"
              aria-label="Toggle menu"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div
          ref={mobileMenuRef}
          className="md:hidden border-t transition-colors duration-300 bg-black/95 border-gray-800"
        >
          <div className="px-2 pt-2 pb-3 space-y-1">
            {navigationItems.map((item) => (
              <div key={item.name}>
                {item.name === "About" ? (
                  <div>
                    <button
                      onClick={() => setAboutDropdownOpen(!aboutDropdownOpen)}
                      className="w-full text-left px-3 py-2 text-base font-medium text-white flex items-center justify-between"
                      style={{
                        fontFamily: "system-ui, -apple-system, sans-serif",
                      }}
                    >
                      {item.name}
                      <ChevronDown
                        size={16}
                        className={`transition-transform duration-200 ${
                          aboutDropdownOpen ? "rotate-180" : ""
                        }`}
                      />
                    </button>
                    {aboutDropdownOpen && (
                      <div className="ml-4 border-l transition-colors duration-300 border-gray-700">
                        {aboutDropdownItems.map(
                          (dropdownItem) => (
                            <a
                              key={dropdownItem.name}
                              href={dropdownItem.href}
                              className="block px-3 py-2 text-sm transition-colors duration-200 text-gray-300"
                              onClick={() => {
                                setAboutDropdownOpen(false);
                                closeMenu();
                              }}
                            >
                              {dropdownItem.name}
                            </a>
                          )
                        )}
                      </div>
                    )}
                  </div>
                ) : item.name === "Resource" ? (
                  <div>
                    <button
                      onClick={() =>
                        setResourceDropdownOpen(!resourceDropdownOpen)
                      }
                      className="w-full text-left px-3 py-2 text-base font-medium flex items-center justify-between text-white"
                      style={{
                        fontFamily: "system-ui, -apple-system, sans-serif",
                      }}
                    >
                      {item.name}
                      <ChevronDown
                        size={16}
                        className={`transition-transform duration-200 ${
                          resourceDropdownOpen ? "rotate-180" : ""
                        }`}
                      />
                    </button>
                    {resourceDropdownOpen && (
                      <div className="ml-4 border-l transition-colors duration-300 border-gray-700">
                        {resourceDropdownItems.map(
                          (dropdownItem) => (
                            <a
                              key={dropdownItem.name}
                              href={dropdownItem.href}
                              className="block px-3 py-2 text-sm transition-colors duration-200 text-gray-300"
                              onClick={() => {
                                setResourceDropdownOpen(false);
                                closeMenu();
                              }}
                            >
                              {dropdownItem.name}
                            </a>
                          )
                        )}
                      </div>
                    )}
                  </div>
                ) : (
                  <button
                    onClick={() => {
                      handleNavigation(item.href);
                      closeMenu();
                    }}
                    className={`block w-full text-left px-3 py-2 text-base font-medium transition-colors duration-200 ${
                      activeItem === item.href.replace("#", "")
                        ? "text-white bg-gray-800"
                        : "text-white"
                    }`}
                    style={{
                      fontFamily: "system-ui, -apple-system, sans-serif",
                    }}
                  >
                    {item.name}
                  </button>
                )}
              </div>
            ))}
            <button
              onClick={() => {
                const contactSection = document.getElementById("contact");
                if (contactSection) {
                  contactSection.scrollIntoView({
                    behavior: "smooth",
                    block: "start",
                  });
                }
                closeMenu();
              }}
              className="w-full mt-4 bg-gradient-to-r from-blue-400 to-blue-600 hover:from-blue-500 hover:to-blue-700 text-white px-6 py-2 rounded-md text-sm font-medium transition-all duration-200 uppercase tracking-wide"
              style={{ fontFamily: "system-ui, -apple-system, sans-serif" }}
            >
              CONTACT US
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navigation;
