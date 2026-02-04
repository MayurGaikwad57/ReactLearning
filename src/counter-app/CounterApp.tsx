import { useState } from "react"

const CounterApp = () => {
  const [count,setCount] = useState(0)
  const [name,setName] = useState("")
  console.log("Rendering ")
  return (
    <div className="counter-app">
        <h1>Counter App</h1>
    {/* Diplay the count on the screen  */}
    
    <p>{name} updated {count} many times </p>
    <div className="screen-buttons">
        <input type="text" onChange={e=>setName(e.target.value)} />
        <button onClick={()=> setCount(prev=>prev+1)}>+</button>
        <button onClick={ ()=> setCount(0)} >reset</button>
        <button onClick={ ()=> setCount(prev=>prev-1)} >-</button>
    </div>
    </div>
  )
}

export default CounterApp