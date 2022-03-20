import React, { useContext, useEffect, useState } from "react";
import { FireBaseAuth } from "../firebase";



const AuthContext = React.createContext();

export default AuthContext;

export function useAuth() {
    return useContext(AuthContext);
}

export function AuthProvider({ children }) {
    const [currentUser, setCurrentUser] = useState();


    function register(email, password) {
        return FireBaseAuth.createUserWithEmailAndPassword(email, password);
    }
    function login(email,password){
        return FireBaseAuth.signInWithEmailAndPassword(email,password);
    }
    function logout(){
        return FireBaseAuth.signOut();
    }
    useEffect(() => {
        const unsubscribe = FireBaseAuth.onAuthStateChanged(user => {
            setCurrentUser(user);
        });
        return unsubscribe;
    }, []);


    const value = {
        currentUser,
        register,
        login,
        logout,
    }
    return (
        <AuthContext.Provider value={value}>
            {children}
        </AuthContext.Provider>
    );
}