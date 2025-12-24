'use client';

import { motion } from 'framer-motion';
import Carousel from './Carousel';

const materialImages = [
    { src: 'https://hila-sigma.vercel.app/images/dise%C3%B1o_pisos.png', alt: 'Diseño de Pisos', caption: 'Diseño de Pisos y Despiece' },
    { src: 'https://hila-sigma.vercel.app/images/consultorio2.png', alt: 'Acabados en Consultorio', caption: 'Visualización de Acabados en Consultorio' }
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
    return (
        <section className="w-full py-24 md:py-32 bg-editorial-white px-6 md:px-12 lg:px-24">
            <div className="max-w-[1920px] mx-auto">

                {/* Header */}
                <div className="max-w-4xl mb-16">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        <span className="block font-sans text-xs uppercase tracking-[0.2em] text-editorial-stone mb-6">
                            Especificaciones
                        </span>
                        <h2 className="font-editorial text-4xl md:text-5xl text-editorial-dark mb-8 leading-tight">
                            Materialidad Técnica <br /> <span className="italic text-editorial-stone">y Cumplimiento Normativo</span>
                        </h2>
                        <p className="font-sans text-editorial-stone text-lg leading-relaxed font-light max-w-2xl">
                            Selección rigurosa de materiales que garantizan la asepsia, durabilidad y confort, cumpliendo con los estándares de habilitación en salud.
                        </p>
                    </motion.div>
                </div>

                {/* Split Layout */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-start">

                    {/* Left: Carousel */}
                    <div className="w-full">
                        <span className="block font-sans text-xs uppercase tracking-widest text-editorial-stone mb-4">
                            Detalles Constructivos
                        </span>
                        <Carousel slides={materialImages} aspectRatio="aspect-[4/3] lg:aspect-[1/1]" autoPlayDelay={6000} />
                    </div>

                    {/* Right: Spec Table */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="w-full bg-editorial-white border border-editorial-stone/10 rounded-sm overflow-hidden h-full min-h-[500px]"
                    >
                        <div className="p-6 border-b border-editorial-stone/10 bg-editorial-white flex justify-between items-center">
                            <h3 className="font-editorial text-xl text-editorial-dark">Especificación Técnica</h3>
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

                </div>
            </div>
        </section>
    );
}
