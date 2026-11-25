import { useEffect, useState } from "react";

/**
 * Matches desktop media query (default >= 961px) so scroll-driven sticky
 * stacking and horizontal glide effects activate strictly on desktop
 * viewports while keeping mobile/tablet unclipped and bug-free.
 */
export const useIsDesktop = (minWidth = 961): boolean => {
  const [isDesktop, setIsDesktop] = useState<boolean>(() =>
    typeof window !== "undefined"
      ? window.matchMedia(`(min-width: ${minWidth}px)`).matches
      : true
  );

  useEffect(() => {
    const mq = window.matchMedia(`(min-width: ${minWidth}px)`);
    const update = () => setIsDesktop(mq.matches);
    update();
    mq.addEventListener("change", update);
    return () => mq.removeEventListener("change", update);
  }, [minWidth]);

  return isDesktop;
};
