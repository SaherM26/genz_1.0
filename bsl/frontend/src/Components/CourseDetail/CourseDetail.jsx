
// import React from 'react';
// import './CourseDetail.css'
// import { useParams } from 'react-router-dom';
// import courses from '../Assets/Courses.json'; 
// // If you use images similarly as in your CoursesList, import them and create a mapping:

// import bioinformatics from '../Assets/bio.jpg';
// import computationalBiology from '../Assets/com.jpg';
// import genomicData from '../Assets/genomic.jpg';
// import dataScience from '../Assets/data.jpg';

// const images = {
//   'bio.jpg': bioinformatics,
//   'comp.jpg': computationalBiology,
//   'genomic.jpg': genomicData,
//   'data.jpg': dataScience,
// };

// const CourseDetail = () => {
//     const { id } = useParams();
//     const course = courses.find(course => course.id === id);
  
//     if (!course) {
//       return <h2>Course not found</h2>;
//     }
  
//     return (
//       <div className="course-detail-page">
//         <h1>{course.name}</h1>
//         {/* Display image if available */}
//         {course.image && (
//           <img
//             src={images[course.image]}
//             alt={course.name}
//             className="course-detail-image"
//           />
//         )}
//         <p>{course.description}</p>
//         {/* Additional details, topics, instructor info, etc. can go here */}
//       </div>
//     );
//   };
  
//   export default CourseDetail;
