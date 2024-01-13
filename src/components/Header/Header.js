import React, { useState } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";
import "./header.scss";
import { CiSearch } from "react-icons/ci";
import { Button, Col, Row } from "react-bootstrap";
import Form from "react-bootstrap/Form";
import { useDispatch } from "react-redux";
import logo from"../../images/logo.png"
import "./header.css"
import {
  fetchAsyncMovies,
  fetchAsyncShows,
} from "../../features/movies/movieSlice";

const Header = () => {
  const [term, setTerm] = useState("");
  const dispatch = useDispatch();
  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(fetchAsyncMovies(term));
    dispatch(fetchAsyncShows(term));
    setTerm("")
  };
  return (
    <Navbar expand="lg" className="bg-body-tertiary navbar-head">
      <Container>
        <Link to="/" className="navbar-brand text-white">
          <img src={logo} alt="logo" />
        </Link>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Link className="nav-link text-white" to="/">
              Home
            </Link>
            <div className="search-bar ms-5">
              <Form onSubmit={submitHandler} className="mr-sm-2">
                <Row>
                  <Col xs="auto">
                    <Form.Control
                      type="text"
                      placeholder="Search"
                      className=" mr-sm-2"
                      onChange={(e) => setTerm(e.target.value)}
                    />
                  </Col>
                  <Col xs="auto">
                    <Button type="submit">
                      <CiSearch />
                    </Button>
                  </Col>
                </Row>
              </Form>
            </div>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
