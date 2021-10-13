import React, { Component } from 'react'

export class App extends Component {
  constructor(){
    super();
    this.state = {
      users: []
    }
  }
  componentDidMount(){
    fetch('https://reqres.in/api/users?page=2')
    .then(response => response.json())
    .then(userData => console.log(userData.data))
  }
  render() {
    return (
      <div>
        
      </div>
    )
  }
}

export default App

