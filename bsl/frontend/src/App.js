
import './App.css';
import About from './Components/About/About';
import Content from './Components/Content/Content';

import CoursesList from './Components/CoursesList/CoursesList';
import Footer from './Components/Footer/Footer';
import Hero from './Components/Hero/Hero';
import Info from './Components/Info/Info';
import Navbar from './Components/Navbar/Navbar';
import Plans from './Components/Plans/Plans';
import Search from './Components/Search/Search';

function App() {
  return (
    <div>
    <Navbar/>
    <Hero/>
    <Content/>
    <CoursesList/>
   <Plans/>
   <Search/>
   <Info/>
   <About/>
   <Footer/>
    </div>
  );
}

export default App;


