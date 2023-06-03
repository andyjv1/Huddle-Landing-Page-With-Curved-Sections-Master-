import logo from "../images/logo.svg";

function Header() {

    return (   
        <header>
            <img src={logo} alt="Logo" />
            <button>Try It Free</button>
        </header>
        
    );
}

export default Header;