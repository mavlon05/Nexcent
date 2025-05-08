import "./i18n/i18n";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Layout from "./Components/Layout";
import Home from "./Pages/Home";
import LanguageSwitcher from "./Components/LanguageSwitcher";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { path: "/", element: <Home /> },
    ],
  },
]);

function App() {
  return (
    <>
      <LanguageSwitcher /> 
      <RouterProvider router={router} />
    </>
  );
}

export default App;
