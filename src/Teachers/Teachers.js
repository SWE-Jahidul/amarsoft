import React, { useEffect } from "react";

const Teachers = () => {
  console.log("hello world !");
  useEffect(() => {
    fetch("../teachers.json")
    .then(res => res.json())
    .then(data => console.log(data))
  });

  return <div></div>;
};

export default Teachers;
