import { useContext } from 'react';
import { LangContext } from '../i18n';

export default function ProjectCard({name, status, icon, links={}, files=[], note, author}) {
  const { t } = useContext(LangContext);
  const linkButtons = Object.entries(links);

  return (
    <article className="card">
      <div className="flex items-start gap-4">
        {icon && <img src={icon} alt="" className="w-14 h-14 rounded-lg object-cover border" />}
        <div className="flex-1">
          <div className="flex items-center gap-2">
            <h3 className="font-semibold text-lg">{name}</h3>
            {status && (
              <span className={`text-xs text-white px-2 py-1 rounded ${status.color}`}>
                {t.status[status.key]}
              </span>
            )}
          </div>
          {author && <p className="text-xs text-slate-500">{author}</p>}
          {note && <p className="mt-1 text-sm text-slate-400">{note}</p>}

          <div className="mt-3 flex flex-wrap gap-2">
            {linkButtons.map(([k, v]) => (
              <a key={k} className="btn" href={v} target="_blank" rel="noreferrer">
                {k === 'github' ? 'GitHub'
                 : k === 'curseforge' ? 'Curseforge'
                 : k === 'modrinth' ? 'Modrinth'
                 : k === 'nexusmods' ? 'Nexusmods'
                 : k === 'site' ? 'Strona'
                 : k === 'gdrive' ? 'Google Drive'
                 : k}
              </a>
            ))}
            {files && files.map((f,i)=>(
              <a key={i} className="btn btn-primary" href={f.path} download>
                Pobierz: {f.name}
              </a>
            ))}
          </div>
        </div>
      </div>
    </article>
  );
}
