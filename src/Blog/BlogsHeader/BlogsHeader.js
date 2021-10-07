import React from 'react';

import "./BlogsHeader.css"
import img from '../../images/9f41e2d14093da80356873e2b8745950.jpg'
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


            <div class="centered text-center text-white">

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