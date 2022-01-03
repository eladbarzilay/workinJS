import { useState,useEffect} from 'react'
import axios from "axios";
import { Link } from "react-router-dom";
import CategoriesProduct from './CategoriesProduct';

export default function Categories(){

    const [categories,setCategories] = useState([]);

    useEffect(getCategories,[])

    function getCategories(){
    axios.get('https://fakestoreapi.com/products/categories')
    .then(res => {
        setCategories(res.data);
    })
}
    return <div className="categories">
        
        {categories.map(category => <div><Link key={category} className="categoriesLink" to={`/categoriesProducts/${category}`}> {category} </Link></div> )}
    
    </div>
}