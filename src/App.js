import React, { Component, Fragment } from 'react';
import Header from './components/Header'
import PizzaForm from './components/PizzaForm'
import PizzaList from './containers/PizzaList'
const baseUrl = 'http://localhost:3000/pizzas/'
class App extends Component {

  state = {
    pizzas: [],
    updatePizza:{
      id: "",
      topping: "",
      size: "",
      vegetarian: false
    }
  }
  
  getPizza = () => {
    fetch(baseUrl)
    .then(res => res.json())
    .then(data => this.setState({
      pizzas: [...data]
    }))
  }
  componentDidMount = () => {
    this.getPizza()
  }

  updateHandler = (id, topping, size, vegetarian) => {
    // console.log('inside updatehandler')
    this.setState({
      updatePizza: {
        id: id,
        topping: topping,
        size: size,
        vegetarian: vegetarian
      }
    })
  }

  
  toppingHandler = (e) => {
    this.setState({
      ...this.state,
      updatePizza:{
        ...this.state.updatePizza,
      [e.target.name]: e.target.value
      }
      })
  }

  // sizeHandler = (e) => {
  //   this.setState({
  //     ...this.state,
  //     updatePizza: {
  //       ...this.state.updatePizza,
  //       size: e.target.value
  //     }
  //   })
  // }

  vegHandler = (e) => {
    let value = e.target.value === "Vegetarian" ? true : false
    this.setState({
      ...this.state,
      updatePizza: {
        ...this.state.updatePizza,
        vegetarian: value
      }
    })
  }

  // allHandler = (e) => {
  //   this.setState({
  //     updatePizza: {
  //       ...this.state.updatePizza,
  //       topping: e.target.value,
  //       size: e.target.value,
  //       vegetarian: e.target.value
  //     }
  //   })
  // }

  submitHandler = (e) => {
    // console.log(e.target.parentNode.parentNode)
    // e.preventDefault()
    let updatePizza = this.state.updatePizza
    fetch(baseUrl+`${updatePizza.id}`, {
      method: 'PATCH',
      headers: {
        'content-type': 'application/json',
        accepts: 'application/json'
      },
      body: JSON.stringify({
        topping: updatePizza.topping,
        size: updatePizza.size,
        vegetarian: updatePizza.vegetarian
      })
    })
      .then(resp => resp.json())
      .then(data => {
        let newPizzas = this.state.pizzas.map(pizza => pizza.id == updatePizza.id ? {...data} : pizza)
        // let allPizzas = this.state.pizzas
        // let updatedPizza = allPizzas.find(pizza => pizza.id === updatePizza.id)
        // let index = allPizzas.indexOf(updatedPizza)
        // allPizzas.splice(index, 1, updatedPizza)
        this.setState({
          // pizzas: [...allPizzas]
          pizzas: [...newPizzas]
        })
        // this.getPizza()
      })
  }
  // let new_array = array.map(element => element.id == 2 ? {...element, name : 'New Name'} : element);


  render() {
    console.log(this.state.updatePizza)
    return (
      <Fragment>
        <Header/>
        <PizzaForm 
          pizza={this.state.updatePizza}
          toppingHandler={this.toppingHandler}
          // sizeHandler={this.sizeHandler}
          vegHandler={this.vegHandler}
          submitHandler={this.submitHandler}
          />
        <PizzaList 
          pizzas={this.state.pizzas} 
          updateHandler={this.updateHandler}/>
      </Fragment>
    );
  }
}

export default App;
