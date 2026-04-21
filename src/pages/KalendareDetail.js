import { Link } from 'react-router-dom';
import SeoHead from '../seo/SeoHead';

const heroImg = 'https://lh3.googleusercontent.com/aida-public/AB6AXuBk35MZZqNAkTQFCUlyvUlyb3lDW0jtTGyOvup4FJEOP0WRxoR1YfxxNzwpqcG7d7cH9PeY4dYpj7zMXY4Tq4Yurl6JlkoI1AadeEALD7qYPKPTvxXEdsERkbrC7uPmyqG9qbN5aEVMxyYd_I-F1Y5TIb1064V_b1gUKSfsHjgxlvUZtE5_D3pYK17LmxztmNZLdTHIgBnwhZt0Z1eOtbjZq1pKRM8Ojkk21-BIsLk0O247o_nM-eLare8I2y7IaUzhhztEh2VWpWA';
const nastenneImg = 'https://lh3.googleusercontent.com/aida-public/AB6AXuAeZFmJrAtHS6SMtaLj1FM0ji4wdHftgoLXStztaQcBZydHCLbUp43J_YQn6NftN74194JxxENNH3OYZtc6MCNWIZXRig2fVVXwFxn13bKEWHSzQT1ilGWyr6_m8jEYgeWoIq_q81DNKX0sy4s1zj3-cu1P0vzqHsi21A8tBo9tnsF_YN-Y7cjyyEEto5Dv9S-dH76mux1FmOcPT0ccLG9s-E9ook6ZXMzpq7c4ZR06YcyV_rCdoG8SvFgUbAxWcmOj8dyT4WDbo-c';
const stolniImg = 'https://lh3.googleusercontent.com/aida-public/AB6AXuA_d8aVPK3X1E_vsLqpFwQt1S21rUBlLrQFz5jmC3AP_18Om_dFNqDF4QslVnolQQ_EA6vtfdHnnU_LTK8Hrz_x8SkYzCy9FXJ5j_uXALJVSVOxKHTgncMj4t6YILuOU8y2dwH-a_Q_Xsz3jKu4pUkPAFkyGWfoBtYp77C1h2EU-P5OWdPkQCSxoDM_vTjxofd7uMPRRT-lZc4vhf35WRRP-eAOPg-84kwRUKBhTLjiERt2LTMuf6k5Cry8NaIWwvV48gTRyL4izdw';
const dividerImg = 'https://lh3.googleusercontent.com/aida-public/AB6AXuDMiaDgSBv1Fmqb0Vs5VtE8U5jYFbp31tOu_ho2lsdzW-1LzkujV3zzygCY3zRiYjKX6KRxNs2NZSY_N67JueQWyoxeWPnDO9gcHD50twOJeZ8qWfJuV6tFtPZNbPs8capid9zDe-8wXPJ_f4nnaTYWCw0upu8dcFJYSCDn7_xnreuyGhMbKo7j_Qbacu2olv8YqtOXi9V6AUUHJnYdlz2WmeD3_38K3fyxWCqvox1WwRkLLti7wuKsbFuze0BhkSCOJqlJR0C9gQ4';

