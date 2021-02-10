import HomePage from "./HomePage"
import 'bootstrap/dist/css/bootstrap.min.css';

import { Button, Form, Nav, Navbar, Card, Col, Container, Row } from 'react-bootstrap'

const Homeoaage = () => {
    return (
        <div className="header">
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                <Navbar.Brand href="#home">Andrew Cars</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    
                <Form inline>
                    <input type="text" placeholder="Search" className="mr-sm-2" />
                    <Button variant="outline-info">Search</Button>
                </Form>
                </Navbar.Collapse>
            </Navbar>
           
            <Container>
                <Row className="sub-header">
                    <Col xs={12} md={6} xl={6}>
                        <img className="logo" src="./assets/images/download.jpg"></img>
                        <h3 className="logoh3">Andrew Cars</h3>
                        <h4>“𝒟𝑜 𝒽𝒶𝓇𝒹 𝓌𝑜𝓇𝓀 𝒾𝓃 𝓈𝒾𝓁𝑒𝓃𝒸𝑒 𝒶𝓃𝒹 𝓁𝑒𝓉 𝓎𝑜𝓊𝓇<br></br> 𝓃𝑒𝓌 𝒸𝒶𝓇 𝓂𝒶𝓀𝑒 𝓈𝑜𝓂𝑒 𝓃𝑜𝒾𝓈𝑒.”</h4>
                    </Col>
                    <Col xs={12} md={6} xl={6}>
                        <div className="bg" style={{backgroundImage :`url(./assets/images/r8.jpg)`}}>
                        
                        </div>
                    </Col>
                </Row>

            </Container>
            {/* <CARDAPIS></CARDAPIS> */}
        </div>
    )
}
export default Homeoaage
