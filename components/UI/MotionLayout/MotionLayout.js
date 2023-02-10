import { motion } from "framer-motion";

const MotionLayout = (props) => {
  return (
    <motion.div
      initial="offscreen"
      whileInView="onscreen"
      viewport={{ once: true, amount: 0.2 }}
      className={props.className}
      key={props.key}
    >
      {props.children}
    </motion.div>
  );
};

export default MotionLayout;
