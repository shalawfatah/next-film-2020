import Head from 'next/head'
import styles from '../styles/Home.module.css'
import SingleFilm from '../components/SingleFilm'
import Navigation from '../components/Navigation'
import Header from '../components/Header'
import Text from '../components/Texts'


export default function Home() {
  return (
    <div class="container px-5 pb-24 mx-auto">
      <Head>
      <title>فیلمۆگرافی</title>
      </Head>
      <Navigation />
      <Header heading="باشترین فیلمەکانی ٢٠٢٠" subheading="لەنێو لیستی فیلمەکانی ئەمساڵدا ئەم فیلمانە سەرنجڕاکێش بوون" />
      <div className="flex flex-wrap justify-center cursor-pointer">
      <SingleFilm image="/nrsa-poster.jpg" genre="ئێلیزا هیتمان" rank="باشترین دراما" titleEnglish="Never, Rarely, Sometimes, Always" title="هەرگیز، کەمجار، هەندێکجار، هەمیشە" summary={Text.nrsa} linkbest="https://www.imdb.com/title/tt7772582/" />
      <SingleFilm image="/half-of-it.jpg" genre="ئالیس وو" rank="باشترین کۆمیدی" title="سەرتوێژەکەی" titleEnglish="The Half Of It" summary={Text.thot} linkbest="https://www.imdb.com/title/tt9683478/?ref_=nv_sr_srsg_0" />
      <SingleFilm image="/anotherround.jpg" genre="تۆماس ڤینتەربێرگ" rank="باشترین بەگشتی" title="سەرێ بڕۆین" titleEnglish="Another Round" summary={Text.another} linkbest="https://www.imdb.com/title/tt10288566/?ref_=nv_sr_srsg_0" />
      <SingleFilm image="/sputnik.webp" genre="ئیگۆر ئابرامینکۆ" rank="باشترین ترسناك" title="سپەتنیك" titleEnglish="Sputnik" summary={Text.sputnik} linkbest="https://www.imdb.com/title/tt11905962/?ref_=nv_sr_srsg_0" />
      <SingleFilm image="/badedu.jpg" genre="کۆری فینلی" rank="باشترین بایۆگرافی" title="پەروەردەی خراپ" titleEnglish="Bad Education" summary={Text.badedu} linkbest="https://www.imdb.com/title/tt8206668/?ref_=nv_sr_srsg_0" />
      <SingleFilm image="/swallow.jpg" genre="کارلۆ میرابێلا-دەیڤس" rank="باشترین نهێنی ئامێز" title="قووتدان" titleEnglish="Swallow" summary={Text.swallow} linkbest="https://www.imdb.com/title/tt8372298/?ref_=nv_sr_srsg_3" />
      <SingleFilm image="/togo.jpg" genre="ئەریکسۆن کۆر" rank="باشترین سەرکێشی" title="تۆگۆ" titleEnglish="Togo" summary={Text.togo} linkbest="https://www.imdb.com/title/tt5116302/?ref_=nv_sr_srsg_0" />
      <SingleFilm image="/greyhound.jpg" genre="ئارۆن شنایدەر" rank="باشترین جەنگی" title="گرەیهاوند - تانجی" titleEnglish="Greyhound" summary={Text.greyhound} linkbest="https://www.imdb.com/title/tt6048922/?ref_=nv_sr_srsg_0" />
      <SingleFilm image="/wayback.jpg" genre="گاڤن ئۆکۆنۆر" rank="باشترین وەرزش" title="گەڕانەوە" titleEnglish="The Way Back" summary={Text.wayback} linkbest="https://www.imdb.com/title/tt8544498/?ref_=nv_sr_srsg_0" />
      <SingleFilm image="/cure.jpg" genre="ئەحمەد ئاتالای" rank="باشترین ئەکشن" title="چارەسەر" titleEnglish="The Cure" summary={Text.cure} linkbest="https://www.imdb.com/title/tt10763494/" />








      </div>
    </div>
  )
}
// image, genre, title, summary
