/* eslint-disable react-refresh/only-export-components */
import { createUserWithEmailAndPassword } from 'firebase/auth';
import React, { createContext, useState } from 'react';
import auth from '../firebase/firebase.init';


export const AuthContext = createContext();

const AuthProvider = ({children}) => {


    const [loeding, setLoeding] = useState(true);
    const [user, setUser] = useState(null);


    const crateUser = (email, password) =>{
        setLoeding(true);
        return createUserWithEmailAndPassword(auth, email, password)
    }




    const authInfo = {
        user,
        crateUser,
        
    }

    return (
        <AuthContext.Provider value={authInfo} >
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;