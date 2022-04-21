import { useState } from "react";
import { addUser, login } from "../../utils";

export const UsernameForm = ({ setUser }) => {
  const [username, setUsername] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [logBool, setLogBool] = useState(false);

  const submitHandler = (e) => {
    e.preventDefault();
    if (!logBool) {
      addUser(username, email, password, setUser);
    } else {
      login(username, password, setUser);
    }
  };
  return (
    <div>
      <form onSubmit={submitHandler}>
        <input
          onChange={(e) => setUsername(e.target.value)}
          placeholder="Username"
        />
        {!logBool && (
          <input
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email"
          />
        )}
        <input
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
          type="password"
        />
        <button type="submit">Submit</button>
      </form>
      <button onClick={() => setLogBool(!logBool)}>Sign-up/Login </button>
    </div>
  );
};
