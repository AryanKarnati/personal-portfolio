// Navigation Bar SECTION
const navBar = {
  show: true,
};

// Main Body SECTION
const mainBody = {
  gradientColors: "#4484ce, #1ad7c0, #ff9b11, #9b59b6, #ff7f7f, #ecf0f1",
  firstName: "Aryan",
  middleName: "",
  lastName: "Karnati",
  message: " Designing low-level systems with high-impact results. ",
  icons: [
    {
      image: "fa-github",
      url: "https://github.com/AryanKarnati",
    },
    {
      image: "fa-linkedin",
      url: "https://www.linkedin.com/in/aryankarnati/",
    },
  ],
};

// ABOUT SECTION
// If you want the About Section to show a profile picture you can fill the profilePictureLink either with:
//a) your Instagram username
//      i.e:profilePictureLink:"johnDoe123",
//b) a link to an hosted image
//      i.e:profilePictureLink:"www.picturesonline.com/johnDoeFancyAvatar.jpg",
//c) image in "editable-stuff" directory and use require("") to import here,
//      i.e: profilePictureLink: require("../editable-stuff/hashirshoaeb.png"),
//d) If you do not want any picture to be displayed, just leave it empty :)
//      i.e: profilePictureLink: "",
// For Resume either provide link to your resume or import from "editable-stuff" directory
//     i.e resume: require("../editable-stuff/resume.pdf"),
//         resume: "https://docs.google.com/document/d/13_PWdhThMr6roxb-UFiJj4YAFOj8e_bv3Vx9UHQdyBQ/edit?usp=sharing",

const about = {
  show: true,
  heading: "About Me",
  imageLink: require("../editable-stuff/aryan.png"),
  imageSize: 375,
  message:
    "My name is Aryan Karnati. I’m an Electrical Engineering Co-op student at McMaster University with a strong interest in embedded systems, digital design, and hardware development. I’m passionate about applying my technical skills to solve real-world problems and continuously learning through hands-on experiences. In my free time, I enjoy exploring new technologies and building personal projects.",
  resume: require("../editable-stuff/Resume_AryanKarnati.pdf"),
};

const experiences = {
  show: true,
  id: "experience",
  heading: "Experience",
  data: [
    {
      role: 'Quality Managment Intern',
      company: "Mackenzie Investments",
      // team: "Team: Deploys",
      customWidth: "40%",
      companylogo: require('../assets/img/mackenzie.png'),
      date: 'May 2025 – Present',
    },
    {
      role: 'High Voltage Circuit Designer',
      company: "MAC Formula Electric",
      // team: "Team: Deploys",
      companylogo: require('../assets/img/MACFE.png'),
      date: 'September 2024 – Present',
    },
  ]
}

// PROJECTS SECTION
// Setting up project lenght will automatically fetch your that number of recently updated projects, or you can set this field 0 to show none.
//      i.e: reposLength: 0,
// If you want to display specfic projects, add the repository names,
//      i.e ["repository-1", "repo-2"]
const repos = {
  show: true,
  heading: "Recent Projects",
  gitHubUsername: "AryanKarnati", //i.e."johnDoe12Gh"
  reposLength: 0,
  specificRepos: ["Spatial-Mapping-LIDAR-System","STM32-Bootloader","QonnectR", "personal-portfolio-website"],
};

// Leadership SECTION
const leadership = {
  show: false,
  heading: "Leadership",
  message:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Vitae auctor eu augue ut lectus arcu bibendum at varius. Libero justo laoreet sit amet cursus sit amet. Imperdiet dui accumsan sit amet nulla facilisi morbi. At auctor urna nunc id. Iaculis urna id volutpat lacus laoreet non curabitur gravida. Et magnis dis parturient montes nascetur ridiculus mus mauris. In nisl nisi scelerisque eu ultrices vitae auctor. Mattis nunc sed blandit libero volutpat sed cras ornare. Pulvinar neque laoreet suspendisse interdum consectetur libero.",
  images: [
    { 
      img: require("../editable-stuff/aryan.png"), 
      label: "First slide label", 
      paragraph: "Nulla vitae elit libero, a pharetra augue mollis interdum." 
    },
    { 
      img: require("../editable-stuff/aryan.png"), 
      label: "Second slide label", 
      paragraph: "Nulla vitae elit libero, a pharetra augue mollis interdum." 
    },
  ],
  imageSize: {
    width:"615",
    height:"450"
  }
};

// SKILLS SECTION
const skills = {
  show: true,
  heading: "Skills",
  hardSkills: [
    { name: "C/C++", value: 95 },
    { name: "Python", value: 80 },
    { name: "SystemVerilog", value: 90 },
    { name: "Verilog", value: 95 },
    { name: "VHDL", value: 75 },
    { name: "Java", value: 60 },
    { name: "Git", value: 70 },
    { name: "Bash", value: 70 },
  ],
  softSkills: [
    { name: "MATLAB", value: 80 },
    { name: "Quartus", value: 90 },
    { name: "ModelSim", value: 75 },
    { name: "Altium Desginer", value: 85 },
    { name: "Keil uVision", value: 75 },
    { name: "LTSpice", value: 80 },
    { name: "VS Code", value: 70 },
    { name: "SymbiYosys", value: 70 },
  ],
};

// GET IN TOUCH SECTION
const getInTouch = {
  show: true,
  heading: "Get In Touch",
  message:
    "I'm currently looking for embedded systems and digital design/verification internships. If you have any opportunities or would like to connect, please feel free to reach out!",
  email: "19aryank@gmail.com@gmail.com",
};


// Blog SECTION
// const blog = {
//   show: false,
// };

export { navBar, mainBody, about, repos, skills, leadership, getInTouch, experiences };
