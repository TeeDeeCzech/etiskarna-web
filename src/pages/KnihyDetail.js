import { Link } from 'react-router-dom';
import SeoHead from '../seo/SeoHead';
import MobileBottomNav from '../components/MobileBottomNav';

const heroImg = 'https://lh3.googleusercontent.com/aida-public/AB6AXuCq9ylbyXvbVahywlUj6Gh5u_ZGqdf1Oj5-ifaiDrGwjX9VhIO40TyI2OL8dlOxB9jSG753goWND4osA52c8srN30Lfp7BeQOPGZJLy7ohA7brxl8jd3QM2C08idpy989R1oLnmsDKJTJrtOgAXHUKAtFrKIoLfWsUmgnB57-i6bSP5ehN2gQWjXxJvrguHZmed1cc4XUEuup_-KqFeTf_YyfOVxGkW9DUWHcxwBALMYLT2vHwZ5NVe2hVst68DzGTxYIjL_H_7HaA';
const materialImg = 'https://lh3.googleusercontent.com/aida-public/AB6AXuB1n5yiVq5toP2DivGZ-my6Mu8sH11qhIl-HgqgzyXR-OTvYrpGNHObrErGCS9sS51rojYIhSKdHqdoI83uMiFRxm0I5MbpJO6IhRtTdBANnpAIogYoGeNWU8PI7eYw9ARqraHfmgK3j7Bg_NfZL2H3-Lfr4iL_zxZqa-hdXuYFVeTXVdScw2nrv-4wgE5pSEPx0F_A9FAM-PKXU5Ay2y8oLviNyYkzzSy3PLD5Y1baJQ5fYIwpiKCDyD1DBkI7E3j4V47o1f8K_5g';

