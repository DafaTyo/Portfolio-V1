const SocialList = (props) => {
    const {children, name, value} = props
    return (
        <div className="flex justify-between items-center text-gray-500">
            <div className="flex items-center text-sm gap-2">{children} {name} </div>
            <div className="text-sm">{value}</div>
        </div>
    )
}

export default SocialList