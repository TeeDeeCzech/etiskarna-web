import { Link } from 'react-router-dom';
import SeoHead from '../seo/SeoHead';

const heroImg = 'https://lh3.googleusercontent.com/aida-public/AB6AXuC3-PHBrTPo82lJ_fOAMOkLUeVJdNzpUhFDUCQ450Ag4f8KaufRDmwoxHkkJ9sykSGm1GL-JAm8wBMm-gIQrz00SjBJQbXk9N9AZZQu6I9sBd0ivwBI-FoDG4qtTpClcFVQS85iJn3OCMPTApGhJESXI-BYaphZgpWzmwHwRJ29fUDV9jeqZwjix146s6XukDP7whJECiP_cQ6Imfdw0XSEgW1A2Xm7lWXkaEJMm2FIb__UOKs3uSrIWBWH0vIkb9rC1k2mvB1oVKg';
const galleryImg = 'https://lh3.googleusercontent.com/aida-public/AB6AXuAl950rtK0X6jYm0ZRIexHUP97jR1_56e8rNfYwUbjYQdqI_fMCoJv8IY6ZdO11MGX3dem-MtVZOcTd-TQi2Be4CDO5gSGCnfg7rRb0UgQ44OhJjArncGrWgrvccPzNv49L3Np6fR8EAhA3iCMAW4ViWF0f8LTdnb8eGBOcubbY7mmGx7X9hjSfcL12-6VCKP7-klPs_QeKIizhS8dvcA4VUGnTgo2THXb9Hni47hbeFcbPj69_Zg1Rioad1IyWJlCkRn3TMevS_rg';

const specs = [
  {
    title: 'Prvotřídní Materiál',
    text: 'Používáme výhradně 100% bavlněné plátno s gramáží 360 g/m², které zaručuje přirozenou texturu a dlouhou životnost bez praskání v ohybech.',
  },
  {
    title: 'UV Technologie',
    text: 'Naše nejmodernější UV tiskárny nanášejí barvu, která je okamžitě vytvrzena. Výsledkem jsou syté barvy odolné proti vyblednutí a mechanickému poškození.',
  },
  {
    title: 'Variabilita Rozměrů',
    text: 'Od miniaturních formátů 20×20 cm až po monumentální plátna přesahující 3 metry. Každý rám vyrábíme na míru z výběrového smrkového dřeva.',
  },
];

