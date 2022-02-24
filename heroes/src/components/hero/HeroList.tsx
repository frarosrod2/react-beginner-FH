import React from 'react';
import { getHeroesByPublisher } from '../../selectors/getHeroesByPublisher';
import { HeroCard } from './HeroCard';
import { useMemo } from 'react';

export const HeroList = ({ publisher }: any) => {
  const heroes: any = useMemo(() => getHeroesByPublisher(publisher), [publisher]);
  return (
    <div className="row row-cols-1 row-cols-md-3 g-3 mt-2 animate__animated animate__fadeIn">
      {heroes.map((hero: any) => (
        <HeroCard key={hero.id} {...hero} />
      ))}
    </div>
  );
};
