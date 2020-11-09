import React from "react";
import Hero from "../components/Hero";
import Container from "../components/Container";
import Row from "../components/Row";
import Col from "../components/Column";

function About() {
    return (
        <div>
            <Hero backgroundImage="">
                <h1>Noor LLC</h1>
                <h2>Employee Directory</h2>
            </Hero>
            <Container style={{marginTop: 30}}>
                <Row>
                    <Col style={{marginTop:10}} size="md-12">
                        <h1>  Welcome to our Employee Directory</h1>
                    </Col>
                </Row>
                <Row>
                    <Col size="md-12">
                        <p>This is a React Project done for our Universtiy discussing on how to make an emplyoee directory</p>
                        <br></br>
                        <p>Technologies Used for this project:</p>
                        <ul>
                            <li>React- A framework/Library that is used to build this application</li>
                            <li>Axios- An API call for the random "Employees"</li>
                            <li>React Router DOM- Used for the creating seperate pages</li>
                        </ul>
                        <br></br>
                        <p className="ty"> Thank you for taking your time out to visit.</p>
                    </Col>
                </Row>
            </Container>
        </div>

    )
}

export default About; 