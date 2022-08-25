import React, { useEffect, useState } from 'react'
import { Entity, Scene } from '@belivvr/aframe-react'
import { PagineTemplate } from '../components/PagineTemplate'
import Head from 'next/head'

const isServer = () => typeof window === 'undefined'
const Salas = (props) => {
  const [appRendered, setAppRendered] = useState(false)
  useEffect(() => {
    if (!isServer()) {
      require('aframe')
      setAppRendered(true)
    }
  }, [])
  // console.log(props)
  return (
    <>
      <Head>
        <title>Salas</title>
      </Head>
      <div>
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
            className="bg-opacity absolute top-0 right-0 bottom-0 left-0 z-10 flex justify-center items-center"
          >
            <iframe
              title="OVUM2022"
              className="w-[90%] md:w-[70%] h-[608px] mt-4 sm:mt-0"
              src="https://crn.interpret.world/loginlink?token=https://crn.interpret.world/loginlink?token=CONGRESSCOLOMBIADEMO"
              height="280"
              allow="camera *; microphone *"
            ></iframe>
          </div>
        </PagineTemplate>
      </div>
    </>
  )
}

export default Salas
export async function getStaticProps({ locale }) {
  const response = await import(`../lang/${locale}.json`)

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
