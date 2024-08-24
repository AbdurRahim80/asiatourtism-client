

import { createContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, GithubAuthProvider, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from 'firebase/auth';
import auth from '../firebase/firebase.config';

// create context
export const AuthContext = createContext(null);

// firebase provider
const googleProvider = new GoogleAuthProvider();
const githubProvider = new GithubAuthProvider();

const AuthProviders = ({ children }) => {

    const [spot, setSpot] = useState({});
    useEffect(()=>{
        fetch('http://localhost:5000/spot')
        .then(res=>res.json())
        .then(data=>{
            data.map(spt => setSpot(spt))
            
        })

    },[])

    console.log(spot);



    const [user, setUser] = useState({});
    const [loading, setLoading] = useState(true);

    // singUp email and password
    const createUserSignUpWithEmailPassword =(email, password)=>{
        setLoading(true);
        return createUserWithEmailAndPassword(auth,email,password);
    }

    // sign In with email and password
    const userSignIn =(email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
    }

    // update profile
    const updateUserProfile = (object)=> {
        setLoading(true);
        return updateProfile(auth.currentUser, object);
    }

    // sign in with google 
    const google = () => {
        setLoading(true);
        return signInWithPopup(auth, googleProvider)
    }

    // sign in with google 
    const github = () => {
        setLoading(true);
        return signInWithPopup(auth, githubProvider);
    }

    // sing out
    const logOut = ()=>{
        setLoading(true)
        return signOut(auth)
    }

    // user
    useEffect(()=>{
        const unSubcribe = onAuthStateChanged(auth, (currentUser)=>{
            setUser(currentUser);
            setLoading(false);
        });
        return unSubcribe;
    },[])
    


    const info = {
        createUserSignUpWithEmailPassword,
        userSignIn,
        updateUserProfile,
        google,
        github,
        user,
        loading,
        logOut,
        spot
    }
    return (
        <AuthContext.Provider value={info}>
            {children}
        </AuthContext.Provider>
    );
};





export default AuthProviders;
