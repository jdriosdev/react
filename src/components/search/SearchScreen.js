import React, { useMemo }  from 'react'
import queryString from 'query-string';

import { useLocation } from 'react-router-dom';
import { useForm } from '../../hooks/useForm';
import { HeroCard } from '../heroes/HeroCard';
import { getHerosByName } from '../../selectors/getHerosByName';



export const SearchScreen = ({ history }) => {
  //location: lee la url
  const location = useLocation()
  // qyeryString: parsea el url= q?juan => {q = juan}
  const {q =''} = queryString.parse(location.search)

  //coustom hook: se usa en el input
  //agarra el valor de mi input
  const [formValues, handleInputChange] = useForm({
    searchText: q    
  })
  // desestructuro con el nombre de mi input
  const { searchText } = formValues;
  
  //useMemo: memoriza mi query (puedo ir atras y adelante)
  const heroesFiltered =  useMemo(() => getHerosByName(q), [q])
  //const heroesFiltered = getHerosByName(searchText);

  const handleSearch = (e) => {
    e.preventDefault()

    history.push(`?q=${searchText}`)
    
  }

  return (
    <div>
      <h1 className=''>Search a hero</h1>
      <hr />

      <div className='row'>
        <div className='col-5'>
          <h4 className='mb-4'>Marvel or DC?</h4>

          <form onSubmit={handleSearch}>
            <input 
              type='text'
              name='searchText'
              placeholder='Find your hero'
              className='form-control'
              value={searchText}
              onChange={handleInputChange}
              autoComplete='off'
            />
            <button 
              type='submit'
              className='btn mt-1 btn-block btn-outline-dark'
            >
              Search
            </button>  
          </form>

        </div>



        <div className='col-7'>
          <h4 className='mb-4'>Results</h4>

          {
            (q === '') && 
            <div
              className='alert alert-info'
            >
              Search a Hero
            </div>  
          }
          {
            (q !== '' && heroesFiltered.length === 0) && 
            <div
              className='alert alert-danger'
            >
              Hero {q} not found
            </div>  
          }

          {
            heroesFiltered.map( hero => (
              <HeroCard 
                key={hero.id}
                {...hero}
              />
            ))
          }

        </div>
      </div>

    </div>
  )
}
