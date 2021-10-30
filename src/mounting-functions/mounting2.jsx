import React from "react";
class Example extends React.Component{
    constructor(props){
        super(props);
        this.state={
            curPrice:19200,
            prevPrice: 20000
        };
        this.applyDiscount = this.applyDiscount.bind(this);

    }

    applyDiscount(){
        console.log("in function");
        this.setState((prevState)=>{
            return{
                prevPrice:prevState.curPrice,
                curPrice: 0.9*prevState.curPrice
                
            };
        });
    }

    // componentDidMount(){
    //     this.timer= setInterval(this.applyDiscount,1000);
    //     console.log("Component has mounted.");
    // }

    render(){
        return(
            <div>
                Before discount {this.state.prevPrice}<br/>
                <button onClick={this.applyDiscount}>Discount</button>
                <br/>After Discount {this.state.curPrice}<br/>
            </div>
        )

    }
}

export default Example;