import { useState } from "react";

function classNames(...classes) {
    return classes.filter(Boolean).join(" ");
}

export default function Card(props) {
    const [expanded, setExpanded] = useState(false);

    const handledExpanded = () => {
        setExpanded(expanded => !expanded)
    }

    return (
        <div className="w-[850px] h-auto p-6 my-20 bg-[#fbfafb] rounded-lg shadow-lg text-black overflow-hidden">
            <img alt="astrella-homepage" src={props.imgUrl} />
            <h3 className="text-5xl text-left font-thin mt-8 float-left">{props.companyName}</h3>
            <span className="text-3xl text-left text-secondary italic float-left mt-11 ml-1">{props.time}</span>
            <div className="w-full float-left clear-both text-left mt-4">
                {
                    props.stack.map(tech => <span className="bg-secondary py-3 px-4 text-[#fbfafb] mr-2 rounded-full">{tech}</span>)
                }
            </div>
            <div className="w-full float-left clear-both">
                <h4 className="text-3xl text-left font-thin mt-8 px-2 hover:cursor-pointer border-y-2 border-gray-400 flex flex-row justify-between" onClick={handledExpanded}>
                    <div>Detalles</div>
                    <div className={classNames(
                        expanded ? "hidden" : "inline-block"
                    )}>
                        <span className="material-icons">expand_more</span>
                    </div>
                    <div className={classNames(
                        expanded ? "inline-block" : "hidden"
                    )}>
                        <span className="material-icons">expand_less</span>
                    </div>
                </h4>
                <div className={classNames(
                    expanded ? "block" : "hidden"
                )}>
                    {props.children}
                </div>
            </div>
        </div>
    )
}