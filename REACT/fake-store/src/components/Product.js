import axios from "axios";
import { useState, useEffect } from 'react';
import {Link, useParams} from 'react-router-dom'


export default function Product(props){

    const params = useParams()

    const [Product, setProduct] = useState([]);
  
    useEffect(getProduct, []);
  
    function getProduct() {
      axios.get(`https://fakestoreapi.com/products/${props.id}`)
        .then((res) => {
            console.log(res.data);
          setProduct(res.data);
        });
    }

    return <div className="product" > <Link to={`/product/${props.id}`} className="productLink">
       <img  width="100px" height="100px" src={Product.image}/>
       <h2>{Product.price}$</h2>
       <button >Add To Cart</button>
       <h3>{Product.title} </h3>
       </Link>
    </div>

}