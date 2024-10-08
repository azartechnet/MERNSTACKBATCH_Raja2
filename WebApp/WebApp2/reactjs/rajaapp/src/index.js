import React, { Component, useEffect } from "react";
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

/*import Sample from "./App";

const r1=ReactDOM.createRoot(document.getElementById('root'))
r1.render(<Sample/>)  //importing the component and rendering */

//Component Constructor

/*class Sample extends React.Component
{
   constructor(){
    super();
    this.state={
      name:"Rahul",
      age:20
      }
    }
      render()
      {
        return(
          <div>
            <h1>{this.state.name}</h1>
            <h1>{this.state.age}</h1>
          </div>
        )
      }
   
}
const r1=ReactDOM.createRoot(document.getElementById('root'))
r1.render(<Sample/>)*/

//Using Constructor

/*class Header extends Component
{
  text="Welcome";
  constructor()
  {
     super();
     this.state={f1:'red'}
  }
  render()
  {
    return(
      <div>
        <h1>{this.text}</h1>
        <h1>{this.state.f1}</h1>
        <h1 style={{color:this.state.f1}}>Welcome</h1>
      </div>
    )
}
}

const r1=ReactDOM.createRoot(document.getElementById('root'))
r1.render(<Header/>)*/


//Changing the state object

/*class Sample extends React.Component
{
    constructor()
    {
        super();
        this.state={
            emp:{
                name:"John",
                age:25,
                city:"karur"
            },
            showData:false
        };
    }
    showData()
    {
        this.setState({showData:true});
    }
    hideData()
    {
        this.setState({showData:false});
    }
    render()
    {
        let data;
        if(this.state.showData==true)
        {
            data=<div>{this.state.emp.name}{this.state.emp.age}{this.state.emp.city}
               <button onClick={this.hideData.bind(this)}>HideData</button>
            </div>
            
        }
        else
        {
             data=<div><button onClick={this.showData.bind(this)}>ShowData</button></div>
        }
        return(
            <div>
                <h1>Welcome</h1>
                <h2>EmployeeDetails</h2>
                {data}
            </div>
        )
    }
}

const r1=ReactDOM.createRoot(document.getElementById('root'))
r1.render(<Sample/>)*/

//React Events

/*function Football()
{
  const shoot=()=>{
    alert("Goal Shooted")
  }
  return(
    <div>
      <button onClick={shoot}>Shoot</button>
    </div>
  )
}

const r1=ReactDOM.createRoot(document.getElementById('root'))
r1.render(<Football/>)*/

/*function Football()
{
  const shoot=(a)=>{
    alert(a)
}
return(
  <div>
    <button onClick={()=>shoot("Goal Shooted")}>Shoot</button>
  </div>
)
}

const r1=ReactDOM.createRoot(document.getElementById("root"))
r1.render(<Football/>)*/

//Conditional Rendering

/*function MissedGoal()
{
     return<h1>MISSED</h1>
}
function MadeGoal()
{
     return<h1>GOAL</h1>
}
function Goal(props)
{
       const isGoal=props.isGoal;
       if(isGoal)
       {
          return<MadeGoal/>
       }else
       {
          return<MissedGoal/>
       }
}

const r1=ReactDOM.createRoot(document.getElementById('root'))
r1.render(<Goal isGoal={Math.random()>0.5}/>);*/

//React list

/*function Car(props)
{
    return<li>I am a {props.b1}</li>
}
function Garage()
{
  const cars=["BMW","Audi","Mercedes"]
  return(
    <div>
      <h1>Garage</h1>
      <ul>
        {cars.map((car)=><Car b1={car}/>)}
        
      </ul>

    </div>
  )
}

const r1=ReactDOM.createRoot(document.getElementById('root'))
r1.render(<Garage/>);*/

//React Form

/*function MyForm()
{
   return(
    <form>
       <label>UserName</label>
       <input type="text" name="" id="" />
       <br />
       <label>Password</label>
       <input type="text" />
       <br/>

       <button type="submit">Submit</button>
    </form>
   )
}
const r1=ReactDOM.createRoot(document.getElementById('root'))
r1.render(<MyForm/>);*/

//React getDerivedStateFromProps

/*class Header extends React.Component
{
  constructor(props)
  {
    super(props);
    this.state={favcolor:"azar"};
  }
  /*static getDerivedStateFromProps(props,state)
  {
    
      return { favcolor: props.favcolor };
    
  }
  

  render()
  {
     return(
      <div>
         <h1>My Fav Color is {this.state.favcolor}</h1>
      </div>
     )
  }

}
const r1=ReactDOM.createRoot(document.getElementById('root'))
r1.render(<Header favcolor="blue"/>)*/

//ComponentDidMount

// setTimeout executes the code only once after the specified delay, 
//  setInterval executes the code repeatedly at the specified interval.
//ComponentWillUnmount clears the timer when the component is about to be
// removed from the DOM to prevent memory leaks

