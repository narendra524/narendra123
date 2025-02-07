Greeting.js:
import React from'react';
function Greeting({isLoggedIn}){
    if(isLoggedIn){
        return<h1>Welcome Back</h1>
    }
    else{
        return<h1>Please Login</h1>
    }
}
export default Greeting;

App.js:
import React from 'react'
import Greeting from './Greeting'
function App(){
    const isLoggedIn=false;
    return(
        <div className="App">
            <Greeting isLoggedIn={isLoggedIn}/> 
        </div>
    )
}
export default App;

FruitList.js
import React from "react";
const FruitList=()=>{
    const fruits=['apple','banana','cherry'];
    return(
      <div>
        <h1>Fruits List</h1>
        <ul>
          {fruits.map((fruit,index)=>
          <li key={index}>{fruit}</li>
          )}
        </ul>
     </div>
    )
}
export default FruitList;
