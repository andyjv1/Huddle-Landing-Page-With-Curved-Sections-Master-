import footerdesktop from "../images/bg-footer-top-desktop.svg";
import logo from "../images/logo.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSquareTwitter } from "@fortawesome/free-brands-svg-icons";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faSquareFacebook } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope, faPhoneVolume } from "@fortawesome/free-solid-svg-icons";
import { useState, useEffect } from "react";

function Footer() {
    const [focus, setFocus] = useState(false);
    const [color, setColor] = useState(false);
    const [email, setEmail] = useState('');
    const [emailValidation, setEmailValidation] = useState(false);
    const [errorDisplay, setErrorDisplay] = useState(false);

    const validateEmail = (mail) => {
        setEmail(mail)
        if (/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(mail)) {
            setEmailValidation(true)
        } else {
            setEmailValidation(false)
        }
    }
    const setStates = () => {
        setFocus(true)
        setColor(true)
    }

    useEffect(() => {
        if ((focus &  !emailValidation) || (email !== "" & !emailValidation)) {
            setErrorDisplay(true)
        } else {
            setErrorDisplay(false)
        }
    }, [emailValidation, focus, email]);

    return (
        <footer>
            <img src={footerdesktop} alt="Top footer background" />
            <div className="footer-content">
                <div className="footer-content__info">
                    <img src={logo} alt="Logo"/>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris
                        nulla quam, hendrerit lacinia vestibulum a, ultrices quis sem.
                    </p>
                    <div className="footer-content__phone">
                        <FontAwesomeIcon icon={faPhoneVolume}/>

                        <h4>Phone: +1-543-123-4567</h4>
                    </div>
                    <div className="footer-content__email">
                        <FontAwesomeIcon icon={faEnvelope}/>

                        <h4>example@huddle.com </h4>
                    </div>
                        <FontAwesomeIcon icon={faSquareFacebook} className="footer-content__brand" />
                        <FontAwesomeIcon icon={faInstagram} className="footer-content__brand" />
                        <FontAwesomeIcon icon={faSquareTwitter} className="footer-content__brand" />

                </div>
                <div className="footer-content__newsletter">
                    <h2>NEWSLETTER</h2>
                    <p>To recieve tips on how to grow your community, sign up to our
                        weekly newsletter. We’ll never send you spam or pass on your
                        email address</p>
                    <div>
                        <input
                            placeholder="john#mail.com"
                            onChange={e => validateEmail(e.target.value)}
                            onFocus={() => setStates()}
                            onBlur={() => setFocus(false)}
                            value={email}
                            style={{ color: color ? '#00252E' : '' , border: errorDisplay ? '1px solid red' : 'none' }}
                        ></input>
                        <button>Subscribe</button>

                    </div>
                    <p id="error"
                        style={{ display: errorDisplay ? 'block' : 'none' }}
                    >Check your email please</p>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
