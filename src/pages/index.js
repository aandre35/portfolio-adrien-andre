import { graphql } from 'gatsby'
import get from 'lodash/get'
import Img from 'gatsby-image'
import React from 'react'
import { siteMetadata } from '../../gatsby-config'
import Layout from 'components/layout'
import Meta from 'components/meta'
import IconBrand from 'components/iconBrand'
import Experience from 'components/experience'
import CadreProfile from 'components/profile'

class Profile extends React.Component {
  render() {
    const { location, data } = this.props
    const profile = get(data, 'profile.childImageSharp.fixed')
    const work1 = get(data, 'work1.childImageSharp.sizes')
    const work2 = get(data, 'work2.childImageSharp.sizes')
    const back1 = get(data, 'back1.childImageSharp.sizes')
    const back2 = get(data, 'back2.childImageSharp.sizes')

    return (
      <Layout location={location}>
        <Meta site={siteMetadata} title="Profile" />
        <div>

          {/* Profile */}
          <section >
            <div className="container align-items-center">  
              <div className="row ">
                <div className="col-md-4 text-center">
                  <CadreProfile profile={profile}/>
                </div>
                <div className="col-md-8">
                  <div className="intro pt-3">
                    <h2>About me</h2>
                      <p>
                        Hi! I'm Adrien and I'm studying computer science in ENSEEIHT Toulouse, France.<br/>
                        I specialize in Artificial intelligence. I also like developing websites.<br/>
                        If I had to describe myself I would say that I am ambitious, passionate and a tech lover.
                      </p>
                    <h2>Interests</h2>
                      <ul>
                        <li>Data Science.</li>
                        <li>Big Data.</li>
                        <li>IA (Machine Learning, Deep Learning).</li>
                      </ul>
                  </div>
                </div>
              </div>
              
            </div>
          </section> 
          
          {/* Work Experience & Education*/}
          <section>
          <div className="container">
              <div className ="row">
                <div className="col-lg-6 mb-3">
                  <div class="card card-exp">
                    <div class="card-body">
                      <h3 className="card-title">Work Experience</h3>
                      <Experience 
                        where="IRIT"
                        when="Summer 2020"
                        city="Toulouse, France"
                        description="Deep Learning Intern"
                      />
                      <Experience 
                        where="N7Consulting"
                        when="2020"
                        city="Toulouse, France"
                        description="FullStack web development consultant."
                      />
                      <Experience 
                        where="Eiffage Energie Systèmes"
                        when="Summer 2019"
                        city="Paris, France"
                        description="Internship technician in industrial computing."
                      />
                      <Experience 
                        where="Complétude"
                        when="2019 - 2020"
                        city="Toulouse, France"
                        description="Private teacher of Mathematics."
                      />
                    </div>
                  </div>
                </div>
                <div className="col-lg-6 mb-3">
                  <div class="card card-exp">
                    <div class="card-body">
                      <h3 className="card-title">Education</h3>
                      <Experience 
                        where="INP-ENSEEIHT"
                        when="2018 - 2021"
                        city="Toulouse, France"
                        description="Computer Science Degree."
                      />
                      <Experience 
                        where="University of Stavanger"
                        when="2020"
                        city="Stavanger, Norway"
                        description="One semester with Machine Learning & Data Science courses."
                      />
                      <Experience 
                        where="Toulouse Tech"
                        when="2019 - 2020"
                        city="Toulouse, France"
                        description="Data Science & Big Data Certification."
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          
          {/* Web Development skills */}
          <section className="bg-primary text-white text-center">
            <div className="container">
              <div className="row">
                <div className="col-lg-12">
                  <h2 className="section-heading">WEB DEVELOPMENT SKILLS</h2>
                  <hr className="border-white" />
                </div>
              </div>
            </div>
            <div className="container">
              <div className="row justify-content-md-center">
                <div className="col-lg-3 col-6">
                  <IconBrand className="icon" title="HTML" name="html5" />
                </div>
                <div className="col-lg-3 col-6">
                  <IconBrand className="icon" title="CSS" name="css3-alt" />
                </div>
                <div className="col-lg-3 col-6">
                  <IconBrand className="icon" title="JavaScript" name="js" />
                </div>
                <div className="col-lg-3 col-6">
                  <IconBrand className="icon" title="React.js" name="react" />
                </div>
              </div>
              <div className="row justify-content-md-center">
                <div className="col-lg-3 col-6 ">
                  <IconBrand className="icon" title="Bootstrap" name="bootstrap" />
                </div>              
                <div className="col-lg-3 col-6">
                  <IconBrand className="icon" title="Node.js" name="node" />
                </div>
                <div className="col-lg-3 col-6">
                  <IconBrand className="icon" title="npm" name="npm" />
                </div>
                <div className="col-lg-3 col-6 ">
                  <IconBrand className="icon" title="GitHub" name="github" />
                </div>
              </div>
            </div>
          </section>

          <section id="features" className="text-center jumboimage">
            <Img sizes={back1} className="cover-image" />
            <div className="container">
              <div className="row cover-over">
                <div className="col-md-12 text-left">
                  <h2 className="section-heading">Features</h2>
                  <p>
                    I'm a front-end engineer in Japan 🗼
                    <br />
                    Used to be a designer of furniture and architecture.
                    <br />
                  </p>
                  <li>2013 ~ 2017: J-CAST News</li>
                  <li>2017 ~ : Recruit Lifestyle</li>
                </div>
              </div>
            </div>
          </section>

          <section
            className="bg-primary text-white text-center color-inverse"
            id="concept"
          >
            <div className="container">
              <div className="row">
                <div className="col-lg-12">
                  <h2 className="section-heading">WORKS</h2>
                  <hr className="border-white" />
                </div>
              </div>
            </div>
            <div className="container">
              <div className="row">
                <div className="col-md-6 slide-left" data-emergence="hidden">
                  <Img sizes={work1} />
                  <p>Yomu</p>
                </div>
                <div className="col-md-6 slide-right" data-emergence="hidden">
                  <Img sizes={work2} />
                  <p>Detector</p>
                </div>
              </div>
            </div>
          </section>

          <section id="repos">
            <div className="container">
              <div className="row align-items-center">
                <div className="col-md-12 text-left">
                  <h2 className="section-heading">Repositories</h2>
                  <p>
                    リポジトリは
                    <a href="https://github.com/jaxx2104/">こちら</a>
                  </p>
                </div>
              </div>
            </div>
          </section>
          <section id="features" className="jumboimage">
            <Img sizes={back2} className="cover-image" />
            <div className="container">
              <div className="row cover-over">
                <div className="col-md-12 text-left">
                  <h2 className="section-heading">Degree Works</h2>
                  <p>
                    過去の制作は
                    <a className="text-white" href="https://old.jaxx2104.info/">
                      こちら
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </section>
        </div>
      </Layout>
    )
  }
}

export default Profile

export const query = graphql`
  query ProfilePageQuery {
    profile: file(name: { eq: "Adrien" }) {
      childImageSharp {
        fixed(width: 120, height: 120) {
          ...GatsbyImageSharpFixed_withWebp
        }
      }
    }
    work1: file(name: { eq: "work1" }) {
      childImageSharp {
        sizes(quality: 100) {
          ...GatsbyImageSharpSizes_withWebp
        }
      }
    }
    work2: file(name: { eq: "work2" }) {
      childImageSharp {
        sizes(quality: 100) {
          ...GatsbyImageSharpSizes_withWebp
        }
      }
    }
    work3: file(name: { eq: "work3" }) {
      childImageSharp {
        sizes(quality: 100) {
          ...GatsbyImageSharpSizes_withWebp
        }
      }
    }
    back1: file(name: { eq: "back1" }) {
      childImageSharp {
        sizes(quality: 100) {
          ...GatsbyImageSharpSizes_withWebp
        }
      }
    }
    back2: file(name: { eq: "back2" }) {
      childImageSharp {
        sizes(quality: 100) {
          ...GatsbyImageSharpSizes_withWebp
        }
      }
    }
  }
`
