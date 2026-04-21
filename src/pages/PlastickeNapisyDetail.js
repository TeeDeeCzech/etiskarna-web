import { Link } from 'react-router-dom';
import SeoHead from '../seo/SeoHead';

const heroImg = 'https://lh3.googleusercontent.com/aida-public/AB6AXuCpUnPQkHzfRVWXOh7jGoPciIFpqjir0iJRGPv0qAOtP5gLyQ486i79IpFSI0MYs4Lz1vRpS0q0N0duG7msc49vhI-HHYfBLs4YQVVlIg1KI0IEYUJMkaAC3q3P88Me5NACumxT0lZfCBMezU-k2htjIgUqC-3FlkJB039D0cXpYgn0b-DfulUqtruc969w-VELCF9eHnv83Qc-ijccR6UlhoL8VEe3h3ldR-mxO8Gz5Mg6EQq7fssH983Fa5yqpG_GZ-pdCWVgzo0';
const techImg = 'https://lh3.googleusercontent.com/aida-public/AB6AXuCNeOpUIAdMvXRCYk8sf1mqDK6xKLCIt7cEP_EUVz9N3TjHDYXnj3StcDtAiMjVGv82VKQg05T1GWsq-1xUMz2v4wAoxTiSaeOpNiRepx8rwrKU2dHj7biz906yU_gA7U-nDht7E3ZpBbpzphmUN4R_OkIy4XdSozrtW5v-ppHaVkza-1NWL_DLyn94Cx4pWFHyI9YQhOqKMgss04c4Kd8iREpAWODugVV_SxwIUiYU8mDq-uxk_RQkaHGTRdaNOmOQoX9rWeQgDjU';

const portfolio = [
  {
    img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBcnQB-PRzc6HnbXJj77dwSSaojN8weoEfVDsrKxA1QmWdXl2ukX90v-k2fJ9gfliKKPHrqSIAi_dFbwMxDUqdSoZj0BhDO4xFkuTeY-ls_ORWcLzuDLt2HGhnEp7fvSJtxtDAL3qmbGLtlKn0tYiSx70Q-H8E3YLa3IBWYjDdW0iyGwO-DH2idnynuf6K3OUyvjSkuM-fCtwrYAgK-hoH9v78mcy2emhfMsaTCIj2Of6HtfCUa2QnK7QTXJ8a7B007jhnjIi7M5RM',
    alt: 'Detailní instalace 3D písmene z černého akrylátu',
    title: 'Office Branding',
    sub: 'Matný černý akrylát',
  },
  {
    img: heroImg,
    alt: 'Moderní 3D logo v kancelářském prostoru',
    title: 'Prémiová recepce',
    sub: 'Kovový Dibond s kartáčovaným efektem',
  },
  {
    img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAG3buboBk9Sl7VtqmFWvkqQN9ro_HAjKj4Hjeg4ghMR_dhao8zZOASwuuTbF_x7y-SLMFS_rrRrJjMXJKn_RS6pcImNfNPRUWeJbHpJG3QQcrbP4z0QioyerSuLd__MjtTntQcO44ssWvckP_LF2VTFAUaz5zWjqkCD4DgaHRyC7LSolaQeo0RVC9r65zsGXfZ6KSUx46O6tX11Q1Eyol0JjQT655TO4QZsPp8ykGxVRB5S4kIZn6bSxC2wIc2_Ybakeik--q_2ds',
    alt: '3D cyan nápis v minimalistickém retailovém designu',
    title: 'Retail Design',
    sub: 'Vrstvené barevné PVC',
  },
];

const steps = [
  {
    num: '01',
    title: 'Frézování',
    text: 'Digitálně řízený proces ořezu z pevných deskových materiálů dle vašich tiskových dat s milimetrovou přesností.',
  },
  {
    num: '02',
    title: 'Ruční začištění',
    text: 'Každý kus prochází finální kontrolou a manuálním opracováním hran pro dosažení dokonale hladkého povrchu.',
  },
  {
    num: '03',
    title: 'Instalace',
    text: 'Montáž realizujeme pomocí přesné šablony, která zaručuje identický rozestup a geometrickou rovinu všech prvků.',
  },
];

