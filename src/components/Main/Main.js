import { BrowserRouter, Routes,Route} from "react-router-dom"
import { Home } from "../Home/Home"
import { Repository } from "../Repository/Repository" 
import { Notfound } from "../Notfound/Notfound"
import { RepositoryAPI } from "../Repository_list/Repository_API"

export const Main =()=>{
    return(
        <BrowserRouter>
            <Routes> 
                <Route exact path="/GitHub_Search_Repos/" element={<Home />} />
                <Route exact path="/GitHub_Search_Repos/users/:username/repos" element={<RepositoryAPI />} />
                <Route exact path="/GitHub_Search_Repos/users/:username/repos/:repo" element={<Repository />} />
                <Route path="*" element={<Notfound />}></Route>
            </Routes>
        </BrowserRouter>
    )
}
export default Main