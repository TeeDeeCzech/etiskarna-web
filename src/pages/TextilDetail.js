import { Link } from 'react-router-dom';
import SeoHead from '../seo/SeoHead';

const heroImg = 'https://lh3.googleusercontent.com/aida-public/AB6AXuBhIp0aP53uas7AGcsXwCdWmREtfvmxI_M_5fGwn-Vv0VcNJocGnmWlV78RbVhPC2a5iLK9GHCeXSOI2rthOJUCzQPb6s5lkJxzbpBwQHpVmGaAJPLf5vtIMG-oD8-FaFqpgrjReARZYyrAsVelf9lzhXDwSoPsO3T7RuDcGcF_DzbH8rG0EmAtJtt5BOx1aiav28GBfExgE_TZ8lnAJif9QZJLvCqsAI4-2mUX3MRWXmWH4-K0K_IfB3lYO7mFZ9GACgqd7mBxvR0';
const trikaCImg = 'https://lh3.googleusercontent.com/aida-public/AB6AXuDJMuc1tWCNFfoXKpgI4m0vkLEj9F9kiS3_Kb0_F2snr2HNCnOjfkRGILhz889-hGAEqE963QdR24kxgIqZi2zxYT0VQYkR8ilynOsUZycLwTlqAbevsqR9Cnp7uP2GeBzge-_ArSn6WBWJGtbFakjaSGanvBxfZl10fTPCwEgU9c4zHzWPvT6qGEUacVTsHnVfMZO4a_WY8iPIPKP2lvT9b7kCkbriM4gT7YrX01yHr0wGPDUDHRh1dr_p16uyT8xTVLrP-5LnewI';
const mikinyImg = 'https://lh3.googleusercontent.com/aida-public/AB6AXuBugvYyuQCznpS20f5jIDk46nyO1Z7bDYSQ9903L_hEedkQb1LyGkORVOPnqBOQ-JT8KP8OnjTf50m-m4bFDzmFt_XZLew01DinUTsGThuTw2CD4Gtgz4Xvh-pYtxPWLn1OXR6QzII4z8AeuEvT4CJJI0qxOmP8w1PYfby9D9Z08074wlhn2iBsIpfXxfac0z4xgJFrWK7SEzSUHIgl0wRgPwsR8KvWqZC123jR6YbPhmTRIBaNnt1pNHsicwmyt59ZyMVIFyceQ6w';
const ksiltovkyImg = 'https://lh3.googleusercontent.com/aida-public/AB6AXuC7jtbIiG73OqZA7Z9UcuPnNqH0-uf4KMq7WFiY99dIBNPO1tfu4nekgBjjbl9nmVxcHqW-QGyRTEdGpshMxO5hheUqkklPeDlh4Wl3B9nih1nyL19oSw-W7pid7Cvp5iGk1EKp89eizE_O9AkPy5CQQKSMjfWCDC9dmp8m5JF_AuQ3E-3BX9AlUj-J4664mhjl0zNGiq3SAHShoTjw0lTnE-XJo7M9LEuZldfRu78J-A9s_6nn7gGIrv929A1imNb7aQr7YzIovqM';
const ubrusyImg = 'https://lh3.googleusercontent.com/aida-public/AB6AXuBujomQtlr4vbfOyu1n8t8edvH3Aow7VtnO7nSVxeoy2wFNyTvyTxCXJAriqzSEq-UWntZeX6LYRT-l-_rhR2OmaEO23JI9hGgrjE1XsIkMwkcPCpfmrkAB5qiVCDc77extYrn46xNxER5ySxn5PxAD-13NKHCcFGQ-5gy1yP7Aes6Lcwy-23_4iG20QqCidy7SNAcTcSUSOsX89C0dA9z5z4ufpLmm3W5Uz9FDUiWzQdqC8-23xHIVDKbZ9HkO5pxLhQ4zS5RTw9M';
const detailImg = 'https://lh3.googleusercontent.com/aida-public/AB6AXuBCIlJ6oj_ZlHRmp9neqZ5dRZO3fasnPf18usPjIJjDFCTQbgvPl4HKmJs-433RAHMcWvCeG1-L_1V3jmkdhL3VqQP4hfmBVt3Yp09v8X2LZwtawe-8v79e4vilKOJgScyYlbnM3FvR4XIdnQk6LmDAs7eig7sJtN_wT96mcQ5RsSfYcUybQy8eUTseemEGlHAOHrVrnKy_HHgxp4o5kvq1TMpR0TB_mxGMduwtKoWU6rYCRMjbdapDIeIm5F-P3qN2wW8PdGWZGmw';

const products = [
  { label: 'Premium', name: 'Trika', img: trikaCImg, alt: 'Minimalistické bílé tričko s architektonickými stíny' },
  { label: 'Heavy Duty', name: 'Mikiny', img: mikinyImg, alt: 'Prémiová šedá mikina s detailem šití v ateliérovém osvětlení' },
  { label: 'Essential', name: 'Kšiltovky', img: ksiltovkyImg, alt: 'Moderní černá kšiltovka s jemnou výšivkou na podstavci' },
  { label: 'Design Home', name: 'Ubrusy', img: ubrusyImg, alt: 'Luxusní lněný ubrus s vlastním potiskem na betonovém stole' },
];

