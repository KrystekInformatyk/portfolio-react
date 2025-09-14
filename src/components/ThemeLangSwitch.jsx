import { useContext } from 'react';
import { LangContext } from '../i18n';

export default function ThemeLangSwitch({ theme, setTheme }) {
  const { lang, setLang } = useContext(LangContext);

  const toggleTheme = () => {
    const next = theme === 'light' ? 'dark' : 'light';
    setTheme(next);
    localStorage.setItem('theme', next);
    document.documentElement.classList.toggle('dark', next === 'dark');
  };

  const switchTo = (code) => {
    localStorage.setItem('lang', code);
    setLang(code);
  };

  return (
    <div className="flex items-center gap-2">
      <button className="btn" onClick={toggleTheme}>
        {theme === 'dark' ? '☾ Dark' : '☀ Light'}
      </button>
      <div className="flex overflow-hidden rounded-xl border border-slate-300 dark:border-slate-700">
        <button
          className={`px-3 py-2 ${lang === 'pl' ? 'bg-slate-200 dark:bg-slate-800' : ''}`}
          onClick={() => switchTo('pl')}
        >
          PL
        </button>
        <button
          className={`px-3 py-2 ${lang === 'en' ? 'bg-slate-200 dark:bg-slate-800' : ''}`}
          onClick={() => switchTo('en')}
        >
          EN
        </button>
      </div>
    </div>
  );
}
