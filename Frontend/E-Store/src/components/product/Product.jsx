import React from 'react'
import "./product.css"
import { Link, useLocation, useNavigate } from 'react-router-dom'

const Product = () => {

    const location = useLocation();
    const navigate = useNavigate();
   
    const {product} = location.state;

    const onclickHandler = async(e) =>{
    const productId = product._id;

    try {
        console.log(productId)
      const response = await fetch(`http://localhost:8080/collection/${productId}`, {
        method: 'DELETE',
      });
      console.log(await response)
      if (response.ok) {
        navigate('/collection/'); 
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

    
  return (
<>
<div className="row">
        <div className="col-8 offset-3 mt-3">
            <h3>
                {product.title}
            </h3>
        </div>
        <div className="card col-8 offset-3 product-card">
            <div className="card product-card">
                <img src={product.image} className="card-img-top product-image" alt="listing-image" />
                <div className="card-body">
                   
                    <p className="card-text">
                      {product.description}
                    </p>

                    <p className="card-text">$: {product.price}
                    </p>
                </div>
            </div>
                <div className="btns">

                    
                   
                   <Link to= "/product/edit" state={{product}}><button className="btn btn-dark edit-btn">Edit</button></Link>
                        
                        <button onClick={onclickHandler} className="btn btn-dark offset-4">Delete</button>
                  
                </div>
        </div>
        </div>
</>
  )
}

export default Product