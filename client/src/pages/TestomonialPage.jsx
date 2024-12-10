import testomonial1 from "../assets/testomonial1.jpeg"
import testomonial2 from "../assets/testomonial 2.webp"
import testomonial3 from "../assets/testomonial 3.jpeg"
import testomonial4 from "../assets/testomonial 4.webp"
import testomonial5 from "../assets/testomnial6.jpeg"
import testomonial from "../assets/9373207-hd_1920_1080_25fps.mp4"
import bannerv from "../assets/2792370-hd_1920_1080_30fps.mp4"

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/swiper-bundle.css";
import comprepair from "../assets/computerrepairing.jpg";
import owner from "../assets/amassowner.jpg"
import Mechanic from "../assets/mechanic.png"


const TestomonialPage = () => {
  return (
    <div>
      {/* Hero Section */}
     <div className="relative">
  <video
    src={testomonial} // Replace this with your video source
    className="w-full h-screen md:h-96 object-cover"
    autoPlay
    loop
    muted
    playsInline
  />
  <div className="absolute inset-0 bg-black opacity-50 pointer-events-none"></div>
  <div className="absolute inset-0 bg-black bg-opacity-80 flex flex-col items-center justify-center text-center px-4">
    <h1 className="text-yellow-500 text-3xl md:text-5xl lg:text-6xl font-extrabold leading-tight drop-shadow-md">
    Hear from Our Happy Customers!
    </h1>
    <p className="text-white text-base md:text-lg lg:text-xl font-medium mt-4 leading-relaxed drop-shadow-md">
    Real stories from people who trust us to keep their laptops running smoothly. Your satisfaction is our success.
    </p>

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
              "I’ve been to a lot of tech shops, but the level of service at Amass Computer Shop Nepal
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
              "I recommend Amass Computer Shop Nepal enough! My laptop had a serious
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
              "Amass Computer Shop Nepal is my go-to shop for all things tech! The staff is incredibly knowledgeable and always 
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



      {/* Testimonials Section */}
      <div className="bg-white py-14 sm:py-12">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      {/* Testimonial 1 */}
      <div className="text-center">
        <img
          src={owner}
          alt="Deepak Paudel (Owner)"
          className="w-24 h-24 mx-auto rounded-full mb-4"
        />
        <h3 className="text-xl font-semibold text-gray-900">Deepak Paudel (Owner)</h3>
        <p className="mt-4 text-base text-gray-600">
          "Hi there! I specialize in computer and laptop servicing, offering solutions for 
          issues like slow performance, virus removal, and hardware repairs. If your device has been 
          acting up or just needs a tune-up, I’d be happy to take a look and get it running like new. 
          I offer quick, reliable, and affordable service tailored to your needs. Let me know if you’d 
          like to schedule a check-up or discuss any specific concerns about your device!"
        </p>
      </div>
      {/* Testimonial 2 */}
      <div className="text-center">
        <img
          src={Mechanic}
          alt="Shyam Bahadur (Mechanics)"
          className="w-24 h-24 mx-auto rounded-full mb-4"
        />
        <h3 className="text-xl font-semibold text-gray-900">Shyam Bahadur (Mechanic)</h3>
        <p className="mt-4 text-base text-gray-600">
          "Hello! I’m a computer technician with experience in fixing issues like hardware failures,
          software errors, and system upgrades. If your computer is running slow, showing errors, or needs repairs,
          I can help get it back to peak performance. I provide thorough diagnostics and quick, reliable fixes 
          at a fair price. Feel free to reach out if your device needs servicing or if you’d like to discuss any 
          specific problems!"
        </p>
      </div>
    </div>
  </div>
</div>


      {/* Hero Section */}
     <div className="relative">
  <video
    src={bannerv} // Replace this with your video source
    className="w-full h-screen md:h-96 object-cover"
    autoPlay
    loop
    muted
    playsInline
  />
  <div className="absolute inset-0 bg-black opacity-50 pointer-events-none"></div>
  <div className="absolute inset-0 bg-black bg-opacity-60 flex flex-col items-center justify-center text-center px-4">
    <h1 className="text-yellow-500 text-3xl md:text-5xl lg:text-6xl font-extrabold leading-tight drop-shadow-md">
    Get Your Laptop Running Like New!
    </h1>
    <p className="text-white text-base md:text-lg lg:text-xl font-medium mt-4 leading-relaxed drop-shadow-md">
    High-Quality Repairs with a Satisfaction Guarantee
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

      {/* FAQ Section */}
      <div className="bg-white py-8 sm:py-12">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="text-center">
      <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
        Frequently Asked Questions
      </h2>
      <p className="mt-4 text-lg text-gray-500">
        Have a different question and can't find the answer you're looking for? Reach out to our support team by sending us an email, and we'll get back to you as soon as we can.
      </p>
    </div>

    <div className="mt-12 border-t border-gray-200 pt-12">
      <dl className="space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-12">
        {/* FAQ 1 */}
        <div>
          <dt className="text-lg leading-6 font-medium text-gray-900">
            1. Why Should I trust Amass Computer Shop Nepal?
          </dt>
          <dd className="mt-2 text-base text-gray-500 flex items-center">
            <span className="flex-shrink-0 mr-2">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </span>
            Amass Computer shop is known for its years of experience, skilled technicians, and a commitment to quality service. We prioritize customer satisfaction, using genuine parts and offering transparent pricing.
          </dd>
        </div>

        {/* FAQ 2 */}
        <div>
          <dt className="text-lg leading-6 font-medium text-gray-900">
            2. What services does Amass Computer Shop offer?
          </dt>
          <dd className="mt-2 text-base text-gray-500 flex items-center">
            <span className="flex-shrink-0 mr-2">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </span>
            We provide a wide range of services, including computer and laptop repairs, hardware and software upgrades, virus removal, data recovery, and routine maintenance.
          </dd>
        </div>

        {/* FAQ 3 */}
        <div>
          <dt className="text-lg leading-6 font-medium text-gray-900">
            3. Do you use original parts for repairs?
          </dt>
          <dd className="mt-2 text-base text-gray-500 flex items-center">
            <span className="flex-shrink-0 mr-2">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </span>
            Yes, we use genuine parts when available. If not, we provide high-quality parts sourced directly from authorized suppliers to ensure your device operates efficiently and reliably.
          </dd>
        </div>

        {/* FAQ 4 */}
        <div>
          <dt className="text-lg leading-6 font-medium text-gray-900">
            4. How long will my computer repair take?
          </dt>
          <dd className="mt-2 text-base text-gray-500 flex items-center">
            <span className="flex-shrink-0 mr-2">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </span>
            Repair times depend on the issue, but most repairs are completed within 1–3 business days. We always strive for a quick turnaround without compromising quality.
          </dd>
        </div>

        {/* FAQ 5 */}
        <div>
          <dt className="text-lg leading-6 font-medium text-gray-900">
            5. Is there a warranty on your repairs?
          </dt>
          <dd className="mt-2 text-base text-gray-500 flex items-center">
            <span className="flex-shrink-0 mr-2">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </span>
            Absolutely! We provide a warranty on all repairs and replacement parts for a certain period of time, so you can have peace of mind knowing our work is reliable and trustworthy.
          </dd>
        </div>

        {/* FAQ 6 */}
        <div>
          <dt className="text-lg leading-6 font-medium text-gray-900">
            6. Can I get a free diagnosis for my device?
          </dt>
          <dd className="mt-2 text-base text-gray-500 flex items-center">
            <span className="flex-shrink-0 mr-2">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </span>
            Yes, we offer a free initial diagnosis to determine the problem with your device. Once the issue is identified, we provide a detailed quote before starting work.
          </dd>
        </div>

        {/* FAQ 7 */}
        <div>
          <dt className="text-lg leading-6 font-medium text-gray-900">
            7. Do you provide on-site repair services?
          </dt>
          <dd className="mt-2 text-base text-gray-500 flex items-center">
            <span className="flex-shrink-0 mr-2">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </span>
            Yes, we offer on-site repair services for businesses and individuals. If the issue requires extensive work, we may bring the device to our shop and return it once repaired.
          </dd>
        </div>

        {/* FAQ 8 */}
        <div>
          <dt className="text-lg leading-6 font-medium text-gray-900">
            8. Do you offer services for both Windows and Mac computers?
          </dt>
          <dd className="mt-2 text-base text-gray-500 flex items-center">
            <span className="flex-shrink-0 mr-2">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </span>
            Yes, we provide repair and maintenance services for both Windows and Mac systems. Our technicians are trained to handle a wide range of devices and operating systems.
          </dd>
        </div>

        {/* FAQ 9 */}
        <div>
          <dt className="text-lg leading-6 font-medium text-gray-900">
            9. What are your pricing and payment options?
          </dt>
          <dd className="mt-2 text-base text-gray-500 flex items-center">
            <span className="flex-shrink-0 mr-2">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </span>
            We offer competitive pricing with no hidden fees. Payments can be made via cash, mobile banking, or digital wallets like eSewa and Khalti.
          </dd>
        </div>

        {/* FAQ 10 */}
        <div>
          <dt className="text-lg leading-6 font-medium text-gray-900">
            10. Why should I choose Amass Computer Shop over other repair shops?
          </dt>
          <dd className="mt-2 text-base text-gray-500 flex items-center">
            <span className="flex-shrink-0 mr-2">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </span>
            Amass Computer Shop stands out with its trusted reputation, experienced technicians, commitment to quality, and exceptional customer service.
          </dd>
        </div>
      </dl>
    </div>
  </div>
</div>



      <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-center mb-5 text-black">
      Now, let’s hear from the esteemed owner of Amass Computers
        </h1>
      <div className="w-full max-w-4xl mx-auto bg-white shadow-lg rounded-lg overflow-hidden">
        <div className="flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-6 p-6">
          {/* Title */}
          
         
          {/* Testimonial Content */}
          <div className="flex flex-col md:flex-row items-center w-full">
          
            {/* Profile Image */}
            <img 
              src={owner}
              alt="Judith Black" 
              className="w-32 h-32 rounded-full object-cover mb-4 md:mb-0 md:mr-6"
            />
            
            {/* Testimonial Text */}
            <div className="text-center md:text-left">
              <p className="italic text-base text-gray-700 mb-3 max-w-xl">
              "नमस्ते! म कम्प्युटर र ल्यापटपको मर्मत सेवामा विशेषज्ञता राख्छु, जसमा स्लो परफर्मेन्स, भाइरस हटाउने,
               र हार्डवेयर मर्मत जस्ता समस्याहरूको समाधान प्रदान गर्दछु। तपाईंको उपकरणमा समस्या आएको छ वा
                सामान्य ट्युन-अप चाहिएको छ भने, म यो हेर्न र नयाँ जस्तै बनाउन मद्दत गर्न सक्छु। म छिटो, भरपर्दो,
                 र किफायती सेवा प्रदान गर्दछु। तपाईँलाई चेक-अपको समय तालिका मिलाउन वा कुनै विशेष समस्याबारे 
                 छलफल गर्न मन लागेमा मलाई जानकारी दिनुहोस्!" 
              </p>
              <p className="font-bold text-xl text-gray-900">दीपक पौडेल</p>
              <p className="text-sm text-gray-500">CEO of Workcation</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
};

export default TestomonialPage;
