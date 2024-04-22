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
    tm,
    filex,
    resumebuilder,
    newsmag,
    virtualr,
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
        name: "Redux",
        icon: redux,
    },
    {
        name: "Tailwind",
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
        image: pulsechat,
        repo: "https://github.com/abhi-up/PulseChat",
        demo: "https://pulsechat.onrender.com/",
    },
    {
        id: "project-2",
        name: "Cloud Based TM",
        description:
            "The Cloud-Based TM is a web app designed to streamline team task management.",
        image: tm,
        repo: "https://github.com/abhi-up/TaskZen-TM",
        demo: "https://taskzen-tm.onrender.com/",
    },
    {
        id: "project-3",
        name: "Blog Bridges",
        description:
            "A full-stack MERN blog website with CRUD functionality, user authentication, and more.",
        image: blogbridges,
        repo: "https://github.com/abhi-up/Blog-Bridges",
        demo: "https://blog-bridge.onrender.com/",
    },
    {
        id: "project-4",
        name: "Sumz AI",
        description: `A cutting-edge article summarizer 'Sumz', using OpenAI's GPT model.`,
        image: sumz,
        repo: "https://github.com/abhi-up/AI-Summarizer",
        demo: "https://65abd4b6447215a3f44433df--nimble-cucurucho-393e9a.netlify.app/",
    },
    {
        id: "project-5",
        name: "File Sharing App",
        description:
            "It's a Node Express-based file sharing system with MongoDB. Users can upload files, set passwords, and schedule file expiry.",
        image: filex,
        repo: "https://github.com/abhi-up/File-Sharing-System",
        demo: "https://www.linkedin.com/posts/meabhi1512_cc9874-codeclause-webdevelopment-activity-7167540157666054145-_HOy?utm_source=share&utm_medium=member_desktop",
    },
    {
        id: "project-6",
        name: "Resume Builder",
        description:
            "Simple yet elegant CV/Resume builder. Built with Remix + Shadcn/ui + Tailwindcss.",
        image: resumebuilder,
        repo: "https://github.com/abhi-up/Simple-Resume-Builder",
        demo: "https://simple-resume-builder.vercel.app/",
    },
    {
        id: "project-7",
        name: "Hoobank",
        description:
            "Hoobank, a modern landing page with serious UX/UI! Built with React & Tailwind.",
        image: hoobank,
        repo: "https://github.com/abhi-up/HooBank-Modern-Landing-Page",
        demo: "https://hoobank-iota-beige.vercel.app/",
    },
    {
        id: "project-8",
        name: "Refokus Clone",
        description:
            "Refokus clone website with additional features and enhancements for an improved UI.",
        image: refokus,
        repo: "https://github.com/abhi-up/Refokus-Clone",
        demo: "https://refokuzzz-cloned.vercel.app/",
    },
    {
        id: "project-9",
        name: "News Mag",
        description:
            "NewsAPI fuels the content, serving up hot takes on tech, sports, entertainment, and health.",
        image: newsmag,
        repo: "https://github.com/abhi-up/Simple-Resume-Builder",
        demo: "https://www.linkedin.com/posts/meabhi1512_project-developer-bootstrap-activity-7152728286589014016-n0Wj?utm_source=share&utm_medium=member_desktop",
    },
    {
        id: "project-10",
        name: "Virtual R",
        description:
            "Simple yet elegant CV/Resume builder. Built with Remix + Shadcn/ui + Tailwindcss.",
        image: virtualr,
        repo: "https://github.com/abhi-up/VirtualR",
        demo: "https://virtual-r-six.vercel.app/",
    },
]

export { services, technologies, experiences, projects }
