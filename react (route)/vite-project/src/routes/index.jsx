import EmployeeDetail from "../Main/EmployeeDetail";
import Employees from "../Main/Employees";
import Favorites from "../Main/Favorites";
import Home from "../Main/Home";
import MainRoot from "../Main/MainRoot";
import NotFound from "../Main/NotFound";

export const ROUTES = [
   {
     path: "/",
     element: <MainRoot/>,
     children: [
        {
            path: "" , 
            element: < Home/>
        },
        {
            path: "employees",
            element: <Employees/>
        },
        {
            path: "favorites",
            element: <Favorites/>
        },
        {
            path: "employees/:id",
            element: <EmployeeDetail/>
        },
        {
            path: "*",
            element: <NotFound/>
        },

     ]
   }
];
