import React, { useContext, useState } from 'react';
import { FaEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa";
import { FaGoogle } from "react-icons/fa";
import { Link, Outlet } from 'react-router';
import { AuthContext } from '../AuthProvider/AuthProvider';
import Navbar from './Navbar';
import Footer from './Footer';



const Register = () => {

    const [showPassword, setShowPassword] = useState(false)

    const { createUser } = useContext(AuthContext);

    const handleRegister = (e) => {
        // e.preventdefault();
        e.preventDefault();
        const name = e.target.name.value;
        const email = e.target.email.value;
        const password = e.target.password.value;
        console.log(name, email, password);

        // createUser 
        createUser(email, password)
            .then(result => {
                console.log(result.user);
                e.target.reset;
            }) 
            .catch((error) => {
                console.log("ERROR", error.message);
            });

    }



    return (
        <div>
            <Navbar />
            <Outlet />
            <div className="container mx-auto lg:p-16 md:p-5 p-2 my-10 space-y-16"> 
                <div className="text-center lg:mx-40 mx-10 py-5">
                    <h2 className="text-4xl mb-5 font-bold">Register</h2>
                    <div className=" lg:mx-40 mx-10 ">
                        <p className="text-base font-medium mt-2 leading-relaxed text-center"> Please enter your name, email and password to register your account.</p>
                    </div>
                </div>
                <div className=" text-black lg:mx-64 md:mx-20 mx-10 py-5 border-2 bg-white border-gray-200 rounded-lg p-5">
                    <h2 className="text-2xl text-blue-500 mb-3 font-bold">Register Form</h2>
                    <div className="">
                        <form onSubmit={handleRegister} className="space-y-5">
                            <div className="flex flex-col space-y-2">
                                <label htmlFor="name">Name</label>
                                <input type="text" id='name' name='name' placeholder='Name' className='border-2 border-gray-200 p-2 rounded-lg' />
                            </div>
                            <div className="flex flex-col space-y-2">
                                <label htmlFor="email">Email</label>
                                <input type="email" id="email" name="email" placeholder='example@mail.com' className="border-2 border-gray-200 p-2 rounded-lg" />
                            </div>
                            <div className="flex flex-col space-y-2 relative">
                                <label htmlFor="password">Password</label>
                                <input type={showPassword ? 'text' : 'password'} id="password" name="password" className="border-2 border-gray-200 p-2 rounded-lg" placeholder='Password' />
                                <button className="absolute right-3 top-12" onClick={() => setShowPassword(!showPassword)}>
                                    {/* <FaEye /> */}
                                    {
                                        showPassword ? <FaEyeSlash /> : <FaEye />
                                    }
                                </button>
                            </div>
                            <div className="flex flex-col space-y-2">
                                <button className="bg-blue-500 text-white p-2 rounded-lg">Register</button>
                            </div>
                        </form>
                    </div>
                    <div className="flex items-center justify-center">
                        <button className="btn mt-3 p-2 rounded-lg ">
                            <FaGoogle/> Register with Google
                        </button>
                    </div>
                    <div className="">
                        <p className="text-center">Your have an account ? <Link className='underline' to='/login'>Login</Link></p>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default Register;