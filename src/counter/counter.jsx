import React from "react";
class Counter extends React.Component{
    constructor(props){
        super(props)
        this.state={
            count:0
        }
        
    ;
    }
    
    count =()=>{
        this.setState({count:this.state.count+1});

    }
    render(){
        return(
            <div>
                <p>
                    Counter: {this.state.count}
                    <button onClick={this.count}>Click ME!</button>
                </p>
            </div>
        )
    }
}

export default Counter;