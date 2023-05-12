'use client'

import Image from "next/image"
import ButtonInfo from "./buttonInfo"

const cargador = ({ src, width, height }) => {
    return `${src}?w=${width}h=${height}`
}

export default function card({ value }) {
    return (
        <>
            <div className="person">
                <h3>{value.name.first}</h3>
                <Image
                    loader={cargador}
                    src={value.picture.large}
                    width={125}
                    height={125}
                    alt=""
                />
                <div>
                    <ButtonInfo value={value}/>
                </div>
            </div>
        </>
    )
}
