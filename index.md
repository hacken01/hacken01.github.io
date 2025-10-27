---
layout: default
hero:
  title: "Welcome to My Portfolio"
  subtitle: "Creating beautiful web experiences with modern technologies"
  cta:
    text: "View My Work"
    link: "/portfolio"
---

<section id="about">
  <div class="page-header">
    <h2>About Me</h2>
    <p class="page-subtitle">Passionate developer crafting digital solutions</p>
  </div>
  
  <div class="about-section">
    <div>
      <img src="https://via.placeholder.com/400x400/2563eb/ffffff?text=Your+Photo" alt="Profile" class="about-image" />
    </div>
    <div>
      <div class="about-text">
        <p>
          Welcome to my portfolio! I'm a passionate developer who loves creating beautiful,
          functional web experiences. With expertise in modern web technologies, I bring
          ideas to life through clean code and intuitive design.
        </p>
        <p>
          When I'm not coding, you'll find me exploring new technologies, contributing to
          open source projects, and sharing knowledge with the developer community.
        </p>
      </div>
      
      <div class="skills-grid">
        <div class="skill-item">
          <div class="skill-icon"><i class="fab fa-html5"></i></div>
          <div class="skill-name">HTML</div>
        </div>
        <div class="skill-item">
          <div class="skill-icon"><i class="fab fa-css3-alt"></i></div>
          <div class="skill-name">CSS</div>
        </div>
        <div class="skill-item">
          <div class="skill-icon"><i class="fab fa-js"></i></div>
          <div class="skill-name">JavaScript</div>
        </div>
        <div class="skill-item">
          <div class="skill-icon"><i class="fab fa-python"></i></div>
          <div class="skill-name">Python</div>
        </div>
        <div class="skill-item">
          <div class="skill-icon"><i class="fab fa-react"></i></div>
          <div class="skill-name">React</div>
        </div>
        <div class="skill-item">
          <div class="skill-icon"><i class="fab fa-node-js"></i></div>
          <div class="skill-name">Node.js</div>
        </div>
      </div>
    </div>
  </div>
</section>

<section id="features" style="background: #f9fafb; padding: 4rem 0; margin: 4rem 0; border-radius: 20px;">
  <div class="container">
    <h2 class="section-title">What I Do</h2>
    
    <div class="portfolio-grid" style="grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));">
      <div class="card">
        <div class="skill-icon"><i class="fas fa-code"></i></div>
        <h3 class="card-title">Web Development</h3>
        <p class="card-description">
          Building responsive and interactive web applications using modern frameworks
          and best practices.
        </p>
      </div>
      
      <div class="card">
        <div class="skill-icon"><i class="fas fa-mobile-alt"></i></div>
        <h3 class="card-title">Mobile Development</h3>
        <p class="card-description">
          Creating cross-platform mobile applications that provide seamless user experiences.
        </p>
      </div>
      
      <div class="card">
        <div class="skill-icon"><i class="fas fa-database"></i></div>
        <h3 class="card-title">Backend Development</h3>
        <p class="card-description">
          Designing scalable and efficient server-side solutions with robust APIs.
        </p>
      </div>
    </div>
  </div>
</section>

<section id="contact" style="padding: 4rem 0;">
  <div class="page-header">
    <h2>Get In Touch</h2>
    <p class="page-subtitle">I'd love to hear from you</p>
  </div>
  
  <div class="contact-form">
    <form id="contactForm">
      <div class="form-group">
        <label class="form-label" for="name">Name</label>
        <input type="text" id="name" name="name" class="form-input" required />
      </div>
      
      <div class="form-group">
        <label class="form-label" for="email">Email</label>
        <input type="email" id="email" name="email" class="form-input" required />
      </div>
      
      <div class="form-group">
        <label class="form-label" for="message">Message</label>
        <textarea id="message" name="message" class="form-textarea" required></textarea>
      </div>
      
      <button type="submit" class="btn btn-primary" style="width: 100%;">Send Message</button>
    </form>
  </div>
</section>

