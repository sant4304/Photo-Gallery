import React from 'react'

const Card = (props) => {

    console.log(props)
  return (
    <div>
      <a href={props.ele.url} target='-blank'>
              <div className='h-60 w-60 overflow-hidden rounded-3xl'>
                <img className='h-full w-full object-cover ' src={props.ele.download_url} alt="" />
              </div>
              <h2 className='flex justify-center font-bold text-xl'>{props.ele.author}</h2>
            </a>
    </div>
  )
}

export default Card
