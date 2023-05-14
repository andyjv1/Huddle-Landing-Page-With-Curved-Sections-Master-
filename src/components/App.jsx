import Footer from "./Footer"
import FirstButton from "./FirstButton"
import Body from "./Body"
import Nav from "./Nav"
import SecondButton from "./SecondButton"

function App() {


    return (
        <main className="mainContainer">
            <Nav />
            <FirstButton />
            <Body />
            <SecondButton />
            <Footer />
        </main>
    );
}

export default App;