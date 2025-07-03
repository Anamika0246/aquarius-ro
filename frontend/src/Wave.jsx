import { motion } from "framer-motion";

const Wave = ({ color = "#0077be", flip = false }) => {
  return (
    <motion.svg
      viewBox="0 0 1440 320"
      initial={{ y: 100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8 }}
      style={{
        width: "100%",
        transform: flip ? "rotate(180deg)" : "none",
        display: "block",
      }}
      preserveAspectRatio="none"
    >
      <path
        fill={color}
        d="M0,192L60,192C120,192,240,192,360,197.3C480,203,600,213,720,213.3C840,213,960,203,1080,192C1200,181,1320,171,1380,165.3L1440,160L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"
      />
    </motion.svg>
  );
};

export default Wave;
