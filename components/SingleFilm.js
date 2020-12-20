import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

const SingleFilm = ({image, genre, title, summary, rank, linkbest, titleEnglish}) => {
    return (
        <>
        <Link href={linkbest}>
        <a target="_blank" className="p-4 md:w-1/3 movie-card" target="_blank">
        <div className="h-full border-2 border-gray-200 rounded-lg overflow-hidden">
          <Image className="lg:h-48 md:h-36 w-full object-cover object-center" width="400" height="full" src={image} alt="blog" />
          <div className="p-6">
            <h2 className="tracking-widest title-font font-medium mb-1 text-gray-400 font-bold text-right text-md font-choice ">دەرهێنەر: {genre}</h2>
            <h1 className="title-font text-lg font-medium text-gray-900 mb-3 text-right font-choice font-black text-indigo-500">ناو: {title}</h1>
            <h1 className="title-font text-sm font-medium text-gray-400 mb-3 text-right font-choice font-black">{titleEnglish}</h1>
            <p className="leading-relaxed mb-3 text-right font-choice">{summary}</p>
            <div className="text-right">
              <p className="bg-indigo-400 text-white inline-flex items-center md:mb-2 lg:mb-0 text-right font-choice px-4 rounded-md pb-1">{rank}</p>
            </div>
          </div>
        </div>
      </a>
      </Link>
        </>
    )
}

export default SingleFilm
