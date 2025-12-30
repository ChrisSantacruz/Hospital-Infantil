'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Calendar, Users, FileText, ExternalLink, Download } from 'lucide-react';
import ImageLightbox from './ImageLightbox';

const phases = [
    {
        number: 'Fase 1',
        name: 'Preparatoria',
        duration: '2 semanas',
        color: 'bg-red-500/10 border-red-500/30',
        textColor: 'text-red-700',
        activities: [
            'Señalización y cercado de áreas de trabajo',
            'Instalación de protecciones temporales',
            'Traslado de equipos médicos a zonas seguras',
            'Coordinación logística con personal hospitalario',
            'Preparación de rutas de evacuación alternativas'
        ]
    },
    {
        number: 'Fase 2',
        name: 'Demoliciones',
        duration: '3 semanas',
        color: 'bg-fuchsia-500/10 border-fuchsia-500/30',
        textColor: 'text-fuchsia-700',
        activities: [
            'Demolición controlada de tabiques no estructurales',
            'Retiro de cielos falsos existentes',
            'Remoción de acabados de piso',
            'Desmonte de mobiliario fijo obsoleto',
            'Gestión y disposición de escombros'
        ]
    },
    {
        number: 'Fase 3',
        name: 'Obra Gris',
        duration: '6 semanas',
        color: 'bg-blue-500/10 border-blue-500/30',
        textColor: 'text-blue-700',
        activities: [
            'Construcción de nuevos muros divisorios',
            'Instalaciones hidrosanitarias',
            'Instalaciones eléctricas y datos',
            'Instalación de sistemas HVAC',
            'Impermeabilizaciones y preparación de superficies'
        ]
    },
    {
        number: 'Fase 4',
        name: 'Acabados',
        duration: '4 semanas',
        color: 'bg-orange-500/10 border-orange-500/30',
        textColor: 'text-orange-700',
        activities: [
            'Instalación de pisos cerámicos y vinílicos',
            'Montaje de cielos falsos y sistema pergolado',
            'Pintura general de muros y acabados',
            'Instalación de carpintería y puertas',
            'Colocación de vidrios y divisiones'
        ]
    },
    {
        number: 'Fase 5',
        name: 'Equipamiento y Puesta en Marcha',
        duration: '2 semanas',
        color: 'bg-green-500/10 border-green-500/30',
        textColor: 'text-green-700',
        activities: [
            'Instalación de mobiliario clínico y administrativo',
            'Montaje de equipos médicos',
            'Pruebas de sistemas e instalaciones',
            'Limpieza general y desinfección',
            'Entrega y capacitación al personal'
        ]
    }
];

const pdfs = [
    {
        title: 'Lámina 5 - Fases de Ejecución',
        description: 'Planta arquitectónica con distribución de fases constructivas',
        path: '/resources/LAMINA 5 FASES DE EJECUCION DEL PROYECTO (1).pdf'
    }
];

