import { Link } from 'react-router-dom';
import SeoHead from '../seo/SeoHead';
import MobileBottomNav from '../components/MobileBottomNav';

const heroImg = 'https://lh3.googleusercontent.com/aida-public/AB6AXuBA0kADWi-i2TfVW4_GeQ_q4vbP7dQbQJdDj5421KydsrolbrSMSuHpkRATgZrBwh4tghxfIBp19mj6yoK5nFTrG7yFGirt3uSRNE9thIydgiwEuAb8Vl2uodOtDvFfrz9EaFJ5Wd1oL2iWPTfXWhpgNwtjTBK4iZOTg6tDuM_wbNylpQ9Vgs-H58is2_7cRHRvYXJHVb3FxjC_vWsVEejzUpyJ3meHiYIbd9Sn2BCvXlO6cxymO7EPP9Qgm6Z9ZF56DjwfoIRzqwU';
const bentoImg = 'https://lh3.googleusercontent.com/aida-public/AB6AXuDjxup4aZT4hYHKd_SOibJjjs-UE2AvQGd5bna4k9Q-NGgS2Q8rbtGRfzO3W7Tq8TkRIP-yvo0KG-tnvhMWhUMJZL1PAiqpTOmgDhCaHenwMlFBx0W0lQrjQsYjE3fTIp22_1JpeRw07y71H0D-emXI6AUGhKD4KjKTlPdBOyjFsPh-c4w6-qEGXaIe_FNz92JlFtUA247IHJH7QG3ZcPntEU1_BwUNIWl189wo90vEmKJ-yDaOSsJ-HlQLBy7YiExHeppimSyi3oE';
const gallery1 = 'https://lh3.googleusercontent.com/aida-public/AB6AXuBs5nN4S1OQi3-Q4tuVtbc1QzUZ6_nRHZxEe6z131SXPsEHu4oOA7vRIzca98RJyaL4Hwa8w7u5aUPt_1-jXKxr91R7GJu1hm8PNjreIbJ5v0ymhWU06HqBbGQAK0Bu2a7Tj8iaT6S8DVVPhvSs4CLpknGmqF6yumqsE9udE94TChNbK47PU6tyt6rVIenDG27iGWbnyCsVDdcCEHoG8irp5hGlAgAv5d34AHz2fO45SYfZP2PCoyVnn8wweW8XS1LclKiBESPBjiI';
const gallery2 = 'https://lh3.googleusercontent.com/aida-public/AB6AXuBtV8cHI_UScS5ItEcQyeOQsqVgWXW9rqKH15LwL9Ru8EN5mJQhlFPwYYL8hySt-QkZSGsTnEZzQrjx9Ia9x1DaeZ8r6E3Z24MY-aGHh3MB1K5IzC5oDrVzz0mrCSqtgtk2tVKNxlqMuw8sRnX6CLAQjVTNR8sqS_X5goVxAdl2FpyLlhUW9cBawgPluMC_fWLFpJ9cp5ZZZ2WcUKnOCPD91s7tW0Js0HcSKCmtGb3SePBUXvMtZ5on1AjUGXf52NlSmxR422bz34o';
const gallery3 = 'https://lh3.googleusercontent.com/aida-public/AB6AXuBeBkDdwiPu_zxagK5vMzw_wgFEnlLTleq66MZa8mO4ciKmwzJGJfs2J-orCtMA9Ft5pm7b9fjfH6JyxMTRA_t5DtrniH01HJmLelOjUZmLYcsSt1VkaJV1tIx2IjlFkfQYI7AKO32jaGiiPfo9nhTtsihtwQoz34NS7IjQ20K58ZxYCeasrU1nAtdA96SZYPffW_SvEe1n_Hf6YoyIk0o5XAC9206Exf2AMleoJLV9dQIyO257mQbvvTl3otro7-HvuYtbCtf6gws';
const gallery4 = 'https://lh3.googleusercontent.com/aida-public/AB6AXuD9q2njXDiHbP0CZR8xvYZToVvr9n3KVgXHy3Nro0jnjfgpYKSAeyz3G5BndjtgEqEgahqDM6BrMqXWE-Js6tAeKQnWyCe29At5IQCN-_FNznkzzSPtcAqI80LygKUK7eJ-vTxmFW0jkfPft2ccTODkEo8j7hZ9R9NGTzeRwBWPufaVTcerUmZu5GK5rMx0J9Ft6fMuz3YbIwtRnMOdmCYp-BZcnO2M5cKhJPvufKeJVvccEYBEzH-x-TLirFCsTVlAXBQzqKyJw4k';

