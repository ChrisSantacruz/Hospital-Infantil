'use client';

import { motion } from 'framer-motion';
import { Download, FileText, Layers } from 'lucide-react';

const laminasPDFs = [
    {
        lamina: "Memoria Descriptiva",
        title: "Memoria Descriptiva del Proyecto",
        description: "Documento técnico completo del proyecto",
        pdfs: [
            {
                name: "Memoria Descriptiva Proyecto",
                path: "/resources/MEMORIA DESCRIPTIVA PROYECTO.pdf"
            }
        ]
    },
    {
        lamina: "Lámina 1",
        title: "Arquitectura",
        description: "Planta arquitectónica y programa médico",
        pdfs: [
            {
                name: "Planta Arquitectónica",
                path: "/resources/desgloce lamina 1-20251229T234551Z-1-001/desgloce lamina 1/PLANTA ARQUITECTONICA.pdf"
            },
            {
                name: "Programa Médico Arquitectónico",
                path: "/resources/desgloce lamina 1-20251229T234551Z-1-001/desgloce lamina 1/PROGRAMA MEDICO ARQUITECTONICO.pdf"
            }
        ]
    },
    {
        lamina: "Lámina 2",
        title: "Diseño de Pisos y Materiales",
        description: "Especificaciones de acabados y materiales",
        pdfs: [
            {
                name: "Diseño de Pisos",
                path: "/resources/desgloce lamina 2-20251229T234547Z-1-001/desgloce lamina 2/lamina 2 diseño pisos.pdf"
            }
        ]
    },
    {
        lamina: "Lámina 3",
        title: "Diseño de Cielos",
        description: "Cielorrasos e iluminación",
        pdfs: [
            {
                name: "Diseño de Cielos - Completo",
                path: "/resources/desgloce lamina 3-20251229T234633Z-1-001/desgloce lamina 3/ARQUITECTONICO LAMINA 3 DISEÑO CIELOS.pdf"
            },
            {
                name: "Planta Diseño de Cielos",
                path: "/resources/desgloce lamina 3-20251229T234633Z-1-001/desgloce lamina 3/planta diseño cielos.pdf"
            },
            {
                name: "Planta Detalle Cielo",
                path: "/resources/desgloce lamina 3-20251229T234633Z-1-001/desgloce lamina 3/PLANTA DETALLE CIELO.pdf"
            }
        ]
    },
    {
        lamina: "Lámina 4",
        title: "Sustentabilidad",
        description: "Estrategias bioclimáticas y pasivas",
        pdfs: [
            {
                name: "Arquitectónico Sustentabilidad",
                path: "/resources/desgloce lamina 4-20251229T234539Z-1-001/desgloce lamina 4/ARQUITECTONICO Lamina 4 sustentabilidad.pdf"
            },
            {
                name: "Diagrama Medio Ambiental",
                path: "/resources/desgloce lamina 4-20251229T234539Z-1-001/desgloce lamina 4/diagrama medioi ambietal.pdf"
            },
            {
                name: "Sección A-A",
                path: "/resources/desgloce lamina 4-20251229T234539Z-1-001/desgloce lamina 4/seccion aa.pdf"
            },
            {
                name: "Sección B-B",
                path: "/resources/desgloce lamina 4-20251229T234539Z-1-001/desgloce lamina 4/seccion bb.pdf"
            },
            {
                name: "Planta Arquitectónica Sustentabilidad",
                path: "/resources/desgloce lamina 4-20251229T234539Z-1-001/desgloce lamina 4/planta arq sustentabilidad.pdf"
            }
        ]
    },
    {
        lamina: "Lámina 5",
        title: "Fases de Ejecución",
        description: "Cronograma y planificación constructiva",
        pdfs: [
            {
                name: "Fases de Ejecución del Proyecto",
                path: "/resources/imagenes pdfs/lamina5/LAMINA 5 FASES DE EJECUCION DEL PROYECTO (1).pdf"
            }
        ]
    },
    {
        lamina: "Lámina 6",
        title: "Demoliciones",
        description: "Plan de demoliciones y seguridad",
        pdfs: [
            {
                name: "Planta de Demoliciones",
                path: "/resources/imagenes pdfs/lamina6/LAMINA 6 DEMOLICIOINES.pdf"
            }
        ]
    },
    {
        lamina: "Lámina 7",
        title: "Acabados",
        description: "Especificaciones de acabados arquitectónicos",
        pdfs: [
            {
                name: "Acabados Arquitectónicos",
                path: "/resources/imagenes pdfs/lamina7/LAMINA 7 ACABADOS.pdf"
            }
        ]
    }
];

export default function TechnicalDocs() {
    return (
        <section className="w-full py-24 md:py-32 bg-editorial-white px-6 md:px-12 lg:px-24 border-b border-editorial-stone/10">
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
                <div className="space-y-8">
                    {laminasPDFs.map((lamina, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.05 }}
                            className="bg-white border border-editorial-stone/10 rounded-sm overflow-hidden"
                        >
                            <div className="p-6 bg-editorial-concrete/5 border-b border-editorial-stone/10">
                                <div className="flex items-center gap-4">
                                    <div className="w-12 h-12 rounded-full bg-editorial-dark/10 flex items-center justify-center flex-shrink-0">
                                        <Layers className="w-6 h-6 text-editorial-dark" />
                                    </div>
                                    <div>
                                        <span className="block font-sans text-[10px] uppercase tracking-widest text-editorial-stone mb-1">
                                            {lamina.lamina}
                                        </span>
                                        <h3 className="font-editorial text-xl text-editorial-dark">{lamina.title}</h3>
                                        <p className="font-sans text-xs text-editorial-stone mt-1">{lamina.description}</p>
                                    </div>
                                </div>
                            </div>
                            
                            <div className="p-6">
                                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                                    {lamina.pdfs.map((pdf, pdfIdx) => (
                                        <a
                                            key={pdfIdx}
                                            href={pdf.path}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="group flex items-center gap-3 p-4 bg-editorial-concrete/5 hover:bg-editorial-concrete/10 border border-editorial-stone/10 hover:border-editorial-dark/20 rounded-sm transition-all"
                                        >
                                            <FileText className="w-5 h-5 text-editorial-stone group-hover:text-editorial-dark transition-colors flex-shrink-0" />
                                            <div className="flex-1 min-w-0">
                                                <p className="font-sans text-sm text-editorial-dark truncate">{pdf.name}</p>
                                            </div>
                                            <Download className="w-4 h-4 text-editorial-stone group-hover:text-editorial-dark transition-colors flex-shrink-0" />
                                        </a>
                                    ))}
                                </div>
                            </div>
                        </motion.div>
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
