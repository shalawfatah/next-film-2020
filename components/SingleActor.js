import React from 'react'
import Image from 'next/image'
import Link from 'next/link'


const SingleActor = ({image, name, film, role, linkActor, linkFilm}) => {
    return (
        <div className="p-4 md:w-1/4 flex-wrap justify-center mx-auto">
                <div className="flex justify-center">
                <Image className="lg:h-48 md:h-36 lg:w-48 md:w-36 rounded-full justify-center" width="200" height="200" src={image} alt="blog" />
                </div>
                <Link href={linkActor} >
                <a target="_blank" className="title-font text-lg font-medium mb-3 text-center font-choice font-black text-indigo-400 w-full flex justify-center  pb-1 px-2 text-white rounded hover:text-indigo-700 transition duration-300 ease-in-out">ئەکتەر: {name}</a>
                </Link>
                <Link href={linkFilm} >
                <a target="_blank" className="bg-gray-600 text-white inline-flex items-center md:mb-2 lg:mb-0 font-choice px-4 rounded-md pb-1 w-full justify-center hover:bg-gray-800 transition duration-300 ease-in-out">فیلم: {film}</a>
                </Link>
                <h2 className="tracking-widest title-font font-medium mb-1 text-gray-400 font-bold text-center text-md font-choice ">رۆڵ: {role}</h2>

        </div>
    )
}

export default SingleActor
