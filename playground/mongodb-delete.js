const {MongoClient, ObjectID} = require('mongodb'); 

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
  if (err) {
    return console.log("Unable to connect to MongoDB server"); 
  } 
  console.log("Connected to MongoDB server"); 

  //deleteMany
  // db.collection('Todos').deleteMany({text: "Eat lunch"}).then((res) => {
  //  console.log(res); 
  // }); 
  // db.collection('Users').deleteMany({name: "Bob Smith"}).then((res) => {
  //   console.log(res); 
  // })

  //deleteOne
  // db.collection('Todos').deleteOne({text: "Eat lunch"}).then((res) => {
  //   console.log(res); 
  // })
  //findOneAndDelete
  // db.collection('Todos').findOneAndDelete({completed: false}).then((res) => {
  //   console.log(res); 
  // });
  db.collection('Users').findOneAndDelete({
    _id: new ObjectID("5879792ae74b629bfe43b008")
  }).then((res) => {
    console.log(res); 
  })
  // db.close(); 
}); 