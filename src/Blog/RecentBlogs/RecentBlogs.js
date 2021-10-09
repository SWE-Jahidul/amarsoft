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
    <div>
      <div className="container">
        <h2 className=" mt-3 recent-blogs-header"> Our Recent Blogs</h2>
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
