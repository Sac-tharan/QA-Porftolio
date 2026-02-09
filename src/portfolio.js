/* Change this file to get your personal Portfolio */

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation";

/* Splash Screen */
const splashScreen = {
  enabled: true,
  animation: splashAnimation,
  duration: 2000
};

/* Illustration */
const illustration = {
  animated: true
};

/* Greeting Section */
const greeting = {
  username: "Sasitharan",
  title: "Hi, I'm Sasitharan 👋",
  subTitle: emoji(
    "Software QA Automation Engineer 🚀 with 3+ years of experience in Selenium (Python & Java), API Testing, CI/CD, and hands-on Full Stack Development using Laravel, MySQL, React & Node.js."
  ),
  resumeLink:
    "https://drive.google.com/file/d/1aEZY8EtZtj0m6mfq-lnFMC5BAo-Cantu/view?usp=drive_link",
  displayGreeting: true
};


/* Social Media Links */
const socialMediaLinks = {
  github: "https://github.com/Sac-tharan",
  linkedin: "https://linkedin.com/in/sasi-tharan",
  gmail: "sasi.sasitharan12@gmail.com",
  display: true
};

/* Skills Section */
const skillsSection = {
  title: "What I Do",
  subTitle: "AUTOMATION • QA • FULL STACK DEVELOPMENT",
  skills: [
    emoji("⚡ Automation Testing using Selenium (Python & Java), Playwright"),
    emoji("⚡ API & Performance Testing with Postman, REST Assured, JMeter"),
    emoji("⚡ CI/CD Integration using Jenkins & GitHub Actions"),
    emoji("⚡ Full Stack Development with Laravel, MySQL, React & REST APIs")
  ],
  softwareSkills: [
    { skillName: "Python", fontAwesomeClassname: "fab fa-python" },
    { skillName: "Java", fontAwesomeClassname: "fab fa-java" },
    { skillName: "Selenium", fontAwesomeClassname: "fas fa-robot" },
    { skillName: "Playwright", fontAwesomeClassname: "fas fa-code" },
    { skillName: "Laravel", fontAwesomeClassname: "fab fa-laravel" },
    { skillName: "JavaScript", fontAwesomeClassname: "fab fa-js" },
    { skillName: "React", fontAwesomeClassname: "fab fa-react" },
    { skillName: "MySQL", fontAwesomeClassname: "fas fa-database" },
    { skillName: "Git", fontAwesomeClassname: "fab fa-github" },
    { skillName: "Jenkins", fontAwesomeClassname: "fab fa-jenkins" }
  ],
  display: true
};

/* Education */
const educationInfo = {
  display: true,
  schools: [
    {
      schoolName: "London TEC City Campus",
      subHeader: "Bachelor of Computing",
      duration: "2021 - 2024",
      desc: "Focused on software engineering, web development, and system design."
    },
    {
      schoolName: "ICBT Campus",
      subHeader: "HND in Software Engineering",
      duration: "2022 - 2023",
      desc: "Strong foundation in SDLC, testing methodologies, and programming."
    }
  ]
};

/* Skill Progress */
const techStack = {
  viewSkillBars: true,
  experience: [
    { Stack: "QA Automation (Selenium & Playwright)", progressPercentage: "90%" },
    { Stack: "Manual Testing", progressPercentage: "85%" },
    { Stack: "Full Stack Development (Laravel + React)", progressPercentage: "75%" },
    { Stack: "Python Development & Web Scraping", progressPercentage: "80%" },
    { Stack: "API Testing & CI/CD Integration", progressPercentage: "80%" }
  ],
  displayCodersrank: false
};


/* Work Experience */
const workExperiences = {
  display: true,
  experience: [
    {
      role: "Software QA Automation Engineer",
      company: "Infinit.lk (Sri Lanka / Japan)",
      date: "March 2023 – Present",
      desc: "Automation-focused QA Engineer working with global teams.",
      descBullets: [
        "Built Selenium automation frameworks (Python & Java)",
        "Increased regression coverage by 40%",
        "Integrated automation with CI/CD pipelines",
        "Performed API automation testing"
      ]
    },
    {
      role: "Software QA Intern",
      company: "ILT Software",
      date: "Jun 2022 – Dec 2022",
      descBullets: [
        "Web & Android application testing",
        "Selenium, Appium, Katalon, JMeter",
        "Test case creation & defect reporting"
      ]
    }
  ]
};

