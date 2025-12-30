'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { AlertTriangle, FileText, ExternalLink, Shield, Trash2, Download } from 'lucide-react';
import ImageLightbox from './ImageLightbox';

const demolitionAreas = [
    {
        phase: 'Fase 1',
        color: 'text-red-600',
        bgColor: 'bg-red-500/10',
        description: 'Áreas administrativas y de apoyo no críticas para atención directa'
    },
    {
        phase: 'Fase 2',
        color: 'text-fuchsia-600',
        bgColor: 'bg-fuchsia-500/10',
        description: 'Consultorios y salas de observación con ejecución controlada'
    },
    {
        phase: 'Fase 3',
        color: 'text-blue-600',
        bgColor: 'bg-blue-500/10',
        description: 'Áreas de circulación y halls con accesos alternativos garantizados'
    },
    {
        phase: 'Fase 4',
        color: 'text-orange-600',
        bgColor: 'bg-orange-500/10',
        description: 'Demoliciones complementarias y ajustes finales'
    }
];

const safetyProtocols = [
    'Señalización permanente de áreas en intervención',
    'Control de polvo mediante barreras y aspersión controlada',
    'Horarios de trabajo coordinados con el hospital',
    'Rutas de evacuación alternativas activas',
    'Protección de áreas colindantes operativas',
    'Personal capacitado en protocolos hospitalarios',
    'Gestión de residuos según normativa ambiental',
    'Supervisión continua de estructuras existentes'
];

const demolitionScope = [
    { item: 'Tabiques interiores no estructurales', status: 'Incluido' },
    { item: 'Divisiones arquitectónicas obsoletas', status: 'Incluido' },
    { item: 'Cielos falsos existentes', status: 'Incluido' },
    { item: 'Acabados de piso deteriorados', status: 'Incluido' },
    { item: 'Mobiliario fijo incompatible', status: 'Incluido' },
    { item: 'Elementos estructurales', status: 'Excluido' },
    { item: 'Columnas, vigas, losas', status: 'Conservado' },
    { item: 'Núcleos de circulación vertical', status: 'Conservado' }
];

const pdfs = [
    {
        title: 'Lámina 6 - Planta de Demoliciones',
        description: 'Plano arquitectónico indicando elementos a demoler y conservar',
        path: '/resources/LAMINA 6 DEMOLICIOINES.pdf'
    }
];

