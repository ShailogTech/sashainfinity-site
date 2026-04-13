import { useParams, Link } from "react-router-dom";

const ALL_BLOGS = [
  { slug: "modulus-of-a-complex-number", title: "Modulus of a Complex Number", author: "Curlo Test", date: "November 21, 2025", views: 29, color: "#667EEA",
    content: "Complex numbers are an essential part of mathematics, widely used in engineering, physics, and computer science. Understanding their properties helps solve many real-world problems.\n\nThe modulus of a complex number z = a + bi is defined as |z| = sqrt(a^2 + b^2). It represents the distance of the complex number from the origin in the Argand plane.\n\nKey properties:\n- |z| >= 0 for all complex numbers z\n- |z| = 0 if and only if z = 0\n- |z1 * z2| = |z1| * |z2|\n- |z1 / z2| = |z1| / |z2| (z2 != 0)\n\nThe modulus is fundamental in understanding the geometric representation of complex numbers and is used extensively in signal processing, control theory, and quantum mechanics." },
  { slug: "conjugate-of-a-complex-number", title: "Conjugate of a Complex Number", author: "Curlo Test", date: "November 21, 2025", views: 7, color: "#F5576C",
    content: "Complex numbers play a crucial role in various fields of mathematics, physics, and engineering. A complex number is generally expressed as z = a + bi.\n\nThe conjugate of z = a + bi is denoted as z* = a - bi. It is obtained by changing the sign of the imaginary part.\n\nImportant properties:\n- z * z* = |z|^2 (always a real number)\n- (z1 + z2)* = z1* + z2*\n- (z1 * z2)* = z1* * z2*\n- z + z* = 2 * Re(z)\n- z - z* = 2i * Im(z)\n\nConjugates are essential in rationalizing complex fractions and solving polynomial equations." },
  { slug: "basic-algebraic-properties-of-complex-numbers", title: "Basic Algebraic Properties of Complex Numbers", author: "Curlo Test", date: "November 21, 2025", views: 3, color: "#4FACFE",
    content: "Complex numbers extend the real number system and follow specific algebraic rules.\n\nA complex number z = a + bi where a is the real part and b is the imaginary part.\n\nFundamental operations:\n\nAddition: (a+bi) + (c+di) = (a+c) + (b+d)i\nSubtraction: (a+bi) - (c+di) = (a-c) + (b-d)i\nMultiplication: (a+bi)(c+di) = (ac-bd) + (ad+bc)i\nDivision: (a+bi)/(c+di) = [(ac+bd) + (bc-ad)i] / (c^2+d^2)\n\nThese properties make complex numbers a field, which is crucial for advanced mathematics and engineering applications." },
  { slug: "complex-numbers", title: "Complex Numbers", author: "Curlo Test", date: "November 21, 2025", views: 1, color: "#43E97B",
    content: "Complex numbers are an essential concept in mathematics, especially in algebra, engineering, and physics.\n\nA complex number is of the form z = a + bi, where:\n- a is the real part (Re(z))\n- b is the imaginary part (Im(z))\n- i is the imaginary unit, defined as i^2 = -1\n\nHistorical context: Complex numbers were first conceived in the 16th century by Italian mathematicians. The need arose from trying to solve cubic equations that had no real solutions.\n\nApplications include:\n- Electrical engineering (AC circuit analysis)\n- Quantum mechanics\n- Signal processing\n- Control systems\n- Fluid dynamics" },
  { slug: "matrics-linear-equations", title: "MATRICS LINEAR EQUATIONS", author: "Curlo Test", date: "November 21, 2025", views: 3, color: "#F4911A",
    content: "Applications of Matrices: Solving Systems of Linear Equations\n\nMatrices are one of the most powerful tools in mathematics, especially in linear algebra.\n\nMethods for solving:\n\n1. Gaussian Elimination - Row reduce the augmented matrix to echelon form\n2. Cramer's Rule - Uses determinants to solve systems\n3. Matrix Inverse Method - If AX = B, then X = A^(-1)B\n\nThese methods are fundamental in:\n- Engineering simulations\n- Computer graphics\n- Economic modeling\n- Data science and machine learning" },
  { slug: "elementary-transformations-of-a-matrix", title: "Elementary Transformations of a Matrix", author: "Curlo Test", date: "November 21, 2025", views: 3, color: "#764BA2",
    content: "Matrices are widely used in computer science, economics, engineering, and cryptography. Elementary transformations are operations that can be performed on the rows or columns of a matrix.\n\nThree types of elementary row operations:\n1. Interchange two rows (Ri <-> Rj)\n2. Multiply a row by a non-zero scalar (Ri -> kRi)\n3. Add a multiple of one row to another (Ri -> Ri + kRj)\n\nThese operations are used to:\n- Find the rank of a matrix\n- Solve systems of linear equations\n- Find the inverse of a matrix\n- Reduce matrices to echelon form" },
  { slug: "inverse-of-a-non-singular-square-matrix", title: "Inverse of a Non-Singular Square Matrix", author: "Curlo Test", date: "November 21, 2025", views: 2, color: "#00F2FE",
    content: "In linear algebra, the inverse of a matrix plays a role similar to the reciprocal of a number.\n\nFor a non-zero number a, the reciprocal 1/a satisfies a * (1/a) = 1. Similarly, for a non-singular matrix A, the inverse A^(-1) satisfies A * A^(-1) = I (identity matrix).\n\nMethods to find inverse:\n1. Adjoint method: A^(-1) = adj(A) / det(A)\n2. Elementary row operations: [A|I] -> [I|A^(-1)]\n3. Cayley-Hamilton theorem\n\nConditions for invertibility:\n- Matrix must be square\n- Determinant must be non-zero\n- Rows/columns must be linearly independent" },
  { slug: "application-of-matrices-to-cryptography", title: "Application of Matrices to Cryptography", author: "Curlo Test", date: "November 13, 2025", views: 2, color: "#F093FB",
    content: "Cryptography is the art of protecting information by transforming it into a form that cannot be understood by unauthorized people.\n\nHill Cipher - A matrix-based encryption method:\n1. Convert plaintext to numbers (A=0, B=1, ..., Z=25)\n2. Group into vectors of size n\n3. Multiply by an n x n key matrix (mod 26)\n4. Convert back to letters\n\nDecryption uses the inverse of the key matrix.\n\nAdvantages:\n- Resistant to frequency analysis\n- Can encrypt multiple characters at once\n- Foundation for modern encryption algorithms" },
  { slug: "example-two-variable-linear-equation", title: "Example: Two Variable Linear Equation", author: "Curlo Test", date: "December 13, 2024", views: 1, color: "#FFD955",
    content: "Learn about two variable linear equations with practical examples.\n\nExample: Solve the system:\n2x + 3y = 12\nx - y = 1\n\nSolution using substitution:\nFrom equation 2: x = y + 1\nSubstitute in equation 1: 2(y+1) + 3y = 12\n2y + 2 + 3y = 12\n5y = 10\ny = 2, x = 3\n\nVerification:\n2(3) + 3(2) = 6 + 6 = 12 (correct)\n3 - 2 = 1 (correct)" },
  { slug: "linear-equation-in-2-variables", title: "Linear Equation in 2 variables", author: "Curlo Test", date: "December 12, 2024", views: 4, color: "#55B1FF",
    content: "The father's age is six times his son's age. Six years hence the age of the father will be four times that of his son's age. Find the present ages.\n\nLet the son's present age = x years\nFather's present age = 6x years\n\nAfter 6 years:\nFather's age = 6x + 6\nSon's age = x + 6\n\nAccording to condition:\n6x + 6 = 4(x + 6)\n6x + 6 = 4x + 24\n2x = 18\nx = 9\n\nSon's age = 9 years\nFather's age = 54 years" },
];

