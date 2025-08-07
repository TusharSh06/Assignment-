export const blogPosts = [
  {
    id: 1,
    title: "The Future of Web Development: Trends to Watch in 2025",
    excerpt: "Explore the emerging technologies and methodologies that are shaping the future of web development, from AI integration to new frameworks.",
    content: `
      <p>The landscape of web development is constantly evolving, and 2025 promises to bring revolutionary changes that will reshape how we build and interact with digital experiences.</p>
      
      <h2>AI-Powered Development</h2>
      <p>Artificial Intelligence is no longer just a buzzword in web development. From automated code generation to intelligent design systems, AI is becoming an integral part of the development workflow. Tools like GitHub Copilot and ChatGPT are already transforming how developers write code, while AI-powered design tools are making it easier to create stunning user interfaces.</p>
      
      <h2>Component-Driven Architecture</h2>
      <p>The shift towards component-driven development continues to gain momentum. Modern frameworks like React, Vue, and Angular have made component reusability a cornerstone of efficient development. This approach not only improves code maintainability but also enhances collaboration between teams.</p>
      
      <h2>Performance-First Mindset</h2>
      <p>With Core Web Vitals becoming increasingly important for SEO, developers are prioritizing performance from the ground up. Techniques like lazy loading, code splitting, and server-side rendering are becoming standard practices rather than optional optimizations.</p>
      
      <p>The future of web development is bright, with these trends pointing towards more efficient, intelligent, and user-centric approaches to building digital experiences.</p>
    `,
    author: "Sarah Johnson",
    publishDate: "2025-01-15",
    category: "Technology",
    tags: ["Web Development", "AI", "Future Trends"],
    readTime: "8 min read",
    featured: true,
    image: "https://images.pexels.com/photos/577585/pexels-photo-577585.jpeg?auto=compress&cs=tinysrgb&w=800"
  },
  {
    id: 2,
    title: "Mastering CSS Grid: A Complete Guide to Modern Layouts",
    excerpt: "Learn how to create complex, responsive layouts with CSS Grid. This comprehensive guide covers everything from basic concepts to advanced techniques.",
    content: `
      <p>CSS Grid has revolutionized the way we approach web layout design. Unlike traditional layout methods, Grid provides a two-dimensional system that makes complex layouts both easier to implement and maintain.</p>
      
      <h2>Understanding the Basics</h2>
      <p>CSS Grid works by defining a grid container and grid items. The container becomes a grid context, and its direct children become grid items that can be positioned anywhere within the grid.</p>
      
      <h2>Advanced Techniques</h2>
      <p>Beyond basic grid layouts, advanced techniques like implicit grids, grid areas, and subgrid (where supported) open up powerful possibilities for complex designs. These features allow for sophisticated layouts that adapt beautifully across different screen sizes.</p>
      
      <h2>Real-World Applications</h2>
      <p>From magazine-style layouts to complex dashboard designs, CSS Grid excels in scenarios where traditional flexbox falls short. The ability to overlap elements, create asymmetrical layouts, and maintain consistent spacing makes it indispensable for modern web design.</p>
    `,
    author: "Michael Chen",
    publishDate: "2025-01-12",
    category: "CSS",
    tags: ["CSS", "Layout", "Design"],
    readTime: "12 min read",
    featured: false,
    image: "https://images.pexels.com/photos/1181671/pexels-photo-1181671.jpeg?auto=compress&cs=tinysrgb&w=800"
  },
  {
    id: 3,
    title: "Building Scalable React Applications: Best Practices and Patterns",
    excerpt: "Discover proven strategies for architecting large-scale React applications that are maintainable, performant, and easy to extend.",
    content: `
      <p>Building scalable React applications requires careful planning and adherence to proven patterns and practices. As applications grow in complexity, the decisions made early in the development process become increasingly important.</p>
      
      <h2>Component Architecture</h2>
      <p>A well-structured component hierarchy is the foundation of any scalable React application. Following principles like single responsibility and composition over inheritance leads to more maintainable code.</p>
      
      <h2>State Management Strategies</h2>
      <p>Choosing the right state management solution depends on your application's complexity. While React's built-in state management is sufficient for smaller applications, larger applications benefit from solutions like Redux, Zustand, or Jotai.</p>
      
      <h2>Performance Optimization</h2>
      <p>Techniques like memoization, code splitting, and lazy loading become crucial as applications scale. Understanding when and how to apply these optimizations can significantly improve user experience.</p>
    `,
    author: "Emily Rodriguez",
    publishDate: "2025-01-10",
    category: "React",
    tags: ["React", "Architecture", "Best Practices"],
    readTime: "15 min read",
    featured: true,
    image: "https://images.pexels.com/photos/3861943/pexels-photo-3861943.jpeg?auto=compress&cs=tinysrgb&w=800"
  },
  {
    id: 4,
    title: "The Art of Responsive Design: Creating Websites That Work Everywhere",
    excerpt: "Learn the principles and techniques of responsive design to create websites that provide optimal viewing experiences across all devices.",
    content: `
      <p>Responsive design has evolved from a nice-to-have feature to an essential requirement for modern websites. With the diversity of devices and screen sizes, creating flexible designs that work everywhere is more important than ever.</p>
      
      <h2>Mobile-First Approach</h2>
      <p>Starting with mobile designs and progressively enhancing for larger screens ensures that your website performs well on the most constrained devices first. This approach often leads to cleaner, more focused designs.</p>
      
      <h2>Flexible Grid Systems</h2>
      <p>Modern CSS features like Grid and Flexbox provide powerful tools for creating flexible layouts. Understanding how to use these tools effectively is key to creating truly responsive designs.</p>
      
      <h2>Performance Considerations</h2>
      <p>Responsive design isn't just about layout—it's also about performance. Techniques like responsive images and conditional loading help ensure fast load times across all devices.</p>
    `,
    author: "David Park",
    publishDate: "2025-01-08",
    category: "Design",
    tags: ["Responsive Design", "UX", "Mobile"],
    readTime: "10 min read",
    featured: false,
    image: "https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=800"
  },
  {
    id: 5,
    title: "JavaScript ES2024: New Features That Will Change How You Code",
    excerpt: "Explore the latest JavaScript features and how they can improve your development workflow and code quality.",
    content: `
      <p>JavaScript continues to evolve rapidly, with ES2024 bringing several exciting new features that promise to make our code more concise, readable, and powerful.</p>
      
      <h2>Temporal API</h2>
      <p>The new Temporal API addresses long-standing issues with JavaScript's Date object, providing a modern, immutable approach to working with dates and times.</p>
      
      <h2>Pattern Matching</h2>
      <p>Pattern matching brings powerful destructuring capabilities that make complex data manipulation more intuitive and less error-prone.</p>
      
      <h2>Enhanced Error Handling</h2>
      <p>New error handling features provide better debugging capabilities and more precise error information, making it easier to identify and fix issues in production applications.</p>
    `,
    author: "Lisa Wong",
    publishDate: "2025-01-05",
    category: "JavaScript",
    tags: ["JavaScript", "ES2024", "Features"],
    readTime: "7 min read",
    featured: false,
    image: "https://images.pexels.com/photos/4164418/pexels-photo-4164418.jpeg?auto=compress&cs=tinysrgb&w=800"
  },
  {
    id: 6,
    title: "Accessibility in Web Development: Building for Everyone",
    excerpt: "Understanding the importance of web accessibility and practical steps to make your websites inclusive for all users.",
    content: `
      <p>Web accessibility isn't just about compliance—it's about creating inclusive experiences that work for everyone, regardless of their abilities or the technologies they use to access the web.</p>
      
      <h2>Understanding WCAG Guidelines</h2>
      <p>The Web Content Accessibility Guidelines provide a comprehensive framework for creating accessible web content. Understanding these principles is essential for modern web development.</p>
      
      <h2>Practical Implementation</h2>
      <p>From semantic HTML to proper ARIA labels, there are many practical steps developers can take to improve accessibility. These improvements often benefit all users, not just those with disabilities.</p>
      
      <h2>Testing and Tools</h2>
      <p>Accessibility testing tools and techniques help identify and fix issues before they reach users. Regular testing should be an integral part of the development process.</p>
    `,
    author: "Jennifer Adams",
    publishDate: "2025-01-03",
    category: "Accessibility",
    tags: ["Accessibility", "Inclusive Design", "WCAG"],
    readTime: "11 min read",
    featured: true,
    image: "https://images.pexels.com/photos/3184298/pexels-photo-3184298.jpeg?auto=compress&cs=tinysrgb&w=800"
  }
];

export const categories = [
  "All",
  "Technology",
  "CSS",
  "React",
  "Design",
  "JavaScript",
  "Accessibility"
];