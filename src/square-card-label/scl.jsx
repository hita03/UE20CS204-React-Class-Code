const Card = ()=>{
    var cardStyle={
      height:200,
      with:150,
      padding:0,
      backgroundColor: "#FFF",
      filter:"drop-shadow(0px 0px 5px #666)"
    }
    console.log(this);
    return(
      <div style={cardStyle}>
      <Square color="#FF6663"/>
      <Label color="#FF6663"/>
      
      </div>
    )
  }
  
  const Label = (props)=>{
    console.log(this);
    var labelStyle={
      fontFamily:"sans-serif",
      fontWeight:"bold",
      padding:13,
      margin:0
    }
    
    return(
      <div style={labelStyle}>{props.color}</div>
    )
  }
  
  const Square =(props) =>{
     //console.log(this);
    var squareStyle={
      height:150,
      backgroundColor: `${props.color}`//{props.color}
    }
    return(
      <>
      <div style={squareStyle}></div>
      </>
      
    )
  }


  const MapExample =()=>{
    var names=["A","B","C"];
    return(
      <div>
      {names.map( function(name,index){
        return <div key={index}>Hello {name}</div>
      })}
      </div>
    )
  }
  export default MapExample;