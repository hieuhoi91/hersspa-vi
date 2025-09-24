import { useDialogStore } from '@/store/useDialogStore';
import { useEffect, useState } from 'react';

export const StickyContactBar = ({
  sectionRef,
}: {
  sectionRef: React.RefObject<HTMLDivElement | null>;
}) => {
  const [isSticky, setIsSticky] = useState(true);
  const { setIsDropdownOpen } = useDialogStore();

  useEffect(() => {
    const handleScroll = () => {
      if (sectionRef.current) {
        const rect = sectionRef.current.getBoundingClientRect();
        const sectionBottom = rect.bottom;

        // If section has scrolled past the viewport, make it fixed
        if (sectionBottom <= 0) {
          setIsSticky(false);
        } else {
          setIsSticky(true);
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [sectionRef]);

  return (
    <div
      className={`${
        isSticky ? 'sticky' : 'fixed'
      } bottom-0 left-0 right-0 z-30 bg-[#5c8c30] text-white py-2 md:py-3 px-3 md:px-4 shadow-lg`}
    >
      <div className="w-full max-w-[1200px] mx-auto flex items-center justify-between">
        <div className="flex items-center space-x-2 md:space-x-4">
          <span className="text-sm md:text-lg font-medium">
            Thư giãn với Her S Spa!
          </span>
        </div>
        <button className="bg-white text-[#5c8c30] px-4 md:px-6 py-1.5 md:py-2 cursor-pointer rounded-full font-semibold hover:bg-gray-100 transition-colors duration-300 flex items-center space-x-1 md:space-x-2 text-xs md:text-sm">
          <span className="text-orange-500">❤️</span>
          <button onClick={() => setIsDropdownOpen(true)}>Liên hệ</button>
        </button>
      </div>
    </div>
  );
};
