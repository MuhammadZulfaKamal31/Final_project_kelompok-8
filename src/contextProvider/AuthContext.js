
import { createContext, useState, useEffect } from "react";
import { privateRequest } from "../axios/RequestMethod";


export const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
    const [currentUser, setCurrentUser] = useState(null);
    const [ready, setReady] = useState(false)

    // useEffect(() => {
    //     if (!currentUser) {
    //         privateRequest.get('/currentuser').then(({ data }) => {
    //             setCurrentUser(data)
    //             setReady(true)
    //         })
    //     }
    // }, [])



    useEffect(() => {
        const fetchData = async () => {
            setReady(true)
            try {
                if (!currentUser) {
                    const { data } = await privateRequest.get('/currentuser')
                    setCurrentUser(data)
                }
            } catch (error) {
                console.log('Error fetching data:', error)
            }
            setReady(false)
        }

        fetchData()
    }, [currentUser])

    return <AuthContext.Provider value={{ currentUser, setCurrentUser, ready, setReady }}>{children}</AuthContext.Provider>;
};