import { useState } from "react"
import ReciveChild from "../Child/RecieveChild"

 const PassParent = () => {
   const [userName,setUserName] = useState("Mayur")
  const updateUserName = (name:any) => {
       setUserName(name)
   }
   const resetUser = (name:any) => {
    setUserName(name)
   }
   return (
   <div>
   <ReciveChild
    onUpdateName = {updateUserName}
    onResetUser = {resetUser}
   />
   <h1>Name is : {userName}</h1>
   </div>
   )
}

export default PassParent