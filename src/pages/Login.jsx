import { useEffect } from "react";
import { UserAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";
import logo from "./logo.png"
const Login = () => {
    const navigate=useNavigate();
    const {currentUser, signinWithGoogle}=UserAuth()
    
    const handleLogin=async ()=>{

        try{
            await signinWithGoogle()

        } catch(error){
            console.log(error)
        }
    }

    useEffect(()=>{
        if(currentUser){
            navigate("/chat")
        }

    },[currentUser])
    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col lg:flex-row">
                <img src={logo} className="max-w-sm rounded-lg shadow-2xl" />
                <div>
                    <h1 className="text-5xl font-bold">Welcome!</h1>
                    <p className="py-6">Welcome to NUScholars, a dynamic platform designed unite NUS's research community. Whether you're looking to engage in real-time chats with professors and students, or explore the research openings, our web app provides a user-friendly experience to help you achieve your goals. Join our community today and take the first step towards a more connected and productive future!</p>
                    <button onClick={handleLogin} className="btn">Login With Google</button>
                </div>
            </div>
        </div>
    );

}
export default Login