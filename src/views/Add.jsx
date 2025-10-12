import React from 'react'
import{useState} from 'react'
import axios from 'axios'
import toast ,{Toaster} from 'react-hot-toast'

function Add() {
  
  const[student,setStudent]=useState({
    id:"",
    name:"",
    age:"",
  });

  const addStudent=async()=>{
    try{
const response= await axios.post("https://one17interacting-with-api-and-its-method.onrender.com/students",{
  id:student.id,
   name:student.name,
   age:student.age,
});

if(response.data.success){
 setStudent({
  id:"",
  name:"",
  age:"",
 })
 toast.success(response.data.message);
}else{
  toast.error(response.data.message);
}
}catch(e){
 toast.error(e.response.data.message)
}
  };
  
  return (
    <div>
    <h1 className="text-center font-bold">Add student</h1>
    <div >
        <input type="text"
         placeholder='enter id'
         className="block mx-auto"
          value={student.id}
           onChange={(e) => setStudent({...student, id: e.target.value})}
          />

        <input type="text"
         placeholder='enter name'
         className="block mx-auto"
         value={student.name}
          onChange={(e) => setStudent({...student, name: e.target.value})}
         />
        <input type="text" 
        placeholder='Enter age' 
        className="block mx-auto"
        value={student.age}
         onChange={(e) => setStudent({...student, age: e.target.value})}

        />
    </div>
    <button className="bg-blue-600 rounded text-white p-2 block mx-auto my-5" onClick={addStudent}
     >Add Student</button>
      <Toaster/>
    </div>
  )
 
}

export default Add