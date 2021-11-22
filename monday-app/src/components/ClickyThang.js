import MyButton from "./MyButton"
import MyLabel from "./MyLabel"
import { Component } from "react"

// Steps to convert functional component to class component
// 1.) change "function" header syntax to "class" header syntax
//  1a.) We MUST inherit from React.Component
//  1b.) Import Component from React lib
// 2.) Change state values from using useState to this.state = {}
//  2a.) Must create a value called state, that will be an object
// 3.) Updating state values must use this.setState()
// 4.) Change methods to satisfy class naming syntax
// 5.) All state and prop values should changed to this.state.whatever and this.props.whatever
// 6.) You MUST add in a render() function to return the JSX you want

class ClickyThang extends Component {
  // states
  state = {
    counter: 0,
    somethingElse: "donuts"
  }

  // event handlers
  incrementCounter = () => {
    this.setState((prevState) => {
      return { 
        counter: prevState.counter + 1,
      }
    })
  }
  
  render() {
    return (
      <div>
        <MyButton handleClick={this.incrementCounter} buttonTitle={"Click Me!"} /> 
        <MyLabel myValue={this.state.counter} />
      </div>
    )
  }
}

export default ClickyThang;