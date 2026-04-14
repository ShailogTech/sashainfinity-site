import { useParams, Link } from "react-router-dom";

const ALL_COURSES = [
  {
    id: 12, title: "React JS Mastery (TAMIL)", level: "intermediate",
    instructor: "Rifath M", instructorId: 8, price: 500, duration: "2h 24m", lessons: 11, students: 6, language: "English",
    image: "https://sashainfinity.com/uploads/images/007a699f-f47d-43c7-aba7-a5a75256650c.png",
    shortDesc: "Learn how to build fast, interactive, and scalable user interfaces using React.js.",
    desc: "This React.js course introduces learners to one of the most widely used JavaScript libraries for building fast, interactive, and scalable user interfaces. The course focuses on hands-on practice, guiding you from the basics of React components and state management to more advanced concepts like hooks, routing, and API integration.\n\nThrough real-world examples and mini-projects, you will learn how to structure applications, manage data flow, and create dynamic web pages that respond to user interactions. By the end of the course, you will be able to build modern front-end applications confidently using React's component-based architecture.",
    features: ["2h 24m of content", "11 lessons", "Full lifetime access", "Certificate of completion"],
    whatYouLearn: ["React components & JSX", "State management with hooks", "React Router for navigation", "API integration & data fetching", "Building real-world projects", "Component-based architecture"],
    requirements: ["Basic HTML, CSS & JavaScript knowledge", "A laptop with internet", "VS Code or any code editor"],
    curriculum: [
      { section: "Getting Started", lessons: [{ title: "Introduction to React", duration: "12:30" }, { title: "Setting Up Development Environment", duration: "15:00" }, { title: "Creating Your First Component", duration: "18:45" }] },
      { section: "Core Concepts", lessons: [{ title: "JSX Deep Dive", duration: "14:20" }, { title: "Props and State", duration: "20:10" }, { title: "Event Handling", duration: "16:30" }] },
      { section: "Advanced Topics", lessons: [{ title: "React Hooks (useState, useEffect)", duration: "22:15" }, { title: "React Router", duration: "18:00" }, { title: "API Integration", duration: "25:30" }] },
      { section: "Project", lessons: [{ title: "Building a Todo App", duration: "20:00" }, { title: "Final Project & Deployment", duration: "12:00" }] }
    ]
  },
  {
    id: 11, title: "Full Stack Development with AI-Advance (Tamil)", level: "advanced",
    instructor: "CTCurlo Test", instructorId: 0, price: 1000, duration: "3h 32m", lessons: 19, students: 4, language: "English",
    image: "https://sashainfinity.com/uploads/images/f0cb4102-4582-4b4c-b1ee-bc98372f1eaf.jpg",
    shortDesc: "Advanced full stack development with AI tools integration.",
    desc: "This advanced course takes your web development skills to the next level. You'll learn modern full stack development techniques combined with AI-powered tools to build production-ready applications.\n\nCovering backend development with Node.js, database management, API design, and frontend frameworks, this course integrates AI tools like ChatGPT, Gemini, and Copilot into your development workflow for maximum productivity.",
    features: ["3h 32m of content", "19 lessons", "Full lifetime access", "Certificate of completion"],
    whatYouLearn: ["Advanced JavaScript & Node.js", "Database design & management", "RESTful API development", "AI-assisted coding with Copilot", "Deployment & DevOps basics", "Full stack project architecture"],
    requirements: ["Basic web development knowledge", "Completion of beginner course recommended", "Laptop with internet"],
    curriculum: [
      { section: "Advanced Frontend", lessons: [{ title: "Advanced React Patterns", duration: "18:00" }, { title: "State Management Solutions", duration: "22:15" }, { title: "Performance Optimization", duration: "16:30" }] },
      { section: "Backend Development", lessons: [{ title: "Node.js & Express Setup", duration: "20:00" }, { title: "Database Integration", duration: "25:00" }, { title: "Authentication & Security", duration: "18:45" }] },
      { section: "AI Integration", lessons: [{ title: "AI Tools for Developers", duration: "15:00" }, { title: "ChatGPT for Code Generation", duration: "20:30" }, { title: "Copilot & Gemini Workflow", duration: "18:00" }] }
    ]
  },
  {
    id: 10, title: "Full Stack Development with AI (Tamil)", level: "intermediate",
    instructor: "Dinesh S M", instructorId: 11, price: 1000, duration: "4h 16m", lessons: 19, students: 6, language: "English",
    image: "https://sashainfinity.com/uploads/images/5d9d645b-fd01-4acd-8b7f-31dc6de46ff9.jpeg",
    shortDesc: "Beginner-friendly Tamil course covering HTML, CSS, JavaScript, Git, and AI tools.",
    desc: "This beginner-friendly course introduces you to the fundamentals of web development — from creating websites using HTML, CSS, and JavaScript to managing your code with Git and GitHub — all explained through Tamil-language video lessons.\n\nIn addition, you'll learn how to integrate Artificial Intelligence (AI) tools to enhance your development workflow, generate creative ideas, and even build AI-assisted portfolio websites.\n\nBy the end of the course, you'll have a fully functional personal portfolio site built with your own code and customized through AI tools.",
    features: ["4h 16m of content", "19 lessons", "Full lifetime access", "Certificate of completion"],
    whatYouLearn: ["HTML5 structure & semantics", "CSS3 styling & responsive design", "JavaScript ES6 fundamentals", "Git & GitHub version control", "AI tools: ChatGPT, Gemini, Copilot", "Build & deploy a portfolio website"],
    requirements: ["Laptop", "Internet connection"],
    curriculum: [
      { section: "HTML Fundamentals", lessons: [{ title: "Introduction to HTML", duration: "15:00" }, { title: "Tags, Elements & Attributes", duration: "18:30" }, { title: "Forms & Tables", duration: "20:00" }] },
      { section: "CSS Styling", lessons: [{ title: "CSS Basics & Selectors", duration: "16:00" }, { title: "Flexbox & Grid Layout", duration: "22:00" }, { title: "Responsive Design", duration: "18:00" }] },
      { section: "JavaScript", lessons: [{ title: "JS Fundamentals", duration: "20:00" }, { title: "DOM Manipulation", duration: "22:30" }, { title: "Event Handling & APIs", duration: "25:00" }] },
      { section: "Git & AI Tools", lessons: [{ title: "Git & GitHub", duration: "18:00" }, { title: "ChatGPT for Coding", duration: "15:00" }, { title: "Gemini & Copilot", duration: "16:00" }] },
      { section: "Portfolio Project", lessons: [{ title: "Planning Your Portfolio", duration: "12:00" }, { title: "Building with Code", duration: "20:00" }, { title: "AI-Enhanced Design", duration: "15:00" }, { title: "Deployment", duration: "10:00" }] }
    ]
  },
  {
    id: 9, title: "Data Analytics using MS-Excel-Beginner", level: "intermediate",
    instructor: "CTCurlo Test", instructorId: 0, price: 500, duration: "2h 19m", lessons: 8, students: 3, language: "English",
    image: "https://sashainfinity.com/uploads/images/93bc2ce5-7d58-48ea-bad9-142111912c74.jpg",
    shortDesc: "Build a strong foundation in data analytics using Microsoft Excel.",
    desc: "This course is designed to help beginners build a strong foundation in data analytics using Microsoft Excel. It covers essential concepts such as data entry, cleaning, and organization, along with powerful features like formulas, pivot tables, charts, and conditional formatting.\n\nWhether you're a student, job seeker, or professional looking to upskill, this course will equip you with the practical Excel skills needed for data-driven decision making.",
    features: ["2h 19m of content", "8 lessons", "Full lifetime access", "Certificate of completion"],
    whatYouLearn: ["Excel fundamentals & navigation", "Data entry & formatting", "Formulas & functions (SUM, VLOOKUP, IF)", "Pivot tables & charts", "Data cleaning techniques", "Conditional formatting & analysis"],
    requirements: ["A computer with MS Excel installed", "Basic computer literacy"],
    curriculum: [
      { section: "Excel Basics", lessons: [{ title: "Introduction to Excel", duration: "15:00" }, { title: "Data Entry & Formatting", duration: "18:00" }] },
      { section: "Formulas & Functions", lessons: [{ title: "Basic Formulas", duration: "20:00" }, { title: "Advanced Functions (VLOOKUP, IF)", duration: "22:00" }] },
      { section: "Data Analysis", lessons: [{ title: "Pivot Tables", duration: "25:00" }, { title: "Charts & Graphs", duration: "18:00" }] },
      { section: "Advanced Topics", lessons: [{ title: "Conditional Formatting", duration: "15:00" }, { title: "Data Cleaning & Reporting", duration: "16:00" }] }
    ]
  },
];

