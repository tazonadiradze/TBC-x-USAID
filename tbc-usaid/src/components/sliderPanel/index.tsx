import "./index.css";
import Slider from "../common/slider/slider";
import { SwiperSlide } from "swiper/react";
import SPACEINT from "../../assets/slider/spaceint.png";
import USAID from "../../assets/slider/usaid.png";
import TINET from "../../assets/slider/tinet.png";
import TEGETA from "../../assets/slider/tegeta.png";
import SPECTRE from "../../assets/slider/spectre.png";
import TBCLIZING from "../../assets/slider/tbclizing.png";
import UFC from "../../assets/slider/ufc.png";

function SliderPanel() {
  return (
    <div className="slider-panel-wrapper">
      <div className="slider-panel">
        <Slider>
          <SwiperSlide>
            {<img src={USAID} className="slider-panel-img" />}
          </SwiperSlide>
          <SwiperSlide>
            {<img src={SPACEINT} className="slider-panel-img" />}
          </SwiperSlide>
          <SwiperSlide>
            {<img src={TINET} className="slider-panel-img" />}
          </SwiperSlide>
          <SwiperSlide>
            {<img src={TEGETA} className="slider-panel-img" />}
          </SwiperSlide>
          <SwiperSlide>
            {<img src={SPECTRE} className="slider-panel-img" />}
          </SwiperSlide>
          <SwiperSlide>
            {<img src={TBCLIZING} className="slider-panel-img" />}
          </SwiperSlide>
          <SwiperSlide>
            {<img src={UFC} className="slider-panel-img" />}
          </SwiperSlide>
        </Slider>
      </div>
    </div>
  );
}

export default SliderPanel;
