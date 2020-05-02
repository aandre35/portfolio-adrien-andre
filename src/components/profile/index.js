import { Link } from 'gatsby'
import React from 'react'
import './style.scss'
import IconSolid from 'components/iconSolid'
import IconBrand from 'components/iconBrand'
import Img from 'gatsby-image'

const Profile = ({profile}) => (
  <div class="card shadow rounded portrait">
    <div class="card-body">
      <Img fixed={profile} className="rounded-circle" />
      <h1 className="card-title">Adrien André</h1>
      <p className="lead text-muted">Engineer student @ ENSEEIHT.</p>
      <div className="row">
        <div className="col p-0">
          <a href="https://www.linkedin.com/in/adrien-andr%C3%A9/" >
            <IconBrand className="iconBis" title="Linkedin" name="linkedin"/>
          </a>
        </div>
        <div className="col p-0">
          <a href="https://github.com/aandre35" >
            <IconBrand className="iconBis" title="GitHub" name="github"/>
          </a>                      
        </div>
        <div className="col p-0">
          <a href="mailto:adrandre35@gmail.com" >
            <IconSolid className="iconBis" title="Mail" name="envelope"/>
          </a>                      
        </div>
      </div>
    </div>
  </div>
)

export default Profile
