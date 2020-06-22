import React, { useState } from 'react'
import Message from './Message'
import './App.css'
import Counter from './counter'

 function App(){
    let [count, setCount] = useState(1)
    let [isday , setDay] = useState(true)

    return(
        <div className={`${isday? 'day':'night'}`}> 
           <Message day={isday? 'Good Morning':'Good Night'} /> 
           <Counter counter={count}/>
        
        <button onClick={
            ()=>setCount(++count)
            } >
            Update Counter
        </button>
        <button onClick={()=>{setDay(!isday)}}>Change Day</button>

             
        </div>
    )
}
 
export default App