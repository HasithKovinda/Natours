import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import FormRow from "../components/FormRow";
import { loginUser } from "../features/user/userSlice";

const initialState = {
  name: "",
  email: "",
  password: "",
};

const Login = () => {
  const [values, setValues] = useState(initialState);
  const { isLoading, user } = useSelector((store) => store.user);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const LoginHandler = (e) => {
    e.preventDefault();
    const { email, password } = values;
    if (!email || !password) {
      toast.error("Please fill out all the felids");
      return;
    }
    dispatch(loginUser({ email, password }));
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
    <section className="login">
      <article className="auth-from">
        <h1 className="main-heading">Log into your account</h1>
        <form className="form " onSubmit={LoginHandler}>
          <FormRow
            name={"email"}
            type="email"
            value={values.email}
            labelText="email address"
            handleChange={handleChange}
          />
          <FormRow
            name={"password"}
            type="password"
            value={values.password}
            labelText="password"
            handleChange={handleChange}
          />
          <div className="login-group">
            <button type="submit" className="submit-btn " disabled={isLoading}>
              {isLoading ? "Loading...." : "Login"}
            </button>
          </div>
        </form>
      </article>
    </section>
  );
};

export default Login;
