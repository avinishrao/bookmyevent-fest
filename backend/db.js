const mongoose = require('mongoose');
const username = encodeURIComponent('avinishrao');
const password = encodeURIComponent('Avinishrao@1234');

const mongoURI = `mongodb+srv://${username}:${password}@cluster0.npzpvtc.mongodb.net/bookmyeventdb?retryWrites=true&w=majority`;

const mongoConnect = async() =>{
    
    try {
        await mongoose.connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true });
        console.log("Connected successfully to MongoDB");
        const dataRetrive = await mongoose.connection.db.collection("bme_card");

        // console.log(dataRetrive.find({"genre":"comedy"}).toArray());
        // const bme_card_details = 
        await dataRetrive.find({}).toArray()
            .then((data)=>{
                console.log(data);
            })
            .catch((err)=>{
                console.error(err);
            });
            
    } catch (error) {
        console.error('Error connecting to DB', error);
    }
    
}

module.exports = mongoConnect;   
