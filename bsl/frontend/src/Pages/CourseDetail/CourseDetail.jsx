
import React from "react";
import { useParams } from "react-router-dom";
import { Link } from 'react-router-dom';
import courses from "../../Components/Assets/Courses.json"; 
import "./CourseDetail.css";

import bioinformatics from "../../Components/Assets/bio.jpg";
import computationalBiology from "../../Components/Assets/com.jpg";
import genomicData from "../../Components/Assets/genomic.jpg";
import dataScience from "../../Components/Assets/data.jpg";

const images = {
  "bio.jpg": bioinformatics,
  "com.jpg": computationalBiology,
  "genomic.jpg": genomicData,
  "data.jpg": dataScience,
};

const CourseDetail = () => {
  const { id } = useParams();
  const course = courses.find((course) => course.id.toString() === id);

  if (!course) {
    return <h2 className="error-message">Course not found!</h2>;
  }

  return (
    <>
      <div className="course-detail-container">
        <div className="course-content">
          <h1 className="course-title">{course.name}</h1>
          <p className="course-description">
            The Bioinformatics course explores computational techniques for analyzing biological data, focusing on genomics, proteomics, and data interpretation.
          </p>
          <div className="course-tags">
            <div className="tag"> Bestseller</div>
            <div className="tag"> Trending</div>
            <div className="tag"> English</div>
          </div>
          <div className="course-info-box">
            <div className="info-item"> 10 Modules</div>
            <div className="info-item"> Beginner Level</div>
            <div className="info-item">⭐⭐⭐⭐</div>
            <div className="info-item"> 100+ Learners</div>
          </div>
        </div>
        <div className="course-image-box">
          <div className="course-image-container">
            <img src={images[course.image]} alt={course.name} className="course-img" />
            <p className="price">
              <span className="old-price">₹2000</span> 
              <span className="new-price">₹1600</span> 
              <span className="discount">80% Off</span>
            </p>
            <button className="add-to-cart-btn">🛒 Add to Cart</button>
          </div>
        </div>
      </div>
     
      <div className="topics-section">
        <h2 className="topics-heading">Topics</h2>
        <div className="topics-container">
          <div className="topic-box">Proteomics</div>
          <div className="topic-box">Metagenomics</div>
          <div className="topic-box">Phylogenetics</div>
          <div className="topic-box">Transcriptomics</div>
        </div>
      </div>
      <div className="course-includes-section">
  <h2 className="course-includes-heading">This Course Includes:</h2>
  <div className="course-includes-list">
    <div className="course-includes-left">
      <li>28 hours on-demand video</li>
      <li>10 articles</li>
      <li>76 downloadable resources</li>
      <li>Access on mobile and TV</li>
    </div>
    <div className="course-includes-right">
      <li>Closed captions</li>
      <li>Audio description in existing audio</li>
      <li>Certificate of completion</li>
    </div>
  </div>
</div>
<div className="content">
    <h2> Course Content</h2>
    <div className="course-content-box">
          <div className="module-line">
            <div className="module-name">Module 1: Introduction to Bioinformatics</div>
            <div className="module-duration">5 Lectures - 1hr 30min</div>
          </div>
          <div className="module-line">
            <div className="module-name">Module 2: Sequence Analysis</div>
            <div className="module-duration">5 Lectures - 1hr 30min</div>
          </div>
          <div className="module-line">
            <div className="module-name">Module 3: Genome Assembly and Annotation</div>
            <div className="module-duration">5 Lectures - 1hr 30min</div>
          </div>
          <div className="module-line">
            <div className="module-name">Module 4: Biological Databases and Tools</div>
            <div className="module-duration">5 Lectures - 1hr 30min</div>
          </div>
          <div className="module-line">
            <div className="module-name">Module 5: Phylogenetics and Evolutionary Analysis</div>
            <div className="module-duration">5 Lectures - 1hr 30min</div>
          </div>
          <div className="module-line">
            <div className="module-name">Module 6: Structural Bioinformatics</div>
            <div className="module-duration">5 Lectures - 1hr 30min</div>
          </div>
          <div className="module-line">
            <div className="module-name">Module 7: Proteomics</div>
            <div className="module-duration">5 Lectures - 1hr 30min</div>
          </div>
          <div className="module-line">
            <div className="module-name">Module 8: Transcriptomics</div>
            <div className="module-duration">5 Lectures - 1hr 30min</div>
          </div>
        </div>
  </div>
  <h2 className="instructor-heading">Instructor</h2>
  <div className="instructor-section">
  <div className="instructor-container">
  <img
      src={require("../../Components/Assets/instructor.jpg")} 
      alt="Instructor"
      className="instructor-img"
    />
    <div className="instructor-info">
      <h3 className="instructor-name">Mr. Aman raza </h3>
      <ul className="instructor-details">
        <li>📘 <strong>2 courses</strong></li>
        <li>⭐ <strong>4.5 rating</strong></li>
        <li>💬 <strong>100+ reviews</strong></li>
        <li>🎓 <strong>500+ students</strong></li>
      </ul>
      <p className="instructor-bio">
      Mr. Aman is an outstanding teacher with vast experience in bioinformatics. His ability to simplify complex concepts and make them relatable is unmatched. He is highly dedicated, always ready to offer personalized guidance and support. His passion for teaching and deep knowledge in the field inspire students to excel. With his patient approach, he fosters a positive learning environment where students feel confident and encouraged. A truly exceptional educator who goes above and beyond for his students.
      </p>
    </div>
  </div>
</div>

<h2 className="reviews-heading">⭐ 4.8 Course Rating</h2>
<div className="reviews-section">
  <div className="review-container">
    <div className="review-card left-review">
      <h3 className="reviewer-name">Neha Sharma</h3>
      <p className="review-text">This course was very informative and well-structured. The instructor explained concepts clearly, making it easy to understand. Highly recommended!</p>
      <p className="review-rating">⭐⭐⭐⭐⭐</p>
      <div className="review-feedback">
        <span>Helpful?</span>
        <button className="thumb-up active">👍</button>
        <button className="thumb-down">👎</button>
      </div>
    </div>
    <div className="divider"></div>
    <div className="review-card right-review">
      <h3 className="reviewer-name">Rahul Verma</h3>
      <p className="review-text">Excellent course! It provided a deep insight into bioinformatics and its applications. The modules were engaging and practical.</p>
      <p className="review-rating">⭐⭐⭐⭐</p>
      <div className="review-feedback">
        <span>Helpful?</span>
        <button className="thumb-up">👍</button>
        <button className="thumb-down active">👎</button>
      </div>
    </div>
  </div>
</div>
<h2 className="related-courses-heading">Related Courses</h2>
<div className="courses-list">
  <div className="courses-container">
    {courses.slice(0, 4).map(course => (
      <div key={course.id} className="course-box">
        <img src={images[course.image]} alt={course.name} className="course-image" />
        <h3>{course.name}</h3>
        <p>{course.description}</p>
        <Link to={`/course/${course.id}`} className="course-link">Learn More</Link>
      </div>
    ))}
  </div>
</div>
    </>
  );
};

export default CourseDetail;

