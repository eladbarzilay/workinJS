import "./Exercise.css";
import {useState , useEffect} from 'react';
import axios from "axios";
import {useParams} from 'react-router-dom'



function Exercise(){

    const [exercise , setExercise] = useState({})

    const params = useParams()

    useEffect(getOneExercise , [])

    function getOneExercise(){
        axios.get(`http://localhost:3001/exercises/${params._id}`)
        .then(response =>{
            setExercise(response.data[0])
            console.log(response.data[0]);
        }
        )
    }

    
    return (
        <div>
        {exercise.title?
            <div className="Exercise">
            <h1>{exercise.title}</h1>
            <br/>
            <span>
           {exercise.description}
            <br/>
            {exercise.content.content}
            <br/>
            <br/>
            <a href={exercise.content.sources[0].url} target="#">{exercise.content.sources[0].name}</a>
            <br/>
            {exercise.difficulty}
            <br/>
            {exercise.icon}
            </span>
            <br/>
            {exercise.exerciseType}
            <br/>
            {exercise.solution}
           
                
         </div>
 
         :"loading"}
  </div>
    )}

export default Exercise;
