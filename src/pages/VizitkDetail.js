import { Link } from 'react-router-dom';
import SeoHead from '../seo/SeoHead';

const heroImg = 'https://lh3.googleusercontent.com/aida-public/AB6AXuDfJeY5MqvECBE6sZXdVxCnSMBzeJisEbPStdCaOwqaoluEcKvKm9N6fCKqIpG8Mrue3gISaFjKg5eUlwx8ePoJ17laE5weyItUOY72JWpXXEvj8iGaHmUjpq3hNPNhT-0jUNDcXlMbYtuerjXPytHRYCXVfbC0rRnB4K7QXJJbJfZJ_cq9erpRuVW9S8LHQsDblo3TvoeO0TNFUJ-eIdzjYSfDqI_VP9gzVGVT3fT4xzj5JRuPYBWzUHhiYUv3sp7auZ_Ni0DVIBQ';
const foldedImg = 'https://lh3.googleusercontent.com/aida-public/AB6AXuCXNGgpsDLRQuHWJsFk7o8oEcIqY_ZBZmkIrADEy5CZi3jZ2Ecok4mAn8ZAkD-SUQ6wu_awNFhxacdrqwIpnFq7AWaMPB8TMrz9i0A2qzUOHXmGJLnzG2mO2vYRYB1Xf-Bo8iSEUpSy_DN8acclxds1eJP8hcXjEkwgO1MQFwa5sTiu9_0VKI14dpEX5DJoquiWWM8hP56Ve-tXGwmNuARXiRIy2GfVu3YptbqQ5Gf7h5UhRPqJ4rM5Eme1UgboF_Uq5m-G84xIexE';

const bentoItems = [
  {
    icon: 'layers',
    bg: 'bg-surface-container-low',
    title: 'Materiály',
    text: 'Prémiové hlazené křídy, nenatírané grafické papíry a speciální textury od G.F Smith či Fedrigoni.',
  },
  {
    icon: 'brush',
    bg: 'bg-surface-container-highest',
    title: 'Zušlechtění',
    text: 'Barevná ořízka hran, slepotisk, horká ražba fólií (zlatá, stříbrná, měděná) nebo parciální lak.',
  },
  {
    icon: 'grid_view',
    bg: 'bg-surface-container-low',
    title: 'Formáty',
    text: 'Standardní 85×55 mm, 90×50 mm nebo čtvercové a skládané varianty na míru vašim potřebám.',
  },
];

