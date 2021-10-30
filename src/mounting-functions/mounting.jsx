import { render } from "@testing-library/react";
import React from "react";



class Timer extends React.Component{
    constructor(props){
        super(props);
        console.log("Constructor",props);
        this.state={
            count:0
        };
        this.timerTick=this.timerTick.bind(this);
    }

    timerTick(){
        this.setState((prevState)=>{
            return{
                count: prevState.count+1
            };
        });

    }

    componentDidUpdate(prevProps, prevState){
        console.log("Component updated from: "+prevState.count);

    }

    componentDidMount(){
        this.timer= setInterval(this.timerTick,1000);
        console.log("Component has mounted.");
    }
    render(){
        console.log("Timer called");
        return(
            <div>
                {this.state.timerTick}
                {this.state.count}

            </div>
            
        )
    }
}
// const Timer =()=>{
//     constructor(props){
//         super(props);
//         console.log("Constructor");
//     }

//     render(){

//         return(
//             <br/>
//         )
//     }
// }

export default Timer;