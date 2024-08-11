import React, { useEffect, useState } from 'react'
import { Link, useLocation } from "react-router-dom";
import "./show.css"

const Show = () => {

    const [products, setProducts] = useState([])

    const location = useLocation();
    const { category } = location.state || {}; 
  
    console.log(category);
    

    const Getcollection = `http://localhost:8080/collection/${category}`
    useEffect(() =>{
      console.log("use Effect",category)
        const fetchData = async()=>{

        const resposne =  await fetch(Getcollection);
        const data = await resposne.json();

        console.log(data)
        setProducts(data);
    }

    fetchData();
        
    },[])

  return (
    <>
    <div  className="row row-cols-xxl-3 row-cols-xxl-3 row-cols-xl-3 row-cols-lg-3 row-cols-md-2 row-cols-sm-1 justift-cotent-center">
    {products.map((product) => (
        
      
      <Link to= "/product" state={{product}} key={product._id}>
        <div className="card col show-card">
          <img src= {product.image} className="card-img-top show-image" alt="listing-image" />
          <div className="card-body">
            <p className="card-text">
              <b>
                {product.title}
              </b> <br />
              $ {product.price}
              <i className="tax-info">&nbsp; &nbsp;</i>
            </p>
          </div>
        </div>
      </Link>
  
  
        ))}
</div>
    </>
  )
}

export default Show