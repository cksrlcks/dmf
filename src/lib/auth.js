import React, { useState, useEffect, useContext, createContext } from "react";
import firebase from "./firebase";
import { createUser, getUserLevel } from "./db";

const authContext = createContext();

export function AuthProvider({ children }) {
    const auth = useProvideAuth();
    return <authContext.Provider value={auth}>{children}</authContext.Provider>;
}

export const useAuth = () => {
    return useContext(authContext); //컴포넌트에서 useAuth를 호출하면 provider로 제공한 value를 꺼내쓸수있다.
};

function useProvideAuth() {
    const [user, setUser] = useState(null);

    const handleUser = async (rawUser) => {
        if (rawUser) {
            const user = await formatUser(rawUser);

            createUser(user.uid, user);
            setUser(user);
            return user;
        } else {
            setUser(false);
            return false;
        }
    };

    const signinWithGoggle = () => {
        const customGoogleProvider = new firebase.auth.GoogleAuthProvider();
        customGoogleProvider.setCustomParameters({
            prompt: "select_account",
        });
        return firebase
            .auth()
            .signInWithPopup(customGoogleProvider)
            .then((reponse) => {
                handleUser(reponse.user);
                return "success";
            })
            .catch((err) => err);
    };

    const signout = () => {
        return firebase
            .auth()
            .signOut()
            .then(() => handleUser(false));
    };

    useEffect(() => {
        const unsubscribe = firebase.auth().onAuthStateChanged(handleUser);
        return () => unsubscribe();
    }, []);

    return {
        user,
        signinWithGoggle,
        signout,
    };
}

const formatUser = async (user) => {
    const level = await getUserLevel(user.uid);
    return {
        uid: user.uid,
        email: user.email,
        name: user.displayName,
        provider: user.providerData[0].providerId,
        photoUrl: user.photoURL,
        level: level ? level : 5,
    };
};
