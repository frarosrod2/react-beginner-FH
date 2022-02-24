import { heroes } from '../data/heroes';

export const getHeroesByPublisher = (publisher: string) => {
  const validPublishers = ['DC Comics', 'Marvel Comics'];

  if (!validPublishers.includes(publisher)) {
    throw new Error(publisher + 'no válido');
  }
  return heroes.filter((hero) => hero.publisher === publisher);
};
