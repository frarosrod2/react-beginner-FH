import { heroes } from '../data/heroes';

export const getHeroesbyName = (name = '') => {
  name = name.toLowerCase();

  if (name.length === 0) {
    return [];
  }
  return heroes.filter((hero) => hero.superhero.toLowerCase().includes(name));
};
