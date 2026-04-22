import { Link } from 'react-router-dom';
import SeoHead from '../seo/SeoHead';
import MobileBottomNav from '../components/MobileBottomNav';

const heroImg = 'https://lh3.googleusercontent.com/aida-public/AB6AXuDn8X7lKxWEi_N6oTv9M4xur6cpBy_qJqtbHT0SPAHkS68jfBkMxKSvlxBx1GkCyt5sYvlQMKk1DcofcL_5MX3_sR1jl0hbb1YGywMQQTBFuxMwCK0VLjGqDfmV3DviviPyEJL4mY7xp1uZYeWBGHjXzop6U1OUsah9H-drLjx1K-nG2Z3_ktjU0ubLdIFhgEMWyNLYGn0Et2P-nP34gQ1t8BBajdz3XbjbahyFcdAbMFE-lGlCZbkfS_o-0tdx-8R4EMyh5xbordo';
const uvImg = 'https://lh3.googleusercontent.com/aida-public/AB6AXuCwtrmaHsL94NR5s41ZCor-d2_MVUksaacbaC8hC-McAvgNVx4SV-uqpLKffAg-Z6r-hkn6D36u1FSnmnsASwKOw_N25oep86jtlYTq11OrQrFBbALia7TbokWWgA9S3tsOXEJzRcEvtl28Pci0XZG2JI5bSw4lgsMFl_Bqd6UVpGUSP7zVolopmM9L4SVmvSLVV3of-BZUdDw8kYnMZ51al9sXseLIRG7AvyoMiffg_-c7yWetGI3nzHNvCDW5K7142voCV8sgQn0';
const galleryImg1 = 'https://lh3.googleusercontent.com/aida-public/AB6AXuAR29AVlfJRDf4f2oNWLvU-ChjVoVfSgG-Zs16cHDTiooWGsGpEL2UT6xPgP-wVepqtVfoP8aCs-yztYHqqDBiuNGMMWe8iXkVHRRJxZ1SXI45TVOpRucqvZx7l6hwOLv0dozIIyeKGPz8LVguBOPo6pPuqYqiv39T2G8ne9xPjTZOcTS4HJhu_hAICSPEpHt9rkVIrzegAzgAf1yMm19IkPwpnEzQ9ILr7tdr_nUz7csTXUcCt6KcngmVTgCahgv6UVFlA9zIIJ0k';
const galleryImg2 = 'https://lh3.googleusercontent.com/aida-public/AB6AXuACv0CouE6Bn6AR-PID1AOl93mr0DKNQvgYaF3pruK_D85CgD23m0Dv9jHN5LfU27a9b36uGJFHLXbTaJzoGIixfcmBOaEeIhZLwjStNaDmMZ_vqepoPG7DxoKUcMObfJs1ibiGR97uSy-mJappq-_VuQ55kbdutUxdWDUh2OU_a1YzM5SGUQfM-bljCmzd5f0eOc0bqSZyXOP5JLawTdfOsN_uzgKTA_eNs8EGC3i6YArn1YKuoQjpSMjg1eOZxv9xuK-fhuisPag';

