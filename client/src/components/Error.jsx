import { Component } from 'react'
import { Jumbotron, Container } from 'react-bootstrap'
import errPic from '../img/wrongway.jpeg'

// this is my error page component.
class Error extends Component {
  render() {
    return (
      <Jumbotron  fluid className="text-center jumbo">
        <Container>
<img src={errPic} alt="wrong way"/>
          <h1 className="fontTwo">If you are reading this you are on the Error Page.</h1>
          <h1>Go Back Now!!!</h1>
        </Container>
      </Jumbotron>

    )
  }
}
export default Error; 