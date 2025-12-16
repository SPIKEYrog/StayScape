function HotelCard({ hotel }) {
  return (
    <>
      <div className="flex flex-col md:flex-row gap-8 p-6 rounded-2xl bg-white shadow-sm hover:shadow-md transition">
        
        <div className="w-full md:w-80 h-56 rounded-2xl overflow-hidden bg-gray-100 flex-shrink-0">
          <img
            src={hotel.image}
            className="w-full h-full object-cover"
          />
        </div>

        <div className="flex flex-col justify-between w-full">
          <div>
            <p className="text-sm uppercase tracking-wide text-gray-400">
              {hotel.city}
            </p>

            <h2 className="font-playfair text-3xl mt-1">
              {hotel.name}
            </h2>

            <div className="flex items-center gap-3 mt-3">
              <span className="text-orange-500 text-lg">★★★★★</span>
              <span className="text-sm text-gray-500">
                {hotel.reviews}+ reviews
              </span>
            </div>

            <p className="text-sm text-gray-500 mt-3">
              {hotel.address}
            </p>

            <div className="flex flex-wrap gap-3 mt-5">
              {hotel.amenities.map((item, index) => (
                <span
                  key={index}
                  className="px-4 py-1.5 bg-gray-100 rounded-full text-sm"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>

          <div className="flex items-center justify-between mt-6">
            <p className="text-2xl font-semibold">
              ₹{hotel.price}
              <span className="text-sm font-normal text-gray-500"> / night</span>
            </p>

            <button className="bg-black text-white px-6 py-2 rounded-full text-sm hover:bg-gray-800 transition">
              View Details
            </button>
          </div>
        </div>
      </div>

      {/* Elegant divider */}
      <div className="my-10 h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent"></div>
    </>
  );
}

export default HotelCard;
