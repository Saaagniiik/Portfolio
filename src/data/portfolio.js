export const portfolioData = {
  personal: {
    name: "Sagnik Majumder",
    initials: "SM",
    roles: [
      "Frontend Developer",
      "Student Developer",
      "React Enthusiast",
      "UI/UX Explorer"
    ],
    primaryRole: "Frontend Developer & Student Developer",
    college: "Swami Vivekanand Institute of Engineering and Technology",
    location: "Patiala, Punjab, India",
    email: "sagnik.majumder2505@gmail.com",
    github: "https://github.com/Saaagniiik",
    linkedin: "https://www.linkedin.com/in/sagnik-majumder-983297428/",
    resume: "https://drive.google.com/file/d/1VTy7k7x1fu1hmF7eERZ56zUKZqOXzTyk/view?usp=sharing",
    availability: "Available for Internships & Opportunities",
    avatar: "/profile.png",
    tagline: "Crafting modern, accessible, and high-performance web experiences with React and Tailwind CSS."
  },

  navLinks: [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Education", href: "#education" },
    { name: "Contact", href: "#contact" }
  ],

  about: {
    bio: [
      "I am Sagnik Majumder, a passionate Frontend Developer and undergraduate student at Swami Vivekanand Institute of Engineering and Technology, based in Patiala, Punjab, India.",
      "My core focus is on building clean, responsive, and intuitive web interfaces. I love turning design concepts into interactive web applications using React.js, Tailwind CSS, and modern JavaScript.",
      "I have a strong foundation in core programming languages like JavaScript, Python, Java, and C++, paired with a continuous curiosity to master state-of-the-art frontend tools and best practices."
    ],
    highlights: [
      {
        title: "Frontend Engineering",
        description: "Specialized in component-driven development with React.js and modern utility-first CSS using Tailwind.",
        icon: "layout"
      },
      {
        title: "Clean & Responsive Architecture",
        description: "Dedicated to writing clean, modular code with pixel-perfect responsive layouts on every device screen.",
        icon: "code"
      },
      {
        title: "Continuous Learning",
        description: "Always expanding knowledge in modern web performance, algorithmic problem solving, and modern UI tooling.",
        icon: "sparkles"
      }
    ],
    currentFocus: "Advancing modern React design patterns, component state architecture, and interactive web application workflows.",
    careerGoals: "Aiming to join a forward-thinking engineering team as a Frontend Developer / Software Engineer where I can build impactful products and contribute clean code."
  },

  skills: {
    categories: [
      {
        id: "all",
        label: "All Skills"
      },
      {
        id: "languages",
        label: "Languages"
      },
      {
        id: "frontend",
        label: "Frontend"
      },
      {
        id: "tools",
        label: "Tools"
      }
    ],
    list: [
      // Languages
      {
        name: "JavaScript",
        category: "languages",
        level: "Proficient",
        desc: "ES6+, DOM Manipulation, Async/Await, Modern APIs",
        badgeColor: "from-amber-400/20 to-yellow-500/20 border-yellow-500/30 text-yellow-300"
      },
      {
        name: "Python",
        category: "languages",
        level: "Intermediate",
        desc: "Data Structures, Automation, Scripting & Problem Solving",
        badgeColor: "from-blue-400/20 to-sky-500/20 border-blue-500/30 text-blue-300"
      },
      {
        name: "Java",
        category: "languages",
        level: "Intermediate",
        desc: "Object-Oriented Programming (OOP), Core Concepts",
        badgeColor: "from-orange-400/20 to-red-500/20 border-orange-500/30 text-orange-300"
      },
      {
        name: "C++",
        category: "languages",
        level: "Intermediate",
        desc: "Algorithms, STL, Memory Management, Problem Solving",
        badgeColor: "from-indigo-400/20 to-blue-600/20 border-indigo-500/30 text-indigo-300"
      },
      
      // Frontend
      {
        name: "React.js",
        category: "frontend",
        level: "Proficient",
        desc: "Hooks, Functional Components, Virtual DOM, Component State",
        badgeColor: "from-cyan-400/20 to-blue-500/20 border-cyan-500/30 text-cyan-300"
      },
      {
        name: "Tailwind CSS",
        category: "frontend",
        level: "Proficient",
        desc: "Responsive Utility Design, Custom Themes, Modern UI Layouts",
        badgeColor: "from-teal-400/20 to-cyan-500/20 border-teal-500/30 text-teal-300"
      },
      {
        name: "HTML5",
        category: "frontend",
        level: "Advanced",
        desc: "Semantic Structure, Accessibility (a11y), SEO Best Practices",
        badgeColor: "from-orange-500/20 to-amber-600/20 border-orange-500/30 text-orange-400"
      },
      {
        name: "CSS3",
        category: "frontend",
        level: "Proficient",
        desc: "Flexbox, Grid, Custom Keyframe Animations, Glassmorphism",
        badgeColor: "from-blue-500/20 to-indigo-600/20 border-blue-500/30 text-blue-400"
      },

      // Tools
      {
        name: "Git",
        category: "tools",
        level: "Proficient",
        desc: "Version Control, Branching Strategy, Merge & Collaboration",
        badgeColor: "from-rose-500/20 to-red-600/20 border-rose-500/30 text-rose-300"
      },
      {
        name: "GitHub",
        category: "tools",
        level: "Proficient",
        desc: "Repository Management, Code Hosting, Open Source Workflows",
        badgeColor: "from-purple-500/20 to-slate-600/20 border-purple-500/30 text-purple-300"
      },
      {
        name: "VS Code",
        category: "tools",
        level: "Advanced",
        desc: "Primary Development Environment, Debugging, Extensions",
        badgeColor: "from-sky-500/20 to-blue-700/20 border-sky-500/30 text-sky-300"
      },
      {
        name: "Figma",
        category: "tools",
        level: "Intermediate",
        desc: "UI Design Inspection, Prototyping, Wireframing to Code",
        badgeColor: "from-pink-500/20 to-violet-600/20 border-pink-500/30 text-pink-300"
      }
    ]
  },

  projects: [
    {
      id: "project-1",
      title: "Interactive Developer Portfolio",
      tagline: "Modern, responsive personal portfolio showcasing projects & skills",
      description: "A fast, high-performance portfolio website built with React and Tailwind CSS featuring smooth scroll navigation, glassmorphic UI components, dynamic skill filters, and a client-side contact workflow.",
      techStack: ["React.js", "Tailwind CSS", "JavaScript", "Vite", "Lucide Icons"],
      github: "https://github.com/Saaagniiik",
      liveDemo: "#home",
      featured: true,
      category: "Frontend",
      highlights: [
        "100% responsive across mobile, tablet, and widescreen monitors",
        "Clean component-driven architecture with modular data stores",
        "Client-side interaction validation with direct email copy helper"
      ]
    },
    {
      id: "project-2",
      title: "TaskFlow — Productivity & Task Board",
      tagline: "Component-based task manager with local persistence",
      description: "A clean productivity web application designed with React and Tailwind CSS for managing daily developer workflows, featuring category sorting, status transitions, and persistent local storage state.",
      techStack: ["React.js", "Tailwind CSS", "JavaScript", "LocalStorage"],
      github: "https://github.com/Saaagniiik",
      liveDemo: "https://github.com/Saaagniiik",
      featured: true,
      category: "Frontend",
      highlights: [
        "Interactive drag-and-drop / status column movement",
        "Persistent client-side state without external database requirements",
        "Dark mode glassmorphic UI cards with smooth hover transitions"
      ]
    },
    {
      id: "project-3",
      title: "Algorithmic Problem Solutions Repository",
      tagline: "Curated collection of data structures & algorithms implementations",
      description: "A structured repository containing optimized algorithmic problem solutions written in C++, Java, and Python, focusing on time and space complexity efficiency.",
      techStack: ["C++", "Java", "Python", "Data Structures", "Algorithms"],
      github: "https://github.com/Saaagniiik",
      liveDemo: "https://github.com/Saaagniiik",
      featured: true,
      category: "Algorithms",
      highlights: [
        "Implementation of core Data Structures (Arrays, Trees, Graphs)",
        "Optimized asymptotic time and space complexity solutions",
        "Documented code explanations for interview problem patterns"
      ]
    }
  ],

  education: [
    {
      degree: "Bachelor of Technology (B.Tech)",
      institution: "Swami Vivekanand Institute of Engineering and Technology",
      location: "Patiala, Punjab, India",
      status: "Undergraduate Student",
      period: "Present",
      description: "Pursuing engineering degree with a focus on Computer Science fundamentals, Software Engineering, Object-Oriented Programming, and Web Development technologies.",
      highlights: [
        "Focus on Web Technologies, Data Structures & Algorithms",
        "Active student developer participating in coding practice and frontend projects",
        "Hands-on project work in React, JavaScript, and modern UI engineering"
      ]
    }
  ],

  contactInfo: {
    email: "sagnik.majumder2505@gmail.com",
    location: "Patiala, Punjab, India",
    github: "https://github.com/Saaagniiik",
    linkedin: "https://www.linkedin.com/in/sagnik-majumder-983297428/",
    resume: "https://drive.google.com/file/d/1VTy7k7x1fu1hmF7eERZ56zUKZqOXzTyk/view?usp=sharing"
  }
};
