// Zwraca ścieżkę z poprawną bazą (np. /portfolio-react/…)
export const asset = (p) => `${import.meta.env.BASE_URL}${String(p).replace(/^\//, '')}`;
