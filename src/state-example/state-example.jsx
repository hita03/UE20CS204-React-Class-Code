import React from "react";
import './state-example.css'
class Test extends React.Component{
    constructor(props){
        super(props)
        this.state={
            brand:"Ford",
            color:"Red",
            year:2012,
            name:"Ecosport"
        };
    }

    changeColor=()=>{
        this.setState({color:"Blue"});
    }
    render(){
        return(
            <div>
                <p>
                {this.state.brand}<br/>
                {this.state.color}<br/>
                {this.state.year}<br/>
                {this.state.name}<br/>
                <button onClick={this.changeColor}>Change Colour</button>
                </p>
            </div>
        )
    }


}

export default Test;

