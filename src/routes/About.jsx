import { useContext } from 'react';
import { LangContext } from '../i18n';
import SkillChips from '../components/SkillChips';

export default function About(){
  const { t, lang } = useContext(LangContext);

  const tech = ['React','Vite','Tailwind','Router','Git'];
  const soft = lang === 'pl'
    ? ['Komunikacja','Zespół','Rozwiązywanie problemów']
    : ['Communication','Teamwork','Problem solving'];

  return (
    <section className="space-y-6">
      <div className="card">
        <h2 className="section-title">{t.about.title}</h2>
        <p className="text-slate-300">{t.about.body}</p>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        <div className="card">
          <h3 className="font-semibold text-lg mb-2">{t.about.tech}</h3>
          <SkillChips items={tech} />
        </div>
        <div className="card">
          <h3 className="font-semibold text-lg mb-2">{t.about.soft}</h3>
          <SkillChips items={soft} />
        </div>
      </div>
    </section>
  );
}
