'use client';

import { motion } from 'framer-motion';
import { Download, Zap, Droplets, Wind, Lightbulb, Waves } from 'lucide-react';
import Link from 'next/link';

const systems = [
    {
        id: "electrical",
        icon: Zap,
        title: "Sistema Eléctrico",
        description: "Red eléctrica regulada con respaldo de emergencia, iluminación LED, tomas hospitalarias y protecciones diferenciales.",
        specs: [
            "Iluminación general: Temperatura color 3500-4500K, paneles LED 18W/24W",
            "Circuitos independientes: CN (normales), TR (regulados), TC (críticos)",
            "Tableros: TN, TR y TC con protección térmica y diferencial",
            "Emergencia: Sistema LED 5W con baterías en áreas críticas",
            "Tomas hospitalarias: GFCI 120V-15A, grado médico en reanimación",
            "Detección incendios: Fire Lite 200XI, 30 detectores, 4 estaciones manuales"
        ],
        link: "#electricos",
        linkText: "Ver Sistemas Eléctricos Completos"
    },
    {
        id: "hydraulic",
        icon: Droplets,
        title: "Sistema Hidráulico",
        description: "Red de agua potable fría con tanque de reserva, grifería temporizada y no manual en áreas críticas.",
        specs: [
            "Tubería principal: PVC RDE 13.5 Ø3/4\" con ramales Ø1/2\"",
            "Válvulas: Compuerta y anti-fraude por sector funcional",
            "Conexiones: Lavamanos (LM), inodoros (WC), lavaplatos (LP)",
            "Grifería: Temporizada en baños públicos, no manual en reanimación",
            "Sistema caliente: Buje roscado 2\"×1\" con aislamiento térmico",
            "Accesorios: Tees, codos, bujes y válvulas universales Ø1/2\""
        ],
        link: "#hidraulicos",
        linkText: "Ver Sistemas Hidráulicos Completos"
    },
    {
        id: "sanitary",
        icon: Wind,
        title: "Sistema Sanitario",
        description: "Red de evacuación de aguas residuales con ventilación adecuada, sifones y conexión a sistema general.",
        specs: [
            "Desagües principales: PVC sanitaria Ø4\" con pendiente 2%",
            "Ramales individuales: PVC Ø2\" con sifones en todos los aparatos",
            "Colectores generales: PVC Ø6\" (hasta 16.54m de longitud)",
            "Bajantes: BAN (aguas negras) y BALL (aguas lluvias) Ø4\"",
            "Cajas de inspección: 0.90×0.90m y 0.74×0.74m cada 15m máximo",
            "Ventilación: Columnas VEN Ø3\" para evitar sifones",
            "Trampa especializada: Yesos en sala de procedimientos"
        ],
        link: "#hidraulicos",
        linkText: "Ver Instalaciones Sanitarias Completas"
    }
];

const requirements = [
    {
        area: "General",
        req: "Baños Independientes",
        spec: "Urgencias pediátricas exclusivas."
    },
    {
        area: "Consultorios",
        req: "Aparatos Sanitarios",
        spec: "Inodoros/accesorios pediátricos."
    },
    {
        area: "Triage",
        req: "Lavamanos",
        spec: "Higiene personal/pacientes."
    },
    {
        area: "Reanimación",
        req: "Gases y Agua",
        spec: "Lavamanos no manual, oxígeno."
    },
    {
        area: "Procedimientos",
        req: "Poceta / Lavamanos",
        spec: "Lavado de instrumental/fluidos."
    },
    {
        area: "Descontaminación",
        req: "Ducha y Drenaje",
        spec: "Ducha teléfono, drenaje piso."
    },
    {
        area: "Accesibilidad",
        req: "Puertas/Accesorios",
        spec: "Apertura externa, talla baja."
    }
];

