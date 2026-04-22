import { Link } from 'react-router-dom';
import SeoHead from '../seo/SeoHead';
import MobileBottomNav from '../components/MobileBottomNav';

const heroImg = 'https://lh3.googleusercontent.com/aida-public/AB6AXuBkVpI5SFNu6_ViMMsmcuU2YcJJxq-0-eTO4A_jeQPovr308fpJnzIHETak3x63w7QHd0n16bA_bkpBI4sZdWK9RMI1zC7HgqSzbxYvn6Ce7HKQJLOsSyAV31eBpMkNVC8KvRZSzRrDv9QoeNSIQ9cGFG-bMPJdzZbnJoBfy2vrbZ_gRCkippYW2VwM0EiPlMeYAldg5ZkoSHHcqHEYlTCO6XMBjzaE9TbOIhlM9OfPkEEaSpU-dPcHj3LnU6RNoeAAGd8C5wj7aK0';
const galleryImg = 'https://lh3.googleusercontent.com/aida-public/AB6AXuB2S1qtcc6fc9EDrWtsmLFN-_txqk9SIccShh02S-rqVc7wn7IUJjO_ID3mmDBML_ZYAgmpS48svXhgqBN4EjiKM9tPyhXPQtSe5OeQs5l8m2b7qd3wFbAAe5MEUnvuZ21PqaHV1DG8hHdfm4uJO5zxPn9l3EnXZALhO785v1YDnPfx88GjUCJvvuX2UgCu3PgvP9y3S71RWuQ4aa97xwnzr9seYCcC_rP3f29o8q4VHTdAtIK_Ktl407yP_3cCKVdqWKpDaMj0rZM';

