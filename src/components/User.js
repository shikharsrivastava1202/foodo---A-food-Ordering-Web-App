import { useState } from "react";

const User = ({ name }) => {
  const [count, setCount] = useState(0);
  const [count2] = useState(1);

  useEffect(() => {
    // Api Calls
  }, []);

  return (
    <div className="user-card">
      <h1>Count = {count}</h1>
      <h1>Count2 = {count2}</h1>
      <h2>Name: {name}</h2>
      <h3>Location: Lucknow</h3>
      <h4>Contact: @shikhar</h4>
    </div>
  );
};

export default User;
