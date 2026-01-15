'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Download, Droplets, Waves, Wind, Wrench } from 'lucide-react';
import ImageLightbox from './ImageLightbox';

const hydraulicPlans = [
    {
        id: 1,
        title: "Instalaciones Hidráulicas",
        subtitle: "Red de Agua Potable",
        description: "Sistema completo de distribución de agua potable con tubería PVC RDE 13.5. Incluye red principal con diámetros de 3/4\" a 1/2\", válvulas de corte, llaves de paso y conexiones a todos los puntos de consumo sanitario.",
        image: "/resources/imagenes pdfs/Hidraulicas1/Hidraulica1.jpg",
        pdf: "/resources/imagenes pdfs/Hidraulicas1/INSTALACIONES HIDRAULICAS - 1.0-SEG-Model.pdf",
        icon: Droplets,
        specs: [
            { label: "Tubería Principal", value: "PVC RDE 13.5 Ø3/4\"" },
            { label: "Ramales", value: "PVC Ø1/2\"" },
            { label: "Longitud Total Ø3/4\"", value: "~12.89 m" },
            { label: "Válvulas", value: "Compuerta y anti-fraude" },
            { label: "Accesorios", value: "Tees, codos, bujes PVC" }
        ]
    },
    {
        id: 2,
        title: "Instalaciones Hidráulicas - Detallado",
        subtitle: "Red Extendida y Conexiones",
        description: "Plano detallado de la red hidráulica con todas las conexiones sanitarias. Muestra distribución de lavamanos (LM), inodoros (WC), sifones de piso (SP) y lavaplatos (LP) con sus respectivas bajadas de agua fría y caliente.",
        image: "/resources/imagenes pdfs/Hidraulicas2/Hidraulicas2.jpg",
        pdf: "/resources/imagenes pdfs/Hidraulicas2/INSTALACIONES HIDRAULICAS - 1.1-SEG-Model.pdf",
        icon: Waves,
        specs: [
            { label: "Puntos Lavamanos", value: "LM - múltiples" },
            { label: "Puntos Inodoros", value: "WC - múltiples" },
            { label: "Sifones Piso", value: "SP - drenaje áreas" },
            { label: "Sistema Caliente", value: "Buje roscado 2\"×1\"" },
            { label: "Detalles", value: "Válvulas universales Ø1/2\"" }
        ]
    },
    {
        id: 3,
        title: "Instalaciones Sanitarias",
        subtitle: "Red de Desagües y Evacuación",
        description: "Sistema completo de evacuación de aguas negras y lluvias. Red de tubería PVC Ø4\" para desagües principales, Ø2\" para ramales sanitarios y Ø6\" para colectores. Incluye bajantes (BAN), cajas de inspección (C.I.) y ventilación.",
        image: "/resources/imagenes pdfs/Hidraulicas3/hidraulicas3.jpg",
        pdf: "/resources/imagenes pdfs/Hidraulicas3/INSTALACIONES SANITARIAS HI - 1.0 SEG-Model.pdf",
        icon: Wind,
        specs: [
            { label: "Desagües Principales", value: "PVC Ø4\"" },
            { label: "Ramales Sanitarios", value: "PVC Ø2\"" },
            { label: "Colectores", value: "PVC Ø6\" (hasta 16.54m)" },
            { label: "Bajantes Aguas Negras", value: "BAN Ø4\"" },
            { label: "Bajantes Aguas Lluvias", value: "BALL Ø4\"" },
            { label: "Cajas Inspección", value: "0.90×0.90 m y 0.74×0.74 m" }
        ]
    },
    {
        id: 4,
        title: "Instalaciones Sanitarias - Simplificado",
        subtitle: "Planta General de Desagües",
        description: "Vista simplificada del sistema sanitario mostrando la distribución de puntos de desagüe y su conexión a la red principal. Incluye detalles constructivos de cajas de inspección, bajantes de agua lluvia y conexiones críticas.",
        image: "/resources/imagenes pdfs/Hidraulicas4/Hidraulicas4.jpg",
        pdf: "/resources/imagenes pdfs/Hidraulicas4/INSTALACIONES SANITARIAS HI - 1.1 SEG-Model.pdf",
        icon: Wrench,
        specs: [
            { label: "Red Principal", value: "Ø4\" PVC con pendiente 2%" },
            { label: "Bajantes", value: "BAN/BALL conectadas" },
            { label: "Ventilación", value: "VEN Ø3\"" },
            { label: "Detalles", value: "Yee, tee, codos 90°/45°" },
            { label: "Trampa Yesos", value: "Conexión especializada" }
        ]
    }
];

