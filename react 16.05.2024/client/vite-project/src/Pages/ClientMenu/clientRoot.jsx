import React from "react";
import { Outlet } from "react-router";
import ClientHeader from "../../Components/Client";

const ClientRoot = () => {
  return (
    <>
      <ClientHeader />
      <Outlet />
    </>
  );
};

export default ClientRoot;
