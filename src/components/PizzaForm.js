import React from "react"

const PizzaForm = (props) => {
  return(
      <div className="form-row">
        <div className="col-5">
          {/* {console.log(props.topping)} */}
            <input type="text" className="form-control" name="topping" placeholder="Pizza Topping" value={props.pizza.topping} onChange={props.toppingHandler}/>
        </div>
        <div className="col">
          <select value={props.pizza.size} name="size" className="form-control" onChange={props.toppingHandler}>
            <option value="Small">Small</option>
            <option value="Medium">Medium</option>
            <option value="Large">Large</option>
          </select>
        </div>
        <div className="col">
          <div className="form-check">
            <input className="form-check-input" type="radio" value="Vegetarian" checked={props.pizza.vegetarian} onChange={props.vegHandler}/>
            <label className="form-check-label">
              Vegetarian
            </label>
          </div>
          <div className="form-check">
            <input className="form-check-input" type="radio" value="Not Vegetarian" checked={!props.pizza.vegetarian} onChange={props.vegHandler}/>
            <label className="form-check-label">
              Not Vegetarian
            </label>
          </div>
        </div>
        <div className="col">
          <button type="submit" className="btn btn-success" onClick={props.submitHandler}>Submit</button>
        </div>
      </div>

  )
}

export default PizzaForm
