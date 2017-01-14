const {MongoClient, ObjectID} = require('mongodb'); 

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
  if (err) {
    return console.log("Unable to connect to MongoDB server"); 
  } 
  console.log("Connected to MongoDB server"); 

  // db.collection('Todos').findOneAndUpdate({
  //   _id: new ObjectID('587a95112c6f147d2295ad3e')
  // }, {
  //   $set: {
  //     completed: true 
  //   }
  // }, {
  //   returnOriginal: false
  // }).then((res) => {
  //   console.log(res); 
  // })

  db.collection('Users').findOneAndUpdate({
    name: "Mike"
  }, {
    $set: {
      name: "Andrew"
    }, 
    $inc: {
      age: 1
    }
  }, {
    returnOriginal: false
  }).then((res) => {
    console.log(res); 
  }); 
  // db.close(); 
}); 