export const containerVariants = {
  initial: {
    opacity: 0,
  },
  animate: {
    opacity: 1,
    transition: {
      duration: 1.5,
      ease: "easeInOut",
    },
  },
};

export const formsContainer = {
  initial: {
    opacity: 0,
    y: 10,
  },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
    },
  },
  exit: { y: -10, opacity: 0 },
};

export const btnVariants = {
  whileHover: {
    scale: 1.05,
    transition: {
      ease: "easeInOut",
    },
  },
};
