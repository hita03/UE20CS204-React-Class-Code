const GenerateImage =()=>{
    //var url= `https://picsum.photos/id/${x}` ;
    setInterval((props)=>{

        props.src= "https://picsum.photos/333";
    },3000)
    return(
        <>
        <img src= "https://picsum.photos/333" alt="abc" onClick="setInterval()"/>
        </>
     
    )
}

export default GenerateImage;