import { Link } from 'react-router-dom';
import SeoHead from '../seo/SeoHead';

const heroImg = 'https://lh3.googleusercontent.com/aida-public/AB6AXuCH29CxpAa4buNy3RHVBsIn0zZVGPewP4fi6bpp9iEKyuL38gdPBzRgeAQWDUFJWsnoz-TfeEVmusEm45p1p33gtoftuyqs_HUsYMDWI2mkCM-1k4VEJmImm2K4LgdNxM1tmA7Q2ZOAS2fnL6QdsQ0W9bIJPDmEjUV7okmj2TaSSZN91J1Rt_thMMlq9Kp1XM5H72vwWwKhEbncUtifY6Z5BTzHMkrYH-RfkAfvIb9AU-6TDACHAlyMAB7IjQASFn5gbqS--Zo5i2E';
const techImg = 'https://lh3.googleusercontent.com/aida-public/AB6AXuBu6MSeICvUBHQgNIjB9JzI24enZVeS0FLgq8cosuhAkJTCtcLztet6cCjjrJ0eze3aby0wp-kNA1RLbnqwFFBgaMxaTi8rt4rXDB4iLkH0H0gvgToQ_Xrzb5k5BwXwNYjJ-cB0MIGNMKZb0ftZSiozLSg9SYD4yXJg-Re1GJV9fpvxAHvvOHsFJJqhr5vUhQjlcuZdLUgsEF0xvU4zzMxruez-TmQmocrD9K-CxcpA2fRXVVqJRURL1TI_9ODaMef84nr6eoaXY1c';

const features = [
  {
    icon: 'pin',
    title: 'Unikátní číslování',
    text: 'Každý kus opatříme unikátní číselnou řadou nebo variabilními daty dle vašich specifikací.',
    fill: false,
  },
  {
    icon: 'verified_user',
    title: 'Ochranné prvky',
    text: 'Implementace UV barev, hologramů nebo speciálních rastrů proti padělání.',
    fill: true,
  },
  {
    icon: 'style',
    title: 'Prémiové papíry',
    text: 'Od klasických křídových papírů po luxusní grafické kartony s certifikací FSC.',
    fill: false,
  },
];

const specs = [
  {
    title: 'Formáty',
    text: 'Standardní DL (210×99 mm) nebo atypické rozměry s výsekem.',
  },
  {
    title: 'Perforace',
    text: 'Možnost jednoho nebo více odtržitelných ústřižků pro kontrolu u vchodu.',
  },
  {
    title: 'Povrchová úprava',
    text: 'Matné lamino, parciální lak nebo ražba pro luxusní hmatový zážitek.',
  },
];

