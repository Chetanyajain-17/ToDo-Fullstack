const ToDo = require("../models/ToDoList");


const createToDo = async (req,res)=>{
    try{
        const data = req.body;
        const todo = new ToDo(data);
        const result = await todo.save();
        console.log(result);
        res.status(201).send({message:"Created New Task !"});

    }catch(err){
        console.log(err);
        res.status(err);
    }
}
const getAllToDo = async (req,res)=>{
    let {userId} = req.params;

    try{
        const result = await ToDo.find({createdBy:userId});
        res.send(result);
    }
    catch(err){
        console.log(err);
        res.status(400).send(err);
    }
}


const updateToDo = async (req, res) => {
  try {
    const { id } = req.params;
    const updates = req.body;

    const updatedTask = await ToDo.findByIdAndUpdate(id, updates, { new: true }); // ✅ returns updated doc

    if (!updatedTask) {
      return res.status(404).json({ message: "ToDo not found" });
    }

    res.status(200).json(updatedTask); // ✅ return updated object
  } catch (err) {
    console.error(err);
    res.status(400).json({ message: "Update failed" });
  }
};


const deleteToDo = async ( req,res)=>{
    try{
        const {id} = req.params;
        const result = await ToDo.findByIdAndDelete(id);
        console.log(result);
        res.send({message:"ToDo Task Deleted"});
    }
    catch(err){
        console.log(err);
        res.status(400).send(err);
    }
}
module.exports = {
  createToDo,
  getAllToDo,
  deleteToDo,
  updateToDo, 
};