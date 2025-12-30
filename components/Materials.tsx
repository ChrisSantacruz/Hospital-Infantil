'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Download, FileText, ExternalLink } from 'lucide-react';
import ImageLightbox from './ImageLightbox';

const materialImages = [
    { 
        src: '/resources/desgloce lamina 2-20251229T234547Z-1-001/desgloce lamina 2/RENDER DISEÑO DE PISO.png', 
        alt: 'Render Diseño de Piso', 
        caption: 'Visualización Materialidad en Consultorio' 
    }
];

const specs = [
    {
        component: "PISOS (Pasillos y Esperas)",
        req: "Durable, fácil limpieza, impermeable.",
        material: "Vinilo homogéneo en rollo (Tarkett).",
        status: "CUMPLE TOTALMENTE"
    },
    {
        component: "PISOS (Áreas Clínicas)",
        req: "Continuo (sin juntas), impermeable.",
        material: "Piso continuo en rollo (Sin juntas).",
        status: "CUMPLE TOTALMENTE"
    },
    {
        component: "PISOS (Reanimación)",
        req: "Conductividad (si aplica), lavable.",
        material: "Vinilo en rollo (Marca Tarkett).",
        status: "CUMPLE"
    },
    {
        component: "MEDIA CAÑA",
        req: "Unión cóncava obligatoria piso-pared.",
        material: "Media caña en mismo material.",
        status: "CUMPLE"
    },
    {
        component: "VIDRIOS",
        req: "Vidrio laminado o con película.",
        material: "Vidrio Laminado 6+6 mm.",
        status: "CUMPLE TOTALMENTE"
    },
    {
        component: "ACABADOS",
        req: "Superficies lavables, lisas, no porosas.",
        material: "Perfiles de aluminio tipo madera.",
        status: "CUMPLE"
    },
    {
        component: "PAREDES / MUROS",
        req: "Superficie lisa, sólida, resistente.",
        material: "Muros en panel yeso RH.",
        status: "CUMPLE"
    },
    {
        component: "CIELORRASOS",
        req: "Continuo, impermeable, lavable.",
        material: "Cielos en panel yeso RH (Drywall).",
        status: "CUMPLE"
    }
];

