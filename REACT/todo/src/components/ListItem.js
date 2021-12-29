function ListItem(props){
    return <li className={props.done ? ' done' : ''}>
        {props.text} 
        <span><input type="checkBox" defaultChecked={props.done}/>
        {props.done ? null : <button id="x">x</button>} </span>
        </li>
}
export default ListItem;