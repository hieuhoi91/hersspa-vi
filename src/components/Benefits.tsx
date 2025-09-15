'use client';

import React, { useRef, useEffect, useState } from 'react';
import data from '@/data/data.json';

const Benefits = () => {
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
    <section id="benefits" className="py-16 text-white scroll-mt-60">
      <div className="w-full max-w-[1200px] mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold mb-6 text-amber-800">
            {data.benefits.title}
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-amber-500 to-orange-500 mx-auto"></div>
        </div>

        {/* Benefits Grid */}
        <div
          ref={sectionRef}
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {data.benefits.items.map((benefit, index) => (
            <div
              key={benefit.id}
              className={`text-center space-y-4 bg-white border-2 border-[#5c8c30] rounded-3xl p-6 shadow-lg hover:shadow-2xl transition-all duration-500 ${
                isVisible ? 'animate-slide-in-right' : 'opacity-0'
              }`}
              style={{ animationDelay: isVisible ? `${index * 0.2}s` : '0s' }}
            >
              {/* Number */}
              <div className="flex justify-center">
                <div className="w-12 h-12 bg-white text-[#5c8c30] rounded-full flex items-center justify-center text-xl font-bold">
                  {benefit.number}
                </div>
              </div>

              {/* Benefit Text */}
              <p className="text-black leading-relaxed text-sm lg:text-base">
                {benefit.title}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Benefits;
