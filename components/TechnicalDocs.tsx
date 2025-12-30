'use client';

import { motion } from 'framer-motion';
import { Download } from 'lucide-react';

const laminasPDFs = [
    {
        lamina: "Memoria Descriptiva",
        path: "/resources/MEMORIA DESCRIPTIVA PROYECTO.pdf"
    },
    {
        lamina: "Lámina 1 - Arquitectura",
        path: "/resources/Descargas/lamina 1 arq.pdf"
    },
    {
        lamina: "Lámina 2 - Diseño de Pisos",
        path: "/resources/imagenes pdfs/lamina2/lamina 2 diseño pisos.pdf"
    },
    {
        lamina: "Lámina 3 - Diseño de Cielos",
        path: "/resources/imagenes pdfs/lamina3/ARQUITECTONICO LAMINA 3 DISEÑO CIELOS.pdf"
    },
    {
        lamina: "Lámina 4 - Sustentabilidad",
        path: "/resources/imagenes pdfs/lamina4/ARQUITECTONICO Lamina 4 sustentabilidad.pdf"
    },
    {
        lamina: "Lámina 5 - Fases de Ejecución",
        path: "/resources/imagenes pdfs/lamina5/LAMINA 5 FASES DE EJECUCION DEL PROYECTO (1).pdf"
    },
    {
        lamina: "Lámina 6 - Demoliciones",
        path: "/resources/imagenes pdfs/lamina6/LAMINA 6 DEMOLICIOINES.pdf"
    },
    {
        lamina: "Lámina 7 - Acabados",
        path: "/resources/Descargas/LAMINA 7 ACABADOS.pdf"
    },
    {
        lamina: "Presupuesto de Obra",
        path: "/resources/presupuesto_obra.pdf"
    }
];

export default function TechnicalDocs() {
    return (
        <section className="w-full py-16 md:py-20 bg-editorial-white px-6 md:px-12 lg:px-24 border-b border-editorial-stone/10">
            <div className="max-w-[1920px] mx-auto">

                {/* Header */}
                <div className="max-w-4xl mb-16">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        <span className="block font-sans text-xs uppercase tracking-[0.2em] text-editorial-stone mb-6">
                            Documentación Técnica
                        </span>
                        <h2 className="font-editorial text-4xl md:text-5xl text-editorial-dark mb-8 leading-tight">
                            Láminas Arquitectónicas <br /> 
                            <span className="italic text-editorial-stone">y Planos Técnicos</span>
                        </h2>
                        <p className="font-sans text-editorial-stone text-lg leading-relaxed font-light max-w-2xl">
                            Acceso directo a toda la documentación técnica del proyecto organizada por láminas. 
                            Incluye plantas arquitectónicas, especificaciones de materiales, sistemas constructivos 
                            y cronogramas de ejecución.
                        </p>
                    </motion.div>
                </div>

                {/* Láminas Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {laminasPDFs.map((lamina, idx) => (
                        <motion.a
                            key={idx}
                            href={lamina.path}
                            target="_blank"
                            rel="noopener noreferrer"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.05 }}
                            className="group bg-white border border-editorial-stone/10 hover:border-editorial-dark/30 rounded-sm p-6 transition-all"
                        >
                            <div className="flex items-center justify-between mb-4">
                                <h3 className="font-editorial text-lg text-editorial-dark group-hover:text-editorial-dark/80 transition-colors">
                                    {lamina.lamina}
                                </h3>
                                <Download className="w-5 h-5 text-editorial-stone group-hover:text-editorial-dark transition-colors" />
                            </div>
                            <p className="font-sans text-xs uppercase tracking-wider text-editorial-stone">
                                Descargar PDF
                            </p>
                        </motion.a>
                    ))}
                </div>

                {/* Info Footer */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mt-12 bg-editorial-concrete/5 border border-editorial-stone/10 rounded-sm p-8"
                >
                    <h3 className="font-editorial text-xl text-editorial-dark mb-4">Nota sobre Documentación</h3>
                    <p className="font-sans text-sm text-editorial-stone leading-relaxed">
                        Todos los documentos están en formato PDF y se abrirán en una nueva pestaña. 
                        Para una mejor visualización, se recomienda descargar los archivos. 
                        La documentación cumple con los estándares establecidos en la Resolución 1633 de 2025 
                        del Ministerio de Salud y Protección Social para la habilitación de servicios de urgencias pediátricas.
                    </p>
                </motion.div>

            </div>
        </section>
    );
}
