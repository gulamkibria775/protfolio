import { createBrowserRouter } from "react-router-dom";
import Pdf from "../Pdf/Pdf";


// const router = createBrowserRouter(
//     {
//       path: "/resume1",
//       element: <Pdf></Pdf>,
//     })

//     export default router;
const Route = ({ path, children }) => {
    return window.location.pathname === path ? children : null
  }
  
  export default Route