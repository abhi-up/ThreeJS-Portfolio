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
                Hey there! I'm Abhishek, a final year B.Tech student at AKTU,
                fueled by a passion for coding and weaving captivating web
                experiences. <br />
                As a full stack MERN (MongoDB, Express.js, React.js, Node.js)
                web developer and proficient Java programmer, I have cultivated
                a diverse skill set that enables me to design and implement
                robust, scalable, and user-centric web applications. With a keen
                eye for detail and a commitment to excellence, I consistently
                strive to push the boundaries of what's possible in web
                development, ensuring seamless functionality, intuitive user
                interfaces, and efficient backend processes. Whether it's
                crafting dynamic front-end designs using React.js or optimizing
                database performance using MongoDB and Java, I approach every
                project with enthusiasm, creativity, and a dedication to
                delivering high-quality results that exceed expectations.
                <br /> Dive into my portfolio to explore a showcase of my
                projects and discover the innovative solutions I've developed to
                address complex challenges in the ever-evolving world of web
                development.
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
