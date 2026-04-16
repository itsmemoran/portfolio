import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

/**
 * Wraps a section that PRECEDES a dark section.
 * As the user scrolls past it, the section:
 * - Scales down to 0.97
 * - Gains rounded bottom corners
 * - Fades slightly
 *
 * This is the "receding card" — the other half of the
 * stacking illusion. Pair with SectionReveal on the next section.
 */
export default function SectionRecede({ children }) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const scale = useTransform(scrollYProgress, [0.5, 1], [1, 0.97]);
  const borderRadius = useTransform(scrollYProgress, [0.6, 1], [0, 24]);
  const opacity = useTransform(scrollYProgress, [0.7, 1], [1, 0.85]);

  return (
    <motion.div
      ref={ref}
      className="relative z-[1] origin-top"
      style={{
        scale,
        borderBottomLeftRadius: borderRadius,
        borderBottomRightRadius: borderRadius,
        opacity,
        overflow: "hidden",
      }}
    >
      {children}
    </motion.div>
  );
}
