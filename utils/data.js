import wehikers from "../public/images/wehikers.png";
import travel from "../public/images/travel.png";
import movies from "../public/images/movies.png";
import reactPortImg from "../public/images/portfolio.png";

const portfolioContent = [

  {
    id: 1,
    thumb: reactPortImg,
    alt: "",
    appName: "NextJS Portfolio",
    shortDescription:
      "I used Figma to design my website prior to starting the development process. Designing the UI was a particularly enjoyable aspect for me, as I had the opportunity to experiment with transparency and gradients to enhance the visual appeal.",
      description:
      "To enable continuous integration, I connected AWS Amplify to my GitHub repository, allowing for seamless deployment and updates whenever changes are pushed to the repository. In addition, I utilized Bootstrap and CSS to enhance the website's styling and layout, leveraging their pre-built components and frameworks to streamline the development process.",
    webAddress: "https://www.paliemmanuel.com/",
  },
  {
    id: 2,
    thumb: wehikers,
    alt: "",
    appName: "WeHikers",
    shortDescription:
      "During the development process, I gained knowledge in handling image uploads, implementing authentication using Passport.js, and utilizing session and flash messages in Express. To enhance the mapping functionality, I integrated Mapbox into my application.",
    description:
      `Bootstrap played a key role in creating a responsive and visually appealing user interface. As part of the continuous integration and deployment (CI/CD) process, the hosted application is automatically redeployed from my GitHub repository whenever new code is pushed. These tools and frameworks greatly contributed to the overall functionality and user experience of the application.`,
    webAddress: "https://wehikers.onrender.com/",
  },
  {
    id: 4,
    thumb: travel,
    alt: "",
    appName: "Travel Experts",
    shortDescription:
      `In this .NET MVC application, I took the lead in tasks related to database scaffolding, design, and styling, as well as providing support to my team. I leveraged the power of Microsoft SQL Server and SQL to ensure efficient data management.`,
    description:
      `To enhance the user interface, I combined the flexibility of CSS with the user-friendly features of Bootstrap, resulting in a captivating and responsive web application. By blending these technologies, I aimed to create an engaging user experience while maintaining ease of use and visual appeal. Hosted on Azure`,
    webAddress: `https://github.com/emmanuelpali/TravelExperts-2`,
  },
  {
    id: 3,
    thumb: movies,
    alt: "",
    appName: "Movies App",
    shortDescription:
      "This one-day project for an internship assessment focused on fetching popular movies by implementing a button click event on page load. To retrieve movie data, RapidAPI's API was utilized. ",
    description:
      `Additionally, the application followed continuous integration and deployment (CI/CD) practices, automatically redeploying from the GitHub repository whenever new code was pushed. The project was developed in alignment with the specific specifications provided by the employer, showcasing the ability to quickly deliver a functional solution within a limited timeframe`,
    webAddress: "https://movies-mu-sand.vercel.app/",
  },



 
];

export default portfolioContent;
