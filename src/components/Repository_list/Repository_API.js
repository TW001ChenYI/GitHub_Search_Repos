import { useEffect,useState } from "react"
import { useParams ,Link} from "react-router-dom";
import { RepositoryContain } from "./Repository_Contain";
import { Header } from "../Header/Header";

const RepositoryAPI =()=>{
    const param =useParams() 
    const [ repository , setRepository ] =useState([])
    const [ page , setPage ] = useState(1)
    const [ load , setLoad ]=useState()
    const [ userImg , setUserImg ] =useState(null)
    const [ ImgCss, setImgCss ]=useState(null)

    useEffect(()=>{
        document.title=param.username
        getRepos()
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[])

    const getRepos= async()=>{
        fetch(`https://api.github.com/users/${param.username}/repos?page=${page}&per_page=10`)
        .then(async res=>{
            if(res.status===200)
            {  
                const response_json = await res.json()
                if(response_json.length<10 && repository.length!==0) return 
                if(response_json.length===0) return setLoad("此人尚未建立資料，點擊回首頁")
                setRepository(repository.concat(response_json))
                setUserImg(response_json[0].owner.avatar_url)
                if(response_json[0].owner.avatar_url!==null) {setImgCss("ImgSize")}
            }
            else if(res.status===404){setLoad("查無此人資料，請重新查詢，點擊回首頁")}
            else setLoad("Error: "+res.status)
        })
        setPage(page+1)
    }

    useEffect(()=>{
        window.addEventListener('scroll',isTouchBottom)
        return () => { window.removeEventListener('scroll',isTouchBottom) } 
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[repository])

    const isTouchBottom = () => {
        const showHeight = window.innerHeight || document.documentElement.clientHeight; 
        console.log(showHeight);
        const scrollTopHeight = document.body.scrollTop || document.documentElement.scrollTop ;
        const allHeight = document.body.scrollHeight || document.documentElement.scrollHeight; 
        if (allHeight <= showHeight + scrollTopHeight) {
            getRepos()
        }
    };

    return(
    <div >
        <Header name={param.username}/>
        <Link to="/GitHub_Search_Repos">{load}</Link>
        <div className="SearchAPI">
            <div className="Profile">
                <img alt="profile" src={userImg} className={ImgCss}/>
            </div>
            <div><RepositoryContain Repositories={repository}/></div>
        </div>
    </div>
        )
    } 
export {RepositoryAPI}