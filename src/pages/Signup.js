import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import FormRow from "../components/FormRow";
import { signupUser } from "../features/user/userSlice";

const initialState = {
  name: "",
  email: "",
  password: "",
  passwordConfirm: "",
};

const Signup = () => {
  const [values, setValues] = useState(initialState);
  const { isLoading, user } = useSelector((store) => store.user);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const LoginHandler = (e) => {
    e.preventDefault();
    const { name, email, password, passwordConfirm } = values;
    if (!name || !email || !password || !passwordConfirm) {
      toast.error("Please fill out all the felids");
      return;
    }
    dispatch(signupUser({ name, email, password, passwordConfirm }));
  };
  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setValues({ ...values, [name]: value });
  };

  useEffect(() => {
    if (user) {
      setTimeout(() => {
        navigate("/account");
      }, 2000);
    }
  }, [user, navigate]);
  return (
    <section className="register">
      <article className="auth-from">
        <h1 className="main-heading">Create new account</h1>
        <form className="form " onSubmit={LoginHandler}>
          <FormRow
            name={"name"}
            type="text"
            value={values.name}
            labelText="Your Name"
            handleChange={handleChange}
          />
          <FormRow
            name={"email"}
            type="email"
            value={values.email}
            labelText="Email Address"
            handleChange={handleChange}
          />
          <FormRow
            name={"password"}
            type="password"
            value={values.password}
            labelText="Password"
            handleChange={handleChange}
          />
          <FormRow
            name={"password"}
            type="password"
            value={values.confirmPassword}
            labelText="Password Confirm"
            handleChange={handleChange}
          />
          <div className="login-group">
            <button type="submit" className="submit-btn " disabled={isLoading}>
              {isLoading ? "Loading...." : "Signup"}
            </button>
          </div>
        </form>
      </article>
    </section>
  );
};

export default Signup;
