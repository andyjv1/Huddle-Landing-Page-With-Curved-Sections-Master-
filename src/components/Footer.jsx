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
        <div className="mainFootercont">
            <img className="footerdesktop" src={footerdesktop} alt="footerdesktop" />
            <div className="footercont">
                <div className="iconcont">
                    <img src={logo} alt="logo" className="whiteIcon logo" />
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris
                        nulla quam, hendrerit lacinia vestibulum a, ultrices quis sem.
                    </p>
                    <div className="phonecont">
                        <FontAwesomeIcon icon={faPhoneVolume} className="whiteIcon" />

                        <h4>Phone: +1-543-123-4567</h4>
                    </div>
                    <div className="emailcont">
                        <FontAwesomeIcon icon={faEnvelope} className="whiteIcon" />

                        <h4>example@huddle.com </h4>
                    </div>
                    <div>
                        <FontAwesomeIcon icon={faSquareFacebook} className="whiteIcon brand" />
                        <FontAwesomeIcon icon={faInstagram} className="whiteIcon brand" />
                        <FontAwesomeIcon icon={faSquareTwitter} className="whiteIcon brand" />

                    </div>
                </div>
                <div className="newslettercont">
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
        </div>
    );
}

export default Footer;
