
// import './App.css';
// import About from './Components/About/About';
// import Content from './Components/Content/Content';


// import CoursesList from './Components/CoursesList/CoursesList';
// import Footer from './Components/Footer/Footer';
// import Hero from './Components/Hero/Hero';
// import Info from './Components/Info/Info';
// import Navbar from './Components/Navbar/Navbar';
// import Plans from './Components/Plans/Plans';
// import Search from './Components/Search/Search';
// import CourseDetail from './Pages/CourseDetail/CourseDetail';


// function App() {
//   return (
//     <div>
//     <Navbar/>
//     <Hero/>
//     <Content/>
//     <CoursesList/>
//    <Plans/>
//    <Search/>
//    <Info/>
//    <About/>
//    <Footer/>
// <CourseDetail/>
//     </div>
//   );
// }

// export default App;
import React from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";

import Navbar from "./Components/Navbar/Navbar";
import Hero from "./Components/Hero/Hero";
import Content from "./Components/Content/Content";
import CoursesList from "./Components/CoursesList/CoursesList";
import Plans from "./Components/Plans/Plans";
import Search from "./Components/Search/Search";
import Info from "./Components/Info/Info";
import About from "./Components/About/About";
import Footer from "./Components/Footer/Footer";
import CourseDetail from "./Pages/CourseDetail/CourseDetail";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
 
        <Route
          path="/"
          element={
            <>
              <Hero />
              <Content />
              <CoursesList />
              <Plans />
              <Search />
              <Info />
              <About />
              <Footer />
            </>
          }
        />
        
     
        <Route path="/course/:id" element={<CourseDetail />} />
      </Routes>
    </>
  );
}

export default App;



