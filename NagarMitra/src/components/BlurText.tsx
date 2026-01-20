import { motion, Variants } from "framer-motion";
import { useMemo } from "react";

interface BlurTextProps {
  text: string;
  delay?: number;
  animateBy?: "words" | "characters";
  direction?: "top" | "bottom" | "left" | "right";
  onAnimationComplete?: () => void;
  className?: string;
}

const BlurText = ({
  text,
  delay = 100,
  animateBy = "words",
  direction = "top",
  onAnimationComplete,
  className = "",
}: BlurTextProps) => {
  const elements = useMemo(() => {
    if (animateBy === "words") {
      return text.split(" ");
    }
    return text.split("");
  }, [text, animateBy]);

  const getInitialPosition = () => {
    switch (direction) {
      case "top":
        return { y: -20, x: 0 };
      case "bottom":
        return { y: 20, x: 0 };
      case "left":
        return { x: -20, y: 0 };
      case "right":
        return { x: 20, y: 0 };
      default:
        return { y: -20, x: 0 };
    }
  };

  const containerVariants: Variants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: delay / 1000,
      },
    },
  };

  const initialPos = getInitialPosition();

  const childVariants: Variants = {
    hidden: {
      opacity: 0,
      filter: "blur(10px)",
      x: initialPos.x,
      y: initialPos.y,
    },
    visible: {
      opacity: 1,
      filter: "blur(0px)",
      x: 0,
      y: 0,
      transition: {
        type: "spring" as const,
        damping: 20,
        stiffness: 100,
      },
    },
  };

  return (
    <motion.span
      className={`inline-flex flex-wrap ${className}`}
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      onAnimationComplete={onAnimationComplete}
    >
      {elements.map((element, index) => (
        <motion.span
          key={index}
          variants={childVariants}
          className="inline-block"
          style={{ marginRight: animateBy === "words" ? "0.25em" : "0" }}
        >
          {element}
        </motion.span>
      ))}
    </motion.span>
  );
};

export default BlurText;
