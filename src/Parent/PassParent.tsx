import { useState } from "react";
import ReceiveChild from "../Child/RecieveChild";

const ParentPass = () => {
  const [name, setName] = useState("Mayur");
  const [age] = useState("NIce CLass");
  const updateName = (userTypedName: any) => {
    setName(userTypedName);
  };
  return (
    <div>
      <h1>Username is : {name}</h1>
      <ReceiveChild userClass={age} onUpdateUserName={updateName} />
    </div>
  );
};

export default ParentPass;
