'use client';

import { motion } from 'framer-motion';
import { FileText, ExternalLink, Layers, Paintbrush, Square, Download } from 'lucide-react';

const acabados = {
    pisos: [
        {
            codigo: 'P1 / P2',
            nombre: 'Piso Vinílico Homogéneo Alto Tráfico',
            descripcion: 'Vinilo hospitalario continuo Eclipse warm grey / premium blue según diseño',
            areas: 'Pasillos, consultorios, salas de espera, áreas clínicas'
        },
        {
            codigo: 'P3',
            nombre: 'Enchape Cerámico',
            descripcion: 'Cerámica para baños, piragua en aluminio color natural y emboquillado',
            areas: 'Baños, áreas húmedas'
        },
        {
            codigo: 'P4',
            nombre: 'Piso Existente',
            descripcion: 'Porcelanato gris existente que se conserva',
            areas: 'Áreas no intervenidas'
        }
    ],
    muros: [
        {
            codigo: 'M1',
            nombre: 'Muro Doble en Gyplak RH',
            descripcion: 'Panel resistente a humedad + pintura base. Perfiles metálicos galvanizados Cal 24 a 40.6cm',
            acabado: 'Pintura acrílica blanca alta asepsia Pintuco (3 manos)'
        },
        {
            codigo: 'M2',
            nombre: 'Enchape Cerámico Pared',
            descripcion: 'Enchape cerámico Corona blanco institucional',
            acabado: 'Superficie lavable y resistente'
        }
    ],
    cielos: [
        {
            codigo: 'C1',
            nombre: 'Cielo Raso Gyplac Panel Yeso RH',
            descripcion: 'Panel yeso 12.7mm, junta invisible, ángulos perimetrales, perfiles omega cada 0.61cm',
            acabado: 'Pintura acrílica blanca alta asepsia (3 manos)'
        },
        {
            codigo: 'C2',
            nombre: 'Cielo Tipo Pergola',
            descripcion: 'Tubular de aluminio tipo madera 2x1 según diseño arquitectónico',
            acabado: 'Ver lámina A3 para detalles constructivos'
        }
    ]
};

const pdfs = [
    {
        title: 'Lámina 7 - Planta de Acabados',
        description: 'Plano arquitectónico completo con simbología y especificaciones técnicas',
        path: '/resources/LAMINA 7 ACABADOS.pdf'
    }
];

