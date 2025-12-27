import { motion } from "framer-motion";
import { Sparkles, BarChart, Users, ArrowUpRight } from "lucide-react";

const reasons = [
  {
    title: "Creative & Unique Solutions",
    desc: "We don’t do cookie-cutter. Every project is built around your unique needs and goals to ensure your brand stands out in a crowded market.",
    icon: <Sparkles className="text-amber-400" />,
    stats: "100% Custom Built"
  },
  {
    title: "Measurable Growth",
    desc: "We focus on the numbers that matter. Our projects deliver real improvements in performance, business value, and return on investment.",
    icon: <BarChart className="text-blue-400" />,
    stats: "ROI Focused"
  },
  {
    title: "Partnership & Support",
    desc: "We work with you, not just for you. Our team is always available, maintaining full transparency in how we build and deliver your vision.",
    icon: <Users className="text-emerald-400" />,
    stats: "24/7 Alignment"
  }
];

export default function WhyChooseUs() {
  return (
    <section className="py-24 px-6 bg-zinc-950">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row gap-16 items-center">
          
          {/* Left Side: Branding */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:w-1/3"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white leading-tight">
              Why Businesses <br /> 
              <span className="text-blue-500">Choose elv8</span>
            </h2>
            <p className="mt-6 text-zinc-400 text-lg">
              We deliver meaningful results through tailored solutions, transparency, and a partnership mindset.
            </p>
            
            <div className="mt-10 p-6 rounded-2xl bg-blue-600/10 border border-blue-500/20">
              <p className="text-blue-400 font-semibold flex items-center gap-2">
                Elevating your digital presence <ArrowUpRight size={20}/>
              </p>
            </div>
          </motion.div>

          {/* Right Side: Reason Cards */}
          <div className="lg:w-2/3 grid gap-6">
            {reasons.map((reason, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group p-8 rounded-3xl bg-zinc-900/50 border border-zinc-800 hover:border-zinc-700 hover:bg-zinc-900 transition-all flex flex-col md:flex-row gap-6 items-start"
              >
                <div className="p-4 rounded-2xl bg-zinc-800 group-hover:bg-blue-600/20 group-hover:text-blue-400 transition-all">
                  {reason.icon}
                </div>
                
                <div>
                  <div className="flex justify-between items-center mb-2">
                    <h3 className="text-xl font-bold text-white uppercase tracking-tight">
                      {reason.title}
                    </h3>
                    <span className="text-[10px] font-bold text-zinc-500 bg-zinc-800 px-3 py-1 rounded-full uppercase tracking-widest">
                      {reason.stats}
                    </span>
                  </div>
                  <p className="text-zinc-400 leading-relaxed max-w-xl">
                    {reason.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}