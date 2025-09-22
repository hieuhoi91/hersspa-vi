'use client';

import React, { useRef, useEffect, useState } from 'react';
import data from '@/data/data.json';
import Image from 'next/image';

const Gallery = () => {
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
    <section
      id="gallery"
      className="py-8 md:py-12 lg:py-16 bg-gray-50 relative scroll-mt-60 bg-[url('/assets/minimal-bg-pattern.jpg')]"
    >
      <div className="w-full max-w-[1200px] mx-auto px-4">
        <Image
          src="/assets/service-decor.png"
          alt="Her S spa"
          width={100}
          height={100}
          className="absolute top-4 md:top-6 lg:top-10 w-20 md:w-24 lg:w-32 left-[8%] md:left-[12%] lg:left-[16%]"
        />
        {/* Header */}
        <div className="text-center mb-8 md:mb-12 lg:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-3xl lg:text-4xl font-bold text-amber-800 mb-3 md:mb-4">
            {data.gallery.title}
          </h2>
          <div className="w-16 md:w-20 h-1 bg-gradient-to-r from-amber-500 to-orange-500 mx-auto"></div>
        </div>

        <div
          ref={sectionRef}
          className="space-y-6 sm:space-y-8 md:space-y-10 lg:space-y-12"
        >
          {/* Row 1: First Large Image */}
          <div
            className={`${isVisible ? 'animate-slide-in-right' : 'opacity-0'}`}
            style={{ animationDelay: '0.1s' }}
          >
            <div className="relative w-full h-[200px] xs400:h-[220px] xs:h-[250px] sm:h-[350px] md:h-[450px] lg:h-[600px] xl:h-[650px] rounded-lg sm:rounded-xl md:rounded-2xl overflow-hidden transition-all duration-300 group hover:scale-[1.02] hover:shadow-xl">
              <Image
                src={data.gallery.images.large[0]}
                alt="Her S spa community activities"
                fill
                className="object-cover transition-transform duration-300 group-hover:scale-105"
                sizes="(max-width: 640px) 100vw, (max-width: 768px) 100vw, (max-width: 1024px) 100vw, 1200px"
                priority
              />
            </div>
          </div>

          {/* Row 2: Second Large Image */}
          <div
            className={`${isVisible ? 'animate-slide-in-right' : 'opacity-0'}`}
            style={{ animationDelay: '0.3s' }}
          >
            <div className="relative w-full h-[200px] xs400:h-[220px] xs:h-[250px] sm:h-[350px] md:h-[500px] lg:h-[600px] xl:h-[650px] rounded-lg sm:rounded-xl md:rounded-2xl overflow-hidden transition-all duration-300 group hover:scale-[1.02] hover:shadow-xl">
              <Image
                src={data.gallery.images.large[1]}
                alt="Her S spa team activities"
                fill
                className="object-cover transition-transform duration-300 group-hover:scale-105"
                sizes="(max-width: 640px) 100vw, (max-width: 768px) 100vw, (max-width: 1024px) 100vw, 1200px"
              />
            </div>
          </div>

          {/* Row 3: Mosaic Photo Gallery */}
          <div
            className={`${isVisible ? 'animate-slide-in-right' : 'opacity-0'}`}
            style={{ animationDelay: '0.5s' }}
          >
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-2 sm:gap-3 md:gap-4 lg:gap-5">
              {data.gallery.images.grid.map((src, index) => (
                <div
                  key={index}
                  className="relative aspect-square rounded-md sm:rounded-lg overflow-hidden group hover:scale-105 transition-all duration-300 hover:shadow-lg"
                >
                  <Image
                    src={src}
                    alt={`Community activity ${index + 1}`}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-110"
                    sizes="(max-width: 640px) 50vw, (max-width: 768px) 33vw, (max-width: 1024px) 25vw, 20vw"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Gallery;