function SamolepiciBlockyDetail() {
  return (
    <>
      <SeoHead page="samolepici-blocky" />

      {/* Hero – text left, image right */}
      <section className="px-8 md:px-24 pt-32 mb-24 grid grid-cols-1 md:grid-cols-12 gap-12 items-end">
        <div className="md:col-span-5 mb-12 md:mb-0">
          <span className="section-label text-primary mb-4 block">Kolekce Office Precision</span>
          <h1 className="text-6xl md:text-8xl font-extrabold tracking-tighter leading-none mb-8">
            Samolepící<br />bločky
          </h1>
          <p className="text-lg text-on-surface-variant leading-relaxed max-w-md font-light">
            Klasické post-it bločky v naší architektonické úpravě. Spojení funkčnosti a čisté estetiky pro vaši firemní identitu.
          </p>
        </div>
        <div className="md:col-span-7">
          <div className="aspect-[4/3] overflow-hidden bg-surface-container-low">
            <img
              className="w-full h-full object-cover grayscale-[20%] hover:scale-105 transition-transform duration-700"
              src={heroImg}
              alt="Samolepící bločky s potiskem – prémiové firemní post-it bloky na míru"
            />
          </div>
        </div>
      </section>

      {/* Product Details */}
      <section className="bg-surface-container-low py-24 px-8 md:px-24">
        <div className="max-w-screen-xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-16">
          <div>
            <h3 className="text-2xl font-bold tracking-tight mb-4">Materiál</h3>
            <p className="text-on-surface-variant leading-relaxed font-light">
              Prémiový 80g ofsetový papír s vysokou bělostí a certifikací FSC. Speciální permanentně-adhezivní vrstva nezanechávající stopy.
            </p>
          </div>
          <div>
            <h3 className="text-2xl font-bold tracking-tight mb-4">Tisk</h3>
            <p className="text-on-surface-variant leading-relaxed font-light">
              Plnobarevný CMYK tisk s vysokým rozlišením 2400 DPI pro dokonalé vykreslení i těch nejmenších detailů vašeho loga.
            </p>
          </div>
          <div>
            <h3 className="text-2xl font-bold tracking-tight mb-4">Formáty</h3>
            <p className="text-on-surface-variant leading-relaxed font-light">
              Od standardních 75×75 mm až po individuální výseky. Standardně 50 nebo 100 listů v bloku.
            </p>
          </div>
        </div>
      </section>

      {/* Configurator + Price panel */}
      <section className="px-8 md:px-24 py-32">
        <div className="max-w-screen-xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16">

          {/* Left: Configurator */}
          <div className="lg:col-span-7 space-y-16">
            <div>
              <h2 className="text-4xl font-bold tracking-tight mb-12">Konfigurace produktu</h2>
              <div className="space-y-12">

                {/* Paper type selector */}
                <div>
                  <label className="text-xs font-bold uppercase tracking-widest text-on-surface-variant mb-6 block">
                    Typ papíru
                  </label>
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                    <div className="bg-surface-container-lowest p-6 border border-primary/20 flex flex-col justify-between h-32 cursor-pointer hover:bg-surface-container transition-all">
                      <span className="font-bold text-sm">Klasický Bílý</span>
                      <div className="flex justify-between items-center">
                        <span className="text-xs text-on-surface-variant">80g Offset</span>
                        <span
                          className="material-symbols-outlined text-primary text-sm"
                          style={{ fontVariationSettings: "'FILL' 1" }}
                        >
                          check_circle
                        </span>
                      </div>
                    </div>
                    <div className="bg-surface-container-low p-6 flex flex-col justify-between h-32 cursor-pointer hover:bg-surface-container-high transition-all">
                      <span className="font-bold text-sm">Pastelová Žlutá</span>
                      <span className="text-xs text-on-surface-variant">75g Standard</span>
                    </div>
                    <div className="bg-surface-container-low p-6 flex flex-col justify-between h-32 cursor-pointer hover:bg-surface-container-high transition-all">
                      <span className="font-bold text-sm">Recyklovaný</span>
                      <span className="text-xs text-on-surface-variant">80g Eco-friendly</span>
                    </div>
                  </div>
                </div>

                {/* Inquiry form */}
                <div className="space-y-8 pt-8">
                  <h3 className="text-2xl font-bold tracking-tight">Nezávazná poptávka</h3>
                  <div className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <input
                        className="w-full bg-transparent border-b border-outline-variant py-4 focus:border-primary focus:ring-0 transition-colors placeholder:text-on-surface-variant/50 text-sm"
                        placeholder="Jméno a příjmení"
                        type="text"
                      />
                      <input
                        className="w-full bg-transparent border-b border-outline-variant py-4 focus:border-primary focus:ring-0 transition-colors placeholder:text-on-surface-variant/50 text-sm"
                        placeholder="Firemní e-mail"
                        type="email"
                      />
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <input
                        className="w-full bg-transparent border-b border-outline-variant py-4 focus:border-primary focus:ring-0 transition-colors placeholder:text-on-surface-variant/50 text-sm"
                        placeholder="Počet kusů (min. 50)"
                        type="number"
                      />
                      <select className="w-full bg-transparent border-b border-outline-variant py-4 focus:border-primary focus:ring-0 transition-colors text-on-surface-variant text-sm">
                        <option>Formát: 75 × 75 mm</option>
                        <option>Formát: 50 × 75 mm</option>
                        <option>Formát: 100 × 75 mm</option>
                        <option>Vlastní rozměr</option>
                      </select>
                    </div>
                    <textarea
                      className="w-full bg-transparent border-b border-outline-variant py-4 focus:border-primary focus:ring-0 transition-colors placeholder:text-on-surface-variant/50 resize-none text-sm"
                      placeholder="Vaše specifikace nebo dotaz..."
                      rows="4"
                    />
                    <Link
                      to="/poptavka"
                      className="block w-full precision-gradient text-white py-5 text-sm font-bold uppercase tracking-[0.2em] text-center hover:opacity-90 transition-all active:scale-[0.98]"
                    >
                      Odeslat specifikaci
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Price panel */}
          <div className="lg:col-span-5">
            <div className="sticky top-40 bg-surface/80 backdrop-blur-xl p-12 border border-outline-variant/20 space-y-12">
              <div>
                <span className="text-xs font-bold uppercase tracking-widest text-on-surface-variant mb-2 block">
                  Odhad ceny
                </span>
                <div className="flex items-baseline gap-2">
                  <span className="text-5xl font-black tracking-tighter">12,50</span>
                  <span className="text-xl font-bold">Kč / ks</span>
                </div>
                <p className="text-xs text-on-surface-variant mt-2">Při odběru 500 ks, bez DPH</p>
              </div>
              <div className="space-y-6">
                <div className="flex justify-between items-center text-sm">
                  <span className="text-on-surface-variant">Příprava tisku</span>
                  <span className="font-bold">Zdarma</span>
                </div>
                <div className="flex justify-between items-center text-sm">
                  <span className="text-on-surface-variant">Doprava (ČR)</span>
                  <span className="font-bold">149 Kč</span>
                </div>
                <div className="h-px bg-outline-variant/20" />
                <div className="flex justify-between items-center">
                  <span className="font-bold">Předpokládané dodání</span>
                  <span className="font-bold text-primary">do 7 pracovních dnů</span>
                </div>
              </div>
              <div className="bg-primary/5 p-6 space-y-4">
                <div className="flex gap-4">
                  <span
                    className="material-symbols-outlined text-primary"
                    style={{ fontVariationSettings: "'FILL' 0" }}
                  >
                    verified
                  </span>
                  <div>
                    <span className="text-sm font-bold block">Garance kvality</span>
                    <span className="text-xs text-on-surface-variant">
                      Kontrola tiskových dat naším grafikem v ceně každé objednávky.
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Secondary imagery + claim */}
      <section className="px-8 md:px-24 py-32">
        <div className="max-w-screen-xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="aspect-square bg-surface-container overflow-hidden">
            <img
              className="w-full h-full object-cover"
              src={galleryImg}
              alt="Detail vysokorozlišeného tisku loga na samolepícím papírovém bločku"
            />
          </div>
          <div className="flex flex-col justify-center p-12 bg-surface-container-low">
            <h3 className="text-4xl font-black tracking-tighter mb-6">
              Preciznost v každém listu.
            </h3>
            <p className="text-lg leading-relaxed text-on-surface-variant font-light">
              Využíváme nejmodernější tiskové technologie Heidelberg, které zaručují barevnou stálost a ostrost loga od prvního po stý list bločku.
            </p>
          </div>
        </div>
      </section>

      {/* SEO text block */}
      <section className="py-24 px-8 md:px-24">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-black tracking-tighter mb-10">
            Samolepící bločky s potiskem na míru
          </h2>
          <div className="space-y-6 text-on-surface-variant leading-relaxed">
            <p>
              Samolepící bločky s firemním logem jsou praktický a každodenně využívaný reklamní předmět. Na rozdíl od klasických tiskovin zůstanou na pracovním stole, nikoliv v zásuvce. V eTiskarna tiskneme bločky na prémiový 80g ofsetový papír s FSC certifikací a speciální adhezivní vrstvou, která nezanechává stopy.
            </p>
            <p>
              Standardní formáty jsou 50×75 mm, 75×75 mm a 100×75 mm, ale rádi vyrobíme i bločky na zakázkový rozměr. Každý blok obsahuje 50 nebo 100 listů s plnobarevným CMYK tiskem o rozlišení 2400 DPI — dokonalé vykreslení i těch nejjemnějších grafických prvků vašeho loga je samozřejmostí.
            </p>
            <p>
              Vedle klasického bílého papíru nabízíme pastelovou žlutou variantu i ekologický recyklovaný papír. Příprava tiskových dat je zdarma, dodáváme do 7 pracovních dnů po celé ČR. Minimální odběr od 50 kusů, kalkulaci zašleme do 24 hodin.
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
            Popište nám vaši zakázku — formát, počet listů, náklad a grafiku. Náš specialista vás do 24 hodin kontaktuje s kalkulací na míru.
          </p>
          <Link
            to="/poptavka"
            className="precision-gradient text-white px-12 py-5 text-sm font-bold tracking-[0.2em] uppercase active:scale-95 transition-transform inline-block"
          >
            Poptávka samolepících bločků
          </Link>
        </div>
      </section>
      <MobileBottomNav />
    </>
  );
}

export default SamolepiciBlockyDetail;
