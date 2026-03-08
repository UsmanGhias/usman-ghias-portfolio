import { useState, useEffect } from "react";

export const useCountUp = (end: number, duration = 2000, start = 0, trigger = true) => {
  const [count, setCount] = useState(start);

  useEffect(() => {
    if (!trigger) return;
    let startTime: number;
    let raf: number;

    const step = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const elapsed = timestamp - startTime;
      const progress = Math.min(elapsed / duration, 1);
      // easeOutExpo
      const eased = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);
      setCount(Math.floor(start + (end - start) * eased));
      if (progress < 1) raf = requestAnimationFrame(step);
    };

    raf = requestAnimationFrame(step);
    return () => cancelAnimationFrame(raf);
  }, [end, duration, start, trigger]);

  return count;
};