export default function Execution() {
    const [lightboxImage, setLightboxImage] = useState<{ src: string; alt: string } | null>(null);
    
    return (
        <section className="w-full py-24 md:py-32 bg-white px-6 md:px-12 lg:px-24 border-b border-editorial-stone/10">
            <div className="max-w-[1920px] mx-auto">

                {/* Header */}
                <div className="max-w-4xl mb-16">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        <span className="block font-sans text-xs uppercase tracking-[0.2em] text-editorial-stone mb-6">
                            Lámina 5 · Planificación
                        </span>
                        <h2 className="font-editorial text-4xl md:text-5xl text-editorial-dark mb-8 leading-tight">
                            Fases de Ejecución <br /> 
                            <span className="italic text-editorial-stone">del Proyecto</span>
                        </h2>
                        <p className="font-sans text-editorial-stone text-lg leading-relaxed font-light max-w-2xl">
                            Cronograma de obra estructurado en 5 fases consecutivas que totalizan 17 semanas de ejecución. 
                            Cada fase responde a la lógica constructiva, minimizando interferencias con las operaciones del hospital 
                            y garantizando el cumplimiento de estándares de bioseguridad.
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
                            <h3 className="font-editorial text-xl text-editorial-dark">Fases de Ejecución del Proyecto</h3>
                            <p className="font-sans text-xs text-editorial-stone mt-1">Planificación temporal y distribución de actividades</p>
                        </div>
                        <a 
                            href="/resources/imagenes pdfs/lamina5/LAMINA 5 FASES DE EJECUCION DEL PROYECTO (1).pdf" 
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
                            src="/resources/imagenes pdfs/lamina5/principal1.jpg"
                            alt="Fases de Ejecución Principal"
                            className="w-full h-auto object-contain"
                        />
                    </div>
                </motion.div>

                {/* Visualización de Fases */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mb-12"
                >
                    <h3 className="font-editorial text-2xl text-editorial-dark mb-6">Distribución por Fases</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        <div className="bg-white border border-editorial-stone/10 rounded-sm overflow-hidden">
                            <div onClick={() => setLightboxImage({ src: '/resources/imagenes pdfs/lamina5/fase1.png', alt: 'Fase 1 - Preparatoria - 2 semanas' })}>
                                <img
                                    src="/resources/imagenes pdfs/lamina5/fase1.png"
                                    alt="Fase 1"
                                    className="w-full h-48 object-cover cursor-pointer hover:opacity-90 transition-opacity"
                                />
                            </div>
                            <div className="p-4">
                                <h4 className="font-sans font-semibold text-sm text-editorial-dark">Fase 1 - Preparatoria</h4>
                                <p className="text-xs text-editorial-stone mt-1">2 semanas</p>
                            </div>
                        </div>
                        <div className="bg-white border border-editorial-stone/10 rounded-sm overflow-hidden">
                            <div onClick={() => setLightboxImage({ src: '/resources/imagenes pdfs/lamina5/fase2.png', alt: 'Fase 2 - Demoliciones - 3 semanas' })}>
                                <img
                                    src="/resources/imagenes pdfs/lamina5/fase2.png"
                                    alt="Fase 2"
                                    className="w-full h-48 object-cover cursor-pointer hover:opacity-90 transition-opacity"
                                />
                            </div>
                            <div className="p-4">
                                <h4 className="font-sans font-semibold text-sm text-editorial-dark">Fase 2 - Demoliciones</h4>
                                <p className="text-xs text-editorial-stone mt-1">3 semanas</p>
                            </div>
                        </div>
                        <div className="bg-white border border-editorial-stone/10 rounded-sm overflow-hidden">
                            <div onClick={() => setLightboxImage({ src: '/resources/imagenes pdfs/lamina5/fase3.png', alt: 'Fase 3 - Obra Gris - 6 semanas' })}>
                                <img
                                    src="/resources/imagenes pdfs/lamina5/fase3.png"
                                    alt="Fase 3"
                                    className="w-full h-48 object-cover cursor-pointer hover:opacity-90 transition-opacity"
                                />
                            </div>
                            <div className="p-4">
                                <h4 className="font-sans font-semibold text-sm text-editorial-dark">Fase 3 - Obra Gris</h4>
                                <p className="text-xs text-editorial-stone mt-1">6 semanas</p>
                            </div>
                        </div>
                        <div className="bg-white border border-editorial-stone/10 rounded-sm overflow-hidden">
                            <div onClick={() => setLightboxImage({ src: '/resources/imagenes pdfs/lamina5/fase4.png', alt: 'Fase 4 - Acabados - 4 semanas + 2 equipamiento' })}>
                                <img
                                    src="/resources/imagenes pdfs/lamina5/fase4.png"
                                    alt="Fase 4"
                                    className="w-full h-48 object-cover cursor-pointer hover:opacity-90 transition-opacity"
                                />
                            </div>
                            <div className="p-4">
                                <h4 className="font-sans font-semibold text-sm text-editorial-dark">Fase 4 - Acabados</h4>
                                <p className="text-xs text-editorial-stone mt-1">4 semanas + 2 equipamiento</p>
                            </div>
                        </div>
                    </div>
                </motion.div>

                {/* Phases Timeline */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 mb-16">
                    {phases.map((phase, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.1 }}
                            className={`border rounded-sm p-6 ${phase.color} hover:shadow-md transition-shadow`}
                        >
                            <div className="flex items-center gap-3 mb-4">
                                <Calendar className={`w-5 h-5 ${phase.textColor}`} />
                                <span className={`font-editorial text-sm ${phase.textColor}`}>{phase.number}</span>
                            </div>
                            <h3 className="font-editorial text-xl text-editorial-dark mb-2">{phase.name}</h3>
                            <p className="font-sans text-xs uppercase tracking-wider text-editorial-stone/60 mb-4">
                                {phase.duration}
                            </p>
                            <ul className="space-y-2">
                                {phase.activities.map((activity, i) => (
                                    <li key={i} className="text-xs text-editorial-stone leading-relaxed flex items-start gap-2">
                                        <span className="text-editorial-stone/40 mt-1">•</span>
                                        <span>{activity}</span>
                                    </li>
                                ))}
                            </ul>
                        </motion.div>
                    ))}
                </div>

                {/* Key Information Grid */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16"
                >
                    <div className="bg-editorial-concrete/5 border border-editorial-stone/10 rounded-sm p-6">
                        <Calendar className="w-6 h-6 text-editorial-dark mb-4" />
                        <h3 className="font-editorial text-xl text-editorial-dark mb-2">Duración Total</h3>
                        <p className="font-sans text-3xl font-light text-editorial-stone mb-2">17 semanas</p>
                        <p className="text-xs text-editorial-stone/60 uppercase tracking-wider">Aprox. 4 meses</p>
                    </div>
                    <div className="bg-editorial-concrete/5 border border-editorial-stone/10 rounded-sm p-6">
                        <Users className="w-6 h-6 text-editorial-dark mb-4" />
                        <h3 className="font-editorial text-xl text-editorial-dark mb-2">Coordinación</h3>
                        <p className="text-sm text-editorial-stone leading-relaxed">
                            Trabajo coordinado con administración hospitalaria para garantizar atención continua
                        </p>
                    </div>
                    <div className="bg-editorial-concrete/5 border border-editorial-stone/10 rounded-sm p-6">
                        <FileText className="w-6 h-6 text-editorial-dark mb-4" />
                        <h3 className="font-editorial text-xl text-editorial-dark mb-2">Metodología</h3>
                        <p className="text-sm text-editorial-stone leading-relaxed">
                            Ejecución sectorizada por áreas, con protección de zonas operativas activas
                        </p>
                    </div>
                </motion.div>

                {/* Important Notes */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="bg-editorial-dark/5 border border-editorial-dark/10 rounded-sm p-8 mb-16"
                >
                    <h3 className="font-editorial text-2xl text-editorial-dark mb-6">
                        Consideraciones Importantes
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                            <h4 className="font-sans text-sm uppercase tracking-wider text-editorial-dark mb-3">
                                Durante la Ejecución
                            </h4>
                            <ul className="space-y-2 text-sm text-editorial-stone">
                                <li className="flex items-start gap-2">
                                    <span className="text-editorial-stone/40 mt-1">•</span>
                                    <span>Control estricto de polvo, ruido y vibraciones</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="text-editorial-stone/40 mt-1">•</span>
                                    <span>Protección de áreas colindantes operativas</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="text-editorial-stone/40 mt-1">•</span>
                                    <span>Accesos independientes para obra y pacientes</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="text-editorial-stone/40 mt-1">•</span>
                                    <span>Trabajo en horarios coordinados con el hospital</span>
                                </li>
                            </ul>
                        </div>
                        <div>
                            <h4 className="font-sans text-sm uppercase tracking-wider text-editorial-dark mb-3">
                                Seguridad y Logística
                            </h4>
                            <ul className="space-y-2 text-sm text-editorial-stone">
                                <li className="flex items-start gap-2">
                                    <span className="text-editorial-stone/40 mt-1">•</span>
                                    <span>Señalización clara de áreas en construcción</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="text-editorial-stone/40 mt-1">•</span>
                                    <span>Rutas de evacuación alternativas activas</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="text-editorial-stone/40 mt-1">•</span>
                                    <span>Gestión adecuada de residuos de construcción</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="text-editorial-stone/40 mt-1">•</span>
                                    <span>Protocolos de bioseguridad en ambiente hospitalario</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </motion.div>

                {/* PDF Downloads */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                >
                    <h3 className="font-editorial text-2xl text-editorial-dark mb-6">
                        Documentación Técnica
                    </h3>
                    <div className="grid grid-cols-1 gap-4">
                        {pdfs.map((pdf, idx) => (
                            <a
                                key={idx}
                                href={pdf.path}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="group flex items-center justify-between bg-white border border-editorial-stone/20 hover:border-editorial-dark/40 rounded-sm p-6 transition-all"
                            >
                                <div className="flex items-center gap-4">
                                    <div className="w-12 h-12 bg-editorial-dark/5 rounded flex items-center justify-center group-hover:bg-editorial-dark/10 transition-colors">
                                        <FileText className="w-6 h-6 text-editorial-dark" />
                                    </div>
                                    <div>
                                        <h4 className="font-editorial text-lg text-editorial-dark mb-1">{pdf.title}</h4>
                                        <p className="text-xs text-editorial-stone">{pdf.description}</p>
                                    </div>
                                </div>
                                <ExternalLink className="w-5 h-5 text-editorial-stone group-hover:text-editorial-dark transition-colors" />
                            </a>
                        ))}
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
