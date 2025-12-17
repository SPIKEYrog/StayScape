import { useNavigate } from "react-router-dom";

const featuredHotels = [
  {
    id: 1,
    name: "Urbanza Suites",
    rating: 4.5,
    address: "Main Road 123 Street, 23 Colony",
    price: 399,
    image: "https://images.unsplash.com/photo-1566073771259-6a8506099945",
    tag: "Best Seller",
  },
  {
    id: 2,
    name: "Urbanza Suites",
    rating: 4.5,
    address: "Main Road 123 Street, 23 Colony",
    price: 299,
    image: "https://images.unsplash.com/photo-1611892440504-42a792e24d32",
  },
  {
    id: 3,
    name: "Urbanza Suites",
    rating: 4.5,
    address: "Main Road 123 Street, 23 Colony",
    price: 249,
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c",
    tag: "Best Seller",
  },
  {
    id: 4,
    name: "Urbanza Suites",
    rating: 4.5,
    address: "Main Road 123 Street, 23 Colony",
    price: 199,
    image: "https://plus.unsplash.com/premium_photo-1675745329378-5573c360f69f?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
];

export default function FeaturedDestinations() {
  const navigate = useNavigate();

  return (
    <section className="max-w-7xl mx-auto px-6 py-20">
      <div className="text-center mb-14">
        <h2 className="font-playfair text-5xl mb-4">
          Featured Destinations
        </h2>
        <p className="text-gray-500 max-w-2xl mx-auto">
          Discover our handpicked selection of exceptional properties.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {featuredHotels.map((hotel) => (
          <div
            key={hotel.id}
            onClick={() => navigate(`/hotels/${hotel.id}`)}
            className="group cursor-pointer bg-white rounded-2xl overflow-hidden
              shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
          >
            <div className="relative h-56 overflow-hidden">
              <img
                src={hotel.image}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />

              {hotel.tag && (
                <span className="absolute top-4 left-4 bg-white text-sm px-3 py-1 rounded-full shadow">
                  {hotel.tag}
                </span>
              )}
            </div>

            <div className="p-5">
              <div className="flex justify-between mb-2">
                <h3 className="font-playfair text-xl">{hotel.name}</h3>
                <span className="text-orange-500 text-sm">★ {hotel.rating}</span>
              </div>

              <p className="text-gray-500 text-sm mb-4">
                📍 {hotel.address}
              </p>

              <div className="flex justify-between items-center">
                <p className="text-xl font-semibold">
                  ${hotel.price}
                  <span className="text-sm text-gray-500"> / night</span>
                </p>

                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    navigate(`/hotels/${hotel.id}`);
                  }}
                  className="px-4 py-2 text-sm border rounded-full
                    hover:bg-black hover:text-white transition"
                >
                  View Details
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
