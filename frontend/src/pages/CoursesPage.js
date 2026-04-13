import { useState } from "react";
import { Link } from "react-router-dom";

const COURSES = [
  {
    id: 12, title: "React JS Mastery (TAMIL)", level: "intermediate",
    instructor: "CTCurlo Test", price: 500, duration: "144 minutes", lessons: 0, students: 6,
    image: "https://sashainfinity.com/uploads/images/007a699f-f47d-43c7-aba7-a5a75256650c.png",
    desc: "This React.js course introduces learners to one of the most widely used JavaScript libraries for building fast, interactive, and scalable user interfaces.",
    category: "development"
  },
  {
    id: 11, title: "Full Stack Development with AI-Advance (Tamil)", level: "advanced",
    instructor: "CTCurlo Test", price: 1000, duration: "212 minutes", lessons: 0, students: 4,
    image: "https://sashainfinity.com/uploads/images/f0cb4102-4582-4b4c-b1ee-bc98372f1eaf.jpg",
    desc: "This beginner-friendly course introduces you to the fundamentals of web development from creating websites using HTML, CSS, and JavaScript to managing your code with Git and GitHub.",
    category: "development"
  },
  {
    id: 10, title: "Full Stack Development with AI (Tamil)", level: "intermediate",
    instructor: "Dinesh S M", price: 1000, duration: "256 minutes", lessons: 0, students: 6,
    image: "https://sashainfinity.com/uploads/images/5d9d645b-fd01-4acd-8b7f-31dc6de46ff9.jpeg",
    desc: "This beginner-friendly course introduces you to the fundamentals of web development from creating websites using HTML, CSS, and JavaScript to managing your code with Git and GitHub.",
    category: "development"
  },
  {
    id: 9, title: "Data Analytics using MS-Excel-Beginner", level: "intermediate",
    instructor: "CTCurlo Test", price: 500, duration: "139 minutes", lessons: 0, students: 3,
    image: "https://sashainfinity.com/uploads/images/93bc2ce5-7d58-48ea-bad9-142111912c74.jpg",
    desc: "This course is designed to help beginners build a strong foundation in data analytics using Microsoft Excel. It covers essential concepts such as data entry, cleaning, and organization.",
    category: "analytics"
  },
];

export default function CoursesPage() {
  const [filter, setFilter] = useState("all");
  const [levelFilter, setLevelFilter] = useState("all");

  const filtered = COURSES.filter(c => {
    if (filter !== "all" && c.category !== filter) return false;
    if (levelFilter !== "all" && c.level !== levelFilter) return false;
    return true;
  });

  return (
    <div className="sasha-page courses-page" data-testid="courses-page">
      <div className="page-hero">
        <div className="sasha-container">
          <div className="page-hero-content">
            <div className="section-label" style={{ justifyContent: "center" }}>Premium Learning</div>
            <h1>All Courses</h1>
            <p>Discover thousands of courses from expert instructors</p>
          </div>
        </div>
      </div>

      <div className="sasha-container" style={{ paddingTop: 60, paddingBottom: 100 }}>
        {/* Filters */}
        <div className="courses-filters" data-testid="courses-filters">
          <div className="filter-group">
            <label>Category</label>
            <div className="filter-pills">
              {["all", "development", "analytics"].map(cat => (
                <button key={cat} className={`filter-pill ${filter === cat ? "active" : ""}`}
                  onClick={() => setFilter(cat)} data-testid={`filter-${cat}`}>
                  {cat === "all" ? "All" : cat.charAt(0).toUpperCase() + cat.slice(1)}
                </button>
              ))}
            </div>
          </div>
          <div className="filter-group">
            <label>Level</label>
            <div className="filter-pills">
              {["all", "intermediate", "advanced"].map(lev => (
                <button key={lev} className={`filter-pill ${levelFilter === lev ? "active" : ""}`}
                  onClick={() => setLevelFilter(lev)} data-testid={`filter-level-${lev}`}>
                  {lev === "all" ? "All" : lev.charAt(0).toUpperCase() + lev.slice(1)}
                </button>
              ))}
            </div>
          </div>
          <p className="filter-count">{filtered.length} courses found</p>
        </div>

        {/* Course Grid */}
        <div className="courses-grid" data-testid="courses-grid">
          {filtered.map(course => (
            <div className="course-card" key={course.id} data-testid={`course-card-${course.id}`}>
              <div className="course-card-img">
                <img src={course.image} alt={course.title} />
                <span className={`course-level ${course.level}`}>{course.level}</span>
              </div>
              <div className="course-card-body">
                <div className="course-instructor">
                  <i className="fa-solid fa-user-circle"></i>
                  <span>{course.instructor}</span>
                </div>
                <h3>{course.title}</h3>
                <p className="course-desc">{course.desc}</p>
                <div className="course-meta">
                  <span><i className="fa-solid fa-clock"></i> {course.duration}</span>
                  <span><i className="fa-solid fa-users"></i> {course.students}</span>
                </div>
                <div className="course-card-footer">
                  <span className="course-price">{"\u20B9"}{course.price.toLocaleString()}</span>
                  <button className="enroll-btn" data-testid={`enroll-btn-${course.id}`}>Enroll Now</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
