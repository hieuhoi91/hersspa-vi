'use client';

import React, { useRef, useEffect, useState } from 'react';
import data from '@/data/data.json';
import Image from 'next/image';
import { StickyContactBar } from './StickyContactBar';
import { MdKeyboardArrowDown } from 'react-icons/md';

const Services = () => {
  const servicesRef = useRef<HTMLDivElement>(null);
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      {
        threshold: 0.2,
        rootMargin: '50px',
      }
    );

    if (servicesRef.current) {
      observer.observe(servicesRef.current);
    }

    return () => {
      if (servicesRef.current) {
        // eslint-disable-next-line react-hooks/exhaustive-deps
        observer.unobserve(servicesRef.current);
      }
    };
  }, []);

  return (
    <>
      <section
        ref={sectionRef}
        id="service"
        className="bg-gray-50 scroll-mt-60 bg-[url('/assets/minimal-bg-pattern.jpg')]"
      >
        <div className="w-full max-w-[1200px] mx-auto px-4">
          {/* Header */}
          <div className="text-center mb-8 md:mb-12 pt-4">
            <div className="flex items-center justify-center mb-4 md:mb-6 w-full max-w-[1200px] mx-auto">
              <div className="flex items-center justify-end w-full space-x-2 md:space-x-4">
                <div className="w-12 md:w-16 lg:w-20">
                  <Image
                    src="/assets/service-decor.png"
                    alt="decor"
                    width={200}
                    height={200}
                    className="object-contain"
                  />
                </div>
                <span className="text-[#5c8c30] italic font-medium text-sm md:text-base">
                  {data.services.subtitle}
                </span>
              </div>
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-[#5c8c30] mb-4 md:mb-6">
              {data.services.title}
            </h2>
          </div>

          {/* Services Grid */}
          <div
            ref={servicesRef}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 mb-8 md:mb-12 w-full max-w-[1200px] mx-auto"
          >
            {data.services.items.map((service, index) => (
              <div
                key={service.id}
                className={`bg-white rounded-2xl md:rounded-3xl p-4 md:p-6 shadow-lg hover:shadow-2xl transition-all duration-500 ${
                  isVisible ? 'animate-slide-in-right' : 'opacity-0'
                }`}
                style={{ animationDelay: isVisible ? `${index * 0.2}s` : '0s' }}
              >
                {/* Service Image */}
                <div className="relative h-48 md:h-56 lg:h-64 mb-4 md:mb-6 rounded-xl md:rounded-2xl overflow-hidden">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover hover:scale-105 transition-transform duration-500"
                  />
                </div>

                {/* Service Title */}
                <h3 className="text-lg md:text-xl font-bold text-gray-800 mb-3 md:mb-4 text-center leading-tight">
                  {service.title}
                </h3>

                {/* Service Benefits */}
                <div className="space-y-2 md:space-y-3">
                  {service.benefits.map((benefit, benefitIndex) => (
                    <div
                      key={benefitIndex}
                      className="flex items-start space-x-2"
                    >
                      <div className="w-1.5 h-1.5 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                      <p className="text-gray-600 text-xs md:text-sm leading-relaxed">
                        {benefit}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* View All Button */}
          <div className="text-center">
            <button className="bg-[#5c8c30] hover:bg-green-700 text-white px-6 md:px-8 py-2 md:py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl text-sm md:text-base">
              {data.services.button_text}
            </button>
          </div>
        </div>
        <div
          className="mt-8 md:mt-12 lg:mt-16 bg-cover bg-center overflow-hidden"
          style={{ backgroundImage: "url('/assets/minimal-bg-pattern.jpg')" }}
        >
          <div className="bg-[url('/assets/service-thumbnail.jpg')] bg-cover bg-black/50 bg-blend-overlay bg-center p-6 md:p-8 lg:p-12">
            <div className="grid md:grid-cols-2 gap-6 md:gap-8 max-w-4xl mx-auto">
              {data.services.categories.map((category, index) => (
                <div
                  key={index}
                  className="bg-white/90 backdrop-blur-sm flex gap-2 md:gap-4 justify-center h-full items-center rounded-xl md:rounded-2xl p-4 md:p-6 text-center hover:bg-white transition-all duration-300"
                >
                  <h3 className="text-lg md:text-xl font-bold text-gray-800">
                    {category}
                  </h3>
                  <MdKeyboardArrowDown className="text-2xl md:text-3xl" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      <StickyContactBar sectionRef={sectionRef} />
    </>
  );
};

export default Services;
