import './About.css';

const About = () => {
  return (
    <div className="about-page">
      <div className="about-container">
        <div className="about-header">
          <h1 className="about-title">About TechBlog</h1>
          <p className="about-subtitle">
            Your go-to resource for web development insights and tutorials
          </p>
        </div>

        <div className="about-content">
          <section className="about-section">
            <h2>Our Mission</h2>
            <p>
              At TechBlog, we're passionate about sharing knowledge and helping developers 
              stay at the forefront of web development. Our mission is to provide high-quality, 
              practical content that empowers developers to build better applications and 
              advance their careers.
            </p>
          </section>

          <section className="about-section">
            <h2>What We Cover</h2>
            <div className="topics-grid">
              <div className="topic-card">
                <h3>React & JavaScript</h3>
                <p>Deep dives into modern React patterns, JavaScript ES6+, and best practices.</p>
              </div>
              <div className="topic-card">
                <h3>CSS & Design</h3>
                <p>Advanced CSS techniques, responsive design, and UI/UX principles.</p>
              </div>
              <div className="topic-card">
                <h3>Web Performance</h3>
                <p>Optimization strategies, Core Web Vitals, and performance monitoring.</p>
              </div>
              <div className="topic-card">
                <h3>Development Tools</h3>
                <p>Reviews and tutorials on the latest development tools and frameworks.</p>
              </div>
            </div>
          </section>

          <section className="about-section">
            <h2>Our Team</h2>
            <p>
              Our content is created by experienced developers and industry professionals 
              who are passionate about sharing their knowledge. Each article is carefully 
              researched and tested to ensure accuracy and practical value.
            </p>
          </section>

          <div className="about-cta">
            <h2>Stay Connected</h2>
            <p>
              Follow us for the latest articles, tutorials, and web development news. 
              Join our community of developers who are shaping the future of the web.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;