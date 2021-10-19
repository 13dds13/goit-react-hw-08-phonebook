import { lazy } from "react";

export const mainRoutes = [
  {
    name: "Home",
    path: "/",
    exact: true,
    type: "public",
    component: lazy(() =>
      import("../pages/HomePage" /* webpackChunkName: "HomePage" */)
    ),
  },

  {
    name: "Contacts",
    path: "/contacts",
    type: "private",
    component: lazy(() =>
      import("../pages/ContactsPage" /* webpackChunkName: "ContactsPage" */)
    ),
  },

  {
    name: "Register",
    path: "/register",
    type: "public",
    restricted: true,
    component: lazy(() =>
      import("../pages/RegisterPage" /* webpackChunkName: "RegisterPage" */)
    ),
  },

  {
    name: "Login",
    path: "/login",
    type: "public",
    restricted: true,
    component: lazy(() =>
      import("../pages/LoginPage" /* webpackChunkName: "LoginPage" */)
    ),
  },
];
