import { type Props as ProjectType } from "../../components/ProjectComponent.astro";

const projectsArray: ProjectType[] = [
  {
    title: "MERN Chatting App",
    link: "https://github.com/khawaja-ammar/chatting_MERN",
    tags: [
      "javascript",
      "react",
      "expressjs",
      "nodejs",
      "socketio",
      "mongodb",
      "tailwindcss",
      "daisyui",
    ],
    points: [
      "Developed a full-stack web application using express.js serving REST APIs with React and tailwindcss + daisyUI as the frontend",
      "Authorization and authentication done using JSON web tokens (JWT) for secure sessions",
      "Implemented Real-time communication between clients using Socket.IO (including message indicators)",
      "Client information and messages stored in MongoDB instance for faster reads",
    ],
  },
  {
    title: "Nextjs Website",
    link: "https://github.com/khawaja-ammar/nextjs_oaks-website",
    tags: ["typescript", "nextjs", "react", "tailwindcss"],
    points: [
      "Server-side rendered for SEO and quick web page responses",
      "Google Maps API used to pin the location of the business",
      "Custom Nextjs API made for Nodemailer to send emails through the contact page",
      "Image galleries and tables designed in react to present information",
    ],
  },
  {
    title: "Peer-to-peer File Sharing (Python)",
    link: "https://github.com/khawaja-ammar/pythonP2P",
    tags: ["python", "sockets", "oop"],
    points: [
      "Engineered a Chord-like p2p node for sharing files with other nodes on request",
      "Implemented Finger tables for O(log N) lookup time",
      "“Stabilization” stage and file redundancy implemented to minimize risk of file loss",
    ],
  },
  {
    title: "This Website (Astro)",
    link: "https://github.com/khawaja-ammar/portfolio",
    tags: ["astro", "typescript", "tailwindcss", "lighthouse"],
    points: [
      "MPA Server Side rendered with client interactivity",
      "100 score in lighthouse metrics",
      "Caching done using Cloudflare CDN",
      "Accessibility features using Aria Labels",
    ],
    image: "/project_images/astro_website.png",
  },
];

export default projectsArray;
