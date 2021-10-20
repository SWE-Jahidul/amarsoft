import React, { useEffect, useState } from "react";
import RecentBlog from "../RecentBlog/RecentBlog";
import "./RecentBlogs.css"
const RecentBlogs = () => {
  const [recentblogs, setRecentblogs] = useState([]);
  useEffect(() => {
    fetch("./recent_blog.json")
      .then((res) => res.json())
      .then((data) => setRecentblogs(data));
  }, []);
  return (
    <div className="mb-5">
      <div className="container mt-3">
        <h2 className=" mt-3 recent-blogs-header" style={{
          textAlign:"left"
        }}> Recent Posts </h2>
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

export default RecentBlogs;
