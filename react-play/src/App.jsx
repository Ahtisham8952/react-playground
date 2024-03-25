import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(5)
  
const handleClick=()=>{
  setCount(count+1)

}
const Addclick=()=>{
  setCount(count-1)
  if(count<=0){
    alert("No more items left!")

  }

}

  return (
    <>
    
     
    <div>
     <h1>Count:{count}</h1>
     <button onClick={handleClick}> Update Count</button>
     <button onClick={Addclick}> Update Count</button>
    </div>
    </>
  )
}

export default App
