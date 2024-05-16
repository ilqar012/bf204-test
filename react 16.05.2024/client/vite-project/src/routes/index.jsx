import ClientRoot from "../Pages/ClientMenu/clientRoot";
import ClientAddMenu from "../Pages/ClientMenu/AddMenu";
import Home from "../Pages/ClientMenu/Home";

export const ROUTES = [
  // clientRoot
  {
    path: "/",
    element: <ClientRoot />,
    children: [
      {
        path: "",
        element: <Home />,
      },
      {
        path: "add-menu",
        element: <ClientAddMenu />,
      },
    ],
  },
];
