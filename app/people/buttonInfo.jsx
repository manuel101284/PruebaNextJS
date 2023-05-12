'use client'

import buttonCss from "./buttonInfo.css"

export default function buttonInfo({ value }) {
    const moreInfo = () => {
        alert(`El apellido de ${value.name.first}} es ${value.name.last}`)
    }

    return (
        <>
            <button className={buttonCss} onClick={moreInfo}>Más Info</button>
        </>
    )
}
