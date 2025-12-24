'use client';

import { motion } from 'framer-motion';
import Carousel from './Carousel';

const systemImages = [
    { src: 'https://hila-sigma.vercel.app/images/electricas.png', alt: 'Planos Eléctricos', caption: 'Diagrama de Instalaciones Eléctricas' },
    { src: 'https://hila-sigma.vercel.app/images/hidraulicas.png', alt: 'Planos Hidráulicos', caption: 'Redes Hidráulicas' },
    { src: 'https://hila-sigma.vercel.app/images/sanitarias.png', alt: 'Planos Sanitarios', caption: 'Redes Sanitarias' }
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
        <section className="w-full py-24 md:py-32 bg-editorial-concrete/30 px-6 md:px-12 lg:px-24 border-t border-editorial-dark/5">
            <div className="max-w-[1920px] mx-auto">

                {/* Header */}
                <div className="max-w-4xl mb-16">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        <span className="block font-sans text-xs uppercase tracking-[0.2em] text-editorial-stone mb-6">
                            Sistemas Técnicos
                        </span>
                        <h2 className="font-editorial text-4xl md:text-5xl text-editorial-dark mb-8 leading-tight">
                            Instalaciones y Normativa <br />
                            <span className="text-editorial-stone italic">Resolución 1633 - 2025</span>
                        </h2>
                        <p className="font-sans text-editorial-stone text-lg leading-relaxed font-light max-w-2xl">
                            Diseño integral de redes eléctricas e hidrosanitarias, garantizando seguridad técnica y cumplimiento normativo para espacios pediátricos.
                        </p>
                    </motion.div>
                </div>

                {/* Split Layout: Carousel & Table */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-start">

                    {/* Left: Carousel (Plans) */}
                    <div className="w-full">
                        <span className="block font-sans text-xs uppercase tracking-widest text-editorial-stone mb-4">
                            Planos Técnicos
                        </span>
                        <Carousel slides={systemImages} aspectRatio="aspect-[4/3] lg:aspect-[1/1]" autoPlayDelay={8000} />
                    </div>

                    {/* Right: Regulatory Table */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="w-full bg-editorial-white border border-editorial-stone/10 rounded-sm overflow-hidden h-full min-h-[500px]"
                    >
                        <div className="p-6 border-b border-editorial-stone/10 bg-editorial-white flex justify-between items-center">
                            <h3 className="font-editorial text-xl text-editorial-dark">Requisitos Hidrosanitarios</h3>
                            <span className="font-sans text-[10px] uppercase tracking-widest text-editorial-stone border border-editorial-stone/20 px-2 py-1 rounded-full">RES 1633</span>
                        </div>

                        <div className="overflow-y-auto max-h-[600px] scrollbar-thin scrollbar-thumb-editorial-stone/20 hover:scrollbar-thumb-editorial-stone/40">
                            <table className="w-full text-left font-sans text-sm text-editorial-stone">
                                <thead className="bg-editorial-concrete/20 text-editorial-dark text-[10px] uppercase tracking-wider sticky top-0 backdrop-blur-md">
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

            </div>
        </section>
    );
}
