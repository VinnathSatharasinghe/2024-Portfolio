/* eslint-disable react/no-unknown-property */
/* eslint-disable no-unused-vars */
import React, { Suspense, useRef, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";

import { Fox } from "../modal/Fox";
import useAlert from "../hooks/useAlert";
import Alert from "./Alert";
import Loader from "./Loader";
import SectionWrapper from "../components/hoc/SectionWrapper";
import { slideIn, textVariant } from "../utils/motion";

const Contact = () => {
    const formRef = useRef();
    const [form, setForm] = useState({ name: "", email: "", message: "" });
    const { alert, showAlert, hideAlert } = useAlert();
    const [loading, setLoading] = useState(false);
    const [currentAnimation, setCurrentAnimation] = useState("idle");

    const handleChange = ({ target: { name, value } }) => {
        setForm({ ...form, [name]: value });
    };

    const handleFocus = () => setCurrentAnimation("walk");
    const handleBlur = () => setCurrentAnimation("idle");

    const generateEmailContent = (form) => {
        return `
            <div style="font-family: Arial, sans-serif; line-height: 1.6; color: #333;">
                <table style="width: 100%; max-width: 600px; margin: auto; border-collapse: collapse; border: 1px solid #ddd;">
                    <thead>
                        <tr style="background-color: #f4f4f4;">
                            <th style="padding: 10px; border-bottom: 1px solid #ddd; text-align: left; font-size: 24px; color: #333;">
                                Contact Form Submission
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td style="padding: 10px; border-bottom: 1px solid #ddd;">
                                <p style="margin: 0; font-size: 18px;"><strong>Name:</strong> ${form.name}</p>
                            </td>
                        </tr>
                        <tr>
                            <td style="padding: 10px; border-bottom: 1px solid #ddd;">
                                <p style="margin: 0; font-size: 18px;"><strong>Email:</strong> ${form.email}</p>
                            </td>
                        </tr>
                        <tr>
                            <td style="padding: 10px;">
                                <p style="margin: 0; font-size: 18px;"><strong>Message:</strong></p>
                                <p style="margin: 0; font-size: 16px;">${form.message}</p>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        `;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setLoading(true);
        setCurrentAnimation("hit");

        const emailContent = generateEmailContent(form);

        emailjs
            .send(
                import.meta.env.VITE_APP_EMAILJS_SERVICE_ID,
                import.meta.env.VITE_APP_EMAILJS_TEMPLATE_ID,
                {
                    from_name: form.name,
                    to_name: "Arunalu Bamunusighe",
                    from_email: form.email,
                    to_email: "arunalubamunusinghe75@gmail.com",
                    message: form.message,
                    html_message: emailContent,
                },
                import.meta.env.VITE_APP_EMAILJS_PUBLIC_KEY
            )
            .then(
                () => {
                    setLoading(false);
                    showAlert({
                        show: true,
                        text: "Thank you for your message 😃",
                        type: "success",
                    });

                    setTimeout(() => {
                        hideAlert(false);
                        setCurrentAnimation("idle");
                        setForm({
                            name: "",
                            email: "",
                            message: "",
                        });
                    }, 3000);
                },
                (error) => {
                    setLoading(false);
                    console.error(error);
                    setCurrentAnimation("idle");

                    showAlert({
                        show: true,
                        text: "I didn't receive your message 😢",
                        type: "danger",
                    });
                }
            );
    };

    return (
        <section id="contact" >
            <div className="mt-0 flex xl:flex-row flex-col-reverse gap-5 overflow-hidden">
                {alert.show && <Alert text={alert.text} type={alert.type} />}

                <motion.div
                    variants={slideIn("left", "tween", 0.2, 1)}
                    className="flex-[0.6] bg-black-100 p-6 rounded-2xl"
                >
                    <p className="text-[#dfd9ff] font-medium text-[20px] leading-[30px]">
                        Get in touch
                    </p>
                    <h3 className="font-black text-white text-[40px] leading-[50px]">
                        Contact
                    </h3>

                    <form
                        ref={formRef}
                        onSubmit={handleSubmit}
                        className="mt-4 flex flex-col gap-4"
                    >
                        <label className="flex flex-col">
                            <span className="text-white font-medium mb-2">Your Name</span>
                            <input
                                required
                                type="text"
                                name="name"
                                value={form.name}
                                onChange={handleChange}
                                onFocus={handleFocus}
                                onBlur={handleBlur}
                                placeholder="What's your name?"
                                className="bg-tertiary py-3 px-4 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium"
                            />
                        </label>
                        <label className="flex flex-col">
                            <span className="text-white font-medium mb-2">Your email</span>
                            <input
                                required
                                type="email"
                                name="email"
                                value={form.email}
                                onChange={handleChange}
                                onFocus={handleFocus}
                                onBlur={handleBlur}
                                placeholder="What's your email address?"
                                pattern="[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,}"
                                className="bg-tertiary py-3 px-4 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium"
                            />
                        </label>
                        <label className="flex flex-col">
                            <span className="text-white font-medium mb-2">Your Message</span>
                            <textarea
                                required
                                rows={3}
                                name="message"
                                value={form.message}
                                onChange={handleChange}
                                onFocus={handleFocus}
                                onBlur={handleBlur}
                                placeholder="What you want to say?"
                                className="bg-tertiary py-3 px-4 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium"
                            />

                        </label>

                        <button
                            type="submit"
                            className="py-3 button-primary text-center text-white cursor-pointer rounded-lg max-w-[120px]"
                        >
                            {loading ? "Sending..." : "Send"}
                        </button>
                    </form>
                </motion.div>

                <div className='lg:w-1/3 w-full lg:h-auto md:h-[400px] h-[300px]'>
                    <Canvas
                        camera={{
                            position: [0, 0, 5],
                            fov: 75,
                            near: 0.1,
                            far: 1000,
                        }}
                    >
                        <directionalLight position={[0, 0, 1]} intensity={2.5} />
                        <ambientLight intensity={1} />
                        <pointLight position={[5, 10, 0]} intensity={2} />
                        <spotLight
                            position={[10, 10, 10]}
                            angle={0.15}
                            penumbra={1}
                            intensity={2}
                        />

                        <Suspense fallback={<Loader />}>
                            <Fox
                                currentAnimation={currentAnimation}
                                position={[1, 0.35, 0]} // Adjusted x-coordinate to move Fox to the right
                                rotation={[12.629, -0.6, 0]}
                                scale={[0.4, 0.4, 0.4]}
                            />
                        </Suspense>
                    </Canvas>
                </div>
            </div>

        </section>
    );
};

export default SectionWrapper(Contact, "contact");
