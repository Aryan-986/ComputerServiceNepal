import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/swiper-bundle.css";
import comprepair from "../assets/computerrepairing.jpg";

// Hero Images
import heroImage1 from "../assets/herohome.png";
import heroImage2 from "../assets/herohome2.png";
import heroImage3 from "../assets/herohome3.png";
import hero4 from "../assets/3865559-uhd_3840_2160_25fps.mp4"

// Brand Images (import your brand logos)
import appleLogo from "../assets/Apple.jpg";
import microsoftLogo from "../assets/microsoft.png";
import optomaLogo from "../assets/Acer.jpg";
import logitechLogo from "../assets/Compaq.jpg";
import rapooLogo from "../assets/DELL.jpg";
import hyundai from "../assets/hyundai.avif";
import nokia from "../assets/nokia.webp"
import reach from "../assets/reach.webp"
import razer from "../assets/razer.webp"
import lava from "../assets/lava.png"
import msi from "../assets/msi_1625561930.png"
import lenovo from "../assets/lenovo-logo.jpg"
import honor from "../assets/honor_logo.avif"
import sony from "../assets/Sony.jpg"
import samsung from "../assets/Samsung.jpg"
import toshiba from "../assets/Toshiba.jpg"
import jio from "../assets/7212017113800AM_jio.webp"
// Add more brand imports here...

//service image 
import BasiclvlImg from "../assets/basic repair.jpg"
import componentImg from "../assets/component level.jpg"
import chipimg from "../assets/chip repair.jpg"
import circuitimg from "../assets/circuit repair.jpg"

//testomonial image

import testomonial1 from "../assets/testomonial1.jpeg"
import testomonial2 from "../assets/testomonial 2.webp"
import testomonial3 from "../assets/testomonial 3.jpeg"
import testomonial4 from "../assets/testomonial 4.webp"
import testomonial5 from "../assets/testomnial6.jpeg"


