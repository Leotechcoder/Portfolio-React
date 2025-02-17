import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Monitor, Keyboard, Mouse, Cpu, HardDrive, Smartphone } from 'lucide-react';

const techItemsData = [
  { icon: Monitor },
  { icon: Keyboard },
  { icon: Mouse },
  { icon: Cpu },
  { icon: HardDrive },
  { icon: Smartphone },
];

const generateRandomPositions = () =>
  techItemsData.map(() => ({
    x: (Math.random() * 400) - 200,
    y: (Math.random() * 300) - 150,
    velocityX: (Math.random() - 0.5) * 4,
    velocityY: (Math.random() - 0.5) * 4,
  }));

export default function AnimatedTechItems() {
  const [techItems, setTechItems] = useState(generateRandomPositions());

  useEffect(() => {
    const interval = setInterval(() => {
      setTechItems((prevItems) => {
        return prevItems.map((item, index) => {
          let newX = item.x + item.velocityX * 1.5;
          let newY = item.y + item.velocityY * 1.5;

          // Colisión con bordes
          if (newX > 200 || newX < -200) item.velocityX *= -1;
          if (newY > 150 || newY < -150) item.velocityY *= -1;

          // Colisión con otros íconos
          prevItems.forEach((other, otherIndex) => {
            if (index !== otherIndex) {
              const dx = newX - other.x;
              const dy = newY - other.y;
              const distance = Math.sqrt(dx * dx + dy * dy);
              if (distance < 50) {
                item.velocityX *= -1;
                item.velocityY *= -1;
              }
            }
          });

          return { ...item, x: newX, y: newY };
        });
      });
    }, 50);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative left-1/4 w-[400px] h-[400px] flex justify-center items-center bg-gray-900 overflow-hidden rounded-full">
      {techItems.map(({ x, y }, index) => {
        const Icon = techItemsData[index].icon;
        return (
          <motion.div
            key={index}
            animate={{ x, y }}
            transition={{ duration: 0.05, ease: 'linear' }}
            className="absolute"
          >
            <Icon className="w-14 h-14 text-white" />
          </motion.div>
        );
      })}
    </div>
  );
}
