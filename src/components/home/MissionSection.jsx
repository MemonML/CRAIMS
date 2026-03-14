import React from 'react';
import { motion } from 'framer-motion';
import { Target, Eye } from 'lucide-react';

export default function MissionSection({ campusImage }) {
  return (
    <section className="relative py-24 overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-cyan-500/5 rounded-full blur-3xl" />
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Where <span className="bg-gradient-to-r from-cyan-400 to-teal-400 bg-clip-text text-transparent">AI</span> Meets{' '}
            <span className="bg-gradient-to-r from-teal-400 to-emerald-400 bg-clip-text text-transparent">Medicine</span>
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto">
            Bridging the gap between cutting-edge artificial intelligence and medical sciences to shape the future of healthcare and education.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="relative p-8 rounded-3xl bg-gradient-to-br from-cyan-500/10 to-blue-500/5 border border-cyan-500/10 backdrop-blur-sm"
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2.5 rounded-xl bg-cyan-500/20">
                <Target size={20} className="text-cyan-400" />
              </div>
              <h3 className="text-xl font-semibold text-white">Our Mission</h3>
            </div>
            <p className="text-slate-300 leading-relaxed text-sm">
              To establish a world-class centre that integrates AI technologies with medical sciences, fostering innovation in research, education, and training. We aim to produce AI-ready graduates equipped to address healthcare challenges through technology-driven solutions.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="relative p-8 rounded-3xl bg-gradient-to-br from-teal-500/10 to-emerald-500/5 border border-teal-500/10 backdrop-blur-sm"
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2.5 rounded-xl bg-teal-500/20">
                <Eye size={20} className="text-teal-400" />
              </div>
              <h3 className="text-xl font-semibold text-white">Our Vision</h3>
            </div>
            <p className="text-slate-300 leading-relaxed text-sm">
              To become a leading centre of excellence in Pakistan, pioneering interdisciplinary research at the intersection of AI and medical sciences, while building capacity among faculty and students to embrace AI-driven methodologies for enhanced productivity and innovation.
            </p>
          </motion.div>
        </div>

        {campusImage && (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="mt-12 rounded-3xl overflow-hidden border border-white/5"
          >
            <img src={campusImage} alt="University Campus" className="w-full h-64 sm:h-80 object-cover" />
          </motion.div>
        )}
      </div>
    </section>
  );
}
