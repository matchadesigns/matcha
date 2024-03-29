/** @jsx jsx */
import { motion } from "framer-motion";
import { shuffle } from "lodash";
import { useLayoutEffect, useState } from "react";
import { jsx } from "theme-ui";
import { Themed } from "@theme-ui/mdx";

const spring = {
  type: "spring",
  damping: 20,
  stiffness: 300,
};
const initialColors = [
  { color: "#6A6765", title: "design" },
  { color: "#BC866E", title: "décoration" },
  { color: "#D1A969", title: "graphisme" },
];

export const Subtitle = () => {
  const [colors, setColors] = useState(initialColors);
  useLayoutEffect(() => {
    const timer1 = setTimeout(() => setColors(shuffle(colors)), 1500);
    return () => {
      clearTimeout(timer1);
    };
  }, [colors]);
  return (
    <div sx={{ mb: 5, textAlign: "center", zIndex: 1 }}>
      {colors.map(({ color, title }) => (
        <motion.li
          key={color}
          layoutTransition={spring}
          style={{ color }}
          sx={{ listStyle: "none" }}
        >
          <H2>{title}</H2>
        </motion.li>
      ))}
    </div>
  );
};

const H2 = ({ children }) => (
  <Themed.h2
    sx={{
      m: 0,
      letterSpacing: 5,
      lineHeight: ["8vmin", "6vmin", "4vmin"],
      fontWeight: "700",
      fontSize: ["10vmin", "6vmin", "4vmin"],
    }}
  >
    {children}
  </Themed.h2>
);
