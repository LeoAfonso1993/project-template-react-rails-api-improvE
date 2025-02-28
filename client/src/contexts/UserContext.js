import { createContext } from "react";
import { useState, useEffect } from "react";
import { useCallback } from "react";

export const UserContext = createContext();

export function UserContextProvider({children}) {
    const [user, setUser] = useState(null)
    const [counter, setCounter] = useState(1)
    const [userList, setUserList] = useState([])
    const [trainingData, setTrainingData] = useState([])
    const [currentUser, setCurrentUser] = useState([])
      

    function json2array(json){
        var result = [];
        var keys = Object.keys(json);
        keys.forEach(function(key){
            result.push(json[key]);
        });
        return result;
    }

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


    const getAllUsers = useCallback(async () => {
        const response = await fetch("/allusers");
        const results = await response.json();
        setUserList(json2array(results));
    }, []);

    useEffect(() => {
        getAllUsers()
    }, [counter])
    
    
    function showTrainings(){
        if(user != null){
            fetch(`traininguser/${user.id}`)
            .then((response) => response.json())
            .then((data) => setTrainingData(data))
        }else{
            console.log('no trainings found')
        }
    }

    useEffect(() => {
        showTrainings()
    }, [counter])
    
    return (
        <UserContext.Provider value={{user, setUser, userList, setCounter, counter, trainingData, setTrainingData, currentUser, setCurrentUser, getAllUsers}}>
            {children}
        </UserContext.Provider>
    )
}
