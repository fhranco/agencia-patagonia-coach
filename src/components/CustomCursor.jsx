import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const CustomCursor = () => {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const [hoverText, setHoverText] = useState("");

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };

    const handleMouseOver = (e) => {
      const target = e.target.closest('[data-cursor]');
      if (target) {
        setIsHovering(true);
        setHoverText(target.getAttribute('data-cursor') || "");
      } else {
        setIsHovering(false);
        setHoverText("");
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseover', handleMouseOver);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseover', handleMouseOver);
    };
  }, []);

  return (
    <>
      <motion.div
        className="custom-cursor"
        animate={{
          x: mousePos.x - 10,
          y: mousePos.y - 10,
          scale: isHovering ? 0 : 1,
        }}
        transition={{ type: 'spring', damping: 20, stiffness: 300, mass: 0.5 }}
      />
      
      {isHovering && hoverText && (
        <motion.div
          className="custom-cursor-pill"
          initial={{ opacity: 0, scale: 0 }}
          animate={{
            opacity: 1,
            scale: 1,
            x: mousePos.x,
            y: mousePos.y,
          }}
          style={{ display: 'block' }}
        >
          {hoverText}
        </motion.div>
      )}
    </>
  );
};

export default CustomCursor;
