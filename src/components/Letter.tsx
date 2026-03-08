import { useState } from 'react';
import { motion } from 'motion/react';
import { Heart } from 'lucide-react';

export default function Letter() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="flex flex-col items-center justify-center h-full w-full relative p-4">
      <div className="relative w-[280px] h-[200px] mt-32">
        {/* Envelope Back */}
        <div className="absolute inset-0 bg-rose-300 rounded-md shadow-md z-0"></div>
        
        {/* Letter Paper */}
        <motion.div 
          className="absolute left-3 right-3 bg-white p-5 rounded-md shadow-lg text-rose-900 flex items-center justify-center border border-rose-100"
          initial={{ top: 10, bottom: 10, zIndex: 10 }}
          animate={isOpen ? { top: -180, bottom: 40, zIndex: 30 } : { top: 10, bottom: 10, zIndex: 10 }}
          transition={{ duration: 0.8, delay: isOpen ? 0.3 : 0, ease: "easeInOut" }}
        >
          <p className="font-serif text-center leading-relaxed text-sm">
            Wszystkiego najlepszego z okazji dnia kobiet dla mojej najlepszej dziewczyny! Kocham cie z całego serca i mam nadzieje że będziesz jeszcze świętowała wiele takich okazji! Jesteś świetna, oraz jesteś moją dumą!
          </p>
        </motion.div>

        {/* Envelope Front Flaps */}
        <div className="absolute inset-0 z-20 pointer-events-none overflow-hidden rounded-md">
          {/* Left */}
          <div className="absolute top-0 bottom-0 left-0 w-0 h-0 border-y-[100px] border-y-transparent border-l-[140px] border-l-rose-400/90"></div>
          {/* Right */}
          <div className="absolute top-0 bottom-0 right-0 w-0 h-0 border-y-[100px] border-y-transparent border-r-[140px] border-r-rose-400/90"></div>
          {/* Bottom */}
          <div className="absolute bottom-0 left-0 right-0 w-0 h-0 border-x-[140px] border-x-transparent border-b-[120px] border-b-rose-500"></div>
        </div>

        {/* Top Flap */}
        <motion.div 
          className="absolute top-0 left-0 right-0 origin-top"
          initial={{ rotateX: 0, zIndex: 40 }}
          animate={isOpen ? { rotateX: 180, zIndex: 5 } : { rotateX: 0, zIndex: 40 }}
          transition={{ duration: 0.5 }}
        >
          <div className="w-0 h-0 border-x-[140px] border-x-transparent border-t-[100px] border-t-rose-400 drop-shadow-md"></div>
        </motion.div>

        {/* Wax Seal */}
        {!isOpen && (
          <motion.button 
            className="absolute top-[100px] left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-50 w-14 h-14 bg-red-700 rounded-full shadow-xl flex items-center justify-center border-4 border-red-800 cursor-pointer"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={() => setIsOpen(true)}
          >
            <Heart className="text-red-300 w-6 h-6 fill-current" />
          </motion.button>
        )}
      </div>
      
      {isOpen && (
        <motion.button
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          onClick={() => setIsOpen(false)}
          className="mt-16 px-6 py-2 bg-rose-200 text-rose-900 rounded-full text-sm font-medium hover:bg-rose-300 transition-colors shadow-sm"
        >
          Zamknij list
        </motion.button>
      )}
    </div>
  );
}
