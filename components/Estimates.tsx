'use client';

import { motion } from 'framer-motion';
import { ArrowDownCircle } from 'lucide-react';

export default function Estimates() {
    return (
        <section className="w-full py-24 bg-editorial-white px-6 md:px-12 lg:px-24 border-t border-editorial-dark/5">
            <div className="max-w-4xl mx-auto flex flex-col items-center text-center">
                <motion.h2
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    className="font-editorial text-3xl text-editorial-dark mb-12"
                >
                    Estimaciones del Proyecto
                </motion.h2>

                <div className="flex flex-col sm:flex-row gap-8 w-full justify-center">
                    <motion.a
                        href="https://hila-sigma.vercel.app/images/presupuesto_obra.pdf"
                        target="_blank"
                        rel="noopener noreferrer"
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="group flex flex-col items-center gap-4 p-8 border border-editorial-stone/20 hover:bg-editorial-concrete/30 transition-colors w-full sm:w-64"
                    >
                        <ArrowDownCircle className="w-8 h-8 text-editorial-stone group-hover:text-editorial-dark transition-colors" strokeWidth={1} />
                        <span className="font-sans text-xs uppercase tracking-widest text-editorial-dark">
                            Ver Presupuesto de Obra
                        </span>
                    </motion.a>

                    <motion.a
                        href="https://hila-sigma.vercel.app/images/cotizacion_dise%C3%B1o.pdf"
                        target="_blank"
                        rel="noopener noreferrer"
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="group flex flex-col items-center gap-4 p-8 border border-editorial-stone/20 hover:bg-editorial-concrete/30 transition-colors w-full sm:w-64"
                    >
                        <ArrowDownCircle className="w-8 h-8 text-editorial-stone group-hover:text-editorial-dark transition-colors" strokeWidth={1} />
                        <span className="font-sans text-xs uppercase tracking-widest text-editorial-dark">
                            Ver Valor Consultoría
                        </span>
                    </motion.a>
                </div>
            </div>
        </section>
    );
}
