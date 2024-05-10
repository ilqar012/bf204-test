import AdminRoot from "../pages/Admin";
import AdminAddCategory from "../pages/Admin/addCategory";
import AdminAddProduct from "../pages/Admin/addProduct";
import Categories from "../pages/Admin/categories";
import Dashboard from "../pages/Admin/dashboard";
import AdminLogin from "../pages/Admin/login";
import AdminMessages from "../pages/Admin/messages";
import AdminOrders from "../pages/Admin/orders";
import AdminProducts from "../pages/Admin/products";
import AdminUsers from "../pages/Admin/users";
import ClientRoot from "../pages/Client";
import ClientBasket from "../pages/Client/basket/indexz";
import ContactUs from "../pages/Client/contactUs";
import Home from "../pages/Client/home";
import ClientLogin from "../pages/Client/login";
import ClientProductDetail from "../pages/Client/productDetail";
import ClientProducts from "../pages/Client/products";
import Register from "../pages/Client/register";
import ClientUser from "../pages/Client/user";

export const ROUTES = [
  // admin root
  {
    path: "/admin",
    element: <AdminRoot />,
    children: [
      {
        path: "dashboard",
        element: <Dashboard />,
      },
      {
        path: "add-category",
        element: <AdminAddCategory />,
      },
      {
        path: "add-product",
        element: <AdminAddProduct />,
      },
      {
        path: "categories",
        element: <Categories />,
      },
      {
        path: "admin-login",
        element: <AdminLogin />,
      },
      {
        path: "messages",
        element: <AdminMessages />,
      },
      {
        path: "orders",
        element: <AdminOrders />,
      },
      {
        path: "admin-products",
        element: <AdminProducts />,
      },
      {
        path: "users",
        element: <AdminUsers />,
      },
    ],
  },

  //client root
  {
    path: "/",
    element: <ClientRoot/>,
    children: [
        {
            path: "",
            element: <Home/>
        },
        {
            path: "/basket",
            element: <ClientBasket/>
        },
        {
            path: "/contact-us",
            element: <ContactUs/>
        },
        {
            path: "/client-login",
            element: <ClientLogin/>
        },
        {
            path: "/client-products/:id",
            element: <ClientProductDetail/>
        },
        {
            path: "/client-products",
            element: <ClientProducts/>
        },
        {
            path: "/register",
            element: <Register/>
        },
        {
            path: "/client-user",
            element: <ClientUser/>
        },


    ]
  },
];
