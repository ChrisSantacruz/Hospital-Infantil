'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Download, Zap, Shield, Wifi, Lightbulb, AlertTriangle } from 'lucide-react';
import ImageLightbox from './ImageLightbox';

const electricalPlans = [
    {
        id: 1,
        title: "Iluminación General",
        subtitle: "Sistema de Iluminación Principal",
        description: "Diseño completo del sistema de iluminación LED con temperatura de color entre 3500-4500K. Incluye paneles LED de 18W y 24W, iluminación direccional con tiras LED COB y controles de iluminación distribuidos estratégicamente.",
        image: "/resources/imagenes pdfs/Electrico1/electrico1.jpg",
        pdf: "/resources/imagenes pdfs/Electrico1/ELEC-HOSPITAL INFANTIL (1)-ELC-01 ILUMINACION.pdf",
        icon: Lightbulb,
        specs: [
            { label: "Temperatura Color", value: "3500-4500K" },
            { label: "Tipo de Luminarias", value: "LED 18W/24W" },
            { label: "Circuitos", value: "CN1-CN3, CR1-CR2" },
            { label: "Conductores", value: "No.12 AWG THHN/THWN-2" }
        ]
    },
    {
        id: 2,
        title: "Iluminación de Emergencia",
        subtitle: "Sistema de Respaldo y Seguridad",
        description: "Red de iluminación de emergencia LED con paneles de 4.5W y señalización de rutas de evacuación. Sistema conectado a circuitos regulados (CR) para garantizar operación continua durante cortes de energía.",
        image: "/resources/imagenes pdfs/Electrico2/electrico2.jpg",
        pdf: "/resources/imagenes pdfs/Electrico2/ELEC-HOSPITAL INFANTIL (2)-ELC-02 ILUMINACION EMERGENCIA.pdf",
        icon: Shield,
        specs: [
            { label: "Luminarias Emergencia", value: "LED 5W" },
            { label: "Paneles Emergencia", value: "4.5W 6K Simétrica" },
            { label: "Circuitos", value: "CR3-CR5" },
            { label: "Señalización", value: "Rutas de Evacuación" }
        ]
    },
    {
        id: 3,
        title: "Tomacorrientes",
        subtitle: "Red de Alimentación Eléctrica",
        description: "Sistema completo de tomacorrientes regulados y normales. Incluye tomacorrientes grado hospital, GFCI para áreas húmedas, y circuitos bifásicos. Distribución a través de tableros TR (Regulados), TC (Críticos) y TN (Normales).",
        image: "/resources/imagenes pdfs/Electrico3/electrico3.jpg",
        pdf: "/resources/imagenes pdfs/Electrico3/ELEC-HOSPITAL INFANTIL (1)-ELC-03 TOMACORRIENTES.pdf",
        icon: Zap,
        specs: [
            { label: "Tomacorrientes", value: "120V-15A con tierra" },
            { label: "GFCI", value: "Baños y áreas húmedas" },
            { label: "Circuitos Normales", value: "CN4-CN17" },
            { label: "Circuitos Regulados", value: "TR1-TR4" },
            { label: "Circuitos Críticos", value: "CR3-CR10" }
        ]
    },
    {
        id: 4,
        title: "Red Contra Incendios",
        subtitle: "Detección y Alarma",
        description: "Sistema integral de detección de incendios con panel central Fire Lite 200XI. Incluye 30 detectores de humo direccionables, 4 estaciones manuales, sirenas con estrobo y anunciadores remotos LCD para monitoreo completo.",
        image: "/resources/imagenes pdfs/Electrico4/Electrico4.jpg",
        pdf: "/resources/imagenes pdfs/Electrico4/ELEC-HOSPITAL INFANTIL (1)-ELC-04 RED CONTRAINCENDIOS.pdf",
        icon: AlertTriangle,
        specs: [
            { label: "Panel Central", value: "Fire Lite 200XI" },
            { label: "Detectores", value: "30 unidades direccionables" },
            { label: "Estaciones Manuales", value: "4 unidades doble acción" },
            { label: "Sirenas", value: "Con estrobo muro/techo" },
            { label: "Anunciadores", value: "LCD remotos" }
        ]
    },
    {
        id: 5,
        title: "Red de Datos",
        subtitle: "Infraestructura de Comunicaciones",
        description: "Cableado estructurado categoría 6A con 38 puntos de datos dobles. Rack central de 24UR con distribución por tubería SCH40 3/4\" y bandeja portacables tipo malla para soporte de sistemas médicos digitales.",
        image: "/resources/imagenes pdfs/Electrico5/Electrico5.jpg",
        pdf: "/resources/imagenes pdfs/Electrico5/ELEC-HOSPITAL INFANTIL (1)-ELC-05 DATOS.pdf",
        icon: Wifi,
        specs: [
            { label: "Categoría", value: "F-UTP Cat 6A" },
            { label: "Puntos de Datos", value: "38 salidas dobles (D1-D38)" },
            { label: "Rack Central", value: "24 Unidades de Rack" },
            { label: "Tubería", value: "SCH40 3/4\"" },
            { label: "Bandeja", value: "300x54x3000mm tipo malla" }
        ]
    }
];

