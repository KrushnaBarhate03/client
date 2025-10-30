import React, { useState, useEffect } from 'react';
import axios from 'axios';
import toast, { Toaster } from 'react-hot-toast';
import { useParams } from 'react-router-dom';

function Edit() {
  const [student, setStudent] = useState({
    id: '',
    name: '',
    age: '',
  });

  const { userId } = useParams();

  const loadStudents = async () => {
    try {
      const response = await axios.get(`${import.meta.env.VITE_API_URL}/students/${userId}`);
      setStudent(response.data.data);
    } catch (e) {
      toast.error(e.response?.data?.message || 'Failed to load student');
    }
  };

  const EditStudent = async () => {
    try {
      const response = await axios.put(`${import.meta.env.VITE_API_URL}/students/${student.id}`, {
        name: student.name,
        age: student.age,
      });

      if (response.data.success) {
        toast.success(response.data.message);
      } else {
        toast.error(response.data.message);
      }
    } catch (e) {
      toast.error(e.response?.data?.message || 'Failed to update student');
    }
  };

  useEffect(() => {
    if (userId) loadStudents();
  }, [userId]);

  return (
    <div>
      <h1 className="text-center font-bold">Edit Student {userId}</h1>
      <div>
        <input
          type="text"
          placeholder="Enter ID"
          className="block mx-auto"
          value={student.id}
          onChange={(e) => setStudent({ ...student, id: e.target.value })}
        />
        <input
          type="text"
          placeholder="Enter name"
          className="block mx-auto"
          value={student.name}
          onChange={(e) => setStudent({ ...student, name: e.target.value })}
        />
        <input
          type="text"
          placeholder="Enter age"
          className="block mx-auto"
          value={student.age}
          onChange={(e) => setStudent({ ...student, age: e.target.value })}
        />
      </div>
      <button
        className="bg-blue-600 rounded text-white p-2 block mx-auto my-5"
        onClick={EditStudent}
      >
        Edit Student
      </button>
      <Toaster />
    </div>
  );
}

export default Edit;
