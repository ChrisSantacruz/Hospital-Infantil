'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Maximize2 } from 'lucide-react';

// Aesthetic images only (No technical plans)
const galleryImages = [
    { src: 'https://hila-sigma.vercel.app/images/consultorio.jpg', alt: 'Vista Interior Consultorio', span: '' },
    { src: 'https://hila-sigma.vercel.app/images/sala_general.jpg', alt: 'Sala General y Espera', span: 'md:col-span-2' }, // Feature image
    { src: 'https://hila-sigma.vercel.app/images/facturacion.jpg', alt: 'Área de Facturación', span: '' },
    { src: 'https://hila-sigma.vercel.app/images/sala_observacion.png', alt: 'Sala de Observación', span: '' },
    { src: 'https://hila-sigma.vercel.app/images/consultorio2.png', alt: 'Detalle Consultorio', span: '' }
];

export default function Gallery() {
    const [lightboxSrc, setLightboxSrc] = useState<string | null>(null);

    return (
        <section className="w-full bg-editorial-white py-24 px-6 md:px-12 lg:px-24 border-t border-editorial-dark/5">
            <div className="max-w-[1920px] mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mb-16 flex flex-col md:flex-row justify-between items-end gap-6"
                >
                    <div>
                        <span className="block font-sans text-xs uppercase tracking-[0.2em] text-editorial-stone mb-4">
                            Portafolio Visual
                        </span>
                        <h2 className="font-editorial text-4xl text-editorial-dark">
                            Galería del Proyecto
                        </h2>
                    </div>
                    <p className="font-sans text-xs text-editorial-stone/60 uppercase tracking-widest max-w-xs text-right hidden md:block">
                        Perspectivas y Detalles Arquitectónicos
                    </p>
                </motion.div>

                {/* Mosaic Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 auto-rows-[300px]">
                    {galleryImages.map((img, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.1 }}
                            onClick={() => setLightboxSrc(img.src)}
                            className={`relative group cursor-pointer overflow-hidden bg-editorial-concrete/20 ${img.span}`}
                        >
                            <img
                                src={img.src}
                                alt={img.alt}
                                className="w-full h-full object-cover transition-opacity duration-500 group-hover:opacity-90"
                            />

                            {/* Minimal Overlay */}
                            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300 flex items-center justify-center">
                                <Maximize2 className="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 w-8 h-8 drop-shadow-md" strokeWidth={1} />
                            </div>

                            <div className="absolute bottom-4 left-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                <p className="text-white text-xs font-sans tracking-widest uppercase drop-shadow-md truncate">
                                    {img.alt}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>

            {/* Lightbox */}
            <AnimatePresence>
                {lightboxSrc && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-[9999] bg-editorial-white/95 backdrop-blur-xl flex items-center justify-center p-6"
                        onClick={() => setLightboxSrc(null)}
                    >
                        <button className="absolute top-6 right-6 text-editorial-dark hover:rotate-90 transition-transform duration-300">
                            <X className="w-10 h-10" strokeWidth={1} />
                        </button>
                        <motion.img
                            src={lightboxSrc}
                            alt="Full View"
                            className="max-w-full max-h-[90vh] object-contain shadow-2xl"
                            layoutId="lightbox-image"
                        />
                    </motion.div>
                )}
            </AnimatePresence>
        </section>
    );
}
