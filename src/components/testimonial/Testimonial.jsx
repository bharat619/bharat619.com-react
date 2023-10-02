import { Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";

import "./testimonial.css";
import AVTR1 from "../../assets/avatar1.jpg";

const Testimonial = () => {
  const data = [
    {
      avatar: AVTR1,
      review:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Totam voluptatibus eos molestias minus vitae ex modi laboriosam doloremque ducimus ullam necessitatibus rerum soluta ut nihil accusantium nemo et, suscipit impedit?",
      name: "Tina Snow",
      id: 1,
    },
    {
      avatar: AVTR1,
      review:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Totam voluptatibus eos molestias minus vitae ex modi laboriosam doloremque ducimus ullam necessitatibus rerum soluta ut nihil accusantium nemo et, suscipit impedit?",
      name: "Tina Snow",
      id: 2,
    },
    {
      avatar: AVTR1,
      review:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Totam voluptatibus eos molestias minus vitae ex modi laboriosam doloremque ducimus ullam necessitatibus rerum soluta ut nihil accusantium nemo et, suscipit impedit?",
      name: "Tina Snow",
      id: 3,
    },
  ];

  return (
    <section id="testimonials">
      <h5>Review from clients</h5>
      <h2>Testimonials</h2>
      <Swiper
        className="container testimonials__container"
        spaceBetween={40}
        slidesPerView={1}
        modules={[Pagination]}
        pagination={{ clickable: true }}
      >
        {data.map((d) => (
          <SwiperSlide className="testimonial">
            <div className="client__avatar">
              <img src={d.avatar} alt="" />
            </div>
            <h5>{d.name}</h5>
            <small className="client__review">{d.review}</small>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default Testimonial;
