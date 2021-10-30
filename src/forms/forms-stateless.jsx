//controlled and uncontrolled components
// uncontrolled components
//     react is not setting any value where you can allow browser to handle your form elements, collect data through and react change events.

// controlled approach
//     react is actively updating the input. use react to fully control the element by setting and updating the input value directly.   
import React from "react";
function MyForm(){
    return(
        <form>
           <label>Name: <input type="text"/></label><br/><br/> 
           <label>Pasword: <input type="password"/></label><br/><br/> 
        </form>   
    )
}



export default MyForm;