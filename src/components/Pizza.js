import React from "react"

const Pizza = (props) => {

  const clickHandler = () => {
    props.updateHandler(props.pizza.id, props.pizza.topping, props.pizza.size, props.pizza.vegetarian)
  }

  return(
    <tr>
      <td>{props.pizza.topping}</td>
      <td>{props.pizza.size}</td>
      <td>{props.pizza.vegetarian ? "Vegetarian" : "Not Vegetarian"}</td>
      <td><button 
          onClick={clickHandler} 
          // onClick={props.updateHandler}

          type="button" 
          className="btn btn-primary">Edit Pizza</button></td>
    </tr>
  )
}

export default Pizza
