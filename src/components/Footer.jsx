import { motion } from "framer-motion";
import { Linkedin, Instagram, ArrowUpRight, Mail, Calendar } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  // Replace this with your actual Calendly/Cal.com link
  // These services automatically handle the Google Meet creation & emails
  const scheduleCall = () => {
    window.open("https://calendly.com/elv8works", "_blank");
  };

  return (
    <footer id="contact" className="bg-zinc-950 pt-24 pb-12 px-6 border-t border-zinc-900">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 mb-20">
          
          {/* Big Call to Action */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-5xl md:text-7xl font-bold text-white tracking-tighter leading-tight">
              READY TO <br /> 
              <span className="text-blue-500 italic">ELEVATE?</span>
            </h2>
            
            <div className="flex flex-col sm:flex-row gap-6 mt-10">
              <a 
                href="mailto:elv8.works@gmail.com" 
                className="group inline-flex items-center gap-3 text-2xl font-bold text-white border-b-2 border-blue-600 pb-2 hover:text-blue-500 transition-all"
              >
                Get in touch <ArrowUpRight className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </a>

              <button 
                onClick={scheduleCall}
                className="flex items-center gap-3 bg-white text-black px-6 py-3 rounded-full font-black text-sm hover:bg-blue-500 hover:text-white transition-all transform active:scale-95"
              >
                SCHEDULE A DEMO <Calendar size={18} />
              </button>
            </div>
          </motion.div>

          {/* Socials & Info */}
          <div className="flex flex-col md:items-end justify-end gap-8">
            <div className="flex gap-6">
              <a 
                href="http://linkedin.com/company/elv8works" 
                target="_blank" 
                rel="noreferrer"
                className="p-4 rounded-full bg-zinc-900 border border-zinc-800 text-zinc-400 hover:text-white hover:border-blue-500 transition-all"
              >
                <Linkedin size={24} />
              </a>
              <a 
                href="https://www.instagram.com/elv8.works" 
                target="_blank" 
                rel="noreferrer"
                className="p-4 rounded-full bg-zinc-900 border border-zinc-800 text-zinc-400 hover:text-white hover:border-pink-500 transition-all"
              >
                <Instagram size={24} />
              </a>
              <a 
                href="mailto:elv8.works@gmail.com" 
                className="p-4 rounded-full bg-zinc-900 border border-zinc-800 text-zinc-400 hover:text-white hover:border-emerald-500 transition-all"
              >
                <Mail size={24} />
              </a>
            </div>
            <div className="text-md font-mono text-zinc-500 md:text-right">
              <p>Based in Sagara, Karnataka</p>
              <p className="mt-1">Available for Global Projects</p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-zinc-900 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-zinc-600 font-medium">
          <div className="flex items-center gap-2">
            <span className="font-bold text-white tracking-tighter text-lg">elv8.works </span>
            <span>© {currentYear} All Rights Reserved.</span>
          </div>
          <div className="flex items-center gap-1">
            <span>Built with ❤️ by</span>
            <span className="text-white font-bold">elv8 works</span>
          </div>
        </div>
      </div>
    </footer>
  );
}