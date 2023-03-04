import { Carousel } from "react-bootstrap"
import  Poster  from "../assets/updatedposter.jpg"
import CarShows from "../assets/carshows.jpg"
import Tattoos from "../assets/tattoos.jpg"
import PinUp from "../assets/pinup.jpg"

const MainPageCarousel = () => {
  return(
    <div className="carouselContainer">
    <Carousel className="d-block w-100">
    <Carousel.Item>
      <img
        className="d-block w-100 carouselImage"
        src={CarShows}
        alt="First slide"
      />
    </Carousel.Item>
    <Carousel.Item>
      <img
        className="d-block w-100 carouselImage"
        src={PinUp}
        alt="Second slide"
      />
  
      <Carousel.Caption>
        <div className="carouselText">
          <h3>Tons of stuff to do!!!</h3>
          <p>Pin Up Contest, Tattoo Rodeo, Tattoo Competitions, Arm Wrestling, and much more!!!</p>
        </div>
      </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item>
      <img
        className="d-block w-100 carouselImage"
        src={Tattoos}
        alt="Third slide"
      />
  
      <Carousel.Caption>
        <div className="carouselText">
        <h3>40+ Tattoo Artists Featured!</h3>
        <p>Come get some fresh ink! Artists are taking walk up appointments the entire event!</p>
        </div>
      </Carousel.Caption>
    </Carousel.Item>
  </Carousel>
  </div>
  )

}
export default MainPageCarousel