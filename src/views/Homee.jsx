import React from 'react';
import {useEffect,useState} from 'react';
import {Link} from 'react-router-dom';
import StudentCard from './../components/StudentCard.jsx';
import axios from 'axios'
import Adduser from '../assets/adduser.png'

function Homee() {
  const[students,setStudents]=useState([]);
  // const students = [
  //   // { id: 1, name: "Pratik", city: "Loni" },
  //   // { id: 2, name: "Krushna", city: "Loni" }
  // ];

  const loadstudents=async()=>{
    const response= await axios.get("http://localhost:5001/students");
    setStudents(response.data.data);

 
  }

  useEffect(()=>{
   loadstudents();
  },[])

  return (
    <div>
      

      <div>
        {students.map((stud,i) => {
          const { id, name, age } = stud;
          return (
            <StudentCard 
              key={i} 
              id={id} 
              name={name} 
              age={age}
              loadstudents={loadstudents} 
            />
          );
        })}
      </div>
      <Link to="/add">
      <img src={Adduser} alt="Add user image" className="h-20 w-20 fixed bottom-5 right-5"/>
     </Link>
    </div>
  );
}

export default Homee;
