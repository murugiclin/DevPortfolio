
import { motion } from "framer-motion";
import { useIntersectionObserver } from "@/hooks/use-intersection-observer";
import { Quote } from "lucide-react";

export default function TestimonialsSection() {
  const [ref, isVisible] = useIntersectionObserver({ threshold: 0.1 });

  const testimonials = [
    {
      text: "They said it couldn't be done. Clinton said 'hold my coffee' and delivered it in a week.",
      author: "Startup CEO"
    },
    {
      text: "Not all heroes wear capes. Some just write really clean code.",
      author: "Senior Developer"
    },
    {
      text: "The only developer I know who debugs code faster than they can type.",
      author: "Project Manager"
    }
  ];

  return (
    <section id="testimonials" className="py-12 px-6 relative z-10" ref={ref}>
      <div className="max-w-6xl mx-auto">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="font-space text-4xl font-bold mb-4 text-gradient">What They Say</h2>
          <p className="text-xl text-med-gray max-w-2xl mx-auto">
            Some fun feedback from folks I've worked with
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              className="glass p-6 rounded-xl"
              initial={{ opacity: 0, y: 20 }}
              animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              <Quote className="h-8 w-8 text-electric mb-4" />
              <p className="text-med-gray mb-4">{testimonial.text}</p>
              <p className="text-electric font-semibold">- {testimonial.author}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
