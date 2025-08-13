import { GoLinkExternal } from "react-icons/go";

export default function Item({id, title, desc, link}){
    return(
        <div className="project-card">
            <div className="flex items-center justify-between mb-3" >
                <h3 className="font-bold text-xl text-gray-900">{title}</h3> 
                <a href={link} target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-blue-600 transition-colors">
                    <GoLinkExternal className="text-lg" />
                </a>
            </div> 
            <p className="text-gray-700 leading-relaxed">{desc}</p> 
        </div> 
    )
}
