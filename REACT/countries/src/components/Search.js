

function Search(props){

    return   <input className="search" onChange={e=>{
        props.search(e.target.value)
    }} type="text"/>
}


export default Search