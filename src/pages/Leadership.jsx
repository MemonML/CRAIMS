import React from 'react';
import { motion } from 'framer-motion';
import { Crown, Shield } from 'lucide-react';

const DIRECTOR_IMAGE = "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/69b5ccab21d60a60cd1822db/07a3845b4_generated_ebad10d9.png";

const advisoryMembers = [
  { role: 'Chancellor', title: 'Head of Advisory Committee', icon: Crown },
  { role: 'Vice Chancellor', title: 'Advisory Committee Member', icon: Shield },
  { role: 'Rector', title: 'Advisory Committee Member', icon: Shield },
];

const fadeUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.7 },
};

export default function Leadership() {
  return (
    <div className="bg-[#0a1628] min-h-screen pt-28 pb-20">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        <motion.div {...fadeUp} className="text-center mb-20">
          <span className="inline-block px-4 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-300 text-xs font-medium tracking-wider uppercase mb-6">Leadership</span>
          <h1 className="text-4xl sm:text-5xl font-bold text-white mb-6">
            Our{' '}
            <span className="bg-gradient-to-r from-cyan-400 to-teal-400 bg-clip-text text-transparent">Leadership</span>
          </h1>
          <p className="text-slate-400 max-w-2xl mx-auto">
            CRAIMS is guided by distinguished academic leaders committed to advancing AI and medical sciences research.
          </p>
        </motion.div>

        {/* Director */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative mb-20"
        >
          <div className="relative p-8 sm:p-12 rounded-3xl bg-gradient-to-br from-cyan-500/10 via-white/[0.03] to-teal-500/10 border border-cyan-500/15 overflow-hidden">
            <div className="relative z-10 flex flex-col md:flex-row items-center gap-8">
              <div className="shrink-0">
                <div className="relative">
                  <div className="absolute -inset-2 bg-gradient-to-br from-cyan-500/30 to-teal-500/30 rounded-3xl blur-lg" />
                  <img
                    src={DIRECTOR_IMAGE}
                    alt="Prof. Dr. Mudasar Latif Memon"
                    className="relative w-40 h-40 sm:w-48 sm:h-48 rounded-2xl object-cover shadow-2xl border-2 border-white/10"
                  />
                </div>
              </div>
              <div className="text-center md:text-left">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/15 border border-cyan-500/20 mb-4">
                  <Shield size={14} className="text-cyan-400" />
                  <span className="text-cyan-300 text-xs font-medium">Director, CRAIMS</span>
                </div>
                <h2 className="text-2xl sm:text-3xl font-bold text-white mb-2">
                  Prof. Dr. Mudasar Latif Memon
                </h2>
                <p className="text-slate-400 text-sm leading-relaxed max-w-lg">
                  As the founding Director of CRAIMS, Prof. Dr. Mudasar Latif Memon leads the centre's mission to integrate artificial intelligence with medical sciences. His vision drives the development of innovative research programs, AI curriculum adoption, and capacity building initiatives at The University of Modern Sciences.
                </p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Advisory Committee */}
        <motion.div {...fadeUp}>
          <div className="text-center mb-10">
            <h2 className="text-2xl font-bold text-white mb-3">Advisory Committee</h2>
            <p className="text-slate-400 text-sm">The University of Modern Sciences, Tando Muhammad Khan, Sindh, Pakistan</p>
          </div>
          <div className="grid sm:grid-cols-3 gap-6">
            {advisoryMembers.map((member, i) => (
              <motion.div
                key={member.role}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.15 }}
                className="text-center p-8 rounded-2xl bg-white/[0.03] border border-white/[0.06] hover:bg-white/[0.06] transition-all duration-300"
              >
                <div className="w-20 h-20 mx-auto rounded-full bg-gradient-to-br from-slate-700 to-slate-800 border border-white/10 flex items-center justify-center mb-5">
                  <member.icon size={28} className="text-slate-400" />
                </div>
                <h3 className="text-white font-semibold text-lg mb-1">{member.role}</h3>
                <p className="text-slate-400 text-xs">{member.title}</p>
                <p className="text-cyan-400/60 text-xs mt-2">The University of Modern Sciences</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
}
