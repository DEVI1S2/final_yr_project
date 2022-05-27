import React from 'react'
import {Container,Row ,Card, Col, Button} from 'react-bootstrap';

function Cart() {
  return (
    <div>
      <Container className='p-4'>
          <Row>
        
                <Card>
                    <Row >
                    <Col md={2}>
                <div style={{display:"flex",justifyContent:"start", alignItems:"center"}}>
                  <Card.Img class="img" variant="top" src="https://m.media-amazon.com/images/I/617SMwcS4HS._AC_UL480_FMwebp_QL65_.jpg" style={{height:"180px"  }}/>
                </div>
            </Col>
            <Col md={10}>    
                <Card.Body><Row>
                <Col md={8}>
              <div class="card-text-body" >
              <Card.Title>Product</Card.Title>
            <Card.Subtitle>
                <Col>Brand</Col>
              
              </Card.Subtitle>
            <Card.Text>
            {/* <Row md={2}  style={{margin:"2px"}}> */}
            {/* <Col>₹{prod.price}</Col> */}
            {/* <Col md={{offset: -2}}><Button variant="success">Negotiate</Button></Col>
            </Row> */}
              
            </Card.Text>
            <Row md={2}  style={{marginTop:"7%"}}>
            <Col><Button variant="primary">Buy Now</Button></Col>
            {/* <Col md={{offset: -2}}><Button variant="warning" >Add to Cart</Button></Col> */}
            </Row>
            
              </div>
              </Col>
              <Col md={3}>
                  <Row md={6}>
                   <Col sm={1}><Button variant='dark' >-</Button></Col>
                   <Col sm={1}><Button variant='dark' className='btn-outline-dark' disabled>1</Button></Col>
                   <Col sm={1}><Button variant='dark' >+</Button></Col>   
                 </Row>        
             </Col></Row>
            </Card.Body>
            </Col>
            </Row>
                </Card>
            
          </Row>
      </Container>
    </div>
  )
}

export default Cart