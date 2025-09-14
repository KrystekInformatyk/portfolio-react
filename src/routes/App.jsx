import { useEffect, useMemo, useState } from 'react'
import { Routes, Route, NavLink } from 'react-router-dom'
import Home from './Home'
import Projects from './Projects'
import About from './About'
import Contact from './Contact'
import ThemeLangSwitch from '../components/ThemeLangSwitch'
import { LangContext, STRINGS } from '../i18n'

const LinkItem = ({to, label}) => (
  <NavLink
    to={to}
    className={({isActive}) =>
      `px-3 py-2 rounded-lg ${isActive ? 'bg-slate-900 text-white dark:bg-slate-100 dark:text-slate-900' : 'hover:bg-slate-100 dark:hover:bg-slate-800'}`
    }
  >{label}</NavLink>
)

export default function App(){
  const [theme, setTheme] = useState('light');
  const [lang, setLang] = useState('pl');

  useEffect(()=>{
    const savedTheme = localStorage.getItem('theme') || (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
    setTheme(savedTheme);
    document.documentElement.classList.toggle('dark', savedTheme === 'dark');

    const savedLang = localStorage.getItem('lang') || 'pl';
    setLang(savedLang);
  },[]);

  const t = useMemo(()=> STRINGS[lang] ?? STRINGS.pl, [lang]);

  return (
    <LangContext.Provider value={{lang, t, setLang}}>
      <div className="min-h-screen">
        <header className="sticky top-0 z-50 backdrop-blur bg-white/70 dark:bg-slate-900/70 border-b border-slate-200 dark:border-slate-800">
          <div className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between gap-3">
            <div className="font-extrabold text-xl">KRYSTEK<span className="brand-text"> IT</span></div>

            <nav className="flex gap-2 items-center">
              <LinkItem to="/" label={t.nav.home}/>
              <LinkItem to="/projects" label={t.nav.projects}/>
              <LinkItem to="/about" label={t.nav.about}/>
              <LinkItem to="/contact" label={t.nav.contact}/>
              <a
                className="px-3 py-2 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800"
                href="https://discord.gg/u48tX724YD"
                target="_blank"
                rel="noreferrer"
              >
                {t.nav.discord}
              </a>
              <ThemeLangSwitch theme={theme} setTheme={setTheme}/>
            </nav>
          </div>
        </header>

        <main className="max-w-6xl mx-auto px-4 py-6 space-y-6">
          <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/projects" element={<Projects/>}/>
            <Route path="/about" element={<About/>}/>
            <Route path="/contact" element={<Contact/>}/>
          </Routes>
        </main>

        <footer className="py-8 text-center text-slate-500">
          © {new Date().getFullYear()} {t.footerBy} —
          <a className="underline mx-1" href="https://github.com/KrystekInformatyk" target="_blank" rel="noreferrer">GitHub</a>·
          <a className="underline mx-1" href="https://www.linkedin.com/in/krystian-krasnod%C4%99bski-929975384/" target="_blank" rel="noreferrer">LinkedIn</a>·
          <a className="underline mx-1" href="https://discord.gg/u48tX724YD" target="_blank" rel="noreferrer">Discord</a>
        </footer>
      </div>
    </LangContext.Provider>
  )
}
