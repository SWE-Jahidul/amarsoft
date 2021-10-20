import React, { useEffect, useState } from "react";
import RecentBlog from "../RecentBlog/RecentBlog";
const FeturedPost = () => {
  const [recentblogs, setRecentblogs] = useState([]);
  useEffect(() => {
    fetch("./recent_blog.json")
      .then((res) => res.json())
      .then((data) => setRecentblogs(data));
  }, []);
  return (
    <div > 
      <div className="container ">
        <h2 className=" mt-5 recent-blogs-header" style={{
          textAlign:"left"
        }}> Featured Posts </h2>
        <div className="row mt-1 mb-3">
          {recentblogs.map((recentblog) => (
            <RecentBlog
              key={recentblog.id}
              recentblog={recentblog}
            ></RecentBlog>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FeturedPost;
