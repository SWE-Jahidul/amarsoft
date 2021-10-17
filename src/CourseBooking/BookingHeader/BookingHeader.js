import React from 'react';
import { useParams } from 'react-router';

import "./BookingHeader.css"
const BookingHeader = () => {

    const {  serviceId } = useParams(); 
    return (
        <div>
          <div className="headerdiv">
          <h1>{serviceId}</h1>
          </div>
        </div>
    );
};

export default BookingHeader;