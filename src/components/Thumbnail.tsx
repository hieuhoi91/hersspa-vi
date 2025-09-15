'use client';

import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectFade, Autoplay } from 'swiper/modules';
import data from '../data/data.json';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';
import Image from 'next/image';

const Thumbnail = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [selectedImageId, setSelectedImageId] = useState<number | null>(null);

  const openModal = (imageSrc: string, imageId: number) => {
    setSelectedImage(imageSrc);
    setSelectedImageId(imageId);
  };

  const closeModal = () => {
    setSelectedImage(null);
    setSelectedImageId(null);
  };

  return (
    <div className="w-full max-w-[1200px] mx-auto px-4">
      <Swiper
        modules={[EffectFade, Autoplay]}
        effect="fade"
        slidesPerView={1}
        loop={true}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        className="mySwiper"
      >
        {data.thumbnail.map((item) => (
          <SwiperSlide key={item.id}>
            <div
              className="relative overflow-hidden rounded-b-lg duration-300 cursor-pointer"
              onClick={() => openModal(item.image, item.id)}
            >
              <Image
                src={item.image}
                alt={`Thumbnail ${item.id}`}
                width={500}
                height={500}
                className="w-full h-[400px] sm:h-[500px] md:h-[600px] lg:h-[700px] rounded-b-lg object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Modal for zoomed image */}
      {selectedImage && (
        <div
          className="fixed inset-0 bg-transparent bg-opacity-70 backdrop-blur-sm flex items-center justify-center z-50 p-2 sm:p-4"
          onClick={closeModal}
        >
          <div className="relative">
            <button
              onClick={closeModal}
              className="absolute -top-8 sm:-top-12 right-0 cursor-pointer bg-gray-800 text-white text-lg sm:text-xl hover:bg-gray-600 transition-colors rounded-full w-8 h-8 sm:w-10 sm:h-10 flex items-center justify-center shadow-lg z-10"
            >
              ✕
            </button>
            <Image
              src={selectedImage}
              alt={`Thumbnail ${selectedImageId}`}
              width={1200}
              height={1200}
              className="max-w-full max-h-[80vh] sm:max-h-[85vh] object-contain rounded-lg shadow-xl"
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default Thumbnail;
