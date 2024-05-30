import { UserAuth } from "../context/AuthContext";

const NavBar = () => {

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
                {currentUser? <button onClick={handleLogout}>Logout</button> : ""}
            </div>

        </div>

    );

}
export default NavBar