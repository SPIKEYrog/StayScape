import { useNavigate } from "react-router-dom";
import Footer from "./Footer";

export default function HotelCard({ hotel }) {
  const navigate = useNavigate();

  return (
    <>
      <div
        onClick={() => navigate(`/hotels/${hotel.id}`)}
        className="cursor-pointer flex flex-col md:flex-row gap-8 p-6 rounded-2xl bg-white shadow-sm hover:shadow-md transition"
      >
        <div className="w-full md:w-80 h-56 rounded-2xl overflow-hidden">
          <img src={hotel.image} className="w-full h-full object-cover" />
        </div>

        <div className="flex flex-col justify-between w-full">
          <div>
            <p className="text-sm uppercase tracking-wide text-gray-400">
              {hotel.city}
            </p>

            <h2 className="font-playfair text-3xl mt-1">{hotel.name}</h2>

            <div className="flex items-center gap-3 mt-3">
              <span className="text-orange-500">★ {hotel.rating}</span>
              <span className="text-sm text-gray-500">
                ({hotel.reviews}+ reviews)
              </span>
            </div>

            <p className="text-sm text-gray-500 mt-3">{hotel.address}</p>

            <div className="flex flex-wrap gap-3 mt-4">
              {hotel.amenities.map((a, i) => (
                <span key={i} className="px-3 py-1 bg-gray-100 rounded-full text-sm">
                  {a}
                </span>
              ))}
            </div>
          </div>

          <p className="text-2xl font-semibold mt-6">
            ₹{hotel.price}
            <span className="text-sm text-gray-500"> / night</span>
          </p>
        </div>
      </div>

      <div className="my-10 h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent" />
      
    </>
    
  );
}