import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Code, Terminal, Zap } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function HeroSection() {
  const roles = ['Software Dev', 'Ethical Hacker', 'DevNet Associate', 'Cybersecurity Specialist'];
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % roles.length);
    }, 2000); // Switches every 2 seconds

    return () => clearInterval(interval); // Cleanup interval on component unmount
  }, []);

  const handleViewProjects = () => {
    const element = document.querySelector('#projects');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative min-h-[80vh] flex items-center justify-center pt-16 px-6">
      <div className="max-w-4xl mx-auto text-center z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <h1 className="font-space text-5xl md:text-7xl font-bold mb-2">
            <span className="text-light-gray">Hi, I'm </span>
            <span className="text-gradient">Clinton Murugi</span>
              <span className="text-gradient">https://t.me/Idexin_signals</span>
                 <span className="text-gradient">https://t.me/Idexin_bot</span>
              <span className="text-gradient">https://t.me/Idexin</span>

          </h1>
          <motion.div
            className="font-space text-2xl md:text-3xl text-electric mb-8"
            key={roles[currentIndex]} // Triggers animation on text change
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            {roles[currentIndex]}
          </motion.div>
        </motion.div>

        <motion.div
          className="glass rounded-2xl p-8 mb-8 terminal-glow max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <div className="flex items-center mb-4">
            <div className="flex space-x-2">
              <div className="w-3 h-3 bg-red-500 rounded-full"></div>
              <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
              <div className="w-3 h-3 bg-green-500 rounded-full"></div>
            </div>
            <div className="flex-1 text-center text-sm text-med-gray font-mono">~/@murugiclin</div>
          </div>
          <p className="text-lg text-med-gray leading-relaxed font-mono">
            <span className="text-neon">$</span> Shipped 20+ battle-tested apps into the wild. Speak M4, Rust, Ruby, C++, Python, and Assembly like bedtime stories.  
            Tuning systems till they scream with bare-metal speed.  
            Rumor has it I live at the compiler's house. Been told I work there — I might actually pay rent.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
        >
          <Button
            onClick={handleViewProjects}
            className="bg-electric hover:bg-blue-600 text-white font-semibold px-8 py-4 rounded-xl transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-electric/25"
            size="lg"
          >
            <Code className="mr-2 h-5 w-5" />
            View My Projects
          </Button>
        </motion.div>

        {/* Floating Icons */}
        <div className="absolute top-20 left-10 opacity-20">
          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
          >
            <Terminal className="h-8 w-8 text-electric" />
          </motion.div>
        </div>
        <div className="absolute top-40 right-10 opacity-20">
          <motion.div
            animate={{ y: [0, -15, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
          >
            <Zap className="h-6 w-6 text-neon" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
