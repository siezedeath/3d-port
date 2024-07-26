import {
    mobile,
    backend,
    creator,
    web,
    javascript,
    typescript,
    html,
    css,
    reactjs,
    nodejs,
    git,
    docker,
    carrent,
    threejs,
    c,
    java,
    latex,
    numpy,
    pandas,
    postgresql,
    python,
    pytorch,
    scikit,
    scipy,
    tensorflow,
    hrt,
    synergyprep,
    headstarter,
    maa,
  } from "../assets";
  
  export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "work",
      title: "Work",
    },
    {
      id: "contact",
      title: "Contact",
    },
  ];
  
  const services = [
    {
      title: "Web Developer",
      icon: web,
    },
    {
      title: "AI/ML Engineer",
      icon: mobile,
    },
    {
      title: "Backend Developer",
      icon: backend,
    },
    {
      title: "Math and Science Tutor",
      icon: creator,
    },
  ];
  
  const technologies = [
    {
      name: "HTML 5",
      icon: html,
    },
    {
      name: "CSS 3",
      icon: css,
    },
    {
      name: "JavaScript",
      icon: javascript,
    },
    {
      name: "TypeScript",
      icon: typescript,
    },
    {
      name: "React JS",
      icon: reactjs,
    },
    {
      name: "Node JS",
      icon: nodejs,
    },
    {
      name: "Three JS",
      icon: threejs,
    },
    {
      name: "git",
      icon: git,
    },
    {
      name: "docker",
      icon: docker,
    },
    {
      name: "Python",
      icon: python, 
    },
  ];
  
  
  const experiences = [
    {
      title: "AI Developer",
      company_name: "Headstarter Fellow",
      icon: headstarter,
      iconBg: "#383E56",
      date: "July 2024 - Present",
      points: [
        "Working on several different projects that will help me develop skills with respect to AI and Web Development.",
        "Collaborating with peers to learn as a developer working in a team setting.",
        "Participating in code reviews and providing constructive feedback to other developers.",
      ],
    },
    {
      title: "Algorithm Developer",
      company_name: "Hudson River Trading",
      icon: hrt,
      iconBg: "#383E56",
      date: "May 2023 - Aug 2023",
      points: [
        "Collaboratively designed sophisticated mathematical models for trading financial derivatives",
        "Developed advanced machine learning algorithms with a focus on Q-learning to optimize trading strategies.",
        "Partnered with peers to analyze and revise existing quantitative models.",
      ],
    },
    {
      title: "Software Developer and Tutor",
      company_name: "Synergy Prep",
      icon: synergyprep,
      iconBg: "#E6DEDD",
      date: "Jun 2022 - Present",
      points: [
        "Automated the process of creating math questions for students as well as giving them full solutions.",
        "Designed code to assign students problems based on their skill level and track their progress.",
        "Led development of a novel curriculum for students studying for SAT and SHSAT.",
        "Teach competitive math for those who are gifted and/or interested in the subject.",
      ],
    },
    {
      title: "USAMO Qualifier",
      company_name: "Mathematical Association of America",
      icon: maa,
      iconBg: "#E6DEDD",
      date: "January 2020 - June 2020",
      points: [
        "Achieved a score of 126 on the AMC 12A 2020, earning a place on the distinguished honor roll.",
        "Scored 130 on the AIME II 2020, correctly answering 13 out of 15 questions.",
        "Qualified for the USAMO in 2020 with a combined index score of 256."
      ],
    },
  ];
  
  const projects = [
    {
      name: "TBA",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam nec purus ut nunc.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "mongodb",
          color: "green-text-gradient",
        },
        {
          name: "tailwind",
          color: "pink-text-gradient",
        },
      ],
      image: carrent,
      source_code_link: "https://github.com/",
    },
    {
      name: "TBA",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam nec purus ut nunc.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "mongodb",
          color: "green-text-gradient",
        },
        {
          name: "tailwind",
          color: "pink-text-gradient",
        },
      ],
      image: carrent,
      source_code_link: "https://github.com/",
    },
    {
      name: "TBA",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam nec purus ut nunc.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "mongodb",
          color: "green-text-gradient",
        },
        {
          name: "tailwind",
          color: "pink-text-gradient",
        },
      ],
      image: carrent,
      source_code_link: "https://github.com/",
    },
  ];
  
  export { services, technologies, experiences, projects };