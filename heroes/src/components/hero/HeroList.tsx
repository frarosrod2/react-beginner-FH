import React from 'react';
import { getHeroesByPublisher } from '../../selectors/getHeroesByPublisher';
import { HeroCard } from './HeroCard';

export const HeroList = ({ publisher }: any) => {
  const heroes: any = getHeroesByPublisher(publisher);

  return (
    <div className="row row-cols-1 row-cols-md-3 g-3 mt-2">
      {heroes.map((hero: any) => (
        <HeroCard key={hero.id} {...hero} />
      ))}
    </div>
  );
};
