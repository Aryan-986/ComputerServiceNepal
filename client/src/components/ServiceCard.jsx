// ServiceCard.js
import { Link } from "react-router-dom";

const ServiceCard = ({ image, title, description, whatsappMessage }) => {
  return (
    <div className="bg-white shadow-md p-6 rounded-lg hover:shadow-lg transition-shadow duration-300">
      <img
        src={image}
        alt={title}
        className="w-full h-48 object-cover rounded-t-lg mb-4"
      />
      <h3 className="text-xl font-semibold mb-4">{title}</h3>
      <p className="text-gray-600">{description}</p>
      <div className="mt-4 flex justify-between items-center">

      <a
        href={`https://wa.me/9779851095326?text=Hello%20I%20need%20help%20with%20${whatsappMessage}`}
        target="_blank"
        rel="noopener noreferrer"
      >
        <button className="bg-green-500 text-white px-4 py-2 mt-4 rounded-lg hover:bg-green-600 transition-colors">
          WhatsApp Now
        </button>
      </a>
     
      </div>
    </div>
  );
};

export default ServiceCard;
