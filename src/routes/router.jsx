import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import Home from "../pages/Home";
import SignIn from "../pages/SignIn";
import SignUp from "../pages/SignUp";
import Profile from "../pages/Profile";
import Estate from "../pages/Estate";
import EstateDetails from "../pages/EstateDetails";
import PrivateRoute from "./PrivateRoute";
import Cart from "../pages/Cart";
import Spinner from "../components/Spinner";
import ErrorPage from "../pages/ErrorPage";
import Contact from "../pages/Contact";
import About from "../pages/About";
import MapLeafLet from "../components/MapLeafLet";
import Favourites from "../pages/Favourites";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/signin",
        element: <SignIn></SignIn>,
      },
      {
        path: "/signup",
        element: <SignUp></SignUp>,
      },
      {
        path: "/profile",
        element: (
          <PrivateRoute>
            <Profile></Profile>
          </PrivateRoute>
        ),
      },
      {
        path: "/estate",
        element: <Estate></Estate>,
      },
      {
        path: "/estate/:id",
        element: (
          <PrivateRoute>
            <EstateDetails></EstateDetails>
          </PrivateRoute>
        ),
      },
      {
        path: "/cart",
        element: (
          <PrivateRoute>
            <Cart></Cart>
          </PrivateRoute>
        ),
      },
      {
        path: "/contact",
        element: (
          <PrivateRoute>
            <Contact></Contact>
          </PrivateRoute>
        ),
      },
      {
        path: "/about",
        element: <About></About>,
      },
      {
        path: "/map",
        element: (
          <PrivateRoute>
            <MapLeafLet></MapLeafLet>
          </PrivateRoute>
        ),
      },
      {
        path: "/favourites",
        element: (
          <PrivateRoute>
            <Favourites></Favourites>
          </PrivateRoute>
        ),
      },
    ],
  },
]);
export default router;
