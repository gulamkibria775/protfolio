// import React from "react"
// import Header from "./component/Head/Header"
// import Features from "./component/Features/Features"
// import Home from "./component/Hero/Home"
// import Portfolio from "./component/Portfolio/Portfolio"
// import Resume from "./component/Resume/Resume"
// import Testimonial from "./component/Testimonial/Testimonial"
// import Blog from "./component/Blog/Blog"
// import Contact from "./component/Contact/Contact"
// import Footer from "./component/Footer"
// import "./App.css"
// import Pdf from './component/Pdf/Pdf'
// // import { RouterProvider } from 'react-router-dom';
// import Route from './component/Router/Router';

// const App = () => {
//   return (
//     <>
//       <Header/>
//       <Home/>
//       <Features/>
//       <Portfolio/>
//       <Resume/>
//       <Testimonial/>
//       <Blog/>
//       <Contact />
//       <Footer />
//       <Route path="/resume1">
//         <Pdf/>
//       </Route>
//       {/* <Route path="/">
//         <Home/>
//       </Route>
//       <Route path="/home">
//         <Home/>
//       </Route>
//       <Route path="/features">
//       <Features />
//       </Route> */}
      
//       {/* <Pdf></Pdf> */}
//       {/* <RouterProvider router={router}></RouterProvider> */}
      
//     </>
//   )
// }

// export default App



import { RouterProvider } from 'react-router-dom';
import './App.css';
import router from './component/Router/Router';

function App() {

  return (
    <div>
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;

