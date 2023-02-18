import { createBrowserRouter } from "react-router-dom";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import Terms from "./pages/Terms";
import Privacy from "./pages/Privacy";
import Jobs from "./pages/Jobs";
import App from "./App";
import JobApplication from "./pages/JobApplication";
import SubmitApplication from "./pages/SubmitApplication";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/signin",
    element: <SignIn />,
  },
  {
    path: "/signup",
    element: <SignUp />,
  },
  {
    path: "/terms",
    element: <Terms />,
  },
  {
    path: "/privacy",
    element: <Privacy />,
  },
  {
    path: "/jobs",
    element: <Jobs />,
  },
  {
    path: "/apply",
    element: <SubmitApplication />,
  },
  {
    path: "/submit",
    element: <SubmitApplication />,
  },
]);


export default router;