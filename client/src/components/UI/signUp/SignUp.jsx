import React from "react";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { useDispatch } from "react-redux";
import ProductInput from "../../../components/UI/productInput/ProductInput";
import signUp from "./signUp.module.scss";
import { actionRegistration } from "../../../store/actions/asyncActions/users";

const SignUp = (props) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const authorization = () => {
    dispatch(actionRegistration(user));
    navigate("/");
  };

  const actionFunc = () => {
    authorization();
    props.close(false);
  };

  return (
    <>
      <div className={signUp.users}>
        <ProductInput
          className={signUp.users__input}
          type="text"
          placeholder="Email"
          value={user.email}
          onChange={(e) =>
            setUser({
              ...user,
              email: e.target.value,
            })
          }
        />
        <ProductInput
          className={signUp.users__input}
          type="password"
          placeholder="Password"
          value={user.password}
          onChange={(e) =>
            setUser({
              ...user,
              password: e.target.value,
            })
          }
        />
        <button className={signUp.users__btn} onClick={actionFunc}>
          Зареєструватись
        </button>
      </div>
    </>
  );
};

export default SignUp;
