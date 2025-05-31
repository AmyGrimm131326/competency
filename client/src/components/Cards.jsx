import { Component } from "react"
import Select from "./Select"

class Cards extends Component {
  constructor(props) {
    super(props)
    this.state = {
      orders: this.props.cart
    }
  }
  // this is where I am grabbing the value of each item.
  orderChoice = (e) => {
    const { name, value } = e.target
    const { size, price } = e.target.dataset
    let payload = {
      name: name,
      qty: value,
      size: size,
      price: price
    }
    let cartObjects = this.state.orders
    let inCart = false;
    for (let obj in cartObjects) {
      // for in loop allows us to loop through properites of each object in our cart to check if the new item is allready in there, if so just update the quanity, otherwise push the whole new object in to our cart objects array,

      if (cartObjects[obj].name === name) {
        inCart = true;
        if (value == 0) {
          cartObjects.splice(obj, 1);
        } else {
          cartObjects[obj].qty = value;
        }
      }
    }
    inCart ? null : cartObjects.push(payload);
    this.setState({ orders: cartObjects })
    this.props.updateCart(cartObjects)// this is using the function i created on my homepage to update the state of cart on my landing page.
  }
  render(props) {
    // this is where I am deconstruting my props.
    const { img, name, description, flavors, price, size } = this.props.menuItem
    return (
      <div className="card fade-hover col-md-4">
        <img src={img} alt="menuItems" />
        <div className="card-body cardColor">
          <h5 className="card-title text-success bg-dark text-center">{name}</h5>
          <h5 className="card-text fontTwo">{description}</h5>
          <div className="bg-danger text-white rounded mt-5">
            <form>
              <ul className="list-unstyled ml-2 p-1">
                {flavors.map((oneFlavor, i) => {
                  return (
                    <Select flavor={oneFlavor} key={i} price={price} size={size} change={this.orderChoice} />
                  )
                })}
              </ul>
            </form>
          </div>
        </div>
      </div>
    )
  }
}

export default Cards;