import "./LanguageList.css";
import {useState , useEffect} from 'react'
import axios from "axios";
import Language from "../Language/Language";
import ExerciseList from "../ExerciseList/ExerciseList";
import Search from "../Search/Search";


function LanguageList(){

    const [languageList , setLanguageList] = useState([]);

    const [exercises , setExercises] = useState([]);

    useEffect(getLanguageList , [])

    // useEffect(getExercises , [])

    function getLanguageList(){
       axios.get('http://localhost:3001/languages')
        .then(response => 
            setLanguageList(response.data))
    }

    function getExercises(langId){
  
        axios.get(`http://localhost:3001/languages/exercises/${langId}`)
         .then(response => 
            setExercises(response.data)) 
     }

     if(exercises.length>0){
        return (   
            <div className="ExerciseListLan">
            <Search/>

              {exercises.map(exercise => <div><ExerciseList exer={exercise}/></div>)}
            </div>
            )
     }else{
        return (
            <div className="LanguageList">
                {languageList.map(lan =>  <button onClick={()=>getExercises(lan._id)} key={lan._id}> 
                <Language lan={lan}/></button>)}
            </div>)
     }

}

export default LanguageList;
