import Input from "./Input.jsx";
import { isEmail, hasMinLength, isNotEmpty } from "../util/validation.js";
import useInput from "../hooks/useInput.js";

export default function Login() {
  const {
    value: emailValue,
    handleInputChange: handleEmailChange,
    handleInputBlur: handleEmailBlur,
    hasError: emailHasError
  } = useInput("", (value) => isEmail(value) && isNotEmpty(value));

const {
  value: passwordValue,
  handleInputChange: handlePsswordChange,
  handleInputBlur: handlePasswordBlur,
  hasError: passwordHasError
} = useInput('', (value) => hasMinLength(value, 6))

  
  function handleSubmit(event) {
    event.preventDefault();
   
    //make final validation 
    if(emailHasError || passwordHasError) {
      return
    }
    // else use enteredValues
    console.log("Send entered values: " , emailValue, passwordValue)
   
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
          onBlur={handleEmailBlur}
          onChange={handleEmailChange}
          value={emailValue}
          error={emailHasError && "Please enter a valid email address"}
        />

        <Input
          label="Password"
          id="password"
          type="password"
          name="password"
          onChange={handlePsswordChange}
          onBlur={handlePasswordBlur}
          value={passwordValue}
          error={passwordHasError && "Please enter a valid password"}
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