function VstupenkyDetail() {
  return (
    <>
      <SeoHead page="vstupenky" />

      {/* Hero – 7/5 editorial */}
      <section className="px-8 md:px-24 pt-32 max-w-screen-xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-12 items-end mb-32">
        <div className="md:col-span-7">
          <span className="section-label text-primary mb-4 block">Produktový detail</span>
          <h1 className="text-5xl md:text-8xl font-extrabold tracking-tighter leading-[0.9] mb-8 text-on-surface">
            Vstupenky
          </h1>
          <p className="text-xl md:text-2xl text-on-surface-variant max-w-xl leading-relaxed font-light">
            Tisk vstupenek pro vaši akci, samozřejmostí je číslování a případně ochranné prvky.
          </p>
        </div>
        <div className="md:col-span-5 aspect-[4/5] bg-surface-container-low overflow-hidden">
          <img
            className="w-full h-full object-cover"
            src={heroImg}
            alt="Vstupenky s potiskem – makro detail s kódovými prvky a sériovými čísly na texturovaném papíru"
          />
        </div>
      </section>

      {/* Feature tiles – 3-col */}
      <section className="bg-surface-container-low py-32 px-8 md:px-24">
        <div className="max-w-screen-xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-1">
          {features.map(({ icon, title, text, fill }) => (
            <div key={title} className="bg-surface p-12 flex flex-col justify-between h-[400px]">
              <span
                className="material-symbols-outlined text-primary text-4xl"
                style={{ fontVariationSettings: `'FILL' ${fill ? 1 : 0}` }}
              >
                {icon}
              </span>
              <div>
                <h3 className="text-2xl font-bold mb-4 uppercase tracking-tight">{title}</h3>
                <p className="text-on-surface-variant font-light">{text}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Precision section – image left, specs right */}
      <section className="py-32 px-8 md:px-24 max-w-screen-xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-24 items-center">
        <div className="order-2 md:order-1">
          <div className="aspect-square bg-surface-container-highest overflow-hidden">
            <img
              className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
              src={techImg}
              alt="Detail tiskové technologie – mechanické části ofsetového stroje s modrým inkoustem"
            />
          </div>
        </div>
        <div className="order-1 md:order-2">
          <h2 className="text-4xl font-extrabold tracking-tighter mb-8 uppercase leading-tight">
            Preciznost v každém milimetru.
          </h2>
          <div className="space-y-8">
            {specs.map(({ title, text }) => (
              <div key={title} className="border-b border-outline-variant/30 pb-6">
                <h4 className="text-sm font-bold uppercase tracking-widest text-primary mb-2">{title}</h4>
                <p className="text-on-surface-variant font-light">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Form – floating panel */}
      <section className="bg-surface-container-highest py-32 px-8 md:px-24">
        <div className="max-w-[1000px] mx-auto bg-surface p-8 md:p-20 shadow-2xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-extrabold tracking-tighter uppercase mb-4">
              Poptávkový formulář
            </h2>
            <p className="text-on-surface-variant max-w-md mx-auto font-light">
              Zašlete nám specifikaci a my pro vás připravíme kalkulaci na míru do 24 hodin.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">

            {/* Left */}
            <div className="space-y-8">
              <div>
                <label className="text-[10px] uppercase tracking-widest font-bold text-outline block mb-2">
                  Jméno a příjmení
                </label>
                <input
                  className="w-full bg-transparent border-0 border-b-2 border-outline-variant focus:border-primary focus:ring-0 transition-all py-3 px-0 font-light text-lg placeholder:text-outline"
                  placeholder="Jan Novák"
                  type="text"
                />
              </div>
              <div>
                <label className="text-[10px] uppercase tracking-widest font-bold text-outline block mb-2">
                  E-mailová adresa
                </label>
                <input
                  className="w-full bg-transparent border-0 border-b-2 border-outline-variant focus:border-primary focus:ring-0 transition-all py-3 px-0 font-light text-lg placeholder:text-outline"
                  placeholder="jan@novak.cz"
                  type="email"
                />
              </div>
              <div>
                <label className="text-[10px] uppercase tracking-widest font-bold text-outline block mb-2">
                  Počet kusů
                </label>
                <input
                  className="w-full bg-transparent border-0 border-b-2 border-outline-variant focus:border-primary focus:ring-0 transition-all py-3 px-0 font-light text-lg placeholder:text-outline"
                  placeholder="500"
                  type="number"
                />
              </div>
            </div>

            {/* Right */}
            <div className="space-y-8 flex flex-col">
              <div className="flex-grow">
                <label className="text-[10px] uppercase tracking-widest font-bold text-outline block mb-2">
                  Specifikace (materiál, ochranné prvky...)
                </label>
                <textarea
                  className="w-full bg-surface-container-low border-0 border-b-2 border-outline-variant focus:border-primary focus:ring-0 transition-all py-3 px-4 font-light text-lg placeholder:text-outline resize-none"
                  placeholder="Vaše požadavky..."
                  rows="6"
                />
              </div>
              <Link
                to="/poptavka"
                className="block w-full precision-gradient text-white py-6 font-bold uppercase tracking-[0.2em] text-sm text-center hover:opacity-90 transition-colors active:scale-[0.98]"
              >
                Odeslat poptávku
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* SEO text block */}
      <section className="py-24 px-8 md:px-24">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-black tracking-tighter mb-10">
            Vstupenky s potiskem na míru
          </h2>
          <div className="space-y-6 text-on-surface-variant leading-relaxed">
            <p>
              Profesionálně tištěné vstupenky jsou vizitkou každé akce — koncertu, festivalu, divadelního představení nebo firemního eventu. V eTiskarna tiskneme vstupenky v standardním formátu DL (210×99 mm) i atypických rozměrech s výsekem. Samozřejmostí je sekvenční číslování každého kusu.
            </p>
            <p>
              Pro ochranu před paděláním nabízíme implementaci UV barev (viditelných pouze pod UV světlem), hologramů nebo speciálních bezpečnostních rastrů. Vstupenky tiskneme na křídové papíry i luxusní grafické kartony s FSC certifikací. Perforaci pro odtrhávací ústřižky zajistíme v jednom nebo více místech.
            </p>
            <p>
              Povrchové úpravy zahrnují matné lamino, parciální UV lak i ražbu — pro prémiový hmatový zážitek. Kalkulaci připravíme do 24 hodin. Dodáváme po celé ČR.
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
            Popište nám formát, náklad a požadované ochranné prvky. Náš specialista vás do 24 hodin kontaktuje s kalkulací na míru.
          </p>
          <Link
            to="/poptavka"
            className="precision-gradient text-white px-12 py-5 text-sm font-bold tracking-[0.2em] uppercase active:scale-95 transition-transform inline-block"
          >
            Poptávka vstupenek
          </Link>
        </div>
      </section>
    </>
  );
}

export default VstupenkyDetail;
