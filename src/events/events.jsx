import React from "react";
// class ExampleComponent extends React.Component{
//     sayHello(name){
//         alert("Hi "+ name);
//     }
//     render(){
//         return(
//             <div>
//                 <button className="btn" onClick={()=>{
//                     this.sayHello("asdf")
//                 }}>Click 1</button>
//             </div>
//         )
//     }

// }
// export default ExampleComponent;

// class ExampleComponent extends React.Component{
//     constructor(props){
//         super(props);
//         this.state={
//             data:"HEY"
//         }
//         this.updateState=this.updateState.bind(this);
//     }
//     updateState(){
//         this.setState({data:"GM"})
//     }
//     render(){
//         return(
//             <div>
//                 {this.state.data}<br/>
//                 <button onClick={this.updateState}>Click</button>
//                 {/* <button onClick={()=>{this.updateState()}}>Click</button> */}

//             </div>
//         )
//     }

// }
class ExampleComponent extends React.Component{
    constructor(props) {
        super(props);
        this.state={
            ping:1
        }
        this.Call = this.Call.bind(this);
    }

    Call(){
        this.setState({ping: this.state.ping+1})
        //alert("You called "+this.state.ping+" times");
    }

    render(){
        var textStyle={
            fontSize:70,
            fontFamily:"sans-serif",
            color:"#333",
            fontWeight:"bold",
            textAlign:"center",
        };

        var bgStyle={
            padding:50,
            backgroundColor:"#FFC53A",
            borderRadius:10,
            width: 350,
            height: 340,
            textAlign:"center",
        };

        var btnStyle={
            width:55,
            height:30,
            color:"#333",
            fontWeight:"bold",
            fontSize:"1em",
            lineHeight:"3px",
            textAlign:"center",

        };
        return(
            <div style={bgStyle}>
                <div style={textStyle}>
                    <h3 >Counter</h3>
                    {this.state.ping}<br/>
                </div>
                
                <button style={btnStyle} onClick={this.Call}>Click</button>
            </div>
        )
    }




}

export default ExampleComponent;