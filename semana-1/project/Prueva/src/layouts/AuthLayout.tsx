import { Link, Outlet } from 'react-router'

export const AuthLayout = () => {
  return (
    <div>
        <header className="bg-slate-900 w-full h-10 flex items-center justify-center gap-4">
            <Link to="movies" className="bg-white rounded">Peliculas Originales</Link>
            <Link to="/" className="bg-white rounded">Regresar</Link>
            <Link to="/auth" className="bg-white rounded">Login</Link>
        </header>
        <Outlet/>
        <footer className="bg-amber-700 w-full h-10"></footer>
    </div>
  )
}