function TiskNaPlatnoDetail() {
  return (
    <>
      <SeoHead page="tisk-na-platno" />

      {/* Hero – 5/7 asymmetric grid */}
      <section className="relative min-h-[700px] lg:min-h-[921px] grid grid-cols-1 md:grid-cols-12 items-center overflow-hidden">
        {/* Text side */}
        <div className="md:col-span-5 px-8 md:px-24 z-10 py-12 pt-32 md:pt-12">
          <span className="section-label text-primary mb-6 block">Umění &amp; Preciznost</span>
          <h1 className="text-5xl md:text-8xl font-extrabold tracking-tighter leading-[0.9] mb-8">
            Tisk na plátno
          </h1>
          <p className="text-lg text-on-surface-variant leading-relaxed max-w-md mb-10 font-light">
            Tisk vašich motivů na malířské plátno, vytisknete si vlastní obrazy od malého po několikametrový obraz. Vysoce kvalitní UV tisk.
          </p>
          <div className="flex items-center gap-8">
            <Link
              to="/poptavka"
              className="precision-gradient text-white px-10 py-4 font-bold uppercase tracking-widest text-sm active:scale-[0.98] transition-transform inline-block"
            >
              Poptat cenu
            </Link>
            <div className="flex items-center gap-3 text-on-surface-variant font-bold uppercase tracking-widest text-xs">
              <span
                className="material-symbols-outlined text-xl"
                style={{ fontVariationSettings: "'FILL' 0" }}
              >
                play_circle
              </span>
              Proces výroby
            </div>
          </div>
        </div>

        {/* Image side */}
        <div className="md:col-span-7 h-full relative min-h-[500px]">
          <img
            className="w-full h-full object-cover grayscale-[20%] hover:grayscale-0 transition-all duration-1000"
            src={heroImg}
            alt="Velkoformátový tisk na plátno s abstraktními motivy opřený o bílou galerijní stěnu v ranním světle"
          />
          <div className="absolute bottom-0 left-0 bg-surface p-8 hidden md:block">
            <p className="text-[10px] uppercase tracking-[0.4em] text-on-surface-variant font-bold">
              Model: Studio Canvas XL
            </p>
          </div>
        </div>
      </section>

      {/* Specs – 3-col */}
      <section className="bg-surface-container-low py-32 px-8 md:px-24">
        <div className="max-w-screen-xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-16">
          {specs.map(({ title, text }) => (
            <div key={title} className="space-y-6">
              <div className="w-12 h-px bg-primary mb-8" />
              <h3 className="text-2xl font-bold tracking-tight">{title}</h3>
              <p className="text-on-surface-variant leading-relaxed font-light">{text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Gallery detail + claim */}
      <section className="py-40 bg-surface px-8 md:px-24">
        <div className="max-w-screen-xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-12">
          <div className="md:col-span-8">
            <img
              className="w-full aspect-[16/9] object-cover"
              src={galleryImg}
              alt="Detail struktury plátna – osnova bavlněné tkaniny a sytost inkoustu UV tisku pod lupou"
            />
          </div>
          <div className="md:col-span-4 flex flex-col justify-center space-y-8">
            <h2 className="text-4xl font-extrabold tracking-tighter leading-none">
              Detail, který <br />můžete cítit.
            </h2>
            <p className="text-on-surface-variant font-light leading-relaxed">
              Struktura plátna dodává každému motivu hloubku, kterou digitální obrazovka nikdy nenahradí. Je to hmatatelný zážitek pro vaše prostory.
            </p>
          </div>
        </div>
      </section>

      {/* Form section with decorative watermark */}
      <section className="bg-surface-container-highest py-32 px-8 md:px-24 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/2 h-full opacity-10 pointer-events-none select-none flex items-center justify-end pr-8">
          <span className="text-[20rem] font-black text-on-surface-variant tracking-tighter leading-none">
            TISK
          </span>
        </div>
        <div className="max-w-4xl relative z-10">
          <h2 className="text-4xl font-extrabold tracking-tighter mb-16 uppercase">
            Poptávkový formulář
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">

            {/* Left column */}
            <div className="space-y-10">
              <div>
                <label className="block text-[10px] uppercase tracking-widest font-bold text-primary mb-2">
                  Vaše Jméno
                </label>
                <input
                  className="w-full bg-transparent border-b border-outline-variant py-3 focus:outline-none focus:border-primary transition-colors text-on-surface placeholder:text-outline text-sm"
                  placeholder="Jan Novák"
                  type="text"
                />
              </div>
              <div>
                <label className="block text-[10px] uppercase tracking-widest font-bold text-primary mb-2">
                  E-mailová Adresa
                </label>
                <input
                  className="w-full bg-transparent border-b border-outline-variant py-3 focus:outline-none focus:border-primary transition-colors text-on-surface placeholder:text-outline text-sm"
                  placeholder="email@priklad.cz"
                  type="email"
                />
              </div>
              <div>
                <label className="block text-[10px] uppercase tracking-widest font-bold text-primary mb-2">
                  Rozměr plátna (cm)
                </label>
                <input
                  className="w-full bg-transparent border-b border-outline-variant py-3 focus:outline-none focus:border-primary transition-colors text-on-surface placeholder:text-outline text-sm"
                  placeholder="např. 120 × 80"
                  type="text"
                />
              </div>
            </div>

            {/* Right column */}
            <div className="space-y-10">
              <div>
                <label className="block text-[10px] uppercase tracking-widest font-bold text-primary mb-2">
                  Poznámka k motivu
                </label>
                <textarea
                  className="w-full bg-transparent border-b border-outline-variant py-3 focus:outline-none focus:border-primary transition-colors text-on-surface placeholder:text-outline resize-none text-sm"
                  placeholder="Popište vaši představu o tisku..."
                  rows="4"
                />
              </div>
              <div className="pt-4">
                <Link
                  to="/poptavka"
                  className="w-full precision-gradient text-white py-5 font-bold uppercase tracking-[0.2em] text-sm active:scale-[0.98] transition-transform flex justify-center items-center gap-4"
                >
                  Odeslat poptávku
                  <span
                    className="material-symbols-outlined"
                    style={{ fontVariationSettings: "'FILL' 0" }}
                  >
                    arrow_right_alt
                  </span>
                </Link>
                <p className="mt-4 text-[10px] text-on-surface-variant uppercase tracking-widest">
                  Odpovíme vám nejpozději do 24 hodin.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SEO text block */}
      <section className="py-24 px-8 md:px-24">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-black tracking-tighter mb-10">
            Tisk na plátno na míru
          </h2>
          <div className="space-y-6 text-on-surface-variant leading-relaxed">
            <p>
              Tisk na plátno je nejpřirozenější způsob, jak přenést fotografii nebo grafický motiv do fyzického prostoru s uměleckou kvalitou. Na rozdíl od papírového tisku má plátno texturu a hloubku, která na každého návštěvníka zanechá dojem.
            </p>
            <p>
              V eTiskarna tiskneme výhradně na 100% bavlněné plátno s gramáží 360 g/m². UV tiskárny vytvrzují barvu okamžitě po nanesení — odstíny jsou syté, stabilní a odolné vůči mechanickému poškození i vyblednutí. Rámy vyrábíme na míru z výběrového smrkového dřeva, takže plátno zůstane napnuté bez prohýbání.
            </p>
            <p>
              Realizujeme formáty od 20×20 cm až po několikametrová monumentální plátna. Kalkulaci připravíme do 24 hodin, dodáváme po celé ČR. Stačí zaslat grafický soubor a my zbytek zařídíme.
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
            Popište nám rozměr, motiv a počet kusů. Náš specialista vás do 24 hodin kontaktuje s kalkulací na míru.
          </p>
          <Link
            to="/poptavka"
            className="precision-gradient text-white px-12 py-5 text-sm font-bold tracking-[0.2em] uppercase active:scale-95 transition-transform inline-block"
          >
            Poptávka tisku na plátno
          </Link>
        </div>
      </section>
    </>
  );
}

export default TiskNaPlatnoDetail;
