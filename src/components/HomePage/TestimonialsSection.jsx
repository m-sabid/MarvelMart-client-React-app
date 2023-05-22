import React, { useEffect } from "react";
import { FaQuoteLeft } from "react-icons/fa";
import AOS from "aos";
import "aos/dist/aos.css";

const TestimonialsSection = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <section className="bg-neutral2 py-10">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-3xl font-bold mb-8">Embracing Inspiration</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div data-aos="fade-up" className="bg-white shadow-lg rounded-lg p-6">
            <div className="flex items-start mb-4">
              <FaQuoteLeft className="text-primary text-2xl mr-2" />
              <p className="text-neutral1">
                Marvel Comics has created a universe where ordinary people
                become extraordinary heroes, reminding us that courage and
                determination can change the world.
              </p>
            </div>
            <p className="text-accent1 font-bold">- Stan Lee</p>
            <p className="text-neutral1">Writer</p>
          </div>
          <div
            data-aos="fade-up"
            data-aos-delay="200"
            className="bg-white shadow-lg rounded-lg p-6"
          >
            <div className="flex items-start mb-4">
              <FaQuoteLeft className="text-primary text-2xl mr-2" />
              <p className="text-neutral1">
                Marvel Comics is a testament to the power of imagination, where
                heroes and villains come alive on the pages, inspiring us to
                believe in the extraordinary within ourselves.
              </p>
            </div>
            <p className="text-accent1 font-bold">-Jack Kirby</p>
            <p className="text-neutral1">Writer</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
