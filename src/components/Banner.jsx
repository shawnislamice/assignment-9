import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
import img1 from "../assets/slider1.jpg";
import img2 from "../assets/slider2.jpg";
import img3 from "../assets/slider3.jpg";
import img4 from "../assets/slider4.jpg";
import img5 from "../assets/slider5.jpg";
import img6 from "../assets/slider6.jpg";
import img7 from "../assets/slider7.jpg";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import {
  EffectFade,
  EffectFlip,
  EffectCube,
  EffectCoverflow,
} from "swiper/modules";

const Banner = () => {
  return (
    <div className="container mx-auto max-w-screen-xl md:my-10 my-5">
      <Swiper
        data-aos="fade-up"
        className="h-[300px] md:h-[500px] lg:h-[600px] rounded-xl bg-gradient-to-r from-cyan-500 to-blue-500 relative "
        spaceBetween={50}
        slidesPerView={1}
        modules={[
          Navigation,
          Pagination,
          Scrollbar,
          A11y,
          EffectFade,
          EffectFlip,
          EffectCube,
          EffectCoverflow,
        ]}
        navigation
        pagination={{ clickable: true }}
        scrollbar={{ draggable: true }}
        effect="coverflow"
        speed={1500}
      >
        <SwiperSlide>
          <img
            src={img2}
            alt="slide1"
            style={{ width: "100%", height: "100%" }}
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src={img1}
            alt="slide2"
            style={{ width: "100%", height: "100%" }}
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src={img3}
            alt="slide3"
            style={{ width: "100%", height: "100%" }}
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src={img4}
            alt="slide4"
            style={{ width: "100%", height: "100%" }}
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src={img5}
            alt="slide5"
            style={{ width: "100%", height: "100%" }}
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src={img6}
            alt="slide6"
            style={{ width: "100%", height: "100%" }}
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src={img7}
            alt="slide7"
            style={{ width: "100%", height: "100%" }}
          />
        </SwiperSlide>
      </Swiper>
      <div id="banner-anchor"></div>
    </div>
  );
};

export default Banner;
