import {Swiper, SwiperSlide} from "swiper/react";
import {Autoplay} from "swiper/modules";
import "swiper/css"
import useFetch from "../hooks/useFetch";
import Styles from "./Highlights.module.css";
const STRAPI_ENDPOINT = `http://localhost:1337`;

function Highlights() {
    const API_URL = import.meta.env.VITE_STRAPI_URI;
    const highlights = useFetch(`${API_URL}/highlights?populate=*`);
  return(
    <>
      
      <Swiper
          modules={[Autoplay]}
          loop
          spaceBetween={8} slidesPerView={1}
          autoplay={{
            delay: 5000,
            disableOnInteraction: false,
          }}
          >
          {highlights?.data?.data.map((highlight) => {
          console.log("Response: ", highlights.data?.data);
          console.log("Image Url: ", highlight.backgroundImg?.url);
           return(
            <SwiperSlide>
              <div className={Styles.highlightCard}>
                <h4>{highlight.title}</h4>
                <img className={Styles.highlightImg} src={`${STRAPI_ENDPOINT}${highlight.backgroundImg?.url}`} />
                <p>{highlight.description}</p>

              </div>
            </SwiperSlide>
          )})}
          </Swiper>
    </>
  )
}

export default Highlights;