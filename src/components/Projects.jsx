import React, { useState } from "react"
import { motion } from "framer-motion"
import { SectionWrapper } from "../hoc"
import { styles } from "../styles"
import { github, pineapple, pineappleHover } from "../assets"
import { projects } from "../constants"
import { fadeIn, textVariant, staggerContainer } from "../utils/motion"

const ProjectCard = ({
    id,
    name,
    description,
    image,
    repo,
    demo,
    index,
    active,
    handleClick,
}) => {
    return (
        <motion.div
            variants={fadeIn("right", "spring", index * 0.5, 0.75)}
            className={`relative ${
                active === id
                    ? "lg:flex-[3.5] flex-[10]"
                    : "lg:flex-[0.5] flex-[2]"
            } flex items-center justify-center min-w-[170px] 
      h-[420px] cursor-pointer card-shadow`}
            onClick={() => handleClick(id)}
        >
            <div
                className="absolute top-0 left-0 z-10 bg-jetLight 
      h-full w-full opacity-[0.5] rounded-[24px]"
            ></div>

            <img
                src={image}
                alt={name}
                className="absolute w-full h-full object-cover rounded-[24px]"
            />

            {active !== id ? (
                <div className="flex items-center justify-start pr-[4.5rem]">
                    <h3
                        className="font-extrabold font-beckman uppercase w-[200px] h-[30px] 
        whitespace-nowrap sm:text-[27px] text-[18px] text-white tracking-[1px]
        absolute z-0 lg:bottom-[7rem] lg:rotate-[-90deg] lg:origin-[0,0]
        leading-none"
                    >
                        {name}
                    </h3>
                </div>
            ) : (
                <>
                    <div
                        className="absolute bottom-0 p-8 justify-start w-full 
            flex-col bg-[rgba(74,73,73,0.76)] rounded-b-[24px] z-20"
                    >
                        <div className="absolute inset-0 flex justify-end m-3">
                            <div
                                onClick={() => window.open(repo, "_blank")}
                                className="bg-night sm:w-11 sm:h-11 w-10 h-10 rounded-full 
               flex justify-center items-center cursor-pointer
               sm:opacity-[0.9] opacity-[0.8] hover:opacity-70"
                            >
                                <img
                                    src={github}
                                    alt="source code"
                                    className="w-4/5 h-4/5 object-contain"
                                />
                            </div>
                        </div>

                        <h2
                            className="font-bold sm:text-[32px] text-[24px] 
              text-white uppercase font-beckman sm:mt-0 -mt-[1rem]"
                        >
                            {name}
                        </h2>
                        <p
                            className="text-white sm:text-[14px] text-[12px] 
              max-w-3xl sm:leading-[24px] leading-[18px]
              font-poppins tracking-[1px]"
                        >
                            {description}
                        </p>
                        <button
                            className="live-demo flex justify-between 
              sm:text-[16px] text-[14px] text-timberWolf 
              font-bold font-beckman items-center py-5 pl-2 pr-3 
              whitespace-nowrap gap-1 sm:w-[138px] sm:h-[50px] 
              w-[125px] h-[46px] rounded-[10px] glassmorphism 
              sm:mt-[22px] mt-[16px] hover:bg-battleGray 
              hover:text-eerieBlack transition duration-[0.2s] 
              ease-in-out"
                            onClick={() => window.open(demo, "_blank")}
                            onMouseOver={() => {
                                document
                                    .querySelector(".btn-icon")
                                    .setAttribute("src", pineappleHover)
                            }}
                            onMouseOut={() => {
                                document
                                    .querySelector(".btn-icon")
                                    .setAttribute("src", pineapple)
                            }}
                        >
                            <img
                                src={pineapple}
                                alt="pineapple"
                                className="btn-icon sm:w-[34px] sm:h-[34px] 
                  w-[30px] h-[30px] object-contain"
                            />
                            LIVE DEMO
                        </button>
                    </div>
                </>
            )}
        </motion.div>
    )
}

const Projects = () => {
    const [active, setActive] = useState("project-2")
    const [active2, setActive2] = useState("project-2")

    return (
        <div className="-mt-[6rem]">
            <motion.div variants={textVariant()}>
                <p className={`${styles.sectionSubText} `}>My</p>
                <h2 className={`${styles.sectionHeadTextLight}`}>Projects.</h2>
            </motion.div>

            <div className="w-full flex">
                <motion.p
                    variants={fadeIn("", "", 0.1, 1)}
                    className="mt-4 text-taupe text-[18px] max-w-3xl leading-[30px]"
                >
                    As a passionate full-stack web developer, these projects are
                    a testament to my expertise. They serve as tangible
                    demonstrations of my skills, featuring concise descriptions
                    along with links to both code repositories and live demos.
                    Through these endeavors, I exhibit my proficiency in
                    addressing complex challenges, adeptly navigating a variety
                    of technologies, and effectively managing projects from
                    inception to completion.
                </motion.p>
            </div>

            <motion.div
                variants={staggerContainer}
                initial="hidden"
                whileInView="show"
                viewport={{ once: false, amount: 0.25 }}
                className={`${styles.innerWidth} mx-auto flex flex-col`}
            >
                <p
                    className={`mt-40 text-2xl text-center text-taupe uppercase tracking-widest font-semibold font-poppins`}
                >
                    FULLSTACK PROJECTS
                </p>

                <div className="mt-[30px] flex lg:flex-row flex-col min-h-[70vh] gap-5">
                    {projects.map((project, index) => (
                        <ProjectCard
                            key={project.id}
                            index={index}
                            {...project}
                            active={active}
                            handleClick={setActive}
                        />
                    ))}
                </div>
            </motion.div>

            <motion.div
                variants={staggerContainer}
                initial="hidden"
                whileInView="show"
                viewport={{ once: false, amount: 0.25 }}
                className={`${styles.innerWidth} mx-auto flex flex-col`}
            >
                <p
                    className={`mt-[15vh] text-2xl text-center text-taupe uppercase tracking-widest font-semibold font-poppins`}
                >
                    FRONTEND PROJECTS
                </p>
                <div className="mt-[30px] flex lg:flex-row flex-col min-h-[70vh] gap-5">
                    {projects.map((project, index) => (
                        <ProjectCard
                            key={project.id}
                            index={index}
                            {...project}
                            active={active2}
                            handleClick={setActive2}
                        />
                    ))}
                </div>
            </motion.div>
        </div>
    )
}

export default SectionWrapper(Projects, "projects")