function TextilDetail() {
  return (
    <>
      <SeoHead page="textil" />

      {/* Hero – editorial asymmetric */}
      <section className="px-8 md:px-24 grid grid-cols-1 md:grid-cols-12 gap-12 items-end mb-32 pt-32">
        <div className="md:col-span-7">
          <span className="section-label text-primary mb-4 block">Kategorie / Tiskoviny</span>
          <h1 className="text-5xl md:text-7xl font-extrabold uppercase tracking-tighter leading-[0.9] mb-8">
            Textil s<br />
            <span className="text-primary">vlastním</span> potiskem.
          </h1>
          <p className="text-on-surface-variant text-lg leading-relaxed max-w-xl font-light">
            Od minimalistických triček po technické mikiny a kšiltovky. Spojujeme špičkové tiskové technologie s prémiovými materiály pro výsledek, který definuje vaši identitu.
          </p>
        </div>
        <div className="md:col-span-5 relative aspect-[4/5] overflow-hidden">
          <img
            className="w-full h-full object-cover grayscale-[0.5] hover:grayscale-0 transition-all duration-700"
            src={heroImg}
            alt="Textil s potiskem eTiskarna – makro detail sítotisku na bavlněné tkanině"
          />
          <div className="absolute bottom-0 left-0 bg-primary p-6 text-white">
            <span className="block text-2xl font-black">100%</span>
            <span className="text-xs uppercase tracking-widest font-bold">Bavlna &amp; Kvalita</span>
          </div>
        </div>
      </section>

      {/* Product Grid – 4 cards */}
      <section className="bg-surface-container-low py-32 px-8 md:px-24">
        <div className="mb-20 flex flex-col md:flex-row justify-between items-baseline gap-4">
          <h2 className="text-4xl font-extrabold uppercase tracking-tight">Portfolio textilu</h2>
          <div className="h-px flex-grow bg-outline-variant opacity-20 mx-8 hidden md:block"></div>
          <p className="text-on-surface-variant font-medium">Vyberte základ pro váš design</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-1">
          {products.map(({ label, name, img, alt }) => (
            <div key={name} className="group bg-surface h-[500px] flex flex-col relative overflow-hidden">
              <div className="p-8 z-10 bg-surface/80 backdrop-blur-sm">
                <span className="text-xs font-bold text-primary uppercase tracking-widest">{label}</span>
                <h3 className="text-2xl font-bold uppercase mt-1">{name}</h3>
              </div>
              <img
                className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                src={img}
                alt={alt}
              />
            </div>
          ))}
        </div>
      </section>

      {/* Technical Detail */}
      <section className="px-8 md:px-24 py-32 grid grid-cols-1 md:grid-cols-2 gap-24">
        <div className="order-2 md:order-1">
          <img
            className="w-full h-auto grayscale hover:grayscale-0 transition-all duration-700"
            src={detailImg}
            alt="Extrémní detail sítotisku – ostré okraje modrého inkoustu na bílé tkanině"
          />
        </div>
        <div className="flex flex-col justify-center order-1 md:order-2">
          <h2 className="text-4xl font-extrabold uppercase mb-12 leading-tight">
            Preciznost v každém vláknu.
          </h2>
          <div className="space-y-12">
            <div className="border-l-4 border-primary pl-8">
              <h4 className="text-lg font-bold uppercase mb-2">Sítotisk &amp; DTF</h4>
              <p className="text-on-surface-variant leading-relaxed text-sm font-light">
                Využíváme nejmodernější metody pro syté barvy a extrémní odolnost při praní. DTF transfer umožňuje plnobarevné fotorealistické potisky bez omezení barev.
              </p>
            </div>
            <div className="border-l-4 border-surface-container-highest pl-8">
              <h4 className="text-lg font-bold uppercase mb-2">Udržitelný textil</h4>
              <p className="text-on-surface-variant leading-relaxed text-sm font-light">
                Pracujeme výhradně s dodavateli splňujícími certifikaci GOTS a OEKO-TEX. Ekologická volba bez kompromisů na kvalitě.
              </p>
            </div>
            <div className="border-l-4 border-surface-container-highest pl-8">
              <h4 className="text-lg font-bold uppercase mb-2">Expresní dodání</h4>
              <p className="text-on-surface-variant leading-relaxed text-sm font-light">
                Vaše zakázka opouští naši tiskárnu do 48 hodin od schválení náhledu. Pro urgentní zakázky se nás nebojte kontaktovat přímo.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Configurator + Benefits */}
      <section className="px-8 md:px-24 mb-32">
        <div className="bg-surface-container-low p-12 md:p-24 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-1/3 h-full bg-primary opacity-5 transform skew-x-12 translate-x-1/2"></div>
          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-20">
            {/* Benefits */}
            <div>
              <h2 className="text-5xl font-black uppercase tracking-tighter mb-8">
                Proč eTiskarna?
              </h2>
              <p className="text-on-surface-variant text-lg mb-12 font-light">
                Máte specifickou představu nebo potřebujete poradit s výběrem materiálu? Náš tým specialistů se vám ozve s kalkulací do 24 hodin.
              </p>
              <div className="space-y-6">
                {[
                  'Kalkulace zdarma',
                  'Odborná konzultace',
                  'Množstevní slevy',
                  'Certifikace GOTS &amp; OEKO-TEX',
                ].map((item) => (
                  <div key={item} className="flex items-center gap-4">
                    <span
                      className="material-symbols-outlined text-primary"
                      style={{ fontVariationSettings: "'FILL' 1" }}
                    >
                      check_circle
                    </span>
                    <span
                      className="font-bold uppercase text-xs tracking-widest"
                      dangerouslySetInnerHTML={{ __html: item }}
                    />
                  </div>
                ))}
              </div>
            </div>

            {/* Configurator */}
            <div className="bg-white/80 backdrop-blur-xl p-8 md:p-12 shadow-2xl border border-white/20">
              <h3 className="text-xs font-black tracking-widest uppercase mb-8">Konfigurátor rychlé poptávky</h3>
              <div className="space-y-6">
                <div className="grid grid-cols-2 gap-6">
                  <div>
                    <label className="block text-[10px] uppercase tracking-widest font-bold text-on-surface-variant mb-2">Typ textilu</label>
                    <select className="w-full bg-transparent border-0 border-b-2 border-outline-variant focus:border-primary focus:ring-0 py-3 text-sm font-bold appearance-none">
                      <option>Trička</option>
                      <option>Mikiny</option>
                      <option>Kšiltovky</option>
                      <option>Ubrusy / Jiné</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-[10px] uppercase tracking-widest font-bold text-on-surface-variant mb-2">Technika tisku</label>
                    <select className="w-full bg-transparent border-0 border-b-2 border-outline-variant focus:border-primary focus:ring-0 py-3 text-sm font-bold appearance-none">
                      <option>Sítotisk</option>
                      <option>DTF Transfer</option>
                      <option>Výšivka</option>
                      <option>Sublimace</option>
                    </select>
                  </div>
                </div>
                <div>
                  <label className="block text-[10px] uppercase tracking-widest font-bold text-on-surface-variant mb-2">Počet kusů</label>
                  <input
                    type="number"
                    defaultValue="50"
                    className="w-full bg-transparent border-0 border-b-2 border-outline-variant focus:border-primary focus:ring-0 py-3 text-sm font-bold"
                  />
                </div>
                <div>
                  <label className="block text-[10px] uppercase tracking-widest font-bold text-on-surface-variant mb-2">Počet barev potisku</label>
                  <select className="w-full bg-transparent border-0 border-b-2 border-outline-variant focus:border-primary focus:ring-0 py-3 text-sm font-bold appearance-none">
                    <option>1 barva</option>
                    <option>2 barvy</option>
                    <option>3–4 barvy</option>
                    <option>Plnobarevný (CMYK / DTF)</option>
                  </select>
                </div>
                <div className="pt-4">
                  <Link
                    to="/poptavka"
                    className="w-full bg-primary text-white py-5 font-black uppercase tracking-[0.2em] text-sm hover:bg-primary-container transition-colors block text-center"
                  >
                    Odeslat poptávku
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SEO text block */}
      <section className="py-24 px-8 md:px-24">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-black tracking-tighter mb-10">
            Tisk na textil na míru
          </h2>
          <div className="space-y-6 text-on-surface-variant leading-relaxed">
            <p>
              Textil s firemním potiskem je jedním z nejefektivnějších nástrojů budování značky. V eTiskarna tiskneme na trička, mikiny, kšiltovky i bytový textil pomocí sítotisku, DTF transferu, výšivky a sublimace.
            </p>
            <p>
              Sítotisk nabízí nejlepší poměr ceny a kvality pro jednoduché motivy ve větších sériích. DTF transfer umožňuje plnobarevné fotorealistické potisky bez omezení počtu barev — ideální pro složitá loga a gradientní grafiky. Výšivka dodává produktu prémiový a trvanlivý výsledek.
            </p>
            <p>
              Pracujeme výhradně s materiály certifikovanými GOTS a OEKO-TEX. Vaše zakázka opouští naši tiskárnu do 48 hodin od schválení náhledu. Kontaktujte nás pro bezplatnou konzultaci a kalkulaci na míru.
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
            Popište nám vaši zakázku — typ textilu, techniku tisku, počet kusů a grafiku. Náš specialista vás do 24 hodin kontaktuje s kalkulací na míru.
          </p>
          <Link
            to="/poptavka"
            className="precision-gradient text-white px-12 py-5 text-sm font-bold tracking-[0.2em] uppercase active:scale-95 transition-transform inline-block"
          >
            Poptávka tisku na textil
          </Link>
        </div>
      </section>
    </>
  );
}

export default TextilDetail;
