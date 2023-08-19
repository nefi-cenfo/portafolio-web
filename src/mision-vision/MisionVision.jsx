import { Carousel } from "react-responsive-carousel";
import "./mision-vision.css";

export default function MisionVision() {
    return (
        <section id="mision-vision" className="h-[500px] mt-20">
            <Carousel showStatus={false}>
                <div key="slide1" className="h-[500px] flex flex-col items-center">
                    <h2 className="text-6xl text-center font-thin mb-20">Mision</h2>
                    <p className="thought text-secondary text-3xl">
                        Desarrollar productos web con una apariencia agradable y accesible que cumpla con las necesidades de cada usuario.
                    </p>
                </div>
                <div key="slide2" className="h-[500px] flex flex-col items-center">
                    <h2 className="text-6xl text-center font-thin mb-20">Vision</h2>
                    <p className="thought text-secondary text-3xl">
                        Ser un referente en la industria por el liderazgo en los equipos de trabajo, y por fortalecer las buenas prácticas
                        en los proyectos para contribuir en la formación de nuevos profesionales.
                    </p>
                </div>
            </Carousel>
        </section>
    )
}