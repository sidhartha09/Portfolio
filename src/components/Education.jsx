import React from 'react';
import { education } from '../data/portfolioData';

const Education = () => {
  return (
    <section id="education" className="bg-white pt-24 pb-32 px-6 md:px-12 w-full relative overflow-hidden font-sans bg-[linear-gradient(to_right,#80808006_1px,transparent_1px),linear-gradient(to_bottom,#80808006_1px,transparent_1px)] bg-[size:60px_60px]">
      <div className="absolute top-0 left-0 w-full pointer-events-none z-10 transform -translate-y-[1px] rotate-180">
        <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="w-full h-12 md:h-20 fill-[#ff2a2a]">
          <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V120H0V95.8C59.71,118.08,130.83,119.62,189.5,99.8,242.79,81.82,282.88,63.6,321.39,56.44Z" />
        </svg>
      </div>

      <div className="max-w-6xl mx-auto relative z-20">
        <div data-aos="fade-up" className="mb-12 md:mb-16 text-center">
          <div className="inline-block border border-gray-300 rounded-full px-5 py-1.5 text-sm text-gray-600 font-bold mb-6 shadow-sm bg-white">
            Academic Foundation
          </div>
          <h2 className="text-4xl md:text-5xl font-black text-gray-900 tracking-tight uppercase">
            Education
          </h2>
        </div>

        <article data-aos="zoom-in" className="max-w-3xl mx-auto rounded-3xl bg-[#0a0a0a] p-8 md:p-12 text-white shadow-[0_20px_60px_rgba(0,0,0,0.15)] relative overflow-hidden">
          <div className="absolute -right-12 -top-12 w-48 h-48 rounded-full bg-[#ff2a2a]/20 blur-3xl" />
          <div className="relative flex flex-col md:flex-row md:items-start md:justify-between gap-6">
            <div>
              <p className="text-[#ff2a2a] text-xs font-black uppercase tracking-[0.2em] mb-4">Master's Degree</p>
              <h3 className="text-3xl md:text-4xl font-black tracking-tight mb-3">{education.degree}</h3>
              <p className="text-white/70 font-bold text-lg">{education.institution}</p>
            </div>
            <span className="shrink-0 rounded-full border border-white/15 bg-white/5 px-4 py-2 text-sm font-bold text-white/80">{education.graduation}</span>
          </div>
          <p className="relative mt-8 pt-6 border-t border-white/10 text-white/60 leading-relaxed max-w-2xl">{education.summary}</p>
        </article>
      </div>
    </section>
  );
};

export default Education;
