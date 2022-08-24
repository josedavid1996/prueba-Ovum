import React, { useEffect, useState } from 'react'
import { Entity, Scene } from '@belivvr/aframe-react'
import Head from 'next/head'
import Image from 'next/image'
import { PagineTemplate } from '../../../components/PagineTemplate'
import { IconClose } from '../../../icons'
import { useRouter } from 'next/router'

const isServer = () => typeof window === 'undefined'

const Patrocinador = () => {
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
        <title>Patrocinador</title>
      </Head>
      <div>
        {appRendered && (
          <Scene>
            <a-sky src="/image/360-1.jpg"></a-sky>
            {/* <a-entity cursor="rayOrigin:mouse"></a-entity> */}
          </Scene>
        )}
      </div>
      <h1 className="text-white text-3xl">Hola</h1>
      <PagineTemplate>
        <div
          id="modal-patrocinador"
          className="bg-opacity absolute top-0 right-0 bottom-0 left-0 z-10 flex justify-center items-center"
        >
          <div
            id="card-patrocinador"
            className="bg-[#ffffff85] h-[60vh] w-[80%] rounded-[10px] grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 justify-items-center items-center relative"
          >
            <div
              className="absolute top-4 right-4 cursor-pointer"
              id="close-patrocinador"
            >
              {/* <IconClose className="w-[25px] h-[23px] md:w-[30px] md:h-[28px]" /> */}
            </div>
            <a>
              <Image
                id="cargill"
                priority
                className="cursor-pointer"
                src="/image/cargill.png"
                alt="cargil"
                width="173px"
                height="78px"
                onClick={(e) => router.push('patrocinador/cargill')}
              />
            </a>

            <a>
              <Image
                id="cmi"
                className="cursor-pointer"
                src="/image/cmi.png"
                alt="cmi"
                width="213px"
                height="53px"
                onClick={(e) => router.push('patrocinador/salmet')}
              />
            </a>
            <a>
              <Image
                id="trouw"
                className="cursor-pointer"
                src="/image/trouw.png"
                alt="trouw"
                width="229px"
                height="49px"
                onClick={(e) => router.push('patrocinador/hubbard')}
              />
            </a>
          </div>
        </div>
      </PagineTemplate>
    </>
  )
}

export default Patrocinador
