import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
// import OrderedList from './u3-react-assignment/assignment';
// import MovingMouse from './events/mouse-event';
//import ExampleComponent from './events/events';
// import Card from './square-card-label/scl'
// import MapExample from './square-card-label/scl';
// import Image from './images-xyz/images'
// import GenerateImage from './images-xyz/generate-images'
// //import Shirt from './dom-traversal/dom-traversal'
// import Test from './state-example/state-example';
// import Counter from './counter/counter';
// import Timer from './mounting-functions/mounting';
// import Example from './mounting-functions/mounting2';
// import MyForm from './forms/forms-stateless';
// import MyForm from './forms/forms-stateful';
import ExampleForm from './forms/stateful-example';
ReactDOM.render(
  <React.StrictMode>
    <App />
    {/* <Card/>
    <MapExample/>
    <GenerateImage/> 
    <Shirt color="Blue" num="3" size="42" />
    <Test/>
    <Counter/>
    <Timer/>
    <Example/>
    <ExampleComponent/>
    <MovingMouse/>

    <div className="divstyle"> // assignment stuff
    <OrderedList name="Bouquet of 20 Cadbury Dairy Milk Chocolates" desc="Choose one happiness or chocolates.. ahh nevermind it's the same thing. We've caged true happiness for you and presented it in a 20 Cadbury Dairy Milk Bouquet so you can share it with loved ones. Make sure your dear ones get a dose of true happiness as a gift from you." price={645} quantity ={0}/>
    <OrderedList name="TOBLERONE" desc="Enjoy Toblerone, the iconic triangular chocolate from Switzerland with Honey and Almond Nougat. This pack contains 100g Toblerone Milk Chocolate – an ideal treat for sharing and snacking while traveling or at home. Made in Switzerland." price={99} quantity ={0}/>
    <OrderedList name="Box of 12 Bonbons - Entisi Chocolates" desc="Soft Center Filled Chocolates (Gluten-Free)" price={245} quantity={0}/>
    </div> 
    <MyForm/>*/}
    <ExampleForm/>
  </React.StrictMode>
  ,document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