function VizitkDetail() {
  return (
    <>
      <SeoHead page="vizitky" />

      {/* Hero – 5/7 editorial, text left */}
      <section className="px-8 md:px-24 pt-32 grid grid-cols-1 lg:grid-cols-12 gap-12 items-end mb-32">
        <div className="lg:col-span-5 order-2 lg:order-1">
          <span className="section-label text-primary mb-6 block">Kategorie: Tiskoviny</span>
          <h1 className="text-7xl font-extrabold tracking-tighter leading-[0.9] mb-8 text-on-surface">
            Vizitky
          </h1>
          <p className="text-on-surface-variant text-xl leading-relaxed max-w-md font-light">
            Klasické vizitky na křídové papíry i na speciální vizitky. Také nabízíme skládané vizitky, které mají 4 strany.
          </p>
          <div className="mt-12 h-[2px] w-24 bg-primary" />
        </div>
        <div className="lg:col-span-7 order-1 lg:order-2">
          <div className="relative group aspect-[4/3] overflow-hidden">
            <img
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              src={heroImg}
              alt="Prémiové vizitky z bavlněného papíru s modrými hranami a elegantní typografií – makro detail"
            />
          </div>
        </div>
      </section>

      {/* Bento specs – 3 square tiles */}
      <section className="px-8 md:px-24 mb-32">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-0">
          {bentoItems.map(({ icon, bg, title, text }, i) => (
            <div
              key={title}
              className={`${bg} p-12 aspect-square flex flex-col justify-between ${i < 2 ? 'border-r border-background' : ''}`}
            >
              <span
                className="material-symbols-outlined text-primary"
                style={{ fontVariationSettings: "'FILL' 0", fontSize: '2rem' }}
              >
                {icon}
              </span>
              <div>
                <h3 className="text-2xl font-bold tracking-tight mb-4 uppercase">{title}</h3>
                <p className="text-on-surface-variant text-sm leading-loose font-light">{text}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Form section */}
      <section className="px-8 md:px-24 grid grid-cols-1 lg:grid-cols-12 gap-24 items-start mb-32">

        {/* Left info */}
        <div className="lg:col-span-4">
          <h2 className="text-4xl font-extrabold tracking-tighter mb-8 uppercase">
            Poptávkový formulář
          </h2>
          <p className="text-on-surface-variant leading-relaxed mb-12 font-light">
            Máte specifickou představu o materiálu nebo technologii? Vyplňte formulář a náš specialista vám připraví kalkulaci na míru do 24 hodin.
          </p>
          <div className="space-y-6">
            {[
              { icon: 'verified', label: 'Garance kvality tisku' },
              { icon: 'speed', label: 'Expresní doručení' },
            ].map(({ icon, label }) => (
              <div key={icon} className="flex items-center gap-4">
                <span
                  className="material-symbols-outlined text-primary"
                  style={{ fontVariationSettings: "'FILL' 0" }}
                >
                  {icon}
                </span>
                <span className="font-bold text-xs uppercase tracking-widest">{label}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Form */}
        <div className="lg:col-span-8 bg-surface-container-low p-12 lg:p-20">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            <div className="space-y-2">
              <label className="block font-bold text-[10px] uppercase tracking-[0.2em] text-on-surface-variant">
                Jméno a příjmení
              </label>
              <input
                className="w-full bg-transparent border-0 border-b-2 border-outline-variant focus:border-primary focus:ring-0 px-0 py-3 transition-colors outline-none text-sm"
                type="text"
              />
            </div>
            <div className="space-y-2">
              <label className="block font-bold text-[10px] uppercase tracking-[0.2em] text-on-surface-variant">
                E-mail
              </label>
              <input
                className="w-full bg-transparent border-0 border-b-2 border-outline-variant focus:border-primary focus:ring-0 px-0 py-3 transition-colors outline-none text-sm"
                type="email"
              />
            </div>
            <div className="space-y-2">
              <label className="block font-bold text-[10px] uppercase tracking-[0.2em] text-on-surface-variant">
                Typ papíru
              </label>
              <select className="w-full bg-transparent border-0 border-b-2 border-outline-variant focus:border-primary focus:ring-0 px-0 py-3 transition-colors outline-none appearance-none text-sm">
                <option>Prémiová Křída 350 g</option>
                <option>Nenatíraný Grafický</option>
                <option>Skládaná Vizitka</option>
                <option>Speciální / Jiný</option>
              </select>
            </div>
            <div className="space-y-2">
              <label className="block font-bold text-[10px] uppercase tracking-[0.2em] text-on-surface-variant">
                Náklad (ks)
              </label>
              <input
                className="w-full bg-transparent border-0 border-b-2 border-outline-variant focus:border-primary focus:ring-0 px-0 py-3 transition-colors outline-none text-sm"
                placeholder="100"
                type="number"
              />
            </div>
            <div className="md:col-span-2 space-y-2">
              <label className="block font-bold text-[10px] uppercase tracking-[0.2em] text-on-surface-variant">
                Poznámka k projektu
              </label>
              <textarea
                className="w-full bg-transparent border-0 border-b-2 border-outline-variant focus:border-primary focus:ring-0 px-0 py-3 transition-colors outline-none resize-none text-sm"
                rows="4"
              />
            </div>
            <div className="md:col-span-2 pt-8">
              <Link
                to="/poptavka"
                className="inline-block w-full md:w-auto precision-gradient text-white px-12 py-5 font-bold uppercase tracking-widest text-xs text-center active:scale-[0.98] transition-transform"
              >
                Odeslat nezávaznou poptávku
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Folded card showcase */}
      <section className="px-8 md:px-24 mb-32">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="aspect-[16/9] overflow-hidden">
            <img
              className="w-full h-full object-cover"
              src={foldedImg}
              alt="Skládaná vizitka se čtyřmi stranami stojící na čisté šedé ploše – prémiová textura papíru"
            />
          </div>
          <div className="max-w-md">
            <h3 className="text-3xl font-bold tracking-tighter mb-6 uppercase">Skládané vizitky</h3>
            <p className="text-on-surface-variant leading-relaxed font-light">
              Pro ty, kterým standardní rozměr nestačí. Nabízíme skládané varianty se 4 stranami, které pojmou ceník, mapu nebo podrobnější portfolio služeb bez ztráty elegance.
            </p>
          </div>
        </div>
      </section>

      {/* SEO text block */}
      <section className="py-24 px-8 md:px-24">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-black tracking-tighter mb-10">
            Vizitky na míru – prémiový tisk
          </h2>
          <div className="space-y-6 text-on-surface-variant leading-relaxed">
            <p>
              Vizitka je první fyzický kontakt vaší značky s klientem. V eTiskarna věnujeme každé zakázce maximální péči — od výběru papíru až po finální zušlechtění. Tiskneme na prémiové křídové papíry, nenatírané grafické kartony a speciální textury od G.F Smith a Fedrigoni.
            </p>
            <p>
              Standardní formáty jsou 85×55 mm a 90×50 mm. Nabízíme také čtvercové a skládané vizitky se 4 stranami — ideální pro ty, kdo chtějí sdělit víc než jen jméno a telefon. Dostupné povrchové úpravy zahrnují matnou a lesklou laminaci, parciální UV lak, slepotisk a horkou ražbu zlatou, stříbrnou nebo měděnou fólií.
            </p>
            <p>
              Minimální náklad od 100 kusů. Kalkulaci připravíme do 24 hodin, expresní doručení po celé ČR je samozřejmostí.
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
            Popište nám typ papíru, zušlechtění a náklad. Náš specialista vás do 24 hodin kontaktuje s kalkulací na míru.
          </p>
          <Link
            to="/poptavka"
            className="precision-gradient text-white px-12 py-5 text-sm font-bold tracking-[0.2em] uppercase active:scale-95 transition-transform inline-block"
          >
            Poptávka vizitek
          </Link>
        </div>
      </section>
    </>
  );
}

export default VizitkDetail;
