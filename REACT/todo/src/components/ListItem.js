import {useEffect,useState} from 'react'
import axios from 'axios'

function ListItem(props){


    function deleteTask() {
        console.log(props._id);
        axios.delete(`http://localhost:3030/todo/${props._id}`)
            .then(() => {
                // props.refreshView()
            })
    }

    return <li className={props.done ? 'done' : ''}>
        <label>{props.text}</label>
        <span>
            <input type='checkbox' defaultChecked={props.done} />
            {props.done ? null : <button
                onClick={deleteTask}
                className='x'
            >X</button>}
        </span>
    </li>
}
export default ListItem;