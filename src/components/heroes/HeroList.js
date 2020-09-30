import React, { useMemo } from 'react';
//import { getHeroesById } from '../../selectors/getHeroeById';
import { getHeroesByPublisher } from '../../selectors/getHeroesByPublisher';
import { HeroCard } from './HeroCard';


export const HeroList = ({ publisher }) => {

  const heroes = useMemo(() => getHeroesByPublisher( publisher ), [publisher])
  //const heroes = getHeroesByPublisher( publisher )

  return (
    <div className='card-columns container d-flex justify-content-center flex-wrap'>
      {
        heroes.map(hero => (
          <HeroCard 
            key={hero.id}
            {...hero} 
          /> 
        ))
      }
    </div >
  )
}
