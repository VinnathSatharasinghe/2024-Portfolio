/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React, { useState } from "react";
import Tilt from "react-parallax-tilt"; // Adjusted import statement
import { motion } from "framer-motion";

import { styles } from "../../styles";
import SectionWrapper from "./hoc/SectionWrapper";
import { certificates } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";

const CertificateCard = ({
  index,
  name,
  description,
  tags,
  image,
  source_code_link,
}) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleImageClick = () => {
    setIsModalOpen(true);
  };

  const handleImageLeft = () => {
    setIsModalOpen(false);
  };

  return (
    <motion.div variants={fadeIn("up", "spring", index * 0.5, 0.75)}>
      <Tilt
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className="bg-tertiary p-5 rounded-2xl sm:w-[510px] h-[400px] ml-[40px] w-full"
      >
        <div onClick={handleImageClick} onMouseLeave={handleImageLeft} className="relative w-full h-[230px]">
      
            <img
              src={image}
              alt="project_image"
              className="w-full h-full object-cover rounded-2xl"
            />


          {/* <div className="relative flex justify-end m-3 card-img_hover">
            <div
              onClick={handleImageClick}
              className="black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer"
            >
              <img
                
                alt="source code"
                className="w-1/2 h-1/2 object-contain"
              />
            </div>
          </div> */}

          {isModalOpen && (
            <div
              className="fixed inset-0 bg-black bg-opacity-75 flex justify-center items-center z-50"
              onClick={() => setIsModalOpen(false)}
            >
              <img src={image} alt="Preview" className="h-[400px]" />
            </div>
          )}
        </div>

        <div className="mt-5">
          <h3 className="text-white font-bold text-[24px]">{name}</h3>
          <p className="mt-2 text-secondary text-[14px]">{description}</p>
        </div>
        <div className="mt-4 flex flex-wrap gap-2">
          {tags.map((tag) => (
            <p
              key={`${name}-${tag.name}`}
              className={`text-[14px] ${tag.color}`}
            >
              #{tag.name}
            </p>
          ))}
        </div>
      </Tilt>
    </motion.div>
  );
};

const Certificate = () => {
  return (
    <section id="certificates">
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText} pt-[120px]`}>My Certificate</p>
        <h2 className={`${styles.sectionHeadText}`}>Certificate.</h2>
      </motion.div>

      <div className="w-full flex">
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className="mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]"
        >
          Following projects showcase my skills and experience through
          real-world examples of my work. Each project is briefly described with
          links to code repositories and live demos in it. It reflects my
          ability to solve complex problems, work with different technologies,
          and manage projects effectively.
        </motion.p>
      </div>

      <div className="mt-20 flex flex-wrap gap-7">
        {certificates.map((project, index) => (
          <CertificateCard
            key={`project-${index}`}
            index={index}
            {...project}
          />
        ))}
      </div>
    </section>
  );
};

export default SectionWrapper(Certificate, "");