const Home = () => {
  return (
    <div className="relative">
      {/* Hero Section */}
      {/* Hero Section */}
      <div className="relative">
      <div className="relative">
  <Swiper
    modules={[Autoplay, Pagination]}
    autoplay={{
      delay: 5000,
      disableOnInteraction: false,
    }}
    pagination={{ clickable: true }}
    loop={true}
    className="relative h-[50vh] md:h-[80vh] lg:h-[100vh]"
  >
    {/* Slide 1 */}
    <SwiperSlide>
      <div className="relative w-full h-[50vh] md:h-[80vh] lg:h-[100vh]">
        <img
          src={heroImage1}
          alt="Hero 1"
          className="w-full h-full object-cover"
        />
        {/* Overlay to lighten the image */}
        <div className="absolute inset-0 bg-black opacity-70"></div>
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4">
          <h1 className="text-yellow-500 text-4xl md:text-6xl font-extrabold leading-tight text-shadow-glow">
            Amass Computer
          </h1>
          <p className="text-white font-bold text-xl md:text-xl mt-4 leading-relaxed text-shadow-glow">
            We turn tech troubles into seamless solutions. From repairs to
            cutting-edge gaming systems, we've got you covered.
          </p>
          <div className="flex flex-wrap justify-center space-x-0 space-y-4 md:space-x-4 md:space-y-0 mt-6">
      <a
        href="tel:+9779851095326"
        className="bg-white text-blue-700 px-6 py-3 rounded-full font-semibold hover:bg-blue-100 transition"
      >
        Call for Booking
      </a>
      <button
  className="border border-white text-white px-6 py-3 rounded-full hover:bg-white hover:text-blue-700 transition"
  onClick={() => {
    const phone = "9779851095326"; // Owner's WhatsApp number
    const message = "I have an issue on my laptop/cpmputer's"; // Pre-filled message
    const url = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
    window.open(url, "_blank");
  }}
>
  WhatsApp
</button>

    </div>
        </div>
      </div>
    </SwiperSlide>

    {/* Slide 2 */}
    <SwiperSlide>
      <div className="relative w-full h-[50vh] md:h-[80vh] lg:h-[100vh]">
        <img
          src={heroImage2}
          alt="Hero 2"
          className="w-full h-full object-cover"
        />
        {/* Overlay to lighten the image */}
        <div className="absolute inset-0 bg-black opacity-70"></div>
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4">
          <h1 className="text-yellow-500 text-4xl md:text-6xl font-extrabold leading-tight text-shadow-glow">
            Amass Computer
          </h1>
          <p className="text-white font-bold text-xl md:text-xl mt-4 leading-relaxed text-shadow-glow">
            We turn tech troubles into seamless solutions. From repairs to
            cutting-edge gaming systems, we've got you covered.
          </p>
          <div className="flex space-x-4 mt-6">
          <a
        href="tel:+9779851095326"
        className="bg-white text-blue-700 px-6 py-3 rounded-full font-semibold hover:bg-blue-100 transition"
      >
        Call for Booking
      </a>
            <button
  className="border border-white text-white px-6 py-3 rounded-full hover:bg-white hover:text-blue-700 transition"
  onClick={() => {
    const phone = "9779851095326"; // Owner's WhatsApp number
    const message = "I have an issue on my laptop/cpmputer's"; // Pre-filled message
    const url = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
    window.open(url, "_blank");
  }}
>
  WhatsApp
</button>
          </div>
        </div>
      </div>
    </SwiperSlide>

    {/* Slide 3 */}
    <SwiperSlide>
      <div className="relative w-full h-[50vh] md:h-[80vh] lg:h-[100vh]">
        <img
          src={heroImage3}
          alt="Hero 3"
          className="w-full h-full object-cover"
        />
        {/* Overlay to lighten the image */}
        <div className="absolute inset-0 bg-black opacity-70"></div>
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4">
          <h1 className="text-yellow-500 text-4xl md:text-6xl font-extrabold leading-tight text-shadow-glow">
            Amass Computer
          </h1>
          <p className="text-white font-bold text-xl md:text-xl mt-4 leading-relaxed text-shadow-glow">
            We turn tech troubles into seamless solutions. From repairs to
            cutting-edge gaming systems, we've got you covered.
          </p>
          <div className="flex space-x-4 mt-6">
          <button className="bg-white text-blue-700 px-6 py-3 rounded-full font-semibold hover:bg-blue-100 transition">
              Call for Booking
            </button>
            <button className="border border-white text-white px-6 py-3 rounded-full hover:bg-white hover:text-blue-700 transition">
              View Devices
            </button>
          </div>
        </div>
      </div>
    </SwiperSlide>
  </Swiper>
</div>

</div>


{/* Who Are We Section */}
<div className="flex flex-col md:flex-row items-center justify-between py-8 md:py-12 px-6 md:px-12 lg:px-20 bg-gray-100">
  <div className="md:w-1/2 mb-8 md:mb-0">
    <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-800">
      Who are we?
    </h2>
    <p className="text-gray-600">
      We’ve been selling and repairing computers since 2005. We sell computers and laptops at{" "}
      <a
        href="https://computershopnepal.com/"
        className="text-yellow-500 cursor-pointer underline"
        target="_blank"
        rel="noopener noreferrer"
      >
        Computer Shop Nepal
      </a>, providing top-quality products and services to our valued customers. We offer a wide range of products, including laptops, gaming PCs, computer components, accessories, and gaming laptops from trusted brands like DELL, MSI, ACER, LENOVO, HP, and APPLE.
    </p>
    <button 
    onClick={() => (window.location.href = "/about-us")}
    className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-md mt-6 cursor-pointer">
      Show More
    </button>
  </div>
  <div className="md:w-1/2">
    <img
      src={comprepair}
      alt="Computer Shop Nepal"
      className="w-full h-auto rounded-md shadow-lg"
    />
  </div>
</div>

{/*video banner*/}
<div className="relative">
  <video
    src={hero4} // Replace this with your video source
    className="w-full h-screen md:h-96 object-cover"
    autoPlay
    loop
    muted
    playsInline
  />
  <div className="absolute inset-0 bg-black opacity-50 pointer-events-none"></div>
  <div className="absolute inset-0 bg-black bg-opacity-60 flex flex-col items-center justify-center text-center px-4">
  <h1 className="text-yellow-500 text-2xl md:text-4xl lg:text-4xl font-extrabold leading-tight drop-shadow-md">
    Complete Laptop Care Under One Roof
    </h1>
    <p className="text-white text-base md:text-lg lg:text-xl font-medium mt-4 leading-relaxed drop-shadow-md">
    Hardware, Software, and Everything In Between
    </p>
    <div className="flex flex-wrap justify-center space-x-0 space-y-4 md:space-x-4 md:space-y-0 mt-6">
      <a
        href="tel:+9779851095326"
        className="bg-white text-blue-700 px-6 py-3 rounded-full font-semibold hover:bg-blue-100 transition"
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

      {/* Our Services Section */}
      <div>
  <h2 className="text-5xl font-bold text-center mb-5 text-orange-500 py-10">
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


      {/* Brand Section */}
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
  
        {/*testomonial*/}
        <div className="bg-gray-100 py-16 px-6 md:px-12">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-3xl font-extrabold text-gray-900 mb-8">What Our Customers Are Saying</h2>
        
        <Swiper
          modules={[Autoplay]}
          spaceBetween={30}
          slidesPerView={1}
          autoplay={{
            delay: 3000, // Slide duration (3 seconds)
            disableOnInteraction: false,
          }}
          loop={true}
          className="testimonial-slider"
        >
          {/* Testimonial 1 */}
          <SwiperSlide>
            <div className="bg-white p-8 rounded-3xl shadow-lg">
              <div className="flex justify-center mb-4">
                <img
                  src={testomonial1}
                  alt="Customer 1"
                  className="w-20 h-20 rounded-full object-cover border-2 border-indigo-500"
                />
              </div>
              <p className="text-lg text-gray-700 mb-4 font-semibold">
                "The service at Amass Computer is absolutely outstanding! 
                I recently took my laptop there for a repair, and I couldn’t believe 
                how quickly they diagnosed and fixed the issue. The team was friendly,
                 professional, and kept me informed every step of the way. My laptop 
                 now runs faster than ever, and I couldn’t be more satisfied with the 
                 quality of the work. I’ll definitely be returning for all my future 
                 tech needs!"
              </p>
              <div className="flex justify-center items-center">
                <span className="text-yellow-500 mr-2">★★★★★</span>
                <span className="text-gray-500">- Suresh Karki</span>
              </div>
            </div>
          </SwiperSlide>

          {/* Testimonial 2 */}
          <SwiperSlide>
            <div className="bg-white p-8 rounded-xl shadow-lg">
              <div className="flex justify-center mb-4">
                <img
                  src={testomonial2}
                  alt="Customer 2"
                  className="w-20 h-20 rounded-full object-cover border-2 border-indigo-500"
                />
              </div>
              <p className="text-lg text-gray-700 mb-4 font-semibold">
              "Amass Computer helped me set up the ultimate gaming PC, and I’m 
              beyond impressed with the results. They took the time to understand my needs 
              and recommended the best components for top-tier performance. The system runs 
              like a dream, and I’m now playing all my favorite games with no lag or issues.
               Their team was incredibly knowledgeable and patient, explaining every detail
                of the build process. Highly recommend them for anyone looking for a custom PC!"
              </p>
              <div className="flex justify-center items-center">
                <span className="text-yellow-500 mr-2">★★★★★</span>
                <span className="text-gray-500">- Bikash Shrestha</span>
              </div>
            </div>
          </SwiperSlide>

          {/* Testimonial 3 */}
          <SwiperSlide>
            <div className="bg-white p-8 rounded-xl shadow-lg">
              <div className="flex justify-center mb-4">
                <img
                  src={testomonial3}
                  alt="Customer 3"
                  className="w-20 h-20 rounded-full object-cover border-2 border-indigo-500"
                />
              </div>
              <p className="text-lg text-gray-700 mb-4 font-semibold">
              "I’ve been to a lot of tech shops, but the level of service at Amass Computer
               is next-level. They helped me upgrade my PC for gaming, and the performance boost 
               has been incredible. The staff went above and beyond to ensure everything was
                running smoothly, and they even showed me how to optimize my system. If you’re 
                looking for expert advice and high-quality service, this is the place to go!"
              </p>
              <div className="flex justify-center items-center">
                <span className="text-yellow-500 mr-2">★★★★★</span>
                <span className="text-gray-500">- Pranav Rauniyar</span>
              </div>
            </div>
          </SwiperSlide>

          {/* Testimonial 4 */}
          <SwiperSlide>
            <div className="bg-white p-8 rounded-xl shadow-lg">
              <div className="flex justify-center mb-4">
                <img
                  src={testomonial4}
                  alt="Customer 4"
                  className="w-20 h-20 rounded-full object-cover border-2 border-indigo-500"
                />
              </div>
              <p className="text-lg text-gray-700 mb-4 font-semibold">
              "I recommend Amass Computer enough! My laptop had a serious
               issue, and I thought it was beyond repair. But the technicians at Amass were 
               able to fix it in no time. They explained exactly what the problem was and made 
               sure everything was running perfectly before I left. I was so impressed with 
               their expertise and the quick turnaround time. If you need reliable and efficient
                tech repairs, this is the shop to trust!"
              </p>
              <div className="flex justify-center items-center">
                <span className="text-yellow-500 mr-2">★★★★★</span>
                <span className="text-gray-500">- Sailesh Bista</span>
              </div>
            </div>
          </SwiperSlide>

          {/*testomonial 5*/}
          <SwiperSlide>
            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <div className="flex justify-center mb-4">
                <img
                  src={testomonial5}
                  alt="Customer 5"
                  className="w-20 h-20 rounded-full object-cover border-2 border-indigo-500"
                />
              </div>
              <p className="text-lg text-gray-700 mb-4 font-semibold">
              "Amass Computer is my go-to shop for all things tech! The staff is incredibly knowledgeable and always 
              provides expert advice when I need it. I recently had them upgrade my computer for work, and the results have 
              been fantastic. The system is now running smoothly, and I can get all my tasks done without any hiccups. 
              Their customer service is second to none, and I trust them with all my tech-related needs."
              </p>
              <div className="flex justify-center items-center">
                <span className="text-yellow-500 mr-2">★★★★★</span>
                <span className="text-gray-500">- Sugam Pokhrel</span>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>

    </div>
  );
};

export default Home;
