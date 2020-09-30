import { heroes } from "../data/heroes";

export const getHeroesById = ( id ) => {
  
  return heroes.find( hero => hero.id === id) // find: regresa el primero que encuentra

}