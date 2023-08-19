import Lottie from "lottie-react";
import animationData from "../json/animation_lla4umcg.json";
import "./profile.css";

export default function Profile() {
    return (
        <section id="profile" className="h-[calc(100vh-96px)] flex flex-col lg:flex-row items-center relative">
            <p className="text-4xl mx-28 mt-8 lg:mt-0 text-justify w-full lg:w-[45%] leading-loose">
                Soy <span className="bg-complementary uppercase text-white ring ring-white name">Nefi Urena</span>, <span className="bg-secondary uppercase text-white ring ring-white">Desarrollador Web</span> con dominio
                en diversas herramientas como: 
                <span className="underline decoration-wavy underline-offset-8 ml-4">Angular, React y Typescript.</span>
            </p>
            <Lottie className="w-[70%] lg:w-[40%]" animationData={animationData} loop={true} />
            <span className="absolute bottom-[40px] right-[calc(50%-15px)] z-20 rounded-full 
            border-white transition-all animate-bounce">
                <i className="fa-solid fa-circle-chevron-down text-3xl"></i>
            </span>
        </section>
    )
}