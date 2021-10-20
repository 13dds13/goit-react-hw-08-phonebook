import { lazy } from "react";

export const mainRoutes = [
  {
    name: "Home",
    path: "/",
    exact: true,
    type: "public",
    restricted: false,
    component: lazy(() =>
      import("../pages/HomePage" /* webpackChunkName: "HomePage" */)
    ),
  },

  {
    name: "Log in",
    path: "/login",
    type: "public",
    restricted: true,
    component: lazy(() =>
      import("../pages/LoginPage" /* webpackChunkName: "LoginPage" */)
    ),
  },

  {
    name: "Sign up",
    path: "/register",
    type: "public",
    restricted: true,
    component: lazy(() =>
      import("../pages/SignupPage" /* webpackChunkName: "RegisterPage" */)
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
];
