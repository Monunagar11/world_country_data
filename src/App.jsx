import {createBrowserRouter, RouterProvider} from "react-router-dom"

import "./App.css"

import { Home } from "./Pages/Home"
import { About } from "./Pages/About"
import { Country } from "./Pages/Country"
import { Contact } from "./Pages/Contact"
import { ErrorPage } from "./Pages/ErrorPage"
import { AppLayout } from "./Component/Layout/AppLayout"
import CountryDetails from "./Component/Ui/CountryDetails"

const router = createBrowserRouter([
  {
    path:"/",
    element: <AppLayout />,
    errorElement: <ErrorPage />,
    children:[
      {
        path:"/",
        element: <Home />
      },
      {
        path:"About",
        element: <About />
      },
      {
        path:"Country",
        element: <Country />
      },
      {
        path:"Country/:id",
        element: <CountryDetails />
      },
      {
        path:"Contact",
        element: <Contact />
      }
    ]
  },
 

])

const App = ()=>{
  return(
    <RouterProvider router={router}></RouterProvider>
  )
}

export default App;
