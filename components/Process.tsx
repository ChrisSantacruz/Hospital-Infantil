'use client';

import { motion } from 'framer-motion';

const steps = [
    {
        title: "Pisos",
        description: "Vinilo homogéneo en rollo con medias cañas sanitarias integradas, garantizando superficies impermeables, antideslizantes y sin juntas."
    },
    {
        title: "Muros y Cielorrasos",
        description: "Panel yeso RH con pintura hospitalaria lavable y cielorrasos continuos tipo drywall para asegurar hermeticidad e higiene."
    },
    {
        title: "Carpintería y Vidrios",
        description: "Divisiones en vidrio laminado de seguridad 6+6 mm y perfiles de aluminio con acabado tipo madera, combinando resistencia, limpieza y una estética cálida."
    }
];

export default function Process() {
    return (
        <section className="w-full py-32 bg-editorial-white px-6 md:px-12 lg:px-24">
            <div className="max-w-7xl mx-auto">
                <motion.h2
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    className="font-editorial text-4xl mb-24 text-editorial-dark"
                >
                    Process & Materials
                </motion.h2>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-12 border-t border-editorial-dark/10 pt-12">
                    {steps.map((step, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.2, duration: 0.8 }}
                            className="group"
                        >
                            <span className="block font-sans text-xs text-editorial-stone mb-6">
                                0{index + 1}
                            </span>
                            <h3 className="font-editorial text-2xl text-editorial-dark mb-4 group-hover:opacity-60 transition-opacity">
                                {step.title}
                            </h3>
                            <p className="font-sans text-sm text-editorial-stone leading-relaxed">
                                {step.description}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
