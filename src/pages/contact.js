import React from 'react';
import {Jumbo, JumboContent, JumboText, Link} from '../components/Jumbo';

function Contact() {
  return (
    <Jumbo title='Contact Me'>
      <JumboContent>
        <Link href="https://github.com/acbewley">GitHub</Link>
        <Link href="https://www.linkedin.com/in/aaron-oliver-bewley-11893a206/">LinkedIn</Link>
        <Link href="mailto:acbewley13@gmail.com">Email</Link>
        <p>Phone Number: (678)-471-2425</p>
      </JumboContent>
    </Jumbo>
  )
}

export default Contact;