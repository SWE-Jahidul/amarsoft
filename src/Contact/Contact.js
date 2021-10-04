import React from "react";

const Contact = (props) => {
  const { images, Title } = props.contact;

  return (
    <div className="col-md-4 col-lg-4 col-sm-12 col-12">
      <div className="contactme-card text-dark text-center  animate__animated animate__fadeInLeft"></div>
      <div className="py-3 pb-5 pt-5 contactme-card text-dark text-center  animate__animated animate__fadeInLeft">
        <div className="icon-color">
          <i className={images}></i>
        </div>
        <div className="fw-bold  text-justify">{Title}</div>
      </div>
    </div>
  );
};

export default Contact;
