import React from 'react'
import {Link } from 'react-router-dom';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Container from 'react-bootstrap/Container';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BsFillCartFill } from "react-icons/bs";
import { MdExposureZero } from "react-icons/md";
import { style } from '@mui/system';
import './Vaishnavi.css';
import Button from 'react-bootstrap/Button';
import { IoMdSearch } from "react-icons/io";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Carousel from 'react-bootstrap/Carousel';
import Accordion from 'react-bootstrap/Accordion';
import Card from 'react-bootstrap/Card';
import { SiFacebook } from "react-icons/si";
import { AiFillTwitterCircle } from "react-icons/ai";
import { FaInstagramSquare } from "react-icons/fa";
import { TfiYoutube } from "react-icons/tfi";
import { BsLinkedin } from "react-icons/bs";
















export default function vaishnavi() {
  return (
    <div>
        
     {/* <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark"> */}
     <Navbar>
      {/* <Container> */}
        {/* <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand> */}
        <img src="https://youseq.com/img/YouSeq-logo-sm.png" alt="React Image" />

        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            {/* <Nav.Link href="#features">Features</Nav.Link>
            <Nav.Link href="#pricing">Pricing</Nav.Link>
            <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown> */}
          </Nav>
          <Nav>
            <Nav.Link href="#deets">BUY</Nav.Link>
            <Nav.Link eventKey={2} href="#memes">
              LEARN
            </Nav.Link>
            <Nav.Link eventKey={2} href="#memes">
              ABOUT
            </Nav.Link>
            <Nav.Link eventKey={2} href="#memes">
              BLOG
            </Nav.Link>
            <Nav.Link eventKey={2} href="#memes">
              DISTRUBUTORS
            </Nav.Link>
            <Nav.Link eventKey={2} href="#memes">
              CONTACT
            </Nav.Link>
            <Nav.Link eventKey={2} href="#memes">
              <h5><BsFillCartFill/></h5>
              
            </Nav.Link>
            <Nav.Link eventKey={2} href="#memes" id='zero'>
            <h5 id='zero'><MdExposureZero/></h5>
            </Nav.Link>
            <Button variant="outline-success" id='serch'><IoMdSearch/></Button>



          </Nav>
        </Navbar.Collapse>
      {/* </Container> */}
    </Navbar>
    <Container>
      <Row>
        <Col>
        







<Carousel>
      <Carousel.Item interval={1000}>
        <img
          className="d-block w-100"
          src="https://youseq.com/slir/w1200/products/Library%20Quant%20.jpg"
          alt="First slide"
        />
        
      </Carousel.Item>
      <Carousel.Item interval={500}>
        <img
          className="d-block w-100"
          src="https://youseq.com/slir/w1200/products/Library%20Quant%20.jpg"
          alt="Second slide"
        />
        
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://youseq.com/slir/w1200/products/Library%20Quant%20.jpg"
          alt="Third slide"
        />
       
      </Carousel.Item>
    </Carousel>
        </Col>
        <Col>
        <h3 id='ngs'>NGS LIBRARY QUANTIFICATION KIT</h3>
        <h6 id='ngs1'>Fast and accurate NGS library quantification for Illumina chemistries

</h6>
            <h6 style={{paddingTop:'30px'}}>It is good practice to use the same concentration of sample library when preparing NGS libraries for multiple samples. The YouSeq NGS library quantification allows highly accurate quantification by qPCR.



</h6>
<Button variant="" size="lg" active id='btn'>
        view kit handbook
      </Button>{' '}
      <Button variant="" size="lg" active id='btn1'>
        Ask our Expert
      </Button>
      <h6 id='cat'>Cat no. YS-NGS-LQC-96</h6>
      <h6 id='re'>For Research Use Only


        </h6>
        <h6 id='avi'>Available from our selected distributors.</h6>
        
        </Col>
      </Row>
      
    </Container>


    <Container>
      <Row>
        <Col id='img1'>
        <img src='https://youseq.com/slir/w1200/products/Library%20Quant%20.jpg' id='imgh'></img>
        </Col>
        <Col>
        {/* <Accordion defaultActiveKey="0"> */}
        <Accordion>
      <Accordion.Item eventKey="0">
        <Accordion.Header id='accordian'>Kit Contains</Accordion.Header>
        <Accordion.Body>
          
            
              <p> -NGS Library Quantification Primers</p>
              <p> - YouSeq qPCR SYBR Green MasterMix
                        </p>
              <p>- 4 x Standards</p>
              <p> - YouSeq dilution buffer</p>
              <p>- DNase/RNase free water</p>



            
         
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="1">
        <Accordion.Header id='accordion'>Technical Specification</Accordion.Header>
        <Accordion.Body>
          <div id='space'>
          <p>100 reaction kit</p>
            <p>4-point standard curve from 10 pM down to 0.00125 pM</p>
            <p>Suitable for all qPCR cyclers with SYBR green channel detection</p>
          </div>
          


        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
        </Col>
      </Row>
     
    </Container>
    <Container>
      <Col>
      <Row id='may'>YOU MAY ALSO BE INTERESTED IN...</Row>

      </Col>
    </Container>
    <Container>
      <Col>
      <Row>
      <Card style={{  width: '14rem',border:'none',marginLeft:'20px' }} id='card1'>
      <Card.Img variant="top" src="https://youseq.com/img/products/NGS%20custom%20panel%20Oct22.jpg" />
      <Card.Body>
        <Card.Title style={{color:'deeppink'}}>CUSTOM PANEL</Card.Title>
        <Card.Text>
        You can build your own custom targeted NGS Panel with our step-by-step selection guide.


        </Card.Text>
        <Button style={{border:'2px solid deeppink',backgroundColor:'white' ,color:'black'}}>Start Building</Button>
      </Card.Body>
    </Card>


    <Card style={{ width: '11rem',border:'none'}}>
      <Card.Img variant="top" src="https://youseq.com/slir/w1200/products/ICDV.jpg?v=1" />
      <Card.Body>
        <Card.Title style={{FontSize:'20px'}}>Sphaerospora testicularis</Card.Title>
        <Card.Text>
         
        </Card.Text>
        <Button style={{border:'2px solid deeppink',backgroundColor:'white' ,color:'black',padding:'6px 4px 10px 10px',marginTop:'80px'}}>find out more</Button>
      </Card.Body>
    </Card>

    <Card style={{  width: '11rem',border:'none' }}>
      <Card.Img variant="top" src="https://youseq.com/slir/w1200/products/ABR.jpg" />
      <Card.Body>
        <Card.Title>Macrolide lincosamide streptogramin (ermB)</Card.Title>
        <Card.Text>
          
        </Card.Text>
        <Button style={{border:'2px solid deeppink',backgroundColor:'white' ,color:'black',padding:'6px 4px 10px 10px',marginTop:'40px'}}>find out more </Button>      </Card.Body>
    </Card>


    <Card style={{  width: '11rem',border:'none' }}>
      <Card.Img variant="top" src="https://youseq.com/slir/w1200/products/ABR.jpg" />
      <Card.Body>
        <Card.Title>Macrolide lincosamide streptogramin (ermB)</Card.Title>
        <Card.Text>
         
        </Card.Text>
        <Button style={{border:'2px solid deeppink',backgroundColor:'white' ,color:'black', width:'100%' ,padding:'6px 4px 10px 10px',marginTop:'40px'}}>find out more</Button>      </Card.Body>
    </Card>

      </Row>
      
     

      
      </Col>
      <div>

     
    
      </div>
    </Container>
          <div className='new'>
          <Container style={{}}>
    <h2 style={{textAlign:'center' ,MarginTop:'70px'}} id='rel'>RELATED FEATURES</h2>
      <Col>
      <Row>
      <Card className='card' style={{ width: '13rem'}}>
      <Card.Img variant="top" src="https://img.youtube.com/vi/IR6YC-nMGsM/mqdefault.jpg" />
      <Card.Body>
        <Card.Title style={{FontSize:'20px',textAlign:'center'}}>How do our qPCR custom panels work?</Card.Title>
        <Card.Text>
        If you are developing a LDT our custom panels make it fast and easy
        </Card.Text>
        <Button style={{border:'2px solid deeppink',backgroundColor:'white' ,color:'black',padding:'6px 4px 10px 10px',marginTop:'-10px',marginLeft:'25px'}}>Play Video</Button>
      </Card.Body>
    </Card>    


    <Card className='card' style={{ width: '13rem'}}>
      <Card.Img variant="top" src="https://img.youtube.com/vi/Mk707bbrtDs/mqdefault.jpg" />
      <Card.Body>
        <Card.Title style={{FontSize:'20px',textAlign:'center'}}>How does a Covid19 qPCR test work?</Card.Title>
        <Card.Text>
         
        </Card.Text>
        <Button style={{border:'2px solid deeppink',backgroundColor:'white' ,color:'black',padding:'6px 4px 10px 10px',marginTop:'110px',textAlign:'center',marginLeft:'25px'}}>Play video</Button>
      </Card.Body>
    </Card>    


    <Card  className='card'style={{ width: '13rem',marginRight:'0px'}}>
      <Card.Img variant="top" src="https://img.youtube.com/vi/wpo0dLO5UlE/mqdefault.jpg" />
      <Card.Body>
        <Card.Title style={{FontSize:'20px',textAlign:'center'}}>Why are we so excited about 16S and NGS?</Card.Title>
        <Card.Text>
         
        </Card.Text>
        <Button style={{border:'2px solid deeppink',backgroundColor:'white' ,color:'black',padding:'6px 4px 10px 10px',marginTop:'80px',marginLeft:'25px'}}>Play video</Button>
      </Card.Body>
    </Card>    


    <Card  className='card'style={{ width: '13rem'}}>
      <Card.Img variant="top" src="https://img.youtube.com/vi/IR6YC-nMGsM/mqdefault.jpg" />
      <Card.Body>
        <Card.Title style={{FontSize:'20px', textAlign:'center'}}>What is 16S NGS sequencing and why is it so important?</Card.Title>
        <Card.Text>
         
        </Card.Text>
        <Button style={{border:'2px solid deeppink',backgroundColor:'white' ,color:'black',padding:'6px 4px 10px 10px',marginTop:'80px',marginLeft:'25px'}}>play video</Button>
      </Card.Body>
    </Card>    


      </Row>
      </Col>
    </Container>
          </div>


          <footer>
            <div className='foo'>
            <Container>
            <Row>
        <Col xs={12} md={8}>
       <li style={{color:'white',marginTop:'30px'}}>
        <h6>YouSeq Ltd</h6>
        <h6>8 Moorside Place</h6>
        <h6>Moorside Road</h6>
        <h6>Winchester</h6>
        <h6>SO23 7FX</h6>
        <h6>United Kingdom</h6>
       </li>

    
    


        </Col>
        <Col xs={6} md={4} style={{marginTop:'40px'}}>
          {/* <img src='http://www.w3.org/2000/svg'></img> */}
          <SiFacebook style={{fontSize:'25px'}}/>
          <AiFillTwitterCircle style={{fontSize:'30px',marginLeft:'13px'}}/>
          <FaInstagramSquare style={{fontSize:'30px',marginLeft:'13px'}}/>
          <TfiYoutube style={{fontSize:'25px',marginLeft:'13px'}}/>
          <BsLinkedin style={{fontSize:'25px',marginLeft:'13px'}}/>
        </Col>
      </Row>
            </Container>
            <Container>
      <Row>
        <Col style={{textAlign:'center',color:'white',marginTop:'20px',paddingBottom:'50px'}}>© YouSeq Ltd 2022 | Company No: 11595406 | Terms & Conditions | Refund Policy | Site Map | Website by fruitful</Col>
      </Row>
    </Container>
            </div>
           
          </footer>
    </div>
  )
}
