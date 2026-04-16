import { motion, useScroll, useTransform } from "framer-motion";

/**
 * A decorative SVG stroke that draws itself as the user scrolls
 * through the entire page. Positioned fixed on the right edge,
 * it acts as a subtle progress indicator + editorial ornament.
 *
 * Uses the accent color at low opacity — visible enough to notice,
 * quiet enough to never compete with content.
 */
export default function ScrollStrokeLine() {
  const { scrollYProgress } = useScroll();
  const pathLength = useTransform(scrollYProgress, [0, 1], [0, 1]);

  return (
    <div
      className="pointer-events-none fixed inset-y-0 right-0 w-[300px] z-[2] hidden lg:block"
      aria-hidden="true"
    >
      <svg
        viewBox="0 0 300 1000"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="h-full w-full"
        preserveAspectRatio="none"
      >
        {/* Ghost path — full shape at very low opacity */}
        <path
          d="M 280 0
             C 240 60, 80 90, 120 160
             C 170 240, 290 210, 260 300
             C 230 390, 50 340, 80 430
             C 110 520, 280 480, 250 560
             C 220 640, 40 610, 80 700
             C 120 790, 270 750, 240 830
             C 210 910, 60 880, 100 960
             C 130 1000, 200 1000, 250 1000"
          stroke="#c4632d"
          strokeWidth="1.5"
          opacity="0.04"
        />
        {/* Animated stroke — draws on scroll */}
        <motion.path
          d="M 280 0
             C 240 60, 80 90, 120 160
             C 170 240, 290 210, 260 300
             C 230 390, 50 340, 80 430
             C 110 520, 280 480, 250 560
             C 220 640, 40 610, 80 700
             C 120 790, 270 750, 240 830
             C 210 910, 60 880, 100 960
             C 130 1000, 200 1000, 250 1000"
          stroke="#c4632d"
          strokeWidth="2.5"
          strokeLinecap="round"
          fill="none"
          opacity="0.12"
          style={{ pathLength }}
        />
      </svg>
    </div>
  );
}
