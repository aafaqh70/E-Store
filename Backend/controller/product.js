const Product = require("../models/product")

module.exports.getProducts = async(req, res) => {
    
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
  }

  module.exports.getProductById = async(req, res) => {
    const paramid = req.params;
    const womenCollection = await Product.find({_id : paramid});
    res.send(womenCollection)
  }

  module.exports.createProduct =  async (req, res) => {
    
    //   const { title, description, category, image, price } = req.body;
  
      const newProduct = new Product(req.body);
      await newProduct.save();
      res.status(201).json(newProduct);
      console.log("Successfully added")
  }

  module.exports.updateProduct = async (req, res) => {
    const { id } = req.params;
    console.log(req.body)
      const updatedListing = await Product.findByIdAndUpdate(id, req.body.product, { new: true });
      res.send(updatedListing)
      console.log(updatedListing)
  }

  module.exports.deleteProdyct = async (req, res) => {
    let { id } = req.params;
    const deletedProduct = await Product.findByIdAndDelete(id);
    res.send("Successfuly Deleted")
    console.log(deletedProduct)
  }