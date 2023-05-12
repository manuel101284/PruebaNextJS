//'use client'

import Image from 'next/image'
import imagen02 from "../public/images/imagen02.jpg"

/*const cargador = ({ src, width }) => {
    return `https://es.wikipedia.org/wiki/Canis_lupus#/media/Archivo:${src}?w=${width}`
}*/

export default function page() {
    return (
        <>
            <div>
                Página Principal
            </div>
            <div className="caja">
                <Image
                    src="/images/imagen01.jpg"
                    width={519}
                    height={345}
                />
            </div>
            <div className='caja'>
                <Image
                    src={imagen02}
                    width={519}
                    height={345}
                />
            </div>
            {/*<div className='caja'>
                <Image
                    loader={cargador}
                    src="Front_view_of_a_resting_Canis_lupus_ssp.jpg"
                    width={400}
                />
            </div>*/}

        </>
    )
}
