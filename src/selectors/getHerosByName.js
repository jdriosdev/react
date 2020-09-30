const { heroes } = require("../data/heroes");

export const getHerosByName = (name='') => {

  if (name === '') {
    return []
  }

  return heroes.filter( hero => hero.superhero.toLocaleLowerCase().includes(name))

}