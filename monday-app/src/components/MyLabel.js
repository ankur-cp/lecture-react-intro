import { Component } from "react"

class MyLabel extends Component {
  // render
  render() {
    return ( 
      <div>
        <p id="my-output">You clicked the button { this.props.myValue } times.</p>
      </div>
    )
  }
}

export default MyLabel;