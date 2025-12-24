'use client';

import { motion } from 'framer-motion';
import { Check } from 'lucide-react';

const features = [
    {
        title: "Superficies Continuas",
        description: "Incorporación de materiales no porosos que eliminan juntas y aseguran la hermeticidad del espacio."
    },
    {
        title: "Fácil Limpieza y Asepsia",
        description: "Soluciones diseñadas para reducir riesgos de infección y facilitar los protocolos de desinfección hospitalaria."
    },
    {
        title: "Seguridad Pediátrica",
        description: "Ambientes garantizados para el bienestar y la seguridad del paciente pediátrico."
    }
];

export default function ProjectSection() {
    return (
        <section className="w-full py-24 md:py-32 bg-editorial-white px-6 md:px-12 lg:px-24 border-b border-editorial-stone/10">
            <div className="max-w-[1920px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

                {/* Left Column: Organized Text Content */}
                <div className="w-full max-w-2xl">
                    <motion.span
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        className="block font-sans text-xs uppercase tracking-[0.2em] text-editorial-stone mb-8"
                    >
                        Proyecto
                    </motion.span>

                    <motion.h2
                        className="font-editorial text-3xl md:text-4xl text-editorial-dark mb-8 leading-tight"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        Resolución 1633 de 2025: <br />
                        <span className="text-editorial-stone italic">Priorizando Asepsia y Humanización</span>
                    </motion.h2>

                    <motion.p
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="font-sans text-editorial-stone text-sm leading-relaxed mb-12"
                    >
                        La propuesta arquitectónica se desarrolló estrictamente bajo los lineamientos normativos, enfocándose en la seguridad, durabilidad y confort para los pacientes y el personal médico.
                    </motion.p>

                    {/* Bullet Points / Features */}
                    <div className="space-y-8">
                        {features.map((feature, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.2 + (idx * 0.1) }}
                                className="flex gap-4 items-start group"
                            >
                                <div className="mt-1 w-5 h-5 rounded-full border border-editorial-stone/30 flex items-center justify-center flex-shrink-0 group-hover:border-editorial-dark transition-colors">
                                    <Check className="w-3 h-3 text-editorial-dark opacity-0 group-hover:opacity-100 transition-opacity" />
                                </div>
                                <div>
                                    <h3 className="font-editorial text-xl text-editorial-dark mb-1">{feature.title}</h3>
                                    <p className="font-sans text-sm text-editorial-stone leading-relaxed">{feature.description}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>

                {/* Right Column: Large Image */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.98 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="w-full h-full relative min-h-[500px] bg-editorial-concrete/10 rounded-sm border border-editorial-stone/10 p-8 flex items-center justify-center"
                >
                    <img
                        src="https://hila-sigma.vercel.app/images/planta.png"
                        alt="Planta Arquitectónica"
                        className="w-full h-auto object-contain mix-blend-multiply opacity-95 max-h-[700px]"
                    />
                    <div className="absolute bottom-6 right-6 text-xs font-sans uppercase tracking-widest text-editorial-stone bg-white/80 backdrop-blur-sm px-4 py-2 rounded-sm border border-editorial-stone/10">
                        Planta General
                    </div>
                </motion.div>

            </div>
        </section>
    );
}
