import {createBrowserRouter, RouterProvider} from "react-router-dom";
import Home from "./routes/home.tsx";
import Layout from "./conponets/layout.tsx";
import Profile from "./routes/profile.tsx";
import Login from "./routes/login.tsx";
import CreateAccount from "./routes/create-account.tsx";
import {createGlobalStyle} from "styled-components";
import reset from "styled-reset";
import {useEffect, useState} from "react";
import LoadingScreen from "./conponets/loading-screen.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout/>,
    children: [
      {
        path: "",
        element: <Home/>
      },
      {
        path: "profile",
        element: <Profile/>
      }
    ]
  },
  {
    path: "/login",
    element: <Login/>,
  },
  {
    path: "create-account",
    element: <CreateAccount/>
  }
]);

const GlobalStyles = createGlobalStyle`
  ${reset};
  * {
    box-sizing: border-box;
  }
  body {
    background-color: black;
    color: white;
    font-family: system-ui, -apple-system, BlinkMacStyleFont, 'Sagoe UI',
    "Roboto Thin", Oxygen, Ubuntou, Cantarell, 'Open Sans', 'Helvetica Neue',
    sans-serif;
  }
`

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const init = async () => {
    setIsLoading(false);
  };
  useEffect(() => {
    init();
  }, [])
  return (
      <>
        <GlobalStyles />
        {isLoading ? <LoadingScreen /> : <RouterProvider router={router} />}
      </>
  )
}

export default App
