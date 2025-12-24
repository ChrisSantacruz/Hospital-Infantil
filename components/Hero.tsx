'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import Link from 'next/link';

export default function Hero() {
    const { scrollY } = useScroll();
    const y1 = useTransform(scrollY, [0, 1000], [0, 200]);

    return (
        <section className="relative w-full h-screen min-h-[800px] flex flex-col md:flex-row overflow-hidden bg-editorial-white">
            {/* Left Column: Text */}
            <div className="w-full md:w-1/2 h-full flex flex-col justify-center px-6 md:px-20 lg:px-24 z-10 relative">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
                >
                    <span className="block font-sans text-xs uppercase tracking-[0.2em] text-editorial-stone mb-6">
                        Proyecto Destacado
                    </span>
                    <h1 className="font-editorial text-5xl md:text-6xl lg:text-7xl leading-[1.1] text-editorial-dark mb-8 text-balance">
                        Reorganización Funcional <br />
                        <span className="text-editorial-stone italic">Hospital Infantil Los Ángeles</span>
                    </h1>
                    <p className="font-sans text-editorial-stone text-sm md:text-base leading-relaxed max-w-md mb-12 font-light">
                        La propuesta arquitectónica se desarrolló bajo los lineamientos de la Resolución 1633 de 2025, priorizando asepsia, seguridad, durabilidad y humanización.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-6 items-start sm:items-center">
                        <Link
                            href="#proyecto"
                            className="group flex items-center gap-3 text-sm uppercase tracking-widest text-editorial-dark hover:opacity-60 transition-opacity"
                        >
                            Ver Proyecto
                            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                        </Link>

                        <button
                            onClick={() => document.dispatchEvent(new CustomEvent('open-ai-assistant'))}
                            className="px-6 py-3 rounded-full bg-editorial-white border border-editorial-stone/30 text-xs uppercase tracking-widest hover:bg-editorial-stone/10 transition-colors"
                        >
                            Consultar al Estudio
                        </button>
                    </div>
                </motion.div>
            </div>

            {/* Right Column: Hero Image */}
            <div className="absolute top-0 right-0 w-full md:w-1/2 h-full md:relative overflow-hidden">
                <motion.div style={{ y: y1 }} className="absolute inset-0 w-full h-[120%] -top-[10%]">
                    <img
                        src="https://hila-sigma.vercel.app/images/sala_general.jpg"
                        alt="Hospital Infantil Interior"
                        className="w-full h-full object-cover grayscale-[20%] sepia-[10%] contrast-[0.95]"
                    />
                    <div className="absolute inset-0 bg-editorial-dark/5 mix-blend-multiply pointer-events-none"></div>
                </motion.div>
            </div>
        </section>
    );
}
