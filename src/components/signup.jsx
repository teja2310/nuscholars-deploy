import { createUserWithEmailAndPassword } from "firebase/auth";
import React, {useState} from "react";
import {auth, db} from "../firebase";
import { setDoc, doc } from "firebase/firestore";
import { toast } from "react-toastify";



function Signup() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [fname, setFname] = useState("");
    const [lname, setLname] = useState("");

    const handleRegister=async (e) => {
        e.preventDefault();
        try {
            await createUserWithEmailAndPassword(auth, email, password);
            const user = auth.currentUser;
            console.log(user);
            if (user) {
                await setDoc(doc(db, "Users", user.uid), {
                    email: user.email,
                    firstName: fname,
                    lastName: lname,
                });
            }
            console.log("User Registered Successfully!");
            
            toast.success("User Registered Successfully!", {
                position: "top-center",
            });

            window.location.href = "/login";
        } catch (error) {
            console.log(error.message);
            toast.error(error.message, {
                position: "bottom-center",
            });
        }
    };

    return (

        <div className="flex justify-center items-center min-h-screen">
         <form onSubmit={handleRegister} className="w-100 p-10 bg-white rounded-lg shadow-lg">
        <h3 className="text-3xl font-bold mb-6 text-center">SIGN UP</h3>


        <div className="mb-6">
    <label htmlFor="fname" className="block text-lg font-semibold text-gray-800 mb-1">
        First Name
    </label>
    <input
        id="fname"
        name="fname"
        type="text"
        className="form-input mt-1 block w-full px-4 py-3 rounded-md border border-gray-300 focus:border-blue-500 focus:ring-blue-500 text-lg"
        placeholder="Enter your first name"
        onChange={(e) => setFname(e.target.value)}
        required
    />
</div>


            <div className="mb-6">
    <label htmlFor="lname" className="block text-lg font-semibold text-gray-800 mb-1">
        Last Name
    </label>
    <input
        id="lname"
        name="lname"
        type="text"
        className="form-input mt-1 block w-full px-4 py-3 rounded-md border border-gray-300 focus:border-blue-500 focus:ring-blue-500 text-lg"
        placeholder="Enter your last name"
        onChange={(e) => setLname(e.target.value)}
    />
</div>


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
                    Sign Up
                </button>
            </div>
            <p className="text-center text-gray-600 font-medium">
    Already Registered? <a href="/login" className="text-blue-500 hover:text-blue-700">Login</a>
</p>

            
        </form>
        </div>
    );
}

export default Signup;