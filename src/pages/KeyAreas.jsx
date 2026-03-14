import React from 'react';
import { motion } from 'framer-motion';
import { BookOpen, GraduationCap, FlaskConical, Users, Wrench, Brain, Database, Microscope, Lightbulb } from 'lucide-react';

const keyAreas = [
  {
    icon: BookOpen,
    title: 'Training & Capacity Building',
    color: 'from-cyan-500 to-blue-600',
    borderColor: 'border-cyan-500/20',
    bgGlow: 'bg-cyan-500/5',
    items: [
      { icon: Users, title: 'Seminars & Workshops', desc: 'Conducting seminars and workshops for faculty and students on AI awareness, best practices, and emerging trends in artificial intelligence.' },
      { icon: Wrench, title: 'AI Tools for Enhanced Productivity', desc: 'Training faculty and students to leverage AI-powered tools for research productivity, automation, and data-driven decision making.' },
    ],
  },
  {
    icon: GraduationCap,
    title: 'AI for Education',
    color: 'from-teal-500 to-emerald-600',
    borderColor: 'border-teal-500/20',
    bgGlow: 'bg-teal-500/5',
    items: [
      { icon: Lightbulb, title: 'Support AI Curriculum Adoption', desc: 'Assisting departments in integrating AI components into existing curricula across medical and science disciplines.' },
      { icon: Brain, title: 'Developing AI-Ready Graduates', desc: 'Preparing students with hands-on AI skills, critical thinking, and technical competencies required for the modern workforce.' },
    ],
  },
  {
    icon: FlaskConical,
    title: 'AI to Support Research',
    color: 'from-violet-500 to-purple-600',
    borderColor: 'border-violet-500/20',
    bgGlow: 'bg-violet-500/5',
    items: [
      { icon: GraduationCap, title: 'AI-Based Research Methodologies', desc: 'Integrating AI-based methodologies in undergraduate and postgraduate research projects for better outcomes.' },
      { icon: Database, title: 'AI-Assisted Data Analysis', desc: 'Leveraging machine learning and statistical AI tools for advanced data analysis across research domains.' },
      { icon: Microscope, title: 'Interdisciplinary Research: Medical x AI', desc: 'Pioneering collaborative research at the intersection of medical sciences and artificial intelligence for healthcare innovation.' },
    ],
  },
];

const fadeUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.7 },
};

export default function KeyAreas() {
  return (
    <div className="bg-[#0a1628] min-h-screen pt-28 pb-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <motion.div {...fadeUp} className="text-center mb-20">
          <span className="inline-block px-4 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-300 text-xs font-medium tracking-wider uppercase mb-6">Our Focus</span>
          <h1 className="text-4xl sm:text-5xl font-bold text-white mb-6">
            Key Areas of{' '}
            <span className="bg-gradient-to-r from-cyan-400 to-teal-400 bg-clip-text text-transparent">CRAIMS</span>
          </h1>
          <p className="text-slate-400 max-w-2xl mx-auto">
            Three strategic pillars driving our mission to integrate AI with medical sciences for education, research, and capacity building.
          </p>
        </motion.div>

        <div className="space-y-12">
          {keyAreas.map((area, areaIdx) => (
            <motion.div
              key={area.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: areaIdx * 0.1 }}
            >
              <div className="flex items-center gap-4 mb-6">
                <div className={`p-3 rounded-2xl bg-gradient-to-br ${area.color} shadow-lg`}>
                  <area.icon size={24} className="text-white" />
                </div>
                <h2 className="text-2xl font-bold text-white">{area.title}</h2>
              </div>

              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 pl-0 sm:pl-16">
                {area.items.map((item, i) => (
                  <motion.div
                    key={item.title}
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: i * 0.1 }}
                    className={`relative p-6 rounded-2xl bg-white/[0.03] border ${area.borderColor} hover:bg-white/[0.06] transition-all duration-500 group`}
                  >
                    <div className={`absolute inset-0 rounded-2xl ${area.bgGlow} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
                    <div className="relative z-10">
                      <div className="p-2 rounded-lg bg-white/5 inline-flex mb-4">
                        <item.icon size={18} className="text-slate-300" />
                      </div>
                      <h3 className="text-white font-semibold mb-2 text-sm">{item.title}</h3>
                      <p className="text-slate-400 text-xs leading-relaxed">{item.desc}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
