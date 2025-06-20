// Hero.jsx
import React from "react";
import "./Hero.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, EffectFade, Autoplay } from "swiper/modules";
import "swiper/css/effect-fade";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const Hero = () => {
  const heroSlides = [
    {
      id: 1,
      background: "/Heo-img-1.jpg",
      title: "Get Your Next Job With",
      brand: "9 to 5",
      desc: "Discover thousands of curated opportunities tailored to your skills and career goals. Your dream job is just a click away.",
    },
    {
      id: 2,
      background: "/Hero-img-2.jpg",
      title: "Turn Ambition into Employment At",
      brand: "9 to 5",
      desc: "From entry-level to executive roles — find the perfect match for your next big career move on 9 to 5.",
    },
    {
      id: 3,
      background: "/Hero-img-3.jpg",
      title: "Land Interviews Faster With",
      brand: "9 to 5",
      desc: "With intelligent job matching, real-time alerts, and resume optimization, 9 to 5 gives you the edge in today’s job market.",
    },
    {
      id: 4,
      background: "/Hero-img-4.jpg",
      title: "Your Career Upgrade Starts At",
      brand: "9 to 5",
      desc: "Explore roles that align with your passion and potential. Let’s build your future, one application at a time.",
    },
  ];

  return (
    <div className="hero-swiper">
     <Swiper
  modules={[Navigation, Pagination, EffectFade, Autoplay]}
  navigation
  pagination={{ clickable: true }}
  loop
  effect="fade"
  fadeEffect={{ crossFade: true }}
  speed={1000}
  autoplay={{
    delay: 5000, // 5 seconds between slides
    disableOnInteraction: false, // keeps autoplay even if user interacts
  }}
>
        {heroSlides.map((slide) => (
          <SwiperSlide key={slide.id}>
            <div
              className="header"
              style={{ backgroundImage: `url(${slide.background})` }}
            >
              <div className="header-container">
                <div className="header-content">
                  <h2>
                    {slide.title}{" "}
                    <span
                      style={{ fontFamily: `"Passions Conflict", cursive` }}
                    >
                      {slide.brand}
                    </span>
                  </h2>
                  <p>{slide.desc}</p>
                  <button>View Menu</button>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Hero;
