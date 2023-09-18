import React, { createContext, useEffect, useState } from 'react'

export const AuthContext = createContext();

const ContextProvider = ({ children }) => {
    const [serchbox, setSearchBox] = useState("")
    const [page, setPage] = useState(1)

    const [isLoading, setIsLoading] = useState(false);
    const [isError, setIsError] = useState(false);
    const [Movies, setMovies] = useState([]);

    const fetchData = async () => {
        try {
            setIsLoading(true);
            const res = await fetch(`http://localhost:4000/movies?title=${serchbox}&page=${page}&&limit=12`);
            const ans = await res.json();
            setMovies(ans)
            setIsLoading(false);
        } catch (err) {
            setIsError(true);
        }
    }

    useEffect(() => {
        fetchData();
    }, [serchbox, page])

    const [Ele, setEle] = useState({})
    const [token,setToken] = useState("Empty") ;
    const[LoginAuth,setLoginAuth] = useState(false) ;

    return (
        <AuthContext.Provider value={{
            Movies, setMovies,
            isLoading, setIsLoading,
            isError, setIsError,
            serchbox, setSearchBox,
            page, setPage,
            Ele, setEle,
            token,setToken,
            LoginAuth,setLoginAuth
        }}>
            {children}
        </AuthContext.Provider>
    )
}

export default ContextProvider
