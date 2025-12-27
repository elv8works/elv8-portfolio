import { motion } from "framer-motion";
import { 
  ExternalLink, Database, Presentation, ShoppingBag, 
  MessageSquare, Truck, Mountain, Youtube 
} from "lucide-react";

const projects = [
  {
    title: "Jewellers CRM",
    category: "Software Development",
    icon: <Database className="text-blue-500" />,
    description: "Custom-built enterprise CRM for inventory and luxury client management.",
    tech: ["React", "Firebase", "Tailwind", "ML"]
  },
  {
    title: "Supply Chain Management",
    category: "Web & Sheets Automation",
    icon: <Truck className="text-orange-500" />,
    description: "Live system tracking gold inventory, payments, and returns with automated reporting via Apps Script.",
    tech: ["Apps Script", "Automation", "Sheets"]
  },
  {
    title: "Adventure Club Streamlining",
    category: "Consulting & Strategy",
    icon: <Mountain className="text-emerald-500" />,
    description: "Operational overhaul including task delegation systems and automated safety updates.",
    tech: ["Strategy", "Marketing", "Process"]
  },
  {
    title: "Spiritual Content Hub",
    category: "Content Automation",
    icon: <Youtube className="text-red-500" />,
    description: "Automated distribution and scheduling system for spiritual content on YouTube.",
    tech: ["YouTube API", "Workflow", "Automation"]
  },
  {
    title: "Investor Pitch",
    category: "Strategic Design",
    icon: <Presentation className="text-amber-500" />,
    description: "High-impact visual storytelling and financial modeling for business scaling.",
    tech: ["Pitch Deck", "BI", "Strategy"]
  },
  {
    title: "Shree Sadguru Creations CRM",
    category: "E-commerce Tech",
    icon: <ShoppingBag className="text-purple-500" />,
    description: "Seamless order tracking and customer relationship management for fashion brands.",
    tech: ["React", "Firebase","Whatsapp API"]
  },
  {
    title: "WhatsApp Marketing Tool",
    category: "Automation",
    icon: <MessageSquare className="text-green-500" />,
    description: "Automated engagement engine to increase customer retention via WhatsApp.",
    tech: ["API Integration", "Node.js"]
  }
];

export default function Projects() {
  return (
    <section id="work" className="py-24 px-6 bg-zinc-950">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 gap-4">
          <div>
            <h2 className="text-4xl font-bold text-white tracking-tight">Case Studies</h2>
            <p className="text-zinc-500 mt-2 max-w-md">We don't just build apps; we build engines for business growth.</p>
          </div>
          <div className="text-zinc-400 text-sm font-mono bg-zinc-900 px-4 py-2 rounded-full border border-zinc-800">
            {projects.length} SUCCESSFUL DEPLOYMENTS
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ 
                duration: 0.5, 
                delay: index * 0.1,
                ease: "easeOut" 
              }}
              whileHover={{ y: -10 }}
              className="group flex flex-col h-full p-8 bg-zinc-900/50 border border-zinc-800 rounded-[2rem] hover:bg-zinc-900 hover:border-blue-500/50 transition-all relative overflow-hidden"
            >
              {/* Subtle background glow on hover */}
              <div className="absolute -right-10 -top-10 w-32 h-32 bg-blue-500/10 blur-[50px] group-hover:bg-blue-500/20 transition-all rounded-full" />
              
              <div className="flex justify-between items-start mb-8">
                <div className="p-4 bg-zinc-950 rounded-2xl border border-zinc-800 group-hover:border-blue-500/30 transition-colors">
                  {project.icon}
                </div>
                <div className="flex gap-1">
                  <div className="w-1.5 h-1.5 rounded-full bg-zinc-700 group-hover:bg-blue-500 transition-colors" />
                  <div className="w-1.5 h-1.5 rounded-full bg-zinc-700 group-hover:bg-blue-500 transition-colors delay-75" />
                </div>
              </div>

              <div className="flex-grow">
                <p className="text-[10px] font-black uppercase tracking-[0.2em] text-blue-500 mb-2">
                  {project.category}
                </p>
                <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-blue-50 transition-colors">
                  {project.title}
                </h3>
                <p className="text-zinc-400 text-sm leading-relaxed">
                  {project.description}
                </p>
              </div>

              <div className="mt-8 flex flex-wrap gap-2">
                {project.tech.map((t, i) => (
                  <span key={i} className="text-[10px] bg-zinc-950 text-zinc-500 px-3 py-1 rounded-full border border-zinc-800 uppercase font-bold">
                    {t}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}