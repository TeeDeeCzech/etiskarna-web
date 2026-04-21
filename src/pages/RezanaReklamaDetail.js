import { Link } from 'react-router-dom';
import SeoHead from '../seo/SeoHead';

const heroImg = 'https://lh3.googleusercontent.com/aida-public/AB6AXuDAG3K66YMs0Q4h71arTsocEde6fQog_x8QG8SBI7ueJNR9KzQ0F55L_ZrrBK33yDnxihaWvdtSXQ3C9XJH8auzK1UyNJjcBM6BmpDuR8S1tpt28vEzOfMGLlpqQGpTYfeSTyWsPtuK8FqLdRPSN2C2xwwySmAOJA7o1aiQaylurFhbnidmkW4rF7HiwdK8mNOqAJJ5J5mflL9zUYnikcpAdcTayo6hKvrN9Vop9Dp-SGlljAVNAQu2DqK3w8givXIMwIWN1PZZaEA';
const carImg = 'https://lh3.googleusercontent.com/aida-public/AB6AXuB6eEoZY5WMT-56curGkjS7xm1w4Hhx4JxV89kfVCP2LtQK_ejH3ZM0y4WbnnOFybrN5Vcu8aKiwPISXKtQGpnV9nLKRIxqto7JplvY9J2UbvFYbzAElVMRG50Fr-2uOanlla5lnMlEnamwVrIPo0Mh_0PaqdH-LOrmENcuEDbQmzS1Gd9nqcXJnz89xwl3Mnwdg_j0MgsyTkfeX0TtcKWrYRFKAvsesjZONudOxnEYUKaeltQrMA8Zo6ycoikYYqu3MHhxtbnlPKU';
const processImg = 'https://lh3.googleusercontent.com/aida-public/AB6AXuABRWSbXKo8AMCIUc1h2xqJMev0EFcu2l1Ywm07yx4k44-zkHqczfqnvaiWhnyfc_iOK34qvXh-9c0tr80r_5VOd2EgXhCyp68cPznP5F8MDnuakwMGCv_vojcyb-tkzEKFZxAYuPVOFN6GCcjgZS9uisXpjXXhmTNwd_v0QClxTh-uf2l45pi6y8mp9lGkZYBsVBh4bJllG4a-3bdSkr0C-ShHa7np6_bMbhvsG9zCXNi9VZ8tamJCKQr8BK-_5Zgg1EbMfvr-O3o';

