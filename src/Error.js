import React from "react";

function Error({ error }) {
  return (
    <div>
      <h1 style={{ textAlign: "center" }}>{error.message}</h1>
    </div>
  );
}

export default Error;
