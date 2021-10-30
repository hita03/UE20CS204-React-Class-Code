class MyForm extends React.Component{
    constructor(props){
        super(props);
        this.state={value:" "}
    }
    handleChange(event){
        this.setState({value: event.target.value})
    }

    handleSubmit(event){
        alert("Data: "+ this.state.value);
        event.preventDefault()
    }

    render(){
        return(
            <form onSubmit={this.handleSubmit.bind(this)}>
                <label>Name: <input type="text" onChange={this.handleChange.bind(this)}></input></label>
                <button>Click</button>
            </form>
        )
    }
}


export default MyForm;