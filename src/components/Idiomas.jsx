import React from 'react'
import { useRouter } from 'next/router'
const Idiomas = ({ idiomas }) => {
  const router = useRouter()
  const cambiarIdioma = (idioma) => {
    // i18next.changeLanguage(idioma)
    router.push(router.pathname, router.pathname, {
      locale: idioma
    })
  }
  return (
    <div className="flex items-center mr-4">
      <ul className="inline-flex text-sm relative z-70 font-normal gap-x-1  p-2 text-white">
        <li
          className="cursor-pointer hover:-translate-y-1 transform transition-all duration-300 text-white"
          onClick={() => cambiarIdioma('es-pe')}
        >
          {idiomas.HeaderIdiomas.value1}
        </li>
        <li>-</li>
        <li
          className="cursor-pointer hover:-translate-y-1 transform transition-all duration-300 text-white"
          onClick={() => cambiarIdioma('en-US')}
        >
          {idiomas.HeaderIdiomas.value2}
        </li>
        <li>-</li>
        <li
          className="cursor-pointer hover:-translate-y-1 transform transition-all duration-300 text-white"
          onClick={() => cambiarIdioma('pt-br')}
        >
          {idiomas.HeaderIdiomas.value3}
        </li>
      </ul>
    </div>
  )
}

export default Idiomas
