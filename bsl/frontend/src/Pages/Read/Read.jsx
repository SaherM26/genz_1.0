import React from 'react';
import './Read.css';
import pic from '../../Components/Assets/pic.jpg';

const Read = () => {
  return (
    <div className="body">
      <div className="info">
        <h1>
          <span className="in-text">In </span>
          <span className="year-text">2025</span>
        </h1>
        <p className="information">
        Key fields of innovation include gene editing, personalized medicine, and regenerative therapies. Advances in CRISPR technology, AI-driven drug discovery, and organ regeneration are transforming healthcare, enabling customized treatments, improving disease prevention, and offering new cures for previously untreatable conditions. These breakthroughs are paving the way for a more personalized approach to medicine, with treatments tailored to an individual's unique genetic profile, improving their chances of success and minimizing side effects.

        </p>
      </div>
      <div className="blog">
    <h1>Skills Shaping the Future of Healthcare and Life Sciences</h1>
     <img src={pic} alt="Healthcare"/>
     <p>In today's rapidly evolving life sciences sector, technical proficiency in areas like bioinformatics, molecular biology, and biotechnology is becoming increasingly important. With advancements in gene editing, data analysis, and precision medicine, professionals need to master cutting-edge tools such as CRISPR, next-generation sequencing, and machine learning algorithms to contribute effectively to research and innovation.</p>
     <p>As healthcare shifts towards personalized and preventive medicine, professionals must also develop interdisciplinary skills in areas like data science, artificial intelligence, and machine learning. These technologies are transforming how diseases are diagnosed, treated, and prevented, requiring individuals who can integrate biological expertise with computational and analytical skills to optimize patient outcomes.</p>
     <p>Looking ahead, the future of life sciences will demand a broader range of skills, including adaptability, collaboration, and creativity. As new therapeutic modalities like gene therapies, regenerative medicine, and artificial organs become mainstream, professionals will need to innovate and work across disciplines to solve complex biological challenges and address the evolving needs of global healthcare systems.</p>
      </div>
      <section className="skills-section">
  <h2>Skills that Shape the Future</h2>
  <p className="subtitle">
    In a rapidly changing world, GenZSchool helps you stay ahead. Unlock your potential with on-demand learning,
    expert-led courses, and real-world projects that prepare you for tomorrow's challenges today.
  </p>
  <div className="skills-grid">
    <div className="skill-box">
      <h3>5K+</h3>
      <h4>Active Learners Globally</h4>
      <p>
        Extensive and Diverse Content<br />
        Our curated library of courses spans emerging industries and topics, ensuring learners stay up-to-date with
        the latest trends, tools, and technologies.
      </p>
    </div>
    <div className="skill-box">
      <h3>30K+</h3>
      <h4>Courses and Resources</h4>
      <p>
        Extensive and Diverse Content<br />
        Our curated library of courses spans emerging industries and topics, ensuring learners stay up-to-date with
        the latest trends, tools, and technologies.
      </p>
    </div>
    <div className="skill-box">
      <h3>5</h3>
      <h4>Languages Supported</h4>
      <p>
        Courses in Multiple Languages<br />
        Access our content in English, Spanish, French, German, Italian, Portuguese, Hindi, Mandarin, Arabic, Korean,
        Russian, and more, all taught by experts in their native languages.
      </p>
    </div>
  </div>
</section>
<div className="form-container">
      <div className="form-header">
        <h2>Stay ahead of industry trends with data-driven learning that equips you with the skills needed to thrive in a fast-evolving world</h2>
      </div>

      <div className="form-box">
        <div className="form-field">
          <label>First Name *</label>
          <input type="text" placeholder="Enter First Name" />
        </div>

        <div className="form-field">
          <label>Last Name *</label>
          <input type="text" placeholder="Enter Last Name" />
        </div>

        <div className="form-field">
          <label>Email *</label>
          <input type="email" placeholder="Enter Email" />
        </div>

        <div className="form-field">
          <label>Preferred Learning Area *</label>
          <input type="text" placeholder="Enter Learning Area" />
        </div>

        <div className="form-field">
          <label>Career Goals *</label>
          <input type="text" placeholder="Enter Career Goals" />
        </div>

        <button className="submit-button">Submit</button>
        
        <p className="terms">
          By signing up, you agree to our terms and Privacy policy. You agree that we can contact you about GENZ school and use data from third parties to personalize your experience.
        </p>
      </div>
    </div>
    </div>
  );
};

export default Read;

