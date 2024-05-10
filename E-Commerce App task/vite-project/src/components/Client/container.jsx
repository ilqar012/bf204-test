import React from "react";

const Container = ({ children }) => {
  return (<div style={{ width: "80%", margin: "30px auto",display: "flex", justifyContent: "center" }}>{children}</div>
  );
};

export default Container;