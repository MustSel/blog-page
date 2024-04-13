import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Navbar from "react-bootstrap/Navbar";
import { GrBlog } from "react-icons/gr";
import { PiNotification } from "react-icons/pi";
import { CgMenuGridO } from "react-icons/cg";

const MyNavbar = ({ posts }) => {
  return (
    
      <Container className="mynav bg-info p-2 rounded-3 mt-2">
        <Row>
          <Col
            xs={12}
            md={6}
            className="d-flex justify-content-start align-items-center"
          >
            <GrBlog className="i text-bg-danger fs-3 rounded-1 p-1" />
            <Navbar.Brand className=" ms-2 fs-3" href="#">MyBlog</Navbar.Brand>
          </Col>
          <Col
            xs={12}
            md={6}
            className="d-flex justify-content-end align-items-center fs-5"
          >
            <div className="me-3 i">Posts <span className=" text-danger bg-warning rounded-2 fs-6">{posts}</span> </div>
            <div>
            <PiNotification className="me-2 i" />
            <CgMenuGridO className="me-2 i" />
            <img className=" rounded-2" src="https://pbs.twimg.com/profile_images/1748701896758435840/PwhAn3oD_400x400.jpg" alt="" width={40} />
            </div>
          </Col>
        </Row>
      </Container>
    
  );
};

export default MyNavbar;
