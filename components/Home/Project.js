import { GoLinkExternal } from "react-icons/go";

export default function Project({id, title, desc, githubLink}){
    return(
        <div className="project-card rounded-xl px-4 py-6">
            <div className="flex items-center justify-between" >
                <h1 className="font-bold text-xl">{title}</h1> 
                <a href={githubLink}>
                    <GoLinkExternal/>
                </a>
            </div> 
            <p className="text-md mt-2">{desc}</p> 
        </div> 
    )
}
