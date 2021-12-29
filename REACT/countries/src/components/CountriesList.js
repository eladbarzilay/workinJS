
import Countries from './Countries';


function CountriesList(props) {

    const countriesList = props.countriesList;

    return <ul className="countriesList">
            <Countries countriesList={countriesList}/>
        </ul>
    }

    export default CountriesList;