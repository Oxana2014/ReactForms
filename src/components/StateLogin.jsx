import { useState } from "react";
import Input from "./Input.jsx";

export default function Login() {
  // const [enteredEmail, setEnteredEmail] = useState("");
  // const [enteredPaasword, setEnteredPassword] = useState("");
  const [enteredValues, setEnteredValues] = useState({
    email: "",
    password: "",
  });
  const [didEdit, setDidEdit] = useState({
    email: false,
    password: false,
  });

  function handleInputChange(identifier, value) {
    setEnteredValues((prevValues) => ({
      ...prevValues,
      [identifier]: value,
    }));
    setDidEdit((prevEdit) => ({ ...prevEdit, [identifier]: false }));
  }
  const emailIsInvalid = didEdit.email && !enteredValues.email.includes("@");
  const passwordIsInvalid =
    didEdit.password && enteredValues.password.trim().length < 6;

  function handleSubmit(event) {
    event.preventDefault();
    console.log(enteredValues);
    // use enteredValues
    setEnteredValues({ email: "", password: "" });
  }
  function handleInputBlur(identifier) {
    setDidEdit((prevEdit) => {
      return { ...prevEdit, [identifier]: true };
    });
  }

  return (
    <form onSubmit={handleSubmit}>
      <h2>Login</h2>

      <div className="control-row">
        <Input
          label="Email"
          id="email"
          type="email"
          name="email"
          onBlur={() => handleInputBlur("email")}
          onChange={(event) => handleInputChange("email", event.target.value)}
          value={enteredValues.email}
          error={emailIsInvalid && "Please enter a valid email address"}
        />

        <Input
          label="Password"
          id="password"
          type="password"
          name="password"
          onChange={(event) =>
            handleInputChange("password", event.target.value)
          }
          onBlur={() => handleInputBlur("password")}
          value={enteredValues.password}
          error={passwordIsInvalid && 'Please enter a valid password'}
        />       
      </div>

      <p className="form-actions">
        <button className="button button-flat">Reset</button>
        <button onClick={handleSubmit} className="button">
          Login
        </button>
      </p>
    </form>
  );
}
