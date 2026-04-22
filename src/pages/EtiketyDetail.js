import { Link } from 'react-router-dom';
import SeoHead from '../seo/SeoHead';
import MobileBottomNav from '../components/MobileBottomNav';

const heroImg = 'https://lh3.googleusercontent.com/aida-public/AB6AXuCNi2peD1SsTlDa4S7nBZx2KwBuwonv_X8qx8ePac_0WTs89WAzkpqGHJO3HEgjpKHa-4Jal-JwsNj8ux7LSZHzlu2JhfPM_tcLVcrfAimgRnCmlHwrciWBX8e-jw1p1vQG2CM0A0NlRuCI2ahHOL0sQgEOf1suhGcoL7Zfw988KHK19T1wLQXCCYk5ElytXsa4nTCs-DEAIWjkBnx5VGhenM7zekOeKZTGF-3ESkxPySzUIwM7ujmh5L4jVE0ZZnHk0ZDcC503qSo';
const galleryImg1 = 'https://lh3.googleusercontent.com/aida-public/AB6AXuC6wOf7tlzuh_NiiSQp2ADQY3MKHvWijkCvmQiihDHNzMuLqF-c5M7S5rbUf2JKA_I0jtE182aXQ3NNV05m_ICyeXPcRyhv7LDOH61y8zpYwWhLAnmygCRJkORMjaEspi3zADUND1LUUCEJq8gNSm_-JBZ7skCRVMNAq2Nz6bsXLFOfpEjYfJ83Ad02gBc_MeAo3n5ZhIAVH-QLWWcG-bxDHSu9pbVo_TSekRDKwuTOZ-0o981L-lLdGNjgNmpoj_VVCNJGG0N-ZbU';
const galleryImg2 = 'https://lh3.googleusercontent.com/aida-public/AB6AXuA2yOG9sjFriuQGkWacYXNqq_5zvCK7bCEP7VE4g7_B-naNm7cTAqWKxCgo4xU1qAy71TUzhfcrmfqWEN9ahmeESj_fiJeDE7DfWiUeq_4lPnWDVOQ8B2wn9mFx2_tsyEBNYxvWhUedrQUTIfLkWOyX_HLIiFCKIbuthyeMc-86cmQJu3qtNcwbq5KADaWBD-CXzdPIajrbQCIP4fToJ2fm1idUUrvq3Rh5UVB-L1bq5HHZYNT5-BIf8NdUje_bCZWDeeaFfnhNdqQ';
const galleryImg3 = 'https://lh3.googleusercontent.com/aida-public/AB6AXuCZhvmrOldGbQ7FXdT0dSRcUUS6aGtYZ9nRpUF6_iLdrfAntj3ov5NZ8_JFRkR0Ek6EbfQmdXpa-ocHI3sH748y58024GA3RaWFVcZjzB4KNRflZDWHeYg1dUx84gax7DYcilJ4vsS3uKnUWbXU2NtVjVmah_15pHoDT0mJkBmMJ9Tpi2Ve8PfTReKM81qZ60rjWl5hExXrCmUweMIC5xvqvdxHl9adRyzxEGtEd3hoqoBXJQSDzxdzC9xJyfp-IY4P8jpryGZ0fXA';

