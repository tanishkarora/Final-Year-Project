import React from "react";
// import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import logo from '../Srmseal.png';
import redirect from "../redirect.png"

export const Home = () => {
  return (
    
    <div style={{backgroundColor: '#b6f0c2', height: "92vh"}}> 
    <img src={logo} alt="logo" width="170" height="50" style={{ position: "absolute", right: "1rem", top: "5rem"}}/>  
      <div
        className="d-flex flex-column justify-content-center"
        style={{  height: "90vh", fontFamily: "Roboto", margin: "0 2rem",  }}
      >
        <h1 className="mb-2">
          Student's Adaptability Level in Online Education
        </h1>
        <p className="col-md-5" style={{ fontSize: "20px" }}>
          Welcome to our App, the revolutionary app that helps you predict
          your adaptability level to online education!
        </p>
        <div>
          <Link
            type="button"
            className="btn btn-outline-dark btn-lg"
            to="/predict"
          >
            Try Now <img alt="redirect" height='24' width='24' src={redirect}/>
          </Link>
        </div>
      </div>
    </div>
  );
};
