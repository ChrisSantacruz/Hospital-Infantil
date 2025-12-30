'use client';

import { motion } from 'framer-motion';
import { Download } from 'lucide-react';

export default function Acabados() {
    return (
        <section className="w-full py-16 md:py-20 bg-white px-6 md:px-12 lg:px-24 border-b border-editorial-stone/10">
            <div className="max-w-[1920px] mx-auto">

                {/* Header */}
                <div className="max-w-4xl mb-16">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        <span className="block font-sans text-xs uppercase tracking-[0.2em] text-editorial-stone mb-6">
                            Lámina 7 · Acabados
                        </span>
                        <h2 className="font-editorial text-4xl md:text-5xl text-editorial-dark mb-8 leading-tight">
                            Planta de Acabados <br />
                            <span className="italic text-editorial-stone">y Especificaciones Técnicas</span>
                        </h2>
                        <p className="font-sans text-editorial-stone text-lg leading-relaxed font-light max-w-2xl">
                            Definición completa de acabados arquitectónicos: pisos, muros y cielos. 
                            Materiales acordes con normativa hospitalaria, requerimientos de higiene, 
                            seguridad y mantenimiento del Servicio de Urgencias.
                        </p>
                    </motion.div>
                </div>

                {/* Imagen Principal de la Lámina */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mb-12 bg-editorial-concrete/5 border border-editorial-stone/10 rounded-sm overflow-hidden"
                >
                    <div className="p-6 border-b border-editorial-stone/10 flex justify-between items-center">
                        <div>
                            <h3 className="font-editorial text-xl text-editorial-dark">Planta de Acabados</h3>
                            <p className="font-sans text-xs text-editorial-stone mt-1">Distribución de materiales y especificaciones</p>
                        </div>
                        <a 
                            href="/resources/imagenes pdfs/lamina7/LAMINA 7 ACABADOS.pdf" 
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-2 text-xs uppercase tracking-widest text-editorial-dark hover:opacity-60 transition-opacity"
                        >
                            <Download className="w-4 h-4" />
                            Descargar PDF
                        </a>
                    </div>
                    <div className="p-8 flex items-center justify-center bg-white">
                        <img
                            src="/resources/imagenes pdfs/lamina7/plantaacabados.jpg"
                            alt="Planta de Acabados"
                            className="w-full h-auto object-contain"
                        />
                    </div>
                </motion.div>

            </div>
        </section>
    );
}
