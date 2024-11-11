import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { RouterProvider, createBrowserRouter } from "react-router-dom";

import App from "./App.jsx";
import Login from "./Pages/Login.jsx";
import Signup from "./Pages/Signup.jsx";
import HomePage from "./Pages/HomePage.jsx";
import Videos from "./Pages/Videos.jsx";
import Notifications from "./Pages/Notifications.jsx";
import Profile from "./Pages/Profile.jsx";
import CreatePostPage from "./Pages/CreatePostPage.jsx";
import EditProfile from "./Pages/EditProfile.jsx";
import CreateStory from "./Pages/CreateStory.jsx";
import Settings from "./Pages/Settings.jsx";



import './Styles.css'
import NotFoundPage from "./Components/NotFoundPage.jsx";
import UpdatePost from "./Components/UpdatePost.jsx";
import Messenger from "./Components/Messenger/Messenger.jsx";
import Users from "./Pages/Users.jsx";

const router = createBrowserRouter([
  {
    path:"*",
    element:<NotFoundPage/>,
  },
  {
    path: "/app",
    element: <App />,
  },
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/signup",
    element: <Signup />,
  },
  {
    path: "/createpost",
    element: <CreatePostPage />,
  },
  {
    path:"/updatepost",
    element: <UpdatePost />,
  },
  {
    path: "/createstory",
    element: <CreateStory />,
  },

  {
    path: "/users",
    element: <Users />,
  },
  {
    path: "/messenger",
    element: <Messenger />,
  },
  {
    path: "/videos",
    element: <Videos />,
  },
  {
    path: "/notification",
    element: <Notifications />,
  },

  {
    path: "/profile",
    element: <Profile />,
  },
  {
    path:"/editprofile",
    element:<EditProfile />,
  },
  {
    path:"/settings",
    element:<Settings />,
  },
 
 
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <>
      <ToastContainer
        autoClose={1000}
        closeButton={false}
        hideProgressBar={true}
        toastClassName="custom-toast"
        rtl={false}
      />
      <RouterProvider router={router} />
    </>
  </StrictMode>
);
