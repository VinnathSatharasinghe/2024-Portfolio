/* eslint-disable no-unused-vars */
import React from "react";

const Footer = () => {
    const currentYear = new Date().getFullYear();
    console.log(currentYear);
    return (
        <div className="w-full bg-transparent text-gray-200 shadow-lg p-4">
            <div className="text-center text-sm">
                &copy; Arunalu Bamunusinghe {currentYear} Inc. All rights reserved
            </div>
        </div>
    );
};

export default Footer;
