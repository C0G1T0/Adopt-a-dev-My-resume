import React from "react";
import { Link } from "react-router-dom";
export default () => {
  return (
    <div className="container mt-3">
      <Link to="/">
        <img
          className="col-md-12 col-sm-12 img-fluid"
          src="/uploads/adopt-a-dev"
          alt="Adopt a dev logo"
        />
      </Link>
    </div>
  );
};
