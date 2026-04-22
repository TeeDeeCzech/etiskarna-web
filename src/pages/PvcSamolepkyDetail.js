import { Link } from 'react-router-dom';
import SeoHead from '../seo/SeoHead';
import MobileBottomNav from '../components/MobileBottomNav';

const heroImg = 'https://lh3.googleusercontent.com/aida-public/AB6AXuDUFD_FbSxFtRnPECJVdyNqnN2dkREkTocUXUfSpfMDk3X6wVKrskpdTw0lAb7wBBMvJaiyZ6WPJSV45N5FqhTTpkNHt6Q9dDQqcF6uXkUimzfERBUPyfrJL4-oOLXfuy3R8Knl6GDg9Dgfh_-mfkrHGhoe_fhGrpgyuvtQb_uUl3HUOFKx4ZjzvZOJDxO8cNySbWZiIGgJYUGvIULbk5w8BG9e4O4tSJqNrRcUbyij_sCux8EBAv6zXYqqrsK6e478L6ctQuUvRb4';
const applicationImg = 'https://lh3.googleusercontent.com/aida-public/AB6AXuCgYd1QyyznNBY4FDth9ZM1b27sVKj0penParwPBhGapYfD0zxTBPUod8MsU8VmU7rHN67_rtK0rKZ0KNI8U-3suUyQ6AeC0IEfXSbMabrl9snKCguW_HSzzbnq8dE--TS5uL1WeU7yYjN17GuITKpH9Q8Yl7HGNzoPFkUCrbnNv9BLH-lcmRmBrYwGRNFz4FMEQ9PwXQlr2kvTgn1fZlBDxYl7STt87VJgA41lT8xgacx2rRPqOoXu0LjrGXnTKzPaIbr3R6cUxdc';
const bentoImg1 = 'https://lh3.googleusercontent.com/aida-public/AB6AXuBU8PhCzjccIwNlBrxP2tvfjNoXbZjz8e_RTW6XRAjVsu9fRnpxzqsadjwo3D1cmpnJs0xdQQ0yih-0uuVwKnJj5sUpd7awDc1OR9o83RCS3MFr98_XlarMT6ktEREPgO6P0vGP84rNQCdHFmH0fIT-NDFwbRlpX35zYFyCcUya5Euc59dDab3x6UkCiwp_G72YuAVCgJV3QYDTmdG_5Kj5aOEelIf-g-ldYImjL8CeOEmdpTw7kim3T6VdLTLBpFU7qxpFC2m1Mho';
const bentoImg2 = 'https://lh3.googleusercontent.com/aida-public/AB6AXuBDrSzpCOe0XGbFuFO1XZnSvXfqeZ2XmWaenqQHdfdEW-kCZ3haki96aOC-vhteDKZKJp7FugS35GdAtReOafylD-8_LASEa6lOM-7FQLd-nS6GOQ26SOsvQJI6gTpu6j6tIxwEM0JsuxpuOD_JbEY7I-8J8wgVGmECyTcOw1ngdBD8kKZ8wq_4N7_PruzBLjdAE8uE5YBKS91c5R67MMXY1hGSCqtMsaeaC-vGU6pwh3Vd0Cz8eRlLjCdijrQ0WCpUGlmVOrRqQw0';
const bentoImg3 = 'https://lh3.googleusercontent.com/aida-public/AB6AXuA1Po_ibwivgESNLnwn4SU3wjUbBchXK6cDymXH5FcZrWfGTmKg8SiPNIu17lI60xX_zTektGUUELD9yIaOUPiYOA72pMVOAUTgdGLXXMShi9nwzSNMqJGA9unULiAuXlyfMMpGq4EcZqFqn-4J27VZddp1IoPJu1GLK2YOJZnbqIO_yKFbIwOsO1nSK41hqwZjPCCkzvqhtMxvegc6X8xrSDbrjKNxE8DJbwJaFvDsf98sQ7oiO-2x7DI4iJU02mIxgtJnGawKC84';

