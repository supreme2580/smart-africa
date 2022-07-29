const Footer = () => {
    const date = new Date()
    return(
        <div className="text-center space-y-2">
            <p>Are you an educative content creator? Contact us on supremelabs69@gmail.com</p>
            <p>Created by Victor Omorogbe</p>
            <p>© {date.getFullYear()} Smart Africa all rights reserved</p>
        </div>
    )
}
export default Footer