export { ALL_COURSES };

export default function CourseDetailPage() {
  const { id } = useParams();
  const course = ALL_COURSES.find(c => c.id === parseInt(id));

  if (!course) {
    return (
      <div className="sasha-page" data-testid="course-not-found" style={{ minHeight: "60vh", display: "flex", alignItems: "center", justifyContent: "center" }}>
        <div style={{ textAlign: "center" }}>
          <h2 style={{ fontSize: 32, fontWeight: 800, color: "var(--sasha-dark)", marginBottom: 16 }}>Course Not Found</h2>
          <p style={{ color: "var(--sasha-gray)", marginBottom: 24 }}>The course you're looking for doesn't exist.</p>
          <Link to="/courses" className="hero-btn hero-btn-fill" data-testid="back-to-courses">Browse Courses <i className="fa-solid fa-arrow-right"></i></Link>
        </div>
      </div>
    );
  }

  const otherCourses = ALL_COURSES.filter(c => c.id !== course.id).slice(0, 3);

  return (
    <div className="sasha-page course-detail-page" data-testid="course-detail-page">
      {/* Hero */}
      <div className="cd-hero" data-testid="cd-hero">
        <div className="sasha-container">
          <div className="cd-hero-grid">
            <div className="cd-hero-info">
              <span className={`course-level-badge ${course.level}`}>{course.level} Level</span>
              <h1 data-testid="cd-title">{course.title}</h1>
              <p className="cd-short-desc">{course.shortDesc}</p>
              <div className="cd-meta-row">
                <span><i className="fa-solid fa-users"></i> {course.students} Students</span>
                <span><i className="fa-solid fa-clock"></i> {course.duration}</span>
                <span><i className="fa-solid fa-globe"></i> {course.language}</span>
              </div>
              <div className="cd-instructor-row">
                <div className="cd-instructor-avatar">{course.instructor.charAt(0)}</div>
                <div>
                  <span className="cd-taught">Taught by</span>
                  <strong>{course.instructor}</strong>
                </div>
              </div>
            </div>
            <div className="cd-hero-card" data-testid="cd-purchase-card">
              <div className="cd-card-img">
                <img src={course.image} alt={course.title} />
              </div>
              <div className="cd-card-body">
                <div className="cd-price" data-testid="cd-price">{"\u20B9"}{course.price.toLocaleString()}</div>
                <button className="cd-buy-btn" data-testid="cd-buy-now">
                  <i className="fa-solid fa-cart-shopping"></i> Buy Now
                </button>
                <button className="cd-cart-btn" data-testid="cd-add-to-cart">Add to Cart</button>
                <div className="cd-includes">
                  <h4>This course includes:</h4>
                  {course.features.map((f, i) => (
                    <div key={i} className="cd-include-item"><i className="fa-solid fa-check"></i> {f}</div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="sasha-container cd-content-area">
        {/* What you'll learn */}
        <section className="cd-section" data-testid="cd-what-learn">
          <h2><i className="fa-solid fa-lightbulb"></i> What you'll learn</h2>
          <div className="cd-learn-grid">
            {course.whatYouLearn.map((item, i) => (
              <div key={i} className="cd-learn-item"><i className="fa-solid fa-circle-check"></i> {item}</div>
            ))}
          </div>
        </section>

        {/* About */}
        <section className="cd-section" data-testid="cd-about">
          <h2><i className="fa-solid fa-book-open"></i> About This Course</h2>
          <div className="cd-about-text">
            {course.desc.split("\n\n").map((p, i) => <p key={i}>{p}</p>)}
          </div>
        </section>

        {/* Curriculum */}
        <section className="cd-section" data-testid="cd-curriculum">
          <h2><i className="fa-solid fa-list-check"></i> Curriculum</h2>
          <div className="cd-curriculum">
            {course.curriculum.map((sec, si) => (
              <div key={si} className="cd-curriculum-section" data-testid={`curriculum-section-${si}`}>
                <div className="cd-cur-header">
                  <h3>{sec.section}</h3>
                  <span>{sec.lessons.length} lessons</span>
                </div>
                <div className="cd-cur-lessons">
                  {sec.lessons.map((lesson, li) => (
                    <div key={li} className="cd-cur-lesson">
                      <div className="cd-lesson-left">
                        <i className="fa-solid fa-play-circle"></i>
                        <span>{lesson.title}</span>
                      </div>
                      <span className="cd-lesson-dur">{lesson.duration}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Requirements */}
        <section className="cd-section" data-testid="cd-requirements">
          <h2><i className="fa-solid fa-clipboard-list"></i> Requirements</h2>
          <ul className="cd-req-list">
            {course.requirements.map((r, i) => <li key={i}><i className="fa-solid fa-chevron-right"></i> {r}</li>)}
          </ul>
        </section>

        {/* More Courses */}
        <section className="cd-section" data-testid="cd-more-courses">
          <h2><i className="fa-solid fa-graduation-cap"></i> More Courses</h2>
          <div className="cd-more-grid">
            {otherCourses.map(c => (
              <Link to={`/courses/${c.id}`} className="cd-more-card" key={c.id} data-testid={`more-course-${c.id}`}>
                <img src={c.image} alt={c.title} />
                <div className="cd-more-info">
                  <h4>{c.title}</h4>
                  <div className="cd-more-meta">
                    <span>{"\u20B9"}{c.price}</span>
                    <span className={`cd-more-level ${c.level}`}>{c.level}</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
