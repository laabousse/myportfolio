import { motion } from "framer-motion";
const stairAnimation = {
  initial: {
    top: "0%",
  },
  animate: {
    top: "100%",
  },
  exit: {
    top: ["100%", "0%"],
  },
};

const reversedIndex = (index) => {
  const totalSteps = 6;
  return totalSteps - index - 1;
};
const Strairs = () => {
  return (
    <>
      {[...Array(6)].map((_, index) => {
        return (
          <motion.div
            key={index}
            variants={stairAnimation}
            initial="initial"
            animate="animate"
            exit="exit"
            transition={{
              duration: 0.4,
              ease: "easeInOut",
              delay: reversedIndex(index) * 0.1,
            }}
            className="h-full w-full bg-white/20 relative"
          />
        );
      })}
    </>
  );
};

export default Strairs;
