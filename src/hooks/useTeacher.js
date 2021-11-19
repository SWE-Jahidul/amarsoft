import  { useEffect, useState } from "react";

const useTeacher = () => {
  const [teachers, setTeachers] = useState([]);
  useEffect(() => {
    fetch("./teachers.json")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setTeachers(data)
      });
  }, []);
  return [teachers];
};
export default useTeacher;