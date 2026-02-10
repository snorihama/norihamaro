import Image from "next/image"
import Link from "next/link"
export const Home = () => {
    return (
        <div>
            {/* nav bar */}
            <div className="h-10 w-full flex flex-row items-center p-2">
                <Image className="ml-2 h-full w-fit" src="/header.png" alt="mapo.tofu" height={490} width={3850} />
                <Link href="/join-us" className="ml-auto mr-4 self-center text-beige text-lg">Join Us</Link>
            </div>
        </div>
    )
}