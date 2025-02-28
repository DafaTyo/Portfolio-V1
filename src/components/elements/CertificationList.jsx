const CertificationList = (props) => {
    const {children, skills, img} = props

    return (
        <div className="bg-white rounded-lg flex p-8 shadow-lg">
            <div className="w-24 h-24 mask mask-squircle flex items-center">
                <img src={`./image/${img}`} alt={children} />
            </div>
            <div>
                <h1 className="px-4 font-semibold text-gray-600">{children}</h1>
                <div className="flex flex-wrap mt-2 ms-3 gap-2">
                    {skills.map((skill) => (
                        <div className="bg-gray-300 rounded-full px-2.5 p-0.5 opacity-60 text-sm">{skill}</div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default CertificationList