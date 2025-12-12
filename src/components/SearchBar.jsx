import "../App.css";

export default function SearchBar() {
  return (
    <div className="search-wrapper">
      <div className="search-item">
        <label>Destination</label>
        <input placeholder="Type here" />
      </div>

      <div className="search-item">
        <label>Check in</label>
        <input type="date" />
      </div>

      <div className="search-item">
        <label>Check out</label>
        <input type="date" />
      </div>

      <div className="search-item">
        <label>Guests</label>
        <input type="number" defaultValue="0" />
      </div>

      <button className="search-btn">
        <i className="ri-search-line"></i> Search
      </button>
    </div>
  );
}
