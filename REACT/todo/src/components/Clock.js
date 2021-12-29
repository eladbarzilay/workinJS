import {useEffect,useState} from 'react'

function Clock(){
    let interval;
const [time , setTime] = useState();
useEffect(startClock,[])

function startClock(){
   interval =  setInterval(() => {
        setTime(new Date().toLocaleTimeString());
    },1000)
    return ()=>clearInterval(interval)
}


    return <div>{time}</div>
}

export default Clock;