function PvcSamolepkyDetail() {
  return (
    <>
      <SeoHead page="pvc-samolepky" />

      {/* Hero – image left, text right */}
      <section className="px-8 md:px-24 pt-32 grid grid-cols-1 lg:grid-cols-12 gap-12 items-start mb-32">
        <div className="lg:col-span-7 relative">
          <div className="w-full aspect-[4/5] bg-surface-container-low overflow-hidden">
            <img
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
              src={heroImg}
              alt="PVC samolepky eTiskarna – UV tisk na vinylovou fólii na betonové fasádě"
            />
          </div>
          <div className="absolute bottom-8 right-0 md:-mr-8 w-44 h-44 bg-primary p-6 flex flex-col justify-end hidden md:flex">
            <span className="text-white font-black text-4xl leading-none tracking-tighter">UV<br />PRINT</span>
          </div>
        </div>
        <div className="lg:col-span-5 pt-4 lg:pt-12">
          <span className="section-label text-primary">Kategorie / Tiskoviny</span>
          <h1 className="text-6xl md:text-7xl font-extrabold tracking-tighter leading-[0.9] mb-8 text-on-surface">
            PVC<br />samolepky.
          </h1>
          <p className="text-lg text-on-surface-variant leading-relaxed font-light mb-10 max-w-md">
            Plastové samolepky navržené pro extrémní podmínky. UV tisk zajišťuje dlouhou životnost v exteriéru při přímém slunečním záření i vlhkosti — od drobných štítků po velkoformátové aplikace a polepy vozidel.
          </p>
          <div className="grid grid-cols-2 gap-4">
            <div className="bg-surface-container-low p-6 flex flex-col gap-2">
              <span
                className="material-symbols-outlined text-primary"
                style={{ fontVariationSettings: "'FILL' 0" }}
              >
                wb_sunny
              </span>
              <span className="font-bold text-sm uppercase tracking-wider">UV stálost</span>
            </div>
            <div className="bg-surface-container-low p-6 flex flex-col gap-2">
              <span
                className="material-symbols-outlined text-primary"
                style={{ fontVariationSettings: "'FILL' 0" }}
              >
                water_drop
              </span>
              <span className="font-bold text-sm uppercase tracking-wider">Voděodolné</span>
            </div>
          </div>
        </div>
      </section>

      {/* Specs + Gallery */}
      <section className="px-8 md:px-24 grid grid-cols-1 lg:grid-cols-2 gap-24 mb-32">
        <div className="space-y-16">
          <div>
            <h2 className="text-4xl font-bold tracking-tight mb-8">Specifikace materiálu.</h2>
            <div className="divide-y divide-surface-variant">
              {[
                { label: 'Materiál', value: 'PVC Vinyl (Bílý / Čirý)' },
                { label: 'Povrch', value: 'Lesk / Mat / UV Laminace' },
                { label: 'Technologie', value: 'Digitální UV tisk' },
                { label: 'Odolnost', value: '3–5 let v exteriéru' },
                { label: 'Typ fólie', value: 'Monomer / Polymer / Litá' },
              ].map(({ label, value }) => (
                <div key={label} className="py-6 flex justify-between items-center">
                  <span className="text-on-surface-variant uppercase tracking-widest text-xs">{label}</span>
                  <span className="font-bold text-sm text-right">{value}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="relative overflow-hidden group">
            <img
              className="w-full aspect-video object-cover"
              src={applicationImg}
              alt="Aplikace barevných PVC samolepek na skleněné dveře moderní kanceláře"
            />
            <div className="absolute inset-0 bg-primary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
          </div>
        </div>

        {/* Configurator */}
        <div className="bg-surface-container p-12 lg:p-16">
          <h3 className="text-3xl font-bold tracking-tight mb-12">Konfigurátor rychlé poptávky</h3>
          <div className="space-y-8">
            <div className="space-y-2">
              <label className="text-[10px] uppercase tracking-[0.2em] font-bold text-on-surface-variant">Typ fólie</label>
              <select className="w-full bg-transparent border-0 border-b border-outline-variant focus:ring-0 focus:border-primary py-4 px-0 font-bold appearance-none text-sm">
                <option>PVC Monomer (krátkodobé, interiér)</option>
                <option>PVC Polymer (dlouhodobé, exteriér)</option>
                <option>PVC Litá (polepy vozidel)</option>
                <option>Transparentní PVC (průhledný podklad)</option>
              </select>
            </div>
            <div className="grid grid-cols-2 gap-8">
              <div className="space-y-2">
                <label className="text-[10px] uppercase tracking-[0.2em] font-bold text-on-surface-variant">Šířka (mm)</label>
                <input
                  type="number"
                  placeholder="100"
                  className="w-full bg-transparent border-0 border-b border-outline-variant focus:ring-0 focus:border-primary py-4 px-0 font-bold text-sm"
                />
              </div>
              <div className="space-y-2">
                <label className="text-[10px] uppercase tracking-[0.2em] font-bold text-on-surface-variant">Výška (mm)</label>
                <input
                  type="number"
                  placeholder="100"
                  className="w-full bg-transparent border-0 border-b border-outline-variant focus:ring-0 focus:border-primary py-4 px-0 font-bold text-sm"
                />
              </div>
            </div>
            <div className="space-y-2">
              <label className="text-[10px] uppercase tracking-[0.2em] font-bold text-on-surface-variant">Počet kusů</label>
              <input
                type="number"
                defaultValue="100"
                className="w-full bg-transparent border-0 border-b border-outline-variant focus:ring-0 focus:border-primary py-4 px-0 font-bold text-sm"
              />
            </div>
            <div className="space-y-2">
              <label className="text-[10px] uppercase tracking-[0.2em] font-bold text-on-surface-variant">Povrch</label>
              <select className="w-full bg-transparent border-0 border-b border-outline-variant focus:ring-0 focus:border-primary py-4 px-0 font-bold appearance-none text-sm">
                <option>Lesk</option>
                <option>Mat</option>
                <option>UV Laminace</option>
              </select>
            </div>
            <div className="pt-4">
              <Link
                to="/poptavka"
                className="w-full bg-primary text-white py-6 font-black uppercase tracking-widest text-sm hover:bg-primary-container transition-colors block text-center"
              >
                Odeslat nezávaznou poptávku
              </Link>
              <p className="text-[10px] text-on-surface-variant text-center opacity-60 mt-4">
                Odpovíme vám s přesnou kalkulací do 24 hodin.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Application Bento */}
      <section className="px-8 md:px-24 mb-32">
        <div className="flex justify-between items-end mb-16">
          <h2 className="text-5xl font-extrabold tracking-tighter">
            Možnosti<br />aplikace.
          </h2>
          <div className="hidden md:block w-48 h-px bg-surface-variant"></div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <div className="md:col-span-2 bg-surface-container-low aspect-video relative overflow-hidden group">
            <img
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              src={bentoImg1}
              alt="Velkoformátová exteriérová grafika z PVC fólie na průmyslové stěně"
            />
            <div className="absolute bottom-6 left-6 text-white font-bold uppercase text-xs tracking-widest">Exteriérová grafika</div>
          </div>
          <div className="bg-surface-container-low aspect-square relative overflow-hidden group">
            <img
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              src={bentoImg2}
              alt="Transparentní PVC samolepka s bílým tiskem na skleněné lahvi"
            />
            <div className="absolute bottom-6 left-6 text-white font-bold uppercase text-xs tracking-widest">Transparentní tisk</div>
          </div>
          <div className="bg-surface-container-low aspect-square relative overflow-hidden group">
            <img
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              src={bentoImg3}
              alt="Polep firemního vozidla z vysoce výkonné PVC fólie s čistým logem"
            />
            <div className="absolute bottom-6 left-6 text-white font-bold uppercase text-xs tracking-widest">Polepy vozidel</div>
          </div>
        </div>
      </section>

      {/* SEO text block */}
      <section className="py-24 px-8 md:px-24">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-black tracking-tighter mb-10">
            PVC samolepky na míru
          </h2>
          <div className="space-y-6 text-on-surface-variant leading-relaxed">
            <p>
              PVC samolepky jsou univerzálním řešením pro venkovní i vnitřní označení, reklamní polepy a produktové etikety. V eTiskarna tiskneme samolepky digitálním UV tiskem na vinylové fólie v bílém i transparentním provedení.
            </p>
            <p>
              Nabízíme tři typy fólie: PVC Monomer pro krátkodobé interiérové aplikace, PVC Polymer pro dlouhodobé exteriérové použití odolávající 3–5 let, a PVC Litou fólii pro polepy vozidel. Povrch lze dokončit lesklou, matnou nebo UV laminací pro maximální ochranu tisku.
            </p>
            <p>
              Samolepky vyrábíme v libovolných rozměrech — od malých štítků po velkoformátové okenní a fasádní grafiky. Digitální výsek umožňuje tvarový ořez bez nutnosti výroby raznice, i pro malé série.
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
            Popište nám vaši zakázku — typ fólie, rozměry, počet kusů a povrchovou úpravu. Náš specialista vás do 24 hodin kontaktuje s kalkulací na míru.
          </p>
          <Link
            to="/poptavka"
            className="precision-gradient text-white px-12 py-5 text-sm font-bold tracking-[0.2em] uppercase active:scale-95 transition-transform inline-block"
          >
            Poptávka PVC samolepek
          </Link>
        </div>
      </section>
      <MobileBottomNav />
    </>
  );
}

export default PvcSamolepkyDetail;
