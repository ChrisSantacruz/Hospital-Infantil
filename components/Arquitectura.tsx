'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Download, Maximize2, FileText, ExternalLink } from 'lucide-react';
import ImageLightbox from './ImageLightbox';

const zones = [
    { name: "Sala de Observación", area: "275.74 M²" },
    { name: "Consultorios", area: "93.45 M²" },
    { name: "Urgencias", area: "178.31 M²" }
];

export default function Arquitectura() {
    const [lightboxImage, setLightboxImage] = useState<{ src: string; alt: string } | null>(null);
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
                            Lámina 1 · Arquitectura
                        </span>
                        <h2 className="font-editorial text-4xl md:text-5xl text-editorial-dark mb-8 leading-tight">
                            Planta Arquitectónica <br /> 
                            <span className="italic text-editorial-stone">Distribución Funcional</span>
                        </h2>
                        <p className="font-sans text-editorial-stone text-lg leading-relaxed font-light max-w-2xl">
                            La reorganización espacial responde a la necesidad de optimizar los flujos pediátricos, 
                            separando áreas críticas de consulta ambulatoria, y cumpliendo con las exigencias normativas 
                            de la Resolución 1633 de 2025 para servicios de urgencias pediátricas.
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
                            <h3 className="font-editorial text-xl text-editorial-dark">Planta Arquitectónica General</h3>
                            <p className="font-sans text-xs text-editorial-stone mt-1">Urgencias Pediátricas</p>
                        </div>
                        <a 
                            href="/resources/desgloce lamina 1-20251229T234551Z-1-001/desgloce lamina 1/PLANTA ARQUITECTONICA.pdf" 
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-2 text-xs uppercase tracking-widest text-editorial-dark hover:opacity-60 transition-opacity"
                        >
                            <Download className="w-4 h-4" />
                            Descargar PDF
                        </a>
                    </div>
                    <div 
                        className="p-8 flex items-center justify-center bg-white cursor-pointer"
                        onClick={() => setLightboxImage({ src: '/resources/imagenes pdfs/Lamina1/plantaArquitectonica.jpg', alt: 'Planta Arquitectónica Detallada - Click para ampliar' })}
                    >
                        <img
                            src="/resources/imagenes pdfs/Lamina1/plantaArquitectonica.jpg"
                            alt="Planta Arquitectónica"
                            className="w-full h-auto object-contain hover:opacity-90 transition-opacity"
                        />
                    </div>
                </motion.div>

                {/* Main Content Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
                    
                    {/* Planta Arquitectónica Detallada */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="lg:col-span-2 bg-white border border-editorial-stone/10 rounded-sm overflow-hidden"
                    >
                        <div className="p-6 border-b border-editorial-stone/10">
                            <h3 className="font-editorial text-xl text-editorial-dark">Planta Arquitectónica Detallada</h3>
                            <p className="font-sans text-xs text-editorial-stone mt-1">Distribución de espacios</p>
                        </div>
                        <div className="p-8 flex items-center justify-center bg-editorial-concrete/5">
                            <img
                                src="/resources/imagenes pdfs/Lamina1/plantaArquitectonica.jpg"
                                alt="Planta Arquitectónica"
                                className="w-full h-auto object-contain"
                            />
                        </div>
                    </motion.div>

                    {/* Zones Summary */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="bg-editorial-white border border-editorial-stone/10 rounded-sm p-6 h-fit"
                    >
                        <h3 className="font-editorial text-xl text-editorial-dark mb-6 pb-4 border-b border-editorial-stone/10">
                            Áreas Principales
                        </h3>
                        <div className="space-y-4">
                            {zones.map((zone, idx) => (
                                <div key={idx} className="flex justify-between items-center py-3 border-b border-editorial-stone/5 last:border-0">
                                    <span className="font-sans text-sm text-editorial-dark">{zone.name}</span>
                                    <span className="font-sans text-xs font-bold text-editorial-stone tracking-wider">{zone.area}</span>
                                </div>
                            ))}
                        </div>

                        <div className="mt-8 pt-6 border-t border-editorial-stone/10">
                            <p className="font-sans text-xs text-editorial-stone leading-relaxed">
                                <strong className="text-editorial-dark">Organización Funcional:</strong><br/>
                                Espacios diferenciados según nivel de atención, con recorridos optimizados para 
                                paciente crítico, ambulatorio y personal médico.
                            </p>
                        </div>

                        <a 
                            href="/resources/desgloce lamina 1-20251229T234551Z-1-001/desgloce lamina 1/PROGRAMA MEDICO ARQUITECTONICO.pdf" 
                            target="_blank"
                            className="mt-6 w-full flex items-center justify-center gap-2 px-4 py-3 bg-editorial-dark text-white text-xs uppercase tracking-widest hover:bg-editorial-stone transition-colors rounded-sm"
                        >
                            <Download className="w-4 h-4" />
                            Programa Médico
                        </a>
                    </motion.div>

                </div>

                {/* Renders de Espacios Clave */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mb-12"
                >
                    <h3 className="font-editorial text-2xl text-editorial-dark mb-6">Visualizaciones de Espacios</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        <div className="bg-white border border-editorial-stone/10 rounded-sm overflow-hidden">
                            <div 
                                onClick={() => setLightboxImage({ src: '/resources/imagenes pdfs/Lamina1/SALA DE OBSERVACION.png', alt: 'Sala de Observación - 275.74 M²' })}
                                className="cursor-pointer"
                            >
                                <img
                                    src="/resources/imagenes pdfs/Lamina1/SALA DE OBSERVACION.png"
                                    alt="Sala de Observación"
                                    className="w-full h-64 object-cover hover:opacity-90 transition-opacity"
                                />
                            </div>
                            <div className="p-4">
                                <h4 className="font-sans font-semibold text-sm text-editorial-dark">Sala de Observación</h4>
                                <p className="text-xs text-editorial-stone mt-1">275.74 M²</p>
                            </div>
                        </div>
                        <div className="bg-white border border-editorial-stone/10 rounded-sm overflow-hidden">
                            <div 
                                onClick={() => setLightboxImage({ src: '/resources/imagenes pdfs/Lamina1/ESTACION DE ENFERMERIA.jpg', alt: 'Estación de Enfermería - Área de control' })}
                                className="cursor-pointer"
                            >
                                <img
                                    src="/resources/imagenes pdfs/Lamina1/ESTACION DE ENFERMERIA.jpg"
                                    alt="Estación de Enfermería"
                                    className="w-full h-64 object-cover hover:opacity-90 transition-opacity"
                                />
                            </div>
                            <div className="p-4">
                                <h4 className="font-sans font-semibold text-sm text-editorial-dark">Estación de Enfermería</h4>
                                <p className="text-xs text-editorial-stone mt-1">Área de control</p>
                            </div>
                        </div>
                        <div className="bg-white border border-editorial-stone/10 rounded-sm overflow-hidden">
                            <div 
                                onClick={() => setLightboxImage({ src: '/resources/imagenes pdfs/Lamina1/SALA DE ESPERA GENERAL.jpg', alt: 'Sala de Espera General - Área de recepción' })}
                                className="cursor-pointer"
                            >
                                <img
                                    src="/resources/imagenes pdfs/Lamina1/SALA DE ESPERA GENERAL.jpg"
                                    alt="Sala de Espera General"
                                    className="w-full h-64 object-cover hover:opacity-90 transition-opacity"
                                />
                            </div>
                            <div className="p-4">
                                <h4 className="font-sans font-semibold text-sm text-editorial-dark">Sala de Espera General</h4>
                                <p className="text-xs text-editorial-stone mt-1">Área de recepción</p>
                            </div>
                        </div>
                        <div className="bg-white border border-editorial-stone/10 rounded-sm overflow-hidden">
                            <div 
                                onClick={() => setLightboxImage({ src: '/resources/imagenes pdfs/Lamina1/ESTACION DE FACTURACIOIN.jpg', alt: 'Estación de Facturación - Área administrativa' })}
                                className="cursor-pointer"
                            >
                                <img
                                    src="/resources/imagenes pdfs/Lamina1/ESTACION DE FACTURACIOIN.jpg"
                                    alt="Estación de Facturación"
                                    className="w-full h-64 object-cover hover:opacity-90 transition-opacity"
                                />
                            </div>
                            <div className="p-4">
                                <h4 className="font-sans font-semibold text-sm text-editorial-dark">Estación de Facturación</h4>
                                <p className="text-xs text-editorial-stone mt-1">Área administrativa</p>
                            </div>
                        </div>
                    </div>
                </motion.div>

                {/* Functional Description */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="bg-editorial-concrete/5 border border-editorial-stone/10 rounded-sm p-8"
                >
                    <h3 className="font-editorial text-2xl text-editorial-dark mb-4">Descripción Funcional</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 font-sans text-sm text-editorial-stone leading-relaxed">
                        <div>
                            <h4 className="font-bold text-editorial-dark mb-2">Accesos y Circulaciones</h4>
                            <p>
                                Se definen tres accesos diferenciados: paciente crítico con ingreso directo a reanimación, 
                                paciente ambulatorio a través de triage, y acceso de personal médico independiente. 
                                Los pasillos cumplen con anchos mínimos de 2.5m según normativa.
                            </p>
                        </div>
                        <div>
                            <h4 className="font-bold text-editorial-dark mb-2">Zonificación Clínica</h4>
                            <p>
                                Área de observación con cuartos aislados y antecámaras, zona de consultorios con 
                                estaciones de enfermería, salas especializadas (EDA, yesos), y servicios de apoyo 
                                (medicamentos, trabajo limpio/sucio, coordinación).
                            </p>
                        </div>
                    </div>
                </motion.div>

            </div>

            <ImageLightbox
                src={lightboxImage?.src || ''}
                alt={lightboxImage?.alt || ''}
                isOpen={!!lightboxImage}
                onClose={() => setLightboxImage(null)}
            />
        </section>
    );
}
