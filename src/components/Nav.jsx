import logo from "../images/logo.svg";

function Nav() {


    return (   
        <div className="nav">
            <img src={logo} alt="logo" />
            <button>Try It Free</button>
        </div>
        
    );
}

export default Nav;