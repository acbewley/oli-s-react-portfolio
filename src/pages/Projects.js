import React from 'react';
import esImg from '../images/electric-sheep.png';
import sypImg from '../images/shop-your-pantry.png';
import pgImg from '../images/password-generator.png';
import qImg from '../images/quiz.png';
import sImg from '../images/scheduler.png';
import gImg from '../images/gardenista.png';
import { Card, Jumbo, JumboContent } from '../components/Jumbo/index';

function Projects() {
  return (
    <Jumbo title='Some of my projects'>
      <JumboContent>
        <Card 
        title='Electric Sheep'
        img={esImg}
        link='https://banana-crumble-13553.herokuapp.com/'
        repo='https://github.com/acbewley/young-vipers-electric-sheep'
        />
        <Card 
        title='Shop Your Pantry'
        img={sypImg}
        link='https://caitie-gorham.github.io/shopYourPantry/'
        repo='https://github.com/caitie-gorham/shopYourPantry'
        />
      </JumboContent>
      <JumboContent>
        <Card 
        title='Password Generator'
        img={pgImg}
        link='https://acbewley.github.io/js-password-generator/'
        repo='https://github.com/acbewley/js-password-generator'
        />
        <Card 
        title='Gardenista'
        img={gImg}
        link='https://github.com/acbewley/project-3-gardenista'
        repo='https://github.com/acbewley/project-3-gardenista'
        />
      </JumboContent>
      <JumboContent>
        <Card 
        title='Coding Quiz'
        img={qImg}
        repo='https://github.com/acbewley/coding-quiz'
        link='https://acbewley.github.io/coding-quiz/'
        />
        <Card 
        title='Dynamic Scheduler'
        img={sImg}
        link='https://acbewley.github.io/color-coded-super-duper-scheduler/'
        repo='https://github.com/acbewley/color-coded-super-duper-scheduler'
        />
      </JumboContent>
    </Jumbo>
  )
}

export default Projects;