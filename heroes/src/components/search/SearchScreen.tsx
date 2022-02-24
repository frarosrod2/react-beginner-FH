import { useLocation, useNavigate } from 'react-router-dom';
import queryString from 'query-string';
import { useForm } from '../../hooks/useform';
import { HeroCard } from '../hero/HeroCard';
import { getHeroesbyName } from '../../selectors/getHeroesbyName';
import { useMemo } from 'react';

export const SearchScreen = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const { q = '' }: any = queryString.parse(location.search);
  const initialState = {
    searchText: q,
  };

  const [{ searchText }, handleChange]: any = useForm(initialState);

  const handleSearch = (event: any) => {
    event.preventDefault();
    navigate(`?q=${searchText}`);
  };

  const filterHeroes = useMemo(() => getHeroesbyName(q), [q]);

  return (
    <>
      <h1>Búsquedas</h1>
      <hr />
      <div className="row">
        <div className="col-5">
          <h4>Buscar</h4>
          <hr />
          <form onSubmit={handleSearch}>
            <input
              type="text"
              placeholder="Buscar un héroe"
              className="form-control"
              name="searchText"
              autoComplete="off"
              onChange={handleChange}
              value={searchText}
            />
            <button className="btn btn-outline-primary mt-1" type="submit">
              Buscar
            </button>
          </form>
        </div>
        <div className="col-7">
          <h4>Resultados</h4>
          <hr />
          {q === '' ? (
            <div className="alert alert-info">Buscar un héroe</div>
          ) : (
            filterHeroes.length === 0 && (
              <div className="alert alert-danger">No hay resultados: {q}</div>
            )
          )}
          {filterHeroes.map((hero) => (
            <HeroCard key={hero.id} {...hero} />
          ))}
        </div>
      </div>
    </>
  );
};
