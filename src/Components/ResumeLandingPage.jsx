import React from "react";
import { Link } from "react-router-dom";

const styles = {
  container: {
    maxWidth: "600px",
    margin: "3rem auto",
    padding: "2rem",
    borderRadius: "16px",
    background: "linear-gradient(135deg, #f8fafc 60%, #e0e7ff 100%)",
    boxShadow: "0 4px 24px rgba(80, 80, 160, 0.10)",
    fontFamily: "system-ui, sans-serif",
  },
  avatar: {
    width: "100px",
    height: "100px",
    borderRadius: "50%",
    objectFit: "cover",
    marginBottom: "1rem",
    border: "4px solid #6366f1"
  },
  name: {
    fontSize: "2rem",
    fontWeight: "bold",
    color: "#3730a3",
    margin: "0.5rem 0",
  },
  headline: {
    fontSize: "1.2rem",
    color: "#6366f1",
    marginBottom: "1.5rem",
  },
  section: {
    margin: "1.5rem 0",
  },
  sectionTitle: {
    fontSize: "1.1rem",
    fontWeight: "bold",
    color: "#6366f1",
    marginBottom: "0.5rem",
    textTransform: "uppercase",
    letterSpacing: "1px"
  },
  list: {
    paddingLeft: "1.2rem",
    marginBottom: 0,
  },
  projectLink: {
    color: "#2563eb",
    textDecoration: "none",
    fontWeight: "bold",
  },
  contactLink: {
    color: "#3730a3",
    textDecoration: "underline",
    marginRight: "1rem"
  }
};

function ResumeLandingPage() {
  return (
    <div style={styles.container}>
      {/* Avatar (replace src with your image if you want) */}
      <img
        src="https://i.pravatar.cc/100?img=3"
        alt="Your Avatar"
        style={styles.avatar}
      />
      <div style={styles.name}>Ryan Wilson</div>
      <div style={styles.headline}>Frontend Developer & React Enthusiast</div>
      <p>
        I build beautiful, performant web apps with React and modern JavaScript. I love clean code, great UX, and learning new things!
      </p>

      <div style={styles.section}>
        <div style={styles.sectionTitle}>Skills</div>
        <ul style={styles.list}>
          <li>React, JavaScript (ES6+), TypeScript</li>
          <li>HTML5, CSS3, Responsive Design</li>
          <li>APIs, Node.js, Git & GitHub</li>
        </ul>
      </div>

      <div style={styles.section}>
        <div style={styles.sectionTitle}>Projects</div>
        <ul style={styles.list}>
          <li>
            <Link to="/search" style={styles.projectLink}>Giffy App</Link> &ndash; Search and save your favorite GIFs.
          </li>
          <li>
            <Link to="/solitaire" style={styles.projectLink} target="_blank" rel="noopener noreferrer">
              Solitaire Game
            </Link> &ndash; Play classic solitaire in your browser.
          </li>
        </ul>
      </div>

      <div style={styles.section}>
        <div style={styles.sectionTitle}>Contact</div>
        <a href="mailto:rwilson2855@gmail.com" style={styles.contactLink}>Email</a>
        <a href="https://github.com/rwilson2855" target="_blank" rel="noopener noreferrer" style={styles.contactLink}>
          GitHub
        </a>
        <a href="https://www.linkedin.com/in/ryan-wilson-672115348/" target="_blank" rel="noopener noreferrer" style={styles.contactLink}>
          LinkedIn
        </a>
      </div>
    </div>
  );
}

export default ResumeLandingPage;