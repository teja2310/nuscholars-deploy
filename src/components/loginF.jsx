import React, {useState} from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import {auth} from "../firebase";
import { toast } from "react-toastify";



function LoginF() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");



    const handleSubmit= async (e) => {
        e.preventDefault();
        try {
            await signInWithEmailAndPassword(auth, email, password);
            console.log("User logged in Successfully!");
            window.location.href = "/chat";
            toast.success("User logged in Successfully!", {
                position: "top-center",
            });
        } catch (error) {
            console.log(error.message);
            toast.error(error.message, {
                position: "bottom-center",
            });
        }
    };

   

    return (

        <div className="flex justify-center items-center min-h-screen">
    
    
    <form onSubmit={handleSubmit} className="w-100 p-10 bg-white rounded-lg shadow-lg">
        <h3 className="text-3xl font-bold mb-6 text-center">LOGIN</h3>

        <div className="mb-6">
    <label htmlFor="email" className="block text-lg font-semibold text-gray-800 mb-1">
        Email Address
    </label>
    <input
        id="email"
        name="email"
        type="email"
        
        required
        className="form-input mt-1 block w-full px-4 py-3 rounded-md border border-gray-300 focus:border-blue-500 focus:ring-blue-500 text-lg"
        placeholder="Enter your email address"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
    />
</div>


<div className="mb-6">
    <label htmlFor="password" className="block text-lg font-semibold text-gray-800 mb-1">
        Password
    </label>
    <input
        id="password"
        name="password"
        type="password"
        
        required
        className="form-input mt-1 block w-full px-4 py-3 rounded-md border border-gray-300 focus:border-blue-500 focus:ring-blue-500 text-lg"
        placeholder="Enter your password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
    />
</div>


            <div className="d-grid text-center">
                <button type="submit" className="btn btn-primary">
                    Submit
                </button>
            </div>
            <p className="text-center text-gray-600 font-medium">
    New user? <a href="/signup" className="text-blue-500 hover:text-blue-700">Register Here</a>
</p>


            <div className="d-grid mt-2 text-center">
                <button type="button" className="btn btn-secondary">
                    <a href="/googleacc" className="google-link">Login with Google Account</a>
                </button>
            </div>
            
        </form>

        </div>
    );
}

export default LoginF;