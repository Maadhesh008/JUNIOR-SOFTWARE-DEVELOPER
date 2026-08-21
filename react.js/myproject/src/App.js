import React from 'react'

function App() {
  var mark1=40;
  var mark2=30;
  var a=1023;
  var b=234;
  var d=75;
  var res="fail"

  var c=90;
  return (
    <div>
      
      <h1>1.SIMPLE IF STATEMENT RESULT:</h1>
      <h2>mark:{mark1}</h2>
      <h2>{mark1>34 && "PASS"}</h2>
      <h2>{mark1<=34 && "FAIL"}</h2>
      <h1>{"============================================================"}</h1>
     
     <h1>2. IF  ELSE STATEMENT RESULT:</h1>
     <h2>mark:{mark2}</h2>
     <h2>{(mark2>34 && "PASS") ||("FAIL")}</h2>
     <h1>{"============================================================"}</h1>
    
     <h1>3.GREATEST AMONG TWO NUMBERS</h1>
     <h2>MARK1:{a}   MARK2:{b}</h2>
     <h2>{(a>b && a)|| b } IS GREATEST NUMBER</h2>
     <h1>{"============================================================"}</h1>

     <h1>4.FIND THE NUMBER IS EVEN OR ODD</h1>
     <h2>NUMER:{c}</h2>
     <h2>{c} IS {( c%2===0 && "EVEN") || "ODD"} NUMBER</h2>
     <h1>{"============================================================"}</h1>

    <h1>5.IF ELSE IF STATEMENT OR ELSE IF LADDER</h1>
    <h2>NUMBER:{c}</h2>
    <h2>{c} {(c>0 && "is positive") ||(c<0 && "is negative") || "is zero"}</h2>
    <h1>{"============================================================"}</h1>
    
    <h1>5.NESTED IF</h1>
    <h2>MARK:{d}</h2>
    <h2>RESULT:{res}</h2> 
    <h2>{d}  is  { (res==="pass" && ((d>=85 && "OUTSTANDING") || 
    (d>=75 && "EXCELLENT") || 
    (d>=65 && "VERY GOOD") || 
    (d>=55 && "GOOD") || 
    "FAIR"))|| "NO GRADE" }</h2>  
    <h1>{"============================================================"}</h1> 

    
    
    
    </div>
  )
}

export default App




/* import './App.css'
import React from 'react'
import myimg from './images/maruthachalan.jpg'

function App() {
  return (
    <div align="center">
      <img src={myimg} width='50%' alt="not found"></img>
      
    </div>
  )
}

export default App










/* REACT EXPRESSION */
/*var App=()=>{
  var a=10
  var b=20
  var c=30
  return(
    <>
    <h1>ADDITION OF TWO NUMBERS</h1>
    <h2>A VALUE:{a}</h2>
    <h2>B VALUE:{b}</h2>
    <h2>C VALUE:{c}</h2>
    <h2>TOTAL VALUE:{a+b+c}</h2>
    </>
  )
}
export default App;



/*
import React from "react";

class App extends React.Component
{
  render()
  {
    return(
      <>
      <h1>WELCOME TO CLASS COMPONENTS</h1>
      <h2>WELCOME TO CLASS COMPONENTS</h2>
      <h3>WELCOME TO CLASS COMPONENTS</h3>
      
      
      </>
    )
  }
}
export default App;



/*
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;

*/
