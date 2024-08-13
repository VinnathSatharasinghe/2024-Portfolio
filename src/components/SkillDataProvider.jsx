/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

export default function SkillDataProvider({ src, width, height, index }) {
    const { ref, inView } = useInView({
        triggerOnce: true
    });

    const imageVariants = {
        hidden: { opacity: 0 },
        visible: { opacity: 1 }
    };

    const animationDelay = 0.3;
    return (
        <motion.div
            ref={ref}
            initial="hidden"
            variants={imageVariants}
            animate={inView ? "visible" : "hidden"}
            custom={index}
            transition={{ delay: index * animationDelay }}
        >
            <img
                src={src}
                width={width}
                height={height}
                alt='skill image'
            />
        </motion.div>
    );
}
