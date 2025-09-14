import { useContext } from 'react';
import { LangContext } from '../i18n';

export default function Home(){
  const { t } = useContext(LangContext);

  return (
    <section className="grid gap-6 md:grid-cols-2">
      <div className="card">
        <h1 className="text-4xl font-extrabold">
          {t.heroTitlePrefix} <span className="brand-text">Krystek</span> {t.heroRole}
        </h1>
        <p className="mt-2 text-slate-600 dark:text-slate-300">
          {t.heroText}
        </p>
        <div className="mt-4 flex gap-2 flex-wrap">
          <a className="btn btn-primary" href="https://www.linkedin.com/in/krystian-krasnod%C4%99bski-929975384/" target="_blank" rel="noreferrer">
            {t.ctaLinkedIn}
          </a>
          <a className="btn" href="https://github.com/KrystekInformatyk" target="_blank" rel="noreferrer">
            {t.ctaGitHub}
          </a>
          <a className="btn" href="https://discord.gg/u48tX724YD" target="_blank" rel="noreferrer">
            {t.ctaDiscord}
          </a>
        </div>
      </div>

      <aside className="card">
        <ul className="space-y-2">
          <li><strong>{t.city}:</strong> Warszawa</li>
          <li><strong>{t.email}:</strong> <a className="underline" href="mailto:kry.kra.02@wp.pl">kry.kra.02@wp.pl</a></li>
        </ul>
      </aside>
    </section>
  )
}