function KalendareDetail() {
  return (
    <>
      <SeoHead page="kalendare" />

      {/* Hero */}
      <section className="px-8 md:px-24 pt-32 mb-32 flex flex-col lg:flex-row items-end gap-12">
        <div className="lg:w-1/2">
          <span className="section-label text-primary mb-4 block">Kolekce 2024/25</span>
          <h1 className="text-6xl md:text-8xl font-extrabold tracking-tighter leading-none mb-8 text-on-surface">
            Kalendáře <br /> jako umění.
          </h1>
          <p className="text-lg text-on-surface-variant max-w-md leading-relaxed mb-12 font-light">
            Precizní tisk na prémiové materiály. Proměňte své momenty v architektonický prvek vašeho interiéru. Od minimalistických stolních po velkoformátové nástěnné skvosty.
          </p>
          <div className="flex gap-4">
            <Link
              to="/poptavka"
              className="precision-gradient text-white px-8 py-4 font-bold uppercase tracking-widest text-sm active:scale-95 transition-all inline-block"
            >
              Sestavit vlastní
            </Link>
            <Link
              to="/poptavka"
              className="border border-outline-variant px-8 py-4 font-bold uppercase tracking-widest text-sm hover:bg-surface-container-low transition-colors inline-block"
            >
              Vzorník papírů
            </Link>
          </div>
        </div>
        <div className="lg:w-1/2 w-full aspect-[4/5] relative">
          <img
            className="w-full h-full object-cover grayscale brightness-105"
            src={heroImg}
            alt="Nástěnný kalendář eTiskarna – minimalistický design s architektonickou fotografií"
          />
          <div className="absolute -bottom-8 -left-8 bg-surface p-8 shadow-2xl hidden md:block max-w-xs">
            <p className="text-sm font-medium leading-relaxed italic text-on-surface-variant">
              "Kvalita tisku, která dává fotografiím hloubku a papíru texturu, kterou chcete cítit."
            </p>
          </div>
        </div>
      </section>

      {/* Bento Grid Variants */}
      <section className="bg-surface-container-low py-32 px-8 md:px-24">
        <div className="max-w-screen-xl mx-auto">
          <div className="mb-16">
            <h2 className="text-4xl font-bold tracking-tight mb-4">Typologie formátů</h2>
            <div className="h-1 w-24 bg-primary" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

            {/* Nástěnné – wide */}
            <div className="md:col-span-2 bg-surface p-12 flex flex-col justify-between aspect-video relative group overflow-hidden">
              <div className="z-10">
                <h3 className="text-3xl font-extrabold mb-2 uppercase">Nástěnné</h3>
                <p className="text-on-surface-variant max-w-xs font-light">
                  Velkoformátové tisky na 250g matnou křídu s kroužkovou vazbou.
                </p>
              </div>
              <img
                className="absolute right-0 bottom-0 w-2/3 h-full object-cover grayscale opacity-20 group-hover:opacity-40 transition-opacity"
                src={nastenneImg}
                alt="Detail nástěnného kalendáře s minimalistickým layoutem"
              />
              <div className="z-10 mt-8">
                <Link
                  to="/poptavka"
                  className="text-primary font-bold uppercase tracking-widest text-xs border-b-2 border-primary pb-1"
                >
                  Zobrazit specifikaci
                </Link>
              </div>
            </div>

            {/* Stolní */}
            <div className="bg-surface p-12 flex flex-col justify-between aspect-square relative group">
              <div className="z-10">
                <h3 className="text-3xl font-extrabold mb-2 uppercase">Stolní</h3>
                <p className="text-on-surface-variant font-light">Kompaktní design pro váš pracovní prostor.</p>
              </div>
              <img
                className="absolute right-0 bottom-0 w-full h-1/2 object-cover grayscale opacity-10"
                src={stolniImg}
                alt="Stolní kalendář – elegantní dřevěný stojánek s čistou typografií"
              />
              <div className="z-10">
                <Link
                  to="/poptavka"
                  className="text-primary font-bold uppercase tracking-widest text-xs border-b-2 border-primary pb-1"
                >
                  Konfigurovat
                </Link>
              </div>
            </div>

            {/* Plánovací */}
            <div className="bg-surface p-12 flex flex-col justify-between aspect-square relative group">
              <div className="z-10">
                <h3 className="text-3xl font-extrabold mb-2 uppercase">Plánovací</h3>
                <p className="text-on-surface-variant font-light">
                  Architektonický rastr pro maximální přehlednost.
                </p>
              </div>
              <div className="z-10">
                <Link
                  to="/poptavka"
                  className="text-primary font-bold uppercase tracking-widest text-xs border-b-2 border-primary pb-1"
                >
                  Více informací
                </Link>
              </div>
            </div>

            {/* Atypická řešení – wide, dark */}
            <div className="md:col-span-2 bg-inverse-surface text-inverse-on-surface p-12 flex flex-col md:flex-row justify-between items-center gap-8">
              <div>
                <h3 className="text-3xl font-extrabold mb-2 uppercase">Atypická řešení</h3>
                <p className="text-slate-400 max-w-sm font-light">
                  Máte specifickou představu o formátu, papíru nebo vazbě? Realizujeme i ty nejnáročnější designové koncepty.
                </p>
              </div>
              <Link
                to="/poptavka"
                className="bg-surface text-on-surface px-10 py-5 font-bold uppercase tracking-widest text-sm hover:bg-primary hover:text-white transition-all inline-block"
              >
                Individuální projekt
              </Link>
            </div>

          </div>
        </div>
      </section>

      {/* Specifications + Form */}
      <section className="py-32 px-8 md:px-24">
        <div className="max-w-screen-xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-24 items-start">

          {/* Specs */}
          <div>
            <h2 className="text-5xl font-black tracking-tighter mb-12 uppercase leading-none">
              Technická <br /> preciznost
            </h2>
            <div className="space-y-12">
              {[
                {
                  num: '01',
                  title: 'Prémiové papíry',
                  text: 'Vybíráme z kolekcí Fedrigoni a Arjowiggins. Od nenatíraných texturovaných papírů po vysoce lesklé galerijní křídy.',
                },
                {
                  num: '02',
                  title: 'Vazba & Dokončení',
                  text: 'Twin-wire vazby v barvách cobalt, silver, black. Možnost parciálního laku nebo slepotisku na obálce.',
                },
                {
                  num: '03',
                  title: 'Barevná věrnost',
                  text: 'Tisk v režimu 10bit barevné hloubky zajišťuje plynulé přechody a hlubokou černou pro vaše fotografie.',
                },
              ].map(({ num, title, text }) => (
                <div key={num} className="flex gap-6">
                  <span className="text-primary font-black text-2xl">{num}</span>
                  <div>
                    <h4 className="font-bold text-xl mb-2">{title}</h4>
                    <p className="text-on-surface-variant leading-relaxed font-light">{text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Form */}
          <div className="bg-surface-container-high p-10 md:p-16">
            <h3 className="text-2xl font-bold mb-8 uppercase tracking-tight">Poptávkový formulář</h3>
            <div className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-[10px] font-bold uppercase tracking-widest text-on-surface-variant block">
                    Jméno a příjmení
                  </label>
                  <input
                    className="w-full bg-surface border-0 border-b border-outline-variant focus:ring-0 focus:border-primary p-3 placeholder:text-slate-300 text-sm"
                    placeholder="Jan Novák"
                    type="text"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] font-bold uppercase tracking-widest text-on-surface-variant block">
                    E-mail
                  </label>
                  <input
                    className="w-full bg-surface border-0 border-b border-outline-variant focus:ring-0 focus:border-primary p-3 placeholder:text-slate-300 text-sm"
                    placeholder="jan@domena.cz"
                    type="email"
                  />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-[10px] font-bold uppercase tracking-widest text-on-surface-variant block">
                  Typ kalendáře
                </label>
                <select className="w-full bg-surface border-0 border-b border-outline-variant focus:ring-0 focus:border-primary p-3 text-on-surface text-sm">
                  <option>Nástěnný (A3/A4/A2)</option>
                  <option>Stolní týdenní</option>
                  <option>Stolní čtrnáctidenní</option>
                  <option>Plánovací arch</option>
                  <option>Individuální formát</option>
                </select>
              </div>
              <div className="space-y-2">
                <label className="text-[10px] font-bold uppercase tracking-widest text-on-surface-variant block">
                  Předpokládaný náklad (ks)
                </label>
                <input
                  className="w-full bg-surface border-0 border-b border-outline-variant focus:ring-0 focus:border-primary p-3 text-sm"
                  placeholder="50"
                  type="number"
                />
              </div>
              <div className="space-y-2">
                <label className="text-[10px] font-bold uppercase tracking-widest text-on-surface-variant block">
                  Poznámka / Specifikace
                </label>
                <textarea
                  className="w-full bg-surface border-0 border-b border-outline-variant focus:ring-0 focus:border-primary p-3 placeholder:text-slate-300 resize-none text-sm"
                  placeholder="Specifikujte papír, vazbu nebo termín dodání..."
                  rows="4"
                />
              </div>
              <Link
                to="/poptavka"
                className="block w-full precision-gradient text-white py-5 font-black uppercase tracking-[0.2em] text-sm text-center active:scale-[0.98] transition-all"
              >
                Odeslat nezávaznou poptávku
              </Link>
              <p className="text-[10px] text-center text-on-surface-variant uppercase tracking-tighter">
                Odpovíme vám do 24 hodin s detailní kalkulací.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Full-bleed visual divider */}
      <section className="h-96 relative overflow-hidden">
        <img
          className="w-full h-full object-cover brightness-[0.3]"
          src={dividerImg}
          alt="Ofsetový tiskový stroj – výrobní proces v eTiskarna"
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center px-8">
            <h2 className="text-white text-4xl md:text-6xl font-black tracking-tighter uppercase mb-4">
              Kde se tisk stává řemeslem
            </h2>
            <p className="text-white/60 uppercase tracking-[0.3em] text-sm">
              Vlastní tiskárna v srdci Evropy
            </p>
          </div>
        </div>
      </section>

      {/* SEO text block */}
      <section className="py-24 px-8 md:px-24">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-black tracking-tighter mb-10">
            Tisk kalendářů na míru
          </h2>
          <div className="space-y-6 text-on-surface-variant leading-relaxed">
            <p>
              Firemní kalendář je reklamní nosič s celoroční životností — každý den leží na stole nebo visí na zdi vašeho klienta. V eTiskarna tiskneme nástěnné, stolní i plánovací kalendáře na prémiové papíry z kolekcí Fedrigoni a Arjowiggins s twin-wire vazbou v barvách cobalt, silver nebo black.
            </p>
            <p>
              Nástěnné kalendáře tiskeme na 250g matnou křídu ve formátech A2, A3 i A4. Stolní varianta je dostupná v provedení týdenním i čtrnáctidenním. Tisk probíhá v 10bitové barevné hloubce pro maximální věrnost fotografií a plynulé barevné přechody.
            </p>
            <p>
              Realizujeme i zcela atypická řešení — zakázkové formáty, speciální papíry nebo kombinované vazby. Příprava tiskových dat probíhá pod dohledem našich grafiků. Kalkulaci zašleme do 24 hodin, dodáváme po celé ČR i do zahraničí.
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
            Popište nám vaši zakázku — typ, formát, náklad a grafiku. Náš specialista vás do 24 hodin kontaktuje s kalkulací na míru.
          </p>
          <Link
            to="/poptavka"
            className="precision-gradient text-white px-12 py-5 text-sm font-bold tracking-[0.2em] uppercase active:scale-95 transition-transform inline-block"
          >
            Poptávka kalendářů
          </Link>
        </div>
      </section>
    </>
  );
}

export default KalendareDetail;
