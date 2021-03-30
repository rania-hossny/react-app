import React from 'react'
import { Col, Card, Nav, Row } from 'react-bootstrap';
import "./team1.css";
import { BiImageAdd } from "react-icons/bi";
import photo from "../pietra-schwarzler-FqdfVIdgR98-unsplash.jpg";

const Team1data = () => {
    return (
        <div>
             {/* <Nav variant="pills" defaultActiveKey="#first" className="navteam">
             <Nav.Link href="#disabled" disabled>
             Team Name
        </Nav.Link>
                <Nav.Item>
                    <Nav.Link href="/team1">Posts</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link href="#link">Files</Nav.Link>
                </Nav.Item>
                </Nav> */}
                
      
            <Card>
  <Card.Body>
    <Row className="Postheader">
        <Col md={4}>
            <div className="photop">
               <Row>
               <Col md={4}><img src={photo}></img></Col> 
                <Col md={8}>
                    <p> <b>Rania hossny</b> <br/> <span>post date</span></p>     
                </Col>
               </Row>     
            </div>
        </Col >
        {/* <Col className="infop" md={8}>  </Col> */}

    </Row>

    <Row className="postbody">
    <p>Lorem ipsum dolor sit amet consectetur,Lorem ipsum dolor sit amet consectetur,Lorem ipsum dolor sit amet consectetur,Lorem ipsum dolor sit amet consectetur,Lorem ipsum dolor sit amet consectetur,Lorem ipsum dolor sit amet consectetur</p>
    <div className="linePost"></div>
    
    <a type="button" className="reply">Reply</a>
    </Row>
    
  </Card.Body>
</Card>


  
<Card>
  <Card.Body>
    <Row className="Postheader">
        <Col md={4}>
            <div className="photop">
               <Row>
               <Col md={4}><img src={photo}></img></Col> 
                <Col md={8}>
                    <p> <b>Eman mohamed</b> <br/> <span>post date</span></p>     
                </Col>
               </Row>     
            </div>
        </Col >
        {/* <Col className="infop" md={8}>  </Col> */}

    </Row>

    <Row className="postbody">
    <p>Lorem ipsum dolor sit amet consectetur,Lorem ipsum dolor sit amet consectetur</p>
    <div className="linePost"></div>
    
    <a type="button" className="reply">Reply</a>
    </Row>
    
  </Card.Body>
</Card>
        </div>
    )
}

export default Team1data
