import ListItem from "./ListItem"

function List(props){
    let list= props.list;
    console.log(list);
    return   <ul className="list">
    {list.map(t=>
        <ListItem 
        key={t.id} 
        text={t.title}
        done ={t.isDone}
        />
    )}
    </ul>
}

export default List