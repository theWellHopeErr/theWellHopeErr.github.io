const projects = [
  {
    title: "Cynological Analyser",
    description:
      "A web application for the classification of canine breeds using a neural network built for cynological analysis of canine breeds with the help of an image URL using TensorFlow. Details about the predicted breed are scraped from the internet using web scrapers. The Machine Learning Model is developed with TensorFlow and Keras Library in Google Colabs.",
    stack: ["TensorFlow", "Keras", "Flask", "Bootstrap"],
    code: "https://github.com/theWellHopeErr/Cynological-Analyser",
    img: "assets/img/cynalogical-analyser.png",
    date: "MAR 2020",
  },
  {
    title: "Data Storage and Analytics with Dashboard",
    description:
      "A cross-platform desktop application developed to collect, store, and visualize their student's data for the schools in the state of Sikkim. A secure offline application as the network connectivity in Sikkim is not reliable. Data visualizations with various graphs and analytics provided at the block, district, and state levels. ", //It uses a centralized PostgreSQL database for storing the student's data at the Directorate level and a local SQLite database for storing the required data for the offline connection.",
    stack: ["Electron JS", "Node.js", "ExpressJS", "PostgreSQL", "SQLite"],
    code: "https://github.com/theWellHopeErr/SG434_418_Teapots",
    img: "assets/img/sg434.png",
    date: "AUG 2020",
  },
  {
    title: "Skill Inventory Dashboard ",
    description:
      "A website developed for WABCO to display the skill overview of all employees in the company and allot them with machines with which their skills match. So when an employee with lesser expertise tries to work on a complex instrument, they will not be allowed to do so. The number of employees assigned to each operating device can also be monitored and managed with this website.",
    stack: ["React", "Express.js", "Node.js", "MongoDB"],
    img: "assets/img/wabco.png",
    date: "SEP 2019",
  },
  {
    title: "Portfolio Website",
    description:
      "A personal portfolio website on Github pages. The Website is designed with React library. It showcases my skills, experience, education, and projects.",
    stack: ["React"],
    code: "https://github.com/theWellHopeErr/theWellHopeErr.github.io",
    site: "https://theWellHopeErr.github.io",
    img: "assets/img/portfolio.png",
    date: "DEC 2020",
  },
];

export default projects;
