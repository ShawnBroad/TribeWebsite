import {  Row, Col, Image } from "react-bootstrap";
import AboutUs1 from "../assets/aboutUs1.jpg";
import AboutUs2 from "../assets/aboutUs2.jpg";
import AboutUs3 from "../assets/aboutUs3.jpg";

 
const About = () =>{
    return(
    <>
    <div className="homeContent3">
        <h1>About us!</h1>
    <p>
        It's the event that started it all! Where the past meets the future. 4-Ever West is held in the Cheyenne historic train depot built in 1886!
        The train depot at one time was the hub that connected the eastern United States to the wild west!
         The 4-Ever West Tattoo Fest features the best tattoo artists and
        shops from all over the United States coming together to showcase their skills under the same roof.
        Almost an entire decade ago our friends at The T.R.I.B.E. Zoo started the 4-Ever West Tattoo Fest,
        Wyoming's first-ever tattoo convention in the heart of Downtown Cheyenne. As its popularity and event roster grew,
        so did the interest of our creative community. The festival quickly became a springboard for sideshows such as Paint Slingers,
        competitions, music, and more. Today, the success of this event has created a hub for our creative economy and the local community
        to come together in celebration and CultureX was born.
    </p>
    </div>
    <div className="homeContent2 spacing1">
        <Row>
            <Col sm={4}><Image className="aboutImage" src={AboutUs1}/></Col>
            <Col sm={4}><Image className="aboutImage" src={AboutUs2}/></Col>
            <Col sm={4}><Image className="aboutImage" src={AboutUs3}/></Col>
        </Row>
    </div>
    <div className="homeContent spacing1">
        <h1>The Future of 4-Ever West</h1>
        <p>
            Our hopes for the future of 4-Ever west are to continue to bring the various sub cultures that
            we represent in CultureX to the forefront. The more we can bring in and showcase to the world the better.
            What started as a tattoo convention has grown into so much more and we can not wait to see what the future holds.
        </p>
    </div>
    </>
    )

};

export default About