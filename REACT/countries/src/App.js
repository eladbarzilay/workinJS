import CountriesList from './components/CountriesList'
import './App.css';
import axios from 'axios'
import {useEffect,useState} from 'react'
import Search from './components/Search';
import Focus from './components/Focus';

function App() {

  const [countriesList,setCountriesList] = useState([])

  const [search,setsearch] = useState("")  


  let loading = "loading.....";
  useEffect(getCountries, [])
  function getCountries(){
      axios.get('https://restcountries.com/v2/all')
      .then(response =>{
          setCountriesList(response.data);
      } 
      )}

      function searchStr(value){
         setsearch(value);
        }
        


  return (
    <div className="App">
      <Focus/>
      <h3>Countries ({countriesList.length})</h3>
      <Search search={searchStr}/>
      <CountriesList countriesList={countriesList.filter(x => x.name.toLowerCase().includes(search))}/>
    </div>
  );
}

export default App;
