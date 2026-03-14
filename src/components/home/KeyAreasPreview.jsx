import React from 'react';
import { motion } from 'framer-motion';
import { BookOpen, GraduationCap, FlaskConical, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const areas = [
  {
    icon: BookOpen,
    title: 'Training & Capacity Building',
    description: 'Seminars, workshops, and AI tools for faculty and students to enhance awareness and productivity.',
    color: 'from-cyan-500 to-blue-600',
  },
  {
    icon: GraduationCap,
    title: 'AI for Education',
    description: 'Supporting AI curriculum adoption and developing AI-ready graduates for the future.',
    color: 'from-teal-500 to-emerald-600',
  },
  {
    icon: FlaskConical,
    title: 'AI to Support Research',
    description: 'AI-based methodologies, data analysis, and interdisciplinary research in Medical x AI.',
    color: 'from-violet-500 to-purple-600',
  },
];

export default function KeyAreasPreview() {
  return (
    <section className="relative py-24 overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-cyan-300 text-xs font-medium tracking-wider uppercase mb-4">
            Our Focus
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-white">Key Areas of CRAIMS</h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {areas.map((area, i) => (
            <motion.div
              key={area.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.15 }}
              className="group relative"
            >
              <div className="relative p-8 rounded-3xl bg-white/[0.03] border border-white/[0.06] hover:bg-white/[0.06] transition-all duration-500 h-full">
                <div className={`absolute -inset-px rounded-3xl bg-gradient-to-b ${area.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500 blur-xl`} />
                <div className={`inline-flex p-3 rounded-2xl bg-gradient-to-br ${area.color} mb-6 shadow-lg`}>
                  <area.icon size={24} className="text-white" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-3">{area.title}</h3>
                <p className="text-slate-400 text-sm leading-relaxed">{area.description}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="text-center mt-10"
        >
          <Link
            to="/KeyAreas"
            className="inline-flex items-center gap-2 text-cyan-400 hover:text-cyan-300 text-sm font-medium transition-colors group"
          >
            View all details
            <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
