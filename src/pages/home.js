import {Col, Row, Image} from 'react-bootstrap';
import MainPageCarousel from '../components/carousel';
import CultureX from '../assets/CultureX.jpg';
import Logo from '../assets/tribelogo.jpg';


const Home = () =>{
    return(
<div className='width'> 

<div className='homeContent bigger'>
    <h2>Welcome to 4-Ever West Tattoo Festival!</h2>
    <p>This is your one stop shop for everything related to the 2022 4-ever West Tattoo Fest! We are excited to be
        brining this event to the wonderful people of Cheyenne again!<br></br>
    </p>

</div>
<MainPageCarousel/>
<Row>
    <Col sm={6}>
        <div className='bottomInfo'><h1>Schedule!</h1> 
        <p className='bigger'>
            Dates: July 14th-17th<br></br>
            $10-Day Entry fee<br></br>
            $20 4-Day weekend VIP pass<br></br>
        </p>
        <br></br>
        <p className='schedule'>    
            <ol>
                <li>Thursday: Tattoo Festival from 5pm-10pm
                    <ul>
                        <li>
                            Tattoo and Vendor setup 2pm-5pm. Show starts at 5pm!
                        </li>
                    </ul>
                </li>
                <br></br>
                <li>
                    Friday:
                    <ul>
                        <li>
                        Tattoo artists start at 11am - 10pm
                        </li>
                        <li>
                            Wyo Arm Sports- Super Match- 4pm start
                        </li>
                        <li>
                            Music on the Plaza starts at 5:30pm - Mystery Skulls with Sensei
                        </li>
                    </ul>
                </li>
                <br></br>
                <li>
                    Saturday:
                    <ul>
                        <li>
                            Tattoo artists start at 11am - 10pm 
                        </li>
                        <li>
                            Pin-up Contest: Registration starts at 10am ends at 1:30pm <br></br>
                            Judging starts at 2pm. Winners announced at 3pm 
                        </li>
                        <li>
                            Mustache and Beard Competition: Registration starts at 10am ends at 1:30pm<br></br>
                            Competition starts at 3:30pm. Winners announced at 4:15pm
                        </li>
                        <li>
                            Tattoo Contest: Registration starts at noon, ends at 4pm.<br></br>
                            Competition starts at 4:30pm. Winners announced at 6pm. Tattoo of the day announced at 10pm
                        </li>
                        <li>
                            Tattoo Rodeo: 4 Ever West Fest's after party!! 9pm-11:30pm 
                        </li>
                    </ul>
                </li>
                <br></br>
                <li>
                    Sunday:
                    <ul>
                        <li>
                            Tattoo Show: 11am - 5pm
                        </li>
                        <li>
                            Tattoo of the Day- announced at 6pm
                        </li>
                    </ul>
                </li>
                <br></br>
                <li>
                    Music:
                    <ul>
                        <li>
                            Friday: Mystery Skulls with Sensi (Depot Plaza)
                        </li>
                        <li>
                            Saturday: Twista/Petey Pablo and Sammy G (Depot Plaza)
                        </li>
                    </ul>
                </li>
            </ol>
        </p></div>
    </Col>
    <Col sm={6}>
        <div className='bottomInfo'>
            <h1 className='bold'>Our Events</h1> 
            <p>
                The Culture Expo is a weekend packed full of free to the public events by the community
                for the community. Taking place from July 15th-17th, "CultureX" features a collective of experiences
                standing together in the name of creativity and culture.
            </p>
            <br></br>
            <Row>
                <Col>
                    <Image className='BottomImage' src={CultureX}></Image>
                </Col>
                <Col>
                    <Image className='BottomImage' src={Logo}></Image>
                </Col>
            </Row>
            <Row>
                <h3 className='bold'>Tattoo Competition Categories</h3>
                <ol>
                    <li className='bold'>
                        Saturday Only
                    </li>
                <ul>
                    <li>
                        Small Color- Trophies for 1st,2nd,3rd place 
                    </li>
                    <li>
                        Large Color- Trophies for 1st,2nd,3rd place
                    </li>
                    <li>
                        Small Black and Grey- Trophies for 1st,2nd,3rd place
                    </li>
                    <li>
                        Large Black and Grey- Trophies for 1st,2nd,3rd place
                    </li>
                    <li>
                        Best Traditional- Trophies for 1st,2nd,3rd place
                    </li>
                    <li>
                        Best Realistic/Portrait- Trophies for 1st,2nd,3rd place
                    </li>
                </ul>
                    <li className='bold'>
                        Friday and Saturday
                    </li>
                <ul>    
                    <li>
                        Tattoo of the Day! Only one winner each day!
                    </li>
                </ul>
                </ol>
            </Row>
        </div>
    </Col>
</Row>
</div>
    )
}

export default Home