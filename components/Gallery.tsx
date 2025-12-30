'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import { X, ZoomIn } from 'lucide-react';

const renders = [
    {
        src: '/resources/RENDERS-20251229T234538Z-1-001/RENDERS/CONSULTORIO 5.png',
        title: 'Consultorio 5',
        category: 'Consultorios'
    },
    {
        src: '/resources/RENDERS-20251229T234538Z-1-001/RENDERS/ESTACION DE ENFERMERIA.jpg',
        title: 'Estación de Enfermería',
        category: 'Áreas de Apoyo'
    },
    {
        src: '/resources/RENDERS-20251229T234538Z-1-001/RENDERS/ESTACION DE FACTURACIOIN.jpg',
        title: 'Estación de Facturación',
        category: 'Áreas Administrativas'
    },
    {
        src: '/resources/RENDERS-20251229T234538Z-1-001/RENDERS/HALL CONSULTORIOS.png',
        title: 'Hall de Consultorios',
        category: 'Circulaciones'
    },
    {
        src: '/resources/RENDERS-20251229T234538Z-1-001/RENDERS/HALL SALA DE YESOS DIA ILUMINACION NATURAL.png',
        title: 'Hall Sala de Yesos - Día',
        category: 'Circulaciones'
    },
    {
        src: '/resources/RENDERS-20251229T234538Z-1-001/RENDERS/HALL YESOS NOCHE ILUMINACION.png',
        title: 'Hall Yesos - Noche',
        category: 'Circulaciones'
    },
    {
        src: '/resources/RENDERS-20251229T234538Z-1-001/RENDERS/PASILLO TRANSFER.png',
        title: 'Pasillo Transfer',
        category: 'Circulaciones'
    },
    {
        src: '/resources/RENDERS-20251229T234538Z-1-001/RENDERS/POSTCONSULTA.png',
        title: 'Post Consulta',
        category: 'Consultorios'
    },
    {
        src: '/resources/RENDERS-20251229T234538Z-1-001/RENDERS/SALA DE ESPERA GENERAL.jpg',
        title: 'Sala de Espera General',
        category: 'Áreas de Espera'
    },
    {
        src: '/resources/RENDERS-20251229T234538Z-1-001/RENDERS/SALA DE ESPERA INFANTIL.jpg',
        title: 'Sala de Espera Infantil',
        category: 'Áreas de Espera'
    },
    {
        src: '/resources/RENDERS-20251229T234538Z-1-001/RENDERS/SALA DE OBSERVACION.png',
        title: 'Sala de Observación',
        category: 'Áreas Críticas'
    }
];

const categories = ['Todos', ...Array.from(new Set(renders.map(r => r.category)))];

export default function Gallery() {
    const [selectedCategory, setSelectedCategory] = useState('Todos');
    const [selectedImage, setSelectedImage] = useState<typeof renders[0] | null>(null);

    const filteredRenders = selectedCategory === 'Todos' 
        ? renders 
        : renders.filter(r => r.category === selectedCategory);

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
                            Galería del Proyecto
                        </span>
                        <h2 className="font-editorial text-4xl md:text-5xl text-editorial-dark mb-8 leading-tight">
                            Visualizaciones 3D <br /> 
                            <span className="italic text-editorial-stone">y Ambientes Interiores</span>
                        </h2>
                        <p className="font-sans text-editorial-stone text-lg leading-relaxed font-light max-w-2xl">
                            Renders fotorrealistas que muestran la calidad espacial, materialidad y ambiente lumínico 
                            del proyecto de reorganización de urgencias pediátricas.
                        </p>
                    </motion.div>
                </div>

                {/* Category Filter */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="flex flex-wrap gap-3 mb-12"
                >
                    {categories.map((category) => (
                        <button
                            key={category}
                            onClick={() => setSelectedCategory(category)}
                            className={`px-6 py-2 text-xs uppercase tracking-widest rounded-full transition-all ${
                                selectedCategory === category
                                    ? 'bg-editorial-dark text-white'
                                    : 'bg-white border border-editorial-stone/20 text-editorial-stone hover:border-editorial-dark/40'
                            }`}
                        >
                            {category}
                        </button>
                    ))}
                </motion.div>

                {/* Gallery Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {filteredRenders.map((render, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.05 }}
                            className="group relative bg-white border border-editorial-stone/10 rounded-sm overflow-hidden cursor-pointer hover:border-editorial-dark/20 transition-all"
                            onClick={() => setSelectedImage(render)}
                        >
                            <div className="aspect-[4/3] overflow-hidden bg-editorial-concrete/5">
                                <img
                                    src={render.src}
                                    alt={render.title}
                                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                                />
                            </div>
                            <div className="p-4">
                                <span className="block font-sans text-[10px] uppercase tracking-widest text-editorial-stone/60 mb-2">
                                    {render.category}
                                </span>
                                <h3 className="font-editorial text-lg text-editorial-dark">{render.title}</h3>
                            </div>
                            <div className="absolute inset-0 bg-editorial-dark/0 group-hover:bg-editorial-dark/10 transition-colors flex items-center justify-center opacity-0 group-hover:opacity-100">
                                <div className="w-12 h-12 rounded-full bg-white/90 flex items-center justify-center">
                                    <ZoomIn className="w-5 h-5 text-editorial-dark" />
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Lightbox Modal */}
                {selectedImage && (
                    <div 
                        className="fixed inset-0 z-[100] bg-black/95 flex items-center justify-center p-4"
                        onClick={() => setSelectedImage(null)}
                    >
                        <button
                            onClick={() => setSelectedImage(null)}
                            className="absolute top-6 right-6 w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors z-10"
                        >
                            <X className="w-6 h-6 text-white" />
                        </button>
                        <div className="max-w-7xl max-h-[90vh] flex flex-col items-center">
                            <img
                                src={selectedImage.src}
                                alt={selectedImage.title}
                                className="max-w-full max-h-[80vh] object-contain rounded-sm"
                                onClick={(e) => e.stopPropagation()}
                            />
                            <div className="mt-6 text-center">
                                <span className="block font-sans text-xs uppercase tracking-widest text-white/60 mb-2">
                                    {selectedImage.category}
                                </span>
                                <h3 className="font-editorial text-2xl text-white">{selectedImage.title}</h3>
                            </div>
                        </div>
                    </div>
                )}

            </div>
        </section>
    );
}
