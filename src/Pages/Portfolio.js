import { Email, Facebook, LinkedIn, LocationCity, Phone, Twitter, WhatsApp } from '@mui/icons-material'
import { Divider } from '@mui/material'
import React from 'react'
import { Button } from 'react-bootstrap'
import MenuCustom from '../components/menu'
import aiscripter from '../assets/aiscripter.jpg'
import songwords from '../assets/songwords.jpg';

export default function Portfolio() {
  return (
    <div className='base'>
      <span className='title'>Showcase of <span className='name'>Projects</span></span>
      <div className='container'>
        <div className='row'>
          {itemData.map((item) => {
            return (
              <div className='col-12 col-lg-6'>
                <div className='project'>
                  <div><img width={'100%'} src={item.img} /></div>
                  <div>
                    <span className='project-title'>{item.title}</span>
                    <a href={item.url} target="_blank" className='project-type'>Visit website</a>
                    <div className='project-desc'>{item.description}</div>
                    <div className='project-skills'>
                      <div className='d-flex rowws'>
                        {item.skills.map((sk) => {
                          return (
                            <span key={sk} className='skill'>{sk}</span>
                          )
                        })}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
      <MenuCustom />
    </div>
  )
}



const itemData = [
  {
    img: aiscripter,
    title: 'AISCPITER',
    description: `AIScripter is an innovative project designed to simplify the process 
    of generating scripts for short videos.`,
    skills: ['REACT JS', 'NODE JS', 'NEXT JS', 'MATERIAL UI', 'AI', 'OPENAI'],
    url: 'https://aiscripter-ochre.vercel.app/'
  },
  {
    img: songwords,
    title: 'SONG WORDS',
    description: `Web application that allow users to generate 
    automatically quotes from their favorites songs`,
    skills: ['NEXT JS', 'MATERIAL UI', 'AI', 'OPENAI'],
    url: 'https://songwords.xyz'
  },
  {
    img: songwords,
    title: 'INLIVE STREAM',
    description: `An online streaming platform that connects artist and
    their fan base. `,
    skills: ['MATERIAL UI', 'React js', 'Redux', 'Redux-saga'],
    url: 'https://inlive-stream.com'
  },
];