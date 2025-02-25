
import './App.css';
import Content from './Components/Content/Content';
import CoursesList from './Components/CoursesList/CoursesList';
import Hero from './Components/Hero/Hero';
import Navbar from './Components/Navbar/Navbar';

function App() {
  return (
    <div>
    <Navbar/>
    <Hero/>
    <Content/>
    <CoursesList/>
    </div>
  );
}

export default App;
