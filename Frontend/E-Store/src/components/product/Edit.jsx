import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

const Edit = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { product } = location.state;

  const [formData, setFormData] = useState({
    title: product.title,
    description: product.description,
    price: product.price,
  });

 
  const handleChange = (event) => {
    setFormData((prevData) => ({
      ...prevData,
      [event.target.name]: event.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const productId = product._id;

    try {
        console.log(formData)
      const response = await fetch(`http://localhost:8080/collection/${productId}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        
        body: JSON.stringify({ product: formData }),
      });

      console.log(await response.json())

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
        <div className="col-8 offset-2">
          <h1>Edit Product</h1>
          <br />
          <br />
          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label htmlFor="title" className="form-label">
                Title
              </label>
              <textarea
                id="title"
                name="title"
                className="form-control"
                value={formData.title}
                onChange={handleChange}
                rows="2"
              ></textarea>
            </div>

            <div className="mb-3">
              <label htmlFor="description" className="form-label">
                Description
              </label>
              <textarea
                id="description"
                name="description"
                className="form-control"
                value={formData.description}
                onChange={handleChange}
                rows="10"
              ></textarea>
            </div>

            <div className="row">
              <div className="mb-3 col-md-4">
                <label htmlFor="price" className="form-label">
                  Price
                </label>
                <input
                  id="price"
                  type="number"
                  name="price"
                  className="form-control"
                  value={formData.price}
                  onChange={handleChange}
                />
              </div>
            </div>

            <br />
            <br />

            <button className="btn btn-dark edit-btn">Submit</button>
            <br />
            <br />
          </form>
        </div>
      </div>
    </>
  );
};

export default Edit;
