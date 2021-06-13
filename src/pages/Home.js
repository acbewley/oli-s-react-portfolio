import React from 'react';
import img from '../images/me.jpeg'
import {Jumbo, JumboContent, JumboText, Img} from '../components/Jumbo';

const text = `Hello! My name is Oliver Bewley. I am a coder from the Atlanta area. I've recently graduated from the Georgia Tech Web Development Program on May 27th, 2021. I am well versed in HTML, CSS, JavaScript, React, MySql, and Mongo. My hobbies include; writing and listening to music, knitting, hiking, and playing exclusivly Monster Hunter: Rise.`

function Home() {
  return (
    <Jumbo title="About Me">
      <JumboContent>
        <Img src={img} alt='A photo of me playing guitar' />
        <JumboText text={text} />
      </JumboContent>
    </Jumbo>
  )
}

export default Home;