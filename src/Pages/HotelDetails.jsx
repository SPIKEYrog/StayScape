import { useParams } from "react-router-dom";
import Navbar from "../components/Navbar";
import hotels from "../data/hotelsData";
import Footer from "../components/Footer";

export default function HotelDetails() {
  const { id } = useParams();
  const hotel = hotels.find((h) => h.id === Number(id));

  if (!hotel) {
    return <p className="mt-32 text-center">Hotel not found</p>;
  }

  const taxes = 299;
  const total = hotel.price + taxes;

  return (
    <>
      <Navbar />

      <div className="max-w-7xl mx-auto px-6 pt-24 pb-32 grid grid-cols-1 lg:grid-cols-3 gap-12">
        
        
        <div className="lg:col-span-2">
          <img
            src={hotel.image}
            className="w-full h-[420px] object-cover rounded-3xl mb-8"
          />

          <p className="uppercase text-sm tracking-wide text-gray-400">
            {hotel.city}
          </p>

          <h1 className="font-playfair text-4xl mt-2">
            {hotel.name}
          </h1>

          <div className="flex items-center gap-4 mt-3">
            <span className="text-orange-500">★ {hotel.rating}</span>
            <span className="text-sm text-gray-500">
              ({hotel.reviews}+ reviews)
            </span>
          </div>

          <p className="text-gray-500 mt-4">
            📍 {hotel.address}
          </p>

          <p className="text-gray-600 mt-6 leading-relaxed">
            {hotel.description}
          </p>

          <div className="flex flex-wrap gap-3 mt-8">
            {hotel.amenities.map((item, index) => (
              <span
                key={index}
                className="px-4 py-1.5 bg-gray-100 rounded-full text-sm"
              >
                {item}
              </span>
            ))}
          </div>

          <div className="flex gap-6 mt-8 text-sm text-gray-500">
            <span>✔ Free cancellation</span>
            <span>✔ No prepayment</span>
            <span>✔ 24/7 support</span>
          </div>
        </div>

   
        <div className="lg:sticky lg:top-28 h-fit">
          <div className="p-6 rounded-3xl border shadow-xl bg-white">
            
            <p className="text-2xl font-semibold mb-1">
              ₹{hotel.price}
              <span className="text-sm font-normal text-gray-500"> / night</span>
            </p>

            <p className="text-sm text-gray-500 mb-6">
              Includes basic amenities
            </p>

            <div className="grid grid-cols-2 gap-4 mb-6">
              <div>
                <label className="text-xs text-gray-500">Check-in</label>
                <input
                  type="date"
                  className="w-full border rounded-xl px-3 py-2 mt-1"
                />
              </div>

              <div>
                <label className="text-xs text-gray-500">Check-out</label>
                <input
                  type="date"
                  className="w-full border rounded-xl px-3 py-2 mt-1"
                />
              </div>
            </div>

            <div className="space-y-3 text-sm text-gray-600 mb-6">
              <div className="flex justify-between">
                <span>Price per night</span>
                <span>₹{hotel.price}</span>
              </div>

              <div className="flex justify-between">
                <span>Taxes & fees</span>
                <span>₹{taxes}</span>
              </div>

              <div className="flex justify-between font-semibold text-lg border-t pt-4 text-black">
                <span>Total</span>
                <span>₹{total}</span>
              </div>
            </div>

            <button className="w-full bg-black text-white py-4 rounded-xl text-lg font-semibold hover:bg-gray-800 transition">
              Reserve Now
            </button>

            <p className="text-xs text-gray-400 text-center mt-3">
              You won’t be charged yet
            </p>
          </div>
        </div>
        
      </div>
      <Footer/>
    </>
  );
}