export default function Materials() {
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
                            Lámina 2 · Materialidad y Pisos
                        </span>
                        <h2 className="font-editorial text-4xl md:text-5xl text-editorial-dark mb-8 leading-tight">
                            Diseño de Pisos <br /> 
                            <span className="italic text-editorial-stone">y Acabados Técnicos</span>
                        </h2>
                        <p className="font-sans text-editorial-stone text-lg leading-relaxed font-light max-w-2xl">
                            Selección rigurosa de materiales que garantizan la asepsia, durabilidad y confort. 
                            Pisos continuos en vinilo homogéneo con media caña, acabados en panel yeso RH, 
                            y perfiles de aluminio que cumplen con los estándares de habilitación en salud.
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
                            <h3 className="font-editorial text-xl text-editorial-dark">Diseño de Pisos</h3>
                            <p className="font-sans text-xs text-editorial-stone mt-1">Planta de distribución de materiales</p>
                        </div>
                        <a 
                            href="/resources/desgloce lamina 2-20251229T234547Z-1-001/desgloce lamina 2/lamina 2 diseño pisos.pdf" 
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
                            src="/resources/imagenes pdfs/lamina2/principal1.jpg"
                            alt="Diseño de Pisos Principal"
                            className="w-full h-auto object-contain"
                        />
                    </div>
                </motion.div>

                {/* Main Content Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">

                    {/* Render - Material Visualization */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="bg-white border border-editorial-stone/10 rounded-sm overflow-hidden"
                    >
                        <div className="p-6 border-b border-editorial-stone/10">
                            <h3 className="font-editorial text-xl text-editorial-dark">Render Diseño de Piso</h3>
                            <p className="font-sans text-xs text-editorial-stone mt-1">Visualización materialidad en consultorio</p>
                        </div>
                        <div className="p-6 flex items-center justify-center bg-editorial-concrete/5">
                            <div onClick={() => setLightboxImage({ src: '/resources/desgloce lamina 2-20251229T234547Z-1-001/desgloce lamina 2/RENDER DISEÑO DE PISO.png', alt: 'Render Diseño de Piso - Visualización materialidad en consultorio' })}>
                                <img
                                    src="/resources/desgloce lamina 2-20251229T234547Z-1-001/desgloce lamina 2/RENDER DISEÑO DE PISO.png"
                                    alt="Render Diseño de Piso"
                                    className="w-full h-auto object-cover rounded-sm cursor-pointer hover:opacity-90 transition-opacity"
                                />
                            </div>
                        </div>
                    </motion.div>

                    {/* Planta de Pisos */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="bg-white border border-editorial-stone/10 rounded-sm overflow-hidden"
                    >
                        <div className="p-6 border-b border-editorial-stone/10">
                            <h3 className="font-editorial text-xl text-editorial-dark">Planta de Pisos</h3>
                            <p className="font-sans text-xs text-editorial-stone mt-1">Distribución de acabados</p>
                        </div>
                        <div className="p-6 flex items-center justify-center bg-editorial-concrete/5">
                            <div onClick={() => setLightboxImage({ src: '/resources/imagenes pdfs/lamina2/plantadepisos.jpg', alt: 'Planta de Pisos - Distribución de acabados' })}>
                                <img
                                    src="/resources/imagenes pdfs/lamina2/plantadepisos.jpg"
                                    alt="Planta de Pisos"
                                    className="w-full h-auto object-contain cursor-pointer hover:opacity-90 transition-opacity"
                                />
                            </div>
                        </div>
                    </motion.div>

                </div>

                {/* Specifications Table */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="w-full bg-editorial-white border border-editorial-stone/10 rounded-sm overflow-hidden mb-12"
                >
                    <div className="p-6 border-b border-editorial-stone/10 bg-editorial-white flex justify-between items-center">
                        <h3 className="font-editorial text-xl text-editorial-dark">Especificación Técnica por Componente</h3>
                        <span className="font-sans text-[10px] uppercase tracking-widest text-editorial-stone border border-editorial-stone/20 px-2 py-1 rounded-full">RES 1633</span>
                    </div>

                    <div className="overflow-y-auto max-h-[600px] scrollbar-thin scrollbar-thumb-editorial-stone/20 hover:scrollbar-thumb-editorial-stone/40">
                        <table className="w-full text-left font-sans text-sm text-editorial-stone">
                            <thead className="bg-editorial-concrete/20 text-editorial-dark text-[10px] uppercase tracking-wider sticky top-0 backdrop-blur-md z-10">
                                <tr>
                                    <th className="p-4 font-semibold border-b border-editorial-stone/10">Componente</th>
                                    <th className="p-4 font-semibold border-b border-editorial-stone/10">Requisito</th>
                                    <th className="p-4 font-semibold border-b border-editorial-stone/10">Material</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-editorial-stone/10">
                                {specs.map((item, idx) => (
                                    <tr key={idx} className="hover:bg-editorial-concrete/10 transition-colors">
                                        <td className="p-4 font-medium text-editorial-dark text-xs">{item.component}</td>
                                        <td className="p-4 text-xs">{item.req}</td>
                                        <td className="p-4 text-editorial-stone/80 font-light text-xs">
                                            {item.material} <br />
                                            <span className="text-[9px] font-bold text-green-600/80 uppercase tracking-wider">{item.status}</span>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </motion.div>

                {/* Technical Description */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="bg-editorial-concrete/5 border border-editorial-stone/10 rounded-sm p-8"
                >
                    <h3 className="font-editorial text-2xl text-editorial-dark mb-4">Criterios de Selección</h3>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 font-sans text-sm text-editorial-stone leading-relaxed">
                        <div>
                            <h4 className="font-bold text-editorial-dark mb-2">Superficies Continuas</h4>
                            <p>
                                Pisos en rollo sin juntas, media caña obligatoria en encuentros piso-pared, 
                                garantizando impermeabilidad y facilitando protocolos de limpieza profunda.
                            </p>
                        </div>
                        <div>
                            <h4 className="font-bold text-editorial-dark mb-2">Resistencia y Durabilidad</h4>
                            <p>
                                Materiales de alta resistencia al tráfico, impactos y agentes químicos de 
                                desinfección. Vinilo homogéneo tipo Tarkett con garantía hospitalaria.
                            </p>
                        </div>
                        <div>
                            <h4 className="font-bold text-editorial-dark mb-2">Confort Visual</h4>
                            <p>
                                Paleta neutra con acentos cálidos en áreas pediátricas, acabados mate antirreflejo, 
                                y transiciones cromáticas según zonificación funcional.
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
