import { useMemo } from 'react';
import { Navigate, useParams, useNavigate } from 'react-router-dom';
import { getHeroById } from '../../selectors/getHeroById';

export const Hero = () => {
  const { id } = useParams();
  const hero = useMemo(() => getHeroById(id), [id]);

  const navigate = useNavigate();

  const handleReturn = () => {
    navigate(-1);
  };

  if (!hero) {
    return <Navigate to="/" />;
  }

  const imgPath = `/assets/heroes/${hero.id}.jpg`;

  return (
    <div className="row mt-3">
      <div className="col-4">
        <img
          src={imgPath}
          alt={hero.superhero}
          className="img-thumbnail animate__animated animate__fadeInLeft"
        />
      </div>
      <div className="col-8">
        <h3>{hero.superhero}</h3>
        <ul className="list-group list-group-flush">
          <li className="list-group-item">
            <b>Alter ego:</b>
            {hero.alter_ego}
            <b>Publisher:</b>
            {hero.publisher}
            <b>First appearance:</b>
            {hero.first_appearance}
          </li>
        </ul>

        <h5 className="mt-3">Characters</h5>
        <p>{hero.characters}</p>
        <button className="btn btn-outline-info" onClick={handleReturn}>
          Regresar
        </button>
      </div>
    </div>
  );
};
