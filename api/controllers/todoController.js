// import Todo Model
const  Todo = require("../models/todoModel");

// DEFINE CONTROLLER FUNCTIONS

// listAllTodos function - To list all todos
exports.listAllTodos = async (req, res) => {
Todo.find({}).then((todos)=>res.send(todos)).catch((err)=>res.send(err))
const session = await Todo.find({});

};

// createNewTodo function - To create new todo
exports.createNewTodo = async (req, res) => {
    
    const doc = await Todo.create(req.body);
    res.send(doc)

};

// updateTodo function - To update todo status by id
exports.updateTodo = (req, res) => {
Todo.findOneAndUpdate({ _id:req.params.id }, req.body, { new:true }, (err, todo) => {
if (err) {
res.status(500).send(err);
}
res.status(200).json(todo);
});
};

// deleteTodo function - To delete todo by id
exports.deleteTodo = async ( req, res) => {
await  Todo.deleteOne({ _id:req.params.id }, (err) => {
if (err) {
return res.status(404).send(err);
}
res.status(200).json({ message:"Todo successfully deleted"});
});
};