

import { useNavigate } from "react-router-dom";
import { useState } from "react";

const Sample = () => {
  
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  function authenticateUser(userName, password) {}
  const navigate = useNavigate();
  const handleClick = () => {
    authenticateUser(userName, password);
    navigate.push(`/profile/${userName}`);
  };

  return (
    <div>
      <input
        type="text"
        value={userName}
        onChange={(e) => {
                           setUserName(e.target.value);
                           }}
      />
      <input
        type="text"
        value={password}
        onChange={(e) => {
                             setPassword(e.target.value);
                            }}
      />
      <button type="submit" onClick={()=>handleClick()}>
         Log In
      </button>
    </div>
  );
};
export default Sample;
