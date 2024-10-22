import { NextPage } from "next";
import BlogCard from "../component/BlogCard";
import { blogs } from "../../data";

const BlogIndex: NextPage = () => {
  return (
    <>
      {blogs.map((blog, index) => (
        <BlogCard key={index} id={blog.id} title={blog.title} />
      ))}
    </>
  );
};

export default BlogIndex;
