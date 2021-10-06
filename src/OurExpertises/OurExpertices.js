import React, { useEffect, useState } from 'react';
import OurExpertice from '../OurExpertice/OurExpertice';

const OurExpertices = () => {


    const [ourexpertices, setExpertices] = useState([]);
    useEffect(() => {
        fetch("./ourexpertice.json")
            .then((res) => res.json())
            .then((data) => setExpertices(data));
    }, []);
    return (
        <div className="container">
            <h1 className="text-center">
                OUR EXPERTICES
                <div className="row">

                        {
                            ourexpertices.map((ourexpertice) => (
                                <OurExpertice key={ourexpertice.id} ourexpertice={ourexpertice}>
                                </OurExpertice>
                            ))
                        }
                    
                </div>

            </h1>
        </div>
    );
};

export default OurExpertices;