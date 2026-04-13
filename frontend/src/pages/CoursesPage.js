import { useState } from "react";
import { Link } from "react-router-dom";
import { ALL_COURSES } from "@/pages/CourseDetailPage";

export default function CoursesPage() {
  const [filter, setFilter] = useState("all");
  const [levelFilter, setLevelFilter] = useState("all");

  const COURSES = ALL_COURSES.map(c => ({
    ...c,
    category: c.id === 9 ? "analytics" : "development"
  }));

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

        <div className="courses-grid" data-testid="courses-grid">
          {filtered.map(course => (
            <Link to={`/courses/${course.id}`} className="course-card" key={course.id} data-testid={`course-card-${course.id}`}>
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
                <p className="course-desc">{course.shortDesc}</p>
                <div className="course-meta">
                  <span><i className="fa-solid fa-clock"></i> {course.duration}</span>
                  <span><i className="fa-solid fa-users"></i> {course.students}</span>
                </div>
                <div className="course-card-footer">
                  <span className="course-price">{"\u20B9"}{course.price.toLocaleString()}</span>
                  <span className="enroll-btn" data-testid={`enroll-btn-${course.id}`}>View Course</span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
