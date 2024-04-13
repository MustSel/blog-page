import React, { useEffect, useState } from "react";
import BlogCard from "../components/BlogCard";
import axios from "axios";
import ReactPaginate from "react-paginate";
import Container from "react-bootstrap/Container";
import MyNavbar from "../components/MyNavbar";

const Main = () => {
  const [blogPosts, setBlogPosts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage, setPostsPerPage] = useState(8);

  const paginate = ({ selected }) => {
    setCurrentPage(selected + 1);
  };

  const getPosts = async () => {
    try {
      const res = await axios("https://jsonplaceholder.typicode.com/posts");
      setBlogPosts(res.data);
      console.log(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = blogPosts.slice(indexOfFirstPost, indexOfLastPost);

  useEffect(() => {
    getPosts();
  }, []);

  return (
    <>
      <MyNavbar posts={blogPosts.length}/>
      <BlogCard currentPosts={currentPosts} blogPosts={blogPosts} setBlogPosts={setBlogPosts}/>
      <Container>
        <ReactPaginate
        onPageChange={paginate}
        pageCount={Math.ceil(blogPosts.length / postsPerPage)}
        previousLabel={"Prev"}
        nextLabel={"Next"}
        containerClassName={"pagination"}
        pageLinkClassName={"page-number"}
        previousLinkClassName={"page-number"}
        nextLinkClassName={"page-number"}
        activeLinkClassName={"active"}
      />
      </Container>
      
    </>
  );
};

export default Main;
