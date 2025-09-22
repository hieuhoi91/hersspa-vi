import { GlobeIcon, MailIcon, PhoneIcon } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="relative bg-cover bg-center bg-black/50 bg-blend-overlay bg-no-repeat pb-16 md:pb-28 text-white py-8 md:py-12 lg:py-16 bg-[url('/assets/footer.jpg')]">
      <div className="w-full max-w-[1200px] mx-auto px-4">
        {/* Stats Section */}
        <div className="flex flex-col sm:flex-row justify-center gap-8 sm:gap-16 md:gap-24 lg:gap-32 mb-8 md:mb-12 lg:mb-16">
          <div className="text-center">
            <div className="text-4xl sm:text-5xl md:text-6xl font-bold mb-1 md:mb-2">
              5+
            </div>
            <div className="text-sm sm:text-base md:text-lg lg:text-xl">
              Tỷ lệ hài lòng khách hàng
            </div>
          </div>
          <div className="text-center">
            <div className="text-4xl sm:text-5xl md:text-6xl font-bold mb-1 md:mb-2">
              200+
            </div>
            <div className="text-sm sm:text-base md:text-lg lg:text-xl">
              Chi nhánh
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="flex flex-col lg:flex-row gap-8 md:gap-10 lg:gap-12 items-center lg:items-start justify-center lg:justify-between">
          {/* Left Side - Contact Info */}
          <div className="space-y-6 md:space-y-8 w-full lg:w-auto text-center lg:text-left">
            {/* Brand */}
            <div>
              <h3 className="text-xl sm:text-2xl font-bold text-amber-400 mb-4 md:mb-6">
                Her S Spa
              </h3>
              <div className="space-y-2 md:space-y-3">
                <div className="flex items-center justify-center lg:justify-start space-x-2 md:space-x-3">
                  <span className="text-amber-400">
                    <PhoneIcon className="w-3 h-3 md:w-4 md:h-4" />
                  </span>
                  <span className="text-sm md:text-base">Hotline:</span>
                </div>
                <div className="flex items-center justify-center lg:justify-start space-x-2 md:space-x-3">
                  <span className="text-amber-400">
                    <MailIcon className="w-3 h-3 md:w-4 md:h-4" />
                  </span>
                  <span className="text-sm md:text-base">
                    Email: hersspa.mus@gmail.com
                  </span>
                </div>
                <div className="flex items-center justify-center lg:justify-start space-x-2 md:space-x-3">
                  <span className="text-amber-400">
                    <GlobeIcon className="w-3 h-3 md:w-4 md:h-4" />
                  </span>
                  <span className="text-sm md:text-base">
                    Website:{' '}
                    <a
                      href="https://hersspa.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-white hover:text-amber-400 transition-colors underline cursor-pointer"
                    >
                      hersspa.com
                    </a>
                  </span>
                </div>
              </div>
            </div>

            {/* Customer Service */}
            <div>
              <h4 className="text-lg sm:text-xl font-bold text-amber-400 mb-3 md:mb-4">
                DỊCH VỤ KHÁCH HÀNG
              </h4>
              <div className="space-y-1 md:space-y-2">
                <div className="text-sm md:text-base">Giờ mở cửa</div>
                <div className="text-sm md:text-base">
                  Mở cửa hàng hàng ngày
                </div>
                <div className="text-sm md:text-base">
                  Lịch hẹn cuối cùng trước 1 NGÀY
                </div>
              </div>
            </div>
          </div>

          {/* Right Side - Map */}
          <div className="w-full lg:w-auto flex justify-center lg:justify-end">
            <iframe
              src="https://www.google.com/maps/d/embed?mid=1AkiiRrBk1z6WNHZ5m74kdC-bYYEbBeQ&ehbc=2E312F"
              width="640"
              height="360"
              className="w-full max-w-[500px] h-[250px] sm:h-[300px] md:h-[350px] lg:w-[640px] lg:h-[480px] rounded-lg"
              style={{ minWidth: '300px' }}
            ></iframe>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
