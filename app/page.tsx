import Hero from '@/components/Hero';
import ProjectSection from '@/components/ProjectSection';
import Materials from '@/components/Materials';
import Systems from '@/components/Systems';
import Estimates from '@/components/Estimates';
import Gallery from '@/components/Gallery';
import AiAssistant from '@/components/AiAssistant';

export default function Home() {
    return (
        <div className="w-full overflow-hidden">
            <Hero />
            <div id="proyecto">
                <ProjectSection />
            </div>
            <div id="materiales">
                <Materials />
            </div>
            <div id="sistemas">
                <Systems />
            </div>
            <div id="estimaciones">
                <Estimates />
            </div>
            <div id="galeria">
                <Gallery />
            </div>
            <AiAssistant />
        </div>
    );
}
