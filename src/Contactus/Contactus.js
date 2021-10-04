import React, { useEffect, useState } from "react";
import Contact from "../Contact/Contact";

import "./Contact.css";
const Contactus = () => {
  const [contacts, setContact] = useState([]);
  useEffect(() => {
    fetch("./cant.json")
      .then((res) => res.json())
      .then((data) => setContact(data))
  }, []);

  return (
    <div className="container pb-5">
      <h1 className="fw-bold fs-1 text-center icon-color py-3">Contact Me</h1>

      <hr className="w-25 m-auto text-color " />
      <div className="container overflow-hidden">
        <div className="row mt-2 pt-3 gy-3">
            {
            contacts.map((contact) => (
            <Contact key={contact.id} contact={contact}></Contact>
          
          ))}
           
            </div>
          </div>
        </div>


  );
};

export default Contactus;
