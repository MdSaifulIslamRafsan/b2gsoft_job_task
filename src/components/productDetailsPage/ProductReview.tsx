"use client";
import React, { useState } from "react";
import { FaStar } from "react-icons/fa";
import Image from "next/image";

type Tab = "details" | "review" | "discussion";
type SortOption = "newest" | "oldest";

interface Review {
  id: number;
  username: string;
  avatar: string;
  date: number; // Date stored as days ago
  rating: number;
  comment: string;
}

const reviews: Review[] = [
  {
    id: 1,
    username: "Cameron Williamson",
    avatar: "/assets/Frame 97.png",
    date: 3, // 3 days ago
    rating: 4,
    comment: "Very Nice!!",
  },
  {
    id: 2,
    username: "Leslie Alexander",
    avatar: "/assets/Frame 97.png",
    date: 1, // 1 day ago
    rating: 5,
    comment: "Excellent product, highly recommend!",
  },
];

const ProductReview: React.FC = () => {
  const [activeTab, setActiveTab] = useState<Tab>("review");
  const [sortOption, setSortOption] = useState<SortOption>("newest");

  // Sort reviews based on the selected sort option
  const sortedReviews = reviews.sort((a, b) =>
    sortOption === "newest" ? a.date - b.date : b.date - a.date
  );

  return (
    <div className="min-h-screen p-6">

      {/* Tab Header */}
      <div className="flex space-x-4 border-b">
        <button
          onClick={() => setActiveTab("details")}
          className={`pb-2 ${
            activeTab === "details"
              ? "border-b-2 border-primary-500 text-primary-600"
              : "text-gray-500"
          }`}
        >
          Details
        </button>
        <button
          onClick={() => setActiveTab("review")}
          className={`pb-2 ${
            activeTab === "review"
              ? "border-b-2 border-primary-500 text-primary-600"
              : "text-gray-500"
          }`}
        >
          Review & Rating
        </button>
        <button
          onClick={() => setActiveTab("discussion")}
          className={`pb-2 ${
            activeTab === "discussion"
              ? "border-b-2 border-primary-500 text-primary-600"
              : "text-gray-500"
          }`}
        >
          Discussion
        </button>
      </div>

      {/* Tab Content */}
      <div className="mt-6">
        {activeTab === "details" && (
          <div>
            <h2 className="text-lg font-bold">Product Details</h2>
            <p className="text-gray-700 mt-2">
              This is where product details go. Add descriptions, features, or other relevant information here.
            </p>
          </div>
        )}

        {activeTab === "review" && (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
            {/* Reviews List */}
            <div className="mt-6 space-y-4">
              <div className="">
               

                {/* Dropdown for sorting */}
                <select
                  value={sortOption}
                  onChange={(e) => setSortOption(e.target.value as SortOption)}
                  className="border border-gray-300 rounded px-2 py-1 text-gray-700"
                >
                  <option value="newest">Newest</option>
                  <option value="oldest">Oldest</option>
                </select>
              </div>

              {sortedReviews.map((review) => (
                <div
                  key={review.id}
                  className="rounded-lg p-4 shadow-sm"
                >
                  <div className="flex items-center space-x-4">
                    <Image
                      width={40}
                      height={40}
                      src={review.avatar}
                      alt="User"
                      className="w-10 h-10 rounded-full"
                    />
                    <div className="flex items-center gap-3">
                      <p className="font-bold text-gray-700">
                        {review.username}
                      </p>
                      <p className="text-sm text-primary-500">
                        {review.date} days
                      </p>
                    </div>
                  </div>
                  <div className="mt-2">
                    <div className="flex items-center gap-2">
                      {[...Array(5)].map((_, idx) => (
                        <FaStar
                          key={idx}
                          className={`text-xl font-bold ${
                            idx < review.rating
                              ? "text-[#FFCF11]"
                              : "text-primary-100"
                          }`}
                        />
                      ))}
                    </div>
                    <p className="text-gray-700 font-bold mt-1">
                      {review.comment}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Review Summary */}
            <div>
              <div className="">
                <div className="flex mb-4 items-center gap-10">
                  <h2 className="text-lg  font-bold">Product Review</h2>
                  <p className="text-primary-500">
                    {reviews.length} reviews
                  </p>
                </div>
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-2">
                    <FaStar className="text-2xl font-bold text-[#FFCF11]" />
                    <FaStar className="text-2xl font-bold text-[#FFCF11]" />
                    <FaStar className="text-2xl font-bold text-[#FFCF11]" />
                    <FaStar className="text-2xl font-bold text-[#FFCF11]" />
                    <FaStar className="text-2xl font-bold text-primary-100" />
                  </div>
                  <div>(4.0)</div>
                </div>
              </div>

              {/* Star Distribution */}
              <div className="mt-4">
                {[5, 4, 3, 2, 1].map((stars) => {
                  const count = reviews.filter((r) => r.rating === stars).length;
                  return (
                    <div key={stars} className="flex items-center space-y-3 space-x-2">
                      <span className="text-sm text-gray-600">{stars}</span>
                      <div className="flex-1 h-2 bg-gray-200 rounded">
                        <div
                          className="h-2 bg-[#FFCF11] rounded"
                          style={{ width: `${(count / reviews.length) * 100}%` }}
                        ></div>
                      </div>
                      <span className="text-sm text-gray-600">{count}</span>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        )}

        {activeTab === "discussion" && (
          <div>
            <h2 className="text-lg font-bold">Discussion</h2>
            <p className="text-gray-700 mt-2">
              This is where discussions or Q&A about the product can go.
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductReview;
