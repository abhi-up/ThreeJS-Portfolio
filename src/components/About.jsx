import React from "react"
import { motion } from "framer-motion"
import { styles } from "../styles"
import { services } from "../constants"
import { fadeIn, textVariant } from "../utils/motion"
import { SectionWrapper } from "../hoc"

const ServiceCard = ({ index, title, icon }) => {
    return (
        <motion.div
            variants={fadeIn("right", "spring", 0.5 * index, 0.75)}
            className="xs:w-[250px] w-full card-gradient p-[1px] rounded-[20px] shadow-card"
        >
            <div
                options={{
                    max: 45,
                    scale: 1,
                    speed: 450,
                }}
                className="bg-jetLight rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col"
            >
                <img
                    src={icon}
                    alt={title}
                    className="w-16 h-16 object-contain"
                />
                <h3 className="text-taupe text-[18px] font-bold text-center">
                    {title}
                </h3>
            </div>
        </motion.div>
    )
}

const About = () => {
    return (
        <div className="-mt-[6rem]">
            <motion.div variants={textVariant()}>
                <p className={styles.sectionSubText}>Introduction</p>
                <h2 className={styles.sectionHeadText}>Overview.</h2>
            </motion.div>

            <motion.p
                variants={fadeIn("", "", 0.1, 1)}
                className="mt-4 text-taupe text-[18px] max-w-3xl leading-[30px]"
            >
Welcome to my corner of the web! I'm Abhishek Upadhyay, a passionate web developer based in India. With a solid foundation in Computer Science and Engineering, I graduated with honors and have since dived headfirst into the dynamic world of web development.<br/>
My journey began with a curiosity for crafting digital experiences that are both intuitive and impactful. During my academic years and beyond, I honed my skills in frontend and backend technologies like React, Node.js, and MongoDB, allowing me to build robust applications that meet modern standards.<br/>
Driven by a love for clean code and effective problem-solving, I thrive in turning ideas into reality. My projects such as TaskZen, Pulse Chat, and Blog-Bridge showcase not only my technical prowess but also my commitment to creating solutions that enhance user experiences.<br/>
Beyond coding, I value collaboration and continuous learning. As a proactive learner, I stay updated with the latest industry trends and best practices, ensuring that my solutions are not just functional but also scalable and efficient.<br/>
Whether you're looking to enhance your online presence, streamline operations, or innovate with new digital solutions, I'm here to help. Let's connect and explore how we can transform your ideas into successful projects that make a difference.
            </motion.p>

            <div className="mt-20 flex flex-wrap gap-10">
                {services.map((service, index) => (
                    <ServiceCard
                        key={service.title}
                        index={index}
                        {...service}
                    />
                ))}
            </div>
        </div>
    )
}

export default SectionWrapper(About, "about")
