import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const baseStyles = {
  container: {
    width: "100vw",
    minHeight: "100vh",
    padding: "2rem",
    borderRadius: "0",
    background: "linear-gradient(135deg, #f8fafc 60%, #e0e7ff 100%)",
    boxShadow: "none",
    fontFamily: "system-ui, sans-serif",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },
  avatar: {
    width: "100px",
    height: "100px",
    borderRadius: "50%",
    objectFit: "cover",
    marginBottom: "1rem",
    border: "4px solid",
  },
  name: {
    fontSize: "2rem",
    fontWeight: "bold",
    margin: "0.5rem 0",
  },
  headline: {
    fontSize: "1.2rem",
    marginBottom: "1.5rem",
  },
  section: {
    margin: "1.5rem 0",
  },
  sectionTitle: {
    fontSize: "1.1rem",
    fontWeight: "bold",
    marginBottom: "0.5rem",
    textTransform: "uppercase",
    letterSpacing: "1px"
  },
  list: {
    paddingLeft: "1.2rem",
    marginBottom: 0,
  },
  projectLink: {
    textDecoration: "none",
    fontWeight: "bold",
  },
  contactLink: {
    textDecoration: "underline",
    marginRight: "1rem"
  }
};

const lightTheme = {
  container: {
    background: "linear-gradient(135deg, #f8fafc 60%, #e0e7ff 100%)",
    color: "#22223b",
  },
  avatar: {
    borderColor: "#6366f1"
  },
  name: {
    color: "#3730a3",
  },
  headline: {
    color: "#6366f1",
  },
  sectionTitle: {
    color: "#6366f1",
  },
  projectLink: {
    color: "#2563eb",
  },
  contactLink: {
    color: "#3730a3",
  }
};

const darkTheme = {
  container: {
    background: "linear-gradient(135deg, #232946 60%, #121629 100%)",
    color: "#f4f4f8",
    boxShadow: "0 4px 24px rgba(40, 40, 80, 0.25)",
  },
  avatar: {
    borderColor: "#a5b4fc"
  },
  name: {
    color: "#a5b4fc",
  },
  headline: {
    color: "#b9c0ff",
  },
  sectionTitle: {
    color: "#a5b4fc",
  },
  projectLink: {
    color: "#60a5fa",
  },
  contactLink: {
    color: "#a5b4fc",
  }
};

function mergeStyles(base, theme) {
  // Merge base and theme styles for each key
  const merged = {};
  for (const key in base) {
    merged[key] = { ...base[key], ...(theme[key] || {}) };
  }
  return merged;
}

function ResumeLandingPage() {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    const matcher = window.matchMedia("(prefers-color-scheme: dark)");
    setIsDark(matcher.matches);

    const handleChange = (e) => setIsDark(e.matches);
    matcher.addEventListener("change", handleChange);

    return () => matcher.removeEventListener("change", handleChange);
  }, []);

  const styles = mergeStyles(baseStyles, isDark ? darkTheme : lightTheme);

  return (
    <div style={styles.container}>
      <img
        src=""
        alt="My Avatar"
        style={styles.avatar}
      />
      <div style={styles.name}>Ryan Wilson</div>
      <div style={styles.headline}>Fullstack Developer & React Enthusiast</div>
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
