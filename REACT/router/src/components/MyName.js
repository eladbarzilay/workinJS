import { useParams } from "react-router-dom";

export default function MyName(){

    const params= useParams(); 
    return <h1>{params.name}</h1>
}