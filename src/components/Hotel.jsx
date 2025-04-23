import React from "react";

const Hotel = ({ hotel }) => {
  return (
    <div className="w-full md:flex bg-white shadow-lg rounded-lg overflow-hidden mb-6">
      {/* Image section */}
      <div className="md:w-1/3 w-full">
        <img src={hotel.image} alt={hotel.name} className="w-full h-full object-cover" />
      </div>

      {/* Content section */}
      <div className="p-4 flex-1">
        <div className="flex items-center justify-between mb-2">
          <h3 className="text-lg font-semibold">{hotel.name}</h3>
          <div className="text-sm text-gray-600 text-right">
            <div className="text-xs text-gray-500">{hotel.reviews} reviews</div>
            <span className="bg-blue-500 text-white px-2 py-1 rounded text-sm">{hotel.rating}</span>
          </div>
        </div>

        <p className="text-gray-500 text-sm">{hotel.location}</p>

        <div className="text-sm text-green-600 mt-2">{hotel.features.join(" | ")}</div>

        <div className="text-sm mt-2">
          <span className="line-through text-gray-400 mr-2">₹{hotel.originalPrice}</span>
          <span className="text-lg font-bold text-black">₹{hotel.discountedPrice}</span>
          <span className="text-xs text-gray-500 ml-1">+ ₹{hotel.taxes} Taxes & Fees</span>
        </div>

        <button className="mt-3 bg-orange-500 text-white px-4 py-2 rounded hover:bg-orange-600">
          View Room
        </button>
      </div>
    </div>
  );
};

export default Hotel;
