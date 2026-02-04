import { useEffect, useState } from "react"

const PracticeExample = () => {
// const [settings, setSettings] = useState({
//   darkMode: false,
//   language: "en"
// })

const [count, setCount] = useState(0);

useEffect(()=>{
console.log("count changed",count)
},[count])

const addCount = () => {
    setCount(prev=>prev+1);
}
 return (
 <button onClick={addCount}>increment</button>
)
}

export default PracticeExample