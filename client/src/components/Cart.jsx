import { Component } from "react"
import CartRow from "./CartRow"
import api from "../api/api"


// this is me declaring my cart componet and setting state
class Cart extends Component {
  constructor(props) {
    super(props)
    this.state = {
      total: 0,
      tax: 0,
      sub: 0,
      cart: this.props.cart,
      userEmail: "",
      firstName: "",
      lastName: "",
      cardNum: "",
      cvc: "",
      message: ""

    }
  }

  // this is adding up my total when the cart comes through.
  UNSAFE_componentWillReceiveProps(props) {
    let total = 0
    for (const item of props.cart) {
      total += (item.qty * item.price)
      console.log(total);
    }
    // this is setting the subtotal, tax and grandtotal.
    this.setState({ total: total * 1.07, sub: total, tax: total * .07 })
  }
  // this is grabbing the info needed to create a newOrder.
  handleSubmit = (e) => {
    e.preventDefault()
    const { total, tax, sub, cart, firstName, lastName, userEmail, cardNum, cvc } = this.state
    const payload = {
      userEmail, total, cart, firstName, lastName, cardNum, cvc,
    }
    // this is sending my order to the backend, reloading the page.
    api.newOrder(payload).then(data => {
      this.setState({ message: data.data.success });
      setTimeout(() => { location.reload() }, 2500)
    })

  }

  render() {
    // this is deconstruting my state to use on my cart at the bottom
    const { total, tax, sub, cart, message } = this.state
    return (
      <>
        {cart.length > 0 ? <div className="container mt-5 hidden" id="cart">
          <table className="table" id="cartTable">
            <thead className="thead-dark">
              <tr>
                <th scope="col">Qty</th>
                <th scope="col">Item</th>
                <th scope="col">Price</th>
                <th scope="col">Total</th>
              </tr>
            </thead>
            <tbody id="cartItems">
            {/* mapping through my cart to display at the bottom of my page. */}
              {cart.map((item, i) => {
                return (
                  <CartRow key={i} qty={Number(item.qty)} name={item.name} price={Number(item.price)} />)
              })}
              <tr>
                <td>Sub-Total: ${sub.toFixed(2)}</td>
                <td>Tax: ${tax.toFixed(2)}</td>
                <td>Total:</td>
                <td>${total.toFixed(2)}</td>
              </tr>
            </tbody>
          </table>
          {/* this is my checkout modal and it has the credit card modal to pay. */}
          <div className="row p-1 d-flex justify-content-center">
            <button type="submit" className="btn btn-success mt-4 fontOne btn-lg " id="checkOut" data-toggle="modal"
              data-target="#checkOutModal"> $$$ Check
        Out $$$</button>
          </div>
        </div> : null}

        {/* this is my checkout modal and it has the credit card modal to pay. */}
        <div className="modal fade" id="checkOutModal" tabIndex="-1" role="dialog" aria-labelledby="checkOutModalLabel"
          aria-hidden="true">
          <div className="modal-dialog" role="document">
            <div className="modal-content">
              <div className="modal-heade bg-danger">
                <h1 className="modal-title " id="checkOutLabel">Check Out </h1>
                <button type="button" className="close" data-dismiss="modal" aria-label="Close" id="xBtn">
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              {message ? <h2 className="text-success">{message}</h2> :
                <div className="modal-body" id="mBody">
                  <form onSubmit={e => { this.handleSubmit(e) }}>
                    <div className="form-group">
                      <label htmlFor="name">First Name</label>
                      <input className="form-control" onChange={e => this.setState({ firstName: e.target.value })} type="text" placeholder="First Name" id="firstNameInput" required />
                      <label htmlFor="lastName">Last Name</label>
                      <input className="form-control" onChange={e => this.setState({ lastName: e.target.value })} type="text" name="lastName" id="lastNameInput" placeholder="Last Name"
                        required />
                      <label htmlFor="Email">Email</label>
                      <input className="form-control" onChange={e => this.setState({ userEmail: e.target.value })} type="text" name="email" id="email" placeholder="Email"
                        required />
                      <label htmlFor="cardInfo">Credit Card Number</label>
                      <input className="form-control" onChange={e => this.setState({ cardNum: e.target.value })} type="text" name="cardInfo" id="cardInfo" placeholder="Enter 16 digit card number" required />
                      <select className="form-control mt-2" name="cardType" id="cardType" required>
                        <option value="master">Master Card</option>
                        <option value="visa">Visa</option>
                        <option value="discover">Discover</option>
                      </select>
                      <label htmlFor="cvc">CVC Number</label>
                      <input className="form-control" onChange={e => this.setState({ cvc: e.target.value })} type="password" minLength="3" maxLength="4" name="cvc" id="cvc"
                        placeholder="Enter Security Code" required />
                      <p>Total:<span id="checkOutTotal" className="text-success">${total.toFixed(2)}</span></p>
                    </div>
                    <button className="bg-success btn" type="submit">Submit</button>
                  </form>
                </div>
              }
            </div>
          </div>
        </div>
      </>
    )
  }
}
export default Cart;