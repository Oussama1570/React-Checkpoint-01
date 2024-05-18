import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Logo from './Logo.png';
import React, { useState } from "react";
import { Card, Col, Row, Button } from "react-bootstrap";
import Name from "./Components/Name";
import Price from "./Components/Price";
import Description from "./Components/Description";
import Image from "./Components/Image";
import { productData } from "./Components/product";
import MainTitle from './MainTitle'; // Import component
import Profile from './Profile.png'


 
    
      
      
    
 






function App() {

 
  const myName = 'Oussama';


  let greeting;
  let showImage;

  if (myName) {
    greeting = `Hello, ${myName}!`;
    showImage = true;
  } else {
    greeting = 'Hello, there!';
    showImage = false;
  }



  

  


  return (
    

/* Navbar */
    
    <div>

            <Navbar expand="lg" className="bg-blue" bg="primary" >
      <Container >
        <Navbar.Brand href="#home">My Good Technologies</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="lg">
                        <Nav.Link href="#Name" className='HomeButton'>Name</Nav.Link>
            <Nav.Link href="#Image" className='ProductsButton'>Image</Nav.Link>
            <Nav.Link href="#Price" className='AboutButton'>Price</Nav.Link>
            <Nav.Link href="#Description" className='AboutButton'>Description</Nav.Link>
            <NavDropdown title="Dropdown" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">More Information</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Contact Us
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Keep in Touch</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4"> More Guidance 
              
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>

    {/* Logo  */}



    <img className ="LogoMyTech" src ={Logo}  Link to ='#home' alt = "Logo"></img>





    {/* MainTitle */}



    <h1 className='MainTitle'>Welcome To My Good Technologies</h1>






    {/* Greeting */}

<h3 className='greeting'>{greeting}</h3>
{showImage && <img src={Profile} className='ProfileIMG' alt="Profile Picture" />}






{/* Card */}



<div className='cardP'>

    <Card style={{ width: '18rem'} } >
      <Card.Img variant="top"  Link to ='#home' src="https://www.scoopgaming.com.tn/14042-large_default/pc-portable-gaming-dell-inspiron-g15-i5-11e-rtx3050-ecran-156fhd.jpg" />
      <Card.Body>
        <Card.Title className='NameP'><Name/></Card.Title>
        <Card.Text className='DescriptionP'> <Description/></Card.Text>
        <Card.Text children='PriceP' className='PriceP'> <Price/> </Card.Text>
                <Button variant="secondary" className='BuyBtn'>Buy it</Button>
      </Card.Body>
    </Card>

    </div>















    </div>





  );
}



export default App;
