import React from 'react';

const Login = () => {
    return (
        <div>
            <div className="container mx-auto p-16 my-10 space-y-16"> 
                <div className="text-center mx-40 py-5">
                    <h2 className="text-4xl mb-5 font-bold">Login</h2>
                    <div className=" mx-40">
                        <p className="text-base font-medium mt-2 leading-relaxed text-center">Welcome back! Please enter your email and password to access your account.</p>
                    </div>
                </div>
                <div className=" text-black mx-64 py-5 border-2 bg-white border-gray-200 rounded-lg p-5">
                    <h2 className="text-2xl text-blue-500 mb-3 font-bold">Login Form</h2>
                    <div className="">
                        <form className="space-y-5">
                            <div className="flex flex-col space-y-2">
                                <label htmlFor="email">Email</label>
                                <input type="email" id="email" name="email" className="border-2 border-gray-200 p-2 rounded-lg" />
                            </div>
                            <div className="flex flex-col space-y-2">
                                <label htmlFor="password">Password</label>
                                <input type="password" id="password" name="password" className="border-2 border-gray-200 p-2 rounded-lg" />
                            </div>
                            <div className="flex flex-col space-y-2">
                                <button className="bg-blue-500 text-white p-2 rounded-lg">Login</button>
                            </div>
                        </form>
                    </div>
                </div>
        </div>
        </div>
    );
};

export default Login;