import React, { Component } from 'react'

export default class grid extends Component {
    constructor(props) {
        super(props);
        this.state= {
            items:[],
            DataisLoaded : false
        };
    }
    componentDidMount(){
        fetch('https://gorest.co.in/public/v1/todos')
        .then((res) => res.json())
        .then((json) => {
            this.setState({
                items:json,
                DataisLoaded:true
            });
        })
    }
    render() {
        const[ items, DataisLoaded ] = this.state
        if(!DataisLoaded) return <div>
            <h4>Please Wait</h4>
        </div>
        return (
            <div>
                {
                items.map((item) => (

                    <div class="wrapper">
          <div class="one" key= {item.id}>
              User-id: {item.user_id},
              Title : {item.title},
              due : {item.due_on},
              Status: {item.status}
          </div>
          <div class="two" key= {item.id}>User-id: {item.user_id},
              Title : {item.title},
              due : {item.due_on},
              Status: {item.status}</div>
          <div class="three" key= {item.id}>User-id: {item.user_id},
              Title : {item.title},
              due : {item.due_on},
              Status: {item.status}</div>
          <div class="four" key= {item.id}>User-id: {item.user_id},
              Title : {item.title},
              due : {item.due_on},
              Status: {item.status}</div>
          <div class="five" key= {item.id}>User-id: {item.user_id},
              Title : {item.title},
              due : {item.due_on},
              Status: {item.status}</div>
          <div class="six" key= {item.id}>User-id: {item.user_id},
              Title : {item.title},
              due : {item.due_on},
              Status: {item.status}</div>
        </div>

                ))
}
</div>

        )
    }
}

