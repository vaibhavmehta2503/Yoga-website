import React from "react";
import RatingStar from "./RatingStar";

const Testimonials = ({ testimonials }) => {
  return (
    <section className="bg-white py-14 px-4 sm:px-8 lg:px-24">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-gray-800 mb-8">
          What Our Customers Say
        </h2>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((t, index) => (
            <div
              key={index}
              className="bg-white border border-gray-200 rounded-2xl p-6 shadow group hover:shadow-xl transition-all duration-300 hover:border-primary cursor-pointer"
            >
              <div className="text-yellow-400 mb-2 flex justify-center">
                <RatingStar rating={t.rating} />
              </div>
              <p className="text-gray-600 italic mb-4 group-hover:text-gray-800 transition">
                “{t.review}”
              </p>
              <p className="font-semibold text-gray-800 group-hover:text-primary-dark transition">
                – {t.name}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
