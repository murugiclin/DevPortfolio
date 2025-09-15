import { motion } from "framer-motion";
import { useIntersectionObserver } from "@/hooks/use-intersection-observer";
import { 
  Database, 
  Server, 
  Cloud, 
  GitBranch, 
  Code2, 
  Zap,
  Coffee,
  Leaf,
  Cpu,
  TrendingUp,
  Shield,
  Settings,
  TestTube,
  Workflow,
  Wrench,
  Brain,
  Lock,
  Target,
  Rocket,
  Monitor,
  Terminal,
  Clock
} from "lucide-react";

export default function SkillsSection() {
  const [ref, isVisible] = useIntersectionObserver({ threshold: 0.1 });

  const skillCategories = [
    {
      title: "Core Languages",
      skills: [
        { name: "Rust", icon: Shield, color: "text-orange-500" },
        { name: "C++", icon: Cpu, color: "text-blue-400" },
        { name: "Python", icon: Code2, color: "text-blue-400" },
        { name: "Assembly", icon: Settings, color: "text-red-500" },
        { name: "Php", icon: Terminal, color: "text-purple-500" },
        { name: "Next Js", icon: Leaf, color: "text-red-600" },
      ],
    },
    {
      title: "Systems & Performance",
      skills: [
        { name: "Memory Management", icon: Cpu, color: "text-green-500" },
        { name: "Concurrency", icon: Zap, color: "text-yellow-500" },
        { name: "Bare Metal Programming", icon: Server, color: "text-orange-600" },
        { name: "Custom Memory Allocators", icon: Brain, color: "text-purple-400" },
        { name: "High-Frequency Trading Logic", icon: TrendingUp, color: "text-green-400" },
        { name: "Async Task Schedulers", icon: Zap, color: "text-blue-300" },
      ],
    },
    {
      title: "Blockchain & Security",
      skills: [
        { name: "Smart Contracts", icon: Shield, color: "text-orange-400" },
        { name: "Cold Storage Systems", icon: Lock, color: "text-blue-500" },
        { name: "Cross-Chain Protocols", icon: GitBranch, color: "text-blue-400" },
        { name: "Token Infrastructure", icon: Database, color: "text-purple-500" },
        { name: "Blockchain Indexers", icon: Monitor, color: "text-green-500" },
        { name: "Transaction Handlers", icon: Workflow, color: "text-yellow-400" },
      ],
    },
    {
      title: "DevOps & Infrastructure",
      skills: [
        { name: "Docker Orchestration", icon: Cloud, color: "text-blue-500" },
        { name: "CI/CD Pipelines", icon: Workflow, color: "text-blue-300" },
        { name: "Linux Hardening", icon: Shield, color: "text-red-400" },
        { name: "Custom CLI Tools", icon: Terminal, color: "text-green-400" },
        { name: "Remote Control Systems", icon: Settings, color: "text-orange-500" },
        { name: "Fault-Tolerant Daemons", icon: Wrench, color: "text-purple-400" },
      ],
    },
  ];

  const achievements = [
    {
      category: "🧠 Key Achievements",
      items: [
        "⚙️ Automated critical backend workflows that saved thousands of developer hours",
        "🛠️ Built custom blockchain transaction handlers & cold-wallet logic",
        "🚀 Created token infrastructures and on-chain contract simulators",
        "💸 Contributed to funding presentations with full-stack demos",
        "🧩 Designed and deployed modular API engines used in live fintech environments",
        "🧠 Reverse-engineered complex protocols and re-implemented them for internal use",
        "🧪 Built internal debugging tools from scratch using C++ and M4 macros",
        "🔐 Integrated low-level security layers into sensitive systems using Rust and Assembly"
      ]
    },
    {
      category: "🧾 Technical Highlights",
      items: [
        "🧬 Wrote custom memory allocators for embedded projects",
        "🛰️ Built async task schedulers for high-frequency trading logic",
        "📦 Packaged full CI/CD pipelines for monorepo builds",
        "🧪 Created local testing frameworks that simulate distributed environments",
        "🌐 Built a multi-layer proxy with dynamic IP rotation in C++",
        "🛡️ Hardened Linux-based systems with custom security layers for startup deployments",
        "🧠 Developed private tools that monitor API volatility for liquidity bot systems"
      ]
    },
    {
      category: "🧨 Advanced Technical Arsenal",
      items: [
        "🧬 Built a complete on-chain & off-chain hybrid automation system to manage and validate crypto wallet transactions with zero downtime",
        "🛰️ Engineered a custom blockchain indexer that parses blocks in real-time and feeds a live analytics dashboard",
        "🧱 Wrote a high-performance caching layer in Rust that plugs into PostgreSQL and Redis with a self-expiring TTL logic",
        "🧪 Developed a smart fuzz testing framework in Python to break APIs before users can",
        "🧩 Designed a modular rule engine in C++ used to auto-trigger logic in a proprietary escrow platform",
        "🔐 Implemented a cold storage isolation module with custom M4-generated assembly guards",
        "⚖️ Created a token vault and ledger system that logs every balance shift with reconciliation checks",
        "🔄 Built a cross-chain transaction scanner for BTC, ETH, and altcoins with webhooks to alert anomalies"
      ]
    },
    {
      category: "🔭 Systems & Infrastructure",
      items: [
        "🧰 Packaged a micro CLI dev toolkit that generates wallet keypairs, decodes TXs, benchmarks local memory, and more",
        "📡 Designed and deployed a fully containerized environment (Docker + manual orchestration) that scales to 50+ services",
        "🔭 Created a bare-metal remote control layer over SSH that can reboot, clear cache, recompile, and redeploy servers using one command",
        "📉 Reverse-engineered an exchange's internal API to simulate fee models and optimize automated trade routes",
        "🕷️ Wrote a stealth crawler to collect blockchain mempool data and rank pending transactions by gas cost & priority",
        "📍Built a geo-aware API layer that serves different versions of the app depending on the user's region (used for compliance sandboxing)",
        "🧨 Created a fault-tolerant daemon that reroutes WebSocket connections for real-time trading apps on disconnect",
        "🔒 Designed custom auth systems using JWT, asymmetric key pairs, and IP-locked sessions — no third-party services used"
      ]
    },
    {
      category: "⚡ Performance & Innovation",
      items: [
        "🧊 Wrote a zero-dependency file-based database in C++ for edge cases and offline ops",
        "⚙️ Created a full machine-to-machine encrypted communication protocol using pure Assembly for handshake & handshake replay prevention",
        "🧠 Simulated and rebuilt an L2 chain's structure to test gas compression techniques for fun — and it worked"
      ]
    }
  ];

  return (
    <section id="skills" className="py-12 px-6 relative z-10" ref={ref}>
      <div className="max-w-6xl mx-auto">
        <motion.div
          className="text-center mb-8"
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="font-space text-4xl font-bold mb-4 text-gradient">Technical Skills</h2>
          <p className="text-xl text-med-gray max-w-2xl mx-auto">
            Technologies and tools used to build production-grade systems that survive scale
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.8, delay: categoryIndex * 0.2 }}
            >
              <h3 className="font-space text-xl font-semibold mb-6 text-electric">
                {category.title}
              </h3>
              <div className="space-y-3">
                {category.skills.map((skill, skillIndex) => (
                  <div
                    key={skill.name}
                    className="glass rounded-lg p-3"
                  >
                    <div className="flex items-center space-x-3">
                      <skill.icon className={`h-5 w-5 ${skill.color}`} />
                      <span className="font-medium text-light-gray text-sm">
                        {skill.name}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Key Highlights Section */}
        <motion.div
          className="mt-12"
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 1 }}
        >
          <h2 className="font-space text-3xl font-bold mb-8 text-center text-gradient">Key Achievements</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="glass rounded-xl p-6">
              <h3 className="font-space text-lg font-semibold mb-4 text-electric">Backend Systems</h3>
              <ul className="space-y-3 text-light-gray">
                <li>• Built 20+ production applications</li>
                <li>• Custom memory allocators</li>
                <li>• High-frequency trading systems</li>
                <li>• Zero-dependency databases</li>
              </ul>
            </div>
            
            <div className="glass rounded-xl p-6">
              <h3 className="font-space text-lg font-semibold mb-4 text-electric">Blockchain & Crypto</h3>
              <ul className="space-y-3 text-light-gray">
                <li>• On-chain transaction handlers</li>
                <li>• Cold storage systems</li>
                <li>• Cross-chain scanners</li>
                <li>• Token vault systems</li>
              </ul>
            </div>
            
            <div className="glass rounded-xl p-6">
              <h3 className="font-space text-lg font-semibold mb-4 text-electric">Infrastructure</h3>
              <ul className="space-y-3 text-light-gray">
                <li>• Docker orchestration (50+ services)</li>
                <li>• Custom CLI toolkits</li>
                <li>• Bare-metal remote control</li>
                <li>• Linux system hardening</li>
              </ul>
            </div>
            
            <div className="glass rounded-xl p-6">
              <h3 className="font-space text-lg font-semibold mb-4 text-electric">Performance</h3>
              <ul className="space-y-3 text-light-gray">
                <li>• Assembly-level optimization</li>
                <li>• Custom caching layers</li>
                <li>• Async task schedulers</li>
                <li>• Memory management</li>
              </ul>
            </div>
            
            <div className="glass rounded-xl p-6">
              <h3 className="font-space text-lg font-semibold mb-4 text-electric">Security</h3>
              <ul className="space-y-3 text-light-gray">
                <li>• M4-generated assembly guards</li>
                <li>• Custom auth systems</li>
                <li>• Encrypted protocols</li>
                <li>• Security layer integration</li>
              </ul>
            </div>
            
            <div className="glass rounded-xl p-6">
              <h3 className="font-space text-lg font-semibold mb-4 text-electric">Startups</h3>
              <ul className="space-y-3 text-light-gray">
                <li>• Founded 2 companies</li>
                <li>• Contributed to 3 funded startups</li>
                <li>• Full-stack automation platforms</li>
                <li>• Architecture to deployment</li>
              </ul>
            </div>
          </div>
        </motion.div>

        {/* Philosophy Section */}
        <motion.div
          className="mt-8 text-center glass rounded-xl p-6"
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 1.8 }}
        >
          <h3 className="font-space text-2xl font-semibold mb-4 text-electric">Philosophy</h3>
          <blockquote className="text-xl font-mono text-med-gray italic leading-relaxed">
            "If it can be automated, it will be. If it can be optimized, it must be. If it can be built, I'm already doing it."
          </blockquote>
          <p className="text-electric font-semibold mt-4">– Clinton Murugi</p>
        </motion.div>
      </div>
    </section>
  );
}
