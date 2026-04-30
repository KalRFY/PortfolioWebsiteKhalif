import robotInspectionImg from '../../assets/Experience/Robot Inspection 1.jpg'

export default {
  title: 'Robot Inspection System',
  category: 'Software Engineering Project',
  role: 'Frontend Developer',
  description: "The <strong>Robot Inspection System</strong> is a web-based monitoring and control interface designed to support automated inspection robots used in industrial environments.\n\nThe system enables engineers and operators to monitor robot inspection processes, configure camera settings, manage inspection routing, and interact with inspection data through a web dashboard.\n\nMy role in this project focused on <strong>architecting and developing the frontend application from scratch</strong>, ensuring system stability, and seamlessly integrating it with a backend system built using <strong>Flask</strong> and <strong>REST APIs</strong>.",
  image: robotInspectionImg,
  imagePosition: 'object-top',
  techStack: ["Vue.js", "JavaScript", "HTML", "CSS", "Flask (Python)", "REST API", "PostgreSQL"],
  summary: [
    "Architected and developed the frontend application from scratch using Vue.js.",
    "Built a highly responsive UI to monitor industrial robot inspection processes.",
    "Integrated the newly built frontend with Flask-based REST APIs."
  ],
  problemContext: [
    "Inspection robots are used to monitor production environments, but the engineers previously lacked a dedicated, reliable interface to interact with the inspection data and control the robots effectively.",
    "To address this, there was a critical need to build a <strong>stable and structured web interface from the ground up</strong>. The goal of the project was to design the frontend architecture and create a clean, intuitive application that integrates smoothly with the backend inspection services."
  ],
  architecture: [
    "The system follows a scalable <strong>client–server architecture</strong>:",
    "<strong>Frontend:</strong> A Vue.js web application used as the primary operator dashboard.",
    "<strong>Backend:</strong> Flask-based API services that process robot inspection data.",
    "<strong>Database:</strong> PostgreSQL is used to store inspection data and system configurations.",
    "<strong>System Flow:</strong> Operators access the dashboard through the web interface. The Vue.js frontend sends requests to Flask REST APIs. The backend services process robot inspection data and configuration parameters, allowing the frontend to render inspection information and system status. The frontend acts as the main control layer for interacting with the inspection infrastructure."
  ],
  contentTitle: "Key Features",
  content: [
    { heading: "Robot Inspection Dashboard", text: "Displays inspection activities and monitoring data through a structured web interface that allows users to observe system status and inspection workflows." },
    { heading: "Inspection Routing Interface", text: "Allows operators to manage and visualize robot inspection routes within the system interface." },
    { heading: "Camera Settings Configuration", text: "Provides a configuration page where camera parameters used by the inspection robot can be adjusted through the web interface." },
    { heading: "Frontend–Backend API Integration", text: "The frontend communicates with backend services through <strong>REST APIs</strong> built with Flask, enabling data exchange between the web dashboard and the inspection system." },
    { heading: "Scalable UI Architecture", text: "Built a highly responsive and reliable user interface from scratch, ensuring long-term maintainability and smooth user interactions." }
  ],
  engineering: [
    "Architected and implemented the entire frontend routing structure using <strong>Vue.js</strong>.",
    "Developed modular UI components for robot inspection monitoring features.",
    "Designed and developed the robot inspection dashboard layout to ensure high usability.",
    "Built the camera settings configuration page from the ground up.",
    "Established a robust state management and component structure for system interaction.",
    "Integrated the newly built frontend with <strong>Flask-based REST APIs</strong>.",
    "Collaborated in technical discussions regarding system architecture and API contract design."
  ],
  challenges: [
    "One major challenge was <strong>building a frontend interface from scratch</strong> and integrating it with an independent backend system built using Flask APIs. Establishing clear communication and ensuring compatibility between new frontend routes, API endpoints, and data structures required careful planning and iterative testing.",
    "Another challenge involved designing an intuitive inspection interface tailored for industrial operators while ensuring the application remained highly performant.",
    "Through iterative development and continuous feedback, the newly developed frontend became a stable and reliable control layer for the entire system."
  ],
  impact: [
    "Delivered a <strong>highly usable and stable</strong> inspection platform built entirely from scratch.",
    "Allowed operators to interact with the inspection system <strong>efficiently</strong>, introducing structured routing and a clean UI to simplify system navigation.",
    "Established a solid frontend foundation that is <strong>easy to maintain and extend</strong> for future industrial system integrations."
  ],
  lessonsLearned: [
    "This project provided hands-on experience in developing web interfaces for <strong>industrial systems</strong> and integrating frontend applications with existing backend infrastructures.",
    "It also strengthened understanding of <strong>REST API integration</strong>, frontend architecture design, debugging complex UI systems, and collaborating in engineering environments.",
    "The experience helped build stronger skills in designing maintainable web applications that interact with real-world systems."
  ]
}
