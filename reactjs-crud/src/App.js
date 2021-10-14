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
    .then(usersData => this.setState({users:usersData.data}))
  }
  render() {
    console.log(this.state.users)
    return (
      <div>
        
      </div>
    )
  }
}

export default App

