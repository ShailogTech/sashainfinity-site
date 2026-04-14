import { useState } from "react";
import { Link } from "react-router-dom";
import { ALL_BLOGS } from "@/pages/BlogDetailPage";

export default function BlogPage() {
  const [searchTerm, setSearchTerm] = useState("");

  const filtered = ALL_BLOGS.filter(b =>
    b.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    b.content.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="sasha-page blog-page" data-testid="blog-page">
      <div className="page-hero">
        <div className="sasha-container">
          <div className="page-hero-content">
            <div className="section-label" style={{ justifyContent: "center" }}>Knowledge Hub</div>
            <h1>Blog</h1>
            <p>Insights, tutorials, and tips from our expert instructors on data analytics, Excel, and professional development</p>
          </div>
        </div>
      </div>

      <div className="sasha-container" style={{ paddingTop: 60, paddingBottom: 100 }}>
        <div className="blog-search" data-testid="blog-search">
          <i className="fa-solid fa-search"></i>
          <input type="text" placeholder="Search articles..." value={searchTerm}
            onChange={e => setSearchTerm(e.target.value)} data-testid="blog-search-input" />
        </div>

        <p className="filter-count">{filtered.length} posts found</p>

        <div className="blog-listing" data-testid="blog-listing">
          {filtered.map((blog, i) => (
            <Link to={`/blog/${blog.slug}`} className="blog-listing-card" key={blog.slug} data-testid={`blog-card-${i}`}>
              <div className="blog-listing-indicator" style={{ background: blog.color }}>
                <span>{blog.title.charAt(0)}</span>
              </div>
              <div className="blog-listing-content">
                <h3>{blog.title}</h3>
                <p>{blog.content.substring(0, 180)}...</p>
                <div className="blog-listing-meta">
                  <span><i className="fa-solid fa-user"></i> {blog.author}</span>
                  <span><i className="fa-solid fa-calendar"></i> {blog.date}</span>
                  <span><i className="fa-solid fa-eye"></i> {blog.views} views</span>
                </div>
                <span className="read-more-btn" data-testid={`read-more-${i}`}>Read more <i className="fa-solid fa-arrow-right"></i></span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