export default function ElectricalSystems() {
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
                            Láminas 8-12 · Diseño Eléctrico
                        </span>
                        <h2 className="font-editorial text-4xl md:text-5xl text-editorial-dark mb-8 leading-tight">
                            Sistemas Eléctricos <br />
                            <span className="italic text-editorial-stone">Infraestructura Técnica Integral</span>
                        </h2>
                        <p className="font-sans text-editorial-stone text-lg leading-relaxed font-light max-w-2xl">
                            El diseño eléctrico contempla cinco sistemas integrados que garantizan funcionalidad, seguridad 
                            y eficiencia energética. Todos los sistemas cumplen con la normativa NTC 2050 y están diseñados 
                            específicamente para servicios de salud pediátricos.
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
                            <p><span className="font-medium text-editorial-dark">• Conductores:</span> No.12 AWG de cobre THHN/THWN-2</p>
                            <p><span className="font-medium text-editorial-dark">• Tubería:</span> PVC embebida, SCH40 para cielos y muros</p>
                            <p><span className="font-medium text-editorial-dark">• Diámetros:</span> 1/2" PVC y 3/4" EMT según carga</p>
                        </div>
                        <div className="space-y-3">
                            <p><span className="font-medium text-editorial-dark">• Protección:</span> Línea de tierra conectada a barraje</p>
                            <p><span className="font-medium text-editorial-dark">• Tomacorrientes GFCI:</span> Obligatorios en baños y lavamanos</p>
                            <p><span className="font-medium text-editorial-dark">• Ingeniero:</span> Luis Alejandro Jaramillo B. (MP CL 20529854)</p>
                        </div>
                    </div>
                </motion.div>

                {/* Electrical Plans Grid */}
                <div className="space-y-16">
                    {electricalPlans.map((plan, index) => {
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
                                                Plano {plan.id} · Diseño Eléctrico
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

                {/* Distribution Boards Summary */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mt-16 bg-editorial-dark text-editorial-white p-8 rounded-sm"
                >
                    <h3 className="font-editorial text-2xl mb-6">Tableros de Distribución</h3>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 font-sans text-sm">
                        <div className="border border-editorial-white/20 p-6 rounded-sm">
                            <h4 className="font-medium mb-2 text-base">TN - Tablero Normal</h4>
                            <p className="text-editorial-white/70 font-light">
                                Circuitos de iluminación general y tomacorrientes no críticos
                            </p>
                        </div>
                        <div className="border border-editorial-white/20 p-6 rounded-sm">
                            <h4 className="font-medium mb-2 text-base">TR - Tablero Regulado</h4>
                            <p className="text-editorial-white/70 font-light">
                                Alimentación regulada para equipos médicos y sistemas de respaldo
                            </p>
                        </div>
                        <div className="border border-editorial-white/20 p-6 rounded-sm">
                            <h4 className="font-medium mb-2 text-base">TC - Tablero Crítico</h4>
                            <p className="text-editorial-white/70 font-light">
                                Circuitos prioritarios para áreas de reanimación y observación
                            </p>
                        </div>
                    </div>
                </motion.div>

            </div>

            {lightboxImage && (
                <ImageLightbox
                    src={lightboxImage.src}
                    alt={lightboxImage.alt}
                    onClose={() => setLightboxImage(null)}
                />
            )}
        </section>
    );
}
