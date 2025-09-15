'use client';

import React, { useRef, useEffect, useState } from 'react';
import data from '@/data/data.json';
import Image from 'next/image';

const Whysochoose = () => {
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

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        // eslint-disable-next-line react-hooks/exhaustive-deps
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section id="why-choose" className="py-8 md:py-12 lg:py-16 scroll-mt-60">
      <div className="w-full max-w-[1200px] mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-8 md:mb-12 lg:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-3 md:mb-4 text-amber-800">
            {data.whyChoose.title}
          </h2>
          <div className="w-16 md:w-20 h-1 bg-gradient-to-r from-amber-500 to-orange-500 mx-auto"></div>
        </div>

        {/* Sections */}
        <div ref={sectionRef} className="space-y-8 md:space-y-12 lg:space-y-16">
          {data.whyChoose.sections.map((section, index) => (
            <div
              key={section.id}
              className={`grid md:grid-cols-2 gap-8 md:gap-10 lg:gap-12 items-start ${
                isVisible ? 'animate-slide-in-right' : 'opacity-0'
              }`}
              style={{ animationDelay: isVisible ? `${index * 0.3}s` : '0s' }}
            >
              {/* Content Side */}
              <div
                className={`space-y-4 md:space-y-6 ${
                  index % 2 === 1 ? 'md:order-2' : ''
                }`}
              >
                <div className="flex flex-col items-start space-x-4 p-3 md:p-4">
                  <div className="flex items-end opacity-50 gap-2 md:gap-4">
                    <div className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-bold leading-none text-[#5c8c30]">
                      {section.number}
                    </div>
                    <h3 className="text-sm sm:text-base md:text-lg font-bold text-[#5c8c30] mb-2 md:mb-4 leading-tight">
                      {section.title}
                    </h3>
                  </div>
                  <p className="text-black leading-relaxed text-sm sm:text-base md:text-lg">
                    {section.description}
                  </p>
                </div>
              </div>

              <div className={`${index % 2 === 1 ? 'md:order-1' : ''}`}>
                {section.id === 1 && section.certificate && (
                  <div className="relative h-48 sm:h-64 md:h-80 overflow-hidden transition-all duration-300 group rounded-xl md:rounded-2xl">
                    <Image
                      src={section.certificate}
                      alt={section.title}
                      fill
                      className="object-cover transition-transform duration-500"
                    />
                  </div>
                )}

                {section.id === 2 && section.images && (
                  <div className="relative h-48 sm:h-64 md:h-80 overflow-hidden transition-all duration-300 group rounded-xl md:rounded-2xl">
                    <Image
                      src={section.images}
                      alt={section.title}
                      fill
                      className="object-cover transition-transform duration-500"
                    />
                  </div>
                )}

                {section.id === 3 && section.teamImage && (
                  <div className="relative h-48 sm:h-64 md:h-80 overflow-hidden transition-all duration-300 group rounded-xl md:rounded-2xl">
                    <Image
                      src={section.teamImage}
                      alt={section.title}
                      fill
                      className="object-cover transition-transform duration-500"
                    />
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Whysochoose;
