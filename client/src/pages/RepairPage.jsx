import herovideo from "../assets/3130182-uhd_3840_2160_30fps.mp4"

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import comprepair from "../assets/computer repair.png";
import "swiper/css";
import "swiper/swiper-bundle.css";
// Brand Images (import your brand logos)
import appleLogo from "../assets/Apple.jpg";
import microsoftLogo from "../assets/microsoft.png";
import optomaLogo from "../assets/Acer.jpg";
import logitechLogo from "../assets/Compaq.jpg";
import rapooLogo from "../assets/DELL.jpg";
import hyundai from "../assets/hyundai.avif";
import nokia from "../assets/nokia.webp";
import reach from "../assets/reach.webp";
import razer from "../assets/razer.webp";
import lava from "../assets/lava.png";
import msi from "../assets/msi_1625561930.png";
import lenovo from "../assets/lenovo-logo.jpg";
import honor from "../assets/honor_logo.avif";
import sony from "../assets/Sony.jpg";
import samsung from "../assets/Samsung.jpg";
import toshiba from "../assets/Toshiba.jpg";
import jio from "../assets/7212017113800AM_jio.webp";

//service image
import BasiclvlImg from "../assets/basic repair.jpg";
import componentImg from "../assets/component level.jpg";
import chipimg from "../assets/chip repair.jpg";
import circuitimg from "../assets/circuit repair.jpg";

import ServicesList from "../components/ServiceList";
import WhatsAppIssueBox from "../components/IssueBox";





