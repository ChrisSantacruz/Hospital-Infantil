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
        <section className="w-full py-16 md:py-20 bg-editorial-white px-6 md:px-12 lg:px-24 border-b border-editorial-stone/10">
            <div className="max-w-[1920px] mx-auto">

                {/* Organized Text Content */}
                <div className="w-full max-w-4xl mx-auto">
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
                        Reorganización Funcional Servicio de Urgencias <br />
                        <span className="text-editorial-stone italic">Hospital Infantil Los Ángeles</span>
                    </motion.h2>

                    <motion.p
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="font-sans text-editorial-stone text-base leading-relaxed mb-12"
                    >
                        La propuesta arquitectónica se desarrolló estrictamente bajo los lineamientos normativos, enfocándose en la seguridad, durabilidad y confort para los pacientes y el personal médico.
                    </motion.p>

                    {/* Bullet Points / Features */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {features.map((feature, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.2 + (idx * 0.1) }}
                                className="bg-editorial-concrete/5 border border-editorial-stone/10 rounded-sm p-6"
                            >
                                <div className="w-10 h-10 rounded-full bg-editorial-dark/10 flex items-center justify-center mb-4">
                                    <Check className="w-5 h-5 text-editorial-dark" />
                                </div>
                                <h3 className="font-editorial text-lg text-editorial-dark mb-2">{feature.title}</h3>
                                <p className="font-sans text-sm text-editorial-stone leading-relaxed">{feature.description}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>

            </div>
        </section>
    );
}
