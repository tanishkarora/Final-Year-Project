import React from "react";
import {Row, Col } from "react-bootstrap";

export const About = () => {
  return (
    <div style={{backgroundColor: '#b6f0c2', height: "92vh", padding: "1rem 3rem", fontFamily: "Roboto", fontSize: "1.1rem"}}>
      <Row>
        <Col>
          <h1 className="mt-4">About Project</h1>
          <p>Welcome to our University Major Project! 
          </p>
            <p>
            Our project utilizes a Random Forest Classifier to predict whether or not a student will be able to adapt to online learning.
            </p>
            <p style={{width: "80vw"}}>
            As the world moves towards more online and remote learning
            environments, it has become increasingly important to understand the
            factors that contribute to a student's success in this type of
            setting. Our project aims to provide insights into the
            characteristics that are predictive of a student's ability to adapt
            to online learning. Our team has worked diligently to gather and
            analyze data from a variety of sources in order to create an
            accurate and reliable model. We are excited about the potential
            impact that our project could have on the field of education, and we
            look forward to sharing our findings with the academic community.
          </p>
        </Col>
      </Row>
      <Row>
        <Col>
          <h2>Group Members</h2>
          <ul>
            <li>Shubhaangi Verma (RA1911026030026)</li>
            <li>Tanishk Arora (RA1911026030019)</li>
            <li>Rishika Sharma (RA1911026030046)</li>
            <li>Ayush Rawat (RA1911026030045)</li>
          </ul>
        </Col>
      </Row>
    </div>
  );
};
