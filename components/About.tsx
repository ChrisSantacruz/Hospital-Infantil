'use client';

import { motion } from 'framer-motion';

export default function About() {
    return (
        <section className="w-full py-32 md:py-48 bg-editorial-white px-6 md:px-24 border-b border-editorial-stone/10">
            <div className="max-w-4xl mx-auto">
                <motion.span
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    className="block font-sans text-xs uppercase tracking-[0.2em] text-editorial-stone mb-12"
                >
                    Concept
                </motion.span>

                <motion.p
                    className="font-editorial text-3xl md:text-4xl lg:text-5xl leading-[1.4] text-editorial-dark font-light antialiased"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                >
                    El diseño incorpora superficies continuas, materiales no porosos y soluciones de fácil limpieza para reducir riesgos de infección y garantizar ambientes seguros para el paciente pediátrico.
                </motion.p>

                <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-12">
                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="font-sans text-editorial-stone text-sm leading-relaxed"
                    >
                        <p>La propuesta arquitectónica se desarrolló bajo los lineamientos de la Resolución 1633 de 2025, priorizando asepsia, seguridad, durabilidad y humanización.</p>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
