'use client';

import type { Metadata } from "next";
import "./globals.css";
import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const closeMenu = () => setIsMenuOpen(false);

    return (
        <html lang="es">
            <head>
                <title>Hospital Infantil Los Ángeles | Reorganización Funcional</title>
                <meta name="description" content="Propuesta arquitectónica para la reorganización funcional del servicio de urgencias pediátricas." />
                <link rel="icon" type="image/jpeg" href="/resources/logoHospitalInfantil.jpg" />
            </head>
            <body className="antialiased min-h-screen flex flex-col relative font-sans">
                {/* Navigation Bar */}
                <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-4 md:px-12 md:py-6 bg-white/5 backdrop-blur-md transition-all duration-300 border-b border-white/10">
                    <Link href="/" className="flex items-center hover:opacity-80 transition-opacity">
                        <img src="/LogoCSN.png" alt="CSN Arquitectos Constructores" className="h-16 md:h-20 w-auto" />
                    </Link>

                    <div className="hidden md:flex items-center gap-6 font-sans text-xs tracking-widest uppercase text-editorial-stone">
                        <Link href="#proyecto" className="hover:text-editorial-dark hover:underline decoration-[0.5px] underline-offset-4 transition-all">Proyecto</Link>
                        <Link href="#arquitectura" className="hover:text-editorial-dark hover:underline decoration-[0.5px] underline-offset-4 transition-all">Arquitectura</Link>
                        <Link href="#materiales" className="hover:text-editorial-dark hover:underline decoration-[0.5px] underline-offset-4 transition-all">Diseño</Link>
                        <Link href="#sustentabilidad" className="hover:text-editorial-dark hover:underline decoration-[0.5px] underline-offset-4 transition-all">Sustentabilidad</Link>
                        <Link href="#ejecucion" className="hover:text-editorial-dark hover:underline decoration-[0.5px] underline-offset-4 transition-all">Ejecución</Link>
                        <a href="/resources/PRESUPUESTO GENERAL DE OBRA.pdf" target="_blank" rel="noopener noreferrer" className="hover:text-editorial-dark hover:underline decoration-[0.5px] underline-offset-4 transition-all">Presupuesto</a>
                        <Link href="#documentacion" className="hover:text-editorial-dark hover:underline decoration-[0.5px] underline-offset-4 transition-all">Descargas</Link>
                        <Link href="#galeria" className="hover:text-editorial-dark hover:underline decoration-[0.5px] underline-offset-4 transition-all">Galería</Link>
                    </div>

                    <Link
                        href="#contacto"
                        className="hidden md:block px-6 py-2 border border-editorial-dark/20 rounded-full text-xs uppercase tracking-widest text-editorial-dark hover:bg-editorial-dark hover:text-editorial-white transition-all duration-500"
                    >
                        Contacto
                    </Link>

                    {/* Mobile Menu Button */}
                    <button 
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                        className="md:hidden text-editorial-dark z-[60]"
                        aria-label="Toggle menu"
                    >
                        {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                    </button>
                </nav>

                {/* Mobile Menu */}
                {isMenuOpen && (
                    <div className="fixed inset-0 z-40 md:hidden">
                        <div 
                            className="absolute inset-0 bg-black/50 backdrop-blur-sm"
                            onClick={closeMenu}
                        />
                        <div className="absolute top-20 right-4 left-4 bg-white/95 backdrop-blur-md rounded-2xl shadow-2xl border border-white/20 overflow-hidden">
                            <div className="flex flex-col py-6">
                                <Link 
                                    href="#proyecto" 
                                    onClick={closeMenu}
                                    className="px-8 py-4 font-sans text-sm tracking-widest uppercase text-editorial-stone hover:bg-editorial-dark/5 hover:text-editorial-dark transition-all"
                                >
                                    Proyecto
                                </Link>
                                <Link 
                                    href="#arquitectura" 
                                    onClick={closeMenu}
                                    className="px-8 py-4 font-sans text-sm tracking-widest uppercase text-editorial-stone hover:bg-editorial-dark/5 hover:text-editorial-dark transition-all"
                                >
                                    Arquitectura
                                </Link>
                                <Link 
                                    href="#materiales" 
                                    onClick={closeMenu}
                                    className="px-8 py-4 font-sans text-sm tracking-widest uppercase text-editorial-stone hover:bg-editorial-dark/5 hover:text-editorial-dark transition-all"
                                >
                                    Diseño Pisos
                                </Link>
                                <Link 
                                    href="#cielos" 
                                    onClick={closeMenu}
                                    className="px-8 py-4 font-sans text-sm tracking-widest uppercase text-editorial-stone hover:bg-editorial-dark/5 hover:text-editorial-dark transition-all"
                                >
                                    Diseño Cielos
                                </Link>
                                <Link 
                                    href="#sustentabilidad" 
                                    onClick={closeMenu}
                                    className="px-8 py-4 font-sans text-sm tracking-widest uppercase text-editorial-stone hover:bg-editorial-dark/5 hover:text-editorial-dark transition-all"
                                >
                                    Sustentabilidad
                                </Link>
                                <Link 
                                    href="#ejecucion" 
                                    onClick={closeMenu}
                                    className="px-8 py-4 font-sans text-sm tracking-widest uppercase text-editorial-stone hover:bg-editorial-dark/5 hover:text-editorial-dark transition-all"
                                >
                                    Ejecución
                                </Link>
                                <Link 
                                    href="#demoliciones" 
                                    onClick={closeMenu}
                                    className="px-8 py-4 font-sans text-sm tracking-widest uppercase text-editorial-stone hover:bg-editorial-dark/5 hover:text-editorial-dark transition-all"
                                >
                                    Demoliciones
                                </Link>
                                <Link 
                                    href="#acabados" 
                                    onClick={closeMenu}
                                    className="px-8 py-4 font-sans text-sm tracking-widest uppercase text-editorial-stone hover:bg-editorial-dark/5 hover:text-editorial-dark transition-all"
                                >
                                    Acabados
                                </Link>
                                <a 
                                    href="/resources/presupuesto_obra.pdf" 
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    onClick={closeMenu}
                                    className="px-8 py-4 font-sans text-sm tracking-widest uppercase text-editorial-stone hover:bg-editorial-dark/5 hover:text-editorial-dark transition-all"
                                >
                                    Presupuesto
                                </a>
                                <Link                                     href="#documentacion" 
                                    onClick={closeMenu}
                                    className="px-8 py-4 font-sans text-sm tracking-widest uppercase text-editorial-stone hover:bg-editorial-dark/5 hover:text-editorial-dark transition-all"
                                >
                                    Descargas
                                </Link>
                                <Link 
                                    href="#galeria" 
                                    onClick={closeMenu}
                                    className="px-8 py-4 font-sans text-sm tracking-widest uppercase text-editorial-stone hover:bg-editorial-dark/5 hover:text-editorial-dark transition-all"
                                >
                                    Galería
                                </Link>
                                <Link 
                                    href="#contacto" 
                                    onClick={closeMenu}
                                    className="mx-8 mt-4 px-6 py-3 border border-editorial-dark/20 rounded-full text-xs uppercase tracking-widest text-editorial-dark hover:bg-editorial-dark hover:text-editorial-white transition-all duration-500 text-center"
                                >
                                    Contacto
                                </Link>
                            </div>
                        </div>
                    </div>
                )}

                <main className="flex-grow">
                    {children}
                </main>

                <footer id="contacto" className="py-24 px-6 md:px-12 bg-editorial-white border-t border-editorial-dark/5 flex flex-col md:flex-row justify-between items-start md:items-end gap-12">
                    <div className="max-w-md">
                        <h2 className="font-editorial text-4xl mb-6 text-editorial-dark">CONTACTOS</h2>
                        <p className="font-sans text-editorial-stone font-light leading-relaxed mb-8">
                            CSN ARQUITECTOS CONSTRUCTORES
                        </p>
                        <a href="https://wa.me/573155232179" target="_blank" rel="noopener noreferrer" className="text-xl border-b border-editorial-dark pb-1 hover:opacity-60 transition-opacity">
                            Contactar por WhatsApp
                        </a>
                    </div>
                    <div className="text-xs font-sans text-editorial-stone/60 uppercase tracking-widest">
                        © {new Date().getFullYear()} Hospital Infantil Los Ángeles. Todos los derechos reservados.
                    </div>
                </footer>
            </body>
        </html>
    );
}
