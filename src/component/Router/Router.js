// import { createBrowserRouter } from "react-router-dom";
// import Pdf from "../Pdf/Pdf";


// // const router = createBrowserRouter(
// //     {
// //       path: "/resume1",
// //       element: <Pdf></Pdf>,
// //     })

// //     export default router;
// const Route = ({ path, children }) => {
//     return window.location.pathname === path ? children : null
//   }
  
//   export default Route


import Features from "../Features/Features"
import Home from "../Hero/Home"
import Portfolio from "../Portfolio/Portfolio"
import Resume from "../Resume/Resume"
import Testimonial from "../Testimonial/Testimonial"

import Contact from "../Contact/Contact"

import Pdf from '../Pdf/Pdf'




import Main from "../Layout/Main";

import Notfound from "../Notfound/Notfound";
import Homes from "../Homes/Homes";

import Blog from "../Blog/Blog";
import About from "../About/About"


const { createBrowserRouter } = require("react-router-dom");

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
     {
        path: "/",
        element: <Homes></Homes>,
      },
      {
        path:'/home',
        element:<Homes></Homes>
      },
            
      {
        path:'/features',
        element:<Features></Features>
      },
      {
        path:'/portfolio',
        element:<Portfolio></Portfolio>
      },
      {
        path:'/resume',
        element:<Resume></Resume>
      },
      {
        path:'/contact',
        element:<Contact></Contact>
      },
      {
        path:'/pdf',
        element:<Pdf></Pdf>
      },
      {
        path:'/testimonial',
        element:<Testimonial></Testimonial>
      },
      {
        path:"/blog",
        element:<Blog></Blog>
      },
      {
        path:'/about',
        element:<About></About>
      },
      {
        path:"*",
        element:<Notfound></Notfound>
      }

    ],
  },
]);

export default router;
