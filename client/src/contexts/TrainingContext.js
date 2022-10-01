import { createContext, useCallback } from "react";
import { useState, useEffect } from "react";

export const TrainingContext = createContext();

export function TrainingContextProvider({children}) {

    const [categList, setCategList] = useState([]);
    const [allTrainings, setAllTrainings] = useState([])
    const [counter, setCounter] = useState(0)
    const [cardId, setCardId] = useState(0)
    const [trainingItem, setTrainingItem] = useState("")

    const getCategList = useCallback(async () => {
        const response = await fetch("/allcategories");
        const results = await response.json();
        setCategList(results);
    }, []);

    useEffect(() => {
        getCategList();
    }, [getCategList])

    const getAllTrainings = useCallback(async () => {
        const response = await fetch("/trainings");
        const results = await response.json();
        setAllTrainings(results);
    }, []);

    useEffect(() => {
        getAllTrainings();
    }, [counter])


    return (
        <TrainingContext.Provider value={{categList, setCategList, allTrainings, setAllTrainings, counter, setCounter, cardId, setCardId, trainingItem, setTrainingItem}}>
            {children}
        </TrainingContext.Provider>
    )
}