export { ALL_BLOGS };

export default function BlogDetailPage() {
  const { slug } = useParams();
  const blog = ALL_BLOGS.find(b => b.slug === slug);

  if (!blog) {
    return (
      <div className="sasha-page" data-testid="blog-not-found" style={{ minHeight: "60vh", display: "flex", alignItems: "center", justifyContent: "center" }}>
        <div style={{ textAlign: "center" }}>
          <h2 style={{ fontSize: 32, fontWeight: 800, color: "var(--sasha-dark)", marginBottom: 16 }}>Article Not Found</h2>
          <p style={{ color: "var(--sasha-gray)", marginBottom: 24 }}>The blog post you're looking for doesn't exist.</p>
          <Link to="/blog" className="hero-btn hero-btn-fill" data-testid="back-to-blog">Browse Blog <i className="fa-solid fa-arrow-right"></i></Link>
        </div>
      </div>
    );
  }

  const relatedBlogs = ALL_BLOGS.filter(b => b.slug !== blog.slug).slice(0, 3);

  return (
    <div className="sasha-page blog-detail-page" data-testid="blog-detail-page">
      {/* Hero */}
      <div className="bd-hero" style={{ "--bd-color": blog.color }}>
        <div className="sasha-container">
          <Link to="/blog" className="bd-back" data-testid="bd-back"><i className="fa-solid fa-arrow-left"></i> Back to Blog</Link>
          <div className="bd-hero-content">
            <div className="bd-indicator" style={{ background: blog.color }}><span>{blog.title.charAt(0)}</span></div>
            <h1 data-testid="bd-title">{blog.title}</h1>
            <div className="bd-meta">
              <span><i className="fa-solid fa-user"></i> {blog.author}</span>
              <span><i className="fa-solid fa-calendar"></i> {blog.date}</span>
              <span><i className="fa-solid fa-eye"></i> {blog.views} views</span>
            </div>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="sasha-container bd-content-area">
        <div className="bd-content-grid">
          <article className="bd-article" data-testid="bd-article">
            {blog.content.split("\n\n").map((para, i) => (
              <p key={i}>{para}</p>
            ))}
          </article>
          <aside className="bd-sidebar">
            <div className="bd-sidebar-card">
              <h3>Related Articles</h3>
              {relatedBlogs.map(b => (
                <Link to={`/blog/${b.slug}`} className="bd-related-item" key={b.slug} data-testid={`related-${b.slug}`}>
                  <div className="bd-related-dot" style={{ background: b.color }}>{b.title.charAt(0)}</div>
                  <div>
                    <h4>{b.title}</h4>
                    <span>{b.date}</span>
                  </div>
                </Link>
              ))}
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
}
