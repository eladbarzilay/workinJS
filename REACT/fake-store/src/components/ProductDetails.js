import axios from "axios";
import { useState, useEffect } from 'react';
import {Link, useParams} from 'react-router-dom'


export default function ProductDetails(props){

    const params = useParams()

    const [ProductDetails, setProductDetails] = useState([]);
  
    useEffect(getProductDetails, []);
  
    function getProductDetails() {
      axios.get(`https://fakestoreapi.com/products/${params.id}`)
        .then((res) => {
            console.log(res.data);
          setProductDetails(res.data);
        });
    }
  

if(ProductDetails != 0){
    return <div className="productDetails" >
       <img  width="100px" height="100px" src={ProductDetails.image}/>
       <h2>{ProductDetails.price}$</h2>
       <button >Add To Cart</button>
       <h3>{ProductDetails.description}</h3> 
    </div>
}else{
    return <div>loading.....</div>
}
}