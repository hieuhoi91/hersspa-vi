'use client';

import React, { useRef, useEffect, useState } from 'react';
import data from '@/data/data.json';
import Image from 'next/image';

const About = () => {
  const galleryRef = useRef<HTMLDivElement>(null);
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
        threshold: 0.2, // Trigger when 20% of the element is visible
        rootMargin: '50px',
      }
    );

    if (galleryRef.current) {
      observer.observe(galleryRef.current);
    }

    return () => {
      if (galleryRef.current) {
        // eslint-disable-next-line react-hooks/exhaustive-deps
        observer.unobserve(galleryRef.current);
      }
    };
  }, []);

  return (
    <section
      id="about"
      className="flex flex-col gap-8 md:gap-12 lg:gap-16 scroll-mt-60 mt-8 md:mt-12 lg:mt-16"
    >
      <div className="w-full max-w-[1200px] mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left side - Content */}
          <div className="space-y-6">
            <div className="space-y-3 md:space-y-4">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-amber-800 leading-tight">
                {data.about.title}
              </h2>
              <div className="w-16 md:w-20 h-1 bg-gradient-to-r from-amber-500 to-orange-500"></div>
            </div>

            <div className="space-y-3 md:space-y-4 text-gray-700 leading-relaxed">
              <p className="text-base md:text-lg">{data.about.content_1}</p>
              <p className="text-sm md:text-base">{data.about.content_2}</p>
              <div className="pt-4">
                <button className="cursor-pointer bg-gradient-to-r from-amber-500 to-orange-500 text-white px-8 py-3 rounded-full font-semibold hover:shadow-lg transition-all duration-300 transform hover:scale-105">
                  See more
                </button>
              </div>
            </div>
          </div>

          {/* Right side - YouTube Video */}
          <div className="relative">
            <div className="aspect-video rounded-2xl overflow-hidden shadow-2xl bg-white p-2 relative z-10">
              <iframe
                className="w-full h-full rounded-xl"
                src="https://www.youtube.com/embed/WiuiPoXxr-E?si=Il25egy2Eu0y5Azs"
                title="Her S spa Introduction Video"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>

            {/* Decorative elements */}
            <div className="absolute -top-8 -right-8 w-20 h-20 bg-gradient-to-br from-amber-400 to-orange-400 rounded-full opacity-20 z-0"></div>
            <div className="absolute -bottom-6 -left-6 w-16 h-16 bg-gradient-to-br from-orange-400 to-red-400 rounded-full opacity-20 z-0"></div>
          </div>
        </div>
      </div>

      {/* Spa Treatment Section */}
      <div className="py-8 md:py-12 lg:py-16 bg-[url('/assets/assets/minimal-bg-pattern.jpg')]">
        {/* Spa Gallery Section */}
        <div
          ref={galleryRef}
          className="mb-8 md:mb-12 lg:mb-16 w-full max-w-[1200px] mx-auto px-4"
        >
          {/* Gallery Grid - 3 columns */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 md:gap-4 lg:gap-6">
            {/* Column 1 - 2 rows */}
            <div
              className={`space-y-4 lg:space-y-6 ${
                isVisible ? 'animate-slide-in-right' : 'opacity-0'
              }`}
              style={{ animationDelay: isVisible ? '0.1s' : '0s' }}
            >
              <div className="relative h-32 sm:h-40 md:h-48 lg:h-64 rounded-xl md:rounded-2xl overflow-hidden transition-all duration-300 group">
                <Image
                  src={data.about.gallery.images[0].src}
                  alt={data.about.gallery.images[0].alt}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>

              <div className="relative h-32 sm:h-40 md:h-48 lg:h-64 rounded-xl md:rounded-2xl overflow-hidden transition-all duration-300 group">
                <Image
                  src={data.about.gallery.images[1].src}
                  alt={data.about.gallery.images[1].alt}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
            </div>

            {/* Column 2 - 2 rows */}
            <div
              className={`space-y-4 lg:space-y-6 ${
                isVisible ? 'animate-slide-in-right' : 'opacity-0'
              }`}
              style={{ animationDelay: isVisible ? '0.3s' : '0s' }}
            >
              <div className="relative h-32 sm:h-40 md:h-48 lg:h-64 rounded-xl md:rounded-2xl overflow-hidden transition-all duration-300 group">
                <Image
                  src={data.about.gallery.images[2].src}
                  alt={data.about.gallery.images[2].alt}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>

              <div className="relative h-32 sm:h-40 md:h-48 lg:h-64 rounded-xl md:rounded-2xl overflow-hidden transition-all duration-300 group">
                <Image
                  src={data.about.gallery.images[3].src}
                  alt={data.about.gallery.images[3].alt}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
            </div>

            {/* Column 3 - 1 tall row */}
            <div
              className={`${
                isVisible ? 'animate-slide-in-right' : 'opacity-0'
              }`}
              style={{ animationDelay: isVisible ? '0.5s' : '0s' }}
            >
              <div className="relative h-32 sm:h-40 md:h-full lg:h-[544px] rounded-xl md:rounded-2xl overflow-hidden transition-all duration-300 group">
                <Image
                  src={data.about.gallery.images[4].src}
                  alt={data.about.gallery.images[4].alt}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
            </div>
          </div>

          {/* Decorative elements */}
          <div className="relative mt-8">
            <div
              className={`absolute top-0 left-1/4 w-2 h-2 bg-amber-400 rounded-full opacity-60 ${
                isVisible ? 'animate-pulse' : 'opacity-0'
              }`}
            ></div>
            <div
              className={`absolute top-4 left-1/3 w-1 h-1 bg-orange-400 rounded-full opacity-40 ${
                isVisible ? 'animate-pulse' : 'opacity-0'
              }`}
              style={{ animationDelay: isVisible ? '1s' : '0s' }}
            ></div>
            <div
              className={`absolute top-2 right-1/4 w-3 h-3 bg-yellow-400 rounded-full opacity-50 ${
                isVisible ? 'animate-pulse' : 'opacity-0'
              }`}
              style={{ animationDelay: isVisible ? '2s' : '0s' }}
            ></div>
            <div
              className={`absolute top-6 right-1/3 w-1.5 h-1.5 bg-amber-300 rounded-full opacity-60 ${
                isVisible ? 'animate-pulse' : 'opacity-0'
              }`}
              style={{ animationDelay: isVisible ? '3s' : '0s' }}
            ></div>
          </div>
        </div>
        <div className="w-full max-w-[1200px] mx-auto px-4 grid md:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left side - Spa Image */}
          <div className="relative">
            <div className="rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src={data.about.spa_section.thumbnail}
                alt="Spa Treatment"
                className="w-full h-[500px] object-cover"
                width={500}
                height={500}
              />
            </div>

            {/* Decorative circles */}
            <div className="absolute -top-4 -left-4 w-8 h-8 bg-amber-400 rounded-full opacity-60"></div>
            <div className="absolute top-8 -left-2 w-6 h-6 bg-orange-400 rounded-full opacity-40"></div>
            <div className="absolute top-16 -left-1 w-4 h-4 bg-yellow-400 rounded-full opacity-50"></div>
            <div className="absolute top-24 left-1 w-3 h-3 bg-amber-300 rounded-full opacity-60"></div>
          </div>

          {/* Right side - Content */}
          <div className="space-y-4 md:space-y-6">
            <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-gray-800 leading-tight">
              How long has it been...{' '}
              <span className="text-[#5c8c30]">
                {data.about.spa_section.subtitle_highlight}
              </span>
            </h2>

            <div className="space-y-3 md:space-y-4 text-gray-600 leading-relaxed">
              <p className="text-base md:text-lg">
                {data.about.spa_section.description_1}
              </p>
              <p className="text-sm md:text-base">
                {data.about.spa_section.description_2}
              </p>

              <div className="mt-6">
                <p className="flex items-start space-x-2">
                  <span className="text-orange-500 mt-1">👸</span>
                  <span>
                    <strong>{data.about.spa_section.treatment_intro}</strong>
                  </span>
                </p>

                <ul className="mt-4 space-y-2 text-gray-700 ml-6">
                  {data.about.spa_section.benefits.map((benefit, index) => (
                    <li key={index}>• {benefit}</li>
                  ))}
                </ul>
              </div>

              <div className="mt-6 p-4 bg-gradient-to-r from-orange-50 to-amber-50 rounded-lg border-l-4 border-orange-400">
                <p className="flex items-start space-x-2">
                  <span className="text-orange-500 mt-1">✨</span>
                  <span>
                    <strong>{data.about.spa_section.highlight_text}</strong>
                  </span>
                </p>
                <p className="mt-2 text-gray-600">
                  {data.about.spa_section.closing_text}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
