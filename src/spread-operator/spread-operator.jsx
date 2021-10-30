import React from 'react';
import './dom-traversal.css'
class Display extends React.Component{
    render(){
        return(
            <div>
                <p>{this.props.color}</p>
                <p>{this.props.num}</p>
                <p>{this.props.size}</p>
            </div>
        )
    }
}

class Label extends React.Component{
    render(){
        return(
            <div>
                <Display {...this.props}/>
            </div>
        )
    }
}

class Shirt extends React.Component{
    render(){
        return(
            <div>
                <Label {...this.props}/>
            </div>
        )
    }
}

export default Shirt;