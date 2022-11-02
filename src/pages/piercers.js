import {Container, CardGroup} from 'react-bootstrap';
import PiercerCard from '../components/cards2';


const Piercers = () =>{
    return(
        <> 
        
        <div className='homeContent'>
            <h2>Welcome!</h2>
            <p>Here we have a collection of piercers attending 4-Ever West Tattoo Fest.
                Click on the button under each artist to view their portfolios.
                Thank you and enjoy! 
            </p>
        
        </div>
        <div className='homeContent2'><h1>Featured Piercers</h1> <p>Artists attending the event!</p></div>
        <Container>
            <CardGroup>
                <PiercerCard/>
            </CardGroup>
        </Container>
        </>
            )
        }

export default Piercers