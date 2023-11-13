import wehikers from "../public/images/wehikers.png";
import travel from "../public/images/travel.png";
import travel1 from "../public/images/travel1.png";
import travel2 from "../public/images/travel2.png";
import travel3 from "../public/images/travel3.png";
import rs from "../public/images/rs.png";
import rs1 from "../public/images/rs1.png";
import rs2 from "../public/images/rs2.png";
import rs3 from "../public/images/rs3.png";
import miles from "../public/images/miles&pixels.png";
import miles1 from "../public/images/miles1.png";
import miles2 from "../public/images/miles2.png";
import miles3 from "../public/images/miles3.png";
import movies from "../public/images/movies.png";
import reactPortImg from "../public/images/portfolio.png";
import port1 from "../public/images/port1.png";
import port2 from "../public/images/port2.png";
import port3 from "../public/images/port3.png";
import kenyans from "../public/images/kenyans.png";

const portfolioContent = [
  {
    id: 7,
    thumb: rs,
    alt: "",
    appName: "RS Cuisine",
    shortDescription:
      "Behold the exquisite restaurant website I crafted for my client. A captivating single-page React application that seamlessly merges elegance and functionality. The goal was to develop a site that allowed customers to view the menu. ",
      description:
      "I used Bootstrap, the fluidity of Framer Motion, and the personalized touch of vanilla CSS",
    webAddress: "https://rs-ashen.vercel.app/",
    pictures: [rs,rs1,rs2,rs3]
  },
  {
    id: 3,
    thumb: travel,
    alt: "",
    appName: "Travel Experts",
    shortDescription:
      `In this .NET MVC application, I took the lead in tasks related to database scaffolding, design, and styling, as well as providing support to my team. I leveraged the power of Microsoft SQL Server and SQL to ensure efficient data management.`,
    description:
      `To enhance the user interface, I combined the flexibility of CSS with the user-friendly features of Bootstrap, resulting in a captivating and responsive web application. By blending these technologies, I aimed to create an engaging user experience while maintaining ease of use and visual appeal. Hosted on Azure`,
    webAddress: `https://github.com/emmanuelpali/TravelExperts-2`,
    pictures: [travel,travel1,travel2,travel3]
  },
  {
    id: 6,
    thumb: miles,
    alt: "",
    appName: "Miles&Pixels",
    shortDescription:
      "This React application allows registered users upload and share pictures. Hosted on Firebase, this dynamic platform not only showcases stunning pictures but also essential run statistics.",
      description:
      "The seamless integration of Google's authentication system ensures a secure and personalized experience for users. Navigating through the application is a breeze, thanks to the implementation of React Router for efficient client-side routing. With a harmonious blend of technology, aesthetics, and user-centric design, this application sets the stage for a vibrant community of running enthusiasts to share and celebrate their achievements",
    webAddress: "https://milesandpixels.web.app/",
    pictures: [miles,miles1,miles2,miles3]
  },
  {
    id: 5,
    thumb: reactPortImg,
    alt: "",
    appName: "NextJS Portfolio",
    shortDescription:
      "I used Figma to design this. Designing the UI was a particularly enjoyable aspect for me, as I had the opportunity to experiment with transparency and gradients to enhance the visual appeal.",
      description:
      "To enable continuous integration, I connected AWS Amplify to my GitHub repository, allowing for seamless deployment and updates whenever changes are pushed to the repository. In addition, I utilized Bootstrap and CSS to enhance the website's styling and layout, leveraging their pre-built components and frameworks to streamline the development process.",
    webAddress: "https://www.paliemmanuel.com/",
    pictures: [reactPortImg,port1,port2,port3]
  },
  // {
  //   id: 4,
  //   thumb: wehikers,
  //   alt: "",
  //   appName: "WeHikers",
  //   shortDescription:
  //     "For this Node/Express app, users can share hiking experiences. I implementing authentication using Passport.js, and utilized session and flash messages in Express. ",
  //   description:
  //     `To enhance the mapping functionality, I integrated Mapbox into my application. Bootstrap played a key role in creating a responsive and visually appealing user interface. As part of the continuous integration and deployment (CI/CD) process, the hosted application is automatically redeployed from my GitHub repository whenever new code is pushed. These tools and frameworks greatly contributed to the overall functionality and user experience of the application.`,
  //   webAddress: "https://wehikers.onrender.com/",
  // },

  // {
  //   id: 2,
  //   thumb: kenyans,
  //   alt: "",
  //   appName: "KenBC",
  //   shortDescription:
  //     "This project was developed using WordPress. I worked closely with two stakeholders to produce a website that met thier needs.",
  //   description:
  //     `In addition to the technical skills involved in building the website, this project gave me an opportunity to continue mastering my communication and collaboration skills plus effective conflict resolution`,
  //   webAddress: "https://kenyacommunitybc.org",
  // },
  // {
  //   id: 1,
  //   thumb: movies,
  //   alt: "",
  //   appName: "Movies App",
  //   shortDescription:
  //     "This one-day project for an internship assessment focused on fetching popular movies by implementing a button click event on page load. To retrieve movie data, RapidAPI's API was utilized. ",
  //   description:
  //     `Additionally, the application followed continuous integration and deployment (CI/CD) practices, automatically redeploying from the GitHub repository whenever new code was pushed. The project was developed in alignment with the specific specifications provided by the employer, showcasing the ability to quickly deliver a functional solution within a limited timeframe`,
  //   webAddress: "https://movies-mu-sand.vercel.app/",
  // },



 
];

export default portfolioContent;