const ServicePage = () => {
  return (
    <div className="bg-gray-100">
     {/* Hero Section */}
     <div className="relative">
  <video
    src={herovideo} // Replace this with your video source
    className="w-full h-screen md:h-96 object-cover"
    autoPlay
    loop
    muted
    playsInline
  />
  <div className="absolute inset-0 bg-black opacity-50 pointer-events-none"></div>
  <div className="absolute inset-0 bg-black bg-opacity-60 flex flex-col items-center justify-center text-center px-4">
    <h1 className="text-yellow-500 text-2xl md:text-4xl lg:text-4xl font-extrabold leading-tight drop-shadow-md">
      Reliable Laptop Repair & Service You Can Trust
    </h1>
    <p className="text-white text-base md:text-lg lg:text-xl font-medium mt-4 leading-relaxed drop-shadow-md">
      Fast Turnaround, Expert Technicians, Affordable Prices.
    </p>
    <div className="flex flex-wrap justify-center space-x-0 space-y-4 md:space-x-4 md:space-y-0 mt-6">
      <a
        href="tel:+9779851095326"
        className="bg-white text-blue-700 px-6 py-4 rounded-full font-semibold hover:bg-blue-100 transition"
      >
        Call for Booking
      </a>
      <button
  className="border border-white text-white px-6 py-3 rounded-full hover:bg-white hover:text-blue-700 transition"
  onClick={() => {
    const phone = "9779851095326"; // Owner's WhatsApp number
    const message = "I have an issue"; // Pre-filled message
    const url = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
    window.open(url, "_blank");
  }}
>
  WhatsApp
</button>

    </div>
  </div>
</div>



      {/*Brand Section*/}
      <div className="py-16 bg-gray-50">
        <h2 className="text-3xl font-bold text-center mb-8">
          Brands We Sell & Repair
        </h2>
        <Swiper
          modules={[Autoplay]}
          autoplay={{
            delay: 2000,
            disableOnInteraction: false,
          }}
          loop={true}
          slidesPerView={3}
          spaceBetween={10} // Reduced spacing
          breakpoints={{
            640: { slidesPerView: 2 },
            1024: { slidesPerView: 6 },
          }}
          className="container mx-auto"
        >
          <SwiperSlide>
            <img src={appleLogo} alt="Apple" className="mx-auto h-24" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={microsoftLogo} alt="Microsoft" className="mx-auto h-24" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={optomaLogo} alt="Optoma" className="mx-auto h-24" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={logitechLogo} alt="Logitech" className="mx-auto h-24" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={rapooLogo} alt="Rapoo" className="mx-auto h-24" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={nokia} alt="Nokia" className="mx-auto h-24" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={reach} alt="Reach" className="mx-auto h-24" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={razer} alt="Razer" className="mx-auto h-24" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={lava} alt="Lava" className="mx-auto h-24" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={msi} alt="MSI" className="mx-auto h-24" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={lenovo} alt="Lenovo" className="mx-auto h-24" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={honor} alt="Honor" className="mx-auto h-24" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={sony} alt="Sony" className="mx-auto h-24" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={toshiba} alt="Toshiba" className="mx-auto h-24" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={jio} alt="Jio" className="mx-auto h-24" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={samsung} alt="Samsung" className="mx-auto h-24" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={hyundai} alt="Hyundai" className="mx-auto h-24" />
          </SwiperSlide>
          {/* Add more SwiperSlide components for additional brand logos */}
        </Swiper>
      </div>

      {/*Introductiosn */}
      <div className="flex flex-col md:flex-row items-center justify-between py-12 md:py-16 px-6 md:px-12 lg:px-20 bg-gray-100">
        <div className="md:w-1/2 mb-8 md:mb-0 lg:px-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">
            Kathmandu’s Elite Laptop Repair Service – COMPUTER SHOP NEPAL
          </h2>
          <p className="text-gray-700">
            Have you been searching for a fast and reliable laptop repair center
            you in kathmandu and also want to buy he best and top rated company
            laptops? Look no further -{" "}
            <a
              href="https://computershopnepal.com/"
              className="text-yellow-500 cursor-pointer underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              Computer Shop Nepal
            </a>
            , is your prime destination for all models of laptop repair in
            kathmandu. Since 2005, Computer Shop Nepal has been providing
            top-tier laptop repair services in the city. With over a decade of
            hands-on experience, a highly skilled CTEVT-certified team, and
            industry-leading service engineers, Computer Shop Nepal has
            established itself as atrusted name for laptop repairs in Kathmandu,
            Nepal.
          </p>
          <p2 className="py-11">
            In addition to our exceptional technical expertise, we offer
            competitive pricing, genuine spare parts, fast turnaround times, and
            a variety of specialized repair services. These qualities make
            Computer Shop Nepal your go-to solution for reliable and efficient
            laptop repair services in Kathmandu, Nepal.
          </p2>
          <h3 className="font-semibold text-2xl py-4">
            Let’s dive into why Guru Computer Solution can be your ideal choice
            for laptop repairing services in Nepal
          </h3>
          <p className="text-gray-600">
            At Computer Shop Nepal, we take pride in offering competitive
            pricing, authentic spare parts, expedited processing, and a swift
            turnaround time. Our commitment to customer satisfaction, coupled
            with a wide range of repair services, makes us the ideal choice for
            laptop repair in Kathmandu. Whether it’s a hardware malfunction,
            software glitch, or general maintenance, Computer Shop Nepal ensures
            your device is back in optimal condition
          </p>
        </div>
        <div className="md:w-1/2">
          <img
            src={comprepair}
            alt="Computer Shop Nepal"
            className="w-full h-auto rounded-md shadow-lg"
          />
        </div>
      </div>

      {/*list sections*/}
      <div>
  <h2 className="text-5xl font-bold text-center mb-5 text-orange-500">
    Services We Provide
  </h2>
  <div className="px-8 md:px-20 lg:px-20">
    <p className="py-11 text-gray-600 text-center">
      We offer comprehensive computer repair services to keep your devices running smoothly. 
      Whether you’re dealing with slow performance, hardware malfunctions, software issues, 
      or virus and malware problems, our team of experienced technicians is here to help. 
      From troubleshooting and diagnostics to hardware upgrades and data recovery, we ensure 
      your computer is restored to its optimal condition.
    </p>
  </div>

  <div className="px-8 md:px-20 lg:px-40 space-y-12">
    {/* Service 1 */}
    <div className="flex flex-col md:flex-row md:items-center md:space-x-8">
      <div className="md:w-1/4 w-full mb-4 md:mb-0">
        <a href="/repair" className="hover:scale-105 transition-transform">
          <img
            src={componentImg}
            alt="Basic Level Laptop Repairing"
            className="w-full h-auto rounded-md cursor-pointer"
          />
        </a>
      </div>
      <div className="md:w-3/4 w-full">
        <a href="/repair" className="hover:text-blue-500 transition-colors">
          <h2 className="text-3xl font-bold text-gray-700 mb-2 cursor-pointer">
            1. Basic Level Laptop Repairing
          </h2>
        </a>
        <p className="text-gray-600">
          Guru Computer Solution quickly identifies common issues like cracked screens, 
          battery glitches, and software problems. Swing by their repair center in Kathmandu.
        </p>
      </div>
    </div>

    {/* Service 2 */}
    <div className="flex flex-col md:flex-row md:items-center md:space-x-8">
      <div className="md:w-1/4 w-full mb-4 md:mb-0">
        <a href="/repair" className="hover:scale-105 transition-transform">
          <img
            src={BasiclvlImg}
            alt="Component Level Laptop Repairing"
            className="w-full h-auto rounded-md cursor-pointer"
          />
        </a>
      </div>
      <div className="md:w-3/4 w-full">
        <a href="/repair" className="hover:text-blue-500 transition-colors">
          <h2 className="text-3xl font-bold text-gray-700 mb-2 cursor-pointer">
            2. Component Level Laptop Repairing
          </h2>
        </a>
        <p className="text-gray-600">
          Guru Computer Solution's tech whizzes use gadgets like multi-meters to fix parts 
          like batteries, CPUs, screens, and keyboards. Visit us for professional repairs.
        </p>
      </div>
    </div>

    {/* Service 3 */}
    <div className="flex flex-col md:flex-row md:items-center md:space-x-8">
      <div className="md:w-1/4 w-full mb-4 md:mb-0">
        <a href="/repair" className="hover:scale-105 transition-transform">
          <img
            src={chipimg}
            alt="Chip Level Laptop Repairing"
            className="w-full h-auto rounded-md cursor-pointer"
          />
        </a>
      </div>
      <div className="md:w-3/4 w-full">
        <a href="/repair" className="hover:text-blue-500 transition-colors">
          <h2 className="text-3xl font-bold text-gray-700 mb-2 cursor-pointer">
            3. Chip Level Laptop Repairing
          </h2>
        </a>
        <p className="text-gray-600">
          We specialize in chip-level repairs, addressing complex hardware issues 
          that require advanced tools and expertise. Let us restore your device.
        </p>
      </div>
    </div>

    {/* Service 4 */}
    <div className="flex flex-col md:flex-row md:items-center md:space-x-8">
      <div className="md:w-1/4 w-full mb-4 md:mb-0">
        <a href="/repair" className="hover:scale-105 transition-transform">
          <img
            src={circuitimg}
            alt="Circuit Level Laptop Repairing"
            className="w-full h-auto rounded-md cursor-pointer"
          />
        </a>
      </div>
      <div className="md:w-3/4 w-full">
        <a href="/repair" className="hover:text-blue-500 transition-colors">
          <h2 className="text-3xl font-bold text-gray-700 mb-2 cursor-pointer">
            4. Circuit Level Laptop Repairing
          </h2>
        </a>
        <p className="text-gray-600">
          Our team handles intricate circuit-level repairs, ensuring core 
          functionalities are restored with precision and care.
        </p>
      </div>
    </div>
  </div>
</div>


      {/* Services Section */}
      <div className="py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-5xl font-bold text-center mb-10 text-black">
            Service We Provide
          </h1>
          <ServicesList/>
          <div className="py-16">
            <div className="container mx-auto px-4">
              <h2 className="text-3xl font-bold text-center mb-8 text-grey-800">
                Additional Information or section     
              </h2>
              <p className="text-center text-gray-600">
              <WhatsAppIssueBox/>

              </p>

            </div>

          </div>
        </div>   
        </div>       
      </div>    
  );
};

export default ServicePage;
