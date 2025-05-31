import { Component } from "react"

// this is my table that displays after one item or more has been slected.
class CartRow extends Component {
    render(props){
        const {qty, name, price} = this.props
        return(
            <tr>
            <td>{qty}</td>
            <td>{name}</td>
            <td>${price}</td>
            <td>${qty*price}</td>
            </tr>

            )
        }
        }
        export default CartRow;