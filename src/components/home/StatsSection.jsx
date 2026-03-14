import React from 'react';
import { motion } from 'framer-motion';
import { Brain, GraduationCap, Users, Lightbulb } from 'lucide-react';

const stats = [
  { icon: Brain, label: 'AI Research Areas', value: '3+', color: 'from-cyan-500 to-blue-500' },
  { icon: GraduationCap, label: 'Academic Programs', value: '5+', color: 'from-teal-500 to-emerald-500' },
  { icon: Users, label: 'Faculty & Researchers', value: '20+', color: 'from-violet-500 to-purple-500' },
  { icon: Lightbulb, label: 'Innovation Projects', value: '10+', color: 'from-amber-500 to-orange-500' },
];

export default function StatsSection() {
  return (
    <section className="relative py-20 overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="relative group"
            >
              <div className="relative p-6 rounded-2xl bg-white/[0.03] border border-white/[0.06] backdrop-blur-sm hover:bg-white/[0.06] transition-all duration-500">
                <div className={`inline-flex p-3 rounded-xl bg-gradient-to-br ${stat.color} mb-4 shadow-lg`}>
                  <stat.icon size={22} className="text-white" />
                </div>
                <p className="text-3xl sm:text-4xl font-bold text-white mb-1">{stat.value}</p>
                <p className="text-slate-400 text-sm">{stat.label}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
