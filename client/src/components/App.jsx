import { Component } from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// this is where I have to import all components I use.
import NavBar from "./Nav";
import Home from "../pages/Home";
import Location from "../pages/Location";
import AdminPage from "../pages/AdminPage";
import Footer from "./Footer";
import Error from "./Error";


// Everytime it rerenders it checks to see if your logged in.
class App extends Component {
    constructor(props) {
        super(props)
        this.state = {
            user: false
        }
    }
    //  Checking local storage to see if your logged in.
    checkLoggedIn = () => {
        if (localStorage.getItem('user')) {
            this.setState({ user: true })
        } else {
            this.setState({ user: false })
        }
    }
// checking to see if I am logged in as soon as the page renders
    componentDidMount() {
        this.checkLoggedIn();
    }
    render() {
        return (
            <>
                <Router>

                    <NavBar admin={this.state.user} />
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/location" element={<Location />} />
                        <Route path="*" element={<Error />} />
                        <Route path="/adminInfo" element={<AdminPage admin={this.state.user}/>} />
                    </Routes>
                    <Footer />
                </Router>

            </>
        )
    }
}

export default App;