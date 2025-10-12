import React from 'react'
import Delete from './../assets/del.png'
import axios from 'axios';
import toast,{Toaster} from 'react-hot-toast';
import Edit from'./../assets/pen.png'
import {Link} from 'react-router-dom'
function StudentCard({id,name,age, loadstudents}) {
  const deletestudent=async()=>{
   const response=await axios.delete(`http://localhost:5001/students/${id}`)
   if(response.data.success){
    toast.success(response.data.message);
    loadstudents();
   }else{
    toast.error(response.data.message);
   }

  }
  const Editstudent=()=>{
   
  }
  return (
     <div className="border-1 p-2 m-2 h-15 rounded-md shadow-md relative">
                    <h2>
                        {id} -{name}
                    </h2>
                    <p>{age}</p>
                   
                   
                      <img src={Delete} alt="Delete icon png" className="h-5 absolute top-1 right-5 cursor-pointer"onClick={deletestudent} />

                    <Link to={`/Edit/${id}`}>
                      <img src={Edit} alt='Edit icon' className="h-5 absolute top-7 right-5 " />
                      </Link>
                    
                     </div>
 
                    
  )
  
}

export default StudentCard