function KnihyDetail() {
  return (
    <>
      <SeoHead page="knihy" />

      {/* Hero */}
      <section className="relative w-full overflow-hidden flex items-center px-8 md:px-24 pt-28 pb-16 md:pb-0 md:min-h-[819px]">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center max-w-7xl mx-auto w-full">
          <div className="z-10">
            <span className="section-label text-primary">Kategorie / Tiskoviny</span>
            <h1 className="text-6xl md:text-8xl font-extrabold tracking-tighter leading-[0.9] mb-8">
              Tisk knih<br />na míru
            </h1>
            <p className="text-lg md:text-xl text-on-surface-variant leading-relaxed max-w-md font-light mb-12">
              Prémiová výroba knih, která promění váš rukopis v hmatatelné dílo. Od limitovaných uměleckých edic po vysokonákladové komerční tisky — s vazbami V2, V4 i V8.
            </p>
            <div className="flex gap-4">
              <Link
                to="/poptavka"
                className="precision-gradient text-white px-8 py-4 text-sm font-bold uppercase tracking-widest hover:opacity-90 transition-opacity inline-block"
              >
                Odeslat poptávku
              </Link>
            </div>
          </div>
          <div className="relative aspect-[4/5] bg-surface-container-low">
            <img
              className="w-full h-full object-cover grayscale-[0.5] hover:grayscale-0 transition-all duration-1000 shadow-2xl"
              src={heroImg}
              alt="Tisk knih eTiskarna – prémiové knihy s tvrdými deskami na minimalistickém povrchu"
            />
            <div className="absolute -bottom-8 -left-8 bg-white p-8 hidden md:block">
              <p className="text-4xl font-black text-primary">PUR</p>
              <p className="text-xs uppercase tracking-widest font-bold opacity-60">Superior Glue Technology</p>
            </div>
          </div>
        </div>
      </section>

      {/* Binding Options */}
      <section className="px-8 md:px-24 py-32 max-w-7xl mx-auto">
        <div className="mb-16">
          <h2 className="text-3xl font-bold tracking-tight mb-2">Technická dokonalost.</h2>
          <p className="text-on-surface-variant">Tři standardy vazby, jedna úroveň kvality.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* V8 */}
          <div className="bg-surface-container-low p-12 flex flex-col justify-between">
            <div>
              <span
                className="material-symbols-outlined text-primary text-4xl mb-6 block"
                style={{ fontVariationSettings: "'FILL' 0" }}
              >
                menu_book
              </span>
              <h3 className="text-2xl font-bold mb-4 uppercase">V8 Tvrdé desky</h3>
              <p className="text-sm text-on-surface-variant leading-relaxed font-light">
                Vrchol knihvazačství. Šitý knižní blok s pevnými kartonovými deskami — maximální odolnost a prémiový pocit pro sběratelské a umělecké edice.
              </p>
            </div>
            <div className="mt-8 pt-8 border-t border-outline-variant/30">
              <span className="text-xs font-bold uppercase tracking-widest text-primary">Ideální pro umělecké knihy</span>
            </div>
          </div>
          {/* V4 */}
          <div className="bg-surface-container-highest p-12 flex flex-col justify-between">
            <div>
              <span
                className="material-symbols-outlined text-primary text-4xl mb-6 block"
                style={{ fontVariationSettings: "'FILL' 0" }}
              >
                auto_stories
              </span>
              <h3 className="text-2xl font-bold mb-4 uppercase">V4 Měkká vazba</h3>
              <p className="text-sm text-on-surface-variant leading-relaxed font-light">
                Šitá měkká vazba. Vyšší flexibilita a životnost oproti lepené vazbě — ideální pro prestižní softcoverové publikace a literární tituly.
              </p>
            </div>
            <div className="mt-8 pt-8 border-t border-outline-variant/30">
              <span className="text-xs font-bold uppercase tracking-widest text-primary">Ideální pro literaturu</span>
            </div>
          </div>
          {/* V2 */}
          <div className="bg-surface-container-low p-12 flex flex-col justify-between">
            <div>
              <span
                className="material-symbols-outlined text-primary text-4xl mb-6 block"
                style={{ fontVariationSettings: "'FILL' 0" }}
              >
                book
              </span>
              <h3 className="text-2xl font-bold mb-4 uppercase">V2 PUR lepená</h3>
              <p className="text-sm text-on-surface-variant leading-relaxed font-light">
                Výkonná lepená vazba s PUR lepidlem. Ekonomická volba bez kompromisů na pevnosti hřbetu — vynikající pro katalogy a firemní publikace.
              </p>
            </div>
            <div className="mt-8 pt-8 border-t border-outline-variant/30">
              <span className="text-xs font-bold uppercase tracking-widest text-primary">Ideální pro katalogy</span>
            </div>
          </div>
        </div>
      </section>

      {/* Material Showcase */}
      <section className="bg-surface-container-low py-32 px-8 md:px-24">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-24 items-center">
          <div className="order-2 md:order-1">
            <img
              className="w-full h-[500px] object-cover shadow-2xl"
              src={materialImg}
              alt="Makro detail vysoce kvalitního tisku na texturovaném papíře – sytost barev a ostrý text"
            />
          </div>
          <div className="order-1 md:order-2">
            <h2 className="text-4xl font-bold tracking-tighter mb-8 uppercase">Alchymie tisku.</h2>
            <div className="space-y-12">
              <div className="flex gap-6">
                <span className="text-primary font-black text-xl shrink-0">01</span>
                <div>
                  <h4 className="font-bold uppercase text-sm tracking-widest mb-2">Černobílý nebo barevný tisk</h4>
                  <p className="text-on-surface-variant text-sm leading-relaxed font-light">
                    Precizní CMYK kalibrace pro živé reprodukce uměleckých děl nebo hluboké černé pro ostrý text a klasické fotografie.
                  </p>
                </div>
              </div>
              <div className="flex gap-6">
                <span className="text-primary font-black text-xl shrink-0">02</span>
                <div>
                  <h4 className="font-bold uppercase text-sm tracking-widest mb-2">PUR lepidlo</h4>
                  <p className="text-on-surface-variant text-sm leading-relaxed font-light">
                    Využíváme polyuretanová reaktivní lepidla pro nerozebíratelné spoje, které zůstávají flexibilní v průběhu času i při teplotních změnách.
                  </p>
                </div>
              </div>
              <div className="flex gap-6">
                <span className="text-primary font-black text-xl shrink-0">03</span>
                <div>
                  <h4 className="font-bold uppercase text-sm tracking-widest mb-2">Výběr papíru</h4>
                  <p className="text-on-surface-variant text-sm leading-relaxed font-light">
                    Od FSC certifikovaných nenatíraných papírů po těžké prémiové křídové papíry — hledáme ideální základ pro váš obsah.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Configurator */}
      <section className="px-8 md:px-24 my-32">
        <div className="bg-white/80 backdrop-blur-xl p-12 grid grid-cols-1 md:grid-cols-4 gap-8 shadow-2xl border border-surface-variant">
          <div className="md:col-span-3">
            <h2 className="text-xs font-black tracking-widest uppercase mb-8">
              Konfigurátor rychlé poptávky
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div>
                <label className="block text-[10px] uppercase tracking-tighter text-on-surface-variant mb-2">
                  Typ vazby
                </label>
                <select className="w-full bg-surface-container-low border-0 text-sm font-bold p-4 focus:ring-2 focus:ring-primary">
                  <option>V8 Tvrdé desky</option>
                  <option>V4 Měkká vazba (šitá)</option>
                  <option>V2 Měkká vazba (PUR)</option>
                </select>
              </div>
              <div>
                <label className="block text-[10px] uppercase tracking-tighter text-on-surface-variant mb-2">
                  Typ tisku
                </label>
                <select className="w-full bg-surface-container-low border-0 text-sm font-bold p-4 focus:ring-2 focus:ring-primary">
                  <option>Plnobarevný (CMYK)</option>
                  <option>Černobílý</option>
                  <option>Kombinovaný</option>
                </select>
              </div>
              <div>
                <label className="block text-[10px] uppercase tracking-tighter text-on-surface-variant mb-2">
                  Náklad (ks)
                </label>
                <input
                  type="number"
                  defaultValue="100"
                  className="w-full bg-surface-container-low border-0 text-sm font-bold p-4 focus:ring-2 focus:ring-primary"
                />
              </div>
            </div>
          </div>
          <div className="bg-primary p-8 flex flex-col justify-between items-start text-white">
            <span className="text-[10px] uppercase tracking-widest font-bold">
              Poptejte tento produkt
            </span>
            <p className="text-sm font-light opacity-80 my-4">
              Nastavte parametry a pošlete nám poptávku — ozveme se s kalkulací do 24 hodin.
            </p>
            <Link
              to="/poptavka"
              className="bg-white text-primary px-6 py-3 text-xs font-black uppercase tracking-widest hover:bg-surface-container-low transition-colors"
            >
              Odeslat poptávku
            </Link>
          </div>
        </div>
      </section>

      {/* SEO text block */}
      <section className="py-24 px-8 md:px-24">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-black tracking-tighter mb-10">
            Tisk knih na míru
          </h2>
          <div className="space-y-6 text-on-surface-variant leading-relaxed">
            <p>
              Kniha je nejtrvalejší formou prezentace myšlenek, portfolia nebo firemní identity. V eTiskarna tiskneme knihy na míru — od malých limitovaných sérií po velkonákladové komerční publikace.
            </p>
            <p>
              Nabízíme tři typy vazby: V8 s tvrdými deskami a šitým blokem pro sběratelské edice, V4 s šitou měkkou vazbou pro literární tituly a V2 s PUR lepidlem pro katalogy a firemní publikace. Vnitřek tiskneme plnobarevně v CMYK i černobíle, na FSC certifikovaných nenatíraných nebo prémiových křídových papírech.
            </p>
            <p>
              Povrch desek lze doplnit matnou nebo lesklou laminací, parciálním UV lakem, slepotiskem nebo zlatou ražbou. Pomůžeme vám s výběrem ideálního řešení pro váš projekt.
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
            Popište nám váš projekt — typ vazby, počet stran, náklad a povrchové úpravy. Náš specialista vás do 24 hodin kontaktuje s kalkulací na míru.
          </p>
          <Link
            to="/poptavka"
            className="precision-gradient text-white px-12 py-5 text-sm font-bold tracking-[0.2em] uppercase active:scale-95 transition-transform inline-block"
          >
            Poptávka tisku knih
          </Link>
        </div>
      </section>
      <MobileBottomNav />
    </>
  );
}

export default KnihyDetail;
