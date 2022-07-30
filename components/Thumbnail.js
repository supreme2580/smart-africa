import Image from "next/image"
import Link from "next/link"
import React from "react"

const Thumbnail = React.forwardRef(({ key, thumbnail, title, description, given, completed, reward, url }, ref) => {
    return(
        <div className="group cursor-pointer p-2 transition duration-200 ease-in transform sm:hover:scale-105 hover:z-50">
            <div>
                    <Image layout="responsive" src={thumbnail} height={1080} width={1920} />
                    <div className="p-2 space-y-1">
                        <h2 className="text-2xl text-white transition-all duration-100 ease-in-out group-hover:font-bold">{title}</h2>
                        <p className="truncate max-w-md">{description}</p>
                        <div className="flex flex-col sm:flex-row justify-between">
                            <div className="flex space-x-1 items-center">
                                <div>
                                    <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M12 8v13m0-13V6a2 2 0 112 2h-2zm0 0V5.5A2.5 2.5 0 109.5 8H12zm-7 4h14M5 12a2 2 0 110-4h14a2 2 0 110 4M5 12v7a2 2 0 002 2h10a2 2 0 002-2v-7" />
                                    </svg>
                                </div>
                                <div>
                                    <p>{given} rewards given</p>
                                </div>
                            </div>
                            <div className="flex space-x-1 items-center">
                                <div>
                                    <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                                    </svg>
                                </div>
                                <Link href={url}><a target="_blank" className="hover:underline underline-offset-2">Read the article here</a></Link>
                            </div>
                        </div>
                        <button className="w-full bg-green-500 text-white p-2.5 rounded-lg font-semibold">Take the test (
                            {completed ? "Test taken" : reward}
                        )</button>
                    </div>
            </div>
        </div>
    )
})
export default Thumbnail