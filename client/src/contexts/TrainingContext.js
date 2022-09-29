import { createContext, useCallback } from "react";
import { useState, useEffect } from "react";

export const TrainingContext = createContext();

export function TrainingContextProvider({children}) {

    const [categList, setCategList] = useState([]);

    const getCategList = useCallback(async () => {
        const response = await fetch("/allcategories");
        const results = await response.json();
        setCategList(results);
    }, []);

    useEffect(() => {
        getCategList();
    }, [getCategList])

    return (
        <TrainingContext.Provider value={{categList, setCategList}}>
            {children}
        </TrainingContext.Provider>
    )
}