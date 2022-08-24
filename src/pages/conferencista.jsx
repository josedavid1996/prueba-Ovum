import React, { useEffect, useState } from 'react'
import { Entity, Scene } from '@belivvr/aframe-react'
import { PagineTemplate } from '../components/PagineTemplate'
import Head from 'next/head'
import Image from 'next/image'
// import dynamic from ' next/dynamic'
import { IconArrowLeft } from '../icons'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'
import { Pagination, Navigation } from 'swiper'

const isServer = () => typeof window === 'undefined'

const Conferencista = (props) => {
  const [appRendered, setAppRendered] = useState(false)

  const {
    titulo,
    cardSubtitulo1,
    cardParrafo1,
    fecha1,
    sala1,
    cardSubtitulo2,
    cardParrafo2,
    fecha2,
    sala2,
    cardSubtitulo3,
    cardParrafo3,
    fecha3,
    sala3,
    cardSubtitulo4,
    cardParrafo4,
    fecha4,
    sala4
  } = props.Conferencista
  useEffect(() => {
    if (!isServer()) {
      require('aframe')
      setAppRendered(true)
    }
  }, [])

  return (
    <>
      <Head>
        <title>Conferencista</title>
      </Head>
      <div>
        {appRendered && (
          <Scene>
            <a-sky src="/image/360-1.jpg"></a-sky>
            {/* <a-entity cursor="rayOrigin:mouse"></a-entity> */}
          </Scene>
        )}
      </div>
      <PagineTemplate>
        {/* Modal  */}
        <div
          id="modal"
          className="bg-opacity absolute top-0 right-0 bottom-0 left-0 z-10  flex justify-center items-center "
        >
          <div className="w-[80%] max-w-[1050px] lg:h-[60%] mt-4 sm:mt-0 overflow-hidden ">
            <p className=" text-center font-light text-[25px] leading-[30px]  text-white mb-11 text-conferencista">
              {titulo}
            </p>
            {/* Carrousel  */}

            <Swiper
              style={{
                '--swiper-navigation-color': '#7d005e'
              }}
              slidesPerView={1}
              spaceBetween={15}
              // navigation={true}
              pagination={{
                clickable: true
              }}
              // slidesPerGroup={1}
              // loop={true}
              // loopFillGroupWithBlank={true}
              breakpoints={{
                700: {
                  slidesPerView: 2,
                  spaceBetween: 15
                },
                950: {
                  slidesPerView: 3,
                  spaceBetween: 10
                },
                1300: {
                  slidesPerView: 4,
                  spaceBetween: 10
                }
              }}
              modules={[Navigation]}
              navigation={true}
              // className="mySwiper"
            >
              <SwiperSlide>
                <div className="w-[280px] bg-white p-4 flex flex-col items-center rounded-2xl relative mx-auto">
                  <Image
                    src="/image/foto-1.png"
                    className="w-[197px] h-[197px] rounded-full mb-4"
                    width="197px"
                    height="197px"
                    priority
                    alt="foto-1"
                  />
                  <h3 className="text-[22px] leading-[33px] font-normal text-black mb-[10px]">
                    Fabio Nunes
                  </h3>
                  <h4 className="text-center leading-[23px] text-[#355258] text-lg  font-normal ">
                    {cardSubtitulo1}
                  </h4>
                  <p className="text-center font-light text-[15px] leading-[21px] mb-4">
                    {cardParrafo1}
                  </p>
                  <p className="text-[15px] leading-[21px] text-[#1C6096] font-light font-open">
                    {fecha1}
                    <span className="text-primary-100 font-semibold">
                      {sala1}
                    </span>
                  </p>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="w-[280px] bg-white p-4 flex flex-col items-center rounded-2xl">
                  <Image
                    src="/image/foto-3.png"
                    className="w-[197px] h-[197px] rounded-full mb-4"
                    width="197px"
                    height="197px"
                    alt="foto-3"
                  />
                  <h3 className="text-[22px] leading-[33px] font-normal text-black mb-[10px]">
                    Kate Barger
                  </h3>
                  <h4 className="text-center leading-[23px] text-[#355258] text-lg  font-normal ">
                    {cardSubtitulo2}
                  </h4>
                  <p className="text-center font-light text-[15px] leading-[21px] mb-4">
                    {cardParrafo2}
                  </p>
                  <p className="text-[15px] leading-[21px] text-[#1C6096] font-light font-open">
                    {fecha2}
                    <span className="text-primary-100 font-semibold">
                      {sala2}
                    </span>
                  </p>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="w-[280px] bg-white p-4 flex flex-col items-center rounded-2xl">
                  <Image
                    src="/image/foto-2.png"
                    className="w-[197px] h-[197px] rounded-full mb-4"
                    width="197px"
                    height="197px"
                    alt="foto-2"
                  />
                  <h3 className="text-[22px] leading-[33px] font-normal text-black mb-[10px]">
                    Isabel Jimeno
                  </h3>
                  <h4 className="text-center leading-[23px] text-[#355258] text-lg  font-normal ">
                    {cardSubtitulo3}
                  </h4>
                  <p className="text-center font-light text-[15px] leading-[21px] mb-4">
                    {cardParrafo3}
                  </p>
                  <p className="text-[15px] leading-[21px] text-[#1C6096] font-light font-open">
                    {fecha3}
                    <span className="text-primary-100 font-semibold">
                      {sala3}
                    </span>
                  </p>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="w-[280px] bg-white p-4 flex flex-col items-center rounded-2xl relative">
                  <Image
                    src="/image/foto-4.png"
                    className="w-[197px] h-[197px] rounded-full mb-4"
                    width="197px"
                    height="197px"
                    alt="foto-4"
                  />
                  <h3 className="text-[22px] leading-[33px] font-normal text-black mb-[10px]">
                    Fernando Sampedro
                  </h3>
                  <h4 className="text-center leading-[23px] text-[#355258] text-lg  font-normal ">
                    {cardSubtitulo4}
                  </h4>
                  <p className="text-center font-light text-[15px] leading-[21px] mb-4">
                    {cardParrafo4}
                  </p>
                  <p className="text-[15px] leading-[21px] text-[#1C6096] font-light font-open">
                    {fecha4}
                    <span className="text-primary-100 font-semibold">
                      {sala4}
                    </span>
                  </p>
                </div>
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
      </PagineTemplate>
    </>
  )
}

export default Conferencista
export async function getStaticProps({ locale }) {
  const response = await import(`../lang/${locale}.json`)

  return {
    props: {
      Conferencista: response.default.Conferencista
    }
  }
}
