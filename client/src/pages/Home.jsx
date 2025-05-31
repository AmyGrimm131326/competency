import { Component } from 'react';
import React from "react";

import About from "../components/About"
import FrontPageJumbo from "../components/FrontPageJumbo"
import Cards from "../components/Cards"
import api from "../api/api"
import Cart from "../components/Cart"

class Home extends Component {
    constructor(props) {
        super(props)
        this.state = {
            menuItems: [],
            cart: []
        }
    }
   
    componentDidMount() {
        api.getMenuItems().then(data => {
            this.setState({ menuItems: data.data });
        })
    }
    // this is my function to pass down to my cards so I can set the state on my homepage.
    setCart = (orders) => {
        this.setState({ cart: orders })
    }

    render() {
        return (
            console.log(this.state.cart),
            <div className="container-fluid">

                <About />
                <FrontPageJumbo />

                <div className="row fade-container">
                    {this.state.menuItems.map((item, i) => {
                        return <Cards cart={this.state.cart} updateCart={this.setCart} menuItem={item} key={i} />

                    })}
                    <Cart cart={this.state.cart} />

                </div>

            </div>
        )
    }
}
export default Home;