import React from "react";
import { Link } from "react-router-dom";

function ResumeLandingPage() {
  return (
    <div style={{ maxWidth: 700, margin: "2rem auto", padding: "2rem", borderRadius: 10, background: "#f8f8f8", boxShadow: "0 2px 8px #ccc" }}>
      <h1>Your Name</h1>
      <h2>Frontend Developer</h2>
      <p>
        {/* Brief summary */}
        Experienced React developer skilled in building modern, responsive web applications. Passionate about UI/UX and delivering high-quality software.
      </p>
      <section>
        <h3>Skills</h3>
        <ul>
          <li>React, JavaScript, TypeScript</li>
          <li>HTML, CSS, Tailwind, Material-UI</li>
          <li>REST APIs, Node.js</li>
        </ul>
      </section>
      <section>
        <h3>Projects</h3>
        <ul>
          <li>
            <Link to="/search">Giffy App</Link> – Search and save your favorite GIFs.
          </li>
          <li>
            <a href="/solitaire" target="_blank" rel="noopener noreferrer">Solitaire Game</a> – Play classic solitaire in your browser.
          </li>
        </ul>
      </section>
      <section>
        <h3>Contact</h3>
        <p>Email: your.email@example.com</p>
        <p>
          <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer">GitHub</a>
        </p>
      </section>
    </div>
  );
}

export default ResumeLandingPage;