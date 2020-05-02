import { Link } from 'gatsby'
import React from 'react'
import './style.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCalendarAlt, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons'

const Experience = ({ where, when, city, description }) => (
  <div>
    <div className="text-primary title-experience">{where}</div>
    <div className="row">
      <div className="col">
         <FontAwesomeIcon icon={faCalendarAlt}/> {when}
      </div>
      <div className="col">
         <FontAwesomeIcon icon={faMapMarkerAlt}/> {city}
      </div>
    </div>
    <p className="text-muted">{description}</p>       
  </div>
)

export default Experience
