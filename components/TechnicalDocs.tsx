'use client';

import { motion } from 'framer-motion';
import { Download } from 'lucide-react';

const documentacionPDFs = [
    {
        categoria: "Documentación General",
        documentos: [
            {
                nombre: "Memoria Descriptiva",
                path: "/resources/MEMORIA DESCRIPTIVA PROYECTO.pdf"
            },
            {
                nombre: "Presupuesto General de Obra",
                path: "/resources/PRESUPUESTO GENERAL DE OBRA.pdf"
            }
        ]
    },
    {
        categoria: "Láminas Arquitectónicas",
        documentos: [
            {
                nombre: "Lámina 1 - Arquitectura",
                path: "/resources/Descargas/lamina 1 arq.pdf"
            },
            {
                nombre: "Lámina 2 - Diseño de Pisos",
                path: "/resources/imagenes pdfs/lamina2/lamina 2 diseño pisos.pdf"
            },
            {
                nombre: "Lámina 3 - Diseño de Cielos",
                path: "/resources/imagenes pdfs/lamina3/ARQUITECTONICO LAMINA 3 DISEÑO CIELOS.pdf"
            },
            {
                nombre: "Lámina 4 - Sustentabilidad",
                path: "/resources/imagenes pdfs/lamina4/ARQUITECTONICO Lamina 4 sustentabilidad.pdf"
            },
            {
                nombre: "Lámina 5 - Fases de Ejecución",
                path: "/resources/imagenes pdfs/lamina5/LAMINA 5 FASES DE EJECUCION DEL PROYECTO (1).pdf"
            },
            {
                nombre: "Lámina 6 - Demoliciones",
                path: "/resources/imagenes pdfs/lamina6/LAMINA 6 DEMOLICIOINES.pdf"
            },
            {
                nombre: "Lámina 7 - Acabados",
                path: "/resources/Descargas/LAMINA 7 ACABADOS.pdf"
            }
        ]
    },
    {
        categoria: "Memorias y Cálculos",
        documentos: [
            {
                nombre: "Programa Médico Arquitectónico",
                path: "/resources/desgloce lamina 1-20251229T234551Z-1-001/desgloce lamina 1/PROGRAMA MEDICO ARQUITECTONICO.pdf"
            },
            {
                nombre: "Planta Arquitectónica (Detallada)",
                path: "/resources/desgloce lamina 1-20251229T234551Z-1-001/desgloce lamina 1/PLANTA ARQUITECTONICA.pdf"
            },
            {
                nombre: "Tabla de Materiales - Pisos",
                path: "/resources/desgloce lamina 2-20251229T234547Z-1-001/desgloce lamina 2/tabla materiales.pdf"
            },
            {
                nombre: "Planta Diseño de Pisos (Detallada)",
                path: "/resources/desgloce lamina 2-20251229T234547Z-1-001/desgloce lamina 2/planta diseño de piso.pdf"
            },
            {
                nombre: "Planta Diseño de Cielos (Detallada)",
                path: "/resources/desgloce lamina 3-20251229T234633Z-1-001/desgloce lamina 3/planta diseño cielos.pdf"
            },
            {
                nombre: "Planta Detalle de Cielo",
                path: "/resources/desgloce lamina 3-20251229T234633Z-1-001/desgloce lamina 3/PLANTA DETALLE CIELO.pdf"
            },
            {
                nombre: "Diagrama Medioambiental",
                path: "/resources/desgloce lamina 4-20251229T234539Z-1-001/desgloce lamina 4/diagrama medioi ambietal.pdf"
            },
            {
                nombre: "Planta Arquitectónica Sustentabilidad",
                path: "/resources/desgloce lamina 4-20251229T234539Z-1-001/desgloce lamina 4/planta arq sustentabilidad.pdf"
            },
            {
                nombre: "Sección AA - Sustentabilidad",
                path: "/resources/desgloce lamina 4-20251229T234539Z-1-001/desgloce lamina 4/seccion aa.pdf"
            },
            {
                nombre: "Sección BB - Sustentabilidad",
                path: "/resources/desgloce lamina 4-20251229T234539Z-1-001/desgloce lamina 4/seccion bb.pdf"
            }
        ]
    },
    {
        categoria: "Planos Eléctricos",
        documentos: [
            {
                nombre: "Plano 1 - Iluminación General",
                path: "/resources/imagenes pdfs/Electrico1/ELEC-HOSPITAL INFANTIL (1)-ELC-01 ILUMINACION.pdf"
            },
            {
                nombre: "Plano 2 - Iluminación de Emergencia",
                path: "/resources/imagenes pdfs/Electrico2/ELEC-HOSPITAL INFANTIL (2)-ELC-02 ILUMINACION EMERGENCIA.pdf"
            },
            {
                nombre: "Plano 3 - Tomacorrientes",
                path: "/resources/imagenes pdfs/Electrico3/ELEC-HOSPITAL INFANTIL (1)-ELC-03 TOMACORRIENTES.pdf"
            },
            {
                nombre: "Plano 4 - Red Contra Incendios",
                path: "/resources/imagenes pdfs/Electrico4/ELEC-HOSPITAL INFANTIL (1)-ELC-04 RED CONTRAINCENDIOS.pdf"
            },
            {
                nombre: "Plano 5 - Red de Datos",
                path: "/resources/imagenes pdfs/Electrico5/ELEC-HOSPITAL INFANTIL (1)-ELC-05 DATOS.pdf"
            }
        ]
    },
    {
        categoria: "Planos Hidráulicos y Sanitarios",
        documentos: [
            {
                nombre: "Plano 1 - Instalaciones Hidráulicas",
                path: "/resources/imagenes pdfs/Hidraulicas1/INSTALACIONES HIDRAULICAS - 1.0-SEG-Model.pdf"
            },
            {
                nombre: "Plano 2 - Instalaciones Hidráulicas (Detallado)",
                path: "/resources/imagenes pdfs/Hidraulicas2/INSTALACIONES HIDRAULICAS - 1.1-SEG-Model.pdf"
            },
            {
                nombre: "Plano 3 - Instalaciones Sanitarias",
                path: "/resources/imagenes pdfs/Hidraulicas3/INSTALACIONES SANITARIAS HI - 1.0 SEG-Model.pdf"
            },
            {
                nombre: "Plano 4 - Instalaciones Sanitarias (Simplificado)",
                path: "/resources/imagenes pdfs/Hidraulicas4/INSTALACIONES SANITARIAS HI - 1.1 SEG-Model.pdf"
            }
        ]
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
                            Documentación Técnica Completa
                        </span>
                        <h2 className="font-editorial text-4xl md:text-5xl text-editorial-dark mb-8 leading-tight">
                            Láminas Arquitectónicas <br /> 
                            <span className="italic text-editorial-stone">y Planos Técnicos</span>
                        </h2>
                        <p className="font-sans text-editorial-stone text-lg leading-relaxed font-light max-w-2xl">
                            Acceso directo a toda la documentación técnica del proyecto organizada por categorías. 
                            Incluye plantas arquitectónicas, especificaciones de materiales, sistemas eléctricos, 
                            hidráulicos, sanitarios y cronogramas de ejecución.
                        </p>
                    </motion.div>
                </div>

                {/* Documentación por Categorías */}
                <div className="space-y-12">
                    {documentacionPDFs.map((categoria, catIdx) => (
                        <motion.div
                            key={catIdx}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: catIdx * 0.1 }}
                        >
                            {/* Título de Categoría */}
                            <div className="mb-6">
                                <h3 className="font-editorial text-2xl text-editorial-dark mb-2">
                                    {categoria.categoria}
                                </h3>
                                <div className="h-px bg-editorial-stone/20 w-24"></div>
                            </div>

                            {/* Grid de Documentos */}
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                                {categoria.documentos.map((doc, docIdx) => (
                                    <motion.a
                                        key={docIdx}
                                        href={doc.path}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        initial={{ opacity: 0, y: 20 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: docIdx * 0.05 }}
                                        className="group bg-white border border-editorial-stone/10 hover:border-editorial-dark/30 rounded-sm p-6 transition-all hover:shadow-lg"
                                    >
                                        <div className="flex items-center justify-between mb-4">
                                            <h4 className="font-editorial text-base text-editorial-dark group-hover:text-editorial-dark/80 transition-colors">
                                                {doc.nombre}
                                            </h4>
                                            <Download className="w-5 h-5 text-editorial-stone group-hover:text-editorial-dark transition-colors flex-shrink-0 ml-2" />
                                        </div>
                                        <p className="font-sans text-xs uppercase tracking-wider text-editorial-stone">
                                            Descargar PDF
                                        </p>
                                    </motion.a>
                                ))}
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
                    <div className="space-y-3 font-sans text-sm text-editorial-stone leading-relaxed">
                        <p>
                            Todos los documentos están en formato PDF y se abrirán en una nueva pestaña. 
                            Para una mejor visualización, se recomienda descargar los archivos.
                        </p>
                        <p>
                            <span className="font-medium text-editorial-dark">Documentación General:</span> Memoria descriptiva y presupuesto general de obra.
                        </p>
                        <p>
                            <span className="font-medium text-editorial-dark">Láminas Arquitectónicas:</span> 7 láminas completas con plantas, diseños y especificaciones constructivas.
                        </p>
                        <p>
                            <span className="font-medium text-editorial-dark">Memorias y Cálculos:</span> 10 documentos con programa médico arquitectónico, tablas de materiales, plantas detalladas, diagramas medioambientales y secciones técnicas.
                        </p>
                        <p>
                            <span className="font-medium text-editorial-dark">Planos Eléctricos:</span> 5 planos detallando iluminación, emergencia, tomacorrientes, sistema contra incendios y red de datos.
                        </p>
                        <p>
                            <span className="font-medium text-editorial-dark">Planos Hidráulicos:</span> 4 planos con redes hidráulicas, sanitarias y evacuación de aguas.
                        </p>
                        <p className="pt-2 border-t border-editorial-stone/10">
                            La documentación cumple con los estándares establecidos en la Resolución 1633 de 2025 
                            del Ministerio de Salud y Protección Social para la habilitación de servicios de urgencias pediátricas, 
                            NTC 2050 para instalaciones eléctricas y RAS para sistemas hidráulicos y sanitarios.
                        </p>
                    </div>
                </motion.div>

            </div>
        </section>
    );
}