const finishes = [
  { label: 'Čelní UV tisk (CMYK)', icon: 'print' },
  { label: 'Lakování (RAL)', icon: 'format_paint' },
  { label: 'Čisté frézování bez potisku', icon: 'architecture' },
];

const materials = [
  { num: '01', label: 'PVC desky' },
  { num: '02', label: 'Dibond (Hliník)' },
  { num: '03', label: 'KAPA plast' },
  { num: '04', label: 'Akrylát / Plexi' },
];

function PlastickeNapisyDetail() {
  return (
    <>
      <SeoHead page="3d-napisy" />

      {/* Hero – full-height dark with bottom text */}
      <section className="relative w-full min-h-[819px] flex flex-col justify-end overflow-hidden bg-slate-950">
        <div className="absolute inset-0">
          <img
            className="w-full h-full object-cover brightness-90"
            src={heroImg}
            alt="Architektonické 3D logo eTiskarna v moderní recepci"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-950/40 to-transparent" />
        </div>
        <div className="relative z-10 p-12 md:p-24 bg-gradient-to-t from-surface via-surface/40 to-transparent">
          <h1 className="text-6xl md:text-8xl font-extrabold tracking-tighter text-on-surface leading-none mb-4">
            Plastické<br />3D nápisy
          </h1>
          <p className="text-on-surface-variant max-w-xl text-lg leading-relaxed font-light">
            Architektonická čistota definovaná třetím rozměrem. Precizní realizace pro exteriéry i prémiové interiéry s důrazem na texturu a hloubku.
          </p>
        </div>
      </section>

      <main className="px-8 md:px-24">

        {/* Technology & Precision */}
        <section className="py-24 grid grid-cols-1 md:grid-cols-12 gap-12 items-center">
          <div className="md:col-span-5">
            <span className="text-primary font-bold tracking-widest text-xs uppercase mb-4 block">Technologie</span>
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-on-surface mb-8 leading-tight">
              Švýcarská preciznost Zünd G3
            </h2>
            <div className="space-y-6 text-on-surface-variant font-light leading-relaxed text-lg">
              <p>
                Využíváme špičkový strojní park v čele se systémem{' '}
                <span className="text-on-surface font-semibold">Zünd G3 3XL</span>. Tato švýcarská technologie umožňuje tvarový ořez s mikroskopickou přesností.
              </p>
              <p>
                Frézujeme plastická písmena a loga s plasticitou v rozmezí{' '}
                <span className="text-on-surface font-semibold text-2xl block mt-2">3–19 mm</span>.
                Zaměřujeme se na dokonalé podání hran, které vyniknou při bočním osvětlení.
              </p>
            </div>
          </div>
          <div className="md:col-span-7 bg-surface-container-low overflow-hidden">
            <img
              className="w-full h-auto object-cover grayscale-[0.2] hover:grayscale-0 transition-all duration-500"
              src={techImg}
              alt="Pohled na strukturu a hloubku 3D písma"
            />
          </div>
        </section>

        {/* Portfolio */}
        <section className="py-24">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
            <div>
              <span className="text-primary font-bold tracking-widest text-xs uppercase mb-4 block">Portfolio</span>
              <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-on-surface">Realizace v interiéru</h2>
            </div>
            <p className="text-on-surface-variant font-light max-w-md">
              Prohlédněte si naše instalace v moderních kancelářích a showroomech, kde architektonické 3D prvky definují identitu značky.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {portfolio.map(({ img, alt, title, sub }) => (
              <div key={title} className="group overflow-hidden bg-surface-container">
                <div className="aspect-[4/3] overflow-hidden">
                  <img
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    src={img}
                    alt={alt}
                  />
                </div>
                <div className="p-6">
                  <h4 className="font-bold text-lg mb-1">{title}</h4>
                  <p className="text-sm text-on-surface-variant uppercase tracking-wider">{sub}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Process Bento */}
        <section className="py-24">
          <h3 className="text-3xl font-bold tracking-tight mb-16 border-l-4 border-primary pl-6">Postup výroby</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-1">
            {steps.map(({ num, title, text }, i) => (
              <div
                key={num}
                className={`bg-surface-container-lowest p-12 flex flex-col gap-8 group ${i === 1 ? 'border-x border-surface-container' : ''}`}
              >
                <span className="text-6xl font-extrabold text-surface-container-highest group-hover:text-primary transition-colors duration-500">
                  {num}
                </span>
                <div>
                  <h4 className="text-xl font-bold mb-4 uppercase tracking-wider">{title}</h4>
                  <p className="text-on-surface-variant font-light leading-relaxed">{text}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Materials & Customization */}
        <section className="py-24 grid grid-cols-1 md:grid-cols-2 gap-24">
          <div>
            <h3 className="text-3xl font-bold tracking-tight mb-12">Možnosti úpravy</h3>
            <div className="space-y-4">
              {finishes.map(({ label, icon }) => (
                <div
                  key={icon}
                  className="p-8 bg-surface-container-lowest flex items-center justify-between border-b-2 border-surface-container hover:border-primary transition-colors"
                >
                  <span className="text-lg font-medium">{label}</span>
                  <span
                    className="material-symbols-outlined text-primary"
                    style={{ fontVariationSettings: "'FILL' 0" }}
                  >
                    {icon}
                  </span>
                </div>
              ))}
            </div>
          </div>
          <div>
            <h3 className="text-3xl font-bold tracking-tight mb-12">Materiály</h3>
            <div className="grid grid-cols-2 gap-4">
              {materials.map(({ num, label }) => (
                <div
                  key={num}
                  className="aspect-square bg-surface-container-low p-8 flex flex-col justify-end hover:bg-surface-container-high transition-colors"
                >
                  <span className="text-sm font-bold uppercase tracking-widest text-primary mb-2">{num}</span>
                  <h5 className="text-lg font-bold">{label}</h5>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Inquiry Form – dark panel */}
        <section className="py-32 bg-on-primary-fixed text-surface p-12 md:p-24 mb-24">
          <div className="max-w-4xl mx-auto">
            <div className="mb-16">
              <h2 className="text-4xl md:text-6xl font-extrabold tracking-tighter mb-6">Poptat řešení</h2>
              <p className="text-primary-fixed-dim text-lg font-light opacity-80">
                Popište nám svůj projekt a my navrhneme optimální technologický postup pro vaše 3D označení.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <div className="flex flex-col gap-2">
                <label className="text-xs uppercase tracking-widest font-bold opacity-60">Jméno a Příjmení</label>
                <input
                  className="bg-transparent border-0 border-b border-surface-container-highest focus:ring-0 focus:border-primary-fixed px-0 py-4 transition-all outline-none text-sm"
                  type="text"
                />
              </div>
              <div className="flex flex-col gap-2">
                <label className="text-xs uppercase tracking-widest font-bold opacity-60">E-mail</label>
                <input
                  className="bg-transparent border-0 border-b border-surface-container-highest focus:ring-0 focus:border-primary-fixed px-0 py-4 transition-all outline-none text-sm"
                  type="email"
                />
              </div>
              <div className="flex flex-col gap-2 md:col-span-2">
                <label className="text-xs uppercase tracking-widest font-bold opacity-60">Specifikace (materiál, rozměry, tloušťka)</label>
                <textarea
                  className="bg-transparent border-0 border-b border-surface-container-highest focus:ring-0 focus:border-primary-fixed px-0 py-4 transition-all outline-none resize-none text-sm"
                  rows="4"
                />
              </div>
              <div className="md:col-span-2 pt-8">
                <Link
                  to="/poptavka"
                  className="w-full md:w-auto bg-primary text-surface px-12 py-5 font-bold uppercase tracking-widest inline-flex items-center justify-center gap-4 active:scale-[0.98] transition-transform text-sm"
                >
                  Odeslat nezávaznou poptávku
                  <span
                    className="material-symbols-outlined"
                    style={{ fontVariationSettings: "'FILL' 0" }}
                  >
                    arrow_forward
                  </span>
                </Link>
              </div>
            </div>
          </div>
        </section>

      </main>
    </>
  );
}

export default PlastickeNapisyDetail;
