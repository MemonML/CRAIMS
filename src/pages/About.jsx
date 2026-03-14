import React from 'react';
import { motion } from 'framer-motion';
import { Shield, BookOpen, Cpu, HeartPulse, Award, Building } from 'lucide-react';

const LOGO_URL = "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/user_6987424d1fc4bdc871bbf74d/b7e43d551_CRAIMS_Logo.jpg";

const milestones = [
  { year: '2024', event: 'CRAIMS approved by Board of Governors', icon: Award },
  { year: '2024', event: 'Director Prof. Dr. Mudasar Latif Memon appointed', icon: Shield },
  { year: '2025', event: 'AI curriculum integration initiated', icon: Cpu },
  { year: '2025', event: 'First research workshop conducted', icon: BookOpen },
];

const fadeUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.7 },
};

export default function About() {
  return (
    <div className="bg-[#0a1628] min-h-screen pt-28 pb-20">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        <motion.div {...fadeUp} className="text-center mb-20">
          <span className="inline-block px-4 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-300 text-xs font-medium tracking-wider uppercase mb-6">About Us</span>
          <h1 className="text-4xl sm:text-5xl font-bold text-white mb-6">
            About <span className="bg-gradient-to-r from-cyan-400 to-teal-400 bg-clip-text text-transparent">CRAIMS</span>
          </h1>
          <p className="text-slate-400 max-w-2xl mx-auto text-lg leading-relaxed">
            The Centre of Excellence for Research in Artificial Intelligence & Medical Sciences
          </p>
        </motion.div>

        <motion.div {...fadeUp} className="relative p-8 sm:p-12 rounded-3xl bg-white/[0.03] border border-white/[0.06] mb-16">
          <div className="relative z-10 flex flex-col md:flex-row gap-8 items-start">
            <div className="shrink-0">
              <img src={LOGO_URL} alt="CRAIMS Logo" className="w-24 h-24 rounded-2xl object-cover shadow-xl shadow-cyan-500/10 border border-white/10" />
            </div>
            <div>
              <h2 className="text-2xl font-bold text-white mb-4">Our Story</h2>
              <div className="space-y-4 text-slate-300 text-sm leading-relaxed">
                <p>
                  CRAIMS — the Centre of Excellence for Research in Artificial Intelligence and Medical Sciences — was established under the approval of the Board of Governors at The University of Modern Sciences, Tando Muhammad Khan, Sindh, Pakistan.
                </p>
                <p>
                  The centre represents a pioneering initiative to bridge the gap between cutting-edge AI technologies and medical sciences, creating a unique interdisciplinary research environment that addresses both educational and healthcare challenges.
                </p>
                <p>
                  Under the leadership of Prof. Dr. Mudasar Latif Memon as Director, and with the strategic guidance of the Advisory Committee comprising the Chancellor, Vice Chancellor, and Rector, CRAIMS is positioned to become a leading hub for AI-driven innovation in Pakistan's academic landscape.
                </p>
              </div>
            </div>
          </div>
        </motion.div>

        <motion.div {...fadeUp} className="mb-16">
          <h2 className="text-2xl font-bold text-white mb-8 text-center">Core Pillars</h2>
          <div className="grid sm:grid-cols-2 gap-6">
            {[
              { icon: HeartPulse, title: 'Medical Sciences Integration', desc: 'Bridging AI with healthcare to develop innovative diagnostic and treatment methodologies.', color: 'from-rose-500 to-pink-600' },
              { icon: Cpu, title: 'AI Innovation', desc: 'Leveraging cutting-edge artificial intelligence to solve complex problems in education and research.', color: 'from-cyan-500 to-blue-600' },
              { icon: BookOpen, title: 'Education Excellence', desc: 'Developing AI-ready curricula and graduates who can lead in the age of intelligent systems.', color: 'from-teal-500 to-emerald-600' },
              { icon: Building, title: 'Institutional Strength', desc: 'Backed by the Board of Governors and leadership of The University of Modern Sciences.', color: 'from-violet-500 to-purple-600' },
            ].map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="p-6 rounded-2xl bg-white/[0.03] border border-white/[0.06] hover:bg-white/[0.06] transition-all duration-300"
              >
                <div className={`inline-flex p-2.5 rounded-xl bg-gradient-to-br ${item.color} mb-4`}>
                  <item.icon size={20} className="text-white" />
                </div>
                <h3 className="text-white font-semibold mb-2">{item.title}</h3>
                <p className="text-slate-400 text-sm">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div {...fadeUp}>
          <h2 className="text-2xl font-bold text-white mb-8 text-center">Milestones</h2>
          <div className="relative">
            <div className="absolute left-6 top-0 bottom-0 w-px bg-gradient-to-b from-cyan-500/50 via-teal-500/30 to-transparent" />
            <div className="space-y-8">
              {milestones.map((m, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className="flex gap-6 items-start"
                >
                  <div className="relative z-10 shrink-0 w-12 h-12 rounded-full bg-gradient-to-br from-cyan-500/20 to-teal-500/20 border border-cyan-500/30 flex items-center justify-center">
                    <m.icon size={18} className="text-cyan-400" />
                  </div>
                  <div className="pt-2">
                    <span className="text-cyan-400 text-xs font-mono">{m.year}</span>
                    <p className="text-white font-medium mt-1">{m.event}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