export default function Demolitions() {
    const [lightboxImage, setLightboxImage] = useState<{ src: string; alt: string } | null>(null);
    return (
        <section className="w-full py-16 md:py-20 bg-editorial-concrete/5 px-6 md:px-12 lg:px-24 border-b border-editorial-stone/10">
            <div className="max-w-[1920px] mx-auto">

                {/* Header */}
                <div className="max-w-4xl mb-16">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        <span className="block font-sans text-xs uppercase tracking-[0.2em] text-editorial-stone mb-6">
                            Lámina 6 · Demoliciones
                        </span>
                        <h2 className="font-editorial text-4xl md:text-5xl text-editorial-dark mb-8 leading-tight">
                            Planta de Demoliciones <br />
                            <span className="italic text-editorial-stone">y Alcance de Intervención</span>
                        </h2>
                        <p className="font-sans text-editorial-stone text-lg leading-relaxed font-light max-w-2xl">
                            Identificación precisa de elementos arquitectónicos a demoler, con ejecución sectorizada 
                            que garantiza la estabilidad estructural y la operación continua del servicio de urgencias.
                        </p>
                    </motion.div>
                </div>

                {/* Imagen Principal de la Lámina */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mb-12 bg-white border border-editorial-stone/10 rounded-sm overflow-hidden"
                >
                    <div className="p-6 border-b border-editorial-stone/10 flex justify-between items-center">
                        <div>
                            <h3 className="font-editorial text-xl text-editorial-dark">Planta de Demoliciones</h3>
                            <p className="font-sans text-xs text-editorial-stone mt-1">Elementos a demoler y conservar</p>
                        </div>
                        <a 
                            href="/resources/imagenes pdfs/lamina6/LAMINA 6 DEMOLICIOINES.pdf" 
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-2 text-xs uppercase tracking-widest text-editorial-dark hover:opacity-60 transition-opacity"
                        >
                            <Download className="w-4 h-4" />
                            Descargar PDF
                        </a>
                    </div>
                    <div className="p-8 flex items-center justify-center bg-editorial-concrete/5">
                        <img
                            src="/resources/imagenes pdfs/lamina6/principal1.jpg"
                            alt="Planta de Demoliciones Principal"
                            className="w-full h-auto object-contain"
                        />
                    </div>
                </motion.div>

                {/* Fases y Propuesta */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="bg-white border border-editorial-stone/10 rounded-sm overflow-hidden"
                    >
                        <div className="p-6 border-b border-editorial-stone/10">
                            <h3 className="font-editorial text-xl text-editorial-dark">Fases de Demolición</h3>
                            <p className="font-sans text-xs text-editorial-stone mt-1">Distribución por sectores</p>
                        </div>
                        <div className="p-6 bg-editorial-concrete/5">
                            <div onClick={() => setLightboxImage({ src: '/resources/imagenes pdfs/lamina6/fasesdedemolicion.jpg', alt: 'Fases de Demolición - Distribución por sectores' })}>
                                <img
                                    src="/resources/imagenes pdfs/lamina6/fasesdedemolicion.jpg"
                                    alt="Fases de Demolición"
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
                            <h3 className="font-editorial text-xl text-editorial-dark">Planta Arquitectónica Propuesta</h3>
                            <p className="font-sans text-xs text-editorial-stone mt-1">Estado final post-demolición</p>
                        </div>
                        <div className="p-6 bg-editorial-concrete/5">
                            <div onClick={() => setLightboxImage({ src: '/resources/imagenes pdfs/lamina6/plantaarquitectonicapropuesta.jpg', alt: 'Planta Arquitectónica Propuesta - Estado final post-demolición' })}>
                                <img
                                    src="/resources/imagenes pdfs/lamina6/plantaarquitectonicapropuesta.jpg"
                                    alt="Planta Arquitectónica Propuesta"
                                    className="w-full h-auto object-contain cursor-pointer hover:opacity-90 transition-opacity"
                                />
                            </div>
                        </div>
                    </motion.div>
                </div>

                {/* Demolition Phases */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
                    {demolitionAreas.map((area, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.1 }}
                            className={`${area.bgColor} border border-editorial-stone/10 rounded-sm p-6`}
                        >
                            <Trash2 className={`w-6 h-6 ${area.color} mb-4`} />
                            <h3 className={`font-editorial text-xl ${area.color} mb-3`}>{area.phase}</h3>
                            <p className="text-sm text-editorial-stone leading-relaxed">{area.description}</p>
                        </motion.div>
                    ))}
                </div>

                {/* Scope of Work */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="bg-white border border-editorial-stone/10 rounded-sm p-8 mb-16"
                >
                    <h3 className="font-editorial text-2xl text-editorial-dark mb-6">
                        Alcance de Demoliciones
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-3">
                        {demolitionScope.map((item, idx) => (
                            <div key={idx} className="flex items-center justify-between py-2 border-b border-editorial-stone/10">
                                <span className="text-sm text-editorial-stone">{item.item}</span>
                                <span className={`text-xs uppercase tracking-wider px-3 py-1 rounded-full ${
                                    item.status === 'Incluido' ? 'bg-red-500/10 text-red-700' :
                                    item.status === 'Conservado' ? 'bg-green-500/10 text-green-700' :
                                    'bg-gray-500/10 text-gray-700'
                                }`}>
                                    {item.status}
                                </span>
                            </div>
                        ))}
                    </div>
                </motion.div>

                {/* Safety Protocols */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="bg-editorial-dark/5 border border-editorial-dark/10 rounded-sm p-8 mb-16"
                >
                    <div className="flex items-center gap-3 mb-6">
                        <Shield className="w-6 h-6 text-editorial-dark" />
                        <h3 className="font-editorial text-2xl text-editorial-dark">
                            Protocolos de Seguridad
                        </h3>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {safetyProtocols.map((protocol, idx) => (
                            <div key={idx} className="flex items-start gap-3">
                                <div className="w-6 h-6 rounded-full bg-editorial-dark/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                                    <span className="text-xs text-editorial-dark font-bold">{idx + 1}</span>
                                </div>
                                <p className="text-sm text-editorial-stone leading-relaxed">{protocol}</p>
                            </div>
                        ))}
                    </div>
                </motion.div>

                {/* Important Warning */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="bg-yellow-500/10 border border-yellow-500/30 rounded-sm p-6 mb-16"
                >
                    <div className="flex items-start gap-4">
                        <AlertTriangle className="w-6 h-6 text-yellow-700 flex-shrink-0 mt-1" />
                        <div>
                            <h3 className="font-editorial text-lg text-yellow-900 mb-2">Nota Importante</h3>
                            <p className="text-sm text-yellow-800 leading-relaxed mb-4">
                                Durante todas las fases de demolición se garantizará la continuidad operativa del 
                                Servicio de Urgencias, mediante la sectorización de áreas y la coordinación permanente 
                                con la administración hospitalaria.
                            </p>
                            <p className="text-sm text-yellow-800 leading-relaxed">
                                <strong>No se contempla demolición de elementos estructurales.</strong> Todos los elementos 
                                portantes, columnas, vigas, losas y núcleos de estabilidad se conservan en su totalidad.
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
