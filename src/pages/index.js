import React from 'react'
import Link from 'gatsby-link'
import Card from '../components/Card'
import Section from '../components/Section'
import Wave from '../components/Wave'
import staticdata from '../../staticdata2.json'
import Cell from '../components/Cell'
import styled from 'styled-components'

const SectionCaption = styled.p`
  font-weight: 600;
  font-size: 1.5rem;
  text-transform: uppercase;
  color: #94A4BA;
  text-align: center;
`

const SectionCellGroup = styled.div`
  max-width: 800px;
  margin: 0 auto 100px
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-column-gap: 20px;
  padding: 0 20px;

  @media (max-width: 800px) {
    grid-template-columns: repeat(1, 1fr);
  }
`

const IndexPage = () => (
  <div>
    <div className="Hero">
      <div className="HeroGroup">
        <h1>Joy Sublimações</h1>
        <p>Eternizando seus melhores momentos. Visite nosso catálogo
          para se inspirar no seu próximo presente.
        </p>
        <Link to="/page-2/">Catálogo</Link>
        <div className="Logos">
          <img src={require('../images/logo-sketch.png')} width={'50'} alt=""/>
          <img src={require('../images/logo-figma.png')} width={'50'} alt=""/>
          <img src={require('../images/logo-studio.png')} width={'50'} alt=""/>
          <img src={require('../images/logo-framer.png')} width={'50'} alt=""/>
          <img src={require('../images/logo-react.png')} width={'50'} alt=""/>
          <img src={require('../images/logo-swift.png')} width={'50'} alt=""/>
        </div>
        <Wave />
      </div>
    </div>
    <div className="Cards">
      <h2>04 catálogos, mais em breve...</h2>
      <div className="CardGroup">
        <Card
          title={'Almofadas'}
          text={'20 fotos'}
          image={require('../images/wallpaper.jpg')}/>
        <Card
          title={'Chaveiros'}
          text={'12 fotos'}
          image={require('../images/wallpaper2.jpg')}/>
        <Card
          title={'Camisetas'}
          text={'08 fotos'}
          image={require('../images/wallpaper3.jpg')}/>
        <Card
          title={'Chinelos'}
          text={'37 fotos'}
          image={require('../images/wallpaper4.jpg')}/>
      </div>
    </div>
    <Section
      image={require('../images/wallpaper2.jpg')}
      logo={require('../images/logo-react.png')}
      title="Sublimação"
      text="A sublimação é a mudança do estado sólido para o estado gasoso, sem passar pelo estado líquido. O ponto de sublimação, assim como o ponto de ebulição e o ponto de fusão, é definido como o ponto no qual a pressão de vapor do sólido se iguala a pressão aplicada."
    />
    <SectionCaption>Trabalhamos com...</SectionCaption>
    <SectionCellGroup>
      {staticdata.cells.map(cell => (
        <Cell
          title={cell.title}
          image={cell.image}/>
      ))}
    </SectionCellGroup>
  </div>
)

export default IndexPage
