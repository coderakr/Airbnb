const mongoose = require("mongoose");
const initDb = require("./data");
const Listing = require("../models/listing");

const mongo_url = "mongodb://127.0.0.1:27017/wanderlust";
main()
  .then((res) => {
    console.log("db connected");
  })
  .catch((err) => {
    console.log(err);
  });

async function main() {
  await mongoose.connect(mongo_url);
}

async function savetodb() {
  await Listing.deleteMany({});
  initDb.data = initDb.data.map((obj) => ({
    ...obj,
    owner: "688841ffdb9969034a22864b",
  }));
  await Listing.insertMany(initDb.data);
  console.log("data was saved");
}

savetodb();
