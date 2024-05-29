import React from 'react'

function ProjectInfo({data}) {
  return (
    <div className='Other-info'>
      <img src={data.imag}></img>
      <div className='Other-info-back'>
      <h3>{data.name}</h3>
      <p>{data.description}</p>
      <a href={data.link} target="_blank"><button>View</button></a>
      </div>
    </div>
  )
}

export default ProjectInfo
