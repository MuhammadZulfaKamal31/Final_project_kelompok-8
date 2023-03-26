import { useState, useEffect, createContext } from "react";

export const DataContext = createContext()


export const DataProvider = (props) => {
    const getTheme = () => {
        return JSON.parse(localStorage.getItem('theme')) || false
    }

    const [theme, setTheme] = useState(getTheme())
    const [search, setSearch] = useState("")

    useEffect(() => {
        localStorage.setItem('theme', JSON.stringify(theme))
    }, [theme])

    return (
        <DataContext.Provider value={[theme, setTheme, search, setSearch]}>
            {props.children}
        </DataContext.Provider>
    )
}