

import Inspiration from "./pages/InspirationPage";
import QuotesPage from "./pages/QuotesPage";
import AboutPage from "./pages/AboutPage";
import {  Route, createBrowserRouter, createRoutesFromElements, RouterProvider } from "react-router-dom";
import  HomePage  from "./pages/HomePage";

import MainLayout from "./layout/MainLayout";
function App() {

    const router = createBrowserRouter(
      createRoutesFromElements(
        <Route path="/" element={<MainLayout/>}>
                <Route index element={<HomePage/>}/>
                <Route path="/quotes" element={<QuotesPage/>}/>
                <Route path="/inspiration" element={<Inspiration/>}/>
                <Route path="/about" element={<AboutPage/>}/>

        </Route>
      )
    );



  return ( 
   
      
      <RouterProvider router={router}/>
 
  )
}

export default App
