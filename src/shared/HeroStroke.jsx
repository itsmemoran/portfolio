import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

/**
 * A large decorative stroke placed behind the Hero title.
 * Draws from 0% to ~60% as the hero section scrolls into and out of view.
 * More visible than the global line — this is the "signature" moment.
 */
export default function HeroStroke() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const pathLength = useTransform(scrollYProgress, [0, 1], [0.05, 1]);
  const opacity = useTransform(scrollYProgress, [0, 0.8, 1], [0.14, 0.08, 0]);

  return (
    <div
      ref={ref}
      className="absolute inset-0 overflow-hidden pointer-events-none"
      aria-hidden="true"
    >
      <motion.svg
        viewBox="0 0 900 900"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="absolute -right-[15%] -top-[5%] w-[85%] h-[110%]"
        style={{ opacity }}
      >
        <motion.path
          d="M 750 20
             C 680 80, 350 60, 420 180
             C 500 310, 820 250, 760 380
             C 700 510, 250 420, 320 550
             C 390 680, 800 600, 720 720
             C 640 840, 300 800, 400 880"
          stroke="#c4632d"
          strokeWidth="3"
          strokeLinecap="round"
          fill="none"
          style={{ pathLength }}
        />
        {/* A second thinner line offset for depth */}
        <motion.path
          d="M 780 60
             C 720 130, 400 100, 460 210
             C 530 330, 840 280, 790 400
             C 740 530, 290 450, 350 570
             C 420 700, 820 630, 750 740
             C 680 860, 340 830, 430 900"
          stroke="#2a7d6e"
          strokeWidth="1.5"
          strokeLinecap="round"
          fill="none"
          opacity="0.6"
          style={{ pathLength }}
        />
      </motion.svg>
    </div>
  );
}
