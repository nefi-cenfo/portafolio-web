import { useRef, useState } from "react";
import { toast } from "react-hot-toast";
import Lottie from "lottie-react";
import animationData from "../json/Lrr2LSo2kb.json"
import emailjs from '@emailjs/browser';

export default function Contact() {
    const [emailSent, setEmailSent] = useState(false);
    const form = useRef();
    const emailSendHandler = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_qhyclz7', 'template_4j8xrxf', form.current, 'KmRxY6d0AhMd2G2ff')
            .then(() => {
                toast.success('Correo enviado exitosamente');
                setEmailSent(true);
            }, () => {
                toast.error('Error al enviar el correo');
                setEmailSent(false);
            });
    };

    return (
        <section id="contact" className="w-full">
            <h2 className="text-6xl text-center font-thin text-secondary my-20">Contacto</h2>
            <ul className="flex flex-row justify-center text-secondary">
                <li className="mx-4">
                    <a className="inline-block pointer hover:-translate-y-2 transition-all" href="https://wa.me/50688774174" target="_blank">
                        <i class="fa-brands fa-whatsapp text-6xl"></i>
                    </a>
                </li>
                <li className="mx-4">
                    <a className="inline-block pointer hover:-translate-y-2 transition-all" href="https://www.linkedin.com/in/nefi-urena/" target="_blank">
                        <i class="fa-brands fa-linkedin text-6xl"></i>
                    </a>
                </li>
                <li className="mx-4">
                    <a className="inline-block pointer hover:-translate-y-2 transition-all" href="https://github.com/nefiu12" target="_blank">
                        <i class="fa-brands fa-github text-6xl"></i>
                    </a>
                </li>
            </ul>
            <div className="w-[600px] text-black container mx-auto mt-10">
                {
                    emailSent ? 
                        <div>
                            <p className="text-2xl text-center">Muchas gracias por contactarme. Pronto le contestaré.</p>
                            <Lottie className="px-12" animationData={animationData} loop={false} />
                        </div>
                    :
                        <form ref={form}>
                            <fieldset className="mb-8">
                                <label>Nombre</label>
                                <input type="text" name="user_name" required className="w-full rounded-md focus:border-primary focus:ring focus:ring-secondary focus:ring-opacity-50 invalid:border-red focus:invalid:border-red focus:invalid:ring-red" />
                            </fieldset>
                            <fieldset className="mb-8">
                                <label>Email</label>
                                <input type="email" name="user_email" required className="w-full rounded-md focus:border-primary focus:ring focus:ring-secondary focus:ring-opacity-50 invalid:border-red focus:invalid:border-red focus:invalid:ring-red" />
                            </fieldset>
                            <fieldset className="mb-8">
                                <label>Asunto</label>
                                <input type="text" name="user_subject" required className="w-full rounded-md focus:border-primary focus:ring focus:ring-secondary focus:ring-opacity-50" />
                            </fieldset>
                            <fieldset className="mb-8">
                                <label>Mensaje</label>
                                <textarea name="message" required className="w-full rounded-md focus:border-primary focus:ring focus:ring-secondary focus:ring-opacity-50"></textarea>
                            </fieldset>
                            <button type="submit" onClick={emailSendHandler} className="bg-secondary w-full lg:w-40 p-4 text-lg text-white rounded-lg shadow-lg hover:-translate-y-1 float-right">Enviar</button>
                        </form>
                }
            </div>
        </section>
    )
}