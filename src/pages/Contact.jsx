import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, MapPin, Send, Globe } from 'lucide-react';
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";

const contactInfo = [
  { icon: MapPin, label: 'Address', value: 'The University of Modern Sciences, Tando Muhammad Khan, Sindh, Pakistan', color: 'from-cyan-500 to-blue-600' },
  { icon: Mail, label: 'Email', value: 'craims@ums.edu.pk', color: 'from-teal-500 to-emerald-600' },
  { icon: Globe, label: 'University', value: 'The University of Modern Sciences', color: 'from-violet-500 to-purple-600' },
];

const fadeUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.7 },
};

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' });
  const [sending, setSending] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSending(true);
    await new Promise(r => setTimeout(r, 1500));
    toast.success('Message sent successfully! We will get back to you soon.');
    setForm({ name: '', email: '', subject: '', message: '' });
    setSending(false);
  };

  return (
    <div className="bg-[#0a1628] min-h-screen pt-28 pb-20">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        <motion.div {...fadeUp} className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-300 text-xs font-medium tracking-wider uppercase mb-6">Get in Touch</span>
          <h1 className="text-4xl sm:text-5xl font-bold text-white mb-6">
            Contact{' '}
            <span className="bg-gradient-to-r from-cyan-400 to-teal-400 bg-clip-text text-transparent">CRAIMS</span>
          </h1>
          <p className="text-slate-400 max-w-xl mx-auto">
            Interested in collaboration, research opportunities, or learning more about our programs? Reach out to us.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-2 space-y-6"
          >
            {contactInfo.map((info, i) => (
              <motion.div
                key={info.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="p-6 rounded-2xl bg-white/[0.03] border border-white/[0.06]"
              >
                <div className={`inline-flex p-2.5 rounded-xl bg-gradient-to-br ${info.color} mb-3`}>
                  <info.icon size={18} className="text-white" />
                </div>
                <p className="text-slate-500 text-xs uppercase tracking-wider mb-1">{info.label}</p>
                <p className="text-white text-sm">{info.value}</p>
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-3"
          >
            <div className="p-8 rounded-3xl bg-white/[0.03] border border-white/[0.06]">
              <h3 className="text-xl font-semibold text-white mb-6">Send a Message</h3>
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-slate-400 text-xs mb-1.5 block">Full Name</label>
                    <Input
                      value={form.name}
                      onChange={(e) => setForm({ ...form, name: e.target.value })}
                      placeholder="Your name"
                      required
                      className="bg-white/5 border-white/10 text-white placeholder:text-slate-500 focus:border-cyan-500/50"
                    />
                  </div>
                  <div>
                    <label className="text-slate-400 text-xs mb-1.5 block">Email</label>
                    <Input
                      type="email"
                      value={form.email}
                      onChange={(e) => setForm({ ...form, email: e.target.value })}
                      placeholder="your@email.com"
                      required
                      className="bg-white/5 border-white/10 text-white placeholder:text-slate-500 focus:border-cyan-500/50"
                    />
                  </div>
                </div>
                <div>
                  <label className="text-slate-400 text-xs mb-1.5 block">Subject</label>
                  <Input
                    value={form.subject}
                    onChange={(e) => setForm({ ...form, subject: e.target.value })}
                    placeholder="What is this about?"
                    required
                    className="bg-white/5 border-white/10 text-white placeholder:text-slate-500 focus:border-cyan-500/50"
                  />
                </div>
                <div>
                  <label className="text-slate-400 text-xs mb-1.5 block">Message</label>
                  <Textarea
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    placeholder="Your message..."
                    rows={5}
                    required
                    className="bg-white/5 border-white/10 text-white placeholder:text-slate-500 focus:border-cyan-500/50 resize-none"
                  />
                </div>
                <Button
                  type="submit"
                  disabled={sending}
                  className="w-full bg-gradient-to-r from-cyan-500 to-teal-500 hover:from-cyan-600 hover:to-teal-600 text-white font-semibold py-6 rounded-xl shadow-lg shadow-cyan-500/20"
                >
                  {sending ? (
                    <div className="flex items-center gap-2">
                      <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                      Sending...
                    </div>
                  ) : (
                    <div className="flex items-center gap-2">
                      <Send size={16} />
                      Send Message
                    </div>
                  )}
                </Button>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
