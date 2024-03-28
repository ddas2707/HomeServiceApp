import React, { Children, createContext, useEffect, useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

//context
const AuthContext = createContext()
//Provider
const AuthProvider = ({ children }) => {
    //global state
    const [authState, setAuthState] = useState({
        user: null,
        token: ''
    })
    //initial local storage data
    // useEffect(() => {
    //     try {
    //         const loadLocalStorageData = async () => {
    //             const data = await AsyncStorage.getItem('userName')
    //             const LoginData = JSON.parse(data)
    //             setAuthState({ ...authState, user: data?.user, token: data?.token })
    //         }
    //     } catch (error) {
    //         console.error("Error loading user data from AsyncStorage:", error);
    //     }
    //     loadLocalStorageData();
    // }, [])
    useEffect(() => {
        const loadLocalStorageData = async () => {
            try {
                const data = await AsyncStorage.getItem('userName');
                if (data) {
                    const parsedData = JSON.parse(data);
                    setAuthState(prevState => ({
                        ...prevState,
                        user: parsedData.user,
                        token: parsedData.token
                    }));
                }
            } catch (error) {
                console.error("Error loading user data from AsyncStorage:", error);
            }
        };

        loadLocalStorageData();
    }, []);
    return (
        <AuthContext.Provider value={[authState, setAuthState]}>
            {children}
        </AuthContext.Provider>
    )
}
export { AuthContext, AuthProvider };
