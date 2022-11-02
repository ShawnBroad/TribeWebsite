import {  Row, Col, Image } from "react-bootstrap";
import tattoorodeo1 from "../assets/tattoorodeo1.jpg";
import tattoorodeo2 from "../assets/tattoorodeo2.jpg";
import tattoorodeo3 from "../assets/tattoorodeo3.jpg";

const Party = () => {
    return(
        <>
        <div className="homeContent3 bigger">
            <h1>Tattoo Rodeo</h1>
        <p>
            Prepare for one of the wildest rides this side of the Mississippi!
            What is the best part of the Tattoo Rodeo? You can be part of it! All you have to do is attend and maybe you will get to be tattooed in the competitions.
            This event is free on the plaza at 9:30 on Friday/Saturday 7/15 and 7/16!
        </p>
        </div>
        <div className="homeContent2 spacing1">
            <Row>
                <Col sm={4}><Image className="aboutImage" src={tattoorodeo1}/></Col>
                <Col sm={4}><Image className="aboutImage" src={tattoorodeo3}/></Col>
                <Col sm={4}><Image className="aboutImage" src={tattoorodeo2}/></Col>
            </Row>
        </div>

        </>
        )
    
    };
    

export default Party