import { motion } from "framer-motion";
import { Zap, TrendingUp, BarChart3, Headphones } from "lucide-react";

const services = [
  {
    title: "Digital Transformation",
    desc: "Web & Mobile apps, custom software, and cloud solutions to modernize your workflow.",
    detail: "Trusted By Clients",
    icon: <Zap className="text-blue-400" />,
    color: "group-hover:bg-blue-500/20"
  },
  {
    title: "Digital Marketing",
    desc: "SEO, SMM, and paid ads driven by data to reach your target audience effectively.",
    detail: "Results Driven",
    icon: <TrendingUp className="text-emerald-400" />,
    color: "group-hover:bg-emerald-500/20"
  },
  {
    title: "Consulting & Strategy",
    desc: "Excel automation, Power BI dashboards, and BI strategies for sharper decision making.",
    detail: "Expert Advice",
    icon: <BarChart3 className="text-purple-400" />,
    color: "group-hover:bg-purple-500/20"
  },
  {
    title: "Customer Support",
    desc: "24/7 technical troubleshooting and CRM integrations to keep your users happy.",
    detail: "24/7 Support",
    icon: <Headphones className="text-pink-400" />,
    color: "group-hover:bg-pink-500/20"
  }
];

export default function Services() {
  return (
    <section id="services" className="py-24 px-6 relative overflow-hidden bg-zinc-950">
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="mb-20">
          <motion.h2 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="text-4xl md:text-5xl font-bold text-white"
          >
            Our <span className="text-blue-500">Services</span>
          </motion.h2>
          <div className="h-1 w-20 bg-blue-600 mt-4 rounded-full" />
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -8 }}
              className="group relative p-8 rounded-3xl bg-zinc-900/40 border border-zinc-800 hover:border-zinc-600 transition-all duration-300 backdrop-blur-sm"
            >
              {/* Background Glow Effect on Hover */}
              <div className={`absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity blur-xl -z-10 ${service.color}`} />
              
              <div className="mb-6 inline-block p-4 rounded-2xl bg-zinc-800 group-hover:scale-110 transition-transform duration-300">
                {service.icon}
              </div>

              <h3 className="text-xl font-bold text-white mb-4 group-hover:text-blue-400 transition-colors">
                {service.title}
              </h3>
              
              <p className="text-zinc-400 text-sm leading-relaxed mb-6">
                {service.desc}
              </p>

              <div className="pt-4 border-t border-zinc-800 flex items-center justify-between">
                <span className="text-[10px] uppercase tracking-[2px] font-bold text-zinc-500 group-hover:text-white transition-colors">
                  {service.detail}
                </span>
                <div className="w-2 h-2 rounded-full bg-blue-500 animate-pulse" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}