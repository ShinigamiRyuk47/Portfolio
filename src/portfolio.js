/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation"; // Rename to your file name for custom animation

// Splash Screen

const splashScreen = {
  enabled: true, // set false to disable splash screen
  animation: splashAnimation,
  duration: 2000 // Set animation duration as per your animation
};

// Summary And Greeting Section

const illustration = {
  animated: true // Set to false to use static SVG
};

const greeting = {
  username: "Aditya Bharambe",
  title: "Hi all, I'm Aditya",
  subTitle: emoji(
    "A passionate Robotics Engineer 🤖 working on intelligent, adaptive and collaborative robotic systems — blending controls 🎛️, planning 🧭, and SLAM 🗺️ to enable real-time autonomy. Experienced in ROS2 / Nav2 / DDS, multi-agent coordination, and soft robotic systems 🧠🤝."
),
  resumeLink:
    "/myresume.pdf", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/ShinigamiRyuk47",
  linkedin: "https://www.linkedin.com/in/aditya-bharambe",
  gmail: "adityabharambe45@gmail.com",
  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I do",
  subTitle: "Robotics Engineer 🤖 crafting intelligent, adaptive, and autonomous systems — blending controls 🎛️, planning 🧭, and real-world mechatronics 🦾.",
  skills: [
    emoji("⚙️ Develop control and motion-planning algorithms for autonomous and multi-agent coordination."),
    emoji("🧭 Implement robust SLAM and navigation pipelines in ROS2 / Nav2 / DDS."),
    emoji("🦾 Design soft actuators and embedded systems for responsive, human-safe robotics."),
    emoji("💻 Simulate and prototype robotic environments in Gazebo, Webots and Issac Sim."),
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

softwareSkills: [
  // --- Core Programming & Systems ---
  { skillName: "Python", fontAwesomeClassname: "fab fa-python" },
  { skillName: "C++", fontAwesomeClassname: "fas fa-code" },
  { skillName: "MATLAB", fontAwesomeClassname: "fas fa-square-root-alt" },
  { skillName: "Simulink", fontAwesomeClassname: "fas fa-project-diagram" },
  { skillName: "Linux", fontAwesomeClassname: "fab fa-linux" },
  { skillName: "Docker", fontAwesomeClassname: "fab fa-docker" },
  { skillName: "Git", fontAwesomeClassname: "fab fa-git-alt" },

  // --- Robotics Frameworks & Simulation ---
  { skillName: "ROS/ROS2", fontAwesomeClassname: "fas fa-robot" },
  { skillName: "Gazebo", fontAwesomeClassname: "fas fa-cubes" },
  { skillName: "PyBullet", fontAwesomeClassname: "fas fa-bullseye" },
  { skillName: "Webots", fontAwesomeClassname: "fas fa-network-wired" },
  { skillName: "Isaac Sim", fontAwesomeClassname: "fas fa-vr-cardboard" },

  // --- Perception, Sensors & Vision ---
  { skillName: "OpenCV", fontAwesomeClassname: "fas fa-camera" },
  { skillName: "IMU Sensors", fontAwesomeClassname: "fas fa-compass" },
  { skillName: "LIDAR", fontAwesomeClassname: "fas fa-dot-circle" },
  { skillName: "GPS", fontAwesomeClassname: "fas fa-map-marker-alt" },
  { skillName: "Cameras", fontAwesomeClassname: "fas fa-video" },

  // --- Design, Analysis & Fabrication ---
  { skillName: "SolidWorks", fontAwesomeClassname: "fas fa-cogs" },
  { skillName: "ANSYS", fontAwesomeClassname: "fas fa-drafting-compass" },
  { skillName: "3D Printing", fontAwesomeClassname: "fas fa-print" },

  // --- Embedded Systems & Hardware ---
  { skillName: "Arduino", fontAwesomeClassname: "fas fa-microchip" },
  { skillName: "Raspberry Pi", fontAwesomeClassname: "fa-solid fa-microchip" },
],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "Carnegie Mellon University",
      logo: require("./assets/images/cmuLogo.png"),
      subHeader: "Master of Science in Mechanical Engineering - Research",
      duration: "August 2023 - May 2025",
      desc: "Graduate researcher specializing in soft robotics, control systems, and multi-agent planning and coordination.",
      descBullets: [
        "Coursework: Robot Dynamics & Analysis, Simultaneous Localization & Mapping (SLAM), Planning & Decision Making, Multi-agent Path Planning, Modern Control Theory, Advanced Controls, Soft Robotics",
        "Course Assistant: Advanced Control Systems Integration, Robot Dynamics & Analysis"
      ]
    },
    {
      schoolName: "Vishwakarma Institute of Technology",
      logo: require("./assets/images/vitLogo.png"),
      subHeader: "Bachelor of Technology in Mechanical Engineering",
      duration: "August 2019 - May 2023",
      desc: "Completed undergraduate studies focused on robotics, automation, and mechanical design.",
      descBullets: [
        "Coursework: Robot Mechanics and Control, Machine Design, FEA, FEM, Data Structures, Data Science and ML, Hybrid Vehicles",
        "Leadership: Student Mentor (Mechanical Department)"
      ]
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Control & Planning Systems 🎛️",
      progressPercentage: "90%",
    },
    {
      Stack: "Perception, SLAM & Navigation 🧭",
      progressPercentage: "85%",
    },
    {
      Stack: "Mechanical Design & Embedded Systems 🦾",
      progressPercentage: "80%",
    },
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Software Engineer",
      company: "Facebook",
      companylogo: require("./assets/images/facebookLogo.png"),
      date: "June 2018 – Present",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      descBullets: [
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit"
      ]
    },
    {
      role: "Front-End Developer",
      company: "Quora",
      companylogo: require("./assets/images/quoraLogo.png"),
      date: "May 2017 – May 2018",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
    },
    {
      role: "Software Engineer Intern",
      company: "Airbnb",
      companylogo: require("./assets/images/airbnbLogo.png"),
      date: "Jan 2015 – Sep 2015",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
    }
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: true // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "Big Projects",
  subtitle: "SOME STARTUPS AND COMPANIES THAT I HELPED TO CREATE THEIR TECH",
  projects: [
    {
      image: require("./assets/images/saayaHealthLogo.webp"),
      projectName: "Saayahealth",
      projectDesc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      footerLink: [
        {
          name: "Visit Website",
          url: "http://saayahealth.com/"
        }
        //  you can add extra buttons here.
      ]
    },
    {
      image: require("./assets/images/nextuLogo.webp"),
      projectName: "Nextu",
      projectDesc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      footerLink: [
        {
          name: "Visit Website",
          url: "http://nextu.se/"
        }
      ]
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Achievements And Certifications 🏆 "),
  subtitle:
    "Achievements, Certifications, Award Letters and Some Cool Stuff that I have done !",

  achievementsCards: [
    {
      title: "Google Code-In Finalist",
      subtitle:
        "First Pakistani to be selected as Google Code-in Finalist from 4000 students from 77 different countries.",
      image: require("./assets/images/codeInLogo.webp"),
      imageAlt: "Google Code-In Logo",
      footerLink: [
        {
          name: "Certification",
          url: "https://drive.google.com/file/d/0B7kazrtMwm5dYkVvNjdNWjNybWJrbndFSHpNY2NFV1p4YmU0/view?usp=sharing"
        },
        {
          name: "Award Letter",
          url: "https://drive.google.com/file/d/0B7kazrtMwm5dekxBTW5hQkg2WXUyR3QzQmR0VERiLXlGRVdF/view?usp=sharing"
        },
        {
          name: "Google Code-in Blog",
          url: "https://opensource.googleblog.com/2019/01/google-code-in-2018-winners.html"
        }
      ]
    },
    {
      title: "Google Assistant Action",
      subtitle:
        "Developed a Google Assistant Action JavaScript Guru that is available on 2 Billion devices world wide.",
      image: require("./assets/images/googleAssistantLogo.webp"),
      imageAlt: "Google Assistant Action Logo",
      footerLink: [
        {
          name: "View Google Assistant Action",
          url: "https://assistant.google.com/services/a/uid/000000100ee688ee?hl=en"
        }
      ]
    },

    {
      title: "PWA Web App Developer",
      subtitle: "Completed Certifcation from SMIT for PWA Web App Development",
      image: require("./assets/images/pwaLogo.webp"),
      imageAlt: "PWA Logo",
      footerLink: [
        {name: "Certification", url: ""},
        {
          name: "Final Project",
          url: "https://pakistan-olx-1.firebaseapp.com/"
        }
      ]
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {
  title: "Blogs",
  subtitle:
    "With Love for Developing cool stuff, I love to write and teach others what I have learnt.",
  displayMediumBlogs: "false", // Set true to display fetched medium blogs instead of hardcoded ones
  blogs: [
    {
      url: "https://blog.usejournal.com/create-a-google-assistant-action-and-win-a-google-t-shirt-and-cloud-credits-4a8d86d76eae",
      title: "Win a Google Assistant Tshirt and $200 in Google Cloud Credits",
      description:
        "Do you want to win $200 and Google Assistant Tshirt by creating a Google Assistant Action in less then 30 min?"
    },
    {
      url: "https://medium.com/@saadpasta/why-react-is-the-best-5a97563f423e",
      title: "Why REACT is The Best?",
      description:
        "React is a JavaScript library for building User Interface. It is maintained by Facebook and a community of individual developers and companies."
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Talks Sections

const talkSection = {
  title: "TALKS",
  subtitle: emoji(
    "I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE 😅"
  ),

  talks: [
    {
      title: "Build Actions For Google Assistant",
      subtitle: "Codelab at GDG DevFest Karachi 2019",
      slides_url: "https://bit.ly/saadpasta-slides",
      event_url: "https://www.facebook.com/events/2339906106275053/"
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

  // Please Provide with Your Podcast embeded Link
  podcast: [
    "https://anchor.fm/codevcast/embed/episodes/DevStory---Saad-Pasta-from-Karachi--Pakistan-e9givv/a-a15itvo"
  ],
  display: false // Set false to hide this section, defaults to true
};

// Resume Section
const resumeSection = {
  title: "Resume",
  subtitle: "Feel free to download my resume",

  // Please Provide with Your Podcast embeded Link
  display: true // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Discuss a project or just want to say hi? My Inbox is open for all.",
  number: "+1-551-388-6227",
  email_address: "adityabharambe45@gmail.com"
};

// Twitter Section

const twitterDetails = {
  userName: "twitter", //Replace "twitter" with your twitter username without @
  display: false // Set true to display this section, defaults to false
};

const isHireable = true; // Set false if you are not looking for a job. Also isHireable will be display as Open for opportunities: Yes/No in the GitHub footer

export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails,
  isHireable,
  resumeSection
};
