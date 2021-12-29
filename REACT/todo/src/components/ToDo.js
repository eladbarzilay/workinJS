
import List from "./List"
import TaskForm from "./TaskForm"
import {useEffect,useState} from 'react'
import axios from 'axios'

function ToDo(){

    const [tasks,setTasks] = useState([]);

    useEffect(getTasks,[])

    function getTasks(){
        axios.get('http://localhost:3030/todo')
        .then(res=>{
            setTasks(res.data)
        })
    }

    return <div className="todo">
        <TaskForm/>
        <List list={tasks.filter(t=>!t.isDone)}/>
        <hr />
        <List list={tasks.filter(t=>t.isDone)}/>
    </div>
}
export default ToDo