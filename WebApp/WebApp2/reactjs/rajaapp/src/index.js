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

const App=()=>{
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
r1.render(<App/>);
