import { useEffect, useState } from "react";

const IntervalSet = () => {
  const [count, setCount] = useState(5);
  useEffect(() => {
    if (count % 2 === 0) {
      document.title = `Title is Even`;
    } else {
      document.title = `Title is odd`;
    }
  }, [count]);
  return (
    <h1 onClick={() => setCount((prev) => prev + 1)}>
      Document Title Count :{count}
    </h1>
  );
};

export default IntervalSet;
