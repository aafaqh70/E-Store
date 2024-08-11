import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Add = () => {

    const navigate = useNavigate();
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    category: '',
    image: '',
    price: '',
  });

  const handleChange = (event) => {
    setFormData((prevData) => ({
      ...prevData,
      [event.target.name]: event.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('http://localhost:8080/collection/new/product', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        console.log("sajsdkjnfsdnfsjndfsnk")
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
          <h1>Add New Product</h1>
          <br />
          <br />
          <form onSubmit={handleSubmit} noValidate className="needs-validation">
            <div className="mb-3">
              <label htmlFor="title" className="form-label">Title</label>
              <input
                type="text"
                name="title"
                className="form-control"
                placeholder="Title"
                value={formData.title}
                onChange={handleChange}
                required
              />
              <div className="valid-feedback">Looks good!</div>
              <div className="invalid-feedback">Title should be valid.</div>
            </div>

            <div className="mb-3">
              <label htmlFor="category" className="form-label">Select Category</label>
              <select
                name="category"
                className="form-select"
                value={formData.category}
                onChange={handleChange}
                required
              >
                <option value>Select a category</option>
                <option value="men's clothing">men's clothing</option>
                <option value="women's clothing">women's clothing</option>
                <option value="jewelery">jewelery</option>
                <option value="electronics">electronics</option>
              </select>
              <div className="valid-feedback">Looks good!</div>
              <div className="invalid-feedback">Please select a category.</div>
            </div>

            <div className="mb-3">
              <label htmlFor="description" className="form-label">Description</label>
              <textarea
                name="description"
                className="form-control"
                placeholder="Description"
                value={formData.description}
                onChange={handleChange}
                required
              ></textarea>
              <div className="valid-feedback">Looks good!</div>
              <div className="invalid-feedback">Description should be valid.</div>
            </div>

            <div className="mb-3">
              <label htmlFor="image" className="form-label">Product Image URL</label>
              <input
                type="text"
                name="image"
                className="form-control"
                placeholder="Image URL"
                value={formData.image}
                onChange={handleChange}
                required
              />
            </div>

            <div className="row">
              <div className="mb-3 col-md-4">
                <label htmlFor="price" className="form-label">Price</label>
                <input
                  type="number"
                  name="price"
                  className="form-control"
                  placeholder="Price"
                  value={formData.price}
                  onChange={handleChange}
                  required
                />
                <div className="valid-feedback">Looks good!</div>
                <div className="invalid-feedback">Price should be valid.</div>
              </div>
            </div>

            <br />
            <br />
            <button className="btn btn-dark add-btn" type="submit">Submit</button>
            <br />
            <br />
          </form>
        </div>
      </div>
    </>
  );
};

export default Add;
