import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import React from 'react'

import {
  faEnvelope
} from '@fortawesome/free-solid-svg-icons'
import './style.scss'

library.add(
  faEnvelope
)

const Icon = ({ name, className }) => (
  <div className={className} title={name}>
    <FontAwesomeIcon icon={['fas', name]} />
  </div>
)

export default Icon
