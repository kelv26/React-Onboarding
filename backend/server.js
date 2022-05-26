const mongoose = require('mongoose');
const { MongoClient } = require("mongodb");
require('dotenv/config');
const mySchemas = require('./models/Schemas')

// const Port = process.env.PORT || 4000;
// const DB_connection= process.env.DB_URI;

// //DB Connection
// mongoose.connect(DB_connection, {
//     useNewUrlParser:true, 
//     useUnifiedTopology:true
// })
// .then( () => {
//     console.log(mongoose.Collection());
// })
// .catch( (err) => {
//     console.log(err);
// })


// //Get the default connection
// var db = mongoose.connection;

// //Bind connection to error event (to get notification of connection errors)
// db.on('error', console.error.bind(console, 'MongoDB connection error:'));

 
// Replace the following with your Atlas connection string
const url = "mongodb+srv://kelv26:kelv26@nodecluster.ykne9ad.mongodb.net/React-Onboarding?retryWrites=true&w=majority";
const client = new MongoClient(url);
 
 // The database to use
 const dbName = "React-Onboarding";

 async function run() {
    try {
         await client.connect();
         console.log("Connected correctly to server");
         const db = client.db(dbName);

         // Use the collection "people"
         const col = db.collection("Posts");

         // Find one document
        const myDoc = await col.findOne()

         // Print to the console
         console.log(myDoc);

        } catch (err) {
         console.log(err.stack);
     }
 
     finally {
        await client.close();
    }
}

run().catch(console.dir);