import { useEffect } from 'react';
import './NeonCursor.css';

const NeonCursor = () => {
  useEffect(() => {
    const neonCursor = document.querySelector('.neon-cursor');

    const handleMouseMove = (e) => {
      const { clientX: x, clientY: y } = e;
      neonCursor.style.transform = `translate(${x}px, ${y}px)`;
    };

    document.addEventListener('mousemove', handleMouseMove);

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return <div className="neon-cursor"></div>;
};

export default NeonCursor;
