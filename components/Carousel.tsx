'use client';

import React, { useState, useEffect, useCallback } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';
import Autoplay from 'embla-carousel-autoplay';

type ImageSlide = {
    src: string;
    alt: string;
    caption?: string;
};

interface CarouselProps {
    slides: ImageSlide[];
    autoPlayDelay?: number; // defaults to 10000ms (10s)
    aspectRatio?: string;
}

export default function Carousel({ slides, autoPlayDelay = 10000, aspectRatio = "aspect-[16/9]" }: CarouselProps) {
    const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true }, [Autoplay({ delay: autoPlayDelay })]);
    const [selectedIndex, setSelectedIndex] = useState(0);
    const [lightboxOpen, setLightboxOpen] = useState(false);
    const [lightboxIndex, setLightboxIndex] = useState(0);

    const onSelect = useCallback(() => {
        if (!emblaApi) return;
        setSelectedIndex(emblaApi.selectedScrollSnap());
    }, [emblaApi]);

    useEffect(() => {
        if (!emblaApi) return;
        emblaApi.on('select', onSelect);
        return () => { emblaApi.off('select', onSelect); };
    }, [emblaApi, onSelect]);

    const scrollPrev = useCallback(() => emblaApi && emblaApi.scrollPrev(), [emblaApi]);
    const scrollNext = useCallback(() => emblaApi && emblaApi.scrollNext(), [emblaApi]);

    const openLightbox = (index: number) => {
        setLightboxIndex(index);
        setLightboxOpen(true);
    };

    return (
        <div className="relative group">
            <div className={`overflow-hidden rounded-sm bg-editorial-concrete/10 ${aspectRatio}`} ref={emblaRef}>
                <div className="flex w-full h-full touch-pan-y">
                    {slides.map((slide, index) => (
                        <div className="flex-[0_0_100%] min-w-0 relative w-full h-full" key={index}>
                            <img
                                src={slide.src}
                                alt={slide.alt}
                                className="w-full h-full object-cover cursor-pointer"
                                onClick={() => openLightbox(index)}
                            />
                            {slide.caption && (
                                <div className="absolute bottom-0 left-0 w-full p-4 bg-gradient-to-t from-black/60 to-transparent">
                                    <p className="text-white font-sans text-xs tracking-widest uppercase">{slide.caption}</p>
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            </div>

            {/* Controls */}
            <button onClick={scrollPrev} className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/10 backdrop-blur-md p-2 rounded-full text-white opacity-0 group-hover:opacity-100 transition-opacity hover:bg-white/20">
                <ChevronLeft className="w-5 h-5" />
            </button>
            <button onClick={scrollNext} className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/10 backdrop-blur-md p-2 rounded-full text-white opacity-0 group-hover:opacity-100 transition-opacity hover:bg-white/20">
                <ChevronRight className="w-5 h-5" />
            </button>

            {/* Indicators */}
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
                {slides.map((_, idx) => (
                    <button
                        key={idx}
                        className={`w-1.5 h-1.5 rounded-full transition-all ${idx === selectedIndex ? 'bg-white w-4' : 'bg-white/40'}`}
                        onClick={() => emblaApi && emblaApi.scrollTo(idx)}
                    />
                ))}
            </div>

            {/* Lightbox */}
            <AnimatePresence>
                {lightboxOpen && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-[9999] bg-black/95 flex items-center justify-center p-4"
                    >
                        {/* High Visibility Close Button */}
                        <button
                            onClick={() => setLightboxOpen(false)}
                            className="absolute top-6 right-6 z-[110] bg-white/10 hover:bg-white/20 p-2 rounded-full backdrop-blur-md transition-colors"
                        >
                            <X className="w-8 h-8 text-white" />
                        </button>

                        <img
                            src={slides[lightboxIndex].src}
                            alt={slides[lightboxIndex].alt}
                            className="max-w-full max-h-[85vh] object-contain"
                        />

                        <div className="absolute bottom-8 left-0 w-full text-center text-white/60 font-sans text-sm tracking-widest uppercase pointer-events-none">
                            {slides[lightboxIndex].caption}
                        </div>

                        <button
                            className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 text-white/50 hover:text-white p-4"
                            onClick={() => setLightboxIndex((prev) => (prev - 1 + slides.length) % slides.length)}
                        >
                            <ChevronLeft className="w-10 h-10" />
                        </button>
                        <button
                            className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 text-white/50 hover:text-white p-4"
                            onClick={() => setLightboxIndex((prev) => (prev + 1) % slides.length)}
                        >
                            <ChevronRight className="w-10 h-10" />
                        </button>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
}
