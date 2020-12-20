import React from 'react'
import Navigation from '../components/Navigation'
import Header from '../components/Header'
import Text from '../components/Texts'
import Image from 'next/image'
import Link from 'next/link'


const directors = () => {
    return (
        <div className="container px-5 pb-24 mx-auto">
            <Navigation />
            <Header heading="باشترین دەرهێنەرەکانی ٢٠٢٠" subheading="ئەم لیستە لەنێو زیاد لە ١٠٠ فیلمدا ئامادەکراوە" />
            <section className="text-gray-700 body-font">
            <div className="container px-5 py-10 mx-auto flex flex-wrap">
                <div className="flex relative pt-10 pb-20 sm:items-center md:w-2/3 mx-auto">
                <div className="h-full w-6 absolute inset-0 flex items-center justify-center">
                    <div className="h-full w-1 bg-gray-200 pointer-events-none"></div>
                </div>
                <div className="flex-shrink-0 w-6 h-6 rounded-full mt-10 sm:mt-0 inline-flex items-center justify-center bg-indigo-500 text-white relative z-10 title-font font-medium text-sm">١</div>
                <div className="flex-grow md:pl-8 pl-6 flex sm:items-center items-start flex-col sm:flex-row">
                    <div className="flex-shrink-0 w-24 h-24 bg-indigo-100 text-indigo-500 rounded-full inline-flex items-center justify-center">
                    <Image src="/vinterberg.jpg" width="200" height="200" className="rounded-full" />
                    </div>
                    <div className="flex-grow sm:pl-6 mt-6 sm:mt-0">
                    <Link href="https://www.imdb.com/name/nm0899121/">
                    <a target="_blank" className="font-medium title-font mb-1 text-xl font-choice bg-indigo-500 pb-1 px-2 text-white rounded hover:bg-indigo-700 transition duration-300 ease-in-out">تۆماس ڤینتەربێرگ</a>
                    </Link>
                    <p className="leading-relaxed font-choice">{Text.vinterberg}</p>
                    </div>
                </div>
                </div>
                <div className="flex relative pb-20 sm:items-center md:w-2/3 mx-auto">
                <div className="h-full w-6 absolute inset-0 flex items-center justify-center">
                    <div className="h-full w-1 bg-gray-200 pointer-events-none"></div>
                </div>
                <div className="flex-shrink-0 w-6 h-6 rounded-full mt-10 sm:mt-0 inline-flex items-center justify-center bg-indigo-500 text-white relative z-10 title-font font-medium text-sm">٢</div>
                <div className="flex-grow md:pl-8 pl-6 flex sm:items-center items-start flex-col sm:flex-row">
                    <div className="flex-shrink-0 w-24 h-24 bg-indigo-100 text-indigo-500 rounded-full inline-flex items-center justify-center">
                    <Image src="/alice.jpg" width="200" height="200" className="rounded-full" />
                    </div>
                    <div className="flex-grow sm:pl-6 mt-6 sm:mt-0">
                    <Link href="https://www.imdb.com/name/nm1226108/?ref_=nv_sr_srsg_0">
                    <a target="_blank" className="font-medium title-font mb-1 text-xl font-choice bg-indigo-500 pb-1 px-2 text-white rounded hover:bg-indigo-700 transition duration-300 ease-in-out">ئالیس وو</a>
                    </Link>
    <p className="leading-relaxed font-choice">{Text.alice}</p>
                    </div>
                </div>
                </div>
                <div className="flex relative pb-20 sm:items-center md:w-2/3 mx-auto">
                <div className="h-full w-6 absolute inset-0 flex items-center justify-center">
                    <div className="h-full w-1 bg-gray-200 pointer-events-none"></div>
                </div>
                <div className="flex-shrink-0 w-6 h-6 rounded-full mt-10 sm:mt-0 inline-flex items-center justify-center bg-indigo-500 text-white relative z-10 title-font font-medium text-sm">٣</div>
                <div className="flex-grow md:pl-8 pl-6 flex sm:items-center items-start flex-col sm:flex-row">
                    <div className="flex-shrink-0 w-24 h-24 bg-indigo-100 text-indigo-500 rounded-full inline-flex items-center justify-center">
                    <Image src="/eliza.jpg" width="200" height="200" className="rounded-full" />
                    </div>
                    <div className="flex-grow sm:pl-6 mt-6 sm:mt-0">
                    <Link href="https://www.imdb.com/name/nm2151374/?ref_=nv_sr_srsg_0">
                    <a target="_blank" className="font-medium title-font mb-1 text-xl font-choice bg-indigo-500 pb-1 px-2 text-white rounded hover:bg-indigo-700 transition duration-300 ease-in-out">ئێلیزا هیتمان</a>
                    </Link>
    <p className="leading-relaxed font-choice">{Text.elitza}</p>
                    </div>
                </div>
                </div>
                <div className="flex relative pb-10 sm:items-center md:w-2/3 mx-auto">
                <div className="h-full w-6 absolute inset-0 flex items-center justify-center">
                    <div className="h-full w-1 bg-gray-200 pointer-events-none"></div>
                </div>
                <div className="flex-shrink-0 w-6 h-6 rounded-full mt-10 sm:mt-0 inline-flex items-center justify-center bg-indigo-500 text-white relative z-10 title-font font-medium text-sm">٤</div>
                <div className="flex-grow md:pl-8 pl-6 flex sm:items-center items-start flex-col sm:flex-row">
                    <div className="flex-shrink-0 w-24 h-24 bg-indigo-100 text-indigo-500 rounded-full inline-flex items-center justify-center">
                    <Image src="/kitty.jpg" width="200" height="200" className="rounded-full" />
                    </div>
                    <div className="flex-grow sm:pl-6 mt-6 sm:mt-0">
                    <Link href="https://www.imdb.com/name/nm3317268/?ref_=nv_sr_srsg_0">
                    <a target="_blank" className="font-medium title-font mb-1 text-xl font-choice bg-indigo-500 pb-1 px-2 text-white rounded hover:bg-indigo-700 transition duration-300 ease-in-out">کیتی گریین</a>
                    </Link>
                    <p className="leading-relaxed font-choice">{Text.green}</p>
                    </div>
                </div>
                </div>
            </div>
            </section>
        </div>
    )
}

export default directors
