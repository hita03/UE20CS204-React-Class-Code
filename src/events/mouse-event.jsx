import React from "react";

class MovingMouse extends React.Component{
    constructor(props){
        super(props);
        this.state={
            x: 0,
            y: 0
        }
        this.Coordinates= this.Coordinates.bind(this);
    }

    Coordinates(event){
        this.setState({x: event.clientX , y: event.clientY});
        
    }

    render(){

        return(
            
            <div onMouseMove={this.Coordinates}>
                X coordinates {this.state.x} px<br/>
                Y coordinates {this.state.y} px
            </div>
        )
    }

}

export default MovingMouse;