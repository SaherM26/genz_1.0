// import React from "react";
// import { Routes, Route } from "react-router-dom";
// import "./App.css";

// import Navbar from "./Components/Navbar/Navbar";
// import Hero from "./Components/Hero/Hero";
// import Content from "./Components/Content/Content";
// import CoursesList from "./Components/CoursesList/CoursesList";
// import Plans from "./Components/Plans/Plans";
// import Search from "./Components/Search/Search";
// import Info from "./Components/Info/Info";
// import About from "./Components/About/About";
// import Footer from "./Components/Footer/Footer";
// import CourseDetail from "./Pages/CourseDetail/CourseDetail";

// function App() {
//   return (
//     <>
//       <Navbar />
//       <Routes>
//         <Route
//           path="/"
//           element={
//             <>
//               <Hero />
//               <Content />
//               <CoursesList />
//               <Plans />
//               <Search />
//               <Info />
//               <About />
//             </>
//           }
//         />
//         <Route path="/course/:id" element={<CourseDetail />} />
//       </Routes>
//       <Footer />
//     </>
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
import Read from "./Pages/Read/Read";
import Trial from "./Pages/Trial/Trial";
import ScrollToTop from "./Components/Scrolltotop/Scrolltotop";
import SignUp from './Pages/SignUp/SignUpPage';
import LoginPage from './Pages/LogIn/LoginPage';

function App() {
  return (
    <>
      <Navbar />
      <ScrollToTop />
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
            </>
          }
        />
        <Route path="/read" element={<Read />} />
        <Route path="/trial" element={<Trial />} />
        <Route path="/course/:id" element={<CourseDetail />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignUp />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
