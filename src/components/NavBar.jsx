import { UserAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

const NavBar = () => {
    const navigate=useNavigate();

    const {currentUser,logout}=UserAuth();

    const handleLogout=async ()=>{
        try{
            await logout()

        }catch(error){
            console.log(error)
        }
    }
    return (
        <div className=" navbar fixed z-10 bg-neutral text-neutral-content">
            <div className="containerWrap flex justify-between">
                <button className="btn btn-ghost text-xl">NUScholars</button>
                <div className="flex space-x-4" >
                    {currentUser? <button onClick={()=>navigate("/research-opportunities")}>Research Opportunities</button> : ""}
                    {currentUser? <button onClick={()=>navigate("/chat")}>Chat</button> : ""}
                    {currentUser? <button onClick={handleLogout}>Logout</button> : ""}
                    
                </div>
                
            </div>

        </div>

    );

}
export default NavBar