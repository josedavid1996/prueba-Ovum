import React, { useEffect, useState } from 'react'
import { Entity, Scene } from '@belivvr/aframe-react'
import Head from 'next/head'
import Image from 'next/image'
import { PagineTemplate } from '../../../components/PagineTemplate'
import { IconClose } from '../../../icons'
import { useRouter } from 'next/router'

const isServer = () => typeof window === 'undefined'

const AuspiciadorA = (props) => {
  const [appRendered, setAppRendered] = useState(false)
  const [isModal, setIsModal] = useState(false)
  const router = useRouter()
  useEffect(() => {
    if (!isServer()) {
      require('aframe')
      setAppRendered(true)
    }
  }, [])
  return (
    <>
      <Head>
        <title>Auspiciador A</title>
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
          id="modal-patrocinador"
          className="bg-opacity absolute top-0 right-0 bottom-0 left-0 z-10 flex justify-center items-center"
        >
          <div
            id="card-patrocinador"
            className="bg-[#ffffff85] h-[60vh] w-[80%] rounded-[10px] grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 justify-items-center items-center relative "
          >
            <div
              className="absolute top-4 right-4 cursor-pointer"
              id="close-patrocinador"
            >
              {/* <IconClose className="w-[25px] h-[23px] md:w-[30px] md:h-[28px]" /> */}
            </div>
          </div>
        </div>
      </PagineTemplate>
    </>
  )
}

export default AuspiciadorA

export async function getStaticProps({ locale }) {
  const response = await import(`../../../lang/${locale}.json`)

  return {
    props: {
      ModalCalendario: response.ModalCalendario,
      ModalMapa: response.ModalMapa,
      ModalQuestion: response.ModalQuestion,
      Template: response.default.Template,
      HeaderIdiomas: response.default.HeaderIdiomas
    }
  }
}
