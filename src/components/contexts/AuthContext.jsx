import { createContext, useEffect, useState } from "react";

const AuthContext = createContext()

export const AuthProvider = ({children})=> {

    const [token,setToken]  = useState(null)
    // const [name, setName] = useState("");
    const [loading,setLoading] = useState(true)

        useEffect(()=> {
            const token = localStorage.getItem("token")
            // const name = localStorage.getItem("Aracs")
            
            setToken(token)
            setLoading(false)

        },[])

        console.log(token,"in context")

    return(

<AuthContext.Provider value={{token,setToken,loading}}>
    {/* <AuthContext.Provider value={{ name, setName }}> */}
    {children}
</AuthContext.Provider>
    )
}
export default AuthContext
     