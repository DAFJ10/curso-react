import React from "react";
import { Container, Row, Col, Image, Card, Button, CardBody, CardTitle } from "react-bootstrap";
import '../styles/Profile.css'
import { VscGithubInverted } from "react-icons/vsc";
import { FaLinkedin } from "react-icons/fa6";
import { RiFacebookCircleFill } from "react-icons/ri";

const Profile = () => {

    return(
        <Container fluid>
            <Row className="banner justify-content-center white-text">
                <Col md={6} className="text-center">
                    <Image src="Esponjo.png" roundedCircle className="mb-3 profile-img"/>
                    <h2>Dario Developer</h2>
                    <p>Full Stack Developer</p>
                </Col>
            </Row>

            <Row className="justify-content-center mt-4">
                <Col md={8}>
                <Card>
                    <Card.Body>
                        <Card.Title>
                            Sobre Mim
                        </Card.Title>
                        <Card.Text>
                            Eu sou uma pessoa. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Incidunt quasi suscipit ipsa natus dignissimos ab est maxime sed nihil repellendus, sequi temporibus veritatis facere quo cum, tempore numquam. Blanditiis, nulla.
                        </Card.Text>
                    </Card.Body>
                </Card>
                </Col>
            </Row>

            <Row className="justify-content-center mt-4">
                <Col md={8}>
                <Card>
                    <CardBody>
                        <CardTitle>
                            Skills
                        </CardTitle>
                        <ul>
                            <li>HTML, CSS, Bootstrap</li>
                            <li>JavaScript, React, Node.js</li>
                            <li>Python, C#</li>
                            <li>SQL, MongoDB</li>
                        </ul>
                    </CardBody>
                </Card>
                </Col>
            </Row>

            <Row className="justify-content-center mt-4">
                <Col md={8} className="text-center">
                    <Button variant="secondary" href="https://github.com" className="m-2">
                    <VscGithubInverted />  Github
                    </Button>
                    <Button variant="info" href="" className="m-2">
                    <FaLinkedin />  LinkedIn
                    </Button>
                    <Button variant="primary" href="" className="m-2">
                    <RiFacebookCircleFill />  Facebook
                    </Button>
                </Col>
            </Row>
        </Container>
    )
}

export default Profile;