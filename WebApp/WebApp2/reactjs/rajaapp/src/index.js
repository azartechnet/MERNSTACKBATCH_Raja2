import React from "react";
import ReactDOM  from "react-dom/client";

/*function Sample()
{
   return(
    <div>
      <label>UserName</label>
      <input type="text" placeholder="Enter your name"/>
      <br/>
      <label>Password</label>
      <input type="password" placeholder="Enter your password"/>
      <br/>
      <button>Submit</button>
    </div>
   )
}

const r1 = ReactDOM.createRoot(document.getElementById("root"));
r1.render(<Sample/>);*/

//Basic Rendering

/*const Sample=()=>{
  return(
    <div>
      <h1>My First React App</h1>
      <p>React is a JavaScript library for building user interfaces.</p>
    
    </div>
    )
}

const r1=ReactDOM.createRoot(document.getElementById('root'));
r1.render(<Sample/>);*/

//Dynamic Rendering

/*const App=()=>{
  const username="mohamed";
  const password="123456";

  return(

    <div>
      <h1>My First React App {username} and {password}</h1>
      <p>{new Date().toLocaleDateString()}</p>
      <p>React is a JavaScript library for building user interfaces.</p>
      <label>UserName</label>
      <input type="text" placeholder="Enter your name"/>
      <br/>
      <label>Password</label>
      <input type="password" placeholder="Enter your password"/>
      <br/>
      <button>Submit</button>
    </div>

  )
}

const r1=ReactDOM.createRoot(document.getElementById('root'));
r1.render(<App/>);*/

//With JSX

/*const myelm1=<h1>Welcome</h1>
const myelm2=<p>React is a JavaScript library for building user interfaces.</p>
const myelm3=<label>UserName</label>
const myelm4=<input type="text" placeholder="Enter your name"/>
const myelm5=<label>Password</label>
const myelm6=<input type="password" placeholder="Enter your password"/>
const myelm7=<button>Submit</button>
const myelm8=<div>

  <h1>My First React App</h1>
  <p>{new Date().toLocaleDateString()}</p>
  {myelm1}
  {myelm2}
  <br/>
  {myelm3}
  {myelm4}
  <br/>
  {myelm5}
  {myelm6}
  <br/>
  {myelm7}
  </div>
const r2=ReactDOM.createRoot(document.getElementById('root'));
r2.render(myelm8);*/

//Without JSX

/*const myElement = React.createElement('p', {}, 'I do not use JSX!');

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(myElement);*/

//React List

/*const App=()=>{
  return(
    <div>
    <h1>My First React App</h1>
    <ul>
      <li>Item 1</li>
      <li>Item 2</li>
      <li>Item 3</li>
    </ul>
  </div>
  )
 
}

const r1=ReactDOM.createRoot(document.getElementById('root'))
r1.render(<App/>)*/

//Fragment tag
/*const App=()=>{
  return(
    <div>
    <h1>Welcome</h1>
    <h2>Welcome</h2>
    </div>

  )
}

const r1=ReactDOM.createRoot(document.getElementById('root'))
r1.render(<App/>)*/

//importing css and implementing bootstrap

/*import './index.css';

const App=()=>{
  return(
    <div className="container">
      <h1>Welcome</h1>
      <h2>Welcome</h2>
      <form>
        <input type="submit" value="Submit" className="btn btn-info"/>
      </form>
    </div>
  )
}
const r1=ReactDOM.createRoot(document.getElementById('root'))
r1.render(<App/>)*/

//Conditional rendering

/*const x=11
let text="";
if(x>10){
  text="world"
  }else if(x==10){
    text="equal"
  }else{
    text="less"
  }

  const Myelem=()=>{
    return(
      <div>
        <h1>{text}</h1>
      </div>
    )
  }

  const r1=ReactDOM.createRoot(document.getElementById('root'))
  r1.render(<Myelem/>)*/

  //class component

  /*class Sample extends React.Component
  {
    render()
    {
      return(
        <div>
          <h1>Hello</h1>
        </div>
      )
    }
  }

  const r1=ReactDOM.createRoot(document.getElementById('root'))
  r1.render(<Sample/>)*/

  //Function Component with argument

  /*function Sample(props)
  {
     return(
      <div>
        <h1>Hello {props.name}</h1>
        <h1>Hello{props.age}</h1>
      </div>
      )

  }

  const r1=ReactDOM.createRoot(document.getElementById('root'))
  r1.render(<Sample name="Rahul" age="20"/>)*/

  /*function Greeting(props)
  {
    return(
      <>
         <h1>Hello,{props.user}</h1>

         <h1>Hello,{props.age}</h1>
      </>
    )
  }

  const r1=ReactDOM.createRoot(document.getElementById('root'))
  r1.render(<Greeting user="Rahul" age="20"/>)*/

  //Component in Component

  /*function Sample1()
  {
     return(
      <div>
        <center>
          <a href="">Home</a>&nbsp;&nbsp;&nbsp;&nbsp;
          <a href="">About</a>&nbsp;&nbsp;&nbsp;&nbsp;
          <a href="">Contact</a>&nbsp;&nbsp;&nbsp;&nbsp;
        </center>
      </div>
     )
  }

  function Sample2()
  {
    return(
      <div>
        <Sample1/>
        <br></br>
        <center>
        <h1>This is Sample2</h1>
        </center>
      </div>
    )
  }

   const r1=ReactDOM.createRoot(document.getElementById('root'))
   r1.render(<Sample2/>)*/

import Sample from "./App";

const r1=ReactDOM.createRoot(document.getElementById('root'))
r1.render(<Sample/>)  //importing the component and rendering it





