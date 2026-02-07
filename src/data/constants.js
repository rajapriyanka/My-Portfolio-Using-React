export const Bio = {
  name: "Rajapriyanka R",
  roles: ["Full Stack Developer", "CSE Graduate"],
  description: "Code. Create. Impact.",
  github: "https://github.com/rajapriyanka",
  resume: "https://drive.google.com/file/d/1lCu9fNUtOc0Y_eYqhMX84ZF6fyLgWgD8/view?usp=sharing",
  linkedin: "https://www.linkedin.com/in/rajapriyankar/",
  email: "rajapriyanka1101@gmail.com",
};

// ================= SKILLS =================
export const skills = [
  {
    title: "Frontend",
    skills: [
      { name: "React JS", image: "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDov..." },
      { name: "Redux", image: "https://d33wubrfki0l68.cloudfront.net/.../redux.svg" },
      { name: "Thymeleaf", image: "https://www.thymeleaf.org/images/thymeleaf.png" },
      { name: "HTML", image: "https://www.w3.org/html/logo/badge/html5-badge-h-solo.png" },
      { name: "CSS", image: "https://upload.wikimedia.org/wikipedia/commons/d/d5/CSS3_logo_and_wordmark.svg" },
      { name: "JavaScript", image: "https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png" },
    ],
  },
  {
    title: "Backend",
    skills: [
      { name: "Java", image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg" },
      { name: "Spring Boot", image: "https://raw.githubusercontent.com/devicons/devicon/master/icons/spring/spring-original-wordmark.svg" },
      { name: "REST API", image: "https://cdn-icons-png.flaticon.com/512/888/888879.png" },
      { name: "JWT Authentication", image: "https://jwt.io/img/pic_logo.svg" },
      { name: "MySQL", image: "https://raw.githubusercontent.com/devicons/devicon/master/icons/mysql/mysql-original-wordmark.svg" },
      { name: "PostgreSQL", image: "https://www.postgresql.org/media/img/about/press/elephant.png" },
      { name: "Node.js", image: "https://raw.githubusercontent.com/devicons/devicon/master/icons/nodejs/nodejs-original-wordmark.svg" },
      { name: "RabbitMQ", image: "https://cdn.worldvectorlogo.com/logos/rabbitmq.svg" },
      { name: "MQTT", image: "https://mqtt.org/assets/downloads/mqtt-logo.png" },
      { name: "Swagger", image: "https://static1.smartbear.co/swagger/media/assets/images/swagger_logo.svg" },
    ],
  },
  {
    title: "Others",
    skills: [
      { name: "Git", image: "https://git-scm.com/images/logos/downloads/Git-Icon-1788C.png" },
      { name: "GitHub", image: "https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png" },
      { name: "Netlify", image: "https://seeklogo.com/images/N/netlify-logo-BD8F8A77E2-seeklogo.com.png" },
      { name: "Vercel", image: "https://raw.githubusercontent.com/devicons/devicon/master/icons/vercel/vercel-original-wordmark.svg" },
      { name: "Spring Tool Suite", image: "https://avatars.githubusercontent.com/u/317776?s=200&v=4" },
      { name: "VS Code", image: "https://upload.wikimedia.org/wikipedia/commons/9/9a/Visual_Studio_Code_1.35_icon.svg" },
      { name: "Postman", image: "https://www.svgrepo.com/show/354202/postman-icon.svg" },
    ],
  },
];

// ================= EXPERIENCE =================
export const experiences = [
  {
    id: 1,
    role: "Software Developer",
    company: "TechSwing Solutions Pvt. Ltd.",
    date: "Feb 2026 - Present",
    img: "/techSwingSolutions.jpg",
    skills: ["Java", "Spring Boot", "PostgreSQL"],
  },
  {
    id: 2,
    role: "Technical Consultant",
    company: "VVASAI Software Solutions Pvt. Ltd.",
    date: "Jul 2025 - Present",
    img: "/vvasai.jpeg",
    skills: ["Node.js", "Spring Boot", "React JS", "PostgreSQL"],
  },
  {
    id: 3,
    role: "Java Full Stack Developer Intern",
    company: "Infosys Springboard",
    date: "Nov 2024 - Jan 2025",
    desc: "Developed the 'All is Well Pharma Automation System' using Java, Spring Boot, React JS, and MySQL.",
    img: "/infosys.png",
    skills: ["Java", "Spring Boot", "React JS", "MySQL"],
  },

];

// ================= EDUCATION =================
export const education = [
  {
    id: 0,
    img: "/pits.jpeg",
    school: "Parisutham Institute of Technology and Science, Thanjavur",
    date: "Nov 2021 - May 2025",
    grade: "8.50 CGPA (with Honors)",
    degree: "BE – Computer Science and Engineering (Honors in Full Stack Development)",
    desc: "Strong foundation in DSA, OOP, DBMS, OS, CN with hands-on full stack project experience.",
  },
  {
    id: 1,
    img: "/kalaimagal.jpeg",
    school: "Kalaimagal Higher Secondary School, Thanjavur",
    date: "Jun 2020 - May 2021",
    grade: "88%",
    degree: "HSC (XII)",
  },
  {
    id: 2,
    img: "/donbosco.png",
    school: "Don Bosco School, Trichy",
    date: "Jun 2018 - May 2019",
    grade: "91%",
    degree: "SSLC (X)",
  },
];

// ================= PROJECTS =================
export const projects = [
  {
    id: 0,
    title: "E-Commerce Application",
    date: "Jun 2023 - Jul 2023",
    image: "/ecommerce.jpeg",
    description: "Responsive e-commerce app with cart, authentication, and payment integration.",
    tags: ["HTML", "CSS", "JavaScript"],
    github: "https://github.com/rajapriyanka/E-Commerce-Application-On-IBM-Cloud-Foundry",
  },
  {
    id: 1,
    title: "Banking Website",
    date: "Aug 2023 - Sep 2023",
    image: "/Banking.png",
    description: "Role-based banking system with account management and transactions.",
    tags: ["Spring Boot", "Thymeleaf", "MySQL"],
    github: "https://github.com/rajapriyanka/Riyadhya-Banking-Website.git",
  },
  {
    id: 2,
    title: "Pharmacy Management System",
    date: "Oct 2023 - Dec 2023",
    image: "/Pharma.png",
    description: "CRUD-based pharmacy system with billing and reorder alerts.",
    tags: ["Spring Boot", "Thymeleaf", "MySQL"],
    github: "https://github.com/rajapriyanka/Pharma-Automation-System.git",
  },
  {
    id: 3,
    title: "Unihub – Educational Management System",
    date: "May 2025",
    image: "/Unihub.png",
    description: "Automated timetable, attendance, and leave management system.",
    tags: ["Spring Boot", "React JS", "MySQL"],
    github: "https://github.com/rajapriyanka/UNIHUB.git",
  },
  {
    id: 4,
    title: "AI Resume Analyzer",
    date: "Jul 2025",
    image: "/Ai.png",
    description: "AI-powered resume analysis with job match optimization.",
    tags: ["React JS", "Puter JS"],
    github: "https://github.com/rajapriyanka/AI-Resume-Analyzer.git",
    webapp: "https://ai-resume-analyzer-vert-nine.vercel.app/",
  },
];





