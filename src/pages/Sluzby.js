import './Sluzby.css';
import SeoHead from '../seo/SeoHead';

function Sluzby() {
  return (
    <main className="pt-24 px-32">
      <SeoHead page="sluzby" />
      {/* Hero */}
      <section className="px-8 py-32 flex flex-col items-start min-h-[716px] justify-center bg-surface">
        <div className="max-w-4xl">
          <span className="text-primary font-bold tracking-widest text-[10px] uppercase mb-4 block">Naše expertíza</span>
          <h1 className="text-7xl md:text-9xl font-extrabold tracking-tighter text-on-surface mb-8 leading-[0.9]">
            Tiskové<br /><span className="text-outline-variant">služby v Praze.</span>
          </h1>
          <p className="text-on-surface-variant text-xl leading-relaxed max-w-2xl font-light">
            Neprodáváme papír a barvu. Designujeme procesy, které vaše vize mění v hmatatelnou realitu. Od prvního náčrtu po globální fulfillment.
          </p>
        </div>
      </section>

      {/* Kreativní a grafické návrhy */}
      <section className="grid grid-cols-1 md:grid-cols-12 gap-0">
        <div className="md:col-span-7 bg-surface-container-low min-h-[600px] flex items-center justify-center p-12 order-2 md:order-1">
          <div className="max-w-md">
            <h2 className="text-4xl font-extrabold tracking-tight mb-6">Kreativní a grafické návrhy</h2>
            <p className="text-on-surface-variant mb-10 leading-relaxed font-light">Transformujeme vaše zadání do vizuálního jazyka, který rezonuje. Naše studio kombinuje technickou znalost tiskových procesů s čistou estetikou.</p>
            <a className="text-primary font-bold text-xs uppercase tracking-widest border-b-2 border-primary pb-1" href="#">Zjistit více</a>
          </div>
        </div>
        <div className="md:col-span-5 h-[400px] md:h-auto overflow-hidden order-1 md:order-2">
          <img
            className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-1000"
            alt="close-up of professional designer sketching brand identity concepts on high quality paper with architectural tools and soft morning light"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuDK3a1NETntsBprXOergBjakzGYeuR1HhXeA0P6UrXREi5FNNPYQ4FHWlWCGACDdWWDKoYfSRRy39U_alJJLiXJ0OUwOV2Xw7KNdBmmhWejHYDEiBSzq8cg7aN2pDJaR_K1zMqamaFYRhQvcGgr0tsAck3sPC5AUI_Kl55UKVwkBy6YmIFnpCRJp4yUbsWhkH7XM0_BhkUsSCqpmuQZiGAlyq2LVBCyqbnxM3YPuPC1dpkEGaDgtgBiFW29mETZI9gefcfI5oDeEOo"
          />
        </div>
      </section>

      {/* Prototypování */}
      <section className="grid grid-cols-1 md:grid-cols-12 gap-0 bg-surface">
        <div className="md:col-span-5 h-[400px] md:h-auto overflow-hidden">
          <img
            className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-1000"
            alt="high-tech 3D printing and physical prototyping workshop with clean white surfaces and blue accent lighting for precision engineering"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuBMkcGUJvoCVFsXVyCypgx94OxPf1QfMHqibgY_-TFXQjEZeQITa-iLQtCLA5tQpBCc2ZcBfFFvYe5ZeX8JhuFn5iIu0QcIJXiRcpeGbJft1BNv22Cj6Fnn3kM3o1RouxtBwdnFFdVx2IXMx5px7HXVhuLB49t8x5OnHYJ0GXhYrwcv7OFmiSQ76OH_wLgr5mebiMgajyaEddyXrb4JfXooH69SQ9smJRjeaMvXCiwse2bs-zZsvd_sBz8KLzdTtteFJiqnGJ-1r70"
          />
        </div>
        <div className="md:col-span-7 bg-surface min-h-[600px] flex items-center justify-center p-12">
          <div className="max-w-md">
            <h2 className="text-4xl font-extrabold tracking-tight mb-6">Prototypování</h2>
            <p className="text-on-surface-variant mb-10 leading-relaxed font-light">Dříve než spustíme stroje na plno, vytvoříme hmatatelný důkaz kvality. Testujeme materiály, skládané vazby i barevnou věrnost.</p>
            <a className="text-primary font-bold text-xs uppercase tracking-widest border-b-2 border-primary pb-1" href="#">Prozkoumat proces</a>
          </div>
        </div>
      </section>

      {/* Fulfillment & Kompletace */}
      <section className="relative h-[819px] flex items-center px-8 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            className="w-full h-full object-cover brightness-50 grayscale"
            alt="industrial minimalist warehouse space with neat stacks of high-end print products and soft cinematic lighting"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuCj9lmL1WbkrMXQMNhFPkv0xJRqKcq-EM7tttozkyuAYeCOqIFEnDKaLepOuT9Alg5d5Vkq1-eSYhq35S7I_6w650CVOUbYS2Pcd7XaEWz-AtfQxa6S2Jn9VxJz7iEn8a09fAAQ5bEo4ZMEqdDZHjc2212kZrQ6_t7Tembl2aM_6ElISRcBvpkwwj9LLgtOSR8sFIlbl7GnfdDue4qTCOl2FpgJOOFEr0it02brJs9F65MhLZNRR93wOc76HxNIC7qqaTvR43Dk468"
          />
        </div>
        <div className="relative z-10 max-w-2xl text-white">
          <h2 className="text-6xl font-black tracking-tighter mb-8">Fulfillment &amp; Kompletace</h2>
          <p className="text-xl font-light mb-12 text-slate-200">Vaše produkty uskladníme, zkompletujeme s vašimi vlastními výrobky a připravíme k distribuci. Logistika s elegancí tiskového archu.</p>
          <div className="flex flex-col md:flex-row gap-8">
            <div className="flex items-center gap-4">
              <span className="material-symbols-outlined text-4xl font-light">inventory_2</span>
              <span className="text-xs font-bold uppercase tracking-widest">Bezpečné sklady</span>
            </div>
            <div className="flex items-center gap-4">
              <span className="material-symbols-outlined text-4xl font-light">precision_manufacturing</span>
              <span className="text-xs font-bold uppercase tracking-widest">Manuální kompletace</span>
            </div>
          </div>
        </div>
      </section>

      {/* 3-card hover grid */}
      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-0">
        <div className="aspect-square bg-surface-container-low p-12 flex flex-col justify-between group hover:bg-primary transition-colors duration-500">
          <span className="material-symbols-outlined text-5xl text-primary group-hover:text-white transition-colors">install_desktop</span>
          <div>
            <h3 className="text-2xl font-bold mb-4 group-hover:text-white transition-colors">Instalace</h3>
            <p className="text-sm font-light leading-relaxed group-hover:text-white/80 transition-colors">Nenecháváme nic náhodě. Naši specialisté zajistí perfektní aplikaci tiskovin přímo na místě.</p>
          </div>
        </div>
        <div className="aspect-square bg-surface-container-highest p-12 flex flex-col justify-between group hover:bg-primary transition-colors duration-500">
          <span className="material-symbols-outlined text-5xl text-primary group-hover:text-white transition-colors">campaign</span>
          <div>
            <h3 className="text-2xl font-bold mb-4 group-hover:text-white transition-colors">Komplexní kampaně</h3>
            <p className="text-sm font-light leading-relaxed group-hover:text-white/80 transition-colors">Propojujeme váš svět s naším. Kompletujeme tiskové materiály s vašimi produkty do finálních balíčků.</p>
          </div>
        </div>
        <div className="aspect-square bg-surface p-12 flex flex-col justify-between group hover:bg-primary transition-colors duration-500 border border-surface-container-low">
          <span className="material-symbols-outlined text-5xl text-primary group-hover:text-white transition-colors">mail</span>
          <div>
            <h3 className="text-2xl font-bold mb-4 group-hover:text-white transition-colors">Rozesílání na adresy</h3>
            <p className="text-sm font-light leading-relaxed group-hover:text-white/80 transition-colors">Šetříme váš čas. Distribuujeme hotové zakázky přímo vašim koncovým zákazníkům nebo na pobočky.</p>
          </div>
        </div>
      </section>

      {/* Nestandardní výroba */}
      <section className="py-32 px-8 bg-surface-container-low">
        <div className="grid grid-cols-1 md:grid-cols-12 items-center gap-16">
          <div className="md:col-span-5">
            <h2 className="text-5xl font-black tracking-tighter mb-8 leading-tight">Nestandardní výroba</h2>
            <p className="text-on-surface-variant text-lg font-light mb-12">Když technologie nestačí, nastupuje rukodělná práce. Kombinujeme laserový výsek, ruční vlepování, kašírování a netradiční materiály pro projekty, které nemají hranice.</p>
            <div className="space-y-4">
              <div className="flex items-center gap-4 text-primary">
                <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>check_circle</span>
                <span className="font-bold text-xs uppercase tracking-widest text-on-surface">Kombinované technologie</span>
              </div>
              <div className="flex items-center gap-4 text-primary">
                <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>check_circle</span>
                <span className="font-bold text-xs uppercase tracking-widest text-on-surface">Exkluzivní materiály</span>
              </div>
              <div className="flex items-center gap-4 text-primary">
                <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>check_circle</span>
                <span className="font-bold text-xs uppercase tracking-widest text-on-surface">Umělecký přístup</span>
              </div>
            </div>
          </div>
          <div className="md:col-span-7">
            <div className="bg-white p-2 shadow-2xl">
              <img
                className="w-full grayscale hover:grayscale-0 transition-all duration-700"
                alt="meticulous hand-crafted binding process with premium textures and gold foil stamping in a bright professional print atelier"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCuqigNOUscD87yxIcZzuVf2KhU4oKK4jCpS6rTX-nt4DV4mze-VsCUlghL1vDa3TcL87ql-eUlsIgyxlP4TA24KwJqRip7J0F6QWT5OriAk3MRWsiUOK8poDEmXk6I4db69gPHleB0M_GFi290GLtCoQDaG5rQ4OsRpDgZQtO-67210VHjwzsXyh0kCli9lqKP0McvTpg_NVAh-AaDDVfjD1rhaWBoncNCltsQjbqImQ4KFmqjV4bkEqxCYDhARcnXVZEI7otne9c"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-40 px-8 flex flex-col items-center text-center bg-primary text-white">
        <h2 className="text-5xl md:text-7xl font-black tracking-tighter mb-12">Jste připraveni tvořit?</h2>
        <button className="bg-white text-primary px-16 py-6 font-bold text-sm tracking-[0.2em] uppercase hover:scale-105 transition-transform">
          Poptat individuální servis
        </button>
      </section>
    </main>
  );
}

export default Sluzby;
