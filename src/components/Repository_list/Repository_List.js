import React, { useEffect, useState} from "react";
import { useParams} from "react-router-dom";
import "../../App.css"
import { VscStarEmpty } from "react-icons/vsc";
import { Header } from "../Header/Header";
import {Link} from "react-router-dom"

const RepositoryList=({RepositoryList})=>{

    const repository=RepositoryList
    const param = useParams()
    const username= RepositoryList.name
    const [ css , setCss ] = useState("test");
    const [ repos_path , setRepos_path ] = useState(`/GitHub_Search_Repos/users/${param.username}/repos`)

    const List=()=>{setRepos_path(`/GitHub_Search_Repos/users/${param.username}/repos/${username}`)}

    useEffect(()=>{
        <Header name={param.username}/>
        List()
    })
    return(
        
        <div className="RepositoryList">
            <Link to={repos_path}>
            <button id="List" className={css} onMouseMove={()=>{setCss("Response_move")}} onMouseLeave={()=>setCss("test")}>
                <h5>{repository.visibility}</h5>
                <h3>{repository.owner.login}</h3>
                <h2>{repository.name}</h2> <br />
                <div className="Repos">
                <div className="Star"><VscStarEmpty />{repository.stargazers_count}</div>
                <div className="Update">updated on:{repository.updated_at} </div>
                </div>
            </button>
            </Link>
        </div>
        
    )
}
export {RepositoryList}