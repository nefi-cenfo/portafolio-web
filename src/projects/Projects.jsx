import { Carousel } from "react-responsive-carousel";
import Card from "../card/Card";

export default function Projects() {
    return (
        <section id="projects" className="mt-20">
            <h2 className="text-6xl text-center font-thin">Proyectos</h2>
            <Carousel showStatus={false}>
                <div key="slide1" className="min-h-max flex flex-row justify-center">
                    <Card companyName={'Astrella'} time={'2020 - Actualidad'} imgUrl={"src/assets/astrella_homepage.png"} stack={["Angular", "Sass", ".NET", "Azure"]}>
                        <div className="text-lg text-justify">
                            <p className="mt-4">
                                Astrella es un Angular app con .Net API, operada en la nube por medio de Azure. Ofrece a las empresas un facil
                                manejo de sus acciones en el mercado privado, gestionando la informacion de sus stakeholders. El programa funciona
                                como un archivo donde se pueden guardar todo el historial de acciones de la compañia, entre las transferencias que pueden
                                realizar cada stakeholder. El administrador es libre de realizar y/o aprobar transferencias de sus stakeholders.
                            </p>
                            <p className="mt-4">
                                Es una aplicacion con multi rol, en donde un usuario puede loguearse de distintas formas para realizar
                                tareas especificas segun corresponda.
                            </p>
                            <p className="mt-4">
                                Es altamente customizable, se puede especificar la configuracion que el administrador desea aplicar desde la configuracion basica
                                como la interfaz numerica, moneda, reglas de transferencia, hasta configuracion avanzada con planes manejado por medio
                                de Stripe para gestionar gran cantidad de informacion.
                            </p>
                            <p className="mt-4">
                                Se integra con diferentes third parties para ofrecer una experiencia unica a los usuarios, de las cuales puedo
                                citar: Nuarca Blockchain, Charli ai, AST, Stripe, Derivatas, Box, Docusign.
                            </p>
                            <p className="mt-4">
                                Mis tarea es encargarme del UI de la aplicacion para que sea lo mas amistoso posible al usuario, realizando integraciones con los
                                diferentes third parties para poder visualizar grapicos, tablas, widgets, formularios, exploradores de archivos, emails.
                            </p>
                            <p className="mt-4">
                                Puede ver mas informacion acerca de la aplicacion asi como demos en el siguiente link:
                                <a className="text-secondary underline ml-1" href="https://www.youtube.com/@AstrellaHQ" target="_blank">Astrella Channel</a>
                            </p>
                            <a className="inline-block mt-4 text-secondary underline" href="https://app.astrella.com/entry" target="_blank">Astrella Website</a>
                        </div>
                    </Card>
                </div>
                <div key="slide2" className="min-h-max flex flex-row justify-center">
                    <Card companyName={'MyArrow'} time={'2019 - 2020'} imgUrl={"src/assets/myarrow_homepage.png"} stack={["Angular", "Sass", "Springbot", "MongoDB"]}>
                        <div className="text-lg text-justify">
                            <p className="mt-4">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                            </p>
                            <p className="mt-4">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                            </p>
                            <p className="mt-4">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                            </p>
                            <p className="mt-4">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                            </p>
                            <p className="mt-4">
                                Puede ver mas informacion acerca de la aplicacion asi como demos en el siguiente link:
                                <a className="text-secondary underline ml-1" href="https://www.youtube.com/watch?v=UwCEqIVgb-M&ab_channel=ArrowComponents" target="_blank">MyArrow Channel</a>
                            </p>
                            <a className="inline-block mt-4 text-secondary underline" href="https://my.arrow.com/en-US/login" target="_blank">MyArrow Website</a>
                        </div>
                    </Card>
                </div>
                <div key="slide3" className="min-h-max flex flex-row justify-center">
                    <Card companyName={'TOMS'} time={'2018 - 2019'} imgUrl={"src/assets/undraw_snap_the_moment_re_88cu.svg"} stack={["Angular", ".NET"]}>
                        <div className="text-lg text-justify">
                            <p className="mt-4">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                            </p>
                            <p className="mt-4">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                            </p>
                            <p className="mt-4">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                            </p>
                            <p className="mt-4">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                            </p>
                            <p className="mt-4">
                                Puede ver mas informacion acerca de la aplicacion asi como demos en el siguiente link:
                                <a className="text-secondary underline ml-1" href="https://www.youtube.com/watch?v=UwCEqIVgb-M&ab_channel=ArrowComponents" target="_blank">MyArrow Channel</a>
                            </p>
                            <a className="inline-block mt-4 text-secondary underline" href="https://my.arrow.com/en-US/login" target="_blank">MyArrow Website</a>
                        </div>
                    </Card>
                </div>
                <div key="slide4" className="min-h-max flex flex-row justify-center">
                    <Card companyName={'MyParking'} time={'2017 - 2018'} imgUrl={"src/assets/undraw_snap_the_moment_re_88cu.svg"} stack={["Angular", ".NET"]}>
                        <div className="text-lg text-justify">
                            <p className="mt-4">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                            </p>
                            <p className="mt-4">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                            </p>
                            <p className="mt-4">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                            </p>
                            <p className="mt-4">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                            </p>
                            <p className="mt-4">
                                Puede ver mas informacion acerca de la aplicacion asi como demos en el siguiente link:
                                <a className="text-secondary underline ml-1" href="https://www.youtube.com/watch?v=UwCEqIVgb-M&ab_channel=ArrowComponents" target="_blank">MyArrow Channel</a>
                            </p>
                            <a className="inline-block mt-4 text-secondary underline" href="https://my.arrow.com/en-US/login" target="_blank">MyArrow Website</a>
                        </div>
                    </Card>
                </div>
                <div key="slide5" className="min-h-max flex flex-row justify-center">
                    <Card companyName={'Subaru of America'} time={'2013 - 2017'} imgUrl={"src/assets/subaru_homepage.png"} stack={["Knockout", "Backbone", "Angular", "Java", "AEM"]}>
                        <div className="text-lg text-justify">
                            <p className="mt-4">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                            </p>
                            <p className="mt-4">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                            </p>
                            <p className="mt-4">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                            </p>
                            <p className="mt-4">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                            </p>
                            <p className="mt-4">
                                Puede ver mas informacion acerca de la aplicacion asi como demos en el siguiente link:
                                <a className="text-secondary underline ml-1" href="https://www.youtube.com/watch?v=UwCEqIVgb-M&ab_channel=ArrowComponents" target="_blank">MyArrow Channel</a>
                            </p>
                            <a className="inline-block mt-4 text-secondary underline" href="https://www.subaru.com/index.html" target="_blank">Subaru of America Website</a>
                        </div>
                    </Card>
                </div>
            </Carousel>
        </section>
    )
}