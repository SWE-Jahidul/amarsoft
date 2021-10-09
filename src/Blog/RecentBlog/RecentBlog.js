import React from "react";
import "./RecentBlog.css"
const RecentBlog = (props) => {
  const { images, title, discripton, date, authorname } = props.recentblog;
  return (

    <div className="col-lg-3 col-md-3 col-12 g-3 ">
      <div class="card course-card shadow-lg rounded-3 hovereffect">
        <img
          className="card-img-top"
          src={images}
          style={{
            minHeight: "30%",
            maxHeight: 200,
          }}
          alt="Card image cap"
        />
        <div className="card-body">
          <div className="d-flex justify-content-between">
            <div>
              <h5 className="card-title">{title}</h5>
              <p className="card-text">{discripton}</p>
            </div>
          </div>
        </div>
        <div class="card-footer">
       
       <div className="d-flex justify-content-between">
       <div>
            <p className="card-text">{authorname}</p>
          </div>

          <div>
            <span className="course-price"> {date}</span>
          </div>
       </div>
        </div>
      </div>
    </div>
  );
};

export default RecentBlog;
