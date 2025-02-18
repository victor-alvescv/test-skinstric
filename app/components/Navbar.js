import Link from "next/link"

function Navbar() {
    return (
        <nav>
            <div className="flex justify-center "> 
                <Link href="/">
                    SKINSTRIC
                </Link>
            </div>
        </nav>
    )
}

export default Navbar