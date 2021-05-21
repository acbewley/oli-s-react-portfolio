import React from 'react';

export function Jumbo({ title, children }) {
  return (
    <div className="container" id="jumbo" style={{ marginTop: '20px' }}>
      <div className='jumbotron'>
        <h1 className='display-4'>{title}</h1>
        <hr className="my-4" />
        {children}
      </div>
    </div>
  )
}

export function JumboContent({ children }) {
  return (
    <div className='container row'>
      {children}
    </div>
  )
}

export function Card(props) {
  const {repo, img, title, link} = props

  return (
    <div className="card col-md-5" style={{ width: "18rem", margin: '20px' }}>
      <img src={img} className="card-img-top" alt={title} />
      <div className="card-body">
        <h5 className="card-title"><a href={link} target='_blank'>{title}</a></h5>
        <a href={repo} target='_blank'>GitHub repository</a>
      </div>
    </div>
  )
}

export function JumboText(props) {
  const { text } = props

  return (
    <p className='col-md-9'>{text}</p>
  )
}

export function Img(props) {
  const { src, alt } = props

  return (
    <img className='col-md-3' src={src} alt={alt} title={alt} style={{ padding: '20px' }} />
  )
}

export function Link({ href, children }) {
  return (
    <a className='col-9' href={href} target='_blank'>{children}</a>
  )
}