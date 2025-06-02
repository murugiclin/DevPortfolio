
import { motion } from "framer-motion";
import { useIntersectionObserver } from "@/hooks/use-intersection-observer";
import { Calendar, Briefcase } from "lucide-react";

export default function ExperienceSection() {
  const [ref, isVisible] = useIntersectionObserver({ threshold: 0.1 });

  const experiences = [
    {
      title: "Student - Software Development",
      company: "Institute of Software Development (IST)",
      period: "2025 - Present",
      achievements: [
        "Pursuing advanced software development practices",
        "Working on real-world projects and applications",
        "Learning modern development methodologies"
      ]
    },
    {
      title: "Student - ICT & Cisco Certifications",
      company: "Zetech University",
      period: "2024 - 2025",
      achievements: [
        "Information Communication Technology studies",
        "Cisco DevNet Associate certification",
        "Cisco Introduction to Cybersecurity certification",
        "Cisco Ethical Hacking certification",
        "Focus on networking and security systems"
      ]
    },
    {
      title: "Student - Software Development",
      company: "Apex College",
      period: "2023 - 2024",
      achievements: [
        "C++, PHP, JavaScript, HTML, CSS development",
        "Web development and programming fundamentals"
      ]
    },
    {
      title: "Founder & CEO",
      company: "Idexin",
      period: "2025 - Present",
      achievements: [
        "Led company vision and strategic direction",
        "Developed innovative blockchain solutions",
        "Built and managed high-performing technical teams"
      ]
    },
    {
      title: "Software Developer",
      company: "AlmanisSoko",
      period: "2024 - 2024",
      achievements: [
        "Architected and implemented core platform features",
        "Led technical initiatives and system optimizations",
        "Collaborated with cross-functional teams to deliver solutions"
      ]
    },
    {
      title: "Systems Engineer",
      company: "Fintech Startup",
      period: "2024 - Present",
      achievements: [
        "Built high-frequency trading systems in C++ and Rust",
        "Developed custom memory allocators for performance",
        "Created automated testing frameworks for API stability"
      ]
    }
  ];

  return (
    <section id="experience" className="py-12 px-6 relative z-10" ref={ref}>
      <div className="max-w-6xl mx-auto">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="font-space text-4xl font-bold mb-4 text-gradient">Professional Journey</h2>
          <p className="text-xl text-med-gray max-w-2xl mx-auto">
            A timeline of key roles and achievements in system design and blockchain development
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {experiences.map((exp, index) => (
            <motion.div
              key={exp.title}
              initial={{ opacity: 0, x: -30 }}
              animate={isVisible ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="glass rounded-xl p-6 relative h-full hover:shadow-lg transition-shadow duration-300"
            >
              <div className="flex items-start gap-6">
                <div className="bg-electric rounded-full p-3">
                  <Briefcase className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h3 className="font-space text-xl font-semibold text-electric">{exp.title}</h3>
                  <p className="text-med-gray mb-2">{exp.company}</p>
                  <div className="flex items-center text-light-gray mb-4">
                    <Calendar className="h-4 w-4 mr-2" />
                    <span>{exp.period}</span>
                  </div>
                  <ul className="space-y-2">
                    {exp.achievements.map((achievement, i) => (
                      <li key={i} className="text-light-gray flex items-center">
                        <span className="text-electric mr-2">•</span>
                        {achievement}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
