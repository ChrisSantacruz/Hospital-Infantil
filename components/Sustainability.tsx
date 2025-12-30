'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Download, Wind, Sun, Droplets, Leaf, FileText, ExternalLink } from 'lucide-react';
import ImageLightbox from './ImageLightbox';

const sustainabilityFeatures = [
    {
        icon: Wind,
        title: "Ventilación Natural Cruzada",
        description: "Aprovechamiento de vientos predominantes Noreste para circulación de aire fresco en pasillos y zonas de espera."
    },
    {
        icon: Sun,
        title: "Iluminación Natural Controlada",
        description: "Ventanas altas con protección solar mediante pergolado, reducción de carga térmica y consumo energético diurno."
    },
    {
        icon: Droplets,
        title: "Gestión Eficiente del Agua",
        description: "Aparatos sanitarios de bajo consumo, grifería temporizada en baños públicos, y sistemas de recolección para áreas verdes."
    },
    {
        icon: Leaf,
        title: "Materiales Sostenibles",
        description: "Selección de materiales con bajo impacto ambiental, certificaciones de calidad, y posibilidad de reciclaje al final de su vida útil."
    }
];

export default function Sustainability() {
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
                            Lámina 4 · Sustentabilidad
                        </span>
                        <h2 className="font-editorial text-4xl md:text-5xl text-editorial-dark mb-8 leading-tight">
                            Estrategias Pasivas <br /> 
                            <span className="italic text-editorial-stone">y Diseño Bioclimático</span>
                        </h2>
                        <p className="font-sans text-editorial-stone text-lg leading-relaxed font-light max-w-2xl">
                            Integración de criterios sostenibles que optimizan el confort interior mediante estrategias 
                            pasivas de ventilación e iluminación natural, reduciendo el consumo energético y mejorando 
                            la calidad ambiental de los espacios de atención pediátrica.
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
                            <h3 className="font-editorial text-xl text-editorial-dark">Estrategias de Sustentabilidad</h3>
                            <p className="font-sans text-xs text-editorial-stone mt-1">Diseño bioclimático y eficiencia energética</p>
                        </div>
                        <a 
                            href="/resources/desgloce lamina 4-20251229T234539Z-1-001/desgloce lamina 4/ARQUITECTONICO Lamina 4 sustentabilidad.pdf" 
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
                            src="/resources/imagenes pdfs/lamina4/principal1.jpg"
                            alt="Sustentabilidad Principal"
                            className="w-full h-auto object-contain"
                        />
                    </div>
                </motion.div>

                {/* Diagrama Medio Ambiental y Render */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="bg-white border border-editorial-stone/10 rounded-sm overflow-hidden"
                    >
                        <div className="p-6 border-b border-editorial-stone/10">
                            <h3 className="font-editorial text-xl text-editorial-dark">Diagrama Medio Ambiental</h3>
                            <p className="font-sans text-xs text-editorial-stone mt-1">Análisis climático</p>
                        </div>
                        <div className="p-6 bg-editorial-concrete/5">
                            <div onClick={() => setLightboxImage({ src: '/resources/imagenes pdfs/lamina4/diagramamedioambiente.png', alt: 'Diagrama Medio Ambiental - Análisis climático' })}>
                                <img
                                    src="/resources/imagenes pdfs/lamina4/diagramamedioambiente.png"
                                    alt="Diagrama Medio Ambiental"
                                    className="w-full h-auto object-contain cursor-pointer hover:opacity-90 transition-opacity"
                                />
                            </div>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="bg-white border border-editorial-stone/10 rounded-sm overflow-hidden"
                    >
                        <div className="p-6 border-b border-editorial-stone/10">
                            <h3 className="font-editorial text-xl text-editorial-dark">Flujos de Aire</h3>
                            <p className="font-sans text-xs text-editorial-stone mt-1">Ventilación natural cruzada</p>
                        </div>
                        <div className="p-6 bg-editorial-concrete/5">
                            <div onClick={() => setLightboxImage({ src: '/resources/imagenes pdfs/lamina4/RENDER FLUJOS DE AIRES.png', alt: 'Render Flujos de Aire - Ventilación natural cruzada' })}>
                                <img
                                    src="/resources/imagenes pdfs/lamina4/RENDER FLUJOS DE AIRES.png"
                                    alt="Render Flujos de Aire"
                                    className="w-full h-auto object-cover rounded-sm cursor-pointer hover:opacity-90 transition-opacity"
                                />
                            </div>
                        </div>
                    </motion.div>
                </div>

                {/* Secciones */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mb-12"
                >
                    <h3 className="font-editorial text-2xl text-editorial-dark mb-6">Secciones Arquitectónicas</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="bg-white border border-editorial-stone/10 rounded-sm overflow-hidden">
                            <div className="p-4 border-b border-editorial-stone/10">
                                <h4 className="font-sans font-semibold text-sm text-editorial-dark">Sección A-A</h4>
                                <p className="text-xs text-editorial-stone mt-1">Esquema de ventilación natural</p>
                            </div>
                            <div className="p-4 bg-editorial-concrete/5">
                                <div onClick={() => setLightboxImage({ src: '/resources/imagenes pdfs/lamina4/seccionaa.jpg', alt: 'Sección A-A - Esquema de ventilación natural' })}>
                                    <img
                                        src="/resources/imagenes pdfs/lamina4/seccionaa.jpg"
                                        alt="Sección A-A"
                                        className="w-full h-auto object-contain cursor-pointer hover:opacity-90 transition-opacity"
                                    />
                                </div>
                            </div>
                        </div>
                        <div className="bg-white border border-editorial-stone/10 rounded-sm overflow-hidden">
                            <div className="p-4 border-b border-editorial-stone/10">
                                <h4 className="font-sans font-semibold text-sm text-editorial-dark">Sección B-B</h4>
                                <p className="text-xs text-editorial-stone mt-1">Chimenea térmica</p>
                            </div>
                            <div className="p-4 bg-editorial-concrete/5">
                                <div onClick={() => setLightboxImage({ src: '/resources/imagenes pdfs/lamina4/seccionbb.png', alt: 'Sección B-B - Chimenea térmica' })}>
                                    <img
                                        src="/resources/imagenes pdfs/lamina4/seccionbb.png"
                                        alt="Sección B-B"
                                        className="w-full h-auto object-contain cursor-pointer hover:opacity-90 transition-opacity"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </motion.div>

                {/* Planta Arquitectónica */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mb-12 bg-white border border-editorial-stone/10 rounded-sm overflow-hidden"
                >
                    <div className="p-6 border-b border-editorial-stone/10">
                        <h3 className="font-editorial text-xl text-editorial-dark">Planta Arquitectónica Sustentabilidad</h3>
                        <p className="font-sans text-xs text-editorial-stone mt-1">Distribución de estrategias pasivas</p>
                    </div>
                    <div className="p-8 bg-editorial-concrete/5">
                        <div onClick={() => setLightboxImage({ src: '/resources/imagenes pdfs/lamina4/plantaarc.jpg', alt: 'Planta Arquitectónica Sustentabilidad - Distribución de estrategias pasivas' })}>
                            <img
                                src="/resources/imagenes pdfs/lamina4/plantaarc.jpg"
                                alt="Planta Arquitectónica Sustentabilidad"
                                className="w-full h-auto object-contain cursor-pointer hover:opacity-90 transition-opacity"
                            />
                        </div>
                    </div>
                </motion.div>

                {/* Environmental Diagram */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mb-12 bg-editorial-concrete/5 border border-editorial-stone/10 rounded-sm overflow-hidden hidden"
                >
                    <div className="p-6 border-b border-editorial-stone/10 flex justify-between items-center">
                        <div>
                            <h3 className="font-editorial text-xl text-editorial-dark">Diagrama Medio Ambiental</h3>
                            <p className="font-sans text-xs text-editorial-stone mt-1">Análisis Climático - Pasto, Nariño, Colombia</p>
                        </div>
                        <a 
                            href="/resources/desgloce lamina 4-20251229T234539Z-1-001/desgloce lamina 4/diagrama medioi ambietal.pdf" 
                            target="_blank"
                            className="flex items-center gap-2 text-xs uppercase tracking-widest text-editorial-dark hover:opacity-60 transition-opacity"
                        >
                            <Download className="w-4 h-4" />
                            PDF
                        </a>
                    </div>
                    <div className="p-8 bg-white flex items-center justify-center">
                        <div className="w-full max-w-3xl">
                            <div className="relative aspect-video bg-editorial-concrete/10 rounded-sm flex items-center justify-center">
                                <Wind className="w-24 h-24 text-editorial-stone/20" />
                            </div>
                            <p className="font-sans text-xs text-editorial-stone text-center mt-4">
                                <strong>Vientos Predominantes:</strong> Dirección Noreste | 
                                <strong> Orientación:</strong> Fachada de ventilación natural hacia vientos dominantes
                            </p>
                        </div>
                    </div>
                </motion.div>

                {/* Features Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
                    {sustainabilityFeatures.map((feature, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.1 }}
                            className="bg-white border border-editorial-stone/10 rounded-sm p-6 hover:border-editorial-dark/20 transition-colors"
                        >
                            <div className="flex items-start gap-4">
                                <div className="w-12 h-12 rounded-full bg-editorial-dark/5 flex items-center justify-center flex-shrink-0">
                                    <feature.icon className="w-6 h-6 text-editorial-dark" />
                                </div>
                                <div>
                                    <h3 className="font-editorial text-lg text-editorial-dark mb-2">{feature.title}</h3>
                                    <p className="font-sans text-sm text-editorial-stone leading-relaxed">{feature.description}</p>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Sustainable Criteria */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="bg-white border border-editorial-stone/10 rounded-sm p-8"
                >
                    <h3 className="font-editorial text-2xl text-editorial-dark mb-4">Criterios Sostenibles Implementados</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 font-sans text-sm text-editorial-stone leading-relaxed">
                        <div>
                            <h4 className="font-bold text-editorial-dark mb-2">Estrategias Pasivas</h4>
                            <ul className="space-y-2 list-disc list-inside">
                                <li>Ventilación cruzada en espacios de circulación pública</li>
                                <li>Control solar mediante pergolado y aleros</li>
                                <li>Chimeneas térmicas para extracción de aire viciado</li>
                                <li>Optimización de orientación según vientos predominantes</li>
                            </ul>
                        </div>
                        <div>
                            <h4 className="font-bold text-editorial-dark mb-2">Eficiencia Energética</h4>
                            <ul className="space-y-2 list-disc list-inside">
                                <li>Iluminación LED de bajo consumo (≤ 10W/m²)</li>
                                <li>Sensores de presencia en áreas de servicio</li>
                                <li>Aprovechamiento de luz natural diurna</li>
                                <li>Aislamiento térmico en muros y cubiertas</li>
                            </ul>
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
