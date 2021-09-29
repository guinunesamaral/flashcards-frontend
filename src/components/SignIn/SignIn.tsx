import { useRef } from "react";
import { useDispatch } from "react-redux";
import * as authTypes from "../../reducers/auth/Types";

const SignIn = () => {
  const dispatch = useDispatch();
  const emailInputRef = useRef<HTMLInputElement | null>(null);
  const passwordInputRef = useRef<HTMLInputElement | null>(null);

  const handleSignInFormSubmit = () => {
    if (emailInputRef.current && passwordInputRef.current) {
      dispatch({
        type: authTypes.SIGN_IN,
        payload: {
          email: emailInputRef.current.value,
          password: passwordInputRef.current.value,
        },
      });
    }
  };

  return (
    <form>
      <div className="form-group">
        <label htmlFor="exampleInputEmail1">Email address</label>
        <input
          type="email"
          className="form-control"
          id="exampleInputEmail1"
          aria-describedby="emailHelp"
          placeholder="Enter email"
          ref={emailInputRef}
        />
        <small id="emailHelp" className="form-text text-muted">
          We'll never share your email with anyone else.
        </small>
      </div>
      <div className="form-group">
        <label htmlFor="exampleInputPassword1">Password</label>
        <input
          type="password"
          className="form-control"
          id="exampleInputPassword1"
          placeholder="Password"
          ref={passwordInputRef}
        />
      </div>
      <div className="form-check">
        <input
          type="checkbox"
          className="form-check-input"
          id="exampleCheck1"
        />
        <label className="form-check-label" htmlFor="exampleCheck1">
          Check me out
        </label>
      </div>
      <button
        type="submit"
        className="btn btn-primary"
        onClick={handleSignInFormSubmit}
      >
        Submit
      </button>
    </form>
  );
};

export default SignIn;
