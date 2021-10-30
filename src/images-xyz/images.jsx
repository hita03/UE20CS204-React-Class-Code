
const Image =(props)=>{
    var imgSetting={
        height:100,
        weight:100,
        padding:10
    }
    console.log(props);
    return(
        <>
        <img style={imgSetting} src={props.src} alt="img"/>
        </>
        
    )
}

export default Image;