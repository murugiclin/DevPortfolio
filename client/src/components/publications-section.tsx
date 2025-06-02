
import { motion } from "framer-motion";
import { useIntersectionObserver } from "@/hooks/use-intersection-observer";
import { Book, ChevronDown, ChevronUp } from "lucide-react";
import { useState } from "react";

export default function PublicationsSection() {
  const [ref, isVisible] = useIntersectionObserver({ threshold: 0.1 });
  const [expandedIds, setExpandedIds] = useState<Set<number>>(new Set());

  const publications = [
    {
      id: 1,
      title: "Understanding Modern Web Development",
      date: "2025",
      description: "A comprehensive guide to web development practices and tools",
      expandedContent: "Modern web development encompasses a wide range of technologies and practices. From frontend frameworks like React and Vue to backend technologies like Node.js and Express, developers need to understand multiple layers of the stack. This article explores best practices, common pitfalls, and emerging trends in web development."
    },
    {
      id: 2,
      title: "Building Secure Applications",
      date: "2025",
      description: "Best practices for implementing security in web applications",
      expandedContent: "Security is paramount in modern web applications. This article delves into essential security practices including authentication, authorization, data encryption, and protection against common vulnerabilities like XSS and CSRF attacks. Learn how to implement robust security measures in your applications."
    }
  ];

  const toggleExpand = (id: number) => {
    const newExpanded = new Set(expandedIds);
    if (expandedIds.has(id)) {
      newExpanded.delete(id);
    } else {
      newExpanded.add(id);
    }
    setExpandedIds(newExpanded);
  };

  return (
    <section id="publications" className="py-12 px-6 relative z-10" ref={ref}>
      <div className="max-w-6xl mx-auto">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="font-space text-4xl font-bold mb-4 text-gradient">Publications</h2>
          <p className="text-xl text-med-gray max-w-2xl mx-auto">
            Technical articles and insights I've shared with the community
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {publications.map((pub) => (
            <motion.div
              key={pub.id}
              initial={{ opacity: 0, x: -30 }}
              animate={isVisible ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
              className="glass rounded-xl p-6 hover:shadow-lg transition-shadow duration-300"
            >
              <div className="flex items-start gap-4">
                <div className="bg-electric rounded-full p-3">
                  <Book className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h3 className="font-space text-xl font-semibold text-electric">{pub.title}</h3>
                  <p className="text-med-gray mb-2">{pub.date}</p>
                  <p className="text-light-gray mb-4">{pub.description}</p>
                  {expandedIds.has(pub.id) && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      className="text-light-gray mb-4"
                    >
                      {pub.expandedContent}
                    </motion.div>
                  )}
                  <button 
                    onClick={() => toggleExpand(pub.id)}
                    className="text-electric hover:underline flex items-center gap-1"
                  >
                    {expandedIds.has(pub.id) ? (
                      <>Read Less <ChevronUp className="h-4 w-4" /></>
                    ) : (
                      <>Read More <ChevronDown className="h-4 w-4" /></>
                    )}
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
