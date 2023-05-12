import Card from "./card"

const cargarDatos = () => {
    return fetch("http://randomuser.me/api/?results=10", { next: { revalidate: 60 } })
        .then(res => res.json())
        .then(datos => datos.results)
}

export default async function page() {
    const datos = await cargarDatos()

    return (
        <>
            <div className="persons">
                {datos.map((value, index) =>
                    <Card key={index} value={value} />
                )}
            </div>
        </>
    )
}
