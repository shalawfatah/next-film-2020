import React from 'react'
import Navigation from '../components/Navigation'
import Header from '../components/Header'
import SingleActor from '../components/SingleActor'

const actors = () => {
    return (
        <div class="container px-5 pb-24 mx-auto">
            <Navigation />
            <Header heading="باشترین ئەکتەرەکانی ٢٠٢٠" subheading="لیستی ئەو ئەکتەرانەی جوانترین رۆڵیان گێڕاوە لەمساڵدا" />
            <div className="flex flex-wrap">
            <SingleActor image="/diane.jpg" name="دایان لەین" film="لەبیریکە" role="لاوەکی" linkActor="https://www.imdb.com/name/nm0000178/?ref_=nv_sr_srsg_0" linkFilm="https://www.imdb.com/title/tt9340860/?ref_=nm_flmg_act_3" />
            <SingleActor image="/daniel.jpg" name="دانیاڵ دیمەر" film="سەرتوێژەکەی" role="لاوەکی" linkActor="https://www.imdb.com/name/nm8159701/?ref_=tt_cl_t2" linkFilm="https://www.imdb.com/title/tt9683478/?ref_=nv_sr_srsg_0" />
            <SingleActor image="/julia.jpg" name="جولیا گارنەر" film="یاریدەدەر" role="سەرەکی" linkActor="https://www.imdb.com/name/nm3400186/?ref_=tt_cl_t1" linkFilm="https://www.imdb.com/title/tt9000224/?ref_=nv_sr_srsg_0" />
            <SingleActor image="/mads.jpg" name="مادس میکڵسن" film="سەرێ بڕۆین" role="سەرەکی" linkActor="https://www.imdb.com/name/nm0586568/?ref_=tt_cl_t1" linkFilm="https://www.imdb.com/title/tt10288566/?ref_=nv_sr_srsg_0" />
            </div>

        </div>
    )
}

export default actors
