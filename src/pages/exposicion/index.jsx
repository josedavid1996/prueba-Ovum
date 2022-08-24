import React, { useEffect, useState } from 'react'
import { Entity, Scene } from '@belivvr/aframe-react'
import Head from 'next/head'
import { PagineTemplate } from '../../components/PagineTemplate'
import { IconBack, IconPatrocinador } from '../../icons'
import { useRouter } from 'next/router'

const isServer = () => typeof window === 'undefined'

const Exposicion = (props) => {
  const [appRendered, setAppRendered] = useState(false)
  const [isModal, setIsModal] = useState(false)
  const router = useRouter()
  const {
    botonIntro,
    volver,
    modalTitulo,
    cardTitulo1,
    cardTitulo2,
    cardTitulo3,
    cardTitulo4,
    cardTitulo5,
    cardTitulo6
  } = props.Exposicion
  useEffect(() => {
    if (!isServer()) {
      require('aframe')
      setAppRendered(true)
    }
  }, [])
  return (
    <>
      <Head>
        <title>Exposicion</title>
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
        <div
          id="modal"
          className={`bg-opacity absolute top-0 right-0 bottom-0 left-0 z-10  ${
            isModal ? 'flex' : 'hidden'
          }  justify-center items-center`}
        >
          <div className=" w-[90%] lg:w-[70%]  bg-white h-[608px] overflow-y-scroll md:overflow-y-auto mt-4 sm:mt-0">
            <div className="bg-secundary-100 px-[18px] py-2 flex justify-between items-center">
              <div className="flex items-center">
                <IconPatrocinador className="w-[17px] h-[15px] md:w-[27px] md:h-[25px] mr-1  text-black" />
                <p className="text-base tracking-widest font-open md:text-xl font-bold leading-7 text-secundary-400">
                  {modalTitulo}
                </p>
              </div>
              <div
                className="flex cursor-pointer"
                id="close"
                onClick={() => setIsModal(false)}
              >
                <p className="tracking-tracking-[0.08rem] font-open text-xs md:text-sm font-semibold text-secundary-400 mr-2">
                  {volver}
                </p>
                <IconBack className="w-[15px] h-[13px] md:w-[25px] md:h-[23px] text-black" />
              </div>
            </div>

            <div className="w-full cards-exposicion gap-y-[34px] gap-x-[27px] mt-8 max-w-[1200px] mx-auto">
              <div
                onClick={() => router.push('exposicion/patrocinador')}
                className="cursor-pointer w-[250px]  md:w-[314px] h-[112px] bg-[#63CC55] flex justify-center items-center rounded-[10px]"
              >
                <p className="text-[25px] leading-[30px]">{cardTitulo1}</p>
              </div>

              <div
                onClick={() => router.push('exposicion/auspiciador-a')}
                className="cursor-pointer w-[250px]  md:w-[314px] h-[112px] bg-[#63CC55] flex justify-center items-center rounded-[10px]"
              >
                <p className="text-[25px] leading-[30px]">{cardTitulo2}</p>
              </div>
              <div
                onClick={() => router.push('exposicion/auspiciador-b')}
                className="cursor-pointer w-[250px]  md:w-[314px] h-[112px] bg-[#63CC55] flex justify-center items-center rounded-[10px]"
              >
                <p className="text-[25px] leading-[30px]">{cardTitulo3}</p>
              </div>
              <div
                onClick={() => router.push('exposicion/auspiciador-c')}
                className="cursor-pointer w-[250px]  md:w-[314px] h-[112px] bg-[#63CC55] flex justify-center items-center rounded-[10px]"
              >
                <p className="text-[25px] leading-[30px]">{cardTitulo4}</p>
              </div>
              <div
                onClick={() => router.push('exposicion/auspiciador-d')}
                className="cursor-pointer w-[250px]  md:w-[314px] h-[112px] bg-[#63CC55] flex justify-center items-center rounded-[10px]"
              >
                <p className="text-[25px] leading-[30px]">{cardTitulo5}</p>
              </div>
              <div
                onClick={() => router.push('exposicion/auspiciador-e')}
                className="cursor-pointer w-[250px]  md:w-[314px] h-[112px] bg-[#63CC55] flex justify-center items-center rounded-[10px]"
              >
                <p className="text-[25px] leading-[30px]">{cardTitulo6}</p>
              </div>
            </div>
          </div>
        </div>
      </PagineTemplate>
      <button
        id="showButton"
        onClick={() => setIsModal(true)}
        className="btn w-[200px] h-[35px] md:w-[187px] md:h-[42px] text-white bg-primary-100 flex items-center justify-center text-base md:text-[20px] leading-[21.79px font-open font-semibold tracking-widest absolute bottom-[170px] sm:bottom-[134px] md:bottom-[125px] mx-auto right-0 left-0 "
      >
        {botonIntro}
      </button>
    </>
  )
}

export default Exposicion

export async function getStaticProps({ locale }) {
  const response = await import(`../../lang/${locale}.json`)

  return {
    props: {
      Exposicion: response.default.Exposicion
    }
  }
}
