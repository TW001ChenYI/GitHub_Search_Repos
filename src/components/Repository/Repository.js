import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Header } from "../Header/Header";
import { VscStarEmpty } from "react-icons/vsc"

const Repository = () =>{
    
    const param = useParams()
    const [data,setData] =useState([])
    const [description,setDescription]=useState(null)

    const getRepo = async () =>{
        const response=  await fetch(`https://api.github.com/repos/${param.username}/${param.repo}`)
        const response_json = await response.json()
        console.log(response_json)
        setData(response_json)
        if(response_json.description==null) setDescription("No description, website, or topics provided.")
        else setDescription(response_json.description)
    }

    useEffect(()=>{
        getRepo()
        document.title=`${param.username}/${param.repo}`
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[param.username])

    return(
        <div>
            <Header name={param.username}/>
            <div className="Repository" >
                <div className="Repository_FullName"> {data.full_name}</div><br />
                <div className="Repository_About">About: {description}</div><br />
                <div><VscStarEmpty /> {data.stargazers_count}</div>
                <button onClick={()=>{const Webpage = window.open('about:blank');Webpage.window.location.href=`https://github.com/${param.username}/${data.name}`}}>GitHub</button>
            </div>
        </div>
    )
}

export {Repository}