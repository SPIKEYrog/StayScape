import HotelCard from "../components/HotelCard";
import Navbar from "../components/Navbar";

const hotels = [
  {
    id: 1,
    city: "New York",
    name: "Urbanza Suites",
    price: 3999,
    reviews: 200,
    address: "Main Road 123 Street, 23 Colony",
    image: "https://images.unsplash.com/photo-1566073771259-6a8506099945",
    amenities: ["Room Service", "Mountain View", "Pool Access"],
  },
  {
    id: 2,
    city: "Los Angeles",
    name: "Sunset Retreat",
    price: 2999,
    reviews: 150,
    address: "Sunset Blvd 456 Avenue, 45 Colony",
    image: "https://images.unsplash.com/photo-1571896349842-33c89424de2d?q=80&w=880&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    amenities: ["Free Wi-Fi", "Breakfast Included", "Gym Access"],
  },
  {
    id: 3,
    city: "Miami",
    name: "Ocean Breeze Hotel",
    price: 3499,
    reviews: 180,
    address: "Ocean Drive 789 Street, 67 Colony",
    image: "https://images.unsplash.com/photo-1625244724120-1fd1d34d00f6?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    amenities: ["Beach Access", "Spa Services", "Rooftop Bar"],
  },
  {
    id: 4,
    city: "Miami",
    name: "Ocean Breeze Hotel",
    price: 3490,
    reviews: 180,
    address: "Ocean Drive 789 Street, 67 Colony",
    image: "https://images.unsplash.com/photo-1625244724120-1fd1d34d00f6?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    amenities: ["Beach Access", "Spa Services", "Rooftop Bar"],
  },
   {
    id: 5,
    city: "Miami",
    name: "Ocean Breeze Hotel",
    price: 3493,
    reviews: 180,
    address: "Ocean Drive 789 Street, 67 Colony",
    image: "https://images.unsplash.com/photo-1625244724120-1fd1d34d00f6?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    amenities: ["Beach Access", "Spa Services", "Rooftop Bar"],
  },
   {
    id: 6,
    city: "Miami",
    name: "Ocean Breeze Hotel",
    price: 3495,
    reviews: 180,
    address: "Ocean Drive 789 Street, 67 Colony",
    image: "https://images.unsplash.com/photo-1625244724120-1fd1d34d00f6?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    amenities: ["Beach Access", "Spa Services", "Rooftop Bar"],
  }
  
  
];

export default function Hotels() {
  return (
    <>
    <Navbar/>
    <div className="max-w-7xl mx-auto px-6 py-10 grid grid-cols-1 lg:grid-cols-4 gap-12 pt-24">
      
      <section className="lg:col-span-3">
        <h1 className="font-playfair text-5xl mb-3">Hotel Rooms</h1>
        <p className="text-gray-500 max-w-2xl mb-12">
          See our collection of exclusive hotel rooms handpicked for your comfort and luxury.
        </p>

        {hotels.map((hotel) => (
          <HotelCard key={hotel.id} hotel={hotel} />
        ))}
      </section>
<aside className="border rounded-2xl p-6 h-fit bg-white text-black top-24 ">
  <h3 className="font-semibold text-lg mb-6">Filters</h3>

  <div className="space-y-8 text-sm">

    <div>
      <p className="font-medium mb-3">Room Type</p>
      <label className="flex items-center gap-2 mb-2">
        <input type="checkbox" /> Single Room
      </label>
      <label className="flex items-center gap-2 mb-2">
        <input type="checkbox" /> Double Room
      </label>
      <label className="flex items-center gap-2">
        <input type="checkbox" /> Suite
      </label>
    </div>

    <div>
      <p className="font-medium mb-3">Price Range</p>
      <label className="flex items-center gap-2 mb-2">
        <input type="checkbox" /> ₹0 – ₹2000
      </label>
      <label className="flex items-center gap-2 mb-2">
        <input type="checkbox" /> ₹2000 – ₹4000
      </label>
      <label className="flex items-center gap-2">
        <input type="checkbox" /> ₹4000+
      </label>
    </div>

    <div>
      <p className="font-medium mb-3">Amenities</p>
      <label className="flex items-center gap-2 mb-2">
        <input type="checkbox" /> Free Wi-Fi
      </label>
      <label className="flex items-center gap-2 mb-2">
        <input type="checkbox" /> Breakfast Included
      </label>
      <label className="flex items-center gap-2">
        <input type="checkbox" /> Pool
      </label>
    </div>

    <div>
      <p className="font-medium mb-3">Sort By</p>
      <label className="flex items-center gap-2 mb-2">
        <input type="radio" name="sort" /> Price: Low to High
      </label>
      <label className="flex items-center gap-2">
        <input type="radio" name="sort" /> Price: High to Low
      </label>
    </div>

    <button className="w-full mt-4 bg-black text-white py-2 rounded-lg text-sm hover:bg-gray-800 transition">
      Apply Filters
    </button>

  </div>
</aside>

    </div>
    </>
  );
}
