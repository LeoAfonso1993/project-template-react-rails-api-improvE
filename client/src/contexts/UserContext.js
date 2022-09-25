import { createContext } from "react";
import { useState, useEffect } from "react";

export const UserContext = createContext();

export function UserContextProvider({children}) {
    const [user, setUser] = useState(null)  

    useEffect(()=>{
        fetch("/me")
        .then((r)=>{
            if(r.ok){
                console.log(r)
        r.json().then((user)=>setUser(user))}
        })
        /*.then(() => console.log(user))*/
    }, [])

    return (
        <UserContext.Provider value={{user, setUser}}>
            {children}
        </UserContext.Provider>
    )
}
