
const mongoose = require('mongoose');
const mongoURI = 'mongodb+srv://kushwahadheeraj245:Dkushwaha@cluster0.b3lvd0r.mongodb.net/';

const mongoDB = async () => {
  try {
    await mongoose.connect(mongoURI, { useNewUrlParser: true });
    console.log("Connected to MongoDB");

    const foodCollection = await mongoose.connection.db.collection("food_items");
    const data = await foodCollection.find({}).toArray();
    const foodCategory = await mongoose.connection.db.collection("foodCategory");
    const catData = await foodCategory.find({}).toArray();


    if (data.length === 0) {
      console.log("No data found in 'food_items' collection.");
    } else {
      
      global.food_items = data;
      global.foodCategory = catData;
    }
  } catch (err) {
    console.error("Error connecting to MongoDB:", err);
  }
};

module.exports = mongoDB;