const bigProjects = {
  title: "Projects",
  subtitle: "REAL-WORLD AUTOMATION & FULL STACK PROJECTS",
  projects: [
    {
      projectName: "POS System (Laravel)",
      projectDesc:
        "Point-of-Sale system built with Laravel for inventory, sales, and customer management.",
      video: require("./assets/videos/inventory-demo.mp4"),
      footerLink: [
        {
          name: "GitHub",
          url: "https://github.com/Sac-tharan/Pos-System-Laravel"
        }
      ]
    },
    {
      projectName: "Eseat Booking Webscrapper",
      projectDesc:
        "Python web scraping project for automating seat booking and data collection.",
      video: require("./assets/videos/eseat-demo.mp4"),
      footerLink: [
        {
          name: "GitHub",
          url: "https://github.com/Sac-tharan/Eseat-Booking-Webscrapper"
        }
      ]
    },
    {
      projectName: "Automating Inventory Management",
      projectDesc:
        "Selenium + Python automation for inventory CRUD operations.",
      video: require("./assets/videos/inventory-demo.mp4"),
      footerLink: [
        {
          name: "GitHub",
          url: "https://github.com/Sac-tharan/Automating-Inventory-Management-Selenium-Python-"
        }
      ]
    },
    {
      projectName: "Dealzbay.lk (E-commerce Platform)",
      projectDesc:
        "Laravel backend + Next.js frontend with REST APIs.",
       video: require("./assets/videos/inventory-demo.mp4"),
      footerLink: [
        {
          name: "GitHub",
          url: "https://github.com/Sac-tharan/Dealzbay-Admin"
        }
      ]
    },
    {
      projectName: "Livestock Management System CRM",
      projectDesc:
        "Laravel & MySQL based CRM with AI health predictions.",
       video: require("./assets/videos/livestock.mp4"),
      footerLink: [
        {
          name: "Live Demo",
          url: "http://fms.uzhavarsandhai.in/"
        }
      ]
    }
  ],
  display: true
};


/* Open Source (hidden, but keeps "View More Projects" button) */
// const openSource = {
//   showGithubProfile: true, // enables the "More Projects" button
//   display: false           // hides Open Source section itself
// };



/* Achievements / Certifications */
const achievementSection = {
  title: emoji("Certifications & Highlights 🏆"),
  subtitle: "Automation • QA • Engineering",
  achievementsCards: [
    {
      title: "AWS Skill Builder – Learner Guide",
      subtitle: "Certificate of Completion (February 2024)",
      image: require("./assets/images/aws.png"),
      imageAlt: "AWS Skill Builder",
      footerLink: []
    },
    {
      title: "Java Programming",
      subtitle: "Great Learning Academy – Certificate of Completion (2023)",
      image: require("./assets/images/java.png"),
      imageAlt: "Java Programming",
      footerLink: []
    },
    {
      title: "Playwright Automation Testing (Foundation)",
      subtitle: "Passed Certification Assessment",
      image: require("./assets/images/playwright.png"),
      imageAlt: "Playwright Automation",
      footerLink: []
    },
    {
      title: "Laravel Framework for Beginners",
      subtitle: "Alison – Certificate of Completion",
      image: require("./assets/images/laravel.png"), // Add a Laravel logo in assets/images
      imageAlt: "Laravel Framework",
      footerLink: []
    }
  ],
  display: true
};


/* Disabled Sections */
const blogSection = { display: false };
const talkSection = { display: false };
const podcastSection = { display: false };

/* Resume Section */
const resumeSection = {
  title: "Resume",
  subtitle: "Download my resume",
  display: true
};

/* Contact */
const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle: "Open to exciting opportunities in QA Automation, Full Stack Development, and Software Engineering.",
  number: "+94 77 872 0065",
  email_address: "sasi.sasitharan12@gmail.com"
};

/* Twitter */
const twitterDetails = {
  userName: "",
  display: false
};

const isHireable = true;

export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  bigProjects,
  // openSource,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails,
  isHireable,
  resumeSection
};