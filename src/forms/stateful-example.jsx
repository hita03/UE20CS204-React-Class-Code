import React from "react";
class FormExample extends React.Component{
    constructor(props){
        super(props);
        this.state={
            input: " "
        }
        this.Input = this.Input.bind(this);
        //this.returnValue = this.returnValue.bind(this);
    }

    Input(props){
        console.log(props);
        this.setState({input:this.state.input})
    }

    render(){
        return(
            <div>
                {this.state.input}
                <form>
                    <input type="text" onChange={this.Input}/> 
                </form>
            </div>
            
        )

    }
    
}

export default FormExample;