function EtiketyDetail() {
  return (
    <>
      <SeoHead page="etikety" />

      {/* Hero */}
      <section className="relative w-full overflow-hidden bg-surface-container-low flex items-center px-8 md:px-24 pt-28 pb-16 md:pb-0 md:h-[900px]">
        <div className="grid grid-cols-1 md:grid-cols-12 w-full items-center gap-12">
          <div className="md:col-span-5 z-10">
            <span className="section-label text-primary">Kategorie / Tiskoviny</span>
            <h1 className="text-6xl md:text-8xl font-extrabold tracking-tighter text-on-background leading-[0.9] mb-8">
              Tisk etiket<br />na míru
            </h1>
            <p className="text-lg md:text-xl text-on-surface-variant leading-relaxed max-w-md font-light">
              Tisk plastových i papírových etiket v rolích i arších pro potraviny, kosmetiku i průmysl. Precizní barevné podání, odolné materiály a digitální výsek do libovolných tvarů.
            </p>
          </div>
          <div className="md:col-span-7 h-full w-full relative">
            <img
              className="w-full h-[400px] md:h-[716px] object-cover grayscale-[0.5] hover:grayscale-0 transition-all duration-1000 shadow-2xl"
              src={heroImg}
              alt="Tisk etiket eTiskarna – prémiové papírové etikety s folií na skleněné lahvi"
            />
            <div className="absolute -bottom-12 -left-12 bg-white p-12 hidden md:block">
              <div className="flex flex-col gap-2">
                <span className="text-4xl font-bold text-primary">01.</span>
                <span className="text-xs tracking-widest uppercase font-black">Precizní tisk etiket</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Specs – Material Cards */}
      <section className="py-32 px-8 md:px-24 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-24 items-start">
          <div className="md:col-span-1">
            <h2 className="text-xs font-black tracking-[0.5em] uppercase text-on-surface-variant mb-6">
              Možnosti výroby etiket
            </h2>
            <div className="space-y-4">
              <div className="h-px bg-outline-variant opacity-20"></div>
              <p className="text-sm text-on-surface-variant leading-loose italic">
                "Každá role je dodávána s milimetrovou přesností pro bezproblémovou integraci do automatických etiketovacích linek."
              </p>
            </div>
          </div>
          <div className="md:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="p-8 bg-surface-container-low hover:bg-surface-container-high transition-colors group">
              <span
                className="material-symbols-outlined text-primary text-4xl mb-4 block"
                style={{ fontVariationSettings: "'FILL' 1" }}
              >
                layers
              </span>
              <h3 className="text-xl font-bold mb-3">Plastové etikety PP/PE</h3>
              <p className="text-on-surface-variant text-sm font-light leading-relaxed">
                Odolné, voděodolné a průhledné materiály pro kosmetiku, nápoje a průmyslové aplikace. Odolávají vlhkosti i mechanickému namáhání.
              </p>
            </div>
            <div className="p-8 bg-surface-container-low hover:bg-surface-container-high transition-colors group">
              <span
                className="material-symbols-outlined text-primary text-4xl mb-4 block"
                style={{ fontVariationSettings: "'FILL' 1" }}
              >
                texture
              </span>
              <h3 className="text-xl font-bold mb-3">Papírové etikety</h3>
              <p className="text-on-surface-variant text-sm font-light leading-relaxed">
                Texturované a nenatírané papíry pro víno, lihoviny a luxusní řemeslné výrobky. Hmatový povrch pro prémiový dojem z produktu.
              </p>
            </div>
            <div className="p-8 bg-surface-container-low hover:bg-surface-container-high transition-colors group">
              <span
                className="material-symbols-outlined text-primary text-4xl mb-4 block"
                style={{ fontVariationSettings: "'FILL' 1" }}
              >
                content_cut
              </span>
              <h3 className="text-xl font-bold mb-3">Digitální výsek do tvarů</h3>
              <p className="text-on-surface-variant text-sm font-light leading-relaxed">
                Libovolné tvary a složité kontury dosažené precizní digitální řeznou technologií — bez nutnosti výroby raznice i pro malé série.
              </p>
            </div>
            <div className="p-8 bg-surface-container-low hover:bg-surface-container-high transition-colors group">
              <span
                className="material-symbols-outlined text-primary text-4xl mb-4 block"
                style={{ fontVariationSettings: "'FILL' 1" }}
              >
                auto_awesome
              </span>
              <h3 className="text-xl font-bold mb-3">Povrchové úpravy</h3>
              <p className="text-on-surface-variant text-sm font-light leading-relaxed">
                Matný a lesklý lak, zlatá a stříbrná fólie, slepotisk (emboss). Každý detail podtrhne hodnotu vaší značky.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery – Asymmetrical */}
      <section className="py-24 px-8 md:px-24 bg-surface-container-low overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center mb-12">
            <div className="md:col-span-8">
              <img
                className="w-full h-[500px] object-cover"
                src={galleryImg1}
                alt="Role etiket vycházející z profesionálního tiskového stroje"
              />
            </div>
            <div className="md:col-span-4 px-0 md:px-8">
              <h4 className="text-3xl font-black tracking-tighter uppercase mb-6">Dodávka v rolích i arších</h4>
              <p className="text-on-surface-variant leading-relaxed mb-8 text-sm font-light">
                Etikety dodáváme na standardizovaných rolích optimalizovaných pro vysokorychlostní průmyslové aplikátory. Průměr jádra a směr navinování jsou plně přizpůsobitelné vašemu zařízení.
              </p>
              <div className="border-l-4 border-primary pl-6">
                <span className="block text-xs font-bold uppercase tracking-widest text-primary mb-1">Standardní jádro</span>
                <span className="text-2xl font-black">76 mm / 3 palce</span>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-8">
            <img
              className="w-full h-[350px] object-cover grayscale hover:grayscale-0 transition-all duration-700"
              src={galleryImg2}
              alt="Detail designových etiket s ražbou zlatých písmen na luxusním papíře"
            />
            <img
              className="w-full h-[350px] object-cover"
              src={galleryImg3}
              alt="Minimalistický design průhledné plastové etikety na lahvi"
            />
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
                  Materiál
                </label>
                <select className="w-full bg-surface-container-low border-0 text-sm font-bold p-4 focus:ring-2 focus:ring-primary">
                  <option>Papír (mat / lesk)</option>
                  <option>Plast PP průhledný</option>
                  <option>Plast PE bílý</option>
                  <option>Speciální materiál</option>
                </select>
              </div>
              <div>
                <label className="block text-[10px] uppercase tracking-tighter text-on-surface-variant mb-2">
                  Formát dodávky
                </label>
                <select className="w-full bg-surface-container-low border-0 text-sm font-bold p-4 focus:ring-2 focus:ring-primary">
                  <option>Role (76mm jádro)</option>
                  <option>Role (40mm jádro)</option>
                  <option>Archy A4</option>
                  <option>Archy A3</option>
                </select>
              </div>
              <div>
                <label className="block text-[10px] uppercase tracking-tighter text-on-surface-variant mb-2">
                  Množství (ks)
                </label>
                <input
                  type="number"
                  defaultValue="1000"
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
            Tisk etiket na míru
          </h2>
          <div className="space-y-6 text-on-surface-variant leading-relaxed">
            <p>
              Etikety jsou vizitkou každého produktu. V eTiskarna tiskneme etikety na míru pro potravinářský, kosmetický i průmyslový segment — v rolích i arších, z papíru i plastu.
            </p>
            <p>
              Nabízíme širokou škálu materiálů: papírové etikety na přírodní i lesklé podložce, průhledné plastové PP etikety pro nápoje a kosmetiku a speciální samolepicí fólie pro venkovní použití. Povrchové úpravy zahrnují matný a lesklý lak, zlatou nebo stříbrnou folii a slepotisk.
            </p>
            <p>
              Díky digitálnímu výseku realizujeme libovolné tvary bez nutnosti výroby kovové raznice — ideální řešení pro malé série, prototypy i limitované edice. Role dodáváme s průměrem jádra 40 nebo 76 mm ve směru navinování podle vašeho etiketovacího stroje.
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
            Popište nám vaši zakázku — materiál, tvar, množství a povrchovou úpravu. Náš specialista vás do 24 hodin kontaktuje s kalkulací na míru.
          </p>
          <Link
            to="/poptavka"
            className="precision-gradient text-white px-12 py-5 text-sm font-bold tracking-[0.2em] uppercase active:scale-95 transition-transform inline-block"
          >
            Poptávka tisku etiket
          </Link>
        </div>
      </section>
      <MobileBottomNav />
    </>
  );
}

export default EtiketyDetail;