function PivniTackyDetail() {
  return (
    <>
      <SeoHead page="pivni-tacky" />

      {/* Hero – editorial large title left, image right */}
      <section className="px-8 md:px-24 pt-32 mb-24 grid grid-cols-1 lg:grid-cols-12 gap-12 items-end">
        <div className="lg:col-span-7">
          <h1 className="text-6xl md:text-8xl font-extrabold tracking-tighter text-on-surface leading-[0.9] mb-8">
            Pivní <br /> tácky
          </h1>
          <p className="text-xl md:text-2xl text-on-surface-variant max-w-xl font-light leading-relaxed mb-12">
            Pivní tácky s potiskem z materiálů určených speciálně pro pivní tácky. Spojení funkční absorpce a precizního UV tisku.
          </p>
          <div className="flex gap-4">
            <span className="bg-surface-container-low px-4 py-2 text-xs font-bold uppercase tracking-widest text-primary">
              Prémiová lepenka
            </span>
            <span className="bg-surface-container-low px-4 py-2 text-xs font-bold uppercase tracking-widest text-primary">
              Vysoká savost
            </span>
          </div>
        </div>
        <div className="lg:col-span-5 aspect-[4/5] relative overflow-hidden bg-surface-container-high">
          <img
            className="w-full h-full object-cover"
            src={heroImg}
            alt="Pivní tácky s potiskem – prémiová absorpční lepenka s UV tiskem, eTiskarna"
          />
        </div>
      </section>

      {/* Bento – absorpce / tisk / foto */}
      <section className="bg-surface-container-low py-32 px-8 md:px-24">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-1 bg-surface-container-highest">

          <div className="bg-surface p-12 flex flex-col justify-between aspect-square">
            <div>
              <span
                className="material-symbols-outlined text-primary text-4xl mb-6 block"
                style={{ fontVariationSettings: "'FILL' 0" }}
              >
                opacity
              </span>
              <h3 className="text-2xl font-bold tracking-tight mb-4 uppercase">Absorpční síla</h3>
              <p className="text-on-surface-variant font-light leading-relaxed">
                Používáme certifikovanou pivní lepenku o gramáži 580&nbsp;g/m², která garantuje maximální nasákavost a tvarovou stálost i při opakovaném použití.
              </p>
            </div>
            <div className="text-primary font-bold text-sm tracking-widest uppercase">
              Technologie: Absorpční jádro
            </div>
          </div>

          <div className="bg-surface p-12 flex flex-col justify-between aspect-square">
            <div>
              <span
                className="material-symbols-outlined text-primary text-4xl mb-6 block"
                style={{ fontVariationSettings: "'FILL' 0" }}
              >
                brush
              </span>
              <h3 className="text-2xl font-bold tracking-tight mb-4 uppercase">High Quality UV Print</h3>
              <p className="text-on-surface-variant font-light leading-relaxed">
                Naše technologie UV tisku zajišťuje živé barvy a ostrost detailů, které jsou odolné proti vlhkosti a mechanickému otěru.
              </p>
            </div>
            <div className="text-primary font-bold text-sm tracking-widest uppercase">
              Tisk: CMYK + UV lak
            </div>
          </div>

          <div className="bg-surface p-0 aspect-square overflow-hidden group">
            <img
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              src={bentoImg}
              alt="Pohled shora na sklenici piva na vlastním tištěném pivním tácku"
            />
          </div>

        </div>
      </section>

      {/* Configurator + Form */}
      <section className="py-32 px-8 md:px-24 grid grid-cols-1 lg:grid-cols-12 gap-24">

        {/* Left: sticky specs */}
        <div className="lg:col-span-5">
          <div className="sticky top-32">
            <h2 className="text-4xl font-bold tracking-tighter uppercase mb-8">Poptávkový formulář</h2>
            <p className="text-on-surface-variant mb-12 font-light">
              Každý projekt je unikátní. Vyplňte parametry a my vám připravíme kalkulaci na míru do 24 hodin.
            </p>
            <div className="space-y-8">
              {[
                {
                  num: '01',
                  title: 'Tvar a Rozměr',
                  text: 'Kruh Ø 107 mm nebo čtverec 93×93 mm se zaoblenými rohy.',
                },
                {
                  num: '02',
                  title: 'Materiál',
                  text: 'Tradiční švédská lepenka Beermat 1,5 mm / 580 g.',
                },
                {
                  num: '03',
                  title: 'Množství',
                  text: 'Realizujeme zakázky od 100 ks až po desetitisíce.',
                },
              ].map(({ num, title, text }) => (
                <div key={num} className="flex items-center gap-6">
                  <span className="text-5xl font-extralight text-primary-fixed-dim">{num}</span>
                  <div>
                    <h4 className="font-bold uppercase tracking-widest text-xs mb-1 text-primary">{title}</h4>
                    <p className="text-sm">{text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Right: form */}
        <div className="lg:col-span-7 bg-surface-container-low p-12">
          <div className="space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-2">
                <label className="text-[10px] font-bold uppercase tracking-widest text-outline block">
                  Jméno a příjmení
                </label>
                <input
                  className="w-full bg-transparent border-b border-outline-variant focus:border-primary focus:ring-0 transition-colors py-2 outline-none text-sm"
                  type="text"
                />
              </div>
              <div className="space-y-2">
                <label className="text-[10px] font-bold uppercase tracking-widest text-outline block">
                  E-mail
                </label>
                <input
                  className="w-full bg-transparent border-b border-outline-variant focus:border-primary focus:ring-0 transition-colors py-2 outline-none text-sm"
                  type="email"
                />
              </div>
            </div>

            {/* Shape selector */}
            <div className="space-y-4">
              <label className="text-[10px] font-bold uppercase tracking-widest text-outline block">
                Vyberte tvar
              </label>
              <div className="grid grid-cols-2 gap-4">
                <button
                  className="border border-primary bg-primary/5 p-6 flex flex-col items-center gap-4 hover:bg-primary/10 transition-colors"
                  type="button"
                >
                  <span
                    className="material-symbols-outlined text-4xl"
                    style={{ fontVariationSettings: "'FILL' 0" }}
                  >
                    circle
                  </span>
                  <span className="text-xs font-bold uppercase tracking-widest">Kulatý</span>
                </button>
                <button
                  className="border border-outline-variant p-6 flex flex-col items-center gap-4 hover:bg-surface-container-highest transition-colors"
                  type="button"
                >
                  <span
                    className="material-symbols-outlined text-4xl"
                    style={{ fontVariationSettings: "'FILL' 0" }}
                  >
                    square
                  </span>
                  <span className="text-xs font-bold uppercase tracking-widest">Čtvercový</span>
                </button>
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-[10px] font-bold uppercase tracking-widest text-outline block">
                Požadovaný počet (ks)
              </label>
              <input
                className="w-full bg-transparent border-b border-outline-variant focus:border-primary focus:ring-0 transition-colors py-2 outline-none text-sm"
                placeholder="např. 500"
                type="number"
              />
            </div>

            <div className="space-y-2">
              <label className="text-[10px] font-bold uppercase tracking-widest text-outline block">
                Zpráva / Specifikace
              </label>
              <textarea
                className="w-full bg-transparent border-b border-outline-variant focus:border-primary focus:ring-0 transition-colors py-2 outline-none resize-none text-sm"
                rows="4"
              />
            </div>

            <Link
              to="/poptavka"
              className="block w-full precision-gradient text-white font-bold uppercase text-sm py-5 tracking-[0.2em] text-center active:scale-[0.98] transition-transform"
            >
              Odeslat nezávaznou poptávku
            </Link>
          </div>
        </div>
      </section>

      {/* Gallery grid */}
      <section className="mb-32">
        <div className="px-8 md:px-24 mb-12 flex justify-between items-end">
          <h2 className="text-3xl font-bold tracking-tight uppercase">Inspirace &amp; realizace</h2>
          <Link
            to="/poptavka"
            className="text-primary font-bold uppercase text-[11px] tracking-widest border-b-2 border-primary pb-1"
          >
            Zobrazit vše
          </Link>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-1 bg-surface-container-highest border-y border-surface-container-highest">
          {[
            { src: gallery1, alt: 'Kolekce barevných pivních tácků rozložených na dřevěném stole – makro fotografie' },
            { src: gallery2, alt: 'Detail absorpce inkoustu do silného bílého papíru – textura a preciznost tisku' },
            { src: gallery3, alt: 'Moderní craft pivovar s brandovanými tácky na tmavém mramorovém pultu' },
            { src: gallery4, alt: 'Abstraktní grafický design pivního tácku s minimalistickými liniemi a kobaltově modrou' },
          ].map(({ src, alt }) => (
            <div key={alt} className="aspect-square bg-surface overflow-hidden">
              <img className="w-full h-full object-cover" src={src} alt={alt} />
            </div>
          ))}
        </div>
      </section>

      {/* SEO text block */}
      <section className="py-24 px-8 md:px-24">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-black tracking-tighter mb-10">
            Pivní tácky s potiskem na míru
          </h2>
          <div className="space-y-6 text-on-surface-variant leading-relaxed">
            <p>
              Pivní tácky jsou praktickým a viditelným reklamním nosičem pro pivovary, restaurace, hotely i firemní akce. V eTiskarna tiskneme tácky na tradiční švédskou absorpční lepenku Beermat o tloušťce 1,5 mm a gramáži 580 g/m², která garantuje maximální nasákavost a tvarovou stálost i při opakovaném použití.
            </p>
            <p>
              Tisk probíhá technologií UV CMYK, která zajišťuje živé barvy, ostrý detail a odolnost vůči vlhkosti a mechanickému otěru. Na výběr jsou dva standardní tvary — kruhový Ø 107 mm a čtvercový 93×93 mm se zaoblenými rohy. Realizujeme zakázky od 100 kusů až po desetitisíce.
            </p>
            <p>
              Příprava tiskových podkladů je u nás součástí služby — grafikem zkontrolujeme každý soubor před tiskem. Kalkulaci zašleme do 24 hodin, dodáváme po celé ČR i do zahraničí.
            </p>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 bg-surface-container-low px-8 md:px-24">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-black tracking-tighter mb-6">
            Máte konkrétní projekt?
          </h2>
          <p className="text-on-surface-variant text-lg mb-10 max-w-xl mx-auto">
            Popište nám vaši zakázku — tvar, náklad a grafiku. Náš specialista vás do 24 hodin kontaktuje s kalkulací na míru.
          </p>
          <Link
            to="/poptavka"
            className="precision-gradient text-white px-12 py-5 text-sm font-bold tracking-[0.2em] uppercase active:scale-95 transition-transform inline-block"
          >
            Poptávka pivních tácků
          </Link>
        </div>
      </section>
      <MobileBottomNav />
    </>
  );
}

export default PivniTackyDetail;
