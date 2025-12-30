import Hero from '@/components/Hero';
import ProjectSection from '@/components/ProjectSection';
import Arquitectura from '@/components/Arquitectura';
import Materials from '@/components/Materials';
import Ceilings from '@/components/Ceilings';
import Sustainability from '@/components/Sustainability';
import Execution from '@/components/Execution';
import Demolitions from '@/components/Demolitions';
import Acabados from '@/components/Acabados';
import Systems from '@/components/Systems';
import TechnicalDocs from '@/components/TechnicalDocs';
import Gallery from '@/components/Gallery';
import AiAssistant from '@/components/AiAssistant';

export default function Home() {
    return (
        <div className="w-full overflow-hidden">
            {/* 1. HOME */}
            <Hero />
            
            {/* 2. PROYECTO (VISIÓN GENERAL) */}
            <div id="proyecto">
                <ProjectSection />
            </div>
            
            {/* 3. ARQUITECTURA (LÁMINA 1) */}
            <div id="arquitectura">
                <Arquitectura />
            </div>
            
            {/* 4. MATERIALIDAD – PISOS (LÁMINA 2) */}
            <div id="materiales">
                <Materials />
            </div>
            
            {/* 5. CIELOS E ILUMINACIÓN (LÁMINA 3) */}
            <div id="cielos">
                <Ceilings />
            </div>
            
            {/* 6. SUSTENTABILIDAD (LÁMINA 4) */}
            <div id="sustentabilidad">
                <Sustainability />
            </div>
            
            {/* 7. EJECUCIÓN DEL PROYECTO (LÁMINA 5) */}
            <div id="ejecucion">
                <Execution />
            </div>
            
            {/* 8. DEMOLICIONES (LÁMINA 6) */}
            <div id="demoliciones">
                <Demolitions />
            </div>
            
            {/* 9. ACABADOS (LÁMINA 7) */}
            <div id="acabados">
                <Acabados />
            </div>
            
            {/* 10. SISTEMAS TÉCNICOS */}
            <div id="sistemas">
                <Systems />
            </div>
            
            {/* 11. DOCUMENTACIÓN TÉCNICA */}
            <div id="documentacion">
                <TechnicalDocs />
            </div>
            
            {/* 12. GALERÍA DE RENDERS */}
            <div id="galeria">
                <Gallery />
            </div>
            
            {/* 13. CONSULTAR AL ESTUDIO (IA) */}
            <AiAssistant />
        </div>
    );
}
