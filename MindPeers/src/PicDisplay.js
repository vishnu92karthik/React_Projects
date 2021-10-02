import React, { Component } from 'react'

export class PicDisplay extends Component {
    constructor(){
        super();
        this.state = {
          pictures: [],
        };
      }
    componentDidMount(){
        fetch('https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=c74dd5f6f32d152bd61626aa330ebd84&per_page=&page=&tags=all&format=json&nojsoncallback=1')
    .then(function(response){
        console.log(response)
        return response.json()
    })
    .then(function(j){
    let picArray = j.photos.photo.map((pic) => {
            var srcPath = 'https://farm'+pic.farm+'.staticflickr.com/'+pic.server+'/'+pic.id+'_'+pic.secret+'.jpg';
            return (
                <img alt="dogs" src={srcPath}></img>
            )
        })
        this.setState({pictures:picArray});
    }.bind(this))
   
    }
    render() {
        return (
            <div>
               {this.state.pictures} 
            </div>
        )
    }
}

export default PicDisplay
