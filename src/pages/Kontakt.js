import './Kontakt.css';
import { Helmet } from 'react-helmet-async';
import SeoHead from '../seo/SeoHead';

const localBusinessSchema = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  name: 'eTiskarna',
  url: 'https://etiskarna.cz',
  telephone: '+420773999659',
  email: 'info@etiskarna.cz',
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'Nám. Jiřího z Lobkovic 16',
    addressLocality: 'Praha 3',
    postalCode: '130 00',
    addressCountry: 'CZ',
  },
};

function Kontakt() {
  return (
    <main className="pt-32 pb-0 px-32">
      <SeoHead page="kontakt" />
      <Helmet>
        <script type="application/ld+json">{JSON.stringify(localBusinessSchema)}</script>
      </Helmet>

      {/* Hero */}
      <section className="mb-32">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end">
          <div className="lg:col-span-8">
            <span className="text-primary font-bold tracking-widest uppercase text-xs mb-4 block">Spojte se s námi</span>
            <h1 className="text-5xl lg:text-8xl font-extrabold tracking-tighter text-on-surface leading-[0.9] mb-8">
              Kontakt –<br />eTiskarna Praha 15.
            </h1>
          </div>
          <div className="lg:col-span-4 pb-4">
            <p className="text-on-surface-variant leading-relaxed max-w-sm">
              Každý projekt začíná dialogem. Řekněte nám o svých představách.
            </p>
          </div>
        </div>
      </section>

      {/* Image & Address Split */}
      <section className="mb-32">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-0">
          <div className="lg:col-span-7 bg-surface-container-low h-[600px] overflow-hidden relative">
            <img
              alt="Interiér moderního tiskového studia eTiskarna Praha – světlá místnost s tiskovým vybavením"
              className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuA6XjmG93-liRJ9Jm4JkwqYjrhJG00nWXDrPUnCc2Ax0M9HWfpcIIw2maE2barW3QQvOKlDPoxWurFjr2xceXJY6IN3CJkNJhxoCmVK2lO3RYAPafbcRzd0y_-pdnXOyhETUZmFv1rfYI8QJC--evP4BPg_hfweDyiCh9QpwJngmTrCHRlWtKftcEGYvjIVt67MQq9d62N9f63XdaO7wf0qrHLrHvJ9_T6M3ApiB7vK5Qwbey9Ld6HkRXcy-TA6WBcJHiK_eC6qO3c"
            />
            <div className="absolute inset-0 bg-primary/5"></div>
          </div>
          <div className="lg:col-span-5 bg-surface-container-highest p-12 lg:p-24 flex flex-col justify-center">
            <div className="space-y-12">
              <div>
                <h3 className="text-xs font-bold tracking-widest uppercase text-primary mb-4">Adresa</h3>
                <address className="not-italic text-2xl font-light leading-snug text-on-surface">
                  Nám. Jiřího z Lobkovic 16 <br />
                  130 00 Praha 3 <br />
                  Česká republika
                </address>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-xs font-bold tracking-widest uppercase text-primary mb-2">Telefon</h3>
                  <a className="text-lg hover:text-primary transition-colors" href="tel:+420773999659">773 999 659</a>
                </div>
                <div>
                  <h3 className="text-xs font-bold tracking-widest uppercase text-primary mb-2">Email</h3>
                  <a className="text-lg hover:text-primary transition-colors" href="mailto:info@etiskarna.cz">info@etiskarna.cz</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Form */}
      <section className="mb-32 max-w-2xl">
        <h2 className="text-3xl font-bold tracking-tight mb-8">Napište nám</h2>
        <form className="space-y-8">
          <div className="border-b border-outline-variant/40 focus-within:border-primary transition-colors py-2">
            <label className="block text-[10px] font-bold uppercase tracking-widest text-on-surface-variant mb-1">Jméno</label>
            <input
              className="w-full bg-transparent border-none p-0 text-lg placeholder:text-outline-variant focus:ring-0"
              placeholder="Jan Novák"
              type="text"
            />
          </div>
          <div className="border-b border-outline-variant/40 focus-within:border-primary transition-colors py-2">
            <label className="block text-[10px] font-bold uppercase tracking-widest text-on-surface-variant mb-1">E-mail</label>
            <input
              className="w-full bg-transparent border-none p-0 text-lg placeholder:text-outline-variant focus:ring-0"
              placeholder="jan@priklad.cz"
              type="email"
            />
          </div>
          <div className="border-b border-outline-variant/40 focus-within:border-primary transition-colors py-2">
            <label className="block text-[10px] font-bold uppercase tracking-widest text-on-surface-variant mb-1">Zpráva</label>
            <textarea
              className="w-full bg-transparent border-none p-0 text-lg placeholder:text-outline-variant focus:ring-0 resize-none"
              placeholder="Jaké jsou vaše představy?"
              rows="4"
            ></textarea>
          </div>
          <button
            className="kontakt-gradient-btn w-full py-5 text-xs font-bold tracking-[0.2em] uppercase transition-all active:scale-[0.98]"
            type="submit"
          >
            Odeslat poptávku
          </button>
        </form>
      </section>

      {/* Studio / Team */}
      <section className="bg-surface-container-low py-32">
        <div className="mb-16 flex flex-col md:flex-row justify-between items-end gap-8">
          <h2 className="text-4xl font-extrabold tracking-tighter leading-none">Za každým tiskem <br />stojí preciznost.</h2>
          <p className="text-on-surface-variant max-w-sm">Náš tým technologů a designérů dohlíží na každý detail procesu, od digitální přípravy až po finální dokončení.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-1">
          <div className="aspect-[3/4] overflow-hidden group">
            <img
              alt="Professional man in black shirt looking at high-end printed art proofs in a bright minimalist gallery setting"
              className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-1000 scale-105 group-hover:scale-100"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuC7aaZyjfxDRp8_7QvA8mrlf0FdAVXkMU8CM_G3yAgI3ZX-yHSTJc--soGwVEwe2dzfswh9STp7BLO52ntfbVfhDMQVKuKvGLZtAP0q75zoUwXTCLreUh7FiD66PVj5YGN6l3YCv6vjduOUoMkeCuNwBqFXQAa-aQmTrozTpL5cse1oqt--ECtSk9mem3PSfKqQZX6e7Wqh2u8CXvfkvmknMcFHTD6_mqDm8SAOiF33b68_-Pq9uDSg1WAl6Va3J7wuUa64uLbmh5o"
            />
          </div>
          <div className="aspect-[3/4] overflow-hidden group">
            <img
              alt="Extreme close up of high-end printing machine nozzles with cyan and magenta ink droplets on white paper substrate"
              className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-1000 scale-105 group-hover:scale-100"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuDYbfj9qqUbBlbo28Sg717DNcecAKYVOjpo8iFIfbgdUxjjlrX7ugE-7-4Vq_RJ2TltE3S3Y-k993cPDVcUoKJREPyPoSxfq6bJCxoOSVpelp5hfbbnLHaxc0L4Fdiut6bogx8P-dXkG4MDQalD0gaXg0tpO3_oyRgFc15sdLElGpbnvbqOJUowkNtcybTK21H6jfHdaghJvYtkyJDzjYJxUKWA3Whu49e4KE6B7pe4jCju25MCMAG0OrhaCgNxH3OVWBZHQLSU47s"
            />
          </div>
          <div className="aspect-[3/4] overflow-hidden group">
            <img
              alt="Modern workspace with high-end color-calibrated monitors and architectural blueprints spread across a clean white table"
              className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-1000 scale-105 group-hover:scale-100"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuB24hVn4RlcPWwqIbRO5-PiEHt6-uspWDS4zkrNgJTFP_COE3i1-qZlZhFl2Nhxnum6fRTw3kaDvxOpe1keHyqWcEZnBpZtaYVIM1f0OdyjhwMLAKr0IMLJt15Db4PYk2IUhkMormNRFlEqhI4BnHlBtD72k2HALNQcAXGneMANvlyVRiloRObyJICrXLGse3BIF5TOSg0O7Nm1_wDv50qx6PSmpH5B4T9-6nub6g6pHi96WBD2oYJPdieGPftQz-a3r3mR5jY_U4w"
            />
          </div>
        </div>
      </section>

    </main>
  );
}

export default Kontakt;
