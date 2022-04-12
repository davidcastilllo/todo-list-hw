import React, { Component } from "react";

class App extends Component {
 constructor(props) {
  super(props)

  this.state = {
   isClicked: false,
   todos: [
    'eat',
    'sleep',
    'code'
   ],
   text: ''
  }
 }

componentDidUpdate() {
 console.log(this.state.todos)
}

 handleClick = (event) => {
  this.setState({
   todos: [...this.state.todos, this.state.text],
   text: ''
  })

 }

 handleChange = (event) => {
  this.setState({
   text: event.target.value
  })
 }

 removeItem = (e) => {
  let i = this.state.todos.indexOf(e)
  let UpdatedTodo = [...this.state.todos]
  UpdatedTodo.splice(i,1)
  this.setState({
   todos: [...UpdatedTodo]
  })
 }

 render() {
  return (
    <div className="App">
    <button onClick={this.handleClick}>Click me</button>
    <input type="text" onChange={this.handleChange} value={this.state.text} />
    <ul>
     {this.state.todos.map((items) => {
      return <li>
       {items}
       <button onClick={((e) => {this.removeItem(items)})}>Click to remove item</button>
       </li>
     })}
    </ul>
    </div>
  );
 }
  
}

export default App;
