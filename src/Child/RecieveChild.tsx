import { useState } from "react"

const ReciveChild = (props) => {
    const [value,setValue] = useState("")

    const updateName = (name) => {
        setValue(name)
    }
    
return (
    <div>
        <input type="text" onChange={(e)=>updateName(e.target.value)} />
      <button onClick={()=>props.onUpdateName(value)} >update</button>
      <button onClick={()=>props.onResetUser("")} >Reset</button>
    </div>
)
}

export default ReciveChild