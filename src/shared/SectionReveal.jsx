import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

/**
 * Wraps a section to create a "card stacking" reveal effect.
 *
 * HOW IT WORKS:
 * As the wrapped section enters the bottom of the viewport,
 * it rises slightly (translateY) and the previous section
 * appears to recede (handled via a fake "ceiling" shadow).
 *
 * USE: Wrap dark sections (Skills, Contact) to create dramatic
 * light → dark transitions.
 *
 * DO NOT USE on every section — the effect loses its power
 * if it's everywhere. Reserve it for theme-change moments.
 */
export default function SectionReveal({ children }) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "start 0.3"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [60, 0]);
  const borderRadius = useTransform(scrollYProgress, [0, 0.6, 1], [32, 16, 0]);
  const shadow = useTransform(
    scrollYProgress,
    [0, 1],
    ["0 -30px 80px rgba(0,0,0,0.3)", "0 0px 0px rgba(0,0,0,0)"]
  );

  return (
    <motion.div
      ref={ref}
      className="relative z-[2]"
      style={{
        y,
        borderTopLeftRadius: borderRadius,
        borderTopRightRadius: borderRadius,
        boxShadow: shadow,
        overflow: "hidden",
      }}
    >
      {children}
    </motion.div>
  );
}
