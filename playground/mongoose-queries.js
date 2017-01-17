const {Todo} = require('./../server/models/todo');
const {ObjectID} = require('mongodb'); 
const {User} = require('./../server/models/user'); 

var mongoose = require('mongoose'); 

mongoose.Promise = global.Promise; 
mongoose.connect('mongodb://localhost:27017/ToDoApp');

var id = "587d666e0251e4d8ad6b06b3"; 

// if (!ObjectID.isValid(id)) {
//   console.log("ID not valid"); 
// }


// Todo.find({
//   _id: id
// }).then((todos) => {
//   console.log("Todos:", todos)
// }); 

// Todo.findOne({
//     _id: id 
// }).then((todo ) => {
//   console.log("Todo:", todo); 
// }); 

// Todo.findById(id).then((todo) => {
//   if (!todo) {
//     return console.log("Could not find todo with that ID"); 
//   }
//   console.log("Todo By ID:", todo); 
// }).catch((e) => {
//   console.log(e); 
// })

User.findById(id).then((user) => {
  if (!user) {
    console.log("Could not find user by that Id"); 
  }
  console.log("User:", JSON.stringify(user, undefined, 2)); 
}).catch((e) => {
  console.log(e); 
})