import {RepositoryList } from "./Repository_List";

const RepositoryContain = ({Repositories}) =>{
    return(
        <div>
            {Repositories.map((Repository_List,index)=>{
            return <RepositoryList RepositoryList={Repository_List} key={index}/>})}
        </div>
    )
}

export {RepositoryContain}