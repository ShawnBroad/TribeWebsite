import { Row, Col, Image } from "react-bootstrap";
import Photo1 from "../assets/photo1.jpg";
import Photo2 from "../assets/photo2.jpg";
import Photo3 from "../assets/photo3.jpg";
import Photo4 from "../assets/photo4.jpg";
import Photo5 from "../assets/photo5.jpg";
import Photo6 from "../assets/photo6.jpg";
import Photo7 from '../assets/photo7.jpg';
import Photo8 from "../assets/photo8.jpg";
import Photo9 from "../assets/photo9.jpg";
import Photo10 from "../assets/photo10.jpg";
import Photo11 from "../assets/photo11.jpg";
import Photo12 from "../assets/photo12.jpg";
import Photo13 from "../assets/photo13.jpg";
import Photo14 from "../assets/photo14.jpg";
import Photo15 from "../assets/photo15.jpg";
import Photo16 from "../assets/photo16.jpg";
import Photo17 from "../assets/photo17.jpg";
import Photo18 from "../assets/photo18.jpg";
import Photo19 from "../assets/photo19.jpg";
import Photo20 from "../assets/photo20.jpg";

const PhotoLibrary = () =>{
    return(
        <>
        <div className="colorBlock buffer">
            <Row>
                <Col>
                    <Image className="libraryPhoto" src={Photo1}/>
                </Col>
                <Col>
                    <Image className="libraryPhoto" src= {Photo2}/>
                </Col>
                <Col>
                    <Image className="libraryPhoto" src={Photo3}/>
                </Col>
                <Col>
                    <Image className="libraryPhoto" src={Photo4}/>
                </Col>
            </Row>
        </div>
        <div className="colorBlock2">
            <Row>
                <Col>
                    <Image className="libraryPhoto" src={Photo5}/>
                </Col>
                <Col>
                    <Image className="libraryPhoto" src={Photo6}/>
                </Col>
                <Col>
                    <Image className="libraryPhoto" src={Photo7}/>
                </Col>
                <Col>
                    <Image className="libraryPhoto" src={Photo8}/>
                </Col>
            </Row>
        </div>
        <div className="colorBlock">
        <Row>
                <Col>
                    <Image className="libraryPhoto" src={Photo9}/>
                </Col>
                <Col>
                    <Image className="libraryPhoto" src={Photo10}/>
                </Col>
                <Col>
                    <Image className="libraryPhoto" src={Photo11}/>
                </Col>
                <Col>
                    <Image className="libraryPhoto" src={Photo12}/>
                </Col>
            </Row>
        </div>
        <div className="colorBlock2">
        <Row>
                <Col>
                    <Image className="libraryPhoto" src={Photo13}/>
                </Col>
                <Col>
                    <Image className="libraryPhoto" src={Photo14}/>
                </Col>
                <Col>
                    <Image className="libraryPhoto" src={Photo15}/>
                </Col>
                <Col>
                    <Image className="libraryPhoto" src={Photo16}/>
                </Col>
            </Row>
        </div>
        <div className="colorBlock">
        <Row>
                <Col>
                    <Image className="libraryPhoto" src={Photo17}/>
                </Col>
                <Col>
                    <Image className="libraryPhoto" src={Photo18}/>
                </Col>
                <Col>
                    <Image className="libraryPhoto" src={Photo19}/>
                </Col>
                <Col>
                    <Image className="libraryPhoto" src={Photo20}/>
                </Col>
            </Row>
        </div>
        </>
    )
}

export default PhotoLibrary