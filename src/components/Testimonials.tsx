'use client';

import React from 'react';
import { testimonials } from "@/data/testimonials";
import { useLanguage } from "@/contexts/LanguageContext";
import Image from "next/image";
import { FaUser } from "react-icons/fa";
import { FaUserAlt } from "react-icons/fa";

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
                        <div className="w-[50px] h-[50px] rounded-full shadow-md flex items-center justify-center bg-white border-2 overflow-hidden" style={{ borderColor: '#0a3420' }}>
                            {testimonial.avatar ? (
                                <Image 
                                    src={testimonial.avatar} 
                                    alt={testimonial.name} 
                                    width={50} 
                                    height={50} 
                                    className="w-full h-full object-cover"
                                    unoptimized
                                />
                            ) : index === 0 ? (
                                <FaUserAlt className="w-6 h-6 text-[#0a3420]" />
                            ) : index === 1 ? (
                                <FaUser className="w-6 h-6 text-[#0a3420]" />
                            ) : (
                                <FaUserAlt className="w-6 h-6 text-[#0a3420]" />
                            )}
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
