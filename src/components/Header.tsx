import { useEffect, useMemo } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { useAppStore } from '../stores/useAppStore';
const Header = () => {
  const { pathname } = useLocation();
  const isHome = useMemo(() => pathname === '/', [pathname]);
  const fetchCategories = useAppStore((state) => state.fetchCategories);

  useEffect(() => {}, []);
  fetchCategories();
  return (
    <header
      className={isHome ? 'bg-header bg-center bg-cover' : 'bg-slate-800'}
    >
      <div className="mx-auto container px-5 py-32">
        <div className="flex justify-between items-center">
          <div>
            <img className="w-32" src="/logo.svg" alt="logo" />
          </div>
          <nav className="flex gap-4">
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive
                  ? 'text-orange-500 uppercase font-bold'
                  : 'text-white uppercase font-bold'
              }
            >
              Inicio
            </NavLink>
            <NavLink
              to="/favoritos"
              className={({ isActive }) =>
                isActive
                  ? 'text-orange-500 uppercase font-bold'
                  : 'text-white uppercase font-bold'
              }
            >
              Favoritos
            </NavLink>
          </nav>
        </div>
        {isHome && (
          <form className="w-full md:2-1/2 lg:w-1/3 bg-orange-400 my-16 p-10 rounded-lg shadow-md space-y-6">
            <div className="space-y-4">
              <label
                className="block text-white uppercase font-extrabold text-lg"
                htmlFor="ingredients"
              >
                Nombre o ingredientes:
              </label>
              <input
                className="p-3 w-full rounded-lg focus:outline-none"
                placeholder="Nombre o ingrediente. Ej: Vodka, Tequila o Café"
                id="ingredients"
                type="text"
                name="ingredients"
              />
            </div>
            <div className="space-y-4">
              <label
                className="block text-white uppercase font-extrabold text-lg"
                htmlFor="category"
              >
                Categoria:
              </label>
              <select
                className="p-3 w-full rounded-lg focus:outline-none"
                id="category"
                name="category"
              >
                <option value="">Seleccione la categoría</option>
              </select>
            </div>
            <input
              type="submit"
              value="Buscar recetas"
              className="cursor-pointer bg-orange-700 hover:bg-orange-900 text-white font-extrabold w-full rounded-lg uppercase py-2"
            />
          </form>
        )}
      </div>
    </header>
  );
};

export default Header;
