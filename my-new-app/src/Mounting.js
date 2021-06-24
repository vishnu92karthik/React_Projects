import React, { Component } from 'react'

export class Mounting extends Component {
    constructor(props){
        super(props);
        console.log("constructor");
        this.state={}
    }
   static getDerivedStateFromProps(props,state){
        console.log("derived statte");
        return state;
    }
    componentDidMount(){
        console.log("component mount");
    }
    submit=()=>{
        alert("success vishnuk")
    }
    render() {
        console.log("component render");
        return (
            <div>
                <button onClick={this.submit}>click</button>
            </div>
        )
    }
}

export default Mounting
