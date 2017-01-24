const {Todo} = require('./../server/models/todo');
const {ObjectID} = require('mongodb'); 
const {User} = require('./../server/models/user'); 

var mongoose = require('mongoose'); 

mongoose.Promise = global.Promise; 
mongoose.connect('mongodb://localhost:27017/ToDoApp');

//Do not get the docs back 
// Todo.remove ({}).then((result) => {
//   console.log(result); 
// }); 

// Todo.findOneAndRemove({})


Todo.findByIdAndRemove('5886ac312c6f147d2295ad3f').then((todo) => {
  console.log(todo); 
});  
