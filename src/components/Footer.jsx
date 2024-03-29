import React from "react"
import github from "../assets/footer/github.png"
import linkedin from "../assets/footer/linkedin.png"
import x from "../assets/footer/x.png"

const Footer = () => {
    return (
        <footer className=" text-white py-8">
            <div className="container mx-auto flex flex-col items-center space-y-4">
                <h1 className="text-[2vw] font-beckman font-bold">
                    Connect with Me
                </h1>
                <div className="flex justify-center space-x-7">
                    <a
                        href="https://github.com/abhi-up"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-gray-500 transition duration-300"
                    >
                        <img
                            src={github}
                            alt="GitHub"
                            className="h-10 hover:opacity-75 transition duration-300"
                        />
                    </a>
                    <a
                        href="https://www.linkedin.com/in/meabhi1512/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-blue-500 transition duration-300"
                    >
                        <img
                            src={linkedin}
                            alt="LinkedIn"
                            className="h-10 hover:opacity-75 transition duration-300"
                        />
                    </a>
                    <a
                        href="https://twitter.com/meabhi1512"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-blue-500 transition duration-300"
                    >
                        <img
                            src={x}
                            alt="X Platform"
                            className="h-10 hover:opacity-75 transition duration-300"
                        />
                    </a>
                </div>
            </div>
        </footer>
    )
}

export default Footer
