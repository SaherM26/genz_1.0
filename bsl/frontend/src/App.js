
import './App.css';
import Content from './Components/Content/Content';

import CoursesList from './Components/CoursesList/CoursesList';
import Hero from './Components/Hero/Hero';
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
    </div>
  );
}

export default App;


