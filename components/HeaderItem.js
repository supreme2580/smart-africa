const HeaderItem = ({ title, icon }) => {
    return(
        <div className="flex flex-col items-center cursor-pointer group hover:text-white w-12 sm:w-20">
            <div className="mb-1 group-hover:animate-bounce">{icon}</div>
            <p className="tracking-widest text-center opacity-0 group-hover:opacity-100">{title}</p>
        </div>
    )
}
export default HeaderItem