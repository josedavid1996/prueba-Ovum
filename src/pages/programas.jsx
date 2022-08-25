import React, { useEffect, useState } from 'react'
import { Entity, Scene } from '@belivvr/aframe-react'
import { PagineTemplate } from '../components/PagineTemplate'
import { IconBack, IconCalender, IconPrograma } from '../icons'
import Head from 'next/head'

const isServer = () => typeof window === 'undefined'

const Programas = (props) => {
  const [appRendered, setAppRendered] = useState(false)
  const { botonIntro, volver, modalTitulo } = props.Programa
  const [isModal, setIsModal] = useState(false)
  useEffect(() => {
    if (!isServer()) {
      require('aframe')
      setAppRendered(true)
    }
  }, [])
  return (
    <>
      <Head>
        <title>Programas</title>
      </Head>
      <div>
        {appRendered && (
          <Scene>
            <a-sky src="/image/360-1.jpg"></a-sky>
            {/* <a-entity cursor="rayOrigin:mouse"></a-entity> */}
          </Scene>
        )}
      </div>
      <PagineTemplate idioma={props}>
        <div
          id="modal"
          className={`bg-opacity absolute top-0 right-0 bottom-0 left-0 z-10  ${
            isModal ? 'flex' : 'hidden'
          } justify-center items-center`}
        >
          <div className="w-[90%] md:w-[70%] h-[608px] bg-white overflow-hidden mt-4 sm:mt-0">
            <div className="bg-secundary-100 px-[18px] py-2 flex justify-between items-center">
              <div className="flex items-center">
                <IconPrograma className="w-[17px] h-[15px] md:w-[27px] md:h-[25px] mr-1 md:mr-[28px] text-black" />
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
            <div className="flex justify-center items-center  w-full h-[558px]">
              {/* <!-- <img src="image/programacion.png" className="w-[90%] h-[531px] object-contain"> --> */}
              <embed
                src="image/Prueba.pdf"
                type="application/pdf"
                className="w-[80%] h-[90%]"
              />
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

export default Programas
export async function getStaticProps({ locale }) {
  const response = await import(`../lang/${locale}.json`)

  return {
    props: {
      Programa: response.default.Programa,
      ModalCalendario: response.default.ModalCalendario,
      ModalMapa: response.default.ModalMapa,
      ModalQuestion: response.default.ModalQuestion,
      Template: response.default.Template,
      HeaderIdiomas: response.default.HeaderIdiomas
    }
  }
}
