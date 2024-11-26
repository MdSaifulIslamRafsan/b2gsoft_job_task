"use client"
import React, { useState } from "react";
import { CiStar } from "react-icons/ci";
import { FaStar } from "react-icons/fa";

interface ProductType  {
  id: number,
  name: string;
  price: number;
  reviews: number;
  rating: number;
  sizes: string[];
  colors: { name: string; value: string }[];
  isNew : boolean;
};

const CheckoutCard: React.FC = () => {
  // Product Data Array
  const product : ProductType = 
    {
      id: 1,
      name: "White Hoodie",
      price: 2500,
      rating: 4.0,
      reviews: 121,
      sizes: ["S", "M", "L", "XL"],
      colors: [
        { name: "Off White", value: "#f5f5f5" },
        { name: "Black", value: "#000000" },
      ],
      isNew: true,
    }
  
  

  const [selectedSize, setSelectedSize] = useState<string | null>("S");
  const [selectedColor, setSelectedColor] = useState<string | null>(null);
  const [quantity, setQuantity] = useState<number>(1);

  const handleSizeClick = (size: string) => {
    setSelectedSize(size);
  };

  const handleColorClick = (color: string) => {
    setSelectedColor(color);
  };

  const handleQuantityChange = (type: "increment" | "decrement") => {
    if (type === "increment") setQuantity(quantity + 1);
    if (type === "decrement" && quantity > 1) setQuantity(quantity - 1);
  };

  return (
    <div className="flex justify-center items-center min-h-screen w-full">
      <div className="p-4 w-full bg-white rounded-lg shadow-md">
        {/* New Arrival Badge */}
        {product.isNew && (
          <div className="text-sm bg-[#2F1C59] text-white px-2 py-1 rounded-md w-max mb-3">
            New Arrival
          </div>
        )}

        {/* Product Name */}
        <h2 className="text-2xl font-bold mb-2">{product.name}</h2>

        {/* Ratings and Reviews */}
        <div className="flex items-center mb-3">
         
           <div className="flex  items-center ">
                    {Array.from({ length: 5 }, (_, i) =>
                      i < product.rating ? (
                        <FaStar className="text-yellow-500" key={i} />
                      ) : (
                        <CiStar className="text-yellow-500" key={i} />
                      )
                    )}
                    
                  </div>
          <span className="ml-2 text-gray-600">({product.rating.toFixed(1)})</span>
          <span className="ml-2 text-primary-500">
            {product.reviews} reviews
          </span>
        </div>

        {/* Price */}
        <p className="text-xl font-semibold text-gray-800 mb-4">
          BDT {product.price}
        </p>

        {/* Available Size */}
        <div className="border-t flex justify-between border-b py-4 mb-4">
          <div className="mb-3">
            <p className="font-medium mb-1">Available Size</p>
            <div className="flex gap-2">
              {product.sizes.map((size) => (
                <button
                  key={size}
                  onClick={() => handleSizeClick(size)}
                  className={`px-3 py-1 rounded-lg ${
                    selectedSize === size
                      ? "border-2 border-primary-700 "
                      : ""
                  }`}
                >
                  {size}
                </button>
              ))}
            </div>
          </div>

          {/* Available Color */}
          <div>
            <p className="font-medium mb-1">Available Color</p>
            <div className="flex gap-2">
              {product.colors.map((color) => (
                <button
                  key={color.value}
                  onClick={() => handleColorClick(color.value)}
                  className={`w-6 h-6 rounded-full border-2 ${
                    selectedColor === color.value
                      ? "border-primary-700"
                      : "border-gray-300"
                  }`}
                  style={{ backgroundColor: color.value }}
                ></button>
              ))}
            </div>
          </div>
        </div>

        {/* Quantity Selector */}
          <p className="font-medium mr-4 mb-2">Quantity</p>
        <div className="flex  items-center mb-4">
        
          <button
            onClick={() => handleQuantityChange("decrement")}
            className="px-3 bg-primary-100 py-1 border rounded-l-full"
          >
            -
          </button>
          <span className="px-4 bg-primary-100 py-1 border-t border-b">{quantity}</span>
          <button
            onClick={() => handleQuantityChange("increment")}
            className="px-3 bg-primary-100 py-1 border rounded-r-full"
          >
            +
          </button>
        </div>

        {/* Action Buttons */}
        <div className="flex gap-4">
          <button className="bg-primary-700 text-white px-4 py-2 rounded-lg w-full">
            Buy Now
          </button>
          <button className="border border-primary-700 text-primary-700 px-4 py-2 rounded-lg w-full">
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default CheckoutCard;
