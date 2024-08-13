/* eslint-disable no-unused-vars */
import React from "react";
import { motion } from "framer-motion";
import {
    slideInFromLeft,
    slideInFromRight,
    slideInFromTop,
} from "../utils/motion";

const SkillText = () => {
    return (
        <div className="w-full h-auto flex flex-col items-center justify-center">
            <motion.div
                variants={slideInFromLeft(0.5)}
                className="text-[30px] text-white font-medium mt-[10px] text-center mb-[15px]"
            >
                Languages and Frameworks
            </motion.div>
            <motion.div
                variants={slideInFromRight(0.5)}
                className="cursive text-[20px] text-gray-200 mb-10 mt-[10px] text-center"
            >
                Never miss a task, deadline or idea
            </motion.div>
        </div>
    );
};

export default SkillText;
