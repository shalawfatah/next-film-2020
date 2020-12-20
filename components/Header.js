import React from 'react'

const Header = ({heading, subheading}) => {
    return (
        <div className="text-center mb-10">
            <h1 className="font-black sm:text-6xl text-2xl font-medium text-center title-font text-indigo-500 mb-4 font-choice mb-10">{heading}</h1>
            <p className="rounded-md text-xl text-white pb-1 font-choice bg-gray-600 leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto">{subheading}</p>
        </div>
    )
}

export default Header
