import { motion } from "framer-motion";

const MotionLayout = ({ children, className, key }) => {
  return (
    <motion.div
      initial="offscreen"
      whileInView="onscreen"
      viewport={{ once: true, amount: 0.2 }}
      className={className}
      key={key}
    >
      {children}
    </motion.div>
  );
};

export default MotionLayout;
