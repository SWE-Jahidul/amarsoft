import React from 'react';

const OurExpertice = (props) => {
    const {Title, discripton} = props.ourexpertice; 
    return (
        <div className="col-md-4">

            <div className="card" >
                {/* <img className="card-img-top" src="..." alt="Card image cap"/> */}
                <div className ="card-body">
                <h5 className ="card-title">{ Title}</h5>
                <p className ="card-text">{ discripton}</p>
                </div>
            </div>
            </div>
    );
};

export default OurExpertice;