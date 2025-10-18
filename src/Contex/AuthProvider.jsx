import React, { Children, useEffect, useState } from 'react';
//import { Children } from 'react';
import {  createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import { auth } from '../Firebase/firebase.init';
import { AuthContext } from './AuthContext';

const AuthProvider = ({children}) => {

const googleProvider= new GoogleAuthProvider()

     const [user,setUser]=useState()
     const [loading,setLoading]=useState()

    const createUser=(email,password)=>{
     setLoading(true)
     return createUserWithEmailAndPassword(auth, email,password)
    }

    const signIn = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
    }

       const logOut = () =>{
        setLoading(true);
        return signOut(auth);
    }

    const signInWithGoogle=()=>{
      signInWithPopup(auth, googleProvider)
    }

     useEffect(() => {// it's a observer
        const unSubscribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser);
            console.log('user in the auth state change', currentUser)
            setLoading(false);
        });

        return () => {
            unSubscribe();
        }
    }, [])

     const info={
          createUser,
          signIn,
          signInWithGoogle,
          logOut,
          user,
          loading,
     }                         
 return (
         <AuthContext value={info}>
              {children}                                                                         
         </AuthContext>
                              );
};

export default AuthProvider;