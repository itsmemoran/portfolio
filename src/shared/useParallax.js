import { useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

/**
 * Returns a ref + a motionValue that shifts an element on Y
 * at a fraction of its scroll speed.
 *
 * @param {number} distance   Max pixel offset (default 80)
 * @param {[string,string]} offset  Scroll trigger points
 */
export default function useParallax(distance = 80, offset = ["start end", "end start"]) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset });
  const y = useTransform(scrollYProgress, [0, 1], [distance, -distance]);
  return { ref, y, scrollYProgress };
}
