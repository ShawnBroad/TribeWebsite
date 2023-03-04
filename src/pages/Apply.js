import {Button, Row} from 'react-bootstrap';
import { ApplyEmail } from '../components/form';


const Apply = () => {
    return(
        <>
        <div className="contact">
            <h3 className="contactHead">Artist Application</h3>
            <p>Please fill out the Guest Body Artist Permit Application</p>
            <Button variant='dark' href='https://clcpublichealth.org/environmental-health-home/body-art/guest-body-artist-permit-application/'
            target='_blank'>
                Click here for Permit Application
            </Button>
            <p>
                After filling the Guest Body Artist Permit Application through the link above please
                email us with your name, email, and the name of your shop by filling out the email section below.
            </p>
            <div>
                <p>
                <ApplyEmail className="formStyle"/>
                </p>
            </div>
        </div>
        
        </>
    )
}

export default Apply