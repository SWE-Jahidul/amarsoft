import React from "react";

const TeacherCard = (props) => {
  const { id, images, title, discripton } = props.teacher;
  return (
    <div className="col-lg-3 col-md-3 col-12 g-3 ">
      <img className="card-img-top" src={images} alt="Card image cap" />
      <div className="card-body">
        <p>{title} </p>
        <p className="card-text">{discripton}</p>
      </div>
    </div>
  );
};

export default TeacherCard;
