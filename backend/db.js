const mongoose = require("mongoose");
const username = encodeURIComponent("avinishrao");
const password = encodeURIComponent("Avinishrao@1234");

const mongoURI = `mongodb+srv://${username}:${password}@cluster0.npzpvtc.mongodb.net/bookmyeventdb?retryWrites=true&w=majority`;

const mongoConnect = async () => {
  try {
    await mongoose.connect(mongoURI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("Connected successfully to MongoDB");
    const dataRetrive = await mongoose.connection.db.collection("bme_card");
    const cardCategory = await mongoose.connection.db.collection("bme_card_category");
    await dataRetrive.find({}).toArray() //async (err, data) => {
        .then((data)=>{
            cardCategory.find({}).toArray()
                .then((catData)=>{
                    global.bme_card = data;
                    global.bme_card_category = catData;
                })
                .catch((e)=>{
                    console.error(e);
                })
        })
        .catch((err)=>{
            console.error(err);
        })
    //   cardCategory.find({}).toArray()(catData, err)=>{
    //     if(err){
    //         console.error(err);
    //     }
    //     else{
    //         global.bme_card = data;
    //     }
    //   })
        // .then((catData) => {
        //   global.bme_card = data;
        //   global.bme_card_category = catData;
        // })
        // .catch((err) => {
        //   console.error(err);
        // });
    // });
    // .then((data)=>{
    //     global.bme_card =data;
    // })
    // .catch((err)=>{
    //     console.error(err);
    // });
  } catch (error) {
    console.error("Error connecting to DB", error);
  }
};

module.exports = mongoConnect;
