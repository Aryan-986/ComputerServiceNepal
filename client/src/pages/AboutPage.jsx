
import { 
  CheckCircle, 
  Wrench,  // Replaced Tool with Wrench
  Award, 
  Laptop, 
  Zap, 
  Shield 
} from 'lucide-react';
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/swiper-bundle.css";
import aboutban from "../assets/5211073-hd_1280_720_30fps.mp4"

import amassshop from "../assets/amasshop.jpg"

//testomonial image

import testomonial1 from "../assets/testomonial1.jpeg"
import testomonial2 from "../assets/testomonial 2.webp"
import testomonial3 from "../assets/testomonial 3.jpeg"
import testomonial4 from "../assets/testomonial 4.webp"
import testomonial5 from "../assets/testomnial6.jpeg"

const AboutPage = () => {
  return (
    <div className="min-h-screen bg-gray-50">

{/*banner page*/}
<div className="relative">
  <video
    src={aboutban} // Replace this with your video source
    className="w-full h-screen md:h-96 object-cover"
    autoPlay
    loop
    muted
    playsInline
  />
  <div className="absolute inset-0 bg-black opacity-80 pointer-events-none"></div>
  
  <div className="absolute inset-0 bg-black bg-opacity-60 flex flex-col items-center justify-center text-center px-4">
  <h1 className="text-yellow-500 text-2xl md:text-4xl lg:text-4xl font-extrabold leading-tight drop-shadow-md">
    Revive Your Laptop with Expert Care
    </h1>
    <p className="text-white text-base md:text-lg lg:text-xl font-medium mt-4 leading-relaxed drop-shadow-md">
    We are dedicated to resolving all your laptop issues from hardware upgrades to virus removal with genuine parts,
     transparent pricing, and unmatched customer service.
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


      {/* Who are we */}
      <div className=" mt-12 mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:mx-0 lg:max-w-none lg:grid-cols-2 lg:items-start lg:gap-y-10">
        <div className="lg:col-span-2 lg:col-start-1 lg:row-start-1 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
          <div className="lg:pr-4">
            <div className="lg:max-w-lg">
              <p className="text-base/7 font-semibold text-indigo-600">A better Workflow</p>
              <h1 className="mt-2 text-pretty text-4xl font-semibold tracking-tight text-gray-900 sm:text-5xl">
             Amass Computer 
              </h1>
              <p className="mt-6 text-xl/8 text-gray-700">
                
              </p>
            </div>
          </div>
        </div>
        <div className="-ml-12 -mt-12 p-12 lg:sticky lg:top-4 lg:col-start-2 lg:row-span-2 lg:row-start-1 lg:overflow-hidden">
          <img
            alt="amassshop"
            src={amassshop}
            className="w-[48rem] max-w-none rounded-xl bg-gray-900 shadow-xl ring-1 ring-gray-400/10 sm:w-[57rem]"
          />
        </div>
        <div className="lg:col-span-2 lg:col-start-1 lg:row-start-2 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
          <div className="lg:pr-4">
            <div className="max-w-xl text-base/7 text-gray-700 lg:max-w-lg">
              <p>
              At Computer Shop Nepal, we are committed to providing top-notch computer and laptop repair services with a focus 
              on customer satisfaction. Whether you are experiencing technical issues, need an upgrade, or simply want to keep 
              your devices in optimal condition, our expert technicians are here to help.
              </p>

              <p className="mt-8">
              Whether you need urgent repairs, upgrades, or professional advice, Computer Shop Nepal is here to help. 
              Our team of expert technicians is dedicated to providing top-notch service. Reach out via email, phone, 
              or simply visit us in person. No matter the issue, we’ll make sure your computer runs smoothly and efficiently.
              </p>
              <h2 className="mt-16 text-2xl font-bold tracking-tight text-gray-900">Located in Kathmandu, Baneshwar.</h2>
              <p className="mt-6">
              We are conveniently located at Bhakti Thapa Sadak in Baneshwar, Kathmandu. Stop by and let us take care of your 
              computer needs with a fast, reliable service. Let’s make technology work for you!
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Why Choose Us Section */}
      <div className="container mx-auto px-4 py-16 lg:py-24">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          Why Choose Amass Computers?
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              icon: <Wrench className="w-12 h-12 text-blue-600" />, // Changed from Tool to Wrench
              title: "Expert Repairs",
              description: "Our certified technicians handle everything from simple fixes to complex system rebuilds with precision and care."
            },
            {
              icon: <Laptop className="w-12 h-12 text-green-600" />,
              title: "Premium Devices",
              description: "Curated selection of high-performance laptops, gaming PCs, and cutting-edge tech devices."
            },
            {
              icon: <Award className="w-12 h-12 text-purple-600" />,
              title: "Guaranteed Quality",
              description: "90-day warranty on all repairs and devices. We stand behind our work 100%."
            }
          ].map((feature, index) => (
            <div key={index} className="bg-white p-6 rounded-xl shadow-lg text-center hover:scale-105 transition">
              <div className="flex justify-center mb-4">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Services Section */}
      <div className="bg-gray-100 py-16 lg:py-24">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Our Services
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { 
                icon: <Zap className="w-10 h-10 text-yellow-500" />, 
                title: "Quick Repairs", 
                description: "Same-day diagnostics and repair for most common computer issues." 
              },
              { 
                icon: <Shield className="w-10 h-10 text-green-500" />, 
                title: "Data Recovery", 
                description: "Professional data recovery services with high success rates." 
              },
              { 
                icon: <CheckCircle className="w-10 h-10 text-blue-500" />, 
                title: "System Optimization", 
                description: "Speed up your device with our comprehensive optimization services." 
              }
            ].map((service, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-md flex items-start space-x-4 hover:shadow-lg transition">
                <div>{service.icon}</div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                  <p className="text-gray-600">{service.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Location & Contact Section */}
      <div className="container mx-auto px-4 py-16 lg:py-24">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Find Us in the Heart of Kathmandu Valley
            </h2>
            <p className="text-xl text-gray-700 mb-6">
            At Amass Computer, we are committed to providing top-notch computer and laptop repair services with a focus 
              on customer satisfaction. Whether you are experiencing technical issues, need an upgrade, or simply want to keep 
              your devices in optimal condition, our expert technicians are here to help. Whether you need urgent repairs, upgrades, or professional advice, Computer Shop Nepal is here to help. 
              Our team of expert technicians is dedicated to providing top-notch service. Reach out via email, phone, 
              or simply visit us in person. No matter the issue, we’ll make sure your computer runs smoothly and efficiently.
            </p>
            <div className="bg-white p-6 rounded-xl shadow-lg">
  <h3 className="text-xl font-semibold mb-4">Contact Details</h3>
  <p className="mb-2">
    📍 Bhakti Thapa Sadak (New Baneshwar), Kathmandu 44600
  </p>
  <p className="mb-2">
    <a href="tel:+9779851095326" className="text-blue-600 hover:underline">
      📞 (977) 9851095326
    </a>
  </p>
  <p>
    <a
      href="mailto:amasscomputer@hotmail.com"
      className="text-blue-600 hover:underline"
    >
      ✉️ amasscomputer@hotmail.com
    </a>
  </p>
</div>

          </div>
          <div className="relative">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d28260.256576524316!2d85.30812152272632!3d27.700853775888156!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb19963824f18b%3A0xc8cb7128b7f5bc4a!2sComputer%20Shop%20Nepal!5e0!3m2!1sen!2sbd!4v1732986699451!5m2!1sen!2sbd"
              width="100%"
              height="450"
              frameBorder="0"
              allowFullScreen=""
              loading="lazy"
              style={{ border: 0 }}
            />
          </div>
        </div>
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
               able to fix it in time. They explained exactly what the problem was and made 
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

export default AboutPage;