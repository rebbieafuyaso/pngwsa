import {Swiper, SwiperSlide} from "swiper/react";
import {Autoplay} from "swiper/modules";
import "swiper/css"
import useFetch from "../hooks/useFetch";
import Styles from "./Highlights.module.css";
import * as Icons from "lucide-react"

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
          className={Styles.highlightContainer}
          >
          {highlights?.data?.data.map((highlight) => {
            const Icon = Icons[highlight.iconName];
            console.log(Icon);
           return(
            <SwiperSlide key={highlight.id}>
              <div className={Styles.highlightCard}>
                <h3>{highlight.title}</h3>
                <p>{Icon && <Icon size={70} />}</p>
                <p>{highlight.description}</p>
              </div>
            </SwiperSlide>
          )})}
          </Swiper>
    </>
  )
}

export default Highlights;