import { Component } from 'react';
import { Card, Body, Title, Text, Button } from 'react-bootstrap'
import api from "../api/api"

// this is my admin page card that displays on my admin page.
class AdminCard extends Component {
  // this is my onclick for the admin to say the order has been completed.
  handleClick = (e) => {
    console.log("complete");
    // this is my api that updates my order and changes complete to true.
    api.completeOrder(e.target.value).then(data => {
      console.log(data.data.success)
      location.reload()
    })
  }
  // this is my delete button.
  handleDelete = (e) => {
    console.log("delete");
    api.deleteOrder(e.target.value).then(data => {
      console.log(data.data)
      location.reload()
    })
  }
  render(props) {
    // this is me deconstruting my props.order so I dont have to keep typing it over and over.
    const { _id, total, cart, userEmail, firstName, lastName, complete } = this.props.order;
    return (
      <Card className="col-md-8">
        <Card.Body>
          <Card.Title>Order Information</Card.Title>
          <div className="card-body">
            <ul className="list-unstyled">
              <li>{firstName} {lastName}</li>
              <li>User Email: {userEmail}</li>
              <li>
                <ul>
                  {/* this is displaying all items from the cart for the order in the adminCard. */}
                  {cart.map((cartItem, i) => {
                    return (
                      <li key={i}>({cartItem.qty}) {cartItem.size} {cartItem.name} </li>
                    )
                  })}
                </ul>
              </li>
              <li>Total: {total.toFixed(2)}</li>
              <li>Order Complete:<span className={!complete ? "text-danger" : "text-success"}>{complete ? 'yes' : 'No'}</span></li>
            </ul>
          </div>
          {complete ? null : <Button onClick={e => this.handleClick(e)} className="btn mr-5 mt-5 bg-success" value={_id}>Complete</Button>
          }
          <Button value={_id} onClick={e => this.handleDelete(e)} variant="danger mt-5">Delete</Button>
        </Card.Body>
      </Card>
    )
  }
}
export default AdminCard;