import { createContext, useCallback } from "react";
import { useState, useEffect } from "react";


export const TrainingContext = createContext();

export function TrainingContextProvider({children}) {

    const [categList, setCategList] = useState([]);
    const [allTrainings, setAllTrainings] = useState([])
    const [counter, setCounter] = useState(0)
    const [cardId, setCardId] = useState(0)
    const [trainingItem, setTrainingItem] = useState("")
    const [picUrl, setPicUrl] = useState("")
    const [quizList, setQuizList] = useState([])
    const [textList, setTextList] = useState([])
    const [videoList, setVideoList] = useState([])
    const [pictureList, setPictureList] = useState([])
    const [trainingUsers, setTrainingUsers] = useState([])
    const [allAssignments, setAllAssignments] = useState([])
    
    

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


    const getAllAssignments = useCallback(async () => {
        const response = await fetch("/allusertraining");
        const results = await response.json();
        setAllAssignments(results);
    }, []);

    useEffect(() => {
        getAllAssignments();
    }, [counter])


    function getTrainingQuizzes(id) {
        fetch(`show_items_quiz/${id}`)
        .then((response) => response.json())
        .then((data) => {
            if (data.error === "Training not found"){
                console.log("training not found")
            } else {
                setQuizList(data)
                };
        })
    }

    function getTrainingTexts(id) {
        fetch(`show_items_text/${id}`)
        .then((response) => response.json())
        .then((data) => {
            if (data.error === "Training not found"){
                console.log("training not found")
            } else {
                setTextList(data)
                };
        })
    }

    function getTrainingVideos(id) {
        fetch(`show_items_video/${id}`)
        .then((response) => response.json())
        .then((data) => {
            if (data.error === "Training not found"){
                console.log("training not found")
            } else {
                setVideoList(data)
                };
        })
    }

    function getTrainingPictures(id) {
        fetch(`show_items_picture/${id}`)
        .then((response) => response.json())
        .then((data) => {
            if (data.error === "Training not found"){
                console.log("training not found")
            } else {
                setPictureList(data)
                };
        })
    }


    return (
        <TrainingContext.Provider value={{categList, setCategList, allTrainings, setAllTrainings, counter, setCounter, cardId, setCardId, trainingItem, setTrainingItem, picUrl, setPicUrl, quizList, getTrainingQuizzes, textList, getTrainingTexts, videoList, getTrainingVideos, pictureList, getTrainingPictures, trainingUsers, setTrainingUsers, allAssignments}}>
            {children}
        </TrainingContext.Provider>
    )
}