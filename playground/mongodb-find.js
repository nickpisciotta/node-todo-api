const {MongoClient, ObjectID} = require('mongodb'); 

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
  if (err) {
    return console.log("Unable to connect to MongoDB server"); 
  } 
  console.log("Connected to MongoDB server"); 

  // db.collection("Todos").find({
  //   _id: new ObjectID('587976f8e5734c9b8b42455a')
  //   }).toArray().then((docs) => {
  //   console.log("Todos");
  //   console.log(JSON.stringify(docs, undefined, 2)); 
  // }, (err) => {
  //   console.log("Unable to fetch todos", err);     
  // }); 

  //  db.collection("Todos").find()
  //   .count().then((count) => {
  //   console.log("Todos Count: " + count); 
  // }, (err) => {
  //   console.log("Unable to fetch todos", err);     
  // }); 

  db.collection('Users').find({name: "Nick Pisciotta"}).toArray().then((docs) => {
    console.log(JSON.stringify(docs, undefined, 2)); 
  })

  // db.close(); 
}); 