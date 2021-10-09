import React from "react";
import BlogsHeader from "../BlogsHeader/BlogsHeader";
import RecentBlogs from "../RecentBlogs/RecentBlogs";

import FeturedPost from "../FeturedPost/FeturedPost"
import ReadtoStaerted from "../../ReadytoStarted/ReadtoStaerted";

const Blogs = () => {
  return (
    <div>
      <BlogsHeader></BlogsHeader>

      <FeturedPost></FeturedPost>
      <RecentBlogs></RecentBlogs>
     
      <ReadtoStaerted></ReadtoStaerted>

    </div>
  );
};

export default Blogs;
