

function CountriesItems(props) {


    return <li className="CountriesItem" >
        <img  src={props.flags}/>
        <span>
        {props.name}
        <br/>
        {props.region}
        </span>
        

    </li>
    }

    export default CountriesItems;