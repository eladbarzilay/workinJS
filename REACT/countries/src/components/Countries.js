import CountriesItems from './CountriesItems'


function Countries(props) {
    let CountriesList = props.countriesList;


return <ul className="countries">
    {console.log(CountriesList)}
        {CountriesList.map(c=>
            <CountriesItems
            key={c.alpha2Code}
            name={c.name}
            region={c.region}
            flags={c.flags.png}
            />
        )
        }
    </ul>
}

export default Countries;