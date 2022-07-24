import React, { Component } from 'react'
import styled from 'styled-components'
//import Skill from '../Data/skills.txt'


const Skills = () => {
    const Skill = [
        'Web Development',
        'Software Development',
        'Machine Learning',
        'Deep Learning',
        'Investment Valuation',
        'Database',
        'Web Scrapping',
        'Data Analysis',
        'Git',
        'Flask',
        'Express.JS',
        'React',
        'Javascript',
        'Python',
      ]
  if (!Skill.length) return null

  return (
    <Styles>
        <section className='section-skills' id='skills'>
        <h2 className='section__title'>Skills</h2>
        <ul className='skills__list'>
            {Skill.map((skil) => (
            <li className='skills__list-item btn btn--plain'>
                {skil}
            </li>
            ))}
        </ul>
        </section>
    </Styles>
  )
}

export default Skills
const Styles = styled.div`
.section-skills{
    max-width: 100%;
    margin-top: 50px;
    margin-bottom:70px;
}
.skills__list {
    max-width: 450px;
    width: 95%;
    margin: 0 auto;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
  }
  
  .skills__list-item {
    margin: 0.35em;
  }
  .section__title{
      font-weight: 800;
      text-align:center;
      margin-bottom:30px;
  }
  .btn{
      border: 1px solid black;
  }
`