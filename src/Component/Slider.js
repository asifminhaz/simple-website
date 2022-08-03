import React from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode } from 'swiper';
import "swiper/css";

import "swiper/css/free-mode"
const Slider = () => {
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
            <div class="card card-compact h-50 bg-base-100 ">
  <figure><img src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=884&q=80" alt="Shoes" /></figure>
  <div class="card-body">
    <h2 class="card-title">Brand</h2>
    
  <li>Positioning</li>
  <li>Identity</li>
  <li>Naming</li>
  <li>Voice and Tone</li>
  <li>Guidelines</li>
  <li>Design Systems</li>
  <li>Visual Centers</li>
  <li>Playbooks</li>

  </div>
</div>
            </SwiperSlide>
            <SwiperSlide>
            <div class="card card-compact bg-base-100 ">
  <figure><img src="https://images.unsplash.com/photo-1543269865-cbf427effbad?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80" alt="Shoes" /></figure>
  <div class="card-body">
    <h2 class="card-title">Engineering</h2>
   <li>Technical Architecture</li>
   <li>Technical Discovery</li>
   <li>Website Development</li>
   <li>Application Development</li>
   <li>Prototyping</li>
   <li>Quality Assurance</li>
   <li>Data Architecture</li>
   <li>CMS Implementation</li>
   
  </div>
</div>
            </SwiperSlide>
            <SwiperSlide>
            <div class="card card-compact  bg-base-100 ">
  <figure><img src="https://images.unsplash.com/photo-1457433575995-8407028a9970?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80" alt="Shoes" /></figure>
  <div class="card-body">
    <h2 class="card-title">Digital Experience</h2>
   <li>Websites</li>
   <li>ios & Android Apps</li>
   <li>AR/VR Installations & POS</li>
   <li>Vision & Roadmapping</li>
   <li>Service Design</li>
   <li>Cx</li>
   
  </div>
</div>
            </SwiperSlide>
            <SwiperSlide>
            <div class="card card-compact  bg-base-100 ">
  <figure><img src="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80" alt="Shoes" /></figure>
  <div class="card-body">
    <h2 class="card-title">Marketing</h2>
    <li>Communication Planning</li>
    <li>Campaigns</li>
    <li>Social Media</li>
    <li>SEO/SEM</li>
    <li>Event Measurements</li>
    <li>Photography and art</li>
    <li>Post Production</li>
    <li>Copywriting and Ediitorial</li>
    

  </div>
</div>
            </SwiperSlide>
            <SwiperSlide>
            <div class="card card-compact  bg-base-100 ">
  <figure><img className='h-3/4' src="https://images.unsplash.com/photo-1497366412874-3415097a27e7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=869&q=80" alt="Shoes" /></figure>
  <div class="card-body">
    <h2 class="card-title">Strategy and Consulting</h2>
    <li>Communication Planning</li>
    <li>Campaigns</li>
    <li>Social Media</li>
    <li>SEO/SEM</li>
    <li>Event Measurements</li>
    <li>Photography and art</li>
    <li>Post Production</li>
    <li>Copywriting and Ediitorial</li>
    

  </div>
</div>
            </SwiperSlide>
            <SwiperSlide>
            <div class="card card-compact  bg-base-100 shadow-xl">
  <figure><img src="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80" alt="Shoes" /></figure>
  <div class="card-body">
    <h2 class="card-title">Management</h2>
    <li>Communication Planning</li>
    <li>Campaigns</li>
    <li>Social Media</li>
    <li>SEO/SEM</li>
    <li>Event Measurements</li>
    <li>Photography and art</li>
    <li>Post Production</li>
    <li>Copywriting and Ediitorial</li>
    

  </div>
</div>
            </SwiperSlide>
   
            {/* <SwiperSlide>
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
            </SwiperSlide> */}

        </Swiper>
    </div>
    );
};

export default Slider;