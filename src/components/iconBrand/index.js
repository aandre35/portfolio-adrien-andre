import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import React from 'react'

import {
  faApple,
  faAws,
  faFacebook,
  faGithub,
  faHtml5,
  faJs,
  faNode,
  faPhp,
  faReact,
  faTwitter,
  faVuejs,
  faCss3Alt,
  faBootstrap,
  faNpm,
  faLinkedin
} from '@fortawesome/free-brands-svg-icons'
import './style.scss'

library.add(
  faApple,
  faAws,
  faFacebook,
  faGithub,
  faHtml5,
  faJs,
  faNode,
  faPhp,
  faReact,
  faTwitter,
  faVuejs,
  faCss3Alt,
  faBootstrap,
  faNpm, 
  faLinkedin,
)

const Icon = ({ name, className }) => (
  <div className={className} title={name}>
    <FontAwesomeIcon icon={['fab', name]} />
  </div>
)

export default Icon
