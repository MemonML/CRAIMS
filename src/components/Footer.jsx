import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, MapPin, ExternalLink } from 'lucide-react';

const LOGO_URL = "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/user_6987424d1fc4bdc871bbf74d/b7e43d551_CRAIMS_Logo.jpg";

export default function Footer() {
  return (
    <footer className="relative bg-[#060e1a] border-t border-white/5">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-px bg-gradient-to-r from-transparent via-cyan-500/50 to-transparent" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <img src={LOGO_URL} alt="CRAIMS" className="h-10 w-10 rounded-lg object-cover" />
              <span className="text-white font-bold text-lg">CRAIMS</span>
            </div>
            <p className="text-slate-400 text-sm leading-relaxed">
              Centre of Excellence for Research in Artificial Intelligence & Medical Sciences, The University of Modern Sciences.
            </p>
          </div>
          <div>
            <h4 className="text-white font-semibold mb-4 text-sm tracking-wider uppercase">Quick Links</h4>
            <div className="space-y-3">
              {[
                { label: 'About CRAIMS', path: '/About' },
                { label: 'Key Areas', path: '/KeyAreas' },
                { label: 'Leadership', path: '/Leadership' },
                { label: 'Contact Us', path: '/Contact' },
              ].map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className="flex items-center gap-2 text-slate-400 hover:text-cyan-300 text-sm transition-colors group"
                >
                  <ExternalLink size={12} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
          <div>
            <h4 className="text-white font-semibold mb-4 text-sm tracking-wider uppercase">Contact</h4>
            <div className="space-y-3">
              <div className="flex items-start gap-3 text-slate-400 text-sm">
                <MapPin size={16} className="text-cyan-400 mt-0.5 shrink-0" />
                <span>The University of Modern Sciences, Tando Muhammad Khan, Sindh, Pakistan</span>
              </div>
              <div className="flex items-center gap-3 text-slate-400 text-sm">
                <Mail size={16} className="text-cyan-400 shrink-0" />
                <span>craims@ums.edu.pk</span>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-12 pt-8 border-t border-white/5 text-center">
          <p className="text-slate-500 text-xs">
            © {new Date().getFullYear()} CRAIMS — The University of Modern Sciences. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
