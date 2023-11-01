export const containerAnimation = {
    hidden: { opacity: 0, scale: 0 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        delayChildren: .2,
        staggerChildren: .1
      }
    }
  };

  export const itemAnimation = {
    hidden: { y: 5, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {staggerChildren: .2}
    }
  };