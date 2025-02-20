import Link from "next/link"

function Navbar() {
    return (
        <nav className="flex items-center justify-between top-0 z-3 py-8 px-9 ml-9 mr-9 w-full">
            <div className="flex items-center relative z-30 "> 
                <Link href="/" className="font-bold">
                    SKINSTRIC
                </Link>
                </div>
         </nav>
    )
}

export default Navbar