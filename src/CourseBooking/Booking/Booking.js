import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { Swiper, SwiperSlide } from "swiper/react";

const Booking = () => {
  const { serviceId } = useParams();

  const [courseDetails, setCourseDetails] = useState([]);
  const [currentCourse, setCurrentDetails] = useState([]);

  useEffect(() => {
    fetch("../course.json")
      .then((res) => res.json())
      .then((result) => {
        setCourseDetails(result);
        console.log("this is result ", result);
      });
  }, []);

  // useEffect(() => {
  //   const mycourse = courseDetails.find(result) => result.id == serviceId);
  // })

  useEffect(() => {
    let mycourse = courseDetails.filter((course) => course.id == serviceId);
    setCurrentDetails(mycourse[0]);
  }, [courseDetails]);

  return (
    <div>
      <div className="headerdiv">
        {currentCourse && (
          <div className="container">
            <div className="row d-flex align-items-center">
              <div className="col-lg-7 col-md-7 col-12 p-3">
                <h6
                  className=""
                  style={{
                    textAlign: "left",
                  }}
                >
                  {" "}
                  DESCRIPTION{" "}
                </h6>

                <img className="img-fluid p-5" src={currentCourse.image} />
                
                
                <div className="m-3">
                  <p
                    style={{
                      textAlign: "left",
                    }}
                  >
                    Nowdays the needed for a powerful speaker has been each time
                    more evident. Thinking of it Educa University is proud to
                    introduce this new method of learning, using a powerful
                    WooCommerce integration the theme offers a course management
                    system where you will be able to publish your courses
                    content and description along with a purchase button. Wether
                    you are selling a video course, book, or any other format
                    this will prove suitable for you.
                  </p>

                  <p
                    style={{
                      textAlign: "left",
                    }}
                  >
                    Different for many themes around we decide to make a
                    flexible system where you can just showcase the courses
                    offered by the education institution or you can sell courses
                    by you own. The WooCommerce integration was deeply tailored
                    to integrate into theme features and appearance, besides
                    that it has options and it is very easy to use. Explore our
                    features and discover by your own.
                  </p>
                </div>

                <div>
                  <h6
                    style={{
                      textAlign: "left",
                    }}
                  >
                    TOPICS INCLUDED
                  </h6>

                  <p>WooCommerce Integration</p>
                </div>

                {/* Course Content  */}
              </div>
              <div className="col-lg-5 col-md-5 col-12">
                <div
                  className="p-4 "
                  style={{ backgroundColor: "white", fontWeight: 800 }}
                >
                  <h6
                    style={{
                      textAlign: "left",
                      color: "red",
                    }}
                  >
                    {" "}
                    COURSE INFORMATION
                  </h6>

                  <table class="table">
                    <tbody>
                      <tr>
                        <td>Start</td>
                        <td>@mdo</td>
                      </tr>
                      <tr>
                        <td>Duration</td>
                        <td>:8 Weeks</td>
                      </tr>
                      <tr>
                        <td>Study Level</td>
                        <td>Intermediate</td>
                      </tr>

                      <tr>
                        <td>DisciplineOther</td>
                        <td>Courses</td>
                      </tr>
                    </tbody>
                  </table>

                  <button
                    type="button"
                    class="px-5 py-3 "
                    style={{
                      backgroundColor: "#A12C2F",
                      fontWeight: 500,
                      color: "white",
                      border: 0,
                      borderRadius: "50px 50px",
                    }}
                  >
                    PURCHASE COURSE
                  </button>
                </div>

                <div className="mt-5">
                  <div
                    className="p-4 "
                    style={{
                      backgroundColor: "white",
                    
                      textAlign: "left",
                    }}
                  >
                   <span style={{   color: "red",}}> RELETED COURSE </span> 
                    <div className="row d-flex align-items-center py-3">
                      <div className="col-lg-3 col-md-3 col-12">
                        <img style={{
                          height:70, width:70
                        }} src={currentCourse.image}></img>
                      </div>

                      <div  className="col-lg-9 col-md-9 col-12">
                        <h6> Steven Wood </h6>
                        <h7>Architectural Planning and Sketch </h7>
                        <p> Price : $10.00</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Booking;
