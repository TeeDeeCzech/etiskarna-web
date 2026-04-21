import { useState } from 'react';
import './Poptavka.css';
import SeoHead from '../seo/SeoHead';

function Poptavka() {
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);
  const [fileName, setFileName] = useState('');

  async function handleSubmit(e) {
    e.preventDefault();
    const formData = new FormData(e.target);
    formData.set('_subject', 'Nová poptávka z etiskarna.cz');
    formData.set('_captcha', 'false');
    formData.set('_template', 'table');
    formData.set('_replyto', formData.get('email'));

    setLoading(true);
    setSuccess(false);
    setError(false);

    try {
      const response = await fetch('https://formsubmit.co/ajax/tomas@etiskarna.cz', {
        method: 'POST',
        headers: { 'Accept': 'application/json' },
        body: formData,
      });
      if (response.ok) {
        setSuccess(true);
        setFileName('');
        e.target.reset();
      } else {
        setError(true);
      }
    } catch {
      setError(true);
    } finally {
      setLoading(false);
    }
  }

  return (
    <main className="pt-32 pb-24 px-32">
      <SeoHead page="poptavka" />
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-24">

        {/* Contextual Info / Hero */}
        <div className="lg:w-1/3 flex flex-col justify-start">
          <span className="text-primary font-bold tracking-[0.2em] uppercase text-xs mb-6">Nezávazná poptávka</span>
          <h1 className="text-5xl md:text-6xl font-extrabold tracking-tighter text-on-surface leading-[1.1] mb-8">
            Váš projekt v nejvyšší kvalitě.
          </h1>
          <p className="text-on-surface-variant text-lg leading-relaxed font-light mb-12">
            Vyplňte formulář a náš specialista vás bude kontaktovat s precizně zpracovanou kalkulací do 24 hodin. Spojujeme technologickou přesnost s vizionářským přístupem.
          </p>
          <div className="bg-surface-container-low p-8 border-l-4 border-primary">
            <p className="text-on-surface font-semibold mb-2 italic">"Kvalita tisku je vizitkou vaší značky. My se postaráme, aby byla bezchybná."</p>
            <p className="text-on-surface-variant text-sm">— Tým eTiskarna</p>
          </div>
          <div className="mt-16 grid grid-cols-2 gap-8 opacity-40 grayscale">
            <div className="h-16 flex items-center justify-center">
              <img
                alt="Fedex logo"
                className="h-6"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDIdLgYPxedLdR3Isct6uPqI5GZHG819CgQArVbVvmOJQbNm9KDTSmCITVe5dLaX8xMYZJuV_Ig2xpy5dew_PeP3S_Q5me0Ace_UqV74oD9nugx3V5Ya_9TRvwmwgKA6toTRahPNxJ6mJtD4O_v4vIcesJvKB5DinylDNSsVr7Gxg7umglvf_hnwCLxxjmqHtJ5cThoffLqHjBl4tA84ChGmGdZIaqPNhkhRSmkuUTp-WG4jifu0OGjTJ8X_4EuEYeyGNO98C6HC_4"
              />
            </div>
            <div className="h-16 flex items-center justify-center">
              <img
                alt="Adobe logo"
                className="h-8"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuB4ml81kc3xr84WuqB9SMMqLB-T2FXDZGgf6gz6XuwkoIQGuFgAEW8xGSAxRr4Qnb2B9PJsjLeHqd82p_Wlx0llByqb25F2t7rc3VucTQRoxd9up-etGbdKVkHmy8CX9p9oRBCjdMcmjRF0Iser-A8ykMzXgSGI9sEurijlyMV8lUhLzsMx3GlyGkdZLZ2hd6bgAcHSbhCc2F87OFQhs_sw47B5WoYovvgn9_TWqjEutKk28O0BzSQwm8KqVXK1kv60R7aujrbKcZg"
              />
            </div>
          </div>
        </div>

        {/* Form Container */}
        <div className="lg:w-2/3 bg-surface-container-lowest p-8 md:p-16 shadow-[40px_40px_80px_-20px_rgba(0,23,75,0.06)] relative overflow-hidden">
          {/* Decorative geometry */}
          <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 -mr-16 -mt-16 rotate-45"></div>

          <form className="space-y-12" onSubmit={handleSubmit}>

            {/* Section 01: Kontaktní údaje */}
            <div>
              <div className="flex items-center gap-4 mb-8">
                <span className="text-[10px] font-bold text-white bg-on-surface-variant px-2 py-1 leading-none">01</span>
                <h2 className="text-sm font-bold uppercase tracking-widest text-on-surface-variant">Kontaktní údaje</h2>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-10">
                <div className="group relative">
                  <label className="text-[10px] uppercase font-bold text-on-surface-variant tracking-widest mb-2 block">Jméno a příjmení</label>
                  <input
                    name="jmeno"
                    className="w-full bg-transparent border-0 border-b-2 border-outline-variant/30 focus:ring-0 focus:border-primary py-3 transition-colors placeholder:text-outline-variant font-medium"
                    placeholder="Jan Novák"
                    type="text"
                  />
                </div>
                <div className="group relative">
                  <label className="text-[10px] uppercase font-bold text-on-surface-variant tracking-widest mb-2 block">Emailová adresa</label>
                  <input
                    name="email"
                    className="w-full bg-transparent border-0 border-b-2 border-outline-variant/30 focus:ring-0 focus:border-primary py-3 transition-colors placeholder:text-outline-variant font-medium"
                    placeholder="jan@novak.cz"
                    type="email"
                  />
                </div>
                <div className="group relative md:col-span-2">
                  <label className="text-[10px] uppercase font-bold text-on-surface-variant tracking-widest mb-2 block">Telefon</label>
                  <input
                    name="telefon"
                    className="w-full bg-transparent border-0 border-b-2 border-outline-variant/30 focus:ring-0 focus:border-primary py-3 transition-colors placeholder:text-outline-variant font-medium"
                    placeholder="+420 000 000 000"
                    type="tel"
                  />
                </div>
              </div>
            </div>

            {/* Section 02: Detaily zakázky */}
            <div>
              <div className="flex items-center gap-4 mb-8">
                <span className="text-[10px] font-bold text-white bg-on-surface-variant px-2 py-1 leading-none">02</span>
                <h2 className="text-sm font-bold uppercase tracking-widest text-on-surface-variant">Detaily zakázky</h2>
              </div>
              <div className="space-y-10">
                <div>
                  <label className="text-[10px] uppercase font-bold text-on-surface-variant tracking-widest mb-2 block">Vyberte produkt</label>
                  <select name="produkt" className="w-full bg-surface-container-low border-0 border-b-2 border-outline-variant/30 focus:ring-0 focus:border-primary py-4 px-4 transition-colors font-medium appearance-none">
                    <option>Letáky</option>
                    <option>Katalogy / brožury</option>
                    <option>Obaly</option>
                    <option>Slohy / firemní složky</option>
                    <option>Plakáty</option>
                    <option>Etikety</option>
                    <option>Bannery</option>
                    <option>Bloky</option>
                    <option>Knihy</option>
                    <option>Lepící pásky</option>
                    <option>Tašky s potiskem</option>
                    <option>PVC samolepky</option>
                    <option>Obálky</option>
                    <option>Reklamní puzzle</option>
                    <option>Textil s potiskem</option>
                    <option>Samolepící bločky</option>
                    <option>Kalendáře</option>
                    <option>Pivní tácky</option>
                    <option>Reklamní desky</option>
                    <option>Řezaná reklama</option>
                    <option>Prezentační stěny</option>
                    <option>Tapety</option>
                    <option>Tisk na plátno</option>
                    <option>Vizitky</option>
                    <option>Vlajky</option>
                    <option>Vstupenky</option>
                    <option>Individuální poptávka</option>
                  </select>
                </div>
                <div>
                  <label className="text-[10px] uppercase font-bold text-on-surface-variant tracking-widest mb-2 block">Specifikace zakázky</label>
                  <textarea
                    name="specifikace"
                    className="w-full bg-surface-container-low border-0 border-b-2 border-outline-variant/30 focus:ring-0 focus:border-primary py-4 px-4 transition-colors placeholder:text-outline-variant font-medium"
                    placeholder="Popište formát, papír, náklad a speciální požadavky (např. parciální lak)..."
                    rows="4"
                  ></textarea>
                </div>
              </div>
            </div>

            {/* Section 03: Tisková data */}
            <div>
              <div className="flex items-center gap-4 mb-8">
                <span className="text-[10px] font-bold text-white bg-on-surface-variant px-2 py-1 leading-none">03</span>
                <h2 className="text-sm font-bold uppercase tracking-widest text-on-surface-variant">Tisková data</h2>
              </div>
              <div className="border-2 border-dashed border-outline-variant/30 bg-surface-container-low/50 p-12 text-center group hover:border-primary transition-colors cursor-pointer">
                <input
                  className="hidden"
                  id="file-upload"
                  name="tiskovadata"
                  type="file"
                  accept=".pdf,.tif,.tiff,.ai"
                  onChange={(e) => setFileName(e.target.files[0]?.name ?? '')}
                />
                <label className="cursor-pointer" htmlFor="file-upload">
                  <span className="material-symbols-outlined text-4xl mb-4 block transition-colors"
                    style={{ color: fileName ? 'var(--color-primary, #004cca)' : undefined }}>
                    {fileName ? 'task' : 'cloud_upload'}
                  </span>
                  {fileName
                    ? <p className="text-sm font-bold text-primary truncate">{fileName}</p>
                    : <p className="text-sm font-bold text-on-surface">Přetáhněte soubor sem nebo klikněte</p>
                  }
                  <p className="text-[10px] uppercase tracking-widest text-on-surface-variant mt-2">PDF, TIFF, AI (max. 100MB)</p>
                </label>
              </div>
            </div>

            {/* Submit */}
            <div className="pt-8">
              <button
                className="poptavka-gradient-btn w-full py-6 text-sm font-black uppercase tracking-[0.3em] flex items-center justify-center gap-4 group overflow-hidden relative disabled:opacity-60"
                type="submit"
                disabled={loading}
              >
                <span className="relative z-10">{loading ? 'Odesílám…' : 'Odeslat poptávku'}</span>
                {!loading && <span className="material-symbols-outlined text-xl relative z-10 group-hover:translate-x-2 transition-transform">arrow_right_alt</span>}
              </button>

              {success && (
                <p className="text-center text-primary font-bold text-sm mt-6 uppercase tracking-widest">
                  Poptávka odeslána. Ozveme se do 24 hodin.
                </p>
              )}
              {error && (
                <p className="text-center text-error font-bold text-sm mt-6 uppercase tracking-widest">
                  Odeslání se nezdařilo. Zkuste to prosím znovu.
                </p>
              )}
              {!success && !error && (
                <p className="text-[10px] text-center text-on-surface-variant mt-6 uppercase tracking-widest">Odesláním souhlasíte se zpracováním osobních údajů.</p>
              )}
            </div>

          </form>
        </div>

      </div>
    </main>
  );
}

export default Poptavka;
