import React from "react";
import { useNavigate } from "react-router-dom";

const Page404 = () => {
  const navigate = useNavigate();

  const navigation = () => {
    navigate("/");
  };

  return (
    <div className="page">
      <div className="page__error">
        <div className="page__error-info">
          <div className="page__error-num">404</div>
          <div className="page__error-text">
            <p>
              SORRY!
              <br /> The Page You're Looking For Was Not Found Page
            </p>
            <button className="page__error-btn" onClick={navigation}>
              Go Back
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page404;
