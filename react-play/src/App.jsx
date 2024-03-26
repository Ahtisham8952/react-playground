import { useState, useCallback, useEffect, useRef } from 'react'
import './App.css';
import './index.css';



function App() {

const [password, setPassword] = useState('')
const [length,setLength]=useState(0)
const [numAllow,setNumAllow]=useState(false)
const [charAllow,setCharAllow]=useState(false)
useEffect(()=>{
  
},[numAllow,charAllow,length])

  
  return (
    
    <div  className="w=24 shadow-md rounded-lg px-4 py-3 my-8 bg-gray-800 text-orange-500">
      <h1 className='text-white text-center my-3'>Password generator</h1>
    <div className="flex shadow rounded-lg overflow-hidden mb-4">
        <input
            type="text"
          
            className="outline-none w-full py-1 px-3"
            placeholder="Password"
            readOnly
         
        />
        <button
       
        className='outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0'
        >copy</button>
        
    </div>
    <div className='flex text-sm gap-x-2'>
      <div className='flex items-center gap-x-1'>
        <input 
        type="range"
        min={6}
        max={100}

         className='cursor-pointer'
        
          />
          <label>Length: {length}</label>
      </div>
      <div className="flex items-center gap-x-1">
      <input
          type="checkbox"
          
          id="numberInput"
         
      />
      <label htmlFor="numberInput">Numbers</label>
      </div>
      <div className="flex items-center gap-x-1">
          <input
              type="checkbox"
             
              id="characterInput"
              
          />
          <label htmlFor="characterInput">Characters</label>
      </div>
    </div>
</div>
    
  )
}

export default App