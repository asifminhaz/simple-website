import React from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode } from 'swiper';
import "swiper/css";

import "swiper/css/free-mode"

const ProductSlider = () => {
    return (
        <div className='mt-20 '>
            <Swiper
            freeMode={true}
            grabCursor={true}
            modules={[FreeMode]}
            className="mySwiper"
            slidesPerView={5}
            spaceBetween={30}
            >
                <SwiperSlide>
                    <img className='' src='https://images.unsplash.com/photo-1570126688035-1e6adbd61053?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=374&q=80'></img>
                </SwiperSlide>
                <SwiperSlide>
                    <img className='' src='https://images.unsplash.com/photo-1544456203-0af5a69f5789?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80'></img>
                </SwiperSlide>
                <SwiperSlide>
                    <img className='' src='https://images.unsplash.com/photo-1514481422339-db621c1fca86?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1374&q=80'></img>
                </SwiperSlide>
                <SwiperSlide>
                    <img className='' src='https://images.unsplash.com/photo-1504280390367-361c6d9f38f4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80'></img>
                </SwiperSlide>
                <SwiperSlide>
                  <img className='' src='https://images.unsplash.com/photo-1504851149312-7a075b496cc7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=405&q=80'></img>
                </SwiperSlide>
                <SwiperSlide>
              <img className='' src='https://images.unsplash.com/photo-1542744173-8e7e53415bb0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80'></img>
                </SwiperSlide>
                <SwiperSlide>
                    <img className='' src='https://images.unsplash.com/photo-1540317580384-e5d43616b9aa?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80'></img>
                </SwiperSlide>
                <SwiperSlide>
                <img className='' src='https://images.unsplash.com/photo-1523580494863-6f3031224c94?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80'></img>
                </SwiperSlide>

            </Swiper>
        </div>
    );
};

export default ProductSlider;