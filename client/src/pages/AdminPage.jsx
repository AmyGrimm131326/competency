import { Component } from 'react'
import AdminCard from '../components/AdminCard'
import OrderModal from '../components/OrderModal'
import api from "../api/api"

class AdminPage extends Component {
  constructor(props) {
    super(props)
    this.state = {
      incompleteOrders: [],
      completeOrders: []
    }
  }
  // this is my admin page and the card it displays it is updating it.
  componentDidMount() {
    api.getOrders().then(data => {
      document.querySelector('title').innerText = "New Orders (0)"
      let incomplete = data.data.filter(order => !order.complete)
      let complete = data.data.filter(order => order.complete)
      this.setState({ incompleteOrders: incomplete, completeOrders: complete });
    })
  }
  componentDidUpdate(prevState) {
    if (this.state.incompleteOrders !== prevState.incompleteOrders) {
      document.querySelector('title').innerText = `New Orders (${this.state.incompleteOrders.length})`
    }
  }
  render() {
    return (
      <>
        {this.props.admin ?
          <div className="container-fluid">
            <h3 className="text-success text-center">Current Orders</h3>
            <div className="row justify-content-center">
              {this.state.incompleteOrders.map((order, i) => {
                return <AdminCard key={i} order={order} />
              })}
            </div>
            <div className="text-success">Previous Orders</div>
            <ul>
              {this.state.completeOrders.map((order, i) => {
                return <li key={i}><OrderModal order={order} /></li>
              })}
            </ul>
          </div> : <div className="mt-5 text-center ml-5 mr-5 mb-5"><h1>Must be Signed In as Admin to be able to view this page.</h1></div>}
      </>
    )
  }
}
export default AdminPage; 