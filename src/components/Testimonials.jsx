import { motion } from "framer-motion";
import { Quote, CheckCircle2 } from "lucide-react";

const testimonials = [
  {
    name: "Rajkumar Marthappa Shet",
    role: "MD, Keshav Jewellers Sagara",
    company: "Keshav Jewellers",
    text: "The digital transformation of our stock movements has been a game-changer. We now have real-time visibility and unprecedented accuracy, eliminating manual errors. This has cut handling time by over 70% and drastically reduced discrepancies.",
    highlight: "Revolutionizing Stock Movements",
    color: "from-blue-500/10 to-transparent"
  },
  {
    name: "Ragahvendra H R",
    role: "Manager, Vision Tiles Sagara",
    company: "Vision Tiles",
    text: "We express our sincere appreciation for the 'Vision Tiles Warehouse Management Analysis'. Your professional approach and clear analysis have been invaluable in helping us chart a path toward optimizing our operations.",
    highlight: "Excellent Guidance",
    color: "from-purple-500/10 to-transparent"
  },
  {
  name: "Shruthi",
  role: "Owner, Shree Sadguru Creations",
  company: "Shree Sadguru Creations",
  text: "Implementing the custom CRM transformed how we run our boutique. Manual order tracking and follow-ups were fully automated, reducing daily operational effort by nearly 60%. WhatsApp API integration alone increased repeat customer engagement by over 45%, while order confirmation and campaign messages reached customers instantly. Overall, our monthly sales conversions improved by around 30% within the first three months.",
  highlight: "Complete Boutique Automation with Measurable Growth",
  color: "from-emerald-500/10 to-transparent"
}

];

export default function Testimonials() {
  return (
    <section className="py-24 px-6 bg-zinc-950 relative overflow-hidden" id="testimonials">
      {/* Background Decorative Element */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-blue-600/5 rounded-full blur-[100px] -z-10" />
      
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-bold text-white mb-4"
          >
            Trusted by <span className="text-blue-500">Industry Leaders</span>
          </motion.h2>
          <p className="text-zinc-500 font-mono tracking-widest uppercase text-sm">
            Real Impact. Real Results.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {testimonials.map((t, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className={`relative p-8 md:p-12 rounded-[2.5rem] bg-gradient-to-br ${t.color} border border-zinc-800 bg-zinc-900/30 backdrop-blur-md flex flex-col justify-between group hover:border-blue-500/40 transition-all duration-500`}
            >
              <Quote className="absolute top-8 right-8 text-zinc-800 group-hover:text-blue-500/20 transition-colors" size={60} />
              
              <div>
                <div className="flex items-center gap-2 mb-6">
                  <div className="flex items-center gap-1.5 px-3 py-1 bg-blue-500/10 border border-blue-500/20 rounded-full">
                    <CheckCircle2 size={12} className="text-blue-400" />
                    <span className="text-[10px] font-bold text-blue-400 uppercase tracking-wider">Verified Result</span>
                  </div>
                </div>

                <h4 className="text-xl font-bold text-yellow-400 mb-4 italic">
                  "{t.highlight}"
                </h4>
                
                <p className="text-zinc-400 leading-relaxed mb-8 text-md text-justify">
                  {t.text}
                </p>
              </div>

              <div className="flex items-center gap-4 pt-6 border-t border-zinc-800/50">
                <div className="w-12 h-12 rounded-full bg-gradient-to-tr from-zinc-700 to-zinc-800 flex items-center justify-center font-bold text-white border border-zinc-700">
                  {t.name.charAt(0)}
                </div>
                <div>
                  <h5 className="font-bold text-white leading-none">{t.name}</h5>
                  <p className="text-zinc-500 text-sm mt-1">{t.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}