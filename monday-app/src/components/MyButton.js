

function MyButton(props) {

  const onButtonClicked = () => {
    console.log("you clicked a button")
    props.handleClick()
  }

  // render
  return ( 
    <div>
      <button id="my-button" onClick={onButtonClicked}>{ props.buttonTitle }</button>
    </div>
  )
}

export default MyButton;