export default function Systems() {
    return (
        <section className="w-full py-16 md:py-20 bg-editorial-concrete/5 px-6 md:px-12 lg:px-24 border-t border-editorial-stone/10">
            <div className="max-w-[1920px] mx-auto">

                {/* Header */}
                <div className="max-w-4xl mb-16">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        <span className="block font-sans text-xs uppercase tracking-[0.2em] text-editorial-stone mb-6">
                            Resumen de Sistemas Técnicos
                        </span>
                        <h2 className="font-editorial text-4xl md:text-5xl text-editorial-dark mb-8 leading-tight">
                            Instalaciones Especializadas <br />
                            <span className="text-editorial-stone italic">Integración Eléctrica · Hidráulica · Sanitaria</span>
                        </h2>
                        <p className="font-sans text-editorial-stone text-lg leading-relaxed font-light max-w-2xl">
                            Diseño integral de redes eléctricas e hidrosanitarias con especificaciones técnicas detalladas 
                            en las secciones dedicadas. Este resumen consolida los aspectos principales de cada sistema 
                            garantizando seguridad, eficiencia y cumplimiento normativo para atención pediátrica.
                        </p>
                    </motion.div>
                </div>

                {/* Systems Cards */}
                <div className="space-y-8 mb-16">
                    {systems.map((system, idx) => (
                        <motion.div
                            key={system.id}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.1 }}
                            className="bg-white border border-editorial-stone/10 rounded-sm overflow-hidden"
                        >
                            <div className="p-8">
                                <div className="flex flex-col lg:flex-row gap-8">
                                    {/* Left: Icon & Title */}
                                    <div className="lg:w-1/3 flex-shrink-0">
                                        <div className="flex items-center gap-4 mb-4">
                                            <div className="w-14 h-14 rounded-full bg-editorial-dark/5 flex items-center justify-center flex-shrink-0">
                                                <system.icon className="w-7 h-7 text-editorial-dark" />
                                            </div>
                                            <h3 className="font-editorial text-2xl text-editorial-dark">{system.title}</h3>
                                        </div>
                                        <p className="font-sans text-sm text-editorial-stone leading-relaxed mb-6">
                                            {system.description}
                                        </p>
                                        {system.link && (
                                            <Link 
                                                href={system.link}
                                                className="inline-flex items-center gap-2 px-4 py-3 bg-editorial-dark text-white text-xs uppercase tracking-widest hover:bg-editorial-stone transition-colors rounded-sm"
                                            >
                                                <system.icon className="w-4 h-4" />
                                                {system.linkText}
                                            </Link>
                                        )}
                                    </div>

                                    {/* Right: Specifications */}
                                    <div className="lg:w-2/3">
                                        <h4 className="font-sans font-bold text-sm text-editorial-dark mb-4 pb-2 border-b border-editorial-stone/10">
                                            Especificaciones Técnicas Principales
                                        </h4>
                                        <ul className="space-y-3">
                                            {system.specs.map((spec, specIdx) => (
                                                <li key={specIdx} className="flex items-start gap-3 text-sm text-editorial-stone leading-relaxed">
                                                    <span className="w-1.5 h-1.5 rounded-full bg-editorial-dark mt-2 flex-shrink-0"></span>
                                                    <span className="font-light">{spec}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Regulatory Table */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="w-full bg-white border border-editorial-stone/10 rounded-sm overflow-hidden"
                >
                    <div className="p-6 border-b border-editorial-stone/10 bg-editorial-concrete/5 flex justify-between items-center">
                        <h3 className="font-editorial text-xl text-editorial-dark">Requisitos Hidrosanitarios Normativos</h3>
                        <span className="font-sans text-[10px] uppercase tracking-widest text-editorial-stone border border-editorial-stone/20 px-2 py-1 rounded-full">RES 1633</span>
                    </div>

                    <div className="overflow-x-auto">
                        <table className="w-full text-left font-sans text-sm text-editorial-stone">
                            <thead className="bg-editorial-concrete/20 text-editorial-dark text-[10px] uppercase tracking-wider">
                                <tr>
                                    <th className="p-4 font-semibold border-b border-editorial-stone/10">Área</th>
                                    <th className="p-4 font-semibold border-b border-editorial-stone/10">Requisito</th>
                                    <th className="p-4 font-semibold border-b border-editorial-stone/10">Especificación</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-editorial-stone/10">
                                {requirements.map((item, idx) => (
                                    <tr key={idx} className="hover:bg-editorial-concrete/10 transition-colors">
                                        <td className="p-4 font-medium text-editorial-dark text-xs">{item.area}</td>
                                        <td className="p-4 text-xs">{item.req}</td>
                                        <td className="p-4 text-editorial-stone/80 font-light text-xs">{item.spec}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </motion.div>

            </div>
        </section>
    );
}
