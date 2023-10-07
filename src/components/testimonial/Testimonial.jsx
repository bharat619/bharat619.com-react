import { Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";

import "./testimonial.css";

const Testimonial = () => {
  const data = [
    {
      name: "Super Encorian",
      review:
        "Thought leadership and deligent work efforts greatly contributed to the success of the company.",
    },
    {
      name: "Extraordinary Client Services",
      review:
        "Exceptional contributions to customer experience and client services which recognized as a key driver of the company's success.",
    },
    {
      name: "Award of Excellence",
      review:
        "Exceptional in contributions towards delivering high standards of excellence.",
    },
    {
      name: "Budding star award",
      review: "Dedication and passion that was exhibited towards the work.",
    },
    {
      name: "Machine Learning Hackathons",
      review:
        "3rd Position in the Hackathon in machine learning conducted by Great Lakes.",
    },
    {
      name: "Dashing Kiprosher",
      review:
        "Quick learning, contribution and delivering product with high standards and quality.",
    },
  ];

  return (
    <section id="testimonials">
      <h5>Awards from workplace</h5>
      <h2>Awards</h2>
      <Swiper
        className="container testimonials__container"
        spaceBetween={40}
        slidesPerView={1}
        modules={[Pagination]}
        pagination={{ clickable: true }}
      >
        {data.map((d) => (
          <SwiperSlide className="testimonial">
            {/* <div className="client__avatar">
              <img src={d.avatar} alt="" />
            </div> */}
            <h5>{d.name}</h5>
            <small className="client__review">{d.review}</small>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default Testimonial;