function RezanaReklamaDetail() {
  return (
    <>
      <SeoHead page="rezana-reklama" />

      {/* Hero – 5/7 editorial layout */}
      <section className="px-8 md:px-24 pt-32 mb-32 grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
        <div className="lg:col-span-5 space-y-8">
          <div className="space-y-4">
            <span className="section-label text-primary block">Signmaking &amp; Reklama</span>
            <h1 className="text-6xl md:text-7xl font-extrabold tracking-tighter leading-[0.95] text-on-surface">
              Řezaná<br />reklama
            </h1>
          </div>
          <p className="text-lg leading-relaxed text-on-surface-variant max-w-md font-light">
            Plotrované samolepky pro nalepení na Vaší výlohu nebo automobil, dodáváme na přenosové fólii připravené k aplikaci. Dlouhá životnost v exteriéru.
          </p>
          <div className="flex gap-6 pt-4">
            {[
              { icon: 'check_circle', label: 'UV Odolnost' },
              { icon: 'check_circle', label: '7 let stálost' },
            ].map(({ icon, label }) => (
              <div key={label} className="flex items-center gap-3">
                <span
                  className="material-symbols-outlined text-primary"
                  style={{ fontVariationSettings: "'FILL' 0" }}
                >
                  {icon}
                </span>
                <span className="text-xs font-bold uppercase tracking-widest text-on-surface-variant">
                  {label}
                </span>
              </div>
            ))}
          </div>
        </div>
        <div className="lg:col-span-7">
          <div className="aspect-[4/5] bg-surface-container-low overflow-hidden">
            <img
              className="w-full h-full object-cover grayscale-[20%] hover:grayscale-0 transition-all duration-700"
              src={heroImg}
              alt="Prémiové bílé vinylové písmeno aplikované na skleněnou výlohu – precizní řezaná reklama eTiskarna"
            />
          </div>
        </div>
      </section>

      {/* Bento grid */}
      <section className="px-8 md:px-24 mb-32">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

          {/* Wide image – auto polep */}
          <div className="md:col-span-2 aspect-video bg-surface-container-low overflow-hidden">
            <img
              className="w-full h-full object-cover"
              src={carImg}
              alt="Moderní automobil s matným černým vinylovým polepem – řezaná reklama na karoserii"
            />
          </div>

          {/* Precision card */}
          <div className="bg-surface-container px-10 py-12 flex flex-col justify-between">
            <span
              className="material-symbols-outlined text-primary text-4xl"
              style={{ fontVariationSettings: "'FILL' 0" }}
            >
              content_cut
            </span>
            <div>
              <h3 className="text-2xl font-bold tracking-tight mb-4">Milimetrová přesnost</h3>
              <p className="text-sm text-on-surface-variant leading-relaxed uppercase tracking-wider font-light">
                Naše špičkové plotry Graphtec zajišťují dokonalý řez i těch nejmenších detailů vašeho loga či textu.
              </p>
            </div>
          </div>

          {/* Materials card */}
          <div className="bg-surface-container-highest px-10 py-12 flex flex-col justify-between">
            <span
              className="material-symbols-outlined text-primary text-4xl"
              style={{ fontVariationSettings: "'FILL' 0" }}
            >
              layers
            </span>
            <div>
              <h3 className="text-2xl font-bold tracking-tight mb-4">Prémiové fólie</h3>
              <p className="text-sm text-on-surface-variant leading-relaxed uppercase tracking-wider font-light">
                Používáme výhradně materiály Avery Dennison a Oracal s garantovanou životností 5–7 let.
              </p>
            </div>
          </div>

          {/* Wide image – process */}
          <div className="md:col-span-2 aspect-video bg-surface-container-low overflow-hidden">
            <img
              className="w-full h-full object-cover"
              src={processImg}
              alt="Technik v čistém studiu odstraňuje přebytečný vinyl z komplexní typografie pro reklamní nápis"
            />
          </div>

        </div>
      </section>

      {/* Form section */}
      <section className="px-8 md:px-24 grid grid-cols-1 lg:grid-cols-12 gap-12 items-start border-t border-outline-variant/20 pt-24 mb-24">

        {/* Sticky left info */}
        <div className="lg:col-span-4 sticky top-32">
          <h2 className="text-4xl font-bold tracking-tighter mb-6 uppercase">Poptávkový formulář</h2>
          <p className="text-on-surface-variant mb-8 uppercase text-xs tracking-widest leading-loose">
            Zašlete nám své podklady a my Vám do 24 hodin připravíme nezávaznou cenovou nabídku na míru.
          </p>
          <div className="space-y-4">
            <div className="flex items-center gap-4 text-sm font-bold text-primary">
              <span
                className="material-symbols-outlined"
                style={{ fontVariationSettings: "'FILL' 0" }}
              >
                mail
              </span>
              <span>poptavky@etiskarna.cz</span>
            </div>
            <div className="flex items-center gap-4 text-sm font-bold text-primary">
              <span
                className="material-symbols-outlined"
                style={{ fontVariationSettings: "'FILL' 0" }}
              >
                phone_iphone
              </span>
              <span>+420 777 123 456</span>
            </div>
          </div>
        </div>

        {/* Form */}
        <div className="lg:col-span-8 bg-surface-container-low p-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-2">
              <label className="text-[10px] font-extrabold uppercase tracking-[0.2em] text-on-surface-variant block">
                Jméno a příjmení
              </label>
              <input
                className="w-full bg-transparent border-0 border-b border-outline-variant focus:ring-0 focus:border-primary transition-all px-0 py-2 placeholder:text-outline/50 text-sm"
                placeholder="Jan Novák"
                type="text"
              />
            </div>
            <div className="space-y-2">
              <label className="text-[10px] font-extrabold uppercase tracking-[0.2em] text-on-surface-variant block">
                E-mail
              </label>
              <input
                className="w-full bg-transparent border-0 border-b border-outline-variant focus:ring-0 focus:border-primary transition-all px-0 py-2 placeholder:text-outline/50 text-sm"
                placeholder="vas@email.cz"
                type="email"
              />
            </div>
            <div className="space-y-2">
              <label className="text-[10px] font-extrabold uppercase tracking-[0.2em] text-on-surface-variant block">
                Rozměr (cm)
              </label>
              <input
                className="w-full bg-transparent border-0 border-b border-outline-variant focus:ring-0 focus:border-primary transition-all px-0 py-2 placeholder:text-outline/50 text-sm"
                placeholder="např. 100 × 50"
                type="text"
              />
            </div>
            <div className="space-y-2">
              <label className="text-[10px] font-extrabold uppercase tracking-[0.2em] text-on-surface-variant block">
                Barva fólie
              </label>
              <select className="w-full bg-transparent border-0 border-b border-outline-variant focus:ring-0 focus:border-primary transition-all px-0 py-2 appearance-none text-sm">
                <option>Bílá lesk</option>
                <option>Černá mat</option>
                <option>Stříbrná metalíza</option>
                <option>Speciální (do poznámky)</option>
              </select>
            </div>
            <div className="md:col-span-2 space-y-2">
              <label className="text-[10px] font-extrabold uppercase tracking-[0.2em] text-on-surface-variant block">
                Zpráva / Specifikace
              </label>
              <textarea
                className="w-full bg-transparent border-0 border-b border-outline-variant focus:ring-0 focus:border-primary transition-all px-0 py-2 placeholder:text-outline/50 resize-none text-sm"
                placeholder="Popište Váš záměr..."
                rows="4"
              />
            </div>
            <div className="md:col-span-2 pt-6">
              <Link
                to="/poptavka"
                className="precision-gradient text-white px-12 py-5 text-sm font-bold uppercase tracking-widest inline-block active:scale-[0.98] transition-transform"
              >
                Odeslat nezávaznou poptávku
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* SEO text block */}
      <section className="py-24 px-8 md:px-24">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-black tracking-tighter mb-10">
            Řezaná reklama na míru – plotrované samolepky
          </h2>
          <div className="space-y-6 text-on-surface-variant leading-relaxed">
            <p>
              Řezaná reklama patří k nejúčinnějším a nejtrvanlivějším způsobům označení prodejen, vozidel a firemních prostor. Na rozdíl od tisknutých samolepek vzniká plotrováním — řezáním fólie do přesného tvaru vašeho loga nebo textu — bez jakéhokoliv pozadí.
            </p>
            <p>
              V eTiskarna pracujeme výhradně s prémiovými fóliemi Avery Dennison a Oracal s garantovanou životností 5–7 let v exteriéru. Naše plotry Graphtec zajišťují milimetrovou přesnost i u těch nejjemnějších písmen a ornamentů. Hotovou samolepku dodáváme nalepenou na přenosové fólii připravenou k okamžité aplikaci.
            </p>
            <p>
              Realizujeme polepy výloh, fasád, automobilů, tabulí i interiérových ploch. Vybrat si můžete z desítek barev a povrchů — lesk, mat, metalíza, průhledná i reflexní fólie. Kalkulaci připravíme do 24 hodin.
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
            Popište nám rozměr, barvu fólie a místo aplikace. Náš specialista vás do 24 hodin kontaktuje s kalkulací na míru.
          </p>
          <Link
            to="/poptavka"
            className="precision-gradient text-white px-12 py-5 text-sm font-bold tracking-[0.2em] uppercase active:scale-95 transition-transform inline-block"
          >
            Poptávka řezané reklamy
          </Link>
        </div>
      </section>
    </>
  );
}

export default RezanaReklamaDetail;
