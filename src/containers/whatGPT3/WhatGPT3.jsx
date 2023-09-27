import React from 'react'
import { Feature } from '../../components';
import './whatGPT3.css';
const WhatGPT3 = () => {
  return (
    <div className='gpt3__whatgpt3 section__margin' id='wgpt3'>
      <div className='gpt3__whatgpt3-feature'>
        <Feature title="What is GPT-3" text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum magni quos sed consequatur itaque? Vel, eum aperiam laboriosam cumque eaque praesentium tenetur nobis quo neque ea, quisquam, ratione tempore cum?"/>
      </div>
      <div className='gpt3__whatgpt3-heading'>
        <h1 className='gradient__text'>
          The possibilites are beyond your imagination
        </h1>
        <p>Explore the library</p>
      </div>
      <div className='gpt3__whatgpt3-container'>
        <Feature title="Chatbot"  text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum magni quos sed consequatur itaque?"/>

        <Feature title="Knowledgebase" text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum magni quos sed consequatur itaque?" />
        
        <Feature title="Education" text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum magni quos sed consequatur itaque?"/>
      </div>
    </div>
  )
}

export default WhatGPT3