export default function HydraulicSystems() {
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
                            Láminas 13-16 · Diseño Hidráulico y Sanitario
                        </span>
                        <h2 className="font-editorial text-4xl md:text-5xl text-editorial-dark mb-8 leading-tight">
                            Sistemas Hidráulicos <br />
                            <span className="italic text-editorial-stone">Infraestructura de Agua y Saneamiento</span>
                        </h2>
                        <p className="font-sans text-editorial-stone text-lg leading-relaxed font-light max-w-2xl">
                            El diseño hidráulico y sanitario integra redes de agua potable, evacuación de aguas servidas 
                            y pluviales conforme al Reglamento Técnico del Sector de Agua Potable y Saneamiento Básico (RAS). 
                            Todos los sistemas garantizan funcionalidad hospitalaria y mantenimiento óptimo.
                        </p>
                    </motion.div>
                </div>

                {/* Technical Notes */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mb-16 bg-editorial-concrete/5 border border-editorial-stone/10 rounded-sm p-8"
                >
                    <h3 className="font-editorial text-xl text-editorial-dark mb-6">Especificaciones Técnicas Generales</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 font-sans text-sm text-editorial-stone">
                        <div className="space-y-3">
                            <p><span className="font-medium text-editorial-dark">• Tuberías Hidráulicas:</span> PVC RDE 13.5 Ø3/4\" y Ø1/2\"</p>
                            <p><span className="font-medium text-editorial-dark">• Desagües Principales:</span> PVC Ø4\" con pendiente mínima 2%</p>
                            <p><span className="font-medium text-editorial-dark">• Ramales Sanitarios:</span> PVC Ø2\" para conexiones individuales</p>
                        </div>
                        <div className="space-y-3">
                            <p><span className="font-medium text-editorial-dark">• Colectores:</span> PVC Ø6\" para evacuación principal</p>
                            <p><span className="font-medium text-editorial-dark">• Cajas de Inspección:</span> 0.90×0.90m y 0.74×0.74m con tapa H.G.</p>
                            <p><span className="font-medium text-editorial-dark">• Ingeniero:</span> Luis Aníbal Arias Bustos (MP 52202-64339)</p>
                        </div>
                    </div>
                </motion.div>

                {/* Hydraulic Plans Grid */}
                <div className="space-y-16">
                    {hydraulicPlans.map((plan, index) => {
                        const Icon = plan.icon;
                        const isReversed = index % 2 === 1;

                        return (
                            <motion.div
                                key={plan.id}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start"
                            >
                                {/* Image Section */}
                                <div className={`${isReversed ? 'lg:order-2' : ''}`}>
                                    <div className="bg-editorial-concrete/5 border border-editorial-stone/10 rounded-sm overflow-hidden">
                                        <div className="p-6 border-b border-editorial-stone/10 flex justify-between items-center">
                                            <div className="flex items-center gap-3">
                                                <Icon className="w-5 h-5 text-editorial-stone" />
                                                <div>
                                                    <h3 className="font-editorial text-lg text-editorial-dark">{plan.title}</h3>
                                                    <p className="font-sans text-xs text-editorial-stone mt-1">{plan.subtitle}</p>
                                                </div>
                                            </div>
                                            <a
                                                href={plan.pdf}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="flex items-center gap-2 text-xs uppercase tracking-widest text-editorial-dark hover:opacity-60 transition-opacity"
                                            >
                                                <Download className="w-4 h-4" />
                                                PDF
                                            </a>
                                        </div>
                                        <div
                                            className="p-4 flex items-center justify-center bg-white cursor-pointer"
                                            onClick={() => setLightboxImage({ src: plan.image, alt: plan.title })}
                                        >
                                            <img
                                                src={plan.image}
                                                alt={plan.title}
                                                className="w-full h-auto object-contain hover:opacity-90 transition-opacity max-h-[600px]"
                                            />
                                        </div>
                                    </div>
                                </div>

                                {/* Info Section */}
                                <div className={`flex flex-col justify-center ${isReversed ? 'lg:order-1' : ''}`}>
                                    <div className="space-y-6">
                                        <div>
                                            <span className="font-sans text-xs uppercase tracking-[0.2em] text-editorial-stone">
                                                Plano {plan.id} · Diseño Hidráulico
                                            </span>
                                            <h3 className="font-editorial text-3xl text-editorial-dark mt-4 mb-4">
                                                {plan.title}
                                            </h3>
                                            <p className="font-sans text-editorial-stone text-base leading-relaxed font-light">
                                                {plan.description}
                                            </p>
                                        </div>

                                        {/* Specifications */}
                                        <div className="bg-editorial-concrete/5 border border-editorial-stone/10 rounded-sm p-6">
                                            <h4 className="font-sans text-xs uppercase tracking-[0.2em] text-editorial-stone mb-4">
                                                Especificaciones
                                            </h4>
                                            <div className="space-y-3">
                                                {plan.specs.map((spec, i) => (
                                                    <div key={i} className="flex justify-between items-start">
                                                        <span className="font-sans text-sm text-editorial-stone font-light">
                                                            {spec.label}
                                                        </span>
                                                        <span className="font-sans text-sm text-editorial-dark font-medium text-right ml-4">
                                                            {spec.value}
                                                        </span>
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        );
                    })}
                </div>

                {/* System Components Summary */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mt-16 bg-editorial-dark text-editorial-white p-8 rounded-sm"
                >
                    <h3 className="font-editorial text-2xl mb-6">Componentes del Sistema</h3>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 font-sans text-sm">
                        <div className="border border-editorial-white/20 p-6 rounded-sm">
                            <h4 className="font-medium mb-2 text-base">Red Hidráulica</h4>
                            <p className="text-editorial-white/70 font-light">
                                Distribución agua potable con válvulas, medidores y conexiones sanitarias
                            </p>
                        </div>
                        <div className="border border-editorial-white/20 p-6 rounded-sm">
                            <h4 className="font-medium mb-2 text-base">Red Sanitaria</h4>
                            <p className="text-editorial-white/70 font-light">
                                Evacuación aguas negras con bajantes, sifones y cajas de inspección
                            </p>
                        </div>
                        <div className="border border-editorial-white/20 p-6 rounded-sm">
                            <h4 className="font-medium mb-2 text-base">Aguas Lluvias</h4>
                            <p className="text-editorial-white/70 font-light">
                                Sistema separado de evacuación pluvial con bajantes independientes
                            </p>
                        </div>
                    </div>
                </motion.div>

                {/* Convenciones */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mt-12 bg-editorial-concrete/5 border border-editorial-stone/10 rounded-sm p-8"
                >
                    <h3 className="font-editorial text-xl text-editorial-dark mb-6">Convenciones Técnicas</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 font-sans text-sm text-editorial-stone">
                        <div className="space-y-2">
                            <p className="font-medium text-editorial-dark">Hidráulicas</p>
                            <p>• LM: Lavamanos</p>
                            <p>• WC: Inodoro</p>
                            <p>• LP: Lavaplatos</p>
                            <p>• CLP/CLM: Conexión agua</p>
                        </div>
                        <div className="space-y-2">
                            <p className="font-medium text-editorial-dark">Sanitarias</p>
                            <p>• BAN: Bajante aguas negras</p>
                            <p>• BALL: Bajante aguas lluvias</p>
                            <p>• SP: Sifón de piso</p>
                            <p>• C.I.: Caja de inspección</p>
                        </div>
                        <div className="space-y-2">
                            <p className="font-medium text-editorial-dark">Accesorios</p>
                            <p>• Tee: T conexión</p>
                            <p>• Yee: Y derivación</p>
                            <p>• Codo: 90° o 45°</p>
                            <p>• Buje: Reducción diámetros</p>
                        </div>
                        <div className="space-y-2">
                            <p className="font-medium text-editorial-dark">Diámetros</p>
                            <p>• Ø1/2\": Ramales hidráulicos</p>
                            <p>• Ø2\": Ramales sanitarios</p>
                            <p>• Ø4\": Desagües principales</p>
                            <p>• Ø6\": Colectores generales</p>
                        </div>
                    </div>
                </motion.div>

            </div>

            {lightboxImage && (
                <ImageLightbox
                    src={lightboxImage.src}
                    alt={lightboxImage.alt}
                    isOpen={!!lightboxImage}
                    onClose={() => setLightboxImage(null)}
                />
            )}
        </section>
    );
}
