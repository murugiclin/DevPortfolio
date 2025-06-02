import { motion } from "framer-motion";
import { useIntersectionObserver } from "@/hooks/use-intersection-observer";

export default function AboutSection() {
  const [ref, isVisible] = useIntersectionObserver({ threshold: 0.1 });

  return (
    <section id="about" className="py-12 px-6 relative z-10" ref={ref}>
      <div className="max-w-6xl mx-auto">
        <motion.div
          className="text-center mb-8"
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="font-space text-4xl font-bold mb-4 text-gradient">About Me</h2>
          <p className="text-xl text-med-gray max-w-2xl mx-auto">
            Passionate about creating efficient, scalable solutions that make a difference
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isVisible ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <img
              src="https://avataaars.io/?avatarStyle=Transparent&topType=ShortHairShortFlat&accessoriesType=Prescription02&hairColor=Black&facialHairType=Blank&clotheType=Hoodie&clotheColor=Black&eyeType=Happy&eyebrowType=Default&mouthType=Smile&skinColor=Light"
              alt="Developer Cartoon Avatar"
              className="rounded-2xl shadow-2xl w-full max-w-md mx-auto hover:scale-105 transition-transform duration-300"
            />
          </motion.div>

          <motion.div
            className="space-y-6"
            initial={{ opacity: 0, y: 30 }}
            animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <div className="glass rounded-xl p-6">
              <h3 className="font-space text-xl font-semibold mb-4 text-electric">My Journey</h3>
              <p className="text-med-gray leading-relaxed mb-4">
    Yo, I’ve built and shipped over 20 real-deal apps—everything from blockchain projects to full-on automation platforms. I’ve helped lay the groundwork for three funded startups and even kicked off two of my own, handling the whole vibe from designing the architecture to getting it live.
  </p>
  <p className="text-med-gray leading-relaxed">
    I speak M4, Rust, Ruby, C++, Python, and Assembly like they’re my native tongue. I’m all about nailing memory management, concurrency, and making systems run stupid-fast on bare metal. I’m not just slinging code—I’m crafting systems that scale and last.
  </p>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <motion.div
                className="glass rounded-xl p-4 text-center"
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <div className="text-2xl font-bold text-neon">20+</div>
                <div className="text-sm text-med-gray">Production Apps</div>
              </motion.div>
              <motion.div
                className="glass rounded-xl p-4 text-center"
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <div className="text-2xl font-bold text-electric">5</div>
                <div className="text-sm text-med-gray">Startups Built</div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
