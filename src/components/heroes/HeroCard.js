import React from 'react'
import { Link } from 'react-router-dom'

import './styles.css'

export const HeroCard = ( {
  id,
  superhero,
  publisher,
  alter_ego,
  first_appearance,
  characters
} ) => {

  return (
    <div className="card animate__animated animate__fadeIn" style={{maxWidth: 250}}>
      <img src={`./assets/heroes/${id}.jpg`} className="card-img-top" alt={superhero} />
      <div className="card-img-overlay">
        <h5 className="card-title">{superhero}</h5>
        <p className="card-text">{alter_ego}</p>
        {
          (alter_ego !== characters)
          && <small className="card-text"> {characters}</small>
        }
        <span className="badge badge-secondary">{first_appearance}</span>
        <Link to={`./hero/${id}`} className="btn btn-dark" id='hero-details'>View Details</Link>
      </div>
    </div>
  )
}
