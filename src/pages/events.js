import { Col, Image, Row } from 'react-bootstrap';
import CultureX from '../assets/CultureX.jpg';
import Logo from '../assets/tribelogo.jpg';


const Events = () => {
    return(
        <div className='bottomInfo'><h1>Schedule</h1>
        <Row> 
        <p className='bigger'>
            Dates: July 14th-17th<br></br>
            $10-Day Entry fee<br></br>
            $20 4-Day weekend VIP pass<br></br>
        </p>
        </Row>
        <br></br>
        <Row>
            <Col>
        <p className='schedule'>    
            <ol>
                <li>Thursday: Tattoo Festival from 5pm-10pm
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
                            Music on the Plaza starts at 5:30pm - Artist to be announced
                        </li>
                    </ul>
                </li>
                <br></br>
                <li>
                    Saturday:
                    <ul>
                        <li>
                            Tattoo Show: 11am - 10pm
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
                            Friday: To be announced (Depot Plaza)
                        </li>
                        <li>
                            Saturday: To be announced (Depot Plaza)
                        </li>
                    </ul>
                </li>
            </ol>
        </p>
            </Col>
            <Col>
            <Image className='BottomImage' src={CultureX}></Image>
            <br></br>
            <Image className='BottomImage' src={Logo}></Image>
            </Col>
        </Row>
        </div>

    )
}

export default Events