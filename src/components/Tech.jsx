import { motion } from "framer-motion"
import { BallCanvas } from "./canvas"
import { SectionWrapper } from "../hoc"
import { technologies } from "../constants"
import { styles } from "../styles"
import { textVariant } from "../utils/motion"
import React, { useState } from "react"

const Tech = () => {
    const [showText, setShowText] = useState(false)

    const handleMouseOver = () => {
        setShowText(true)
    }

    const handleMouseOut = () => {
        setShowText(false)
    }

    return (
        <>
            <motion.div variants={textVariant()}>
                <p className={styles.sectionSubTextLight}>My skills</p>
                <h2 className={styles.sectionHeadTextLight}>Technologies.</h2>
            </motion.div>

            <div className="flex flex-wrap justify-center gap-10 mt-14">
                {technologies.map((technology) => (
                    <div
                        className="w-28 h-28 relative"
                        key={technology.name}
                        onMouseOver={handleMouseOver}
                        onMouseOut={handleMouseOut}
                    >
                        <BallCanvas icon={technology.icon} />
                        {showText && (
                            <p className="hover-text text-center sm:text-[15px] text-[14px] text-taupe uppercase tracking-wider font-semibold font-poppins ">
                                {technology.name}
                            </p>
                        )}
                    </div>
                ))}
            </div>
        </>
    )
}

export default SectionWrapper(Tech, "")
