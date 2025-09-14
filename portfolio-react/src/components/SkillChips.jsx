export default function SkillChips({items = []}) {
  return (
    <div className="flex flex-wrap gap-2">
      {items.map((s, i) => (
        <span
          key={i}
          className="px-3 py-1 rounded-full border text-sm
                     border-slate-200 bg-slate-100 text-slate-800
                     dark:border-slate-700 dark:bg-slate-800 dark:text-slate-100"
        >
          {s}
        </span>
      ))}
    </div>
  )
}
