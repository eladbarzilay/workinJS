
import {useState} from 'react'

function Clicker(){
    const [counter,setCounter] = useState(0);

    function clicked(){
        setCounter(counter+1);
    }

    return <div>
            <h1>you clicked {counter} times</h1>
        <button onClick={clicked}>click me!</button>
    </div> 
}

export default Clicker