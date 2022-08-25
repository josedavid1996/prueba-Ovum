import React, { useEffect, useState } from 'react'
import { Entity, Scene } from '@belivvr/aframe-react'
import images from '../../../assets/data.json'
import { PagineTemplate } from '../../../components/PagineTemplate'

const isServer = () => typeof window === 'undefined'
const Patrociandor = (props) => {
  // console.log(data)
  const [appRendered, setAppRendered] = useState(false)
  const [sky, setSky] = useState('0 0 0')
  const data = props.data

  useEffect(() => {
    if (!isServer()) {
      require('aframe')
      setAppRendered(true)
    }
  }, [])

  useEffect(() => {
    if (window.screen.availWidth <= 360) {
      setSky('0 0 -300')
    }
  }, [])

  return (
    <>
      <div>
        {appRendered && (
          <Scene>
            <a-sky
              src={`/image/360/${data}.jpg`}
              rotation="0 -90 0"
              position={sky}
            ></a-sky>
            {/* <a-entity cursor="rayOrigin:mouse"></a-entity> */}
          </Scene>
        )}
      </div>
      <PagineTemplate idioma={props} />
    </>
  )
}

export async function getStaticPaths() {
  try {
    const data = images.data
    const paths = data.map(({ image }) => ({
      params: { slug: `${image}` }
    }))
    return {
      paths,
      fallback: false
    }
  } catch (error) {
    console.log(error)
  }
}
export async function getStaticProps({ params, locale }) {
  const response = await import(`../../../lang/${locale}.json`)
  try {
    const data = params.slug
    // const data = await res.json()
    return {
      props: {
        data,
        ModalCalendario: response.ModalCalendario,
        ModalMapa: response.ModalMapa,
        ModalQuestion: response.ModalQuestion,
        Template: response.default.Template,
        HeaderIdiomas: response.default.HeaderIdiomas
      }
    }
  } catch (error) {
    console.log(error)
  }
}

export default Patrociandor
