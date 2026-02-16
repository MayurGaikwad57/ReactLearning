import { useState } from "react";

const ReceiveChild = (props) => {
  const [userName, updateName] = useState(" ");

  const getName = (name: any) => {
    updateName(name);
  };

  return (
    <div>
      <input type="text" onChange={(e: any) => getName(e.target.value)} />
      <button onClick={() => props.onUpdateUserName(userName)}>
        Update Name
      </button>
      <p>{props.userClass}</p>
    </div>
  );
};

export default ReceiveChild;
