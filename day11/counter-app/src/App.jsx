import React, { useState } from 'react'
import "./App.css";

const App=()=> {
  const [count,setcount]=useState(0);
  return (
    <div class="count-app">
      <h1 count-dsip>{count} </h1>
      <div class="count-body">
        <button className='count-btn'  
         onClick={()=>{setcount(count+1);

        }}> Increment</button>
          <button className='count-btn' onClick={()=>{setcount(count-1);}}>Decrement</button>
          <button className='count-btn' onClick={()=>{setcount(0);}}>Reset</button>

      </div>
      </div>
  )
};

export default App