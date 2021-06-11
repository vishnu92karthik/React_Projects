import React, { Component } from 'react';

 export default class Button2 extends Component {
     constructor(props){
         super(props);
         this.state={
             title:"Submit Again"
         }
     }
     componentDidMount(){
         this.setState({title:"updated"});
     }
    render(){
        return(
            <button>{this.state.title}Submit class</button>
        )
    }
}