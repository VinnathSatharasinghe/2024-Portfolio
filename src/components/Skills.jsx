/* eslint-disable no-unused-vars */
import React from "react";
import { Backend_skill, Library_skill, Full_stack, Other_skill, Skill_data } from '../constants'
import SkillDataProvider from "./SkillDataProvider";
import SkillText from "./SkillText";

function Skills() {
    return (
        <section
            id="skills"
            className="flex flex-col items-center justify-center gap-3 h-full relative overflow-hidden py-10"
            style={{ transform: "scale(0.9" }}
        >
            <SkillText />
            <div className="flex flex-row justify-around flex-wrap mt-4 gap-5 items-center">
                {Skill_data.map((image, index) => (
                    <SkillDataProvider
                        key={index}
                        src={image.Image}
                        width={image.width}
                        height={image.height}
                        index={index}
                    />
                ))}
            </div>

            <div className="flex flex-row justify-around flex-wrap mt-4 gap-5 items-center">
                {Library_skill.map((image, index) => (
                    <SkillDataProvider
                        key={index}
                        src={image.Image}
                        width={image.width}
                        height={image.height}
                        index={index}
                    />
                ))}
            </div>
            <div className="flex flex-row justify-around flex-wrap mt-4 gap-5 items-center">
                {Backend_skill.map((image, index) => (
                    <SkillDataProvider
                        key={index}
                        src={image.Image}
                        width={image.width}
                        height={image.height}
                        index={index}
                    />
                ))}
            </div>
            <div className="flex flex-row justify-around flex-wrap mt-4 gap-5 items-center">
                {Full_stack.map((image, index) => (
                    <SkillDataProvider
                        key={index}
                        src={image.Image}
                        width={image.width}
                        height={image.height}
                        index={index}
                    />
                ))}
            </div>
            <div className="flex flex-row justify-around flex-wrap mt-4 gap-5 items-center">
                {Other_skill.map((image, index) => (
                    <SkillDataProvider
                        key={index}
                        src={image.Image}
                        width={image.width}
                        height={image.height}
                        index={index}
                    />
                ))}
            </div>
        </section>
    );
}

export default Skills;
