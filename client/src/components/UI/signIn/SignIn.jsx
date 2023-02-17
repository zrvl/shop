import React from "react";
import ProductInput from "../../../components/UI/productInput/ProductInput";
import signIn from "./signIn.module.scss";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { actionAuth } from "../../../store/actions/asyncActions/users";

const SignIn = (props) => {
  const dispatch = useDispatch();
  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const authorization = () => {
    dispatch(actionAuth(user));
  };

  const actionFunc = () => {
    authorization();
    props.close(false);
  };

  return (
    <>
      <div className={signIn.users}>
        <ProductInput
          className={signIn.users__input}
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
          className={signIn.users__input}
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
        <button className={signIn.users__btn} onClick={actionFunc}>
          Увійти
        </button>
      </div>
    </>
  );
};

export default SignIn;
