import {useState} from 'react'
import Show from "./Show"

function Change(props){

    const [change,setChange] = useState("")


    return   <input onChange={e=>{
        props.change(e.target.value)
    }} type="text"/>

}

export default Change;