import React, { useEffect, useRef, useState } from 'react'
import { Entity, Scene } from '@belivvr/aframe-react'
import { IconCheck, IconSettings, IconSpeaker, IconWhatsapp } from '../icons'
import Link from 'next/link'
import { useRouter } from 'next/router'
import Head from 'next/head'
import ModalCalender from '../components/ModalCalender'
import ModalQuestion from '../components/ModalQuestion'
import ModalMaps from '../components/ModalMaps'
import Idiomas from '../components/Idiomas'

const isServer = () => typeof window === 'undefined'
const Lobby = (props) => {
  const [appRendered, setAppRendered] = useState(false)
  const [maps, setMaps] = useState(false)
  const [calender, setCalender] = useState(false)
  const [question, setQuestion] = useState(false)
  const salaRef = useRef(null)
  const exposicionRef = useRef(null)
  const ovumRef = useRef(null)
  const conferencistaRef = useRef(null)
  const programaRef = useRef(null)
  const mapsRef = useRef(null)
  const [isSettings, setIsSettings] = useState(false)
  const router = useRouter()
  const { textHeader1, textHeader2, ButtonHeader, toast } = props.Lobby
  // console.log(props)

  useEffect(() => {
    if (!isServer()) {
      require('aframe')
      setAppRendered(true)
    }
  }, [])
  // aframe.registerComponent('example-mesh', {
  //   init: function () {
  //     var el = this.el
  //     el.setObject3D('mesh', new THREE.Mesh())
  //     el.getObject3D('mesh') // Returns THREE.Mesh that was just created.
  //   }
  // })
  return (
    <>
      <Head>
        <title>Lobby</title>
      </Head>
      {appRendered && (
        <Scene>
          <a-assets>
            <a-asset-item id="sala-obj" src="/image/3d/sala.obj"></a-asset-item>
            <a-asset-item id="sala-mtl" src="/image/3d/sala.mtl"></a-asset-item>

            <a-asset-item id="ovum-obj" src="/image/3d/ovum.obj"></a-asset-item>
            <a-asset-item id="ovum-mtl" src="/image/3d/ovum.mtl"></a-asset-item>

            <a-asset-item
              id="programa-obj"
              src="/image/3d/programa.obj"
            ></a-asset-item>
            <a-asset-item
              id="programa-mtl"
              src="/image/3d/programa.mtl"
            ></a-asset-item>

            <a-asset-item
              id="conferencista-obj"
              src="/image/3d/conferencista.obj"
            ></a-asset-item>
            <a-asset-item
              id="conferencista-mtl"
              src="/image/3d/conferencista.mtl"
            ></a-asset-item>

            <a-asset-item
              id="exposicion-obj"
              src="/image/3d/exposicion.obj"
            ></a-asset-item>
            <a-asset-item
              id="exposicion-mtl"
              src="/image/3d/exposicion.mtl"
            ></a-asset-item>
          </a-assets>

          <a-obj-model
            src="#sala-obj"
            mtl="#sala-mtl"
            position="-26 1.5 -18"
            rotation="170 -20 90"
            class="indicador"
            onClick={(e) => router.push('/salas')}
            animation="property: rotation; to: 170 340 90; loop: true; dur: 10000;easing:linear"
          ></a-obj-model>

          <a-obj-model
            id="exposicion"
            ref={exposicionRef}
            src="#exposicion-obj"
            mtl="#exposicion-mtl"
            class="indicador"
            position="-9.5 1.5 -15"
            rotation="170 -50 90"
            animation="property: rotation; to: 170 310 90; loop: true; dur: 10000;easing:linear"
            onClick={(e) => router.push('/exposicion')}
          ></a-obj-model>

          <a-obj-model
            id="ovum"
            src="#ovum-obj"
            mtl="#ovum-mtl"
            position="0.2 1.99239 -17"
            class="indicador"
            rotation="6.9 -89 -90"
            animation="property: rotation; to: 6.9 271 -90; loop: true; dur: 10000;easing:linear"
          ></a-obj-model>
          <a-obj-model
            id="conferencistas"
            ref={conferencistaRef}
            mtl="#conferencista-mtl"
            src="#conferencista-obj"
            class="indicador"
            position="10 1 -17"
            rotation="6.2 -113 -90"
            animation="property: rotation; to: 6.2 247 -90; loop: true; dur: 10000;easing:linear"
            onClick={(e) => router.push('/conferencista')}
          ></a-obj-model>

          <a-obj-model
            id="programa"
            ref={programaRef}
            src="#programa-obj"
            mtl="#programa-mtl"
            position="21 1 -15"
            class="indicador"
            rotation="11.48 -46.53 -89"
            animation="property: rotation; to: 11.48 313,47 -89; loop: true; dur: 10000;easing:linear"
            onClick={(e) => router.push('/programas')}
          ></a-obj-model>
          <a-image
            id="calenderCon"
            src="/image/calender.png"
            height="1.5"
            width="1.5"
            position="-3 -2 -11"
            class="indicador"
            rotation="0 0 0"
            animation="property: opacity;from: 0;  to: 1;dur: 1000"
            onClick={() => {
              setCalender(true)
              setQuestion(false)
              setMaps(false)
            }}
          ></a-image>
          <a-image
            id="mapsCon"
            ref={mapsRef}
            src="/image/maps.png"
            height="1.5"
            class="indicador"
            width="1.5"
            position="0 -2 -11"
            rotation="0 0 0"
            onClick={() => {
              setMaps(true)
              setQuestion(false)
              setCalender(false)
            }}
            animation="property: opacity;from: 0;  to: 1;dur: 1000"
          ></a-image>
          <a-image
            id="questionCon"
            src="/image/question.png"
            height="1.5"
            width="1.5"
            position="3 -2 -11"
            rotation="0 0 0"
            class="indicador"
            animation="property: opacity;from: 0;  to: 1;dur: 1000"
            onClick={() => {
              setQuestion(true)
              setMaps(false)
              setCalender(false)
            }}
          ></a-image>

          <a-sky src="/image/lobby.jpg" rotation="0 -90 0"></a-sky>
          <a-entity
            cursor="rayOrigin:mouse"
            raycaster="objects: .indicador"
          ></a-entity>
        </Scene>
      )}
      {/* Header */}
      <header className="absolute top-[34px] px-[32px] md:px-[52px] flex flex-col-reverse sm:flex-row items-start sm:justify-between sm:items-center  flex-wrap  md:flex-nowrap w-full z-30">
        <div className="flex items-center">
          {/* Icon sonido  */}
          <IconSpeaker className="text-white w-[25px] h-[20px] mr-4 " />
          {/* Text  */}
          <h3 className="text-center text-white font-light text-sm md:text-lg md:leading-[25px] tracking-widest">
            {textHeader1}
            <br />
            <span className="font-bold">{textHeader2}</span>
          </h3>
        </div>
        {/* Usuario */}

        <div className="flex mb-2 justify-between  items-center w-full sm:w-auto sm:flex-row-reverse">
          <a
            onClick={(e) => router.push('/')}
            className=" text-white text-base font-normal leading-[19px]  mb-2 sm:mb-0 bg-[#00000090] py-2 px-4 rounded-lg cursor-pointer  btn text-center"
          >
            {ButtonHeader}
          </a>
          <IconSettings
            className="text-white w-6 h-6 cursor-pointer hover:rotate-[30deg] transition-transform duration-500 sm:hidden"
            onClick={() => setIsSettings(!isSettings)}
          />
          <div
            className={`absolute bg-primary-100 ${
              isSettings ? 'right-4' : 'right-[-100%]'
            } top-12 rounded-[8px] pl-2 transition-right duration-1000 sm:static sm:bg-transparent sm:pl-0`}
          >
            <Idiomas idiomas={props} />
          </div>
        </div>
      </header>

      {/* Footer */}

      <Link
        href="https://api.whatsapp.com/send?phone=3158521478&text=Entre%20a%20la%20feria"
        target="_blank"
      >
        <a>
          <IconWhatsapp className="cursor-pointer absolute z-20 bottom-[19px] left-6 md:left-[75px] w-[56px] h-[56px]  md:w-[96px] md:h-[96px] hover:translate-y-[-8px] transition-all duration-500" />
        </a>
      </Link>

      {/* Toast  */}
      <div
        id="toast"
        className="toast absolute top-[-60px]  py-4 px-10 bg-primary-100 rounded-full z-50"
      >
        <div className="relative w-full h-full">
          <span className="absolute top-[-23px] left-[-3.1rem] w-[40px] h-[40px]  bg-[#7D005E] flex justify-center items-center rounded-full">
            <IconCheck className="w-[60%] h-[60%]" />
          </span>
          <p className="text-white font-bold leading-[21px] font-open tracking-widest ">
            {toast}
          </p>
        </div>
      </div>

      {/* Modal Maps */}
      <ModalMaps maps={maps} setMaps={setMaps} dataIdioma={props.ModalMapa} />

      {/* Modal Calender */}
      <ModalCalender
        calender={calender}
        setCalender={setCalender}
        dataIdioma={props.ModalCalendario}
      />

      {/* Modal Question  */}
      <ModalQuestion
        question={question}
        setQuestion={setQuestion}
        dataIdioma={props.ModalQuestion}
      />
    </>
  )
}

export default Lobby

export async function getStaticProps({ locale }) {
  const response = await import(`../lang/${locale}.json`)

  return {
    props: {
      Lobby: response.default.Lobby,
      ModalCalendario: response.default.ModalCalendario,
      ModalMapa: response.default.ModalMapa,
      ModalQuestion: response.default.ModalQuestion,
      HeaderIdiomas: response.default.HeaderIdiomas
    }
  }
}
