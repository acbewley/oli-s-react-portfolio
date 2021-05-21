import React from 'react';

export function Jumbo({ title, children }) {
  return (
    <div className="container" id="jumbo" style={{ marginTop: '20px', backgroundColor: 'white' }}>
      <div className='jumbotron'>
        <h1 className='display-4'>{title}</h1>
        <hr className="my-4" />
        {children}
      </div>
    </div>
  )
}

export function JumboContent({children}) {
  return (
    <div className='container row'>
      {children}
    </div>
  )
}

export function JumboText(props) {
  const { text } = props

  return (
    <p className='col-9'>{text}</p>
  )
}

export function Img(props) {
  const {src, alt} = props

  return (
    <img className='col-3' src={src} alt={alt} title={alt} style={{padding: '20px'}} />
  )
}