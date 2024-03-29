import {
    frontend,
    backend,
    ux,
    problemsolving,
    javascript,
    html,
    css,
    reactjs,
    redux,
    tailwind,
    nodejs,
    expressjs,
    c,
    python,
    java,
    mongodb,
    git,
    blogbridges,
    hoobank,
    pulsechat,
    refokus,
    sumz,
    coverhunt,
} from "../assets"

export const navLinks = [
    {
        id: "about",
        title: "About",
    },
    {
        id: "projects",
        title: "Projects",
    },
    {
        id: "contact",
        title: "Contact",
    },
]

const services = [
    {
        title: "Frontend Developer",
        icon: frontend,
    },
    {
        title: "Backend Developer",
        icon: backend,
    },
    {
        title: "UI/UX Design",
        icon: ux,
    },
    {
        title: "Problem Solving",
        icon: problemsolving,
    },
]

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
        name: "Express JS",
        icon: expressjs,
    },
    {
        name: "Mongo DB",
        icon: mongodb,
    },
    {
        name: "Java",
        icon: java,
    },
    {
        name: "Python",
        icon: python,
    },
    {
        name: "C",
        icon: c,
    },
    {
        name: "git",
        icon: git,
    },
]

const experiences = [
    {
        title: "Filo Private Tutor",
        company_name: "Filo",
        icon: coverhunt,
        iconBg: "#333333",
        date: "Sept 2022 - Mar 2023",
        body: "Offered tutoring in physics, chemistry, mathematics, and computer science. Assisted students in understanding key concepts and enhancing academic performance.",
    },
    {
        title: "Front-End Developer Intern",
        company_name: "Codeway Solutions",
        icon: coverhunt,
        iconBg: "#333333",
        date: "Jan 2024 - Feb 2024",
        body: "Resolved issues and designed new user interfaces for several web apps. (landing page, calculator). Achieved 50+ github code contributions as an intern on the team.",
    },
    {
        title: "Full Stack Developer Intern",
        company_name: "CodeClause",
        icon: coverhunt,
        iconBg: "#333333",
        date: "Feb 2024 - Mar 2024",
        body: "During my internship, I developed three significant projects: a dynamic portfolio, a secure file-sharing platform, and an intuitive resume builder. I made substantial contributions to these projects, logging over 100 commits on GitHub, showcasing my commitment to innovation and collaborative development.",
    },
]

const projects = [
    {
        id: "project-1",
        name: "PulseChat",
        description: "A real-time chat application built using the MERN stack.",
        // tags: [
        //     {
        //         name: "react",
        //         color: "blue-text-gradient",
        //     },
        //     {
        //         name: "mongodb",
        //         color: "green-text-gradient",
        //     },
        //     {
        //         name: "tailwind",
        //         color: "pink-text-gradient",
        //     },
        // ],
        image: pulsechat,
        repo: "https://github.com/abhi-up/PulseChat",
        demo: "https://pulsechat.onrender.com/",
    },
    {
        id: "project-2",
        name: "Blog Bridges",
        description:
            "A full-stack MERN blog website with CRUD functionality, user authentication, and more.",
        // tags: [
        //     {
        //         name: "react",
        //         color: "blue-text-gradient",
        //     },
        //     {
        //         name: "restapi",
        //         color: "green-text-gradient",
        //     },
        //     {
        //         name: "scss",
        //         color: "pink-text-gradient",
        //     },
        // ],
        image: blogbridges,
        repo: "https://github.com/abhi-up/Blog-Bridges",
        demo: "https://blog-bridge.onrender.com/",
    },
    {
        id: "project-3",
        name: "Refokus Clone",
        description:
            "Refokus clone website with additional features and enhancements for an improved UI.",
        // tags: [
        //     {
        //         name: "nextjs",
        //         color: "blue-text-gradient",
        //     },
        //     {
        //         name: "supabase",
        //         color: "green-text-gradient",
        //     },
        //     {
        //         name: "css",
        //         color: "pink-text-gradient",
        //     },
        // ],
        image: refokus,
        repo: "https://github.com/abhi-up/Refokus-Clone",
        demo: "https://refokuzzz-cloned.vercel.app/",
    },
    {
        id: "project-4",
        name: "SumzAI",
        description: `A cutting-edge article summarizer 'Sumz', using OpenAI's GPT model.`,
        // tags: [
        //     {
        //         name: "nextjs",
        //         color: "blue-text-gradient",
        //     },
        //     {
        //         name: "supabase",
        //         color: "green-text-gradient",
        //     },
        //     {
        //         name: "css",
        //         color: "pink-text-gradient",
        //     },
        // ],
        image: sumz,
        repo: "https://github.com/abhi-up/AI-Summarizer",
        demo: "https://65abd4b6447215a3f44433df--nimble-cucurucho-393e9a.netlify.app/",
    },
    {
        id: "project-5",
        name: "Hoobank",
        description:
            "Hoobank, a modern landing page with serious UX/UI! Built with React & Tailwind.",
        image: hoobank,
        repo: "https://github.com/abhi-up/HooBank-Modern-Landing-Page",
        demo: "https://hoobank-iota-beige.vercel.app/",
    },
]

export { services, technologies, experiences, projects }
