/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";
import { motion } from "framer-motion";

import { styles } from "../../styles";
import SectionWrapper from "../components/hoc/SectionWrapper";
import { fadeIn, textVariant } from "../utils/motion";
import { testimonials } from "../constants";

const FeedbackCard = ({
  index,
  testimonial,
  name,
  designation,
  company,
  image,
}) => (
  <motion.div
    variants={fadeIn("", "spring", index * 0.5, 0.75)}
    className="bg-black-200 p-10 rounded-3xl w-full h-full flex flex-col justify-between"
  >
    <p className="text-white font-black text-[48px]">"</p>

    <div className="mt-1 flex-1 flex flex-col justify-between">
      <p className="text-white tracking-wider text-[12px] mb-4">
        {testimonial}
      </p>

      <div className="flex justify-between items-center gap-1">
        <div className="flex-1 flex flex-col">
          <p className="text-white font-medium text-[16px]">
            <span className="blue-text-gradient">@</span> {name}
          </p>
          <p className="mt-1 text-secondary text-[12px]">
            {designation} of {company}
          </p>
        </div>

        <img
          src={image}
          alt={`feedback_by-${name}`}
          className="w-10 h-10 rounded-full object-cover"
        />
      </div>
    </div>
  </motion.div>
);

const Feedbacks = () => {
  return (
    <section id="feedback">
      <div className={`mt-12 bg-black-100 rounded-[20px]`}>
        <div className={`bg-tertiary rounded-2xl ${styles.padding} min-h-[300px]`}>
          <motion.div variants={textVariant()}>
            <p className={styles.sectionSubText}>What others say</p>
            <h2 className={styles.sectionHeadText}>Testimonials.</h2>
          </motion.div>
        </div>
        <div
          className={`-mt-20 pb-14 ${styles.paddingX} grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-7`}
        >
          {testimonials.map((testimonial, index) => (
            <div key={index} className="w-full h-full">
              <FeedbackCard index={index} {...testimonial} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SectionWrapper(Feedbacks, "");
