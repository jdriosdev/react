import React, { useMemo } from 'react'
import { Redirect, useParams } from 'react-router-dom'
import { getHeroesById } from '../../selectors/getHeroeById';


export const HeroScreen = ({ history }) => {

  const { heroeId } = useParams();

  const hero = useMemo(() => getHeroesById(heroeId), [heroeId])

  //const hero = getHeroesById(heroeId);

  if ( !hero ) {
    return <Redirect to='/' />
  }

  const handleReturn = () => {

    if( history.length <= 2 && publisher === 'DC Comics') {
      history.push('/dc')
    } else if ( history.length <= 2 && publisher === 'Marvel Comics'){
      history.push('/marvel') }
    else {
      history.goBack()
    }

  }

  //'DC Comics', 'Marvel Comics'

  const {superhero,
    publisher,
    alter_ego,
    first_appearance,
    characters} = hero;

  return (
    <div className='row mt-5'>
      <div className='col-4'>
        <img 
          src={`../assets/heroes/${heroeId}.jpg`}
          alt={superhero}
          className='img-thumbnail animate__animated animate__fadeInLeft'
        />
      </div>
      <div className='col-8'>
        <h3> {superhero}</h3>
        <ul className='list-group list-group-flush'>
          <li className='list-group-item'>
            <b> Alter ego:</b> {alter_ego}
          </li>
          <li className='list-group-item'>
            <b> Publisher:</b> {publisher}
          </li>
          <li className='list-group-item'>
            <b> First appereance:</b> {first_appearance}
          </li>
        </ul>

        <h5> <b>Characters</b> </h5>
        <p> {characters} </p>

        <button
          className='btn btn-outline-dark'
          onClick={handleReturn}
        >
          Return
        </button>

      </div>
    </div> 
  )
}
