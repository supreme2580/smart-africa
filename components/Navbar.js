import { useRouter } from "next/router"

const Navbar = ({key, title}) => {
    const router = useRouter()
    return(
        <nav className="relative">
            <div className="flex px-10 sm:px-20 text-2xl whitespace-nowrap space-x-10 sm:space-x-20 overflow-x-scroll scrollbar-hide">
                <h2 className="last:pr-24 cursor-pointer transition duration-100 transform hover:scale-125 hover:text-white active:text-green-500" onClick={
                    () => {router.push(`/?segment=${key}`)}
                }>Mathematics</h2>
                <h2 className="last:pr-24 cursor-pointer transition duration-100 transform hover:scale-125 hover:text-white active:text-green-500" onClick={
                    () => {router.push(`/?segment=${key}`)}
                }>Mathematics</h2>
                <h2 className="last:pr-24 cursor-pointer transition duration-100 transform hover:scale-125 hover:text-white active:text-green-500" onClick={
                    () => {router.push(`/?segment=${key}`)}
                }>Mathematics</h2>
                <h2 className="last:pr-24 cursor-pointer transition duration-100 transform hover:scale-125 hover:text-white active:text-green-500" onClick={
                    () => {router.push(`/?segment=${key}`)}
                }>Mathematics</h2>
                <h2 className="last:pr-24 cursor-pointer transition duration-100 transform hover:scale-125 hover:text-white active:text-green-500" onClick={
                    () => {router.push(`/?segment=${key}`)}
                }>Mathematics</h2>
                <h2 className="last:pr-24 cursor-pointer transition duration-100 transform hover:scale-125 hover:text-white active:text-green-500" onClick={
                    () => {router.push(`/?segment=${key}`)}
                }>Mathematics</h2>
                <h2 className="last:pr-24 cursor-pointer transition duration-100 transform hover:scale-125 hover:text-white active:text-green-500" onClick={
                    () => {router.push(`/?segment=${key}`)}
                }>Mathematics</h2>
                <h2 className="last:pr-24 cursor-pointer transition duration-100 transform hover:scale-125 hover:text-white active:text-green-500" onClick={
                    () => {router.push(`/?segment=${key}`)}
                }>Mathematics</h2>
                <h2 className="last:pr-24 cursor-pointer transition duration-100 transform hover:scale-125 hover:text-white active:text-green-500" onClick={
                    () => {router.push(`/?segment=${key}`)}
                }>Mathematics</h2>
                <h2 className="last:pr-24 cursor-pointer transition duration-100 transform hover:scale-125 hover:text-white active:text-green-500" onClick={
                    () => {router.push(`/?segment=${key}`)}
                }>Mathematics</h2>
            </div>
            <div className="absolute top-0 right-0 bg-gradient-to-l from-[#191919e2] h-10 w-1/12" />
        </nav>
    )
}
export default Navbar