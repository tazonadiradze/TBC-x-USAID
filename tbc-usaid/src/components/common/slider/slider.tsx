// import React, { ReactNode } from "react";
// import "./slider.css";
// import { Swiper, SwiperSlide } from "swiper/react";

// import "swiper/css";
// import "swiper/css/navigation";
// import "swiper/css/pagination";
// import "swiper/css/autoplay";
// import "swiper/css/effect-fade";
// import "./slider.css";

// import SwiperCore from "swiper/core";

// SwiperCore.use([Navigation, Pagination, A11y, Autoplay]);

// interface SliderProps {
//   children: ReactNode;
//   className?: string;
// }

// const Slider: React.FC<SliderProps> = ({ children }) => {
//   return (
//     <Swiper
//       className="custom-class"
//       slidesPerView={3}
//       slidesPerGroup={3}
//       navigation
//       pagination={{ clickable: true }}
//       // autoplay={{ delay: 3000 }}
//       effect="fade"
//       loop
//     >
//       {React.Children.toArray(children).map((child, index) => (
//         <SwiperSlide key={index}>{child}</SwiperSlide>
//       ))}
//     </Swiper>
//   );
// };

// export default Slider;

import React, { ReactNode } from "react";
import "./slider.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, A11y, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import "swiper/css/effect-fade";
import "./slider.css";

import SwiperCore from "swiper/core";

SwiperCore.use([Navigation, Pagination, A11y, Autoplay]);

interface SliderProps {
  children: ReactNode;
  className?: string;
}

const Slider: React.FC<SliderProps> = ({ children }) => {
  const breakpoints = {
    1750: {
      slidesPerView: 3,
      slidesPerGroup: 3,
    },
    900: {
      slidesPerView: 2,
      slidesPerGroup: 2,
    },

    500: {
      slidesPerView: 1,
      slidesPerGroup: 1,
    },
  };

  return (
    <Swiper
      className="custom-class"
      navigation
      pagination={{ clickable: true }}
      effect="fade"
      //autoplay={{ delay: 3000 }}
      loop
      breakpoints={breakpoints}
    >
      {React.Children.toArray(children).map((child, index) => (
        <SwiperSlide key={index}>{child}</SwiperSlide>
      ))}
    </Swiper>
  );
};

export default Slider;
