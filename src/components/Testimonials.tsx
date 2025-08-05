'use client';

import React from 'react';
import { testimonials } from "@/data/testimonials";
import { useLanguage } from "@/contexts/LanguageContext";
import { FaUser, FaUserAlt, FaUserCircle, FaUserTie, FaUserAstronaut } from "react-icons/fa";

const getBackgroundColor = (index: number): string => {
    const colors = [
        '#E3F2FD', // Light blue
        '#F3E5F5', // Light purple
        '#E8F5E9', // Light green
    ];
    return colors[index % colors.length];
};

const getUserIcon = (index: number): JSX.Element => {
    const iconSize = '1.75rem';
    const iconColor = '#0a3420'; // Dark green to match the theme
    
    // Different user icons for variety
    const icons = [
        <FaUserCircle key="user1" className="w-full h-full" style={{ color: iconColor, fontSize: iconSize }} />,
        <FaUserTie key="user2" className="w-full h-full" style={{ color: iconColor, fontSize: iconSize }} />,
        <FaUserAstronaut key="user3" className="w-full h-full" style={{ color: iconColor, fontSize: iconSize }} />,
    ];
    
    return icons[index % icons.length];
};

const Testimonials: React.FC = () => {
    const { t } = useLanguage();
    return (
        <div className="grid gap-14 max-w-lg w-full mx-auto lg:gap-8 lg:grid-cols-3 lg:max-w-full">
            {testimonials.map((testimonial, index) => (
                <div
                    key={index}
                    className=""
                >
                    <div className="flex items-center mb-4 w-full justify-center lg:justify-start">
                        <div className="w-[50px] h-[50px] rounded-full shadow-md flex items-center justify-center overflow-hidden" 
                                 style={{ 
                                    backgroundColor: getBackgroundColor(index),
                                    border: '2px solid #0a3420'
                                 }}>
                            {getUserIcon(index)}
                        </div>
                        <div className="ml-4">
                            <h3 className="font-bold text-[18px] leading-[28px] font-[MadaniArabic-SemiBold]" style={{ color: '#0B3B25' }}>
                                {testimonial.name}
                            </h3>
                            <p className="text-sm text-foreground-accent font-[MadaniArabic-Regular]">{testimonial.role}</p>
                        </div>
                    </div>
                    <p style={{ fontFamily: "MadaniArabic-Regular, sans-serif" }} className="text-gray-600 mb-4">
                        {testimonial.messageKey ? t(testimonial.messageKey) : testimonial.message}
                    </p>
                </div>
            ))}
        </div>
    );
};

export default Testimonials;
