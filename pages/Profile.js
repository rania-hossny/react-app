import React, {useState,useEffect} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import { Card, Col, Row ,Modal} from 'react-bootstrap';
import './profile.css';
import photo from "../pietra-schwarzler-FqdfVIdgR98-unsplash.jpg";
import { BiImageAdd } from "react-icons/bi";



function Profile(){
    const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
    return(
<div>

  <Card style={{ width: '60rem', marginLeft:'300px' }} >
  <Row>
    <Col md={4}>
        <div className="img-profile">
            <Card.Img style={{marginTop:"50px"}} variant="top" src={photo} />
            <div className="layer">
                <div className="layer-input">
                <BiImageAdd style={{color: "white", fontSize: "20px"}} />
                    <input type="file" id="file" accept="image/*"></input>
                    <label for="file"> choose a photo</label>
                   
                    
                    </div>
            </div>
            </div> 
        </Col>
    <Col md={8} style={{marginTop:"16px"}}>
    <Card.Body>
    {/* <Card.Title>Card Title</Card.Title> */}
    <Row>
        <Col md={3} className="info"> <p>Name</p> </Col>
        <Col md={6} className="Detail"><p> Rania hossny</p></Col>
    </Row>
    <Row>
        <Col md={3} className="info"> <p>Email</p> </Col>
        <Col md={6} className="Detail"><p> Rania@gmail.com</p></Col>
    </Row>
    <Row>
        <Col md={3} className="info"> <p>Address</p> </Col>
        <Col md={6} className="Detail"><p> Lorem ipsum dolor sit amet consectetur</p></Col>
    </Row>
    <Row>
        <Col md={3} className="info"> <p>specialist</p> </Col>
        <Col md={6} className="Detail"><p>Front-end Devaloper</p></Col>
    </Row>
    <Row style={{justifyContent:"flex-end"}}><button  onClick={handleShow}  className="Editbtn btn">Edit profile</button></Row>
    
    <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Edit Profile</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <Row>
        <Col md={3} className="info"> <p>Name</p> </Col>
        <Col md={6} className="Detail inputeffect">
            <input type="text" className="effect"></input>
            <span className="focus-border"></span>
            </Col>
    </Row>
    <Row>
        <Col md={3} className="info"> <p>Email</p> </Col>
        <Col md={6} className="Detail"><input type="email"  className="effect"></input>
        <span className="focus-border"></span></Col>
    </Row>
    <Row>
        <Col md={3} className="info"> <p>Address</p> </Col>
        <Col md={6} className="Detail"><input type="text"  className="effect"></input>
        <span className="focus-border"></span></Col>
    </Row>
    <Row>
        <Col md={3} className="info"> <p>specialist</p> </Col>
        <Col md={6} className="Detail"><input type="text" className="effect" ></input>
        <span className="focus-border"></span></Col>
    </Row>
        </Modal.Body>
        <Modal.Footer>
          <button className="btn savebtn" onClick={handleClose}>
            Save Changes
          </button>
        </Modal.Footer>
      </Modal>
  </Card.Body>
   </Col>
  </Row>

  
</Card>


</div>
    )
}

export default Profile;