export default function Acabados() {
    return (
        <section className="w-full py-24 md:py-32 bg-white px-6 md:px-12 lg:px-24 border-b border-editorial-stone/10">
            <div className="max-w-[1920px] mx-auto">

                {/* Header */}
                <div className="max-w-4xl mb-16">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        <span className="block font-sans text-xs uppercase tracking-[0.2em] text-editorial-stone mb-6">
                            Lámina 7 · Acabados
                        </span>
                        <h2 className="font-editorial text-4xl md:text-5xl text-editorial-dark mb-8 leading-tight">
                            Planta de Acabados <br />
                            <span className="italic text-editorial-stone">y Especificaciones Técnicas</span>
                        </h2>
                        <p className="font-sans text-editorial-stone text-lg leading-relaxed font-light max-w-2xl">
                            Definición completa de acabados arquitectónicos: pisos, muros y cielos. 
                            Materiales acordes con normativa hospitalaria, requerimientos de higiene, 
                            seguridad y mantenimiento del Servicio de Urgencias.
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
                            <h3 className="font-editorial text-xl text-editorial-dark">Planta de Acabados</h3>
                            <p className="font-sans text-xs text-editorial-stone mt-1">Distribución de materiales y especificaciones</p>
                        </div>
                        <a 
                            href="/resources/imagenes pdfs/lamina7/LAMINA 7 ACABADOS.pdf" 
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
                            src="/resources/imagenes pdfs/lamina7/principal1.jpg"
                            alt="Planta de Acabados Principal"
                            className="w-full h-auto object-contain"
                        />
                    </div>
                </motion.div>
                {/* Key Features */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16"
                >
                    <div className="bg-editorial-concrete/5 border border-editorial-stone/10 rounded-sm p-6">
                        <Square className="w-6 h-6 text-editorial-dark mb-4" />
                        <h3 className="font-editorial text-xl text-editorial-dark mb-2">Superficie Total</h3>
                        <p className="font-sans text-3xl font-light text-editorial-stone mb-2">1,145.67 m²</p>
                        <p className="text-xs text-editorial-stone/60 uppercase tracking-wider">Área intervenida</p>
                    </div>
                    <div className="bg-editorial-concrete/5 border border-editorial-stone/10 rounded-sm p-6">
                        <Layers className="w-6 h-6 text-editorial-dark mb-4" />
                        <h3 className="font-editorial text-xl text-editorial-dark mb-2">Escala</h3>
                        <p className="font-sans text-3xl font-light text-editorial-stone mb-2">1:100</p>
                        <p className="text-xs text-editorial-stone/60 uppercase tracking-wider">Acotaciones en metros</p>
                    </div>
                    <div className="bg-editorial-concrete/5 border border-editorial-stone/10 rounded-sm p-6">
                        <Paintbrush className="w-6 h-6 text-editorial-dark mb-4" />
                        <h3 className="font-editorial text-xl text-editorial-dark mb-2">Normativa</h3>
                        <p className="text-sm text-editorial-stone leading-relaxed">
                            Cumple normativa vigente para infraestructura hospitalaria
                        </p>
                    </div>
                </motion.div>

                {/* Pisos */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mb-16"
                >
                    <h3 className="font-editorial text-2xl text-editorial-dark mb-6 flex items-center gap-3">
                        <div className="w-2 h-8 bg-editorial-dark rounded-full"></div>
                        Especificaciones Técnicas de Pisos
                    </h3>
                    <div className="grid grid-cols-1 gap-4">
                        {acabados.pisos.map((piso, idx) => (
                            <div key={idx} className="bg-white border border-editorial-stone/10 rounded-sm p-6 hover:border-editorial-dark/20 transition-all">
                                <div className="flex items-start justify-between mb-3">
                                    <div>
                                        <span className="inline-block px-3 py-1 bg-editorial-dark text-white text-xs uppercase tracking-wider rounded-full mb-2">
                                            {piso.codigo}
                                        </span>
                                        <h4 className="font-editorial text-lg text-editorial-dark">{piso.nombre}</h4>
                                    </div>
                                </div>
                                <p className="text-sm text-editorial-stone mb-3 leading-relaxed">{piso.descripcion}</p>
                                <p className="text-xs text-editorial-stone/60 uppercase tracking-wider">
                                    Áreas: {piso.areas}
                                </p>
                            </div>
                        ))}
                    </div>
                </motion.div>

                {/* Muros */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mb-16"
                >
                    <h3 className="font-editorial text-2xl text-editorial-dark mb-6 flex items-center gap-3">
                        <div className="w-2 h-8 bg-editorial-dark rounded-full"></div>
                        Especificaciones Técnicas de Muros
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {acabados.muros.map((muro, idx) => (
                            <div key={idx} className="bg-white border border-editorial-stone/10 rounded-sm p-6 hover:border-editorial-dark/20 transition-all">
                                <span className="inline-block px-3 py-1 bg-editorial-dark text-white text-xs uppercase tracking-wider rounded-full mb-3">
                                    {muro.codigo}
                                </span>
                                <h4 className="font-editorial text-lg text-editorial-dark mb-3">{muro.nombre}</h4>
                                <p className="text-sm text-editorial-stone mb-3 leading-relaxed">{muro.descripcion}</p>
                                <div className="pt-3 border-t border-editorial-stone/10">
                                    <p className="text-xs text-editorial-stone/60 uppercase tracking-wider mb-1">Acabado Final</p>
                                    <p className="text-sm text-editorial-stone">{muro.acabado}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </motion.div>

                {/* Cielos */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mb-16"
                >
                    <h3 className="font-editorial text-2xl text-editorial-dark mb-6 flex items-center gap-3">
                        <div className="w-2 h-8 bg-editorial-dark rounded-full"></div>
                        Especificaciones Técnicas de Cielos Falsos
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {acabados.cielos.map((cielo, idx) => (
                            <div key={idx} className="bg-white border border-editorial-stone/10 rounded-sm p-6 hover:border-editorial-dark/20 transition-all">
                                <span className="inline-block px-3 py-1 bg-editorial-dark text-white text-xs uppercase tracking-wider rounded-full mb-3">
                                    {cielo.codigo}
                                </span>
                                <h4 className="font-editorial text-lg text-editorial-dark mb-3">{cielo.nombre}</h4>
                                <p className="text-sm text-editorial-stone mb-3 leading-relaxed">{cielo.descripcion}</p>
                                <div className="pt-3 border-t border-editorial-stone/10">
                                    <p className="text-xs text-editorial-stone/60 uppercase tracking-wider mb-1">Acabado Final</p>
                                    <p className="text-sm text-editorial-stone">{cielo.acabado}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </motion.div>

                {/* Important Notes */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="bg-editorial-dark/5 border border-editorial-dark/10 rounded-sm p-8 mb-16"
                >
                    <h3 className="font-editorial text-2xl text-editorial-dark mb-6">
                        Notas Generales de Acabados
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                            <ul className="space-y-3 text-sm text-editorial-stone">
                                <li className="flex items-start gap-2">
                                    <span className="text-editorial-stone/40 mt-1">•</span>
                                    <span>Pisos de vinilo hospitalario continuo, antideslizante</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="text-editorial-stone/40 mt-1">•</span>
                                    <span>Zócalo sanitario curvo (media caña) en todos los encuentros piso-muro</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="text-editorial-stone/40 mt-1">•</span>
                                    <span>Muros lavables y resistentes para áreas clínicas</span>
                                </li>
                            </ul>
                        </div>
                        <div>
                            <ul className="space-y-3 text-sm text-editorial-stone">
                                <li className="flex items-start gap-2">
                                    <span className="text-editorial-stone/40 mt-1">•</span>
                                    <span>Cielos técnicos o arquitectónicos según área</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="text-editorial-stone/40 mt-1">•</span>
                                    <span>Coordinación con instalaciones eléctricas, HVAC y equipamiento</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="text-editorial-stone/40 mt-1">•</span>
                                    <span>Cumplimiento normativo para infraestructura hospitalaria</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </motion.div>

                {/* PDF Downloads */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                >
                    <h3 className="font-editorial text-2xl text-editorial-dark mb-6">
                        Documentación Técnica
                    </h3>
                    <div className="grid grid-cols-1 gap-4">
                        {pdfs.map((pdf, idx) => (
                            <a
                                key={idx}
                                href={pdf.path}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="group flex items-center justify-between bg-white border border-editorial-stone/20 hover:border-editorial-dark/40 rounded-sm p-6 transition-all"
                            >
                                <div className="flex items-center gap-4">
                                    <div className="w-12 h-12 bg-editorial-dark/5 rounded flex items-center justify-center group-hover:bg-editorial-dark/10 transition-colors">
                                        <FileText className="w-6 h-6 text-editorial-dark" />
                                    </div>
                                    <div>
                                        <h4 className="font-editorial text-lg text-editorial-dark mb-1">{pdf.title}</h4>
                                        <p className="text-xs text-editorial-stone">{pdf.description}</p>
                                    </div>
                                </div>
                                <ExternalLink className="w-5 h-5 text-editorial-stone group-hover:text-editorial-dark transition-colors" />
                            </a>
                        ))}
                    </div>
                </motion.div>

            </div>
        </section>
    );
}
