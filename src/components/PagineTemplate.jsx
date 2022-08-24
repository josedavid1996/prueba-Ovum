import React, { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Head } from 'next/head'
import enUS from '../lang/en-US.json'
import enPe from '../lang/es-pe.json'
import enBr from '../lang/pt-br.json'
import { useRouter } from 'next/router'
import {
  IconBack,
  IconCalender,
  IconMaps,
  IconQuestion,
  IconSettings,
  IconSpeaker,
  IconWhatsapp
} from '../icons'
import ModalMaps from './ModalMaps'
import ModalCalender from './ModalCalender'
import ModalQuestion from './ModalQuestion'
import Idiomas from './Idiomas'

export const PagineTemplate = ({ children }) => {
  const [question, setQuestion] = useState(false)
  const [maps, setMaps] = useState(false)
  const [calender, setCalender] = useState(false)
  const [isSettings, setIsSettings] = useState(false)
  const router = useRouter()
  const { locale } = useRouter()
  let data
  let idiomas
  switch (locale) {
    case 'pt-br':
      data = enBr.Template
      idiomas = enBr
      break
    case 'es-pe':
      data = enPe.Template
      idiomas = enPe
      break
    case 'en-US':
      data = enUS.Template
      idiomas = enUS

      break
  }
  const { textHeader1, textHeader2, ButtonHeader } = data
  return (
    <>
      <div className="absolute hidden lg:block  top-0 right-0 z-20">
        <Image
          src="/image/soporte.png"
          alt="soporte"
          width="300px"
          height="175px"
        />
      </div>
      {children}

      {/* Header  */}
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

        <div className="flex mb-2 justify-between  lg:translate-x-[-192px] items-center w-full sm:w-auto sm:flex-row-reverse">
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
            <Idiomas idiomas={idiomas} />
          </div>
        </div>
      </header>
      {/* Footer */}

      <div className="absolute z-20 bottom-[19px] left-6 md:left-[75px] flex flex-row-reverse gap-[18px]  items-center sm:items-center ">
        <span
          onClick={() => router.back()}
          id="back"
          className="cursor-pointer w-[40px] h-[40px] md:w-[50px] md:h-[50px] bg-primary-100 flex justify-center  items-center rounded-full hover:translate-y-[-8px] transition-all duration-500 text-white"
        >
          <IconBack className="w-[60%] h-[60%]" />
        </span>
        <span
          id="calender"
          onClick={() => {
            setCalender(true)
            setQuestion(false)
            setMaps(false)
          }}
          className="cursor-pointer w-[40px] h-[40px] md:w-[50px] md:h-[50px] bg-primary-100 flex justify-center  items-center rounded-full hover:translate-y-[-8px] transition-all duration-500"
        >
          <IconCalender className="w-[60%] h-[60%]" />
        </span>
        <span
          id="maps"
          onClick={() => {
            setMaps(true)
            setQuestion(false)
            setCalender(false)
          }}
          className="cursor-pointer w-[40px] h-[40px] md:w-[50px] md:h-[50px] bg-primary-100 flex justify-center  items-center rounded-full hover:translate-y-[-8px] transition-all duration-500"
        >
          <IconMaps className="w-[60%] h-[60%]" />
        </span>
        <span
          id="question"
          onClick={() => {
            setQuestion(true)
            setMaps(false)
            setCalender(false)
          }}
          className="cursor-pointer w-[40px] h-[40px] md:w-[50px] md:h-[50px] bg-primary-100 flex justify-center  items-center rounded-full hover:translate-y-[-8px] transition-all duration-500"
        >
          <IconQuestion className="w-[60%] h-[60%]" />
        </span>
        {/* <a
          href="https://api.whatsapp.com/send?phone=3158521478&text=Entre%20a%20la%20feria"
          target="_blank"
          className="hover:translate-y-[-8px] transition-all duration-500"
        >
          <img
            src="image/whatsApp.svg"
            alt="whatsApp"
            className="cursor-pointer w-[56px] h-[56px]  md:w-[96px] md:h-[96px]"
          />
        </a> */}
        <Link
          href="https://api.whatsapp.com/send?phone=3158521478&text=Entre%20a%20la%20feria"
          target="_blank"
        >
          <a>
            <IconWhatsapp className="cursor-pointer w-[56px] h-[56px]  md:w-[96px] md:h-[96px] hover:translate-y-[-8px] transition-all duration-500" />
          </a>
        </Link>
      </div>

      {/* Modal Maps */}
      <ModalMaps maps={maps} setMaps={setMaps} />

      {/* Modal Calender */}
      <ModalCalender calender={calender} setCalender={setCalender} />

      {/* Modal Question  */}
      <ModalQuestion question={question} setQuestion={setQuestion} />
    </>
  )
}

// export async function getStaticProps({ locale }) {
//   const response = await import(`../lang/${locale}.json`)

//   return {
//     props: {
//       ModalCalendario: response.default.ModalCalendario,
//       ModalMapa: response.default.ModalMapa,
//       ModalQuestion: response.default.ModalQuestion
//     }
//   }
// }
