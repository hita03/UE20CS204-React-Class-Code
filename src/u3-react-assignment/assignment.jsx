import React from "react";
class OrderedList extends React.Component{
    constructor(props){
        super(props);
        this.state={
            Name: props.name,
            Description: props.desc,
            Price: props.price,
            Quantity: props.quantity
        }
        this.handleClick= this.handleClick.bind(this);
    } 
    handleClick(props){
        this.setState({Quantity: this.state.Quantity+1, Price: this.state.Price+this.props.price})
    } 
    
    render(){
        var eleStyle={
            width: 350,
            height: 380,
        }
        var btnStyle={
            fontSize:20,
        }
        var x="         ";

        return(

            <div style={eleStyle}>
                <h3>{this.state.Name}</h3>
                {this.state.Description}
                <br/>Price: <b>Rs. {this.state.Price}</b>
                <br/>Quantity: <b>{this.state.Quantity}</b>
                {x}<button style={btnStyle} onClick={()=>{
                    this.handleClick()
                }}>+</button>
                
                
            </div>
        )
    }
}

export default OrderedList;