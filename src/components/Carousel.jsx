import React from "react"
import Citadelle from "../assets/citadelle.webp"
import Paup from "../assets/paup.jpg"
import Plage from "../assets/plage.jpg"
import { Carousel} from "react-bootstrap"

 const CarouselHome = ()=>{

  return(
    <>
     <div style={{margin: "50px 50px 50px 0px"}}>
     <Carousel>
  <Carousel.Item interval={1000}>
    <img
      className="d-block w-100"
      src={Citadelle}
      alt="First slide"
    />
    <Carousel.Caption>
      <h1 className="text- fw-bold">Welcome to Haiti</h1>
      <p></p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item interval={500}>
    <img
      className="d-block w-100"
      src={Paup}
      alt="Second slide"
    />
    <Carousel.Caption>
    <h1 className="text- fw-bold">Share your most beautiful places to visit in Haiti.</h1>
      
      
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={Plage}
      alt="Third slide"
    />
    <Carousel.Caption>
    <h1 className="text- fw-bold">we have dream places for your holidays</h1>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
     </div>
    </>
  )
 }

export default CarouselHome