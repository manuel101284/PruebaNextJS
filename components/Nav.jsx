import Link from "next/link"
import { Francois_One } from "@next/font/google"

const Francois = Francois_One({
    weight: "400",
    subsets: ["latin"],
    variable: '--mifont'
})

export default function Nav() {
    return (
        <>
            <nav className={Francois.className}>
                <Link href="/">Home</Link>
                <Link href="/about">About</Link>
                <Link href="/whoAreWe">Quiénes Somos</Link>
                <Link href="/people">Personas</Link>
            </nav>
        </>
    )
}
