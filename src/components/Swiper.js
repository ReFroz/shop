import Image from 'next/image';
import { useRef, useEffect } from 'react'
import { register } from 'swiper/element/bundle'

register();

export default function Swiper (){

  return (<div className='max-w-[350px]'>
    <swiper-container
      slides-per-view="3"
      navigation="true"
      pagination='true'
      loop='true'
    >
      <swiper-slide><Image href="./img/Ico.png" width={300} height={300}/></swiper-slide>
      <swiper-slide>Slide 2</swiper-slide>
      <swiper-slide>Slide 3</swiper-slide>
      <swiper-slide>Slide 4</swiper-slide>
      <swiper-slide>Slide 5</swiper-slide>
      <swiper-slide>Slide 6</swiper-slide>
    </swiper-container>
    </div>
  );
};