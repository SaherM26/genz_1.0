import React from 'react';
import { Link } from 'react-router-dom';
import courses from '../Assets/Courses.json';
import './CoursesList.css';

import bioinformatics from '../Assets/bio.jpg';
import computationalBiology from '../Assets/com.jpg';
import genomicData from '../Assets/genomic.jpg';
import dataScience from '../Assets/data.jpg';

const images = {
  'bio.jpg': bioinformatics,
  'com.jpg': computationalBiology,
  'genomic.jpg': genomicData,
  'data.jpg': dataScience,
};

const CoursesList = () => {
  return (
    <div id="CoursesList" className="courses-wrapper">
      <h1 className="section-title">Courses</h1>
      <div className="courses-list">
        <div className="courses-container">
          {courses.map(course => (
            <div key={course.id} className="course-box">
              <img
                src={images[course.image]}
                alt={course.name}
                className="course-image"
              />
              <h3>{course.name}</h3>
              <p>{course.description}</p>
              <Link to={`/course/${course.id}`} className="course-link">
                Learn More
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CoursesList;
