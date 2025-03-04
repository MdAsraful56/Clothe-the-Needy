import { createUserWithEmailAndPassword } from 'firebase/auth';
import React, { useState } from 'react';
import auth from '../firebase/firebase.init';

const AuthProvider = () => {


    const [loeding, setLoeding] = useState(true)


    const crateUser = (email, password) =>{
        setLoeding(true);
        return createUserWithEmailAndPassword(auth, email, password)
    }

    return (
        <div>
            
        </div>
    );
};

export default AuthProvider;