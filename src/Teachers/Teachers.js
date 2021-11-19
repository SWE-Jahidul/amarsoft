import React from 'react';
import useTeacher from '../hooks/useTeacher';


import TeacherCard from "../TeacherCard/TeacherCard"
const Teachers = () => {

  const [teachers] = useTeacher([]);

  return (
  
      <div className="container">
        <h2> Teacher </h2>
        <div className="row mt-3 mb-3">
          
          {teachers.map((teacher) => (
            <TeacherCard key={teacher.id} teacher={teacher}></TeacherCard>
          ))}
        </div>
      </div>
  
  );
};

export default Teachers;