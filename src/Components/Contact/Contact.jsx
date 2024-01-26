import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons';
import './Contact.css';

function Contact() {
  return (
    <section className='contact-wrap' id='Contact'>
      <div className='content'>
        <h1>Contact <span style={{ color: '#FFBE98' }}>.</span> </h1>
        <p>Hey, send me an email if you want to connect!</p>
        <a className="email" href="mailto:chyuanhan@gmail.com">
          <FontAwesomeIcon icon={faEnvelope} style={{ color: "#FFBE98", marginRight: "5px" }} />
          chyuanhan@gmail.com
        </a>
      </div>
    </section>
  );
}

export default Contact;