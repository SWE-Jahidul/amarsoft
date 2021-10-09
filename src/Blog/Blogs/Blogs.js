import React from "react";
import BlogsHeader from "../BlogsHeader/BlogsHeader";
import RecentBlogs from "../RecentBlogs/RecentBlogs";

import FeturedPost from "../FeturedPost/FeturedPost"

const Blogs = () => {
  return (
    <div>
      <BlogsHeader></BlogsHeader>

      <FeturedPost></FeturedPost>
      <RecentBlogs></RecentBlogs>
     

    </div>
  );
};

export default Blogs;
