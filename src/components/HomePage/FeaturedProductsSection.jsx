import React, { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const FeaturedProductsSection = () => {
  const [featuredProducts, setFeaturedProducts] = useState([]);

  useEffect(() => {
    AOS.init();
    fetchFeaturedProducts();
  }, []);

  const fetchFeaturedProducts = async () => {
    try {
      const response = await fetch("http://localhost:5000/api/featured-products");
      const data = await response.json();
      setFeaturedProducts(data.featuredToys.slice(0, 3));
    } catch (error) {
      console.error("Error fetching featured products:", error);
    }
  };

  return (
    <section className="py-10">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-3xl font-bold mb-8">Featured Products</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {featuredProducts.map((product, index) => (
            <div
              key={index}
              data-aos="fade-up"
              data-aos-delay={200 * index}
              className="bg-white shadow-lg rounded-lg p-6 flex flex-col justify-between"
            >
              <div className="flex justify-center mb-4">
                <img
                  src={product.photoURL}
                  alt={product.toyName}
                  className="w-32 h-32 object-cover"
                />
              </div>
              <div>
                <h3 className="text-lg font-bold mb-2">{product.toyName}</h3>
                <p className="text-neutral1">{product.descriptions.slice(0, 100)}</p>
              </div>
              <button className="bg-primary text-white py-2 px-4 mt-4 rounded">
                Love it
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedProductsSection;
