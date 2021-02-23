import logo from "./logo.svg";
import "./App.css";
import { useEffect, useState } from "react";

function App() {

  // variable Delaration for nayok and products with array and object

  const nayoks = ["Rbuel", "Manna", "Ananta", "Bappraj", "monir khan"]
  const products = [
    {name: 'Photoshop' , price: '$200'},
    {name: 'Illustrator' , price: '$250'},
    {name: 'InDesign' , price: '$688.21'},
    {name: 'Acrobat' , price: '$845.14'},
  ]

  // Nayok names function

  const nayokNames = nayoks.map(nayok => nayok)
  console.log(nayokNames)
  return (
    <div className="App">
      <header className="App-header">
        <p>I am a React Person</p>

        {/* counter part */}

        <Counter></Counter>

        {/* Users part from api call */}

        <Users></Users>

        {/* nayok part */}
        
        <ul>
          {
            nayoks.map(nayok => <li>{nayok}</li>)
          }
          {
            products.map(product => <li>{product.name}, price:{product.price}</li>)
          }
        </ul>
        {
          products.map(pd => <Products product = {pd}></Products>)
        } 
        
        <Person name = "Munna" job = "Footballer"></Person>
        <Person name = "Affan" job = "Web Developer"></Person>
        <Person name = "Tamima" job = "Model"></Person>
      </header>
    </div>
  );
}

// Users components with function
function Users() {
  const [users , setUsers] = useState([])
  useEffect(()=>{
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then(data =>setUsers(data))
  }, [])
  return(
    <div>
        <h3>Dynamic {users.length}</h3>
        <ul>
          {
            users.map(user => <li>{user.email}</li>)
          }
        </ul>
    </div>
  )
}

// Counter Funciton


function Counter() {
  const [count , setCount] = useState(10);
  return(
    <div>
      <h1>Count: {count}</h1>
      <button onClick={ ()=> setCount(count -1)}>Decrease</button>
      <button onClick={ ()=> setCount(count +1)}>Increase</button>
    </div>
  )
}


// Buy Products from Adobe funciton

function Products(props) {
  let productStyle = {
    border : '1px solid black',
    borderRadius : '4px',
    backgroundColor: 'green',
    height: '200px',
    width: '200px',
    float: 'left'
  }
  const {name, price} = props.product
  return (
    <div style={productStyle}>
      <h3>{name} </h3>
      <h2>{price}</h2>
      <button>Buy now</button>
    </div>
  )
}

// Name and job title function

function Person(props) {
  return (
  <div style={{border: "1px solid black", margin:"10px" , width:"400px"}}>
    <h3>My Name: {props.name}</h3>
    <p>My profession: {props.job} </p>
  </div>
  )
}

export default App;