function BanneryDetail() {
  return (
    <>
      <SeoHead page="bannery" />

      {/* Hero */}
      <section className="relative w-full overflow-hidden bg-surface-container-low flex items-center px-8 md:px-24 pt-28 pb-16 md:pb-0 md:h-[900px]">
        <div className="grid grid-cols-1 md:grid-cols-12 w-full items-center gap-12">
          <div className="md:col-span-5 z-10">
            <span className="section-label text-primary">Kategorie / Tiskoviny</span>
            <h1 className="text-6xl md:text-8xl font-extrabold tracking-tighter text-on-background leading-[0.9] mb-8">
              Tisk bannerů<br />na míru
            </h1>
            <p className="text-lg md:text-xl text-on-surface-variant leading-relaxed max-w-md font-light">
              UV tisk na plachtovinu s maximální odolností vůči počasí, větru i intenzivnímu slunečnímu záření. Bannery pro venkovní reklamu, eventy i fasády budov ve velkoplošném formátu.
            </p>
          </div>
          <div className="md:col-span-7 h-full w-full relative">
            <div className="absolute inset-0 bg-surface-container translate-x-8 translate-y-8 hidden md:block"></div>
            <img
              className="relative w-full h-[400px] md:h-[716px] object-cover grayscale-[0.5] hover:grayscale-0 transition-all duration-1000 shadow-2xl"
              src={heroImg}
              alt="Tisk bannerů eTiskarna – velkoformátový UV tisk na plachtovinu s kovovými oky"
            />
            <div className="absolute -bottom-12 -left-12 bg-white p-12 hidden md:block">
              <div className="flex flex-col gap-2">
                <span className="text-4xl font-bold text-primary">01.</span>
                <span className="text-xs tracking-widest uppercase font-black">Velkoplošný tisk</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Bento – Technical Specs */}
      <section className="py-32 px-8 md:px-24 bg-surface-container-low">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 md:grid-rows-2 gap-4">
          {/* UV Print – large tile */}
          <div className="md:col-span-2 md:row-span-2 bg-surface-container-lowest p-12 flex flex-col justify-between">
            <div>
              <span
                className="material-symbols-outlined text-primary text-4xl mb-6 block"
                style={{ fontVariationSettings: "'FILL' 1" }}
              >
                nest_sunblock
              </span>
              <h3 className="text-3xl font-extrabold tracking-tight mb-4">UV tisk – okamžité vytvrzení</h3>
              <p className="text-on-surface-variant leading-relaxed text-sm font-light">
                Pokročilá UV technologie vytvrzuje inkoust okamžitě, čímž vzniká škrábanuvzdorný povrch zachovávající přesnost barev až 5 let ve venkovních podmínkách. Tisk odolává dešti, mrazu i intenzivnímu UV záření.
              </p>
            </div>
            <img
              className="mt-12 w-full h-48 object-cover grayscale hover:grayscale-0 transition-all duration-500"
              src={uvImg}
              alt="UV tisková technologie – aplikace inkoustu s modrým UV světlem"
            />
          </div>

          {/* Weather-proof – primary tile */}
          <div className="md:col-span-2 bg-primary p-12 text-white">
            <h3 className="text-2xl font-bold tracking-tight mb-4">Odolnost za každého počasí</h3>
            <p className="text-on-primary-container opacity-90 mb-6 text-sm font-light leading-relaxed">
              Zesílené okraje a prémiová PVC plachtovina 510 g/m² zajistí, že vaše sdělení odolá silnému větru, dešti i UV záření bez ztráty kvality tisku.
            </p>
            <div className="flex gap-4 items-center">
              <span className="text-xs font-bold tracking-widest uppercase">Certifikace EN 13501-1</span>
              <div className="h-px flex-grow bg-white/20"></div>
            </div>
          </div>

          {/* Custom sizing */}
          <div className="bg-surface-container-highest p-8">
            <span
              className="material-symbols-outlined text-on-surface-variant mb-4 block"
              style={{ fontVariationSettings: "'FILL' 0" }}
            >
              square_foot
            </span>
            <h4 className="font-bold uppercase tracking-tighter text-sm mb-2">Zakázková velikost</h4>
            <p className="text-xs text-on-surface-variant font-light">Bezešvý tisk až do šířky 5 m a neomezené délky pro fasádní aplikace.</p>
          </div>

          {/* Eyelets */}
          <div className="bg-white p-8">
            <span
              className="material-symbols-outlined text-primary mb-4 block"
              style={{ fontVariationSettings: "'FILL' 0" }}
            >
              adjust
            </span>
            <h4 className="font-bold uppercase tracking-tighter text-sm mb-2">Precizní finishing</h4>
            <p className="text-xs text-on-surface-variant font-light">Nerezová kovová oka každých 50 cm pro dokonalé napnutí a uchycení banneru.</p>
          </div>
        </div>
      </section>

      {/* Gallery – Asymmetric rows */}
      <section className="py-32 px-8 md:px-24 overflow-hidden">
        <div className="max-w-7xl mx-auto flex flex-col gap-32">
          {/* Row 1 */}
          <div className="flex flex-col md:flex-row items-center gap-16">
            <div className="w-full md:w-1/2">
              <img
                className="w-full aspect-square object-cover"
                src={galleryImg1}
                alt="Makro detail UV tisku na mesh plachtovině – živé barvy a textura"
              />
            </div>
            <div className="w-full md:w-5/12">
              <h2 className="text-4xl font-extrabold tracking-tighter mb-6 leading-none">
                Sytost barev na architektonické úrovni.
              </h2>
              <p className="text-on-surface-variant leading-loose text-sm font-light">
                Netiskneme jen barvy — navrhujeme vizuální dopad. Náš 8barevný inkoustový systém pokrývá 98 % škály Pantone, takže vaše značka vypadá stejně ostře na 10metrovém banneru jako na vizitkách.
              </p>
            </div>
          </div>

          {/* Row 2 */}
          <div className="flex flex-col md:flex-row-reverse items-center gap-16">
            <div className="w-full md:w-1/2">
              <img
                className="w-full aspect-[4/5] object-cover"
                src={galleryImg2}
                alt="Velkoformátový mesh banner na fasádě budovy pod čistou oblohou"
              />
            </div>
            <div className="w-full md:w-5/12">
              <h2 className="text-4xl font-extrabold tracking-tighter mb-6 leading-none">
                Monumentální měřítko.
              </h2>
              <p className="text-on-surface-variant leading-loose text-sm font-light mb-8">
                Navrženo pro polepy budov a velkoměstskou reklamu. Mesh materiály umožňují průchod větru, čímž zabraňují trhání, přičemž zachovávají 85% neprůhlednost pro maximální viditelnost.
              </p>
              <ul className="space-y-4">
                <li className="flex items-center gap-4 text-sm font-bold uppercase tracking-tight">
                  <span className="w-8 h-[2px] bg-primary inline-block"></span>
                  Frontlit Standard 510 g/m²
                </li>
                <li className="flex items-center gap-4 text-sm font-bold uppercase tracking-tight opacity-50">
                  <span className="w-8 h-[2px] bg-outline-variant inline-block"></span>
                  Mesh Airmesh 270 g/m²
                </li>
                <li className="flex items-center gap-4 text-sm font-bold uppercase tracking-tight opacity-50">
                  <span className="w-8 h-[2px] bg-outline-variant inline-block"></span>
                  Blockout oboustranný 650 g/m²
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Configurator */}
      <section className="px-8 md:px-24 mb-32">
        <div className="bg-white/80 backdrop-blur-xl p-12 grid grid-cols-1 md:grid-cols-4 gap-8 shadow-2xl border border-surface-variant">
          <div className="md:col-span-3">
            <h2 className="text-xs font-black tracking-widest uppercase mb-8">
              Konfigurátor rychlé poptávky
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div>
                <label className="block text-[10px] uppercase tracking-tighter text-on-surface-variant mb-2">
                  Materiál
                </label>
                <select className="w-full bg-surface-container-low border-0 text-sm font-bold p-4 focus:ring-2 focus:ring-primary">
                  <option>Frontlit 510 g/m² Standard</option>
                  <option>Mesh Airmesh 270 g/m²</option>
                  <option>Blockout 650 g/m² Premium</option>
                  <option>Reflexní vinyl</option>
                </select>
              </div>
              <div>
                <label className="block text-[10px] uppercase tracking-tighter text-on-surface-variant mb-2">
                  Rozměry (š × v mm)
                </label>
                <input
                  type="text"
                  defaultValue="2000 × 1000"
                  className="w-full bg-surface-container-low border-0 text-sm font-bold p-4 focus:ring-2 focus:ring-primary"
                />
              </div>
              <div>
                <label className="block text-[10px] uppercase tracking-tighter text-on-surface-variant mb-2">
                  Množství (ks)
                </label>
                <input
                  type="number"
                  defaultValue="1"
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
            Tisk bannerů na míru
          </h2>
          <div className="space-y-6 text-on-surface-variant leading-relaxed">
            <p>
              Bannery jsou jedním z nejúčinnějších nástrojů venkovní reklamy. V eTiskarna tiskneme bannery na míru pomocí UV technologie, která zaručuje sytost barev a odolnost vůči povětrnostním podmínkám po dobu až 5 let.
            </p>
            <p>
              Nabízíme tři základní materiály: Frontlit 510 g/m² pro standardní venkovní použití, Mesh Airmesh 270 g/m² pro fasádní aplikace s průchodem větru a prémiový Blockout 650 g/m² pro oboustranné bannery. Všechny materiály dodáváme se zesílenými okraji a nerezovými kovovými oky.
            </p>
            <p>
              Tiskneme bezešvě do šířky 5 m a neomezené délky. Ať potřebujete banner pro event, výstavu, stavební plot nebo fasádu budovy, poradíme vám s výběrem ideálního řešení a dodáme přesně podle vašich požadavků.
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
            Popište nám vaši zakázku — rozměry, materiál, množství a účel použití. Náš specialista vás do 24 hodin kontaktuje s kalkulací na míru.
          </p>
          <Link
            to="/poptavka"
            className="precision-gradient text-white px-12 py-5 text-sm font-bold tracking-[0.2em] uppercase active:scale-95 transition-transform inline-block"
          >
            Poptávka tisku bannerů
          </Link>
        </div>
      </section>
      <MobileBottomNav />
    </>
  );
}

export default BanneryDetail;
