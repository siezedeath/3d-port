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
    redux,
    tailwind,
    nodejs,
    mongodb,
    git,
    figma,
    docker,
    meta,
    starbucks,
    tesla,
    shopify,
    carrent,
    jobit,
    tripguide,
    threejs,
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
      name: "Redux Toolkit",
      icon: redux,
    },
    {
      name: "Tailwind CSS",
      icon: tailwind,
    },
    {
      name: "Node JS",
      icon: nodejs,
    },
    {
      name: "MongoDB",
      icon: mongodb,
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
      name: "figma",
      icon: figma,
    },
    {
      name: "docker",
      icon: docker,
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
      date: "Jan 2022 - Jan 2023",
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
      date: "Jun 2023 - Present",
      points: [
        "Developing and maintaining web applications using React.js and other related technologies.",
        "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
        "Participating in hackathons to further develop my skills as a developer.",
        "Participating in code reviews and providing constructive feedback to other developers.",
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
      name: "Car Rent",
      description:
        "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
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
      name: "Job IT",
      description:
        "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "restapi",
          color: "green-text-gradient",
        },
        {
          name: "scss",
          color: "pink-text-gradient",
        },
      ],
      image: jobit,
      source_code_link: "https://github.com/",
    },
    {
      name: "Trip Guide",
      description:
        "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
      tags: [
        {
          name: "nextjs",
          color: "blue-text-gradient",
        },
        {
          name: "supabase",
          color: "green-text-gradient",
        },
        {
          name: "css",
          color: "pink-text-gradient",
        },
      ],
      image: tripguide,
      source_code_link: "https://github.com/",
    },
  ];
  
  export { services, technologies, experiences, projects };