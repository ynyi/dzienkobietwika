import { motion } from 'motion/react';
import { Heart, Flower2, Sparkles } from 'lucide-react';

export default function Decorations() {
  const elements = Array.from({ length: 18 });

  return (
    <div className="relative w-full h-full min-h-[400px] overflow-hidden flex items-center justify-center bg-pink-50/50 rounded-3xl border border-pink-100 shadow-inner">
      <div className="absolute inset-0 pointer-events-none">
        {elements.map((_, i) => {
          const isHeart = i % 2 === 0;
          const size = Math.random() * 24 + 16; // 16px to 40px
          const left = `${Math.random() * 80 + 10}%`;
          const top = `${Math.random() * 80 + 10}%`;
          const delay = Math.random() * 5;
          const duration = Math.random() * 4 + 4;

          return (
            <motion.div
              key={i}
              className="absolute text-rose-400 opacity-70"
              style={{ left, top }}
              animate={{
                y: [0, -20, 0],
                rotate: [0, 10, -10, 0],
                scale: [1, 1.1, 1],
              }}
              transition={{
                duration,
                delay,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            >
              {isHeart ? (
                <Heart size={size} className="fill-rose-300 text-rose-400" />
              ) : i % 3 === 0 ? (
                <Sparkles size={size} className="text-yellow-400" />
              ) : (
                <Flower2 size={size} className="text-pink-500" />
              )}
            </motion.div>
          );
        })}
      </div>
      
      <div className="z-10 text-center p-6 bg-white/60 backdrop-blur-sm rounded-2xl shadow-sm border border-white/50">
        <h2 className="text-2xl font-serif text-rose-800">kwiatuszki i serduszka &lt;3</h2>
      </div>
    </div>
  );
}
