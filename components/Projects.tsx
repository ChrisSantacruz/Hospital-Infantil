'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';

const projects = [
    { src: 'https://hila-sigma.vercel.app/images/planta.png', title: 'Planta Arquitectónica' },
    { src: 'https://hila-sigma.vercel.app/images/consultorio.jpg', title: 'Consultorio Pediátrico' },
    { src: 'https://hila-sigma.vercel.app/images/sala_general.jpg', title: 'Sala General' },
    { src: 'https://hila-sigma.vercel.app/images/facturacion.jpg', title: 'Área de Facturación' },
    { src: 'https://hila-sigma.vercel.app/images/dise%C3%B1o_pisos.png', title: 'Diseño de Pisos' },
    { src: 'https://hila-sigma.vercel.app/images/sala_observacion.png', title: 'Sala de Observación' },
];

export default function Projects() {
    const [selectedImage, setSelectedImage] = useState<string | null>(null);

    return (
        <section className="w-full bg-editorial-white pt-12 pb-32 px-4 md:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {projects.map((project, index) => (
                    <motion.div
                        key={index}
                        layoutId={`project-${index}`}
                        className="aspect-[4/3] relative overflow-hidden bg-editorial-concrete cursor-pointer group"
                        onClick={() => setSelectedImage(project.src)}
                    >
                        <img
                            src={project.src}
                            alt={project.title}
                            className="w-full h-full object-cover grayscale-[10%] group-hover:scale-105 transition-transform duration-700 ease-[cubic-bezier(0.25,1,0.5,1)]"
                        />
                        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-500" />
                        <div className="absolute bottom-6 left-6 opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-4 group-hover:translate-y-0">
                            <span className="text-white font-sans text-xs tracking-widest uppercase bg-black/20 backdrop-blur-md px-3 py-1 rounded-full">
                                {project.title}
                            </span>
                        </div>
                    </motion.div>
                ))}
            </div>

            <AnimatePresence>
                {selectedImage && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-[100] bg-editorial-white/95 backdrop-blur-xl flex items-center justify-center p-6 md:p-12"
                        onClick={() => setSelectedImage(null)}
                    >
                        <button
                            className="absolute top-6 right-6 text-editorial-dark hover:rotate-90 transition-transform duration-300"
                            onClick={() => setSelectedImage(null)}
                        >
                            <X className="w-8 h-8" />
                        </button>
                        <motion.img
                            src={selectedImage}
                            alt="Project View"
                            className="max-w-full max-h-full object-contain shadow-2xl"
                            layoutId="lightbox-image"
                        />
                    </motion.div>
                )}
            </AnimatePresence>
        </section>
    );
}
