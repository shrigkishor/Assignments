import { useState, useCallback, useEffect } from "react";
import { NavigationState } from "@/types";
import { NAVIGATION_ITEMS, MOBILE_BREAKPOINT } from "@/constants/navigation";

export const useNavigation = () => {
  const [state, setState] = useState<NavigationState>({
    isOpen: false,
    activeItem: "home",
  });

  const toggleMenu = useCallback(() => {
    setState((prev) => ({ ...prev, isOpen: !prev.isOpen }));
  }, []);

  const closeMenu = useCallback(() => {
    setState((prev) => ({ ...prev, isOpen: false }));
  }, []);

  const setActiveItem = useCallback((item: string) => {
    setState((prev) => ({ ...prev, activeItem: item }));
  }, []);


  const handleScroll = useCallback(() => {
    const sections = NAVIGATION_ITEMS.map((item) => item.href.replace("#", ""));
    const scrollPosition = window.scrollY + 120; // Increased offset for better detection

    // Find the current active section
    let activeSection = "home";

    for (let i = sections.length - 1; i >= 0; i--) {
      const section = sections[i];
      const element = document.getElementById(section);
      if (element) {
        const { offsetTop } = element;
        if (scrollPosition >= offsetTop) {
          activeSection = section;
          break;
        }
      }
    }

    setActiveItem(activeSection);
  }, [setActiveItem]);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= MOBILE_BREAKPOINT) {
        closeMenu();
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [closeMenu]);

  return {
    isOpen: state.isOpen,
    activeItem: state.activeItem,
    toggleMenu,
    closeMenu,
    setActiveItem,
    navigationItems: NAVIGATION_ITEMS,
  };
};
