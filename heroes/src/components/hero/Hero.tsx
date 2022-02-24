import { Navigate, useParams } from 'react-router-dom';
import { getHeroById } from '../../selectors/getHeroById';

export const Hero = () => {
  const { heroeId } = useParams();
  const hero = getHeroById(heroeId);

  if (!hero) {
    return <Navigate to="/" />;
  }

  const imgPath = `/assets/heroes/${hero.id}.jpg`;

  return (
    <div className="row mt-5">
      <div className="col-4">
        <img src={imgPath} alt={hero.superhero} className="img-thumbnail" />
      </div>
      <div className="col-8">
        <h3>{hero.superhero}</h3>
        <ul className="list-group list-group-flush">
          <li className="list-group-item">
            <b>Alter ego:</b>
            {hero.alter_ego}
          </li>
        </ul>
      </div>
    </div>
  );
};
