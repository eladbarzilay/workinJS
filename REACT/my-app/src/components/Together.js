import Show from "./Show"
import Change from "./Change"
import {useState} from 'react'

function Together(){ 

    const [change,setChange] = useState("")
    function changeStr(value){
        setChange(value)
    }

    return <div>
        <Show text={change}/>
        <Change change = {changeStr}/>
    </div>
}

export default Together