/*class TimerComponent extends React.Component
{
  constructor(props)
  {
    super(props);
    this.state={
      seconds:0,
    };
  }

  componentDidMount()
  {
    this.timerID=setInterval(
      () => this.setState(
        {seconds: this.state.seconds + 1}),
      1000
      );
}
componentWillUnmount()
{
  clearInterval(this.timerID);
}

render()
{
  return(
    <div>
      <h1>Timer Component</h1>
      <h2>Time Elapsed: {this.state.seconds} seconds</h2>

    </div>
  )
}
}

const r1=ReactDOM.createRoot(document.getElementById('root'))
r1.render(<TimerComponent/>)*/

//Updating getDerviedStateFromProps

/*class Header extends React.Component{
  constructor(props){
      super(props);
      this.state={empname:"Azar"};
  }
  static getDrivedStateFromProps(props,state){
      return{empname:props.empname};
  }
  changeEmployee=()=>{
      this.setState({empname:"Mohan"});
  }
  render(){
      return(
          <div>
              <h1>This is Render page{this.state.empname}</h1>
              <button type='submit' onClick={this.changeEmployee}>Click</button>
          </div>
      );
  }
}
const r1=ReactDOM.createRoot(document.getElementById('root'));
r1.render(<Header empname="tech"/>);*/

//ShouldComponentUpdate()

/*class Header extends React.Component
{
  constructor(props)
  {
    super(props);
    this.state={favcolor:"Red"}
  }
  shouldComponentUpdate()
  {
    return true;
  }
  changeColor=()=>{
    this.setState({favcolor:"Blue"});
  }
  render()
  {
    return(
      <div>
        <h1>This is Render page{this.state.favcolor}</h1>
        <button type='submit' onClick={this.changeColor}>Click</button>
      </div>
      );
}
}
const r1=ReactDOM.createRoot(document.getElementById('root'));
r1.render(<Header/>);*/

//React Hooks useState()

import { useState } from "react";

/*function Counter()
{
    const [count,setCount]=useState(10)
    const [name,setName]=useState("mohamed")
    return(
      <div>
        <h1>Count:{count}</h1>
        <button type='submit' onClick={()=>setCount(count+1)}>Click</button>
        <h1>Name:{name}</h1>
        <button type='submit' onClick={()=>setName("mohamed tech")}>Click</button>

      </div>
    )
}
const r1=ReactDOM.createRoot(document.getElementById('root'));
r1.render(<Counter/>);*/

//React UseEffect

/*function Timer()
{
  const [count,setCount]=useState(0)
  useEffect(()=>{
    setTimeout(()=>{
      setCount(count+1)
    },1000)
  })
  return <h1>I have Renderd{count}</h1>
}

const r1=ReactDOM.createRoot(document.getElementById('root'))
r1.render(<Timer/>)*/

//React UseEffect

/*function ClickCounter()
{
  const [count,setCount]=useState(0)

  useEffect(()=>{
    document.title=`You Clicked ${count} times`
    
    },[count])
  

  return(
  
    <button type='submit' onClick={()=>setCount(count+1)}>Click</button>
  )

  }



const r1=ReactDOM.createRoot(document.getElementById('root'));
r1.render(<ClickCounter/>);*/

//React Without UseContext

/*function Component1()
{
  const [user,setUser]=useState("mohamed")
  return(
    <div>
      <h1>Hello {user}</h1>
      <Component2 user={user}/>
    </div>
  )
}
function Component2(props)
{
  return(
    <div>
      <h1>Hello {props.user}</h1>
      
    </div>
    )
}
const r1=ReactDOM.createRoot(document.getElementById('root'));
r1.render(<Component1/>);*/

//React useContext

/*import { createContext,useContext } from "react";

const UserContext=createContext()

function Component1()
{
   const [user,setUser]=useState("mohamed");
   return(
    <UserContext.Provider value={user}>
      <div>
        <h1>Hello {user}</h1>
        <Component2/>
      </div>
    </UserContext.Provider>
    )
}
function Component2()
{
  const user=useContext(UserContext);
  return(
    <div>
      <h1>Hello {user}</h1>
      <Component3/>
    </div>
    )
}
function Component3()
{
  const user=useContext(UserContext);
  return(
    <div>
      <h1>Hello {user}</h1>

    </div>
  )
  }
    const r1=ReactDOM.createRoot(document.getElementById('root'));
    r1.render(<Component1/>);*/

    //useRef

    /*import { useRef } from "react";
    function FocusInput()
    {
      const inputRef=useRef(null);
      const handleClick=()=>{
        inputRef.current.focus();
        }
        return(
          <div>
            <input type="text" ref={inputRef}/>
            <button onClick={handleClick}>Focus</button>

          </div>
        )
    }
    const r1=ReactDOM.createRoot(document.getElementById('root'));
    r1.render(<FocusInput/>);*/

    //useRef another 

    /*import { useRef } from "react";

function FocusInput() {
  const inputRef = useRef(null);

  const handleClick = () => {
    inputRef.current.focus();
  };

  return (
    <div>
      <input
        type="text"
        ref={inputRef}
        style={{ backgroundColor: "lightblue" }} // Inline style for background color
      />
      <button
        onClick={handleClick}
        style={{ backgroundColor: "lightgreen" }} // Inline style for background color
      >
        Focus
      </button>
    </div>
  );
}

const r1 = ReactDOM.createRoot(document.getElementById("root"));
r1.render(<FocusInput />);*/
