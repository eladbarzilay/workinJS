import axios from "axios";
import { useState, useEffect } from 'react';
import {useParams} from 'react-router-dom'
import { Link } from "react-router-dom";
import Product  from "./Product";

export default function CategoriesProduct() {

  const params = useParams()

  const [CategoriesProduct, setCategoriesProduct] = useState([]);

  useEffect(getCategoriesProduct, []);

  function getCategoriesProduct() {
    axios.get(`https://fakestoreapi.com/products/category/${params.category}`)
      .then((res) => {
          console.log(res.data);
        setCategoriesProduct(res.data);
      });
  }

  // return <div>
  //     {CategoriesProduct.map(category => <Link to={`/product/${category.id}`}> {category.title} </Link>)}
  // </div>;
  if(Product.length > 0 ){
  return <div className="categoriesProduct">
  {CategoriesProduct.map(category => {return <Product id={category.id}/>})}
</div>;
}else{
  return <div>loading....</div>
}
}
