const Footer = ({ toBottom }) => {
    const date = new Date()
    return(
        <div className={`${toBottom ? "text-center space-y-2" : "text-center space-y-2 absolute left-0 right-0 bottom-0"}`}>
            <p>Are you an educative content creator? Contact us on supremelabs69@gmail.com</p>
            <p>Created by Victor Omorogbe</p>
            <p>© {date.getFullYear()} Smart Africa all rights reserved</p>
        </div>
    )
}
export default Footer