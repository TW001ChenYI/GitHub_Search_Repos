import { useState,useEffect } from "react"
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";

const Header =(name)=>{
    const param = useParams()
    const [ username,setUserName] = useState(name.name);
    const [ LinkPath,setLinkPath] = useState("/GitHub_Search_Repos")

    const getRepos= async()=>{
        if(username===undefined||document.getElementById('Header_Search_Input').value==="") return alert("請先輸入username");
        setUserName(document.getElementById('Header_Search_Input').value)
        setLinkPath('/GitHub_Search_Repos/users/'+username+'/repos')
    }

    const setName=(e)=>{
        setUserName(e.target.value)
        setLinkPath(`/GitHub_Search_Repos/users/${e.target.value}/repos`)
    }

    useEffect(()=>{
        if(param.username!==undefined&&param.repo===undefined){
            document.getElementById("Header_Search_Input").disabled="false"
            document.getElementById("Header_Search_Input").placeholder="ghpage deploy只能瀏覽靜態網址，故暫時不開放"
        }
        if(name.name!==undefined)
        { 
            document.getElementById('Header_Username').innerText=name.name+'\'s Repository'
            setLinkPath('/GitHub_Search_Repos/users/'+username+'/repos')
        }
        if(username===undefined) return ""
        if(document.getElementById('Header_Search_Input').value==="") return setLinkPath(`/users/${name.name}/repos`);
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[name.name])

    return(
    <div>
        <div className="Header">
            <div className="Logo"><Link to="/GitHub_Search_Repos" onClick={()=>{window.location.load()}}><img title="Logo" alt="LOGO" src={require("../../asset/LOGO.png")} width='60px' height='60px'/></Link></div>
            <div className="SearchForm"> 
                <div className="Header_Search">
                    <input id="Header_Search_Input" className="Header_Search_Input" type="Text" placeholder="Please Search Username" name="UserName" onChange={setName}/>
                </div>
                <div className="Header_Submit">
                    {/* <Link to={LinkPath} onClick={()=>{window.location.load()} }> */}
                    <Link to={LinkPath} >
                        <img title="搜尋" alt="搜尋" onClick={getRepos} src={require('../../asset/search.png')} width='40px' height='40px'/>
                    </Link>
                </div>
            </div>
            <div className="Header_Username">
                <label id="Header_Username"></label>
            </div>
        </div>
    </div>)}
export {Header}