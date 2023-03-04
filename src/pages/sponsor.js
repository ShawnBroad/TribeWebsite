import { ApplyEmail } from '../components/form';


const Sponsor = () => {
    return(
        <>
        <div className="contact">
            <h3 className="contactHead">Become a Sponsor of 4ever West Fest!</h3>
            <p>
                We would love to have you as one of our fantastic sponsors for 4ever West Fest! We have a $1000 minimum for sponsorship.
                A $4,000 or more sponsorship gets you naming rights! You can also donate to the event at any amount.
                Please fill out the email info at the bottom if you would like to join or help out! Thank you for your consideration!
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

export default Sponsor