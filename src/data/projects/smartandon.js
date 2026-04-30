import smartandonImg from '../../assets/Experience/Smartandon Image 1.jpg'
import smartandonDashboardImg from '../../assets/Experience/SmartandonDashboard.png'

export default {
  title: 'Smartandon',
  category: 'Software Development Project',
  role: 'Software Engineer Intern',
  description: "<strong>Smartandon</strong> is a web-based <strong>manufacturing monitoring system</strong> designed to improve machine performance visibility and disruption handling in production environments.\n\nIn many manufacturing environments, machine disturbance reporting is still performed <strong>manually</strong>, resulting in delayed responses, fragmented documentation, and limited data for maintenance analysis. To address this challenge, I developed Smartandon, a <strong>digital Andon system</strong> that enables operators and supervisors to monitor machine conditions, report disturbances in <strong>real time</strong>, and analyze historical production issues through a centralized web platform.\n\nThe system integrates <strong>real-time reporting</strong>, <strong>historical problem tracking</strong>, and <strong>performance analytics</strong> to support faster maintenance decisions and more efficient production monitoring. By transforming manual reporting processes into a structured digital system, Smartandon improves information transparency and enables data-driven maintenance analysis through key metrics such as Mean Time to Repair <strong>(MTTR)</strong> and Mean Time Between Failures <strong>(MTBF)</strong>.",
  image: smartandonImg,
  image2: smartandonDashboardImg,
  techStack: ["Vue.js", "Node.js", "Express.js", "MySQL", "CoreUI", "REST API"],
  summary: [
    "Designed and developed a web-based manufacturing monitoring system to track machine performance.",
    "Built interactive dashboards using Vue.js and CoreUI to visualize MTTR, MTBF, and LTB metrics.",
    "Developed modular backend services using Node.js and Express.js with optimized RESTful APIs."
  ],
  problemContext: [
    "In manufacturing environments, machine disruptions can significantly impact production flow and operational efficiency. However, many factories still rely on <strong>manual reporting systems</strong> for documenting machine failures. This approach often leads to <strong>delayed responses</strong>, inconsistent documentation, and difficulty in analyzing historical maintenance data.",
    "Without a centralized monitoring platform, operators and maintenance teams have <strong>limited visibility</strong> into machine performance, making it difficult to identify recurring issues or measure production efficiency."
  ],
  solution: [
    "Smartandon was developed as a <strong>web-based Andon system</strong> that digitizes machine disturbance reporting and production monitoring. The system provides a <strong>centralized platform</strong> where operators can report machine issues instantly while supervisors and maintenance teams can monitor production conditions through real-time dashboards.",
    "The system stores all operational events in a <strong>structured database</strong>, allowing historical analysis of machine failures and enabling <strong>data-driven maintenance strategies</strong>."
  ],
  architecture: [
    "Smartandon is designed using a <strong>modular web application architecture</strong> that separates the system into frontend, backend, and database layers. The frontend is built using <strong>Vue.js</strong> with <strong>CoreUI</strong> components to provide a responsive and intuitive user interface.",
    "The backend is implemented using <strong>Node.js</strong> and <strong>Express.js</strong> to handle business logic, API routing, and data processing. A <strong>MySQL</strong> relational database is used to store machine disturbance records, historical problem logs, and production performance metrics.",
    "This architecture enables <strong>scalable data management</strong> and supports real-time monitoring of machine performance across production lines."
  ],
  contentTitle: "Key Features",
  content: [
    {
      heading: "Real-Time Machine Monitoring",
      text: "Smartandon provides a <strong>centralized dashboard</strong> that displays real-time information about machine status, production conditions, and operational disruptions. The dashboard aggregates data such as active problems, repair durations, and production performance metrics to help supervisors monitor factory operations efficiently."
    },
    {
      heading: "Machine Stop Input System",
      text: "Operators can directly report machine disturbances through the <strong>Machine Stop Input</strong> feature. The system records information such as machine name, problem category, and description of the issue. This input is stored instantly in the database and becomes part of the operational monitoring data."
    },
    {
      heading: "Historical Problem Tracking",
      text: "All machine disturbances are stored in the <strong>Problem History</strong> module. This feature allows users to search, filter, and analyze past problems based on machine name, production line, date range, and problem category."
    },
    {
      heading: "Performance Metrics (MTBF & MTTR)",
      text: "Smartandon automatically calculates maintenance performance indicators such as Mean Time to Repair <strong>(MTTR)</strong> and Mean Time Between Failures <strong>(MTBF)</strong>. These metrics help evaluate machine reliability and maintenance efficiency."
    },
    {
      heading: "Maintenance Analytics & Pareto Analysis",
      text: "The system provides analytical visualizations such as <strong>Pareto charts</strong> to identify the most frequent or impactful machine failures. This helps engineering teams focus on the root causes that have the greatest impact on production efficiency."
    }
  ],
  developmentProcess: [
    "The system was developed using the <strong>Agile methodology</strong> with a <strong>Feature-Driven Development (FDD)</strong> approach. Development was organized around specific features such as machine disturbance input, historical analysis, and dashboard visualization.",
    "Each feature was designed, implemented, and tested <strong>iteratively</strong> to ensure system stability and usability. This approach allowed continuous improvement based on system testing and feedback during development."
  ],
  impact: [
    "<strong>Digitalized</strong> manual machine disturbance reporting.",
    "<strong>Improved visibility</strong> of machine performance across production lines.",
    "Enabled <strong>structured historical documentation</strong> of machine failures.",
    "Supported <strong>data-driven maintenance decisions</strong> using MTBF and MTTR metrics.",
    "<strong>Reduced information delay</strong> between operators and maintenance teams."
  ],
  // Gallery Slider — tinggal tambahkan gambar di sini.
  // Format sederhana: gallery: [imgA, imgB, imgC]
  // Format lengkap: gallery: [{ src: imgA, alt: 'Foo', caption: 'Bar', position: 'object-top' }]
  galleryTitle: 'Project Gallery',
  gallery: [
    { src: smartandonImg, alt: 'Smartandon Presentation', caption: 'Demo presentation to the production team' },
    { src: smartandonDashboardImg, alt: 'Smartandon Dashboard', caption: 'Real-time monitoring dashboard' }
  ]
}
