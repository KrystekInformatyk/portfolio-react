import { useContext, useMemo, useState } from 'react'
import ProjectCard from '../components/ProjectCard'
import { PROJECTS, CATEGORY_KEYS } from '../data/projects'
import { LangContext } from '../i18n'

export default function Projects(){
  const { t } = useContext(LangContext);
  const [tab, setTab] = useState('all');

  const categories = useMemo(
    () => CATEGORY_KEYS.map(key => ({ key, name: t.categories[key] })),
    [t]
  );

  const items = useMemo(() => {
    if (tab === 'all') return PROJECTS;
    return PROJECTS.filter(p => p.category === tab);
  }, [tab]);

  return (
    <section>
      <h2 className="section-title">{t.nav.projects}</h2>

      <div className="flex flex-wrap gap-2 mb-4">
        {categories.map(c => (
          <button
            key={c.key}
            onClick={() => setTab(c.key)}
            className={`btn ${tab === c.key ? 'btn-primary' : ''}`}
            aria-pressed={tab === c.key}
          >
            {c.name}
          </button>
        ))}
      </div>

      {items.length === 0 ? (
        <p className="text-slate-600 dark:text-slate-300">Brak projektów w tej kategorii.</p>
      ) : (
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {items.map((p, i) => <ProjectCard key={i} {...p} />)}
        </div>
      )}
    </section>
  )
}
