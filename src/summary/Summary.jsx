export default function Summary() {
    return (
        <section id="summary" className="grid grid-flow-row lg:grid-rows-5 lg:grid-cols-3 gap-4 mt-20">
            <h2 className="text-6xl text-center lg:text-left font-thin lg:row-start-1 lg:row-end-2 lg:col-start-2 lg:col-span-2">Acerca de mi</h2>
            <img className="w-[382px] lg:row-start-2 lg:row-span-4 lg:col-start-1 lg:col-end-2 justify-self-center" alt="avatar" src="src/assets/avatar.png" />
            <div className="lg:row-start-2 lg:row-span-4 lg:col-start-2 lg:col-span-2 pr-6">
                <p className="text-lg mb-5 text-justify">
                    Soy oriundo de San José, Costa Rica.
                </p>
                <p className="text-lg mb-5 text-justify">
                    Inicie mi carrera en software en el año 2011 cuando lleve el técnico en 
                    Desarrollo de Software. En el año 2013 tome un curso intensivo de Desarrollo 
                    Web en avVenta, luego entre a laborar ahí mismo como Desarrollador Web. 
                    Estuve en avVenta/Accenture por 6 años, trabajando en distintos proyectos, 
                    Subaru of America, MyParking (proyecto interno), y TOMS (proyecto interno), como los principales.
                </p>
                <p className="text-lg mb-5 text-justify">
                    En el año 2019, entre a trabajar a Gorilla Logic, desempeñando el puesto de 
                    Desarrollador Web, he trabajado en proyectos como MyArrow, y Astrella donde estoy actualmente.
                </p>
                <p className="text-lg mb-5 text-justify">
                    Soy apasionado por interfaces con una excelente presentación y facilidad de usar. 
                </p>
            </div>
            <div className="lg:row-start-5 lg:row-span-1 lg:col-start-2 lg:col-span-1 pt-6">
                <a className="text-lg inline-block p-4 bg-transparent border-2 border-white rounded-lg shadow-lg uppercase hover:-translate-y-1" href="src/assets/nefi-resume.pdf" target="_blank">Ver curriculum vitae</a>
            </div>
        </section>
    )
}
