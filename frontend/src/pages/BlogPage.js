import { useState } from "react";
import { Link } from "react-router-dom";

const BLOGS = [
  { slug: "modulus-of-a-complex-number", title: "Modulus of a Complex Number", excerpt: "Complex numbers are an essential part of mathematics, widely used in engineering, physics, and computer science. Understanding their properties helps solve many real-world problems.", author: "Curlo Test", date: "November 21, 2025", views: 29, color: "#667EEA" },
  { slug: "conjugate-of-a-complex-number", title: "Conjugate of a Complex Number", excerpt: "Complex numbers play a crucial role in various fields of mathematics, physics, and engineering. A complex number is generally expressed as z = a + bi.", author: "Curlo Test", date: "November 21, 2025", views: 7, color: "#F5576C" },
  { slug: "basic-algebraic-properties-of-complex-numbers", title: "Basic Algebraic Properties of Complex Numbers", excerpt: "Complex numbers are an essential concept in mathematics, extending the idea of numbers beyond the real number line.", author: "Curlo Test", date: "November 21, 2025", views: 3, color: "#4FACFE" },
  { slug: "complex-numbers", title: "Complex Numbers", excerpt: "Complex numbers are an essential concept in mathematics, especially in algebra, engineering, and physics. They extend our understanding of numbers beyond the real number line.", author: "Curlo Test", date: "November 21, 2025", views: 1, color: "#43E97B" },
  { slug: "matrics-linear-equations", title: "MATRICS LINEAR EQUATIONS", excerpt: "Applications of Matrices: Solving Systems of Linear Equations. Matrices are one of the most powerful tools in mathematics.", author: "Curlo Test", date: "November 21, 2025", views: 3, color: "#F4911A" },
  { slug: "elementary-transformations-of-a-matrix", title: "Elementary Transformations of a Matrix", excerpt: "Matrices are one of the most important tools in mathematics. They are widely used in computer science, economics, engineering, and cryptography.", author: "Curlo Test", date: "November 21, 2025", views: 3, color: "#764BA2" },
  { slug: "inverse-of-a-non-singular-square-matrix", title: "Inverse of a Non-Singular Square Matrix", excerpt: "In linear algebra, the inverse of a matrix plays a role similar to the reciprocal of a number.", author: "Curlo Test", date: "November 21, 2025", views: 2, color: "#00F2FE" },
  { slug: "application-of-matrices-to-cryptography", title: "Application of Matrices to Cryptography", excerpt: "Cryptography is the art of protecting information by transforming it into a form that cannot be understood by unauthorized people.", author: "Curlo Test", date: "November 13, 2025", views: 2, color: "#F093FB" },
  { slug: "example-two-variable-linear-equation", title: "Example: Two Variable Linear Equation", excerpt: "Learn about two variable linear equations with practical examples and step-by-step solutions.", author: "Curlo Test", date: "December 13, 2024", views: 1, color: "#FFD955" },
  { slug: "linear-equation-in-2-variables", title: "Linear Equation in 2 variables", excerpt: "The father's age is six times his son's age. Six years hence the age of the father will be four times that of his son's age.", author: "Curlo Test", date: "December 12, 2024", views: 4, color: "#55B1FF" },
];

export default function BlogPage() {
  const [searchTerm, setSearchTerm] = useState("");

  const filtered = BLOGS.filter(b =>
    b.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    b.excerpt.toLowerCase().includes(searchTerm.toLowerCase())
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
        {/* Search */}
        <div className="blog-search" data-testid="blog-search">
          <i className="fa-solid fa-search"></i>
          <input type="text" placeholder="Search articles..." value={searchTerm}
            onChange={e => setSearchTerm(e.target.value)} data-testid="blog-search-input" />
        </div>

        <p className="filter-count">{filtered.length} posts found</p>

        {/* Blog Grid */}
        <div className="blog-listing" data-testid="blog-listing">
          {filtered.map((blog, i) => (
            <article className="blog-listing-card" key={blog.slug} data-testid={`blog-card-${i}`}>
              <div className="blog-listing-indicator" style={{ background: blog.color }}>
                <span>{blog.title.charAt(0)}</span>
              </div>
              <div className="blog-listing-content">
                <h3>{blog.title}</h3>
                <p>{blog.excerpt}</p>
                <div className="blog-listing-meta">
                  <span><i className="fa-solid fa-user"></i> {blog.author}</span>
                  <span><i className="fa-solid fa-calendar"></i> {blog.date}</span>
                  <span><i className="fa-solid fa-eye"></i> {blog.views} views</span>
                </div>
                <button className="read-more-btn" data-testid={`read-more-${i}`}>Read more <i className="fa-solid fa-arrow-right"></i></button>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}
