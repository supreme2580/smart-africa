import Image from "next/image"
import Link from "next/link"

const Thumbnail = ({ key, thumbnail, title, description, given, completed, reward }) => {
    return(
        <div className="group cursor-pointer p-2 transition duration-200 ease-in transform sm:hover:scale-105 hover:z-50">
            <Link href="/">
                <a>
                    <Image layout="responsive" src={thumbnail} height={1080} width={1920} />
                    <div className="p-2 space-y-1">
                        <h2 className="text-2xl text-white transition-all duration-100 ease-in-out group-hover:font-bold">{title}</h2>
                        <p className="truncate max-w-md">{description}</p>
                        <div className="flex space-x-1 items-center">
                            <div>
                                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M12 8v13m0-13V6a2 2 0 112 2h-2zm0 0V5.5A2.5 2.5 0 109.5 8H12zm-7 4h14M5 12a2 2 0 110-4h14a2 2 0 110 4M5 12v7a2 2 0 002 2h10a2 2 0 002-2v-7" />
                                </svg>
                            </div>
                            <p>{given} rewards given</p>
                        </div>
                        <button className="w-full bg-green-500 text-white p-2.5 rounded-lg font-semibold">Take the test (
                            {completed ? "Test taken" : reward}
                        )</button>
                    </div>
                </a>
            </Link>
        </div>
    )
}
export default Thumbnail