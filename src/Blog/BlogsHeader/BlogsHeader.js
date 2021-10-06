import React from 'react';

import "./BlogsHeader.css"
import img from '../../images/Digital-Marketing-Company-India2.gif'
const BlogsHeader = () => {
    return (
        <div>
            <img
                src={img}
                style={{
                    minHeight: "10%",
                    maxHeight: 350,
                }}
                className="d-block w-100"
                alt="..."
            />


            <div class="centered text-center text-dark">

                <h1 className="fw-bold display-4">AMARSCHOOL BLOG </h1>
                <h5>
                    Ex utamur fierent tacimates duis choro an

                </h5>
                <p>
                    Lorem ipsum dolor sit amet, ius minim gubergren ad. At mei sumo sonet audiam, ad mutat elitr platonem vix. Ne nisl idque fierent vix.
                </p>
            </div>

        </div>
    );
};

export default BlogsHeader;