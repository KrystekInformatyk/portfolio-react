import { useContext } from 'react';
import { LangContext } from '../i18n';

export default function Contact(){
  const { t } = useContext(LangContext);

  const onSubmit = (e) => {
    e.preventDefault();
    alert('Dziękuję! Napisz do mnie: kry.kra.02@wp.pl');
  };

  const inputCls =
    "mt-1 w-full rounded-xl border px-3 py-2 " +
    "border-slate-300 bg-white text-slate-900 placeholder-slate-400 " +
    "dark:border-slate-700 dark:bg-slate-900 dark:text-slate-100 dark:placeholder-slate-500";

  return (
    <section className="card">
      <h2 className="section-title">{t.contact.title}</h2>
      <form onSubmit={onSubmit} className="grid gap-4 md:grid-cols-2">
        <label className="block">
          {t.contact.name}
          <input required className={inputCls} aria-label={t.contact.name} placeholder={t.contact.name}/>
        </label>
        <label className="block">
          {t.contact.email}
          <input type="email" required className={inputCls} aria-label={t.contact.email} placeholder={t.contact.email}/>
        </label>
        <label className="block md:col-span-2">
          {t.contact.message}
          <textarea rows="6" required className={inputCls} aria-label={t.contact.message} placeholder={t.contact.message}/>
        </label>
        <button type="submit" className="btn btn-primary md:col-span-2 w-max">
          {t.contact.send}
        </button>
      </form>
    </section>
  );
}
