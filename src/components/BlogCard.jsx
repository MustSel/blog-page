import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { useState } from "react";
import MyModal from "./MyModal";
import { RiDeleteBin2Line } from "react-icons/ri";

const BlogCard = ({ currentPosts, blogPosts, setBlogPosts }) => {
  const [show, setShow] = useState(false);
  const [selectedPost, setSelectedPost] = useState(null);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Container>
        <Row>
          {currentPosts.map((post) => (
            <Col key={post.id} xs={12} sm={6} md={4} lg={3}>
              <Card className="text-center my-2">
                <Card.Header className="d-flex justify-content-between">
                  <div>User:{post.userId}</div>
                  <div>
                    <Button variant="danger" size="sm"
                    onClick={()=> {
                      setBlogPosts(
                        blogPosts.filter((item)=>post.id!==item.id
                        )
                      )
                    }}>
                      <RiDeleteBin2Line />
                    </Button>
                  </div>
                </Card.Header>
                <Card.Body>
                  <Card.Title className="line-clamp-1">{post.title}</Card.Title>
                  <Card.Text className="line-clamp-3">{post.body}</Card.Text>
                  <Button
                    variant="secondary"
                    onClick={() => {
                      handleShow();
                      setSelectedPost(post);
                    }}
                  >
                    See Details
                  </Button>
                </Card.Body>
                <Card.Footer className="text-muted">
                  Posted in:{" "}
                  {new Date(
                    new Date() - Math.random() * 1e10
                  ).toLocaleDateString()}
                </Card.Footer>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
      <MyModal
        show={show}
        handleClose={handleClose}
        selectedPost={selectedPost}
      />
    </>
  );
};

export default BlogCard;
