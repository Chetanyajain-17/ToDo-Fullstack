import React, { useState } from 'react'
import Navbar from '../../components/Navbar'
import styles from './ToDoList.module.css'
import {Button,Input,message,Modal,Divider} from 'antd';
import{getErrorMessage} from '../../util/GetError'
import { getUserDetails } from '../../util/GetUsers';
import ToDoServices from '../../services/toDoServices';
//import { useNavigate } from 'react-router';
function TodoList() {
  const [title,settitle] = useState("");
  const [description,setdescription]= useState("");
  const [isAdding,setisAdding] = useState(false);
  const[loading,setLoading] = useState(false);

  //const navigate = useNavigate();

  const handleSubmitTask = async () => {
  setLoading(true);
  try {
    const userId = getUserDetails()?.userId;
    const data = {
      title,
      description,
      isCompleted: false,
      createdBy: userId,
    };
    const response = await ToDoServices.createToDo(data);
    console.log(response.data);
    setLoading(false);
    message.success("To Do Task Added Successfully!");
    setisAdding(false); // Close modal
  } catch (err) {
    console.error(err);
    setLoading(false);
    message.error(getErrorMessage(err));
  } 
};
  return (
   <>
   <Navbar active = {"mytask"}/>
   <section className={styles.toDoWrapper}>
    <div className= {styles.toDoHeader}>
      <h2>Your Task</h2>
      <Input style= {{width:'50%'}} placeholder="search your task here"></Input>
    <div>
      <Button onClick={()=>setisAdding(true)} type='primary' size='large'>Add Task</Button>
    </div>
    </div>
    <Divider/>
    <Modal confirmLoading={loading} title="Add New To Do Task" open={isAdding} onOk={handleSubmitTask} onCancel={()=>setisAdding(false)}>
        <Input style={{marginBottom:'1rem'}} placeholder='Title' value={title} onChange={(e)=>settitle(e.target.value)} />
        <Input.TextArea placeholder='Description' value={description} onChange={(e)=>setdescription(e.target.value)} />
      </Modal>
   </section>
   </>
  )
}

export default TodoList;
