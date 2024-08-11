if (process.env.NODE_ENV != "production") {
    require("dotenv").config();
  }

  const mongoose = require("mongoose");
  const express = require("express");
  const Product = require("./models/product");
  const app = express();
  const port = 8080;
  const cors = require('cors');
  const productRouter = require("./routes/product.js");




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

  app.use("/collection", productRouter)
  
  // -----------Server Listning -----------
  app.listen(port, () => {
    console.log("server is listning on port 8080");
  });
  