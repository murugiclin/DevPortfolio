import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useIntersectionObserver } from "@/hooks/use-intersection-observer";

export default function ProjectsSection() {
  const [ref, isVisible] = useIntersectionObserver({ threshold: 0.1 });

  const projects = [
    {
      title: "Custom Modular OS",
description: "Built my own distributed, multi-device operating system from scratch featuring a microkernel architecture, advanced memory & process management, and adaptive UI layers.",
image: "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400",
tech: ["C", "Assembly", "Shell", "QEMU"],
github: "https://github.com/murugiclin/myos",


    },
    {
      title: "High-Performance Caching Layer",
      description: "Custom caching system in Rust that plugs into PostgreSQL and Redis with self-expiring TTL logic.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400",
      tech: ["Rust", "PostgreSQL", "Redis", "Assembly"],
      github: "#",

    },
    {
      title: "Cross-Chain Transaction Scanner",
      description: "Real-time scanner for BTC, ETH, and altcoins with webhooks to alert transaction anomalies.",
      image: "https://images.unsplash.com/photo-1639322537228-f710d846310a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400",
      tech: ["Python", "M4", "Docker", "WebHooks"],
      github: "#",
     
    },
    {
      title: "Smart Contract Testing Framework",
      description: "Automated testing suite for Ethereum smart contracts with fuzzing capabilities and gas optimization analysis.",
      image: "https://images.unsplash.com/photo-1642104704074-907c0698cbd9?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400",
      tech: ["Solidity", "TypeScript", "Hardhat", "Ethers.js"],
      github: "https://github.com/murugiclin/Solidity-ERC-token",
     
    },
    {
      title: "Decentralized Identity System",
      description: "Self-sovereign identity solution using zero-knowledge proofs for privacy-preserving verification.",
      image: "https://images.unsplash.com/photo-1635048424329-a9bfb146d7aa?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400",
      tech: ["zkSNARKs", "Rust", "IPFS", "GraphQL"],
      github: "#",
    
    },
    {
      title: "AI-Powered Trading Bot",
      description: "Automated trading system using machine learning to predict market movements and execute trades.",
      image: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400",
      tech: ["Python", "TensorFlow", "FastAPI", "PostgreSQL"],
      github: "#",
      
    },
    {
      title: "Zero-Knowledge Protocol Implementation",
      description: "Custom implementation of ZK-SNARK protocols for private transactions with optimized proving time.",
      image: "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400",
      tech: ["Rust", "zkSNARKs", "WebAssembly", "TypeScript"],
      github: "#",
     
    },
    {
      title: "Custom Memory Allocator",
      description: "High-performance memory allocator with custom garbage collection for real-time systems.",
      image: "https://images.unsplash.com/photo-1635048424329-a9bfb146d7aa?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400",
      tech: ["C++", "Assembly", "LLVM", "Linux Kernel"],
      github: "#",
     
    },
    {
      title: "L2 Chain Optimization Framework",
      description: "Gas optimization toolkit for L2 chains with automated benchmarking and compression techniques.",
      image: "https://images.unsplash.com/photo-1642104704074-907c0698cbd9?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400",
      tech: ["Solidity", "Rust", "Go", "Python"],
      github: "#",
    
    }
  ];

  return (
    <section id="projects" className="py-12 px-6 relative z-10" ref={ref}>
      <div className="max-w-6xl mx-auto">
        <motion.div
          className="text-center mb-8"
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="font-space text-4xl font-bold mb-4 text-gradient">Featured Projects</h2>
          <p className="text-xl text-med-gray max-w-2xl mx-auto">
            A showcase of my recent work in backend development and system design
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
            >
              <Card className="glass rounded-xl overflow-hidden group hover:shadow-xl hover:shadow-electric/20 transition-all duration-300">
                <div className="relative overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-navy/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <div className="flex space-x-4">
                      <Button
                        size="sm"
                        variant="outline"
                        className="bg-transparent border-electric text-electric hover:bg-electric hover:text-white"
                        asChild
                      >
                        <a href={project.github} target="_blank" rel="noopener noreferrer">
                          <Github className="h-4 w-4 mr-2" />
                          Code
                        </a>
                      </Button>
                      <Button
                        size="sm"
                        className="bg-electric text-white hover:bg-blue-600"
                        asChild
                      >
                        
                      </Button>
                    </div>
                  </div>
                </div>
                <CardContent className="p-6">
                  <h3 className="font-space text-xl font-semibold mb-2 text-electric">
                    {project.title}
                  </h3>
                  <p className="text-med-gray mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map((tech) => (
                      <Badge
                        key={tech}
                        variant="secondary"
                        className="bg-slate-800 text-neon border-slate-700"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="text-center mt-12"
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          <Button
            variant="outline"
            className="glass hover:bg-slate-700 text-electric border-electric px-8 py-3 rounded-xl transition-all duration-300 transform hover:scale-105"
          >
            View All Projects
            <ExternalLink className="ml-2 h-4 w-4" />
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
