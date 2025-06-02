import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Music, BarChart3 } from 'lucide-react';

export default function NowPlaying() {
  const songs = [
    'Synthwave Mix',
    'Cyberpunk 2077 Radio',
    'Lo-Fi Hip Hop',
    'Drum & Bass Essentials',
    'Retro Wave Nights',
  ];
  const [currentSongIndex, setCurrentSongIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSongIndex((prevIndex) => (prevIndex + 1) % songs.length);
    }, 3000); // Switches every 3 seconds

    return () => clearInterval(interval); // Cleanup interval on component unmount
  }, []);

  return (
    <motion.div
      className="fixed bottom-6 right-6 glass rounded-xl p-4 max-w-xs hidden lg:block z-20"
      initial={{ opacity: 0, scale: 0.8, y: 100 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 1.4 }}
    >
      <div className="flex items-center space-x-3">
        <div className="w-10 h-10 bg-gradient-to-br from-green-400 to-green-600 rounded-lg flex items-center justify-center">
          <Music className="h-5 w-5 text-white" />
        </div>
        <div className="flex-1 min-w-0">
          <div className="text-sm font-medium text-light-gray truncate">Currently Playing</div>
          <motion.div
            className="text-xs text-med-gray truncate"
            key={songs[currentSongIndex]} // Triggers animation on song change
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            {songs[currentSongIndex]}
          </motion.div>
        </div>
        <div className="flex space-x-1">
          {[1, 2, 3].map((i) => (
            <motion.div
              key={i}
              className="w-1 bg-neon rounded-full"
              animate={{
                height: [12, 20, 16],
              }}
              transition={{
                duration: 1,
                repeat: Infinity,
                ease: 'easeInOut',
                delay: i * 0.1,
              }}
            />
          ))}
        </div>
      </div>
    </motion.div>
  );
}
