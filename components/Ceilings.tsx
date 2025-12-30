'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Download, Sun, Wind, FileText, ExternalLink } from 'lucide-react';
import ImageLightbox from './ImageLightbox';

export default function Ceilings() {
    const [lightboxImage, setLightboxImage] = useState<{ src: string; alt: string } | null>(null);
    return (
        <section className="w-full py-24 md:py-32 bg-editorial-concrete/5 px-6 md:px-12 lg:px-24 border-b border-editorial-stone/10">
            <div className="max-w-[1920px] mx-auto">

                {/* Header */}
                <div className="max-w-4xl mb-16">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        <span className="block font-sans text-xs uppercase tracking-[0.2em] text-editorial-stone mb-6">
                            Lámina 3 · Cielos e Iluminación
                        </span>
                        <h2 className="font-editorial text-4xl md:text-5xl text-editorial-dark mb-8 leading-tight">
                            Diseño de Cielorrasos <br /> 
                            <span className="italic text-editorial-stone">y Confort Lumínico</span>
                        </h2>
                        <p className="font-sans text-editorial-stone text-lg leading-relaxed font-light max-w-2xl">
                            Sistema de cielos falsos en panel yeso RH con acabado continuo, integración de iluminación 
                            LED indirecta, y sistema pergolado en Hall de Consultorios que aporta calidez y reduce el 
                            estrés visual en espacios pediátricos.
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
                            <h3 className="font-editorial text-xl text-editorial-dark">Diseño de Cielos e Iluminación</h3>
                            <p className="font-sans text-xs text-editorial-stone mt-1">Planta general de cielorrasos</p>
                        </div>
                        <a 
                            href="/resources/desgloce lamina 3-20251229T234633Z-1-001/desgloce lamina 3/ARQUITECTONICO LAMINA 3 DISEÑO CIELOS.pdf" 
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
                            src="/resources/imagenes pdfs/lamina3/principal1.jpg"
                            alt="Diseño de Cielos Principal"
                            className="w-full h-auto object-contain"
                        />
                    </div>
                </motion.div>

                {/* Main Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">

                    {/* Planta Diseño de Cielos */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="bg-white border border-editorial-stone/10 rounded-sm overflow-hidden"
                    >
                        <div className="p-6 border-b border-editorial-stone/10">
                            <h3 className="font-editorial text-xl text-editorial-dark">Planta Diseño de Cielos</h3>
                            <p className="font-sans text-xs text-editorial-stone mt-1">Layout general</p>
                        </div>
                        <div className="p-6 bg-editorial-concrete/5">
                            <div onClick={() => setLightboxImage({ src: '/resources/imagenes pdfs/lamina3/plantadiseñocielos.png', alt: 'Planta Diseño de Cielos - Layout general' })}>
                                <img
                                    src="/resources/imagenes pdfs/lamina3/plantadiseñocielos.png"
                                    alt="Planta Diseño de Cielos"
                                    className="w-full h-auto object-contain cursor-pointer hover:opacity-90 transition-opacity"
                                />
                            </div>
                        </div>
                    </motion.div>

                    {/* Planta Detalle de Cielo */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="bg-white border border-editorial-stone/10 rounded-sm overflow-hidden"
                    >
                        <div className="p-6 border-b border-editorial-stone/10">
                            <h3 className="font-editorial text-xl text-editorial-dark">Detalle Constructivo</h3>
                            <p className="font-sans text-xs text-editorial-stone mt-1">Sistema Pergolado</p>
                        </div>
                        <div className="p-6 bg-editorial-concrete/5">
                            <div onClick={() => setLightboxImage({ src: '/resources/imagenes pdfs/lamina3/plantaDetalleCielo.png', alt: 'Detalle Constructivo - Sistema Pergolado' })}>
                                <img
                                    src="/resources/imagenes pdfs/lamina3/plantaDetalleCielo.png"
                                    alt="Detalle de Cielo"
                                    className="w-full h-auto object-contain cursor-pointer hover:opacity-90 transition-opacity"
                                />
                            </div>
                        </div>
                    </motion.div>

                </div>

                {/* Renders de Espacios */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mb-12"
                >
                    <h3 className="font-editorial text-2xl text-editorial-dark mb-6">Visualizaciones de Iluminación</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="bg-white border border-editorial-stone/10 rounded-sm overflow-hidden">
                            <div onClick={() => setLightboxImage({ src: '/resources/imagenes pdfs/lamina3/HALL CONSULTORIOS.png', alt: 'Hall Consultorios - Sistema pergolado con iluminación natural' })}>
                                <img
                                    src="/resources/imagenes pdfs/lamina3/HALL CONSULTORIOS.png"
                                    alt="Hall Consultorios"
                                    className="w-full h-64 object-cover cursor-pointer hover:opacity-90 transition-opacity"
                                />
                            </div>
                            <div className="p-4">
                                <h4 className="font-sans font-semibold text-sm text-editorial-dark">Hall Consultorios</h4>
                                <p className="text-xs text-editorial-stone mt-1">Sistema pergolado con iluminación natural</p>
                            </div>
                        </div>
                        <div className="bg-white border border-editorial-stone/10 rounded-sm overflow-hidden">
                            <div onClick={() => setLightboxImage({ src: '/resources/imagenes pdfs/lamina3/PASILLO TRANSFER.png', alt: 'Pasillo Transfer - Iluminación LED integrada' })}>
                                <img
                                    src="/resources/imagenes pdfs/lamina3/PASILLO TRANSFER.png"
                                    alt="Pasillo Transfer"
                                    className="w-full h-64 object-cover cursor-pointer hover:opacity-90 transition-opacity"
                                />
                            </div>
                            <div className="p-4">
                                <h4 className="font-sans font-semibold text-sm text-editorial-dark">Pasillo Transfer</h4>
                                <p className="text-xs text-editorial-stone mt-1">Iluminación LED integrada</p>
                            </div>
                        </div>
                        <div className="bg-white border border-editorial-stone/10 rounded-sm overflow-hidden">
                            <div onClick={() => setLightboxImage({ src: '/resources/imagenes pdfs/lamina3/HALL SALA DE YESOS DIA ILUMINACION NATURAL.png', alt: 'Hall Yesos - Día - Iluminación natural controlada' })}>
                                <img
                                    src="/resources/imagenes pdfs/lamina3/HALL SALA DE YESOS DIA ILUMINACION NATURAL.png"
                                    alt="Hall Yesos Día"
                                    className="w-full h-64 object-cover cursor-pointer hover:opacity-90 transition-opacity"
                                />
                            </div>
                            <div className="p-4">
                                <h4 className="font-sans font-semibold text-sm text-editorial-dark">Hall Yesos - Día</h4>
                                <p className="text-xs text-editorial-stone mt-1">Iluminación natural controlada</p>
                            </div>
                        </div>
                        <div className="bg-white border border-editorial-stone/10 rounded-sm overflow-hidden">
                            <div onClick={() => setLightboxImage({ src: '/resources/imagenes pdfs/lamina3/HALL YESOS NOCHE ILUMINACION.png', alt: 'Hall Yesos - Noche - Iluminación artificial LED' })}>
                                <img
                                    src="/resources/imagenes pdfs/lamina3/HALL YESOS NOCHE ILUMINACION.png"
                                    alt="Hall Yesos Noche"
                                    className="w-full h-64 object-cover cursor-pointer hover:opacity-90 transition-opacity"
                                />
                            </div>
                            <div className="p-4">
                                <h4 className="font-sans font-semibold text-sm text-editorial-dark">Hall Yesos - Noche</h4>
                                <p className="text-xs text-editorial-stone mt-1">Iluminación artificial LED</p>
                            </div>
                        </div>
                    </div>
                </motion.div>

                {/* Technical Description */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="bg-white border border-editorial-stone/10 rounded-sm p-8"
                >
                    <h3 className="font-editorial text-2xl text-editorial-dark mb-4">Estrategias de Confort e Iluminación</h3>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 font-sans text-sm text-editorial-stone leading-relaxed">
                        <div>
                            <h4 className="font-bold text-editorial-dark mb-2">Iluminación Natural</h4>
                            <p>
                                Aprovechamiento de luz natural en halls y pasillos mediante ventanas altas y control 
                                de deslumbramiento con pergolado. Reducción del consumo energético diurno.
                            </p>
                        </div>
                        <div>
                            <h4 className="font-bold text-editorial-dark mb-2">Luz Artificial Zonificada</h4>
                            <p>
                                Sistemas independientes por área funcional: luz general en circulaciones, luz focal 
                                en estaciones de trabajo, y luz cálida indirecta en salas de espera infantil.
                            </p>
                        </div>
                        <div>
                            <h4 className="font-bold text-editorial-dark mb-2">Confort Acústico</h4>
                            <p>
                                Los cielorrasos continuos actúan como barrera acústica reduciendo reverberación. 
                                Panel yeso RH con propiedades de absorción sonora media.
                            </p>
                        </div>
                    </div>
                </motion.div>

            </div>

            {/* ImageLightbox Component */}
            <ImageLightbox 
                src={lightboxImage?.src || ''} 
                alt={lightboxImage?.alt || ''} 
                isOpen={!!lightboxImage} 
                onClose={() => setLightboxImage(null)} 
            />
        </section>
    );
}
