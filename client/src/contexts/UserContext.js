import { createContext } from "react";
import { useState, useEffect } from "react";

export const UserContext = createContext();

export function UserContextProvider({children}) {
    const [user, setUser] = useState(null)
      

    useEffect(()=>{
        let abortController = new AbortController();
        let aborted = abortController.signal.aborted;

        async function fetchResults() {
            let r = await fetch("/me");
            let data = await r.json();
            if(aborted === false) {
                setUser(data);
            }
        }
        fetchResults();
        return () => {
            abortController.abort();
        }
    }, [])

    /*useEffect(() => { ###used this to try to persist login in the front end
        const loggedInUser = localStorage.getItem("user");
        if (loggedInUser) {
          const foundUser = JSON.parse(loggedInUser);
          setUser(foundUser);
        }
      }, []);*/

    return (
        <UserContext.Provider value={{user, setUser}}>
            {children}
        </UserContext.Provider>
    )
}
