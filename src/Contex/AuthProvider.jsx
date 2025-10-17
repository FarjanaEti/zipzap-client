import React, { useEffect, useState } from 'react';
import AuthContext from './AuthContext';
import { Children } from 'react';
import {  createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import { auth } from '../Firebase/firebase.init';
import { GoogleAuthProvider } from 'firebase/auth/web-extension';

const AuthProvider = () => {
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

    const signInWithgoogle=()=>{
      signInWithPopup(auth,googleProvider)
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
          signInWithgoogle,
          logOut,
          user,
          loading,
     }                         
 return (
         <AuthContext value={info}>
              {Children}                                                                            
         </AuthContext>
                              );
};

export default AuthProvider;