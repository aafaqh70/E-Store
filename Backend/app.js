if (process.env.NODE_ENV != "production") {
    require("dotenv").config();
  }

  const mongoose = require("mongoose");
  const express = require("express");
  const Product = require("./models/product");
  const app = express();
  const port = 8080;
  const cors = require('cors');




  const dbUrl = process.env.DATABASE_URL;
  
  /*----------Database Connection---------*/
  main()
    .then(() => {
      console.log("connection successful");
    })
    .catch((err) => console.log(err));
  
  async function main() {
    mongoose.connect(dbUrl);
  }

  app.use(cors());
  app.use(express.urlencoded({ extended: true }));
  app.use(express.json());

  app.get("/collection/:category", async(req, res) => {
    
    const collectionC = req.params;
    console.log(collectionC.category)
    let Collection;
    if(collectionC.category !== "undefined"){
        Collection = await Product.find({category : collectionC.category});
    }else{
        Collection = await Product.find({})
    }
    
    res.send(Collection)
    console.log(Collection)
  })

//   app.get("/menCollection/", async(req, res) => {
//     const womenCollection = await Product.find({category : "men's clothing"});
//     res.send(womenCollection)
//   })

//   app.get("/womenCollection/", async(req, res) => {
//     const womenCollection = await Product.find({category : "women's clothing"});
//     res.send(womenCollection)
//   })

  app.get("/womenCollection/:id", async(req, res) => {
    const paramid = req.params;
    const womenCollection = await Product.find({_id : paramid});
    res.send(womenCollection)
  })

  app.get("/menCollection/:id", async(req, res) => {
    const paramid = req.params;
    const womenCollection = await Product.find({_id : paramid});
    res.send(womenCollection)
  })

  app.post("/collection/new/product", async (req, res) => {
    
    //   const { title, description, category, image, price } = req.body;
  
      const newProduct = new Product(req.body);
      await newProduct.save();
      res.status(201).json(newProduct);
      console.log("Successfully added")
  });

  app.put("/collection/:id", async (req, res) => {
    const { id } = req.params;
    console.log(req.body)
      const updatedListing = await Product.findByIdAndUpdate(id, req.body.product, { new: true });
      res.send(updatedListing)
      console.log(updatedListing)
  });

  app.delete("/collection/:id", async (req, res) => {
    let { id } = req.params;
    const deletedProduct = await Product.findByIdAndDelete(id);
    res.send("Successfuly Deleted")
    console.log(deletedProduct)
  })
  
  // -----------Server Listning -----------
  app.listen(port, () => {
    console.log("server is listning on port 8080");
  });
  