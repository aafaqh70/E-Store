const mongoose = require("mongoose");
const Product = require("../models/product.js");
const sampleListings = require("./data.js");

main()
  .then(() => {
    console.log("connected Successfuly");
  })
  .catch((err) => {
    console.log(err);
  });

async function main() {
  await mongoose.connect("mongodb://Aafaq70:Bilo_papi70@ac-3pp6k8r-shard-00-00.xxsw2du.mongodb.net:27017,ac-3pp6k8r-shard-00-01.xxsw2du.mongodb.net:27017,ac-3pp6k8r-shard-00-02.xxsw2du.mongodb.net:27017/?ssl=true&replicaSet=atlas-jzr1wf-shard-0&authSource=admin&retryWrites=true&w=majority&appName=Cluster0");
}

const initData = async () => {
  await Product.deleteMany({});

  const newsampleListings = sampleListings.map((product) => ({
    ...product,
    owner: "66ab55d9dab5226755054eae",
  }));
  await Product.insertMany(newsampleListings);
  console.log("data initialized successfuly");
};

initData();
