import Navbar from "../components/Navbar";
import HotelCard from "../components/HotelCard";
import hotels from "../data/hotelsData";
import Footer from "../components/Footer";

export default function Hotels() {
  return (
    <>
      <Navbar />

      <div className="max-w-7xl mx-auto px-6 pt-24 grid grid-cols-1 lg:grid-cols-4 gap-12">
        <section className="lg:col-span-3">
          <h1 className="font-playfair text-5xl mb-3">Hotel Rooms</h1>
          <p className="text-gray-500 mb-12">
            Handpicked luxury hotels curated for your stay.
          </p>

          {hotels.map((hotel) => (
            <HotelCard key={hotel.id} hotel={hotel} />
          ))}
        </section>

        <aside className="border rounded-2xl p-6 h-fit bg-white">
          <h3 className="font-semibold text-lg mb-6">Filters</h3>
          <p className="text-sm text-gray-400">Coming soon</p>
        </aside>
      
      </div>
        <Footer/>
    